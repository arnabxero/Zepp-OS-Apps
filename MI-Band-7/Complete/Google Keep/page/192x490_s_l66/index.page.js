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
            const time = hmSensor.createSensor(hmSensor.id.TIME);

            var ustext = hmFS.SysProGetChars("textofuser");
            if (ustext == undefined) ustext = "";
            var ustext1 = hmFS.SysProGetChars("textofuser2");
            if (ustext1 == undefined) ustext1 = "";
            var ustext2 = hmFS.SysProGetChars("textofuser3");
            if (ustext2 == undefined) ustext2 = "";
            hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 250,
              text: "Note 1\n" + ustext,
              w: 180,
              h: 100,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x97cbff,
              click_func: () => {
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/index.page2",
                  param: "...",
                });
              },
            });
            hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 400,
              text: "Note 2\n" + ustext1,
              w: 180,
              h: 100,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x97cbff,
              click_func: () => {
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/index.page4",
                  param: "...",
                });
              },
            });

            hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 550,
              text: "Note 3\n" + ustext2,
              w: 180,
              h: 100,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x97cbff,
              click_func: () => {
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/index.page6",
                  param: "...",
                });
              },
            });

            hmUI.createWidget(hmUI.widget.TEXT, {
              x: 65,
              y: 40,
              w: 100,
              h: 40,
              color: 0xffffff,
              text_size: 25,
              text_style: hmUI.text_style.WRAP,
              text: time.format_hour + ":" + time.minute,
            });

            hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 60,
              y: 100,
              text: "＋",
              w: 70,
              h: 50,
              radius: 10,
              normal_color: 0x9300c4,
              press_color: 0x97cbff,
              click_func: () => {
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/index.page3",
                  param: "...",
                });
              },
            });
            hmUI
              .createWidget(hmUI.widget.IMG, {
                x: 74,
                y: 900,
                src: "help.png",
              })
              .addEventListener(hmUI.event.CLICK_DOWN, function (b) {
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/index.page7",
                  param: "...",
                });
              });
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
