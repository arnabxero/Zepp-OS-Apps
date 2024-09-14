Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);

    let current_Speed = hmFS.SysProGetInt("speed");
    let current_background = hmFS.SysProGetInt("gamebg");
    let current_Paddle = hmFS.SysProGetInt("paddlenum");
    let current_brick_row = hmFS.SysProGetInt("brickrow");

    console.log("Current Speed: " + current_Speed);
    console.log("Current Background: " + current_background);
    console.log("Current Paddle: " + current_Paddle);
    console.log("Current Brick Row: " + current_brick_row);

    //////////////////////////////////////////////////

    var shiftY = -50;

    var bg = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      src: "setting/settings_bg.png",
    });

    var showPaddle = hmUI.createWidget(hmUI.widget.IMG, {
      x: 77,
      y: 50,
      h: 8,
      w: 40,
      src: "paddle_" + current_Paddle + ".png",
    });

    const totalPaddles = 2;

    var plus_paddle = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 134,
      y: 26,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/plus_normal.png",
      press_src: "setting/plus_pressed.png",
      click_func: function () {
        console.log("paddle Plussed");

        hmFS.SysProSetInt("paddlenum", parseInt(current_Paddle) + 1);
        current_Paddle = hmFS.SysProGetInt("paddlenum");

        if (parseInt(current_Paddle) > totalPaddles - 1) {
          hmFS.SysProSetInt("paddlenum", parseInt(current_Paddle) - 1);
          current_Paddle = hmFS.SysProGetInt("paddlenum");
        }

        showPaddle.setProperty(hmUI.prop.MORE, {
          src: "paddle_" + current_Paddle + ".png",
        });

        console.log(hmFS.SysProGetInt("paddlenum"));
      },
    });

    // click_func: function () {
    //     hmApp.gotoPage({ url: "pages/gamepage", param: "..." });
    //   },

    var minus_paddle = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 10,
      y: 26,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/minus_normal.png",
      press_src: "setting/minus_pressed.png",
      click_func: function () {
        // if (current_Road > 0) {
        console.log("Road Minused");
        hmFS.SysProSetInt("paddlenum", parseInt(current_Paddle) - 1);
        current_Paddle = hmFS.SysProGetInt("paddlenum");

        if (parseInt(current_Paddle) < 0) {
          hmFS.SysProSetInt("paddlenum", parseInt(current_Paddle) + 1);
          current_Paddle = hmFS.SysProGetInt("paddlenum");
        }

        showPaddle.setProperty(hmUI.prop.MORE, {
          src: "paddle_" + current_Paddle + ".png",
        });

        console.log(hmFS.SysProGetInt("paddlenum"));
      },
    });

    var showSpeed = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 87,
      y: 107,
      text: current_Speed,
      text_size: 35,
      color: 0xffffff,
    });

    var plus_speed = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 134,
      y: 107,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/plus_normal.png",
      press_src: "setting/plus_pressed.png",
      click_func: function () {
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
      },
    });

    var minus_speed = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 10,
      y: 107,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/minus_normal.png",
      press_src: "setting/minus_pressed.png",
      click_func: function () {
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
      },
    });

    /////////////////////////////////
    // Road selector //
    let totalRaods = 4;
    /////////////////////////////////
    var showRoad = hmUI.createWidget(hmUI.widget.IMG, {
      x: 72,
      y: 189,
      h: 50,
      w: 50,
      src: "road/preview_road_" + current_background + ".png",
    });

    var plus_road = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 134,
      y: 189,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/plus_normal.png",
      press_src: "setting/plus_pressed.png",
      click_func: function () {
        console.log("Road Plussed");

        hmFS.SysProSetInt("gamebg", parseInt(current_background) + 1);
        current_background = hmFS.SysProGetInt("gamebg");

        if (parseInt(current_background) > totalRaods - 1) {
          hmFS.SysProSetInt("gamebg", parseInt(current_background) - 1);
          current_background = hmFS.SysProGetInt("gamebg");
        }

        showRoad.setProperty(hmUI.prop.MORE, {
          src: "road/preview_road_" + current_background + ".png",
        });

        console.log(hmFS.SysProGetInt("gamebg"));
      },
    });

    var minus_road = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 10,
      y: 189,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/minus_normal.png",
      press_src: "setting/minus_pressed.png",
      click_func: function () {
        // if (current_background > 0) {
        console.log("Road Minused");
        hmFS.SysProSetInt("gamebg", parseInt(current_background) - 1);
        current_background = hmFS.SysProGetInt("gamebg");

        if (parseInt(current_background) < 0) {
          hmFS.SysProSetInt("gamebg", parseInt(current_background) + 1);
          current_background = hmFS.SysProGetInt("gamebg");
        }

        showRoad.setProperty(hmUI.prop.MORE, {
          src: "road/preview_road_" + current_background + ".png",
        });

        console.log(hmFS.SysProGetInt("gamebg"));
      },
    });

    /////////////////////

    var showRow = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 84,
      y: 271,
      text: current_brick_row,
      text_size: 35,
      color: 0xffffff,
    });

    var plus_row = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 134,
      y: 271,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/plus_normal.png",
      press_src: "setting/plus_pressed.png",
      click_func: function () {
        hmFS.SysProSetInt("brickrow", parseInt(current_brick_row) + 1);
        current_brick_row = hmFS.SysProGetInt("brickrow");

        console.log(hmFS.SysProGetInt("brickrow"));

        if (current_brick_row > 18) {
          hmFS.SysProSetInt("brickrow", parseInt(current_brick_row) - 1);
          current_brick_row = hmFS.SysProGetInt("brickrow");
        }

        showRow.setProperty(hmUI.prop.MORE, {
          text: current_brick_row,
        });
      },
    });

    var minus_row = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 10,
      y: 271,
      w: 50,
      h: 50,
      text: "",
      normal_src: "setting/minus_normal.png",
      press_src: "setting/minus_pressed.png",
      click_func: function () {
        hmFS.SysProSetInt("brickrow", parseInt(current_brick_row) - 1);
        current_brick_row = hmFS.SysProGetInt("brickrow");

        console.log(hmFS.SysProGetInt("brickrow"));

        if (current_brick_row < 3) {
          hmFS.SysProSetInt("brickrow", parseInt(current_brick_row) + 1);
          current_brick_row = hmFS.SysProGetInt("brickrow");
        }
        showRow.setProperty(hmUI.prop.MORE, {
          text: current_brick_row,
        });
      },
    });

    ///////////////////
    var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 332,
      w: 194,
      h: 36,
      text: "",
      normal_src: "button/goback_normal.png",
      press_src: "button/goback_pressed.png",
      click_func: function () {
        hmApp.gotoPage({ url: "pages/index.page", param: "..." });
      },
    });
  },
});
