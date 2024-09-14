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
            hmUI.setLayerScrolling(true);

            const type = hmFS.SysProGetInt("convType");

            const text1 = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 10,
              y: 20,
              w: 172,
              h: 30,
              text: "1234567890",
              color: 0xffffff,
              text_size: 11,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
              text_style: hmUI.text_style.NONE,
            });

            const btn1 = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 10,
                y: 20 + 0 * 40,
                w: 172,
                h: 30,
                radius: 3,
                normal_color: 0xfc6950,
                press_color: 0xfeb4a8,
                text: "1234567890",
                text_size: 11,
                click_func: () => {
                    hmFS.SysProSetInt("convType", 3);
                    hmApp.gotoPage({
                      url: "page/192x490_s_l66/converter",
                    });
                  },
            });


            console.log("type: " + type);

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
