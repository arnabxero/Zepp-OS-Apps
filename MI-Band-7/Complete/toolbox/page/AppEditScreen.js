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

  // ../lib/TouchEventManager.js
  var TouchEventManager = class {
    ontouch = null;
    onlongtouch = null;
    onlongtouchrepeatly = null;
    ontouchdown = null;
    ontouchup = null;
    ontouchmove = null;
    constructor(widget) {
      this._init(widget);
    }
    _init(widget) {
      let handleClick = true;
      let timerLongTap = -1;
      widget.addEventListener(hmUI.event.CLICK_UP, (e) => {
        if (this.ontouchup) this.ontouchup(e);
        if (handleClick && this.ontouch) this.ontouch(e);
        handleClick = false;
        timer.stopTimer(timerLongTap);
      });
      widget.addEventListener(hmUI.event.CLICK_DOWN, (e) => {
        if (this.ontouchdown) this.ontouchdown(e);
        handleClick = true;
        timerLongTap = timer.createTimer(750, 150, () => {
          if (handleClick && this.onlongtouch) {
            this.onlongtouch(e);
            handleClick = false;
          }
          if (this.onlongtouchrepeatly) this.onlongtouchrepeatly(e);
        });
      });
      widget.addEventListener(hmUI.event.MOVE, (e) => {
        if (this.ontouchmove) this.ontouchmove(e);
        handleClick = false;
        timer.stopTimer(timerLongTap);
      });
    }
  };

  // ../lib/SettingsListScreen.js
  var SettingsListScreen = class {
    baseColor = 16777215;
    STYLE_HEADLINE = {
      x: 4,
      w: 192 - 8,
      h: 32,
      color: 15658734,
      align_v: hmUI.align.CENTER_V,
    };
    STYLE_BG = {
      x: 0,
      y: 0,
      w: 192,
      color: 1118481,
      radius: 8,
    };
    start() {
      this.posY = 96;
      this.build();
      hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 0,
        y: this.posY,
        w: 192,
        h: 96,
      });
    }
    image(src, height) {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 4,
        y: this.posY,
        src,
      });
      this.posY += height + 8;
    }
    h1(title) {
      hmUI.createWidget(hmUI.widget.TEXT, {
        ...this.STYLE_HEADLINE,
        y: this.posY,
        h: 48,
        text_size: 32,
        text: title,
      });
      this.posY += 56;
    }
    text(text) {
      const metrics = hmUI.getTextLayout(text, {
        text_size: 20,
        text_width: 192 - 8,
        wrapped: true,
      });
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 4,
        y: this.posY,
        w: 192 - 8,
        h: metrics.height,
        text,
        text_size: 20,
        text_style: hmUI.text_style.WRAP,
        color: 15658734,
      });
      this.posY += metrics.height + 8;
    }
    headline(title) {
      hmUI.createWidget(hmUI.widget.TEXT, {
        ...this.STYLE_HEADLINE,
        y: this.posY,
        text: title,
      });
      this.posY += 32;
    }
    clickableItem(name, icon, click_func) {
      const [group, viewHeight] = this._mkBaseGroup(name);
      group.createWidget(hmUI.widget.IMG, {
        x: 10,
        y: 20,
        src: icon,
      });
      this._addClickEv(group, viewHeight, click_func);
    }
    field(name, value, callback) {
      const group = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: this.posY,
        w: 192,
        h: 64,
      });
      group.createWidget(hmUI.widget.FILL_RECT, {
        ...this.STYLE_BG,
        h: 64,
      });
      group.createWidget(hmUI.widget.TEXT, {
        x: 4,
        y: 4,
        w: 192,
        h: 24,
        align_v: hmUI.align.CENTER_V,
        text_size: 18,
        color: 11184810,
        text: name,
      });
      const viewValue = group.createWidget(hmUI.widget.TEXT, {
        x: 4,
        y: 28,
        w: 192,
        h: 32,
        align_v: hmUI.align.CENTER_V,
        text_size: 20,
        color: 16777215,
        text: value,
      });
      if (callback !== "") {
        this._addClickEv(group, 64, callback);
        return (v) => viewValue.setProperty(hmUI.prop.TEXT, v);
      } else {
        return [group, viewValue];
      }
    }
    checkbox(name, storage, key) {
      let value = !!storage[key];
      const [group, viewHeight] = this._mkBaseGroup(name);
      const icon = group.createWidget(hmUI.widget.IMG, {
        x: 10,
        y: 20,
        src: "menu/cb_" + value + ".png",
      });
      this._addClickEv(group, viewHeight, () => {
        storage[key] = !storage[key];
        icon.setProperty(hmUI.prop.MORE, {
          src: "menu/cb_" + !!storage[key] + ".png",
        });
      });
    }
    propInteger(name, key, fallback) {
      let value = hmFS.SysProGetInt(key);
      if (value === void 0) value = fallback;
      const [group, textView] = this.field(name, value, "");
      textView.setProperty(hmUI.prop.MORE, {
        align_h: hmUI.align.CENTER_H,
      });
      const img = group.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 28,
        src: "field/int.png",
      });
      this._addClickEv(group, 64, (e) => {
        value += e.x > 96 ? 1 : -1;
        hmFS.SysProSetInt(key, value);
        textView.setProperty(hmUI.prop.TEXT, String(value));
      });
    }
    propCheckbox(name, key, fallback) {
      let value = hmFS.SysProGetBool(key);
      if (value === void 0) value = fallback;
      const [group, viewHeight] = this._mkBaseGroup(name);
      const icon = group.createWidget(hmUI.widget.IMG, {
        x: 10,
        y: 20,
        src: "menu/cb_" + value + ".png",
      });
      this._addClickEv(group, viewHeight, () => {
        value = !value;
        hmFS.SysProSetBool(key, value);
        icon.setProperty(hmUI.prop.MORE, {
          src: "menu/cb_" + value + ".png",
        });
      });
    }
    _mkBaseGroup(name) {
      const textHeight = hmUI.getTextLayout(name, {
        text_size: 18,
        text_width: 144,
      }).height;
      const viewHeight = Math.max(64, textHeight + 36);
      const group = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: this.posY,
        w: 192,
        h: viewHeight,
      });
      group.createWidget(hmUI.widget.FILL_RECT, {
        ...this.STYLE_BG,
        h: viewHeight,
      });
      group.createWidget(hmUI.widget.TEXT, {
        x: 44,
        y: 0,
        w: 144,
        h: viewHeight,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.WRAP,
        text_size: 18,
        color: this.baseColor,
        text: name,
      });
      return [group, viewHeight];
    }
    _addClickEv(group, viewHeight, click_func) {
      if (click_func) {
        const ch = group.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: 184,
          h: viewHeight,
          src: "",
        });
        const evm = new TouchEventManager(ch);
        evm.ontouch = click_func;
      }
      this.posY += viewHeight + 8;
    }
  };

  // utils/translations.js
  var APP_EDIT_TRANSLATIONS = {
    action_uninstall: {
      "en-US": "Uninstall",
      "zh-CN": "\u5378\u8F7D",
      "zh-TW": "\u5378\u8F09",
      "ru-RU": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      "de-DE": "Deinstallieren",
      "es-ES": "Desinstalar",
    },
    action_launch: {
      "en-US": "Launch",
      "zh-CN": "\u53D1\u5C04",
      "zh-TW": "\u767C\u5C04",
      "ru-RU": "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C",
      "de-DE": "Starten",
      "es-ES": "Ejecutar",
    },
    uninstall_complete: {
      "en-US": "Uninstalled",
      "zh-CN": "\u5DF2\u5378\u8F7D",
      "zh-TW": "\u5DF2\u5378\u8F09",
      "ru-RU": "\u0423\u0434\u0430\u043B\u0435\u043D\u043E",
      "de-DE": "Deinstalliert",
      "es-ES": "Desinstalado",
    },
    apps_notice_uninstall: {
      "en-US": "Please reboot device to finish",
      "zh-CN": "\u8BF7\u91CD\u542F\u8BBE\u5907\u4EE5\u5B8C\u6210",
      "zh-TW": "\u8ACB\u91CD\u555F\u8A2D\u5099\u4EE5\u5B8C\u6210",
      "ru-RU":
        "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",
      "de-DE": "Bitte das Ger\xE4t neustarten um abzuschlie\xDFen",
      "es-ES": "Por favor reinicie el dispositivo",
    },
    field_size: {
      "en-US": "Size",
      "zh-CN": "\u5E94\u7528\u7A0B\u5E8F\u5927\u5C0F",
      "zh-TW": "\u61C9\u7528\u7A0B\u5E8F\u5927\u5C0F",
      "ru-RU": "\u0420\u0430\u0437\u043C\u0435\u0440",
      "de-DE": "Gr\xF6\xDFe",
      "es-ES": "Tama\xF1o",
    },
    field_vendor: {
      "en-US": "Vendor",
      "zh-TW": "\u5C0F\u8CA9",
      "zh-CN": "\u5C0F\u8D29",
      "ru-RU":
        "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A",
      "de-DE": "Hersteller",
      "es-ES": "Desarrollador",
    },
    file_size_ext: {
      "en-US": "Size (ext. config)",
      "zh-CN": "\u5927\u5C0F\uFF08\u5916\u90E8\u6587\u4EF6\uFF09",
      "zh-TW": "\u5927\u5C0F\uFF08\u5916\u90E8\u6587\u4EF6\uFF09",
      "ru-RU":
        "\u0420\u0430\u0437\u043C\u0435\u0440 (\u0432\u043D\u0435\u0448\u043D. \u0444\u0430\u0439\u043B\u044B)",
      "de-DE": "Gr\xF6\xDFe (ext. config)",
      "es-ES": "Tama\xF1o (ext. config)",
    },
    conf_full: {
      "en-US": "Don't keep ext. files on uninstall",
      "zh-CN": "\u5378\u8F7D\u65F6\u5220\u9664\u5916\u90E8\u6587\u4EF6",
      "zh-TW": "\u5378\u8F09\u6642\u522A\u9664\u5916\u90E8\u6587\u4EF6",
      "ru-RU":
        "\u0422\u0430\u043A\u0436\u0435 \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u044B",
      "de-DE": "ext Dateien bei Deinstallation NICHT bebehalten",
      "es-ES": "No conservar archivos ext. despu\xE9s de desinstalar",
    },
    headline_adv: {
      "en-US": "Advanced",
      "zh-CN": "\u5148\u8FDB\u7684",
      "zh-TW": "\u5148\u9032\u7684",
      "ru-RU":
        "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",
      "de-DE": "Erweitert",
      "es-ES": "Avanzado",
    },
  };

  // page/AppEditScreen.js
  extendLocale(APP_EDIT_TRANSLATIONS);
  var AppEditScreen = class extends SettingsListScreen {
    dontKeepSettings = true;
    constructor(dirname) {
      super();
      this.dirname = dirname;
      this.path = "/storage/js_apps/" + dirname;
      this.appConfig = {};
    }
    build() {
      this.preloadAll();
      let size = FsUtils.sizeTree(this.path);
      this.image(this.iconPath, 100);
      this.h1(this.appConfig.app.appName);
      this.clickableItem(t("action_launch"), "menu/play.png", () => {
        hmApp.startApp({
          appid: this.appConfig.app.appId,
          url: this.appConfig.module.page.pages[0],
        });
      });
      this.field(t("field_vendor"), this.appConfig.app.vender);
      this.field(t("field_size"), FsUtils.printBytes(size));
      this.baseColor = 16746632;
      this.clickableItem(t("action_uninstall"), "menu/delete.png", () => {
        this.uninstall();
      });
      this.baseColor = 16777215;
      if (this.appConfig.externalFilesList) {
        let configSize = 0;
        for (const path of this.appConfig.externalFilesList) {
          const [st, e] = FsUtils.stat(path);
          if (st !== null && st.size) configSize += st.size;
        }
        this.headline(t("headline_adv"));
        this.field(t("file_size_ext"), FsUtils.printBytes(configSize));
        this.checkbox(t("conf_full"), this, "dontKeepSettings");
      }
      this._prepareFinishGroup();
    }
    preloadAll() {
      try {
        this.appConfig = FsUtils.fetchJSON(this.path + "/app.json");
        let icon = this.path + "/assets/" + this.appConfig.app.icon;
        this.iconPath = this._prepareTempFile(icon);
      } catch (e) {
        console.log(e);
      }
    }
    _prepareFinishGroup() {
      const group = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: 0,
        w: 192,
        h: 482,
      });
      group.createWidget(hmUI.widget.FILL_RECT, {
        x: 0,
        y: 0,
        w: 192,
        h: 482,
        color: 0,
      });
      group.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 120,
        w: 192,
        h: 48,
        text_size: 26,
        text_style: hmUI.text_style.WRAP,
        align_h: hmUI.align.CENTER_H,
        color: 6732650,
        text: t("uninstall_complete"),
      });
      group.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 180,
        w: 192,
        h: 80,
        text_size: 20,
        text_style: hmUI.text_style.WRAP,
        align_h: hmUI.align.CENTER_H,
        color: 16777215,
        text: t("apps_notice_uninstall"),
      });
      group
        .createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 320,
          w: 192,
          h: 48,
          pos_x: (192 - 48) / 2,
          pos_y: 0,
          src: "i_next.png",
        })
        .addEventListener(hmUI.event.CLICK_UP, () => {
          hmApp.startApp({
            url: "Settings_systemScreen",
            native: true,
          });
        });
      group.setProperty(hmUI.prop.VISIBLE, false);
      this.finishGroup = group;
    }
    _prepareTempFile(sourcePath) {
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
    uninstall() {
      FsUtils.rmTree("/storage/js_apps/" + this.dirname);
      FsUtils.rmTree("/storage/js_apps/data" + this.dirname);
      if (this.appConfig.externalFilesList) {
        for (const path of this.appConfig.externalFilesList) {
          try {
            hmFS.remove(path);
          } catch (e) {
            console.log(e);
          }
        }
      }
      hmApp.setLayerY(0);
      hmUI.setLayerScrolling(false);
      this.finishGroup.setProperty(hmUI.prop.VISIBLE, true);
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(dirname) {
      this.screen = new AppEditScreen(dirname);
      this.screen.start();
    },
  });
})();
