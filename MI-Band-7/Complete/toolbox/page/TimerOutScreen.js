/**
 * Build with ZMake tool
 */

(() => {
  // page/TimerOutScreen.js
  var vibrate;
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    build() {
      hmSetting.setBrightScreen(180);
      let counter = 0;
      let icon = hmUI.createWidget(hmUI.widget.IMG, {
        x: (192 - 64) / 2,
        y: 120,
        src: "timer/bell.png"
      });
      timer.createTimer(3e4, 3e4, () => {
        hmApp.goBack();
      });
      hmUI.createWidget(hmUI.widget.IMG, {
        x: (192 - 72) / 2,
        y: 300,
        src: "timer/bell_stop.png"
      }).addEventListener(hmUI.event.CLICK_UP, () => {
        hmApp.goBack();
      });
      vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
      vibrate.scene = 1;
      vibrate.start();
      hmFS.SysProSetChars("mmk_tb_timer_state", "");
    },
    onDestroy: () => {
      vibrate.stop();
      hmSetting.setBrightScreenCancel();
    }
  });
})();
