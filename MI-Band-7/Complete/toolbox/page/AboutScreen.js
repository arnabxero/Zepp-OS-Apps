/**
 * Build with ZMake tool
 */

(() => {
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

  // utils/translations.js
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

  // page/AboutScreen.js
  var APP_VERSION = "v2023-01-21";
  var AUTHORS = [
    ["melianmiko", "Developer"],
    ["Vanek905/zhenyok905", "BandBBS publisher"],
    ["\u5929\u528D\u8840\u72D0", "zh-TW translation"],
    ["harrybin", "de-DE translation"],
    ["arenasjuanf", "es-ES translation"]
  ];
  var COLORS = [
    [239, 83, 80],
    [171, 71, 188],
    [126, 87, 194],
    [92, 107, 192],
    [66, 165, 245],
    [66, 165, 245],
    [38, 198, 218],
    [38, 166, 154],
    [102, 187, 106],
    [102, 187, 106],
    [102, 187, 106],
    [255, 238, 88],
    [255, 202, 40],
    [255, 167, 38],
    [255, 112, 67]
  ];
  var AboutScreen = class {
    initAnimation() {
      let level = 0, currentColor = 0, currentIcon = 0;
      const names = Object.keys(QS_BUTTONS);
      const bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        color: 0,
        x: 0,
        y: 0,
        w: 100,
        h: 100,
        radius: 12
      });
      const img = hmUI.createWidget(hmUI.widget.IMG, {
        x: (192 - 78) / 2,
        y: 64,
        src: "qs/" + names[0] + ".png"
      });
      timer.createTimer(0, 100, () => {
        const cl = (100 - level) / 100;
        const size = 78 + 40 * level / 100;
        let [r, g, b] = COLORS[currentColor];
        r = Math.floor(r * cl);
        g = Math.floor(g * cl);
        b = Math.floor(b * cl);
        bg.setProperty(hmUI.prop.MORE, {
          color: (r << 16) + (g << 8) + b,
          x: (192 - size) / 2,
          y: 103 - size / 2,
          w: size,
          h: size
        });
        level += 10;
        if (level > 100) {
          level = 0;
          currentColor = (currentColor + 1) % COLORS.length;
          img.setProperty(hmUI.prop.MORE, {
            src: "qs/" + names[currentIcon] + ".png"
          });
          currentIcon = (currentIcon + 1) % names.length;
        }
      });
    }
    drawBasement() {
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 148,
        w: 192,
        h: 48,
        text: "Toolbox",
        text_size: 28,
        color: 16777215,
        align_h: hmUI.align.CENTER_H
      });
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 184,
        w: 192,
        h: 32,
        text: APP_VERSION,
        text_size: 18,
        color: 11184810,
        align_h: hmUI.align.CENTER_H
      });
    }
    drawAuthors() {
      let posY = 240;
      for (let [name, info] of AUTHORS) {
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: posY,
          w: 192,
          h: 22,
          text_size: 18,
          color: 16777215,
          text: name,
          align_h: hmUI.align.CENTER_H
        });
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: posY + 24,
          w: 192,
          h: 22,
          text_size: 16,
          color: 11184810,
          text: info,
          align_h: hmUI.align.CENTER_H
        });
        posY += 64;
      }
    }
    start() {
      hmSetting.setBrightScreen(60);
      this.initAnimation();
      this.drawBasement();
      this.drawAuthors();
    }
    finish() {
      hmSetting.setBrightScreenCancel();
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      this.screen = new AboutScreen();
      this.screen.start();
    }
  });
})();
