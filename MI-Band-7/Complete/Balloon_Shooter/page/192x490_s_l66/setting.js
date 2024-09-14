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

            let current_Speed = hmFS.SysProGetInt("speed");
            let current_Interval = hmFS.SysProGetInt("interval");
            console.log("Current Interval: " + current_Interval);

            //////////////////////////////////////////////////

            console.log("Current Speed: " + current_Speed);

            var bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "setting/settings_bg.png",
            });

            // var showInterval = hmUI.createWidget(hmUI.widget.TEXT, {
            //   x: 80,
            //   y: 275,
            //   text: current_Interval,
            //   font_size: 25,
            //   color: 0xffffff,
            // });

            // var plus_count = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 130,
            //   y: 270,
            //   w: 50,
            //   h: 50,
            //   text: "",
            //   normal_src: "setting/plus_normal.png",
            //   press_src: "setting/plus_pressed.png",
            //   click_func: (function (h) {
            //     return function () {
            //       hmFS.SysProSetInt("interval", current_Interval + 100);
            //       current_Interval = hmFS.SysProGetInt("interval");

            //       if (current_Interval > 1000) {
            //         hmFS.SysProSetInt("interval", current_Interval - 100);
            //         current_Interval = hmFS.SysProGetInt("interval");
            //       }

            //       showInterval.setProperty(hmUI.prop.MORE, {
            //         text: current_Interval,
            //       });
            //     };
            //   })(e),
            // });

            // var minus_count = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 10,
            //   y: 270,
            //   w: 50,
            //   h: 50,
            //   text: "",
            //   normal_src: "setting/minus_normal.png",
            //   press_src: "setting/minus_pressed.png",
            //   click_func: (function (h) {
            //     return function () {
            //       hmFS.SysProSetInt("interval", current_Interval - 100);
            //       current_Interval = hmFS.SysProGetInt("interval");

            //       if (current_Interval < 100) {
            //         hmFS.SysProSetInt("interval", current_Interval + 100);
            //         current_Interval = hmFS.SysProGetInt("interval");
            //       }
            //       showInterval.setProperty(hmUI.prop.MORE, {
            //         text: current_Interval,
            //       });
            //     };
            //   })(e),
            // });

            var showSpeed = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 86,
              y: 170,
              text: current_Speed,
              text_size: 25,
              color: 0xffffff,
            });

            var plus_speed = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 170,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/plus_normal.png",
              press_src: "setting/plus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt("speed", current_Speed + 1);
                  current_Speed = hmFS.SysProGetInt("speed");

                  if (current_Speed > 6) {
                    current_Speed = 6;
                    hmFS.SysProSetInt("speed", current_Speed);
                  }

                  console.log("Current Speed: " + current_Speed);

                  showSpeed.setProperty(hmUI.prop.MORE, {
                    text: current_Speed,
                  });
                };
              })(e),
            });

            var minus_speed = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 170,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/minus_normal.png",
              press_src: "setting/minus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt("speed", current_Speed - 1);
                  current_Speed = hmFS.SysProGetInt("speed");

                  if (current_Speed < 1) {
                    current_Speed = 1;
                    hmFS.SysProSetInt("speed", current_Speed);
                  }

                  console.log("Current Speed: " + current_Speed);

                  showSpeed.setProperty(hmUI.prop.MORE, {
                    text: current_Speed,
                  });
                };
              })(e),
            });

            var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 22,
              y: 441,
              w: 150,
              h: 51,
              text: "",
              normal_src: "button/goback_normal_new.png",
              press_src: "button/goback_pressed_new.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/index.page",
                  });
                };
              })(e),
            });

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
