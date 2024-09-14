try {
  (function () {
    var f = __$$hmAppManager$$__.currentApp,
      F = f.current;
    new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(f, F),
      "drink"
    );
    DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
    F.module = DeviceRuntimeCore.Page({
      init_view() {
        hmUI.setLayerScrolling(false);
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: "portade.png",
        });
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 50,
          y: 151,
          w: 40,
          h: 95,
          radius: 7,
          text_size: 25,
          normal_src: "play.png",
          press_src: "play.png",
          click_func: function () {
            hmApp.gotoPage({ url: "page/game", param: "..." });
          },
        });
      },
      onInit: function () {
        console.log("index page.js on init invoke");
        this.init_view();
      },
      onReady: function () {
        console.log("index page.js on ready invoke");
      },
      onShow: function () {
        console.log("index page.js on show invoke");
      },
      onHide: function () {
        console.log("index page.js on hide invoke");
      },
      onDestory: function () {
        console.log("index page.js on destory invoke");
      },
    });
  })();
} catch (f) {
  console.log(f);
}
