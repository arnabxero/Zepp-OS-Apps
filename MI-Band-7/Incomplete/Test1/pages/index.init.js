Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    var theme = hmFS.SysProGetInt("theme_42");
    if (theme == undefined) {
      hmFS.SysProSetInt("theme_42", 0);
      theme = 0;
    }
    var lang = hmFS.SysProGetInt("lang_42");
    if (lang == undefined) {
      hmFS.SysProSetInt("lang_42", 0);
      lang = 0;
    }
    var img
    var w1
    var w2
    if(lang == 0){
      img = "en.png"
      w1 = "PLAY"
      w2 = "EXIT"
    }else if(lang == 1){
      img = "es.png"
      w1 = "JUGAR"
      w2 = "SALIR"
    }else if(lang == 2){
      img = "ch.png"
      w1 = "玩"
      w2 = "萨利尔"
    }else{
      img = "fr.png"
      w1 = "JOUER"
      w2 = "SORTIE"
    }
    var bg = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: theme == 0 ? "presentation.png" : "presentation2.png",
    });
    var pl = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 318,
      w: 194,
      h: 50,
      text: w1,
      text_size: 30,
      color: theme == 0 ? 0xffffff : 0x272828,
      press_color: theme == 0 ? 0x2233ff : 0xf8554b,
      normal_color: theme == 0 ? 0x0000ff : 0xe7443a,
      click_func: function () {
        hmApp.gotoPage({ url: "pages/index.games", param: "..." });
      },
    });
    var bt_lang = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 130,
      y: 10,
      w: 55,
      h: 37,
      text_size: 30,
      color: 0xffffff,
      press_src: img,
      normal_src: img,
      click_func: function () {
        hmApp.gotoPage({ url: "pages/lang", param: "..." });
      },
    });
    var bt = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 10,
      y: 10,
      w: 39,
      h: 56,
      text_size: 30,
      color: 0xffffff,
      press_src: theme == 0 ? "day.png" : "night.png",
      normal_src: theme == 0 ? "day.png" : "night.png",
      click_func: function () {
        if (theme == 0) {
          theme = 1;
          hmFS.SysProSetInt("theme_42", theme);
          bg.setProperty(hmUI.prop.MORE, {
            src: "presentation2.png",
          });
          bt.setProperty(hmUI.prop.MORE, {
            x: 10,
            y: 10,
            w: 39,
            h: 56,
            press_src: "night.png",
            normal_src: "night.png",
          });
          pl.setProperty(hmUI.prop.MORE, {
            x: 0,
            y: 318,
            w: 194,
            h: 50,
            press_color: 0xf8554b,
            normal_color: 0xe7443a,
            color: 0x272828,
          });
          ex.setProperty(hmUI.prop.MORE, {
            x: 30,
            y: 250,
            w: 134,
            h: 40,
            press_color: 0x18e367,
            normal_color: 0x29f478,
            color: 0x272828,
          });
        } else {
          theme = 0;
          hmFS.SysProSetInt("theme_42", theme);
          bt.setProperty(hmUI.prop.MORE, {
            x: 10,
            y: 10,
            w: 39,
            h: 56,
            press_src: "day.png",
            normal_src: "day.png",
          });
          bg.setProperty(hmUI.prop.MORE, {
            src: "presentation.png",
          });
          pl.setProperty(hmUI.prop.MORE, {
            x: 0,
            y: 318,
            w: 194,
            h: 50,
            press_color: 0x2233ff,
            normal_color: 0x0000ff,
            color: 0xffffff,
          });
          ex.setProperty(hmUI.prop.MORE, {
            x: 30,
            y: 250,
            w: 134,
            h: 40,
            press_color: 0xff1102,
            normal_color: 0xff0000,
            color: 0xffffff,
          });
        }
      },
    });
    var ex = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 30,
      y: 250,
      w: 134,
      h: 40,
      radius: 14,
      text: w2,
      text_size: 30,
      color: theme == 0 ? 0xffffff : 0x272828,
      press_color: theme == 0 ? 0xff0000 : 0x18e367,
      normal_color: theme == 0 ? 0xff1102 : 0x29f478,
      click_func: function () {
        hmApp.goBack();
      },
    });
  },
});
