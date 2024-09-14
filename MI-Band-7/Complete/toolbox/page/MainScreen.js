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
        if (this.ontouchup)
          this.ontouchup(e);
        if (handleClick && this.ontouch)
          this.ontouch(e);
        handleClick = false;
        timer.stopTimer(timerLongTap);
      });
      widget.addEventListener(hmUI.event.CLICK_DOWN, (e) => {
        if (this.ontouchdown)
          this.ontouchdown(e);
        handleClick = true;
        timerLongTap = timer.createTimer(750, 150, () => {
          if (handleClick && this.onlongtouch) {
            this.onlongtouch(e);
            handleClick = false;
          }
          if (this.onlongtouchrepeatly)
            this.onlongtouchrepeatly(e);
        });
      });
      widget.addEventListener(hmUI.event.MOVE, (e) => {
        if (this.ontouchmove)
          this.ontouchmove(e);
        handleClick = false;
        timer.stopTimer(timerLongTap);
      });
    }
  };

  // utils/translations.js
  var MAIN_SCREEN_TRANSLATIONS = {
    action_customize: {
      "en-US": "Settings",
      "zh-CN": "\u8BBE\u7F6E",
      "zh-TW": "\u8A2D\u5B9A",
      "ru-RU": "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C",
      "de-DE": "Einstellungen",
      "es-ES": "Ajustes"
    }
  };
  var QS_TILE_NAMES = {
    qs_apps: {
      "en-US": "Apps manager",
      "zh-CN": "\u5E94\u7528\u7BA1\u7406\u5668",
      "zh-TW": "\u61C9\u7528\u7BA1\u7406\u5668",
      "ru-RU": "\u0423\u043F\u0440. \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438",
      "de-DE": "Apps Manager",
      "es-ES": "Administrador de aplicacioness"
    },
    qs_files: {
      "en-US": "File manager",
      "zh-CN": "\u6587\u4EF6\u7BA1\u7406\u5668",
      "zh-TW": "\u6A94\u6848\u7BA1\u7406\u5668",
      "ru-RU": "\u0424\u0430\u0439\u043B\u043E\u0432\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
      "de-DE": "Dateimanager",
      "es-ES": "Administrador de archivos"
    },
    qs_storage: {
      "en-US": "Disk usage",
      "zh-CN": "\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5",
      "zh-TW": "\u5132\u5B58\u7A7A\u9593",
      "ru-RU": "\u041F\u0430\u043C\u044F\u0442\u044C",
      "de-DE": "Speichernutzung",
      "es-ES": "Uso de almacenamiento"
    },
    qs_dnd: {
      "en-US": "DND settings",
      "zh-CN": "\u8BF7\u52FF\u6253\u6270",
      "zh-TW": "\u52FF\u64FE",
      "ru-RU": "\u041D\u0435 \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u044C",
      "de-DE": "BNS Einstellungen",
      "es-ES": "Ajustes DND"
    },
    qs_flashlight: {
      "en-US": "Flashlight app",
      "zh-CN": "\u624B\u7535\u7B52",
      "zh-TW": "\u624B\u96FB\u7B52",
      "ru-RU": "\u0424\u043E\u043D\u0430\u0440\u0438\u043A",
      "de-DE": "Taschenlampe App",
      "es-ES": "Luz flash"
    },
    qs_camera: {
      "en-US": "Camera app",
      "zh-CN": "\u76F8\u673A",
      "zh-TW": "\u9059\u63A7\u62CD\u7167",
      "ru-RU": "\u041A\u0430\u043C\u0435\u0440\u0430",
      "de-DE": "Kamera App",
      "es-ES": "Camara"
    },
    qs_settings: {
      "en-US": "Settings app",
      "zh-CN": "\u8BBE\u7F6E\u5E94\u7528",
      "zh-TW": "\u624B\u74B0\u8A2D\u5B9A",
      "ru-RU": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      "de-DE": "Einstellungen App",
      "es-ES": "Ajustes"
    },
    qs_brightness_btn: {
      "en-US": "Brightness",
      "zh-CN": "\u4EAE\u5EA6",
      "zh-TW": "\u4EAE\u5EA6",
      "ru-RU": "\u042F\u0440\u043A\u043E\u0441\u0442\u044C",
      "de-DE": "Helligkeit",
      "es-ES": "Brillo"
    },
    qs_aod: {
      "en-US": "AOD",
      "zh-CN": "AOD",
      "zh-TW": "AOD",
      "ru-RU": "AOD",
      "de-DE": "AOD",
      "es-ES": "AOD"
    },
    qs_powersave: {
      "en-US": "Powersave",
      "zh-CN": "\u8282\u80FD",
      "zh-TW": "\u7701\u96FB\u6A21\u5F0F",
      "ru-RU": "\u042D\u043D\u0435\u0440\u0433\u043E\u0441\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0435",
      "de-DE": "Energiesparen",
      "es-ES": "Ahorro de energ\xEDa"
    },
    qs_system: {
      "en-US": "System settings",
      "zh-CN": "\u7CFB\u7EDF\u8BBE\u7F6E",
      "zh-TW": "\u7CFB\u7D71\u8A2D\u5B9A",
      "ru-RU": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B",
      "de-DE": "Systemeinstellungen",
      "es-ES": "Ajustes del sistema"
    },
    qs_applistsort: {
      "en-US": "App list sort",
      "zh-CN": "\u5E94\u7528\u5217\u8868\u8BBE\u7F6E",
      "zh-TW": "\u61C9\u7528\u5217\u8868\u8A2D\u5B9A",
      "ru-RU": "\u041D\u0430\u0441\u0442\u0440. \u043C\u0435\u043D\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",
      "de-DE": "Apps sortieren",
      "es-ES": "Ordener lista de apps"
    },
    qs_poweroff: {
      "en-US": "Power off",
      "zh-CN": "\u5173\u673A",
      "zh-TW": "\u95DC\u6A5F",
      "ru-RU": "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
      "de-DE": "Ausschalten",
      "es-ES": "Apagar"
    },
    qs_reboot: {
      "en-US": "Reboot",
      "zh-CN": "\u91CD\u542F",
      "zh-TW": "\u91CD\u555F",
      "ru-RU": "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",
      "de-DE": "Neustart",
      "es-ES": "Reiniciar"
    },
    qs_timer: {
      "en-US": "Background timer",
      "zh-CN": "\u540E\u53F0\u5B9A\u65F6\u5668",
      "zh-TW": "\u5F8C\u53F0\u8A08\u6642\u5668",
      "ru-RU": "\u0424\u043E\u043D\u043E\u0432\u044B\u0439 \u0442\u0430\u0439\u043C\u0435\u0440",
      "de-DE": "Hintergrund Timer",
      "es-ES": "Temporizador de fondo"
    },
    qs_wake_on_wrist: {
      "en-US": "Wake on Wrist",
      "zh-CN": "\u5524\u9192\u624B\u8155",
      "zh-TW": "\u559A\u9192\u624B\u8155",
      "ru-RU": "\u041F\u0440\u043E\u0431\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0435",
      "de-DE": "Aufwachen am Handgelenk",
      "es-ES": "Wake on Wrist"
    }
  };

  // utils/data.js
  extendLocale(QS_TILE_NAMES);
  var DEFAULT_SETTINGS = {
    tiles: [
      "apps",
      "files",
      "storage",
      "timer",
      "dnd",
      "camera"
    ],
    withBrightness: true,
    withBattery: false
  };
  var QS_BUTTONS = {
    apps: {
      url: "AppListScreen",
      type: "internal"
    },
    files: {
      url: "FileManagerScreen",
      type: "internal"
    },
    storage: {
      url: "StorageInfoScreen",
      type: "internal"
    },
    timer: {
      url: "TimerSetScreen",
      type: "internal"
    },
    dnd: {
      url: "Settings_dndModelScreen",
      type: "native"
    },
    flashlight: {
      url: "FlashLightScreen",
      type: "native"
    },
    camera: {
      url: "HidcameraScreen",
      type: "native"
    },
    settings: {
      url: "Settings_homeScreen",
      type: "native"
    },
    brightness_btn: {
      url: "Settings_lightAdjustScreen",
      type: "native"
    },
    aod: {
      url: "Settings_standbyModelScreen",
      type: "native"
    },
    powersave: {
      url: "LowBatteryScreen",
      type: "native"
    },
    system: {
      url: "Settings_systemScreen",
      type: "native"
    },
    applistsort: {
      url: "Settings_applistSortScreen",
      type: "native"
    },
    poweroff: {
      url: "HmReStartScreen",
      type: "native"
    },
    reboot: {
      url: "RebootConfirmScreen",
      type: "internal",
      danger: true
    },
    wake_on_wrist: {
      url: "Settings_wristHomeScreen",
      type: "native"
    }
  };

  // utils/misc.js
  var APP_ID = hmApp.packageInfo().appId;
  function openPage(name, param = null) {
    hmApp.gotoPage({ url: "page/" + name, param });
  }

  // page/MainScreen.js
  extendLocale(MAIN_SCREEN_TRANSLATIONS);
  var MainScreen = class {
    baseBrightnessConfig = {
      x: 12,
      y: 72,
      h: 80,
      radius: 8
    };
    _getSettings() {
      let settings = {
        tiles: ["apps", "files"],
        withBrightness: true,
        withBattery: false
      };
      try {
        settings = FsUtils.fetchJSON("/storage/mmk_tb_layout.json");
      } catch (e) {
        settings = DEFAULT_SETTINGS;
      }
      return settings;
    }
    start() {
      const { tiles, withBrightness, withBattery } = this._getSettings();
      const topOffset = withBrightness ? 164 : 72;
      this.allowDanger = hmFS.SysProGetBool("mmk_tb_danger_mode");
      if (withBattery)
        this.drawBattery();
      if (withBrightness)
        this.drawBrightness();
      this.drawButtons(tiles, topOffset);
    }
    drawBattery() {
      const battery = hmSensor.createSensor(hmSensor.id.BATTERY);
      const value = battery.current + "%";
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 84,
        y: 28,
        w: 48,
        h: 24,
        text: value,
        color: 10066329,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V
      });
      const batImg = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        w: 192,
        h: 64,
        pos_x: 60,
        pos_y: 28,
        src: "battery.png"
      });
      const batEv = new TouchEventManager(batImg);
      batEv.ontouch = () => hmApp.startApp({
        url: "Settings_batteryManagerScreen",
        native: true
      });
      batEv.onlongtouch = () => hmApp.startApp({
        url: ""
      });
    }
    drawButtons(tiles, topOffset) {
      let i = 0;
      tiles.forEach((id) => {
        const config = QS_BUTTONS[id];
        if (!config)
          return;
        if (config.danger && !this.allowDanger)
          return;
        const widgetConfig = {
          x: 12 + i % 2 * 90,
          y: topOffset + Math.floor(i / 2) * 90,
          w: 78,
          h: 78,
          src: "qs/" + id + ".png"
        };
        const widget = hmUI.createWidget(hmUI.widget.IMG, widgetConfig);
        const events = new TouchEventManager(widget);
        events.ontouch = () => {
          switch (config.type) {
            case "internal":
              openPage(config.url);
              break;
            case "native":
              hmApp.startApp({
                url: config.url,
                native: true,
                param: config.param
              });
              break;
          }
        };
        events.onlongtouch = () => {
          openPage("SettingsUiScreen");
        };
        i++;
      });
      const editButton = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: topOffset + 12 + Math.ceil(i / 2) * 90,
        w: 192,
        h: 72,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text: t("action_customize"),
        color: 10066329
      });
      const editButtonEvents = new TouchEventManager(editButton);
      editButtonEvents.ontouch = () => {
        openPage("SettingsHomePage");
      };
    }
    drawBrightness() {
      hmUI.createWidget(hmUI.widget.FILL_RECT, {
        ...this.baseBrightnessConfig,
        color: 2236962,
        w: 168
      });
      this.widgetBrightness = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        ...this.baseBrightnessConfig,
        color: 5592405,
        alpha: 80,
        w: 10
      });
      const basement = hmUI.createWidget(hmUI.widget.IMG, {
        ...this.baseBrightnessConfig,
        w: 168,
        pos_x: 8,
        pos_y: 22,
        alpha: 200,
        src: "brightness.png"
      });
      const handleChange = (e) => {
        const delta = e.x > 96 ? 1 : -1;
        let val = hmSetting.getBrightness() + 5 * delta;
        val = Math.min(Math.max(0, val), 100);
        hmSetting.setBrightness(val);
        this._updateBrightness();
      };
      const events = new TouchEventManager(basement);
      events.ontouch = handleChange;
      events.onlongtouch = handleChange;
      events.onlongtouchrepeatly = handleChange;
      this._updateBrightness();
    }
    _updateBrightness() {
      const val = 168 * (hmSetting.getBrightness() / 100);
      this.widgetBrightness.setProperty(hmUI.prop.MORE, {
        w: Math.max(val, 24),
        alpha: val == 0 ? 0 : 200
      });
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      new MainScreen().start();
    }
  });
})();
