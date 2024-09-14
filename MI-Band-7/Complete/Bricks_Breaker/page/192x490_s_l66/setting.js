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
            let current_background = hmFS.SysProGetInt("gamebg");
            let current_Paddle = hmFS.SysProGetInt("paddlenum");
            let current_brick_row = hmFS.SysProGetInt("brickrow");

            //////////////////////////////////////////////////

            console.log("Current Speed: " + current_Speed);

            var bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "setting/settings_bg.png",
            });

            var showPaddle = hmUI.createWidget(hmUI.widget.IMG, {
              x: 76,
              y: 80,
              h: 8,
              w: 40,
              src: "paddle_" + current_Paddle + ".png",
            });

            const totalPaddles = 2;

            var plus_paddle = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 65,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/plus_normal.png",
              press_src: "setting/plus_pressed.png",
              click_func: (function (h) {
                return function () {
                  console.log("paddle Plussed");

                  hmFS.SysProSetInt("paddlenum", parseInt(current_Paddle) + 1);
                  current_Paddle = hmFS.SysProGetInt("paddlenum");

                  if (parseInt(current_Paddle) > totalPaddles - 1) {
                    hmFS.SysProSetInt(
                      "paddlenum",
                      parseInt(current_Paddle) - 1
                    );
                    current_Paddle = hmFS.SysProGetInt("paddlenum");
                  }

                  showPaddle.setProperty(hmUI.prop.MORE, {
                    src: "paddle_" + current_Paddle + ".png",
                  });

                  console.log(hmFS.SysProGetInt("paddlenum"));
                };
              })(e),
            });

            var minus_paddle = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 65,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/minus_normal.png",
              press_src: "setting/minus_pressed.png",
              click_func: (function (h) {
                return function () {
                  // if (current_Road > 0) {
                  console.log("Road Minused");
                  hmFS.SysProSetInt("paddlenum", parseInt(current_Paddle) - 1);
                  current_Paddle = hmFS.SysProGetInt("paddlenum");

                  if (parseInt(current_Paddle) < 0) {
                    hmFS.SysProSetInt(
                      "paddlenum",
                      parseInt(current_Paddle) + 1
                    );
                    current_Paddle = hmFS.SysProGetInt("paddlenum");
                  }

                  showPaddle.setProperty(hmUI.prop.MORE, {
                    src: "paddle_" + current_Paddle + ".png",
                  });

                  console.log(hmFS.SysProGetInt("paddlenum"));
                };
              })(e),
            });

            var showSpeed = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 83,
              y: 170,
              text: current_Speed,
              text_size: 35,
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

                  console.log(hmFS.SysProGetInt("speed"));

                  if (current_Speed > 5) {
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

                  console.log(hmFS.SysProGetInt("speed"));

                  if (current_Speed < 1) {
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
            let totalRaods = 4;
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


            var showRow = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 83,
              y: 370,
              text: current_brick_row,
              text_size: 35,
              color: 0xffffff,
            });

            var plus_row = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 370,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/plus_normal.png",
              press_src: "setting/plus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt(
                    "brickrow",
                    parseInt(current_brick_row) + 1
                  );
                  current_brick_row = hmFS.SysProGetInt("brickrow");

                  console.log(hmFS.SysProGetInt("brickrow"));

                  if (current_brick_row > 25) {
                    hmFS.SysProSetInt(
                      "brickrow",
                      parseInt(current_brick_row) - 1
                    );
                    current_brick_row = hmFS.SysProGetInt("brickrow");
                  }

                  showRow.setProperty(hmUI.prop.MORE, {
                    text: current_brick_row,
                  });
                };
              })(e),
            });

            var minus_row = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 370,
              w: 50,
              h: 50,
              text: "",
              normal_src: "setting/minus_normal.png",
              press_src: "setting/minus_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmFS.SysProSetInt(
                    "brickrow",
                    parseInt(current_brick_row) - 1
                  );
                  current_brick_row = hmFS.SysProGetInt("brickrow");

                  console.log(hmFS.SysProGetInt("brickrow"));

                  if (current_brick_row < 3) {
                    hmFS.SysProSetInt(
                      "brickrow",
                      parseInt(current_brick_row) + 1
                    );
                    current_brick_row = hmFS.SysProGetInt("brickrow");
                  }
                  showRow.setProperty(hmUI.prop.MORE, {
                    text: current_brick_row,
                  });
                };
              })(e),
            });

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
