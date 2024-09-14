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
  var TIMER_TRANSLATIONS = {
    timer_start: {
      "en-US": "Begin",
      "zh-CN": "\u5F00\u59CB",
      "zh-TW": "\u958B\u59CB",
      "ru-RU": "\u041D\u0430\u0447\u0430\u0442\u044C",
      "de-DE": "Start",
      "es-ES": "Iniciar"
    },
    timer_stop: {
      "en-US": "Cancel",
      "zh-CN": "\u53D6\u6D88",
      "zh-TW": "\u53D6\u6D88",
      "ru-RU": "\u041E\u0442\u043C\u0435\u043D\u0430",
      "de-DE": "Stop",
      "es-ES": "Detener"
    }
  };

  // page/TimerSetScreen.js
  extendLocale(TIMER_TRANSLATIONS);
  var TimerSetScreen = class {
    STYLE_DISPLAY = {
      x: 0,
      text_size: 80,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      w: 192,
      h: 96,
      color: 16777215
    };
    STYLE_EDIT_BTN = {
      text_size: 48,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      h: 96,
      w: 50,
      color: 11184810
    };
    STYLE_EDIT_INC = {
      text: "+",
      x: 142
    };
    STYLE_EDIT_DEG = {
      text: "\u2212",
      x: 0
    };
    hour = 0;
    minute = 1;
    second = 0;
    editButtons = [];
    localTimer = null;
    timerID = null;
    startedTime = 0;
    endTime = 0;
    formatDisplay(v) {
      return v.toString().padStart(2, "0");
    }
    start() {
      let cfg = hmFS.SysProGetBool("mmk_tb_cfg_timer_keep");
      if (cfg === void 0)
        cfg = true;
      const lastDX = hmFS.SysProGetInt("mmk_tb_timer_last");
      if (lastDX && cfg) {
        this.hour = Math.floor(lastDX / 3600);
        this.minute = Math.floor(lastDX % 3600 / 60);
        this.second = lastDX % 60;
        console.log("load last", this.hour, this.minute, this.second);
      }
      const state = hmFS.SysProGetChars("mmk_tb_timer_state");
      if (state) {
        const [id, startedTime, endTime] = state.split(":");
        if (Date.now() < endTime) {
          this.timerID = parseInt(id);
          this.startedTime = parseInt(startedTime);
          this.endTime = parseInt(endTime);
        }
      }
      this.initView();
      this.updateLayout();
    }
    initView() {
      this.viewHour = hmUI.createWidget(hmUI.widget.TEXT, {
        y: 72,
        text: this.formatDisplay(this.hour),
        ...this.STYLE_DISPLAY
      });
      this.viewMinute = hmUI.createWidget(hmUI.widget.TEXT, {
        y: 72 + 96,
        text: this.formatDisplay(this.minute),
        ...this.STYLE_DISPLAY
      });
      this.viewSecond = hmUI.createWidget(hmUI.widget.TEXT, {
        y: 72 + 96 * 2,
        text: this.formatDisplay(this.second),
        ...this.STYLE_DISPLAY
      });
      ["hour", "minute", "second"].map((key, i) => {
        [-1, 1].map((dir) => {
          const widget = hmUI.createWidget(hmUI.widget.TEXT, {
            ...this.STYLE_EDIT_BTN,
            ...dir > 0 ? this.STYLE_EDIT_INC : this.STYLE_EDIT_DEG,
            y: 72 + 96 * i
          });
          const events = new TouchEventManager(widget);
          const edit = () => {
            let val = this[key] + dir;
            val = Math.min(Math.max(0, val), 59);
            this[key] = val;
            this.refresh();
          };
          events.ontouch = edit;
          events.onlongtouchrepeatly = edit;
          this.editButtons.push(widget);
        });
      });
      this.actionButton = hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 0,
        y: 400,
        w: 192,
        h: 90,
        text: "Start",
        normal_color: 2236962,
        press_color: 3355443,
        color: 16777215,
        click_func: () => {
          this.timerID !== null ? this.stopTimer() : this.runTimer();
        }
      });
    }
    runTimer() {
      const dx = this.hour * 3600 + this.minute * 60 + this.second;
      if (dx === 0)
        return;
      this.startedTime = Date.now();
      this.endTime = this.startedTime + dx * 1e3;
      this.timerID = 1;
      try {
        this.timerID = hmApp.alarmNew({
          url: "page/TimerOutScreen",
          appid: 33904,
          delay: dx
        });
      } catch (e) {
        console.log(e);
        hmUI.showToast({ text: "Can't start OS app alarm" });
      }
      const bundle = this.timerID + ":" + this.startedTime + ":" + this.endTime;
      hmFS.SysProSetChars("mmk_tb_timer_state", bundle);
      hmFS.SysProSetInt("mmk_tb_timer_last", dx);
      this.updateLayout();
    }
    stopTimer() {
      hmFS.SysProSetChars("mmk_tb_timer_state", "");
      try {
        hmApp.alarmCancel(this.timerID);
      } catch (e) {
        console.log(e);
        hmUI.showToast({ text: "Can't cancel OS app alarm" });
      }
      let delay = Math.floor((this.endTime - Date.now()) / 1e3);
      if (delay > 0) {
        this.hour = Math.floor(delay / 3600);
        this.minute = Math.floor(delay % 3600 / 60);
        this.second = delay % 60;
      }
      this.timerID = null;
      this.updateLayout();
    }
    refresh() {
      let hour = this.hour, minute = this.minute, second = this.second;
      if (this.timerID) {
        let delay = Math.floor((this.endTime - Date.now()) / 1e3);
        if (delay < 0)
          delay = 0;
        hour = Math.floor(delay / 3600);
        minute = Math.floor(delay % 3600 / 60);
        second = delay % 60;
      }
      this.viewHour.setProperty(hmUI.prop.TEXT, this.formatDisplay(hour));
      this.viewMinute.setProperty(hmUI.prop.TEXT, this.formatDisplay(minute));
      this.viewSecond.setProperty(hmUI.prop.TEXT, this.formatDisplay(second));
    }
    updateLayout() {
      this.editButtons.forEach((v) => {
        v.setProperty(hmUI.prop.VISIBLE, this.timerID === null);
      });
      const buttonText = this.timerID === null ? t("timer_start") : t("timer_stop");
      this.actionButton.setProperty(hmUI.prop.TEXT, buttonText);
      if (this.timerID && !this.localTimer) {
        this.localTimer = timer.createTimer(0, 500, () => this.refresh());
      } else if (this.timerID === null && this.localTimer) {
        timer.stopTimer(this.localTimer);
        this.localTimer = null;
      }
      this.refresh();
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      new TimerSetScreen().start();
    }
  });
})();
