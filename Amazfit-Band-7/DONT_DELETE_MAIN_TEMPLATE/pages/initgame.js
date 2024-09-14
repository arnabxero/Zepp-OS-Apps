Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    hmFS.SysProSetInt("paddlenum", "0");

    hmFS.SysProSetInt("brickrow", "6");

    hmFS.SysProSetInt("speed", 2);

    hmFS.SysProSetInt("gamebg", "0");

    // const background = hmUI.createWidget(hmUI.widget.IMG, {
    //   x: 0,
    //   y: 0,
    //   w: 192,
    //   h: 490,
    //   src: "devarnabxero.png",
    // });

    // let curTime = 0;
    // let maxTime = 10;

    // const gameLoopTimer = timer.createTimer(0, 100, function () {
    //   curTime += 1;
    //   if (curTime >= maxTime) {
    hmApp.gotoPage({ url: "pages/index.page", param: "..." });
    //     hmTimer.deleteTimer(gameLoopTimer);
    //   }
    // });

    // var newgame_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
    //   x: 22,
    //   y: 240,
    //   w: 150,
    //   h: 51,
    //   text: "",
    //   normal_src: "button/newgame_normal.png",
    //   press_src: "button/newgame_pressed.png",
    //   click_func: function (h) {
    //     return function () {
    //       hmApp.gotoPage({
    //         url: "page/gamepage",
    //       });
    //     };
    //   },
    // });

    // var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
    //   x: 22,
    //   y: 320,
    //   w: 150,
    //   h: 51,
    //   text: "",
    //   normal_src: "button/start_normal.png",
    //   press_src: "button/start_pressed.png",
    //   click_func: function () {
    //     hmApp.gotoPage({ url: "pages/gamepage", param: "..." });
    //   },
    // });

    // hmUI.createWidget(hmUI.widget.IMG, {
    //   x: 0,
    //   y: 0,
    //   w: 198,
    //   h: 368,
    //   src: "devarnabxero.png",
    // });

    // var menu_bg = hmUI.createWidget(hmUI.widget.IMG, {
    //   x: 0,
    //   y: 0,
    //   w: 192,
    //   h: 490,
    //   src: "menu/menu_bg.png",
    // });

    // hmUI.createWidget(hmUI.widget.BUTTON, {
    //   x: 50,
    //   y: 151,
    //   w: 40,
    //   h: 95,
    //   radius: 7,
    //   text_size: 25,
    //   normal_src: "play.png",
    //   press_src: "play.png",
    //   click_func: function () {
    //     hmApp.gotoPage({ url: "pages/game", param: "..." });
    //   },
    // });
  },
});
