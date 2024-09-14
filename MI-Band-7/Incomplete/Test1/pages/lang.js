Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    var theme = hmFS.SysProGetInt("theme_42");
    const c_ph = ["Actual:", "Actual:", "实际:", "réel:"]
    const backGround = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 192,
      h: 368,
  color: theme == 0 ? 0xEDF1F7 : 0x4d5158
  })
    var lang = hmFS.SysProGetInt("lang_42");
    if (lang == undefined) {
      hmFS.SysProSetInt("lang_42", 0);
      lang = 0;
    }
    var img
    if(lang == 0){
      img = "en.png"
    }else if(lang == 1){
      img = "es.png"
    }else if(lang == 2){
      img = "ch.png"
    }else{
      img = "fr.png"
    }
    var lang1 = hmUI.createWidget(hmUI.widget.IMG, {
      x: 10,
      y: 100,
      src: "en.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmFS.SysProSetInt("lang_42", 0);
      bt_lang.setProperty(hmUI.prop.MORE, {
        src: "en.png"
      });
      langact.setProperty(hmUI.prop.MORE, {
        text: c_ph[0]
      });
    })
    var lang2 = hmUI.createWidget(hmUI.widget.IMG, {
      x: 10,
      y: 150,
      src: "es.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmFS.SysProSetInt("lang_42", 1);
      bt_lang.setProperty(hmUI.prop.MORE, {
        src: "es.png"
      });
      langact.setProperty(hmUI.prop.MORE, {
        text: c_ph[1]
      });
    })
    var lang3 = hmUI.createWidget(hmUI.widget.IMG, {
      x: 10,
      y: 200,
      src: "ch.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmFS.SysProSetInt("lang_42", 2);
      bt_lang.setProperty(hmUI.prop.MORE, {
        src: "ch.png"
      });
      langact.setProperty(hmUI.prop.MORE, {
        text: c_ph[2]
      });
    })
    var lang4 = hmUI.createWidget(hmUI.widget.IMG, {
      x: 10,
      y: 250,
      src: "fr.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmFS.SysProSetInt("lang_42", 3);
      bt_lang.setProperty(hmUI.prop.MORE, {
        src: "fr.png"
      });
      langact.setProperty(hmUI.prop.MORE, {
        text: c_ph[3]
      });
    })
    var langgtext1 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 70,
      y: 100,
      w: 140,
      h: 40,
      color: theme == 0 ? theme == 0 ? 0x555555 : 0xffffff : 0xffffff,
      text_size: 20,
      text: 'English'
  }).addEventListener(hmUI.event.CLICK_DOWN, () => {
    hmFS.SysProSetInt("lang_42", 0);
    bt_lang.setProperty(hmUI.prop.MORE, {
      src: "en.png"
    });
    langact.setProperty(hmUI.prop.MORE, {
      text: c_ph[0]
    });
  })
  var langgtext2 = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 70,
    y: 150,
    w: 140,
    h: 40,
    color: theme == 0 ? 0x555555 : 0xffffff,
    text_size: 20,
    text: 'Spanish'
}).addEventListener(hmUI.event.CLICK_DOWN, () => {
  hmFS.SysProSetInt("lang_42", 1);
  bt_lang.setProperty(hmUI.prop.MORE, {
    src: "es.png"
  });
  langact.setProperty(hmUI.prop.MORE, {
    text: c_ph[1]
  });
})
var langgtext3 = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 70,
  y: 200,
  w: 140,
  h: 40,
  color: theme == 0 ? 0x555555 : 0xffffff,
  text_size: 20,
  text: 'Chinese'
}).addEventListener(hmUI.event.CLICK_DOWN, () => {
  hmFS.SysProSetInt("lang_42", 2);
  bt_lang.setProperty(hmUI.prop.MORE, {
    src: "ch.png"
  })  
  langact.setProperty(hmUI.prop.MORE, {
    text: c_ph[2]
  });
})
var langgtext4 = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 70,
  y: 250,
  w: 140,
  h: 40,
  color: theme == 0 ? 0x555555 : 0xffffff,
  text_size: 20,
  text: 'French'
}).addEventListener(hmUI.event.CLICK_DOWN, () => {
  hmFS.SysProSetInt("lang_42", 3);
  bt_lang.setProperty(hmUI.prop.MORE, {
    src: "fr.png"
  });
  langact.setProperty(hmUI.prop.MORE, {
    text: c_ph[3]
  });
})
var langact = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 5,
  y: 10,
  w: 140,
  h: 40,
  color: theme == 0 ? 0x555555 : 0xffffff,
  text_size: 20,
  text: c_ph[0]
})
    var bt_lang = hmUI.createWidget(hmUI.widget.IMG, {
      x: 130,
      y: 10,
      src: img
    });
  },
});
