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
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 5,
							y: 55,
							w: 200,
							h: 400,
							color: 0xFFFFFF,
							text_size: 20,
							text: "Are you sure that\nyou want to delete\nall the text?\n\nIf you do it,\nall text written\nwill be deleted"
						});
                        var clearalltext = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 48,
                            radius: 5,
                            normal_color: 0x6CE600,
                            press_color: 0x57BA00,
                            color: 0xFFFFFF,
                            text_size: 30,
                            text: "YES",
                            click_func: function () {
                                 hmFS.SysProSetChars("textofuserc", "-")
                                 hmApp.goBack()
                            }
                        })
                        var clearalltext = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 442,
                            w: 192,
                            h: 48,
                            radius: 5,
                            normal_color: 0xE50000,
                            press_color: 0xBD0000,
                            color: 0xFFFFFF,
                            text_size: 30,
                            text: "NO",
                            click_func: function () {
                               hmApp.goBack()
                            }
                        })
                                           hmUI.createWidget(hmUI.widget.IMG, {
						x: 74,
						y: 375,
						src: "help.png"
					})
					.addEventListener(hmUI.event.CLICK_UP, function (c) {
						hmApp.gotoPage({
							url: "page/192x490_s_l66/index.page4",
							param: "..."
						})
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