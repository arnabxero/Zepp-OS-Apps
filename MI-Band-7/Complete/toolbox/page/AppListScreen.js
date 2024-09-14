/**
 * Build with ZMake tool
 */

(() => {
  // ../lib/FsUtils.js
  var FsUtils = class {
    static writeText(fn, data) {
      if (!fn.startsWith("/storage")) fn = FsUtils.fullPath(fn);
      try {
        hmFS.remove(fn);
      } catch (e) {}
      const buffer = FsUtils.strToUtf8(data);
      const f = FsUtils.open(fn, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.write(f, buffer, 0, buffer.byteLength);
      hmFS.close(f);
    }
    static read(fn, limit = false) {
      if (!fn.startsWith("/storage")) fn = FsUtils.fullPath(fn);
      const [st, e] = FsUtils.stat(fn);
      const f = FsUtils.open(fn, hmFS.O_RDONLY);
      const size = limit ? limit : st.size;
      const data = new ArrayBuffer(size);
      hmFS.read(f, data, 0, size);
      hmFS.close(f);
      return data;
    }
    static fetchTextFile(fn, limit = false) {
      const data = FsUtils.read(fn, limit);
      const view = new Uint8Array(data);
      let str = "";
      return FsUtils.Utf8ArrayToStr(view);
    }
    static stat(path) {
      path = FsUtils.fixPath(path);
      return hmFS.stat_asset(path);
    }
    static fixPath(path) {
      if (path.startsWith("/storage")) {
        const statPath = "../../../" + path.substring(9);
        return statPath;
      }
      return path;
    }
    static open(path, m) {
      if (path.startsWith("/storage")) {
        const statPath = "../../../" + path.substring(9);
        return hmFS.open_asset(statPath, m);
      }
      return hmFS.open(path, m);
    }
    static fetchJSON(fn) {
      const text = FsUtils.fetchTextFile(fn);
      return JSON.parse(text);
    }
    static copy(source, dest) {
      try {
        hmFS.remove(dest);
      } catch (e) {}
      const buffer = FsUtils.read(source);
      const f = FsUtils.open(dest, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.write(f, buffer, 0, buffer.byteLength);
      hmFS.close(f);
    }
    static isFolder(path) {
      const [st, e] = FsUtils.stat(path);
      return (st.mode & 32768) == 0;
    }
    static getSelfPath() {
      if (!FsUtils.selfPath) {
        const pkg = hmApp.packageInfo();
        const idn = pkg.appId.toString(16).padStart(8, "0").toUpperCase();
        return "/storage/js_" + pkg.type + "s/" + idn;
      }
      return FsUtils.selfPath;
    }
    static fullPath(path) {
      return FsUtils.getSelfPath() + "/assets/" + path;
    }
    static rmTree(path) {
      if (!path.startsWith("/storage")) path = FsUtils.fullPath(path);
      const [files, e] = hmFS.readdir(path);
      for (let i in files) {
        FsUtils.rmTree(path + "/" + files[i]);
      }
      hmFS.remove(path);
    }
    static copyTree(source, dest, removeSource) {
      if (!source.startsWith("/storage")) source = FsUtils.fullPath(source);
      if (!dest.startsWith("/storage")) dest = FsUtils.fullPath(dest);
      if (!FsUtils.isFolder(source)) {
        console.log("copy", source, "->", dest);
        FsUtils.copy(source, dest);
      } else {
        const [files, e] = hmFS.readdir(source);
        hmFS.mkdir(dest);
        for (let i in files) {
          FsUtils.copyTree(
            source + "/" + files[i],
            dest + "/" + files[i],
            removeSource
          );
        }
      }
      if (removeSource) {
        console.log("Delete", source);
        hmFS.remove(source);
      }
    }
    static sizeTree(path) {
      if (!path.startsWith("/storage")) path = FsUtils.fullPath(path);
      const [files, e] = hmFS.readdir(path);
      let value = 0;
      for (let fn in files) {
        const file = path + "/" + files[fn];
        const statPath = "../../../" + file.substring(9);
        const [st, e2] = hmFS.stat_asset(statPath);
        value += st.size ? st.size : FsUtils.sizeTree(file);
      }
      return value;
    }
    static strToUtf8(str) {
      var utf8 = [];
      for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 128) utf8.push(charcode);
        else if (charcode < 2048) {
          utf8.push(192 | (charcode >> 6), 128 | (charcode & 63));
        } else if (charcode < 55296 || charcode >= 57344) {
          utf8.push(
            224 | (charcode >> 12),
            128 | ((charcode >> 6) & 63),
            128 | (charcode & 63)
          );
        } else {
          i++;
          charcode =
            65536 + (((charcode & 1023) << 10) | (str.charCodeAt(i) & 1023));
          utf8.push(
            240 | (charcode >> 18),
            128 | ((charcode >> 12) & 63),
            128 | ((charcode >> 6) & 63),
            128 | (charcode & 63)
          );
        }
      }
      return new Uint8Array(utf8).buffer;
    }
    static decodeUtf8(array, outLimit = Infinity, startPosition = 0) {
      let out = "";
      let length = array.length;
      let i = startPosition,
        c,
        char2,
        char3;
      while (i < length && out.length < outLimit) {
        c = array[i++];
        switch (c >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            out += String.fromCharCode(c);
            break;
          case 12:
          case 13:
            char2 = array[i++];
            out += String.fromCharCode(((c & 31) << 6) | (char2 & 63));
            break;
          case 14:
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(
              ((c & 15) << 12) | ((char2 & 63) << 6) | ((char3 & 63) << 0)
            );
            break;
        }
      }
      return [out, i - startPosition];
    }
    static Utf8ArrayToStr(array) {
      return FsUtils.decodeUtf8(array)[0];
    }
    static printBytes(val) {
      if (this.fsUnitCfg === void 0)
        this.fsUnitCfg = hmFS.SysProGetBool("mmk_tb_fs_unit");
      const options = this.fsUnitCfg ? ["B", "KiB", "MiB"] : ["B", "KB", "MB"];
      const base = this.fsUnitCfg ? 1024 : 1e3;
      let curr = 0;
      while (val > 800 && curr < options.length) {
        val = val / base;
        curr++;
      }
      return Math.round(val * 100) / 100 + " " + options[curr];
    }
  };

  // ../lib/i18n.js
  var preferedLang = [
    hmFS.SysProGetChars("mmk_tb_lang"),
    DeviceRuntimeCore.HmUtils.getLanguage(),
    "en-US",
  ];
  var strings = {};
  function extendLocale(data) {
    for (let key in data) {
      strings[key] = data[key];
    }
  }
  function t(key) {
    if (!strings[key]) return key;
    for (let ln of preferedLang) {
      if (!strings[key][ln]) continue;
      return strings[key][ln];
    }
    return key;
  }

  // utils/translations.js
  var APP_LIST_TRANSLATIONS = {
    title_apps: {
      "en-US": "Apps",
      "zh-CN": "\u5E94\u7528",
      "zh-TW": "\u61C9\u7528",
      "ru-RU": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      "de-DE": "",
      "es-ES": "Apps",
    },
  };

  // utils/misc.js
  var APP_ID = hmApp.packageInfo().appId;
  function openPage(name, param = null) {
    hmApp.gotoPage({ url: "page/" + name, param });
  }

  // page/AppListScreen.js
  extendLocale(APP_LIST_TRANSLATIONS);
  var AppsListScreen = class {
    app_list_item_type = {
      type_id: 1,
      item_height: 64,
      item_bg_color: 2236962,
      item_bg_radius: 8,
      text_view: [
        {
          x: 0,
          y: 0,
          w: 192 - 16,
          h: 64,
          key: "name",
          color: 16777215,
          text_size: 26,
        },
      ],
      text_view_count: 1,
    };
    mkEditParam(dirname) {
      try {
        const path = "/storage/js_apps/" + dirname;
        const appConfig = FsUtils.fetchJSON(path + "/app.json");
        let name = appConfig.app.appName;
        let vender = appConfig.app.vender;
        let data = { dirname, name, vender };
        let icon = path + "/assets/" + appConfig.app.icon;
        icon = this.prepareTempFile(icon);
        return { dirname, name, vender, icon };
      } catch (e) {
        return {};
      }
    }
    fetchApps() {
      const out = [];
      const [contents, e] = hmFS.readdir("/storage/js_apps");
      for (let i in contents) {
        const dirname = contents[i];
        if (dirname == "data") continue;
        try {
          const path = "/storage/js_apps/" + dirname;
          const jsonString = FsUtils.fetchTextFile(path + "/app.json", 368);
          const appNameIndex = jsonString.indexOf("appName") + 8;
          const stIndex = jsonString.indexOf('"', appNameIndex) + 1;
          const endIndex = jsonString.indexOf('"', stIndex);
          let name = jsonString.substring(stIndex, endIndex);
          if (stIndex < 0 || endIndex < 0) name = dirname;
          out.push({ name, dirname });
        } catch (e2) {
          console.log(e2);
          out.push({
            name: dirname,
            dirname,
          });
        }
      }
      return out;
    }
    prepareTempFile(sourcePath) {
      const current = hmFS.SysProGetChars("mmk_tb_temp");
      if (current) {
        const path = FsUtils.fullPath(current);
        hmFS.remove(path);
      }
      if (sourcePath === "") return "";
      const data = FsUtils.read(sourcePath);
      const newFile = "temp_" + Math.round(Math.random() * 1e5) + ".png";
      const dest = hmFS.open_asset(newFile, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.seek(dest, 0, hmFS.SEEK_SET);
      hmFS.write(dest, data, 0, data.byteLength);
      hmFS.close(dest);
      hmFS.SysProSetChars("mmk_tb_temp", newFile);
      return newFile;
    }
    start() {
      hmUI.setLayerScrolling(false);
      const apps = this.fetchApps();
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 48,
        y: 0,
        w: 96,
        h: 64,
        text: t("title_apps"),
        color: 16777215,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
      });
      hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
        x: 8,
        y: 64,
        w: 192 - 16,
        h: 378,
        item_space: 8,
        item_config: [this.app_list_item_type],
        item_config_count: 1,
        item_click_func: (list, index) => {
          const data = apps[index];
          openPage("AppEditScreen", data.dirname);
        },
        data_type_config: [{ start: 0, end: apps.length - 1, type_id: 1 }],
        data_type_config_count: 1,
        data_array: apps,
        data_count: apps.length,
      });
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      new AppsListScreen().start();
    },
  });
})();
