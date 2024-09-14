Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    const background = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 194,
      h: 368,
      src: "devarnabxero.png",
    });

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
