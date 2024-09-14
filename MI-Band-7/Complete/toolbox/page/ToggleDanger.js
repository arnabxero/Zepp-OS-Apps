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
  var TOGGLE_DANGER_TRANSLATIONS = {
    danger_warn: {
      "en-US": "This option will show some features, that may cause your device to fail to boot. Continuing, you agree that in some moment all settings of that device may become lost.",
      "zh-CN": "",
      "zh-TW": "",
      "ru-RU": "",
      "de-De": "",
      "es-ES": "Esta opci\xF3n mostrar\xE1 algunas caracter\xEDsticas que pueden causar que su dispositivo no arranque. Continuando, usted acepta que en alg\xFAn momento se pueden perder todas las configuraciones de ese dispositivo."
    },
    danger_agree: {
      "en-US": "Agree, enable",
      "zh-CN": "",
      "zh-TW": "",
      "ru-RU": "",
      "de-De": "",
      "es-ES": "Aceptar, habilitar"
    }
  };

  // page/ToggleDanger.js
  extendLocale(TOGGLE_DANGER_TRANSLATIONS);
  var DnagerToggle = class extends SettingsListScreen {
    build() {
      const allowDanger = hmFS.SysProGetBool("mmk_tb_danger_mode");
      if (allowDanger) {
        hmFS.SysProSetBool("mmk_tb_danger_mode", false);
        hmApp.goBack();
        return;
      }
      this.text(t("danger_warn"));
      this.clickableItem(t("danger_agree"), "menu/cb_true.png", () => {
        hmFS.SysProSetBool("mmk_tb_danger_mode", true);
        hmApp.goBack();
      });
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      new DnagerToggle().start();
    }
  });
})();
