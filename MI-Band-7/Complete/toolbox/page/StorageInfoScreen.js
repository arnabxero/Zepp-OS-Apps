/**
 * Build with ZMake tool
 */

(() => {
  // ../lib/FsUtils.js
  var FsUtils = class {
    static writeText(fn, data) {
      if (!fn.startsWith("/storage"))
        fn = FsUtils.fullPath(fn);
      try {
        hmFS.remove(fn);
      } catch (e) {
      }
      const buffer = FsUtils.strToUtf8(data);
      const f = FsUtils.open(fn, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.write(f, buffer, 0, buffer.byteLength);
      hmFS.close(f);
    }
    static read(fn, limit = false) {
      if (!fn.startsWith("/storage"))
        fn = FsUtils.fullPath(fn);
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
      } catch (e) {
      }
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
      if (!path.startsWith("/storage"))
        path = FsUtils.fullPath(path);
      const [files, e] = hmFS.readdir(path);
      for (let i in files) {
        FsUtils.rmTree(path + "/" + files[i]);
      }
      hmFS.remove(path);
    }
    static copyTree(source, dest, removeSource) {
      if (!source.startsWith("/storage"))
        source = FsUtils.fullPath(source);
      if (!dest.startsWith("/storage"))
        dest = FsUtils.fullPath(dest);
      if (!FsUtils.isFolder(source)) {
        console.log("copy", source, "->", dest);
        FsUtils.copy(source, dest);
      } else {
        const [files, e] = hmFS.readdir(source);
        hmFS.mkdir(dest);
        for (let i in files) {
          FsUtils.copyTree(source + "/" + files[i], dest + "/" + files[i], removeSource);
        }
      }
      if (removeSource) {
        console.log("Delete", source);
        hmFS.remove(source);
      }
    }
    static sizeTree(path) {
      if (!path.startsWith("/storage"))
        path = FsUtils.fullPath(path);
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
        if (charcode < 128)
          utf8.push(charcode);
        else if (charcode < 2048) {
          utf8.push(
            192 | charcode >> 6,
            128 | charcode & 63
          );
        } else if (charcode < 55296 || charcode >= 57344) {
          utf8.push(
            224 | charcode >> 12,
            128 | charcode >> 6 & 63,
            128 | charcode & 63
          );
        } else {
          i++;
          charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i) & 1023);
          utf8.push(
            240 | charcode >> 18,
            128 | charcode >> 12 & 63,
            128 | charcode >> 6 & 63,
            128 | charcode & 63
          );
        }
      }
      return new Uint8Array(utf8).buffer;
    }
    static decodeUtf8(array, outLimit = Infinity, startPosition = 0) {
      let out = "";
      let length = array.length;
      let i = startPosition, c, char2, char3;
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
            out += String.fromCharCode(
              (c & 31) << 6 | char2 & 63
            );
            break;
          case 14:
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(
              (c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0
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
    "en-US"
  ];
  var strings = {};
  function extendLocale(data) {
    for (let key in data) {
      strings[key] = data[key];
    }
  }
  function t(key) {
    if (!strings[key])
      return key;
    for (let ln of preferedLang) {
      if (!strings[key][ln])
        continue;
      return strings[key][ln];
    }
    return key;
  }

  // utils/translations.js
  var STORAGE_INFO_TRANSLATIONS = {
    storage_total: {
      "en-US": "Total",
      "zh-CN": "\u603B\u7A7A\u95F4",
      "zh-TW": "\u624B\u74B0\u5BB9\u91CF",
      "ru-RU": "\u0412\u0441\u0435\u0433\u043E",
      "de-DE": "Gesamt",
      "es-ES": "Total"
    },
    storage_free: {
      "en-US": "Free",
      "zh-CN": "\u4F59\u7A7A\u95F4",
      "zh-TW": "\u53EF\u7528\u7A7A\u9593",
      "ru-RU": "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E",
      "de-DE": "Frei",
      "es-ES": "Libre"
    },
    storage_system: {
      "en-US": "ZeppOS",
      "zh-CN": "\u7CFB\u7EDF\u56FA\u4EF6",
      "zh-TW": "\u7CFB\u7D71\u97CC\u9AD4",
      "ru-RU": "ZeppOS",
      "de-DE": "ZeppOS",
      "es-ES": "ZeppOS"
    },
    storage_watchface: {
      "en-US": "Watchfaces",
      "zh-CN": "JS\u8868\u76D8",
      "zh-TW": "JS\u9336\u76E4",
      "ru-RU": "\u0426\u0438\u0444\u0435\u0440\u0431\u043B\u0430\u0442\u044B",
      "de-DE": "Ziffernbl\xE4tter",
      "es-ES": "Watchfaces"
    },
    storage_app: {
      "en-US": "Apps",
      "zh-CN": "JS\u5E94\u7528",
      "zh-TW": "JS\u61C9\u7528",
      "ru-RU": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      "de-DE": "Apps",
      "es-ES": "Apps"
    },
    storage_unknown: {
      "en-US": "Unknown",
      "zh-CN": "\u672A\u77E5",
      "zh-TW": "\u672A\u77E5",
      "ru-RU": "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E",
      "de-DE": "Unbekannt",
      "es-ES": "Desconocido"
    }
  };

  // page/StorageInfoScreen.js
  extendLocale(STORAGE_INFO_TRANSLATIONS);
  var StorageInfoScreen = class {
    cupStyle = {
      x: 16,
      y: 72,
      w: 32,
      h: 320,
      color: 1118481
    };
    start() {
      const storage = hmSetting.getDiskInfo();
      const config = [
        {
          key: "total",
          color: 10066329
        },
        {
          key: "free",
          color: 11184810
        },
        {
          key: "system",
          color: 16764032
        },
        {
          key: "watchface",
          color: 5227511
        },
        {
          key: "app",
          color: 16755601
        },
        {
          key: "unknown",
          color: 6381921
        }
      ];
      storage.unknown = storage.total;
      for (let i in config)
        if (config[i].key !== "total" && config[i].key !== "unknown")
          storage.unknown -= storage[config[i].key];
      let posY = 56, usedY = 0;
      hmUI.createWidget(hmUI.widget.FILL_RECT, this.cupStyle);
      for (let i in config) {
        const currentRow = config[i];
        if (storage[currentRow.key] == 0)
          continue;
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 72,
          y: posY,
          w: 120,
          h: 24,
          color: currentRow.color,
          text: t("storage_" + currentRow.key)
        });
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 72,
          y: posY + 24,
          w: 120,
          h: 48,
          text_size: 24,
          color: 16777215,
          text: FsUtils.printBytes(storage[currentRow.key])
        });
        posY += 64;
        if (currentRow.key != "free" && currentRow.key != "total") {
          let height = Math.round(
            this.cupStyle.h * (storage[currentRow.key] / storage.total)
          );
          if (height < 2)
            continue;
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            ...this.cupStyle,
            y: this.cupStyle.y + this.cupStyle.h - usedY - height,
            h: height,
            color: currentRow.color
          });
          usedY += height;
        }
      }
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      new StorageInfoScreen().start();
    }
  });
})();
