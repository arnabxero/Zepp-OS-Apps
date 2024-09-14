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

            let showLevelObj = {
              3000: 1,
              2500: 2,
              2000: 3,
              1500: 4,
              1000: 5,
              500: 6,
            };

            let current_Speed = hmFS.SysProGetInt("speed");
            let current_background = hmFS.SysProGetInt("gamebg");

            //////////////////////////////////////////////////

            console.log("Current Speed: " + current_Speed);

            var bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "setting/settings_bg.png",
            });

            var showSpeed = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 83,
              y: 170,
              text: showLevelObj[current_Speed],
              text_size: 20,
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
                  hmFS.SysProSetInt("speed", current_Speed - 500);
                  current_Speed = hmFS.SysProGetInt("speed");

                  if (current_Speed < 500) {
                    current_Speed = 500;
                    hmFS.SysProSetInt("speed", current_Speed);
                  }

                  console.log("Current Speed: " + current_Speed);

                  showSpeed.setProperty(hmUI.prop.MORE, {
                    text: showLevelObj[current_Speed],
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
                  hmFS.SysProSetInt("speed", current_Speed + 500);
                  current_Speed = hmFS.SysProGetInt("speed");

                  if (current_Speed > 3000) {
                    current_Speed = 3000;
                    hmFS.SysProSetInt("speed", current_Speed);
                  }

                  console.log("Current Speed: " + current_Speed);

                  showSpeed.setProperty(hmUI.prop.MORE, {
                    text: showLevelObj[current_Speed],
                  });
                };
              })(e),
            });

            /////////////////////////////////
            // Road selector //
            let totalRaods = 6;
            /////////////////////////////////
            var showRoad = hmUI.createWidget(hmUI.widget.IMG, {
              x: 67,
              y: 270,
              h: 50,
              w: 50,
              src: "road/preview_road_" + current_background + ".png",
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

                  hmFS.SysProSetInt("gamebg", parseInt(current_background) + 1);
                  current_background = hmFS.SysProGetInt("gamebg");

                  if (parseInt(current_background) > totalRaods - 1) {
                    hmFS.SysProSetInt(
                      "gamebg",
                      parseInt(current_background) - 1
                    );
                    current_background = hmFS.SysProGetInt("gamebg");
                  }

                  showRoad.setProperty(hmUI.prop.MORE, {
                    src: "road/preview_road_" + current_background + ".png",
                  });

                  console.log(hmFS.SysProGetInt("gamebg"));
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
                  // if (current_background > 0) {
                  console.log("Road Minused");
                  hmFS.SysProSetInt("gamebg", parseInt(current_background) - 1);
                  current_background = hmFS.SysProGetInt("gamebg");

                  if (parseInt(current_background) < 0) {
                    hmFS.SysProSetInt(
                      "gamebg",
                      parseInt(current_background) + 1
                    );
                    current_background = hmFS.SysProGetInt("gamebg");
                  }

                  showRoad.setProperty(hmUI.prop.MORE, {
                    src: "road/preview_road_" + current_background + ".png",
                  });

                  console.log(hmFS.SysProGetInt("gamebg"));
                };
              })(e),
            });

            /////////////////////

            ///////////////////
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
