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

            // Create the road animation
            hmUI.createWidget(hmUI.widget.IMG_ANIM, {
              x: 0,
              y: 0,
              anim_path: "road",
              anim_prefix: "road",
              anim_ext: "png",
              anim_fps: 25,
              anim_size: 81,
              repeat_count: 255,
              anim_repeat: true,
              anim_status: hmUI.anim_status.START,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            ///////////// Variables /////////////
            let x_current = 0;
            let y_current = 100;
            const move_sensetivity = 10;

            /////////////////////////////////////

            const car = hmUI.createWidget(hmUI.widget.IMG, {
              x: x_current,
              y: y_current,
              src: "car/car_main.png",
            });

            // left move button
            const left_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 400,
              text: "",
              w: 50,
              h: 50,
              normal_src: "button/left_normal.png",
              press_src: "button/left_pressed.png",
              click_func: () => {
                car_move("left");
              },
            });

            // right move button
            const right_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 135,
              y: 400,
              text: "",
              w: 50,
              h: 50,
              normal_src: "button/right_normal.png",
              press_src: "button/right_pressed.png",
              click_func: () => {
                car_move("right");
              },
            });

            // up move button
            const up_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 72,
              y: 380,
              text: "",
              w: 50,
              h: 50,
              normal_src: "button/up_normal.png",
              press_src: "button/up_pressed.png",
              click_func: () => {
                car_move("up");
              },
            });

            // down move button
            const down_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 72,
              y: 440,
              text: "",
              w: 50,
              h: 50,
              normal_src: "button/down_normal.png",
              press_src: "button/down_pressed.png",
              click_func: () => {
                car_move("down");
              },
            });

            down_btn.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
              console.log("click down");
            });
            // function to move the car
            function car_move(direction) {
              if (direction == "left") {
                x_current = x_current - move_sensetivity;
              } else if (direction == "right") {
                x_current = x_current + move_sensetivity;
              } else if (direction == "up") {
                y_current = y_current - move_sensetivity;
              } else if (direction == "down") {
                y_current = y_current + move_sensetivity;
              }

              // Create the score text
              const score = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 10,
                y: 10,
                text: "Score: 0",
                font_size: 20,
                color: "#ffffff",
              });

              // Apply the new position to the car
              car.setProperty(hmUI.prop.MORE, {
                x: x_current,
                y: y_current,
              });

              console.log("Current X: " + x_current);
              console.log("Current Y: " + y_current);

              fixBound();

              // clear the widget
              // score.clear();

              score.setProperty(hmUI.prop.MORE, {
                // update the text
                text: "Score: " + x_current,
              });
            }

            // function to fix the car position
            function fixBound() {
              if (x_current < 0) {
                x_current = 0;
              }
              if (x_current > 165) {
                x_current = 165;
              }
              if (y_current < 0) {
                y_current = 0;
              }
              if (y_current > 400) {
                y_current = 400;
              }
            }

            console.log("ok bye");
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
