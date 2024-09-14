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

            hmFS.SysProSetInt("convType", 0);

            const dataList = {
              0: "Foot to Meter",
              1: "Meter to Foot",
              2: "Kilometer to Mile",
              3: "Mile to Kilometer",
              4: "Celsius to Fahrenheit",
              5: "Fahrenheit to Celsius",
              6: "Kilogram to Pound",
              7: "Pound to Kilogram",
              8: "Kilogram to Ounce",
              9: "Ounce to Kilogram",
            };

            const indexList = {
              0: "0",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
            };

            const len = Object.keys(dataList).length;

            var menuArray = new Array(len + len);

            menuArray[0] = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 20 + 0 * 40,
              w: 172,
              h: 30,
              radius: 3,
              normal_color: 0xfc6950,
              press_color: 0xfeb4a8,
              text: "" + dataList[0],
              text_size: 11,
              click_func: () => {
                hmFS.SysProSetInt("convType", 0);
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/converter",
                });
              },
            });

            menuArray[1] = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 20 + 1 * 40,
              w: 172,
              h: 30,
              radius: 3,
              normal_color: 0xfc6950,
              press_color: 0xfeb4a8,
              text: "" + dataList[1],
              text_size: 11,
              click_func: () => {
                hmFS.SysProSetInt("convType", 1);
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/converter",
                });
              },
            });

            menuArray[2] = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 20 + 2 * 40,
              w: 172,
              h: 30,
              radius: 3,
              normal_color: 0xfc6950,
              press_color: 0xfeb4a8,
              text: "" + dataList[2],
              text_size: 11,
              click_func: () => {
                hmFS.SysProSetInt("convType", 2);
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/converter",
                });
              },
            });

            menuArray[3] = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 20 + 3 * 40,
              w: 172,
              h: 30,
              radius: 3,
              normal_color: 0xfc6950,
              press_color: 0xfeb4a8,
              text: "" + dataList[3],
              text_size: 11,
              click_func: () => {
                hmFS.SysProSetInt("convType", 3);
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/converter",
                });
              },
            });
            

            // for (var i = 0; i < len + len; i++) {

            //   menuArray[i] = hmUI.createWidget(hmUI.widget.BUTTON, {
            //     x: 10,
            //     y: 20 + i * 40,
            //     w: 172,
            //     h: 30,
            //     radius: 3,
            //     normal_color: 0xfc6950,
            //     press_color: 0xfeb4a8,
            //     text: ""+dataList[i],
            //     text_size: 11,
            //     click_func: () => {
            //       var index = i;
            //       console.log("button click: "+ index);
            //     },
            //   });
            // }

            // menuArray[i].addEventListener(
            //   hmUI.event.CLICK_DOWN,
            //   function (info) {
            //     hmApp.gotoPage({
            //       url: "page/192x490_s_l66/index.page",
            //     });
            //   }
            // );

            // for (var i = 0; i < len; i++) {
            //   menuArray[i] = hmUI.createWidget(hmUI.widget.TEXT, {
            //     x: 20,
            //     y: 0 + i * 50 - 180,
            //     w: 192,
            //     h: 490,
            //     color: 0xffffff,
            //     text_size: 11,
            //     align_h: hmUI.align.LEFT,
            //     align_v: hmUI.align.CENTER_V,
            //     text_style: hmUI.text_style.ELLIPSIS,
            //     text: i + 1 + ". " + dataList[i],
            //   });

            //   menuArray[i].addEventListener(
            //     hmUI.event.CLICK_DOWN,
            //     function (info) {

            //       hmApp.gotoPage({
            //         url: "page/192x490_s_l66/index.page",
            //       });
            //     }
            //   );
            // }

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
