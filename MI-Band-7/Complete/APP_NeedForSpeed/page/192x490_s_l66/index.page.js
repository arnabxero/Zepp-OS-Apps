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

            var menu_bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "menu/menu_bg.png",
            });

            // var resume_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 22,
            //   y: 200,
            //   w: 150,
            //   h: 51,
            //   text: "",
            //   normal_src: "button/resume_normal.png",
            //   press_src: "button/resume_pressed.png",
            //   click_func: (function (h) {
            //     return function () {
            //       hmApp.gotoPage({
            //         //url: "page/192x490_s_l66/gamepage",
            //       });
            //     };
            //   })(e),
            // });

            var newgame_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 22,
              y: 240,
              w: 150,
              h: 51,
              text: "",
              normal_src: "button/newgame_normal.png",
              press_src: "button/newgame_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/gamepage",
                  });
                };
              })(e),
            });

            var settings_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 22,
              y: 280,
              w: 150,
              h: 51,
              text: "",
              normal_src: "button/setting_normal.png",
              press_src: "button/setting_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/setting",
                  });
                };
              })(e),
            });

            var about_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 22,
              y: 320,
              w: 150,
              h: 51,
              text: "",
              normal_src: "button/about_normal.png",
              press_src: "button/about_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/dev.arnabxero",
                  });
                };
              })(e),
            });

            var exit_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 22,
              y: 360,
              w: 150,
              h: 51,
              text: "",
              normal_src: "button/exit_normal.png",
              press_src: "button/exit_pressed.png",
              click_func: (function (h) {
                return function () {
                  // go to watchface
                  hmApp.gotoHome();
                };
              })(e),
            });

            // var test_btn = hmUI.createWidget(hmUI.widget.IMG, {
            //   x: 22,
            //   y: 400,
            //   w: 150,
            //   h: 51,
            //   src: "button/about_normal.png",
            // });

            // test_btn.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            //   console.log("click up");
            // });
            //hmFS.SysProSetInt('js_test_int', 9667);

            console.log("Menu Created");
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
