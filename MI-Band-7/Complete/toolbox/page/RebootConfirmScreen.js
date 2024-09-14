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

  // utils/translations.js
  var REBOOT_CONFIRM_TRANSLATIONS = {
    reboot_confirm: {
      "en-US": "Click to confirm",
      "zh-CN": "",
      "zh-TW": "\u8F15\u6309\u4EE5\u91CD\u555F",
      "ru-RU": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
      "de-DE": "Klick zum Best\xE4tigen",
      "es-ES": "Click para confirmar"
    }
  };

  // page/RebootConfirmScreen.js
  extendLocale(REBOOT_CONFIRM_TRANSLATIONS);
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      const g = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: 0,
        w: 192,
        h: 490
      });
      const w = g.createWidget(hmUI.widget.IMG, {
        x: 57,
        y: 206,
        src: "qs/reboot.png"
      });
      const events = new TouchEventManager(w);
      events.ontouch = () => {
        hmUI.deleteWidget(g);
      };
      g.createWidget(hmUI.widget.TEXT, {
        x: 8,
        y: 320,
        w: 176,
        h: 56,
        align_h: hmUI.align.CENTER_H,
        text_style: hmUI.text_style.WRAP,
        color: 10066329,
        text: t("reboot_confirm")
      });
    }
  });
})();
