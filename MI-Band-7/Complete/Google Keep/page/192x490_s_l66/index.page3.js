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
  hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 20,
      y: 70,
      text: 'Note 1',
      w: 160,
      h: 50,
      radius: 10,
      normal_color: 0x000000,
      press_color: 0x97cbff,
      click_func: () => {
hmApp.gotoPage({
					url: "page/192x490_s_l66/index.page2",
					param: "..."
				});
      }
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 20,
      y: 140,
      text: 'Note 2',
      w: 160,
      h: 50,
      radius: 10,
      normal_color: 0x000000,
      press_color: 0x97cbff,
      click_func: () => {
hmApp.gotoPage({
					url: "page/192x490_s_l66/index.page4",
					param: "..."
				});
      }
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 20,
      y: 210,
      text: 'Note 3',
      w: 160,
      h: 50,
      radius: 10,
      normal_color: 0x000000,
      press_color: 0x97cbff,
      click_func: () => {
hmApp.gotoPage({
					url: "page/192x490_s_l66/index.page6",
					param: "..."
				});
      }
    })
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
    }
  });
})();
} catch (e) {
console.log(e);
}
})();
} catch (e) {
console.log(e);
}