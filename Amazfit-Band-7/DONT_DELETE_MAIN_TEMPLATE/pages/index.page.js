Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);

    var menuBG = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      src: "menu/menu_bg_1.png",
    });

    var framenum = 1;

    const gameLoopTimer = timer.createTimer(0, 500, function () {
      framenum += 1;
      if (framenum > 3) {
        framenum = 1;
      }

      menuBG.setProperty(hmUI.prop.MORE, {
        src: "menu/menu_bg_" + String(framenum) + ".png",
      });
    });

    var newgame_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 22,
      y: 170,
      w: 150,
      h: 51,
      text: "",
      normal_src: "button/newgame_normal.png",
      press_src: "button/newgame_pressed.png",
      click_func: function () {
        hmApp.gotoPage({ url: "pages/gamepage", param: "..." });
      },
    });

    var settings_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 22,
      y: 210,
      w: 150,
      h: 51,
      text: "",
      normal_src: "button/setting_normal.png",
      press_src: "button/setting_pressed.png",
      click_func: function () {
        hmApp.gotoPage({ url: "pages/setting", param: "..." });
      },
    });

    // var settings_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
    //   x: 22,
    //   y: 210,
    //   w: 150,
    //   h: 51,
    //   text: "",
    //   normal_src: "button/setting_normal.png",
    //   press_src: "button/setting_pressed.png",
    //   click_func: function () {
    //     hmApp.gotoPage({ url: "pages/setting", param: "..." });
    //   },
    // });

    var about_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 22,
      y: 250,
      w: 150,
      h: 51,
      text: "",
      normal_src: "button/about_normal.png",
      press_src: "button/about_pressed.png",
      click_func: function () {
        hmApp.gotoPage({ url: "pages/devarnabxero", param: "..." });
      },
    });

    var exit_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 22,
      y: 290,
      w: 150,
      h: 51,
      text: "",
      normal_src: "button/exit_normal.png",
      press_src: "button/exit_pressed.png",
      click_func: function () {
        hmApp.gotoHome();
      },
    });
  },
});
