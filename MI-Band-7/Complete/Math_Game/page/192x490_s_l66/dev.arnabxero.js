try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current,
      { px: o } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t)
        ),
        e.app.__globals__);
    try {
      (() => {
        var e = __$$hmAppManager$$__.currentApp,
          t = e.current;
        new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t),
          "drink"
        );
        DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
        t.module = DeviceRuntimeCore.Page({
          init_view() {
            hmUI.setLayerScrolling(false);

            const background = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "devarnabxero.png",
            });

            var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 22,
              y: 441,
              w: 150,
              h: 51,
              text: "",
              normal_src: "start_normal.png",
              press_src: "start_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/index.page",
                  });
                };
              })(e),
            });
          },
          onInit() {
            console.log("index page.js on init invoke"), this.init_view();
          },
          onReady() {
            console.log("index page.js on ready invoke");
          },
          onShow() {
            console.log("index page.js on show invoke");
          },
          onHide() {
            console.log("index page.js on hide invoke");
          },
          onDestory() {
            console.log("index page.js on destory invoke");
          },
        });
      })();
    } catch (e) {
      console.log(e);
    }
  })();
} catch (e) {
  console.log(e);
}
