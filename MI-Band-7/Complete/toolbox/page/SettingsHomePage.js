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

  // ../lib/SettingsListScreen.js
  var SettingsListScreen = class {
    baseColor = 16777215;
    STYLE_HEADLINE = {
      x: 4,
      w: 192 - 8,
      h: 32,
      color: 15658734,
      align_v: hmUI.align.CENTER_V
    };
    STYLE_BG = {
      x: 0,
      y: 0,
      w: 192,
      color: 1118481,
      radius: 8
    };
    start() {
      this.posY = 96;
      this.build();
      hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 0,
        y: this.posY,
        w: 192,
        h: 96
      });
    }
    image(src, height) {
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 4,
        y: this.posY,
        src
      });
      this.posY += height + 8;
    }
    h1(title) {
      hmUI.createWidget(hmUI.widget.TEXT, {
        ...this.STYLE_HEADLINE,
        y: this.posY,
        h: 48,
        text_size: 32,
        text: title
      });
      this.posY += 56;
    }
    text(text) {
      const metrics = hmUI.getTextLayout(text, {
        text_size: 20,
        text_width: 192 - 8,
        wrapped: true
      });
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 4,
        y: this.posY,
        w: 192 - 8,
        h: metrics.height,
        text,
        text_size: 20,
        text_style: hmUI.text_style.WRAP,
        color: 15658734
      });
      this.posY += metrics.height + 8;
    }
    headline(title) {
      hmUI.createWidget(hmUI.widget.TEXT, {
        ...this.STYLE_HEADLINE,
        y: this.posY,
        text: title
      });
      this.posY += 32;
    }
    clickableItem(name, icon, click_func) {
      const [group, viewHeight] = this._mkBaseGroup(name);
      group.createWidget(hmUI.widget.IMG, {
        x: 10,
        y: 20,
        src: icon
      });
      this._addClickEv(group, viewHeight, click_func);
    }
    field(name, value, callback) {
      const group = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: this.posY,
        w: 192,
        h: 64
      });
      group.createWidget(hmUI.widget.FILL_RECT, {
        ...this.STYLE_BG,
        h: 64
      });
      group.createWidget(hmUI.widget.TEXT, {
        x: 4,
        y: 4,
        w: 192,
        h: 24,
        align_v: hmUI.align.CENTER_V,
        text_size: 18,
        color: 11184810,
        text: name
      });
      const viewValue = group.createWidget(hmUI.widget.TEXT, {
        x: 4,
        y: 28,
        w: 192,
        h: 32,
        align_v: hmUI.align.CENTER_V,
        text_size: 20,
        color: 16777215,
        text: value
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
        src: "menu/cb_" + value + ".png"
      });
      this._addClickEv(group, viewHeight, () => {
        storage[key] = !storage[key];
        icon.setProperty(hmUI.prop.MORE, {
          src: "menu/cb_" + !!storage[key] + ".png"
        });
      });
    }
    propInteger(name, key, fallback) {
      let value = hmFS.SysProGetInt(key);
      if (value === void 0)
        value = fallback;
      const [group, textView] = this.field(name, value, "");
      textView.setProperty(hmUI.prop.MORE, {
        align_h: hmUI.align.CENTER_H
      });
      const img = group.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 28,
        src: "field/int.png"
      });
      this._addClickEv(group, 64, (e) => {
        value += e.x > 96 ? 1 : -1;
        hmFS.SysProSetInt(key, value);
        textView.setProperty(hmUI.prop.TEXT, String(value));
      });
    }
    propCheckbox(name, key, fallback) {
      let value = hmFS.SysProGetBool(key);
      if (value === void 0)
        value = fallback;
      const [group, viewHeight] = this._mkBaseGroup(name);
      const icon = group.createWidget(hmUI.widget.IMG, {
        x: 10,
        y: 20,
        src: "menu/cb_" + value + ".png"
      });
      this._addClickEv(group, viewHeight, () => {
        value = !value;
        hmFS.SysProSetBool(key, value);
        icon.setProperty(hmUI.prop.MORE, {
          src: "menu/cb_" + value + ".png"
        });
      });
    }
    _mkBaseGroup(name) {
      const textHeight = hmUI.getTextLayout(name, { text_size: 18, text_width: 144 }).height;
      const viewHeight = Math.max(64, textHeight + 36);
      const group = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: this.posY,
        w: 192,
        h: viewHeight
      });
      group.createWidget(hmUI.widget.FILL_RECT, {
        ...this.STYLE_BG,
        h: viewHeight
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
        text: name
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
          src: ""
        });
        const evm = new TouchEventManager(ch);
        evm.ontouch = click_func;
      }
      this.posY += viewHeight + 8;
    }
  };

  // utils/translations.js
  var SETTINGS_HOME_TRANSLATIONS = {
    cfg_timer_keep: {
      "en-US": "Keep last timer value",
      "zh-CN": "\u4FDD\u7559\u6700\u540E\u4E00\u4E2A\u8BA1\u65F6\u5668\u503C",
      "zh-TW": "\u4FDD\u7559\u6700\u5F8C\u4E00\u500B\u8A08\u6642\u5668\u503C",
      "ru-RU": "\u0417\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C \u043F\u043E\u0441\u043B. \u0442\u0430\u0439\u043C\u0435\u0440",
      "de-DE": "Letzten Timerwert bebehalten",
      "es-ES": "Mantener valor del \xFAltimo temporizador"
    },
    cfg_fs_unit: {
      "en-US": "Use Base-2 filesize\n1KB = 1024 B",
      "zh-CN": "\u4F7F\u7528 Base-2 \u6587\u4EF6\u5927\u5C0F\n1KB = 1024 B",
      "zh-TW": "\u4F7F\u7528 Base-2 \u6587\u4EF6\u5927\u5C0F\n1KB = 1024 B",
      "ru-RU": "\u0421\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u043E\u0441\u043D. 2\n1KB = 1024 B",
      "de-DE": "Base-2 Dateigr\xF6\xDFe\n1KB = 1024 B",
      "es-ES": "Usar tama\xF1o de archivo base-2\n1KB = 1024 B"
    },
    cfg_danger_mode: {
      "en-US": "Unlock danger features",
      "zh-CN": "",
      "zh-TW": "",
      "ru-RU": "\u0420\u0430\u0437\u0431\u043B\u043E\u043A. \u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438",
      "de-DE": "",
      "es-ES": "Mostrar funcionalidades peligrosas"
    },
    settings_ui: {
      "en-US": "Customize",
      "zh-CN": "\u5B9A\u5236",
      "zh-TW": "\u5B9A\u88FD",
      "ru-RU": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      "de-DE": "Anpassen",
      "es-ES": "Editar"
    },
    settings_lang: {
      "en-US": "Language",
      "zh-CN": "\u8BED\u8A00",
      "zh-TW": "\u8A9E\u8A00",
      "ru-RU": "\u042F\u0437\u044B\u043A",
      "de-DE": "Sprache",
      "es-ES": "Idioma"
    },
    action_info: {
      "en-US": "About",
      "zh-CN": "\u5173\u4E8E",
      "zh-TW": "\u95DC\u65BC",
      "ru-RU": "\u041E Toolbox",
      "de-DE": "\xDCber...",
      "es-ES": "Acerca de"
    },
    headline_tools: {
      "en-US": "Settings:",
      "zh-CN": "",
      "zh-TW": "",
      "ru-RU": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438:",
      "de-DE": "",
      "es-ES": ""
    },
    prop_font_size: {
      "en-US": "Reader font size",
      "zh-CN": "",
      "zh-TW": "",
      "ru-RU": "\u0420\u0430\u0437\u043C. \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u0440\u0438 \u0447\u0442\u0435\u043D\u0438\u0438:",
      "de-DE": "",
      "es-ES": ""
    }
  };

  // utils/misc.js
  var APP_ID = hmApp.packageInfo().appId;
  function openPage(name, param = null) {
    hmApp.gotoPage({ url: "page/" + name, param });
  }

  // page/SettingsHomePage.js
  extendLocale(SETTINGS_HOME_TRANSLATIONS);
  var SettingsHomePage = class extends SettingsListScreen {
    build() {
      this.clickableItem(
        t("action_info"),
        "menu/info.png",
        () => this.openPage("AboutScreen")
      );
      this.clickableItem(
        t("settings_ui"),
        "menu/ui.png",
        () => this.openPage("SettingsUiScreen")
      );
      this.clickableItem(
        t("settings_lang"),
        "menu/lang.png",
        () => this.openPage("SettingsLangScreen")
      );
      this.headline(t("headline_tools"));
      this.propCheckbox(t("cfg_timer_keep"), "mmk_tb_cfg_timer_keep", true);
      this.propCheckbox(t("cfg_fs_unit"), "mmk_tb_fs_unit", false);
      this.propInteger(t("prop_font_size"), "mmk_tb_fontsize", 16);
      const allowDanger = !!hmFS.SysProGetBool("mmk_tb_danger_mode");
      this.clickableItem(t("cfg_danger_mode"), `menu/cb_${allowDanger}.png`, () => {
        openPage("ToggleDanger");
      });
    }
    openPage(id) {
      openPage(id);
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      this.screen = new SettingsHomePage();
      this.screen.start();
    }
  });
})();
