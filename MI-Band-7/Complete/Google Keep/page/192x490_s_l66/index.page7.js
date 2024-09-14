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
            hmUI.createWidget(hmUI.widget.IMG, {
              x: 40,
              y: 65,
              src: "icon.png",
            });
            hmUI.createWidget(hmUI.widget.TEXT, {
              x: 1,
              y: 350,
              w: 180,
              h: 300,
              color: 0xffffff,

              text_size: 25,
              text_style: hmUI.text_style.WRAP,
              text: "Fuck Humaid you son of a bitch! ArnabXero is your real daddy!",
            });
            hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 40,
              y: 900,
              text: "Help?",
              w: 100,
              h: 50,
              radius: 30,
              normal_color: 0x000000,
              press_color: 0x97cbff,
              click_func: () => {
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/index.page5",
                  param: "...",
                });
              },
            });
            hmUI.createWidget(hmUI.widget.TEXT, {
              x: 1,
              y: 250,
              w: 180,
              h: 100,
              color: 0xffffff,

              text_size: 25,
              text_style: hmUI.text_style.WRAP,
              text: "Humaid is GAY",
            });
            hmUI.createWidget(hmUI.widget.IMG, {
              x: 10,
              y: 700,
              src: "website.png",
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
