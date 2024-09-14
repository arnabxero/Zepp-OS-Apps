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
            let current_Road = hmFS.SysProGetInt("road");
            //////////////////////////////////////////////////

            console.log("Current Speed: " + current_Speed);
            console.log("Current Interval: " + current_Interval);
            console.log("Current Road: " + current_Road);

            var bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "setting/settings_bg.png",
            });

            var showSpeed = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 90,
              y: 65,
              text: current_Speed,
              font_size: 25,
              color: 0xffffff,
            });

            var showInterval = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 77,
              y: 170,
              text: current_Interval,
              font_size: 25,
              color: 0xffffff,
            });

            var plus_count = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 170,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/plus_normal.png",
              press_src: "setting/plus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt("interval", current_Interval + 100);
                  current_Interval = hmFS.SysProGetInt("interval");

                  if(current_Interval > 4000) {
                    hmFS.SysProSetInt("interval", current_Interval - 100);
                    current_Interval = hmFS.SysProGetInt("interval");
                  }

                  showInterval.setProperty(hmUI.prop.MORE, {
                    text: current_Interval,
                  });
                };
              })(e),
            });

            var minus_count = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 170,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/minus_normal.png",
              press_src: "setting/minus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt("interval", current_Interval - 100);
                  current_Interval = hmFS.SysProGetInt("interval");

                  if(current_Interval < 100) {
                    hmFS.SysProSetInt("interval", current_Interval + 100);
                    current_Interval = hmFS.SysProGetInt("interval");
                  }
                  showInterval.setProperty(hmUI.prop.MORE, {
                    text: current_Interval,
                  });
                };
              })(e),
            });

            var plus_speed = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 65,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/plus_normal.png",
              press_src: "setting/plus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt("speed", current_Speed + 1);
                  current_Speed = hmFS.SysProGetInt("speed");

                  console.log(hmFS.SysProGetInt("speed"));

                  if(current_Speed > 20) {
                    hmFS.SysProSetInt("speed", current_Speed - 1);
                    current_Speed = hmFS.SysProGetInt("speed");
                  }

                  showSpeed.setProperty(hmUI.prop.MORE, {
                    text: current_Speed,
                  });
                };
              })(e),
            });

            var minus_speed = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 65,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/minus_normal.png",
              press_src: "setting/minus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt("speed", current_Speed - 1);
                  current_Speed = hmFS.SysProGetInt("speed");

                  console.log(hmFS.SysProGetInt("speed"));

                  if(current_Speed < 2) {
                    hmFS.SysProSetInt("speed", current_Speed + 1);
                    current_Speed = hmFS.SysProGetInt("speed");
                  }
                  showSpeed.setProperty(hmUI.prop.MORE, {
                    text: current_Speed,
                  });
                };
              })(e),
            });

            /////////////////////////////////
            // Road selector //
            let totalRaods = 2;
            /////////////////////////////////
            var showRoad = hmUI.createWidget(hmUI.widget.IMG, {
              x: 67,
              y: 270,
              h: 50,
              w: 50,
              src: "road/preview_road_" + current_Road + ".png",
            });

            var plus_road = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 270,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/plus_normal.png",
              press_src: "setting/plus_pressed.png",
              click_func: (function (h) {
                return function () {
                  console.log("Road Plussed");

                  hmFS.SysProSetInt("road", parseInt(current_Road) + 1);
                  current_Road = hmFS.SysProGetInt("road");

                  if (parseInt(current_Road) > totalRaods - 1) {
                    hmFS.SysProSetInt("road", parseInt(current_Road) - 1);
                    current_Road = hmFS.SysProGetInt("road");
                  }

                  showRoad.setProperty(hmUI.prop.MORE, {
                    src: "road/preview_road_" + current_Road + ".png",
                  });

                  console.log(hmFS.SysProGetInt("road"));
                };
              })(e),
            });

            var minus_road = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 270,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/minus_normal.png",
              press_src: "setting/minus_pressed.png",
              click_func: (function (h) {
                return function () {
                  // if (current_Road > 0) {
                  console.log("Road Minused");
                  hmFS.SysProSetInt("road", parseInt(current_Road) - 1);
                  current_Road = hmFS.SysProGetInt("road");

                  if (parseInt(current_Road) < 0) {
                    hmFS.SysProSetInt("road", parseInt(current_Road) + 1);
                    current_Road = hmFS.SysProGetInt("road");
                  }

                  showRoad.setProperty(hmUI.prop.MORE, {
                    src: "road/preview_road_" + current_Road + ".png",
                  });

                  console.log(hmFS.SysProGetInt("road"));
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
