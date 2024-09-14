try {
	(function() {
		var h = __$$hmAppManager$$__.currentApp;
		new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(h, h.current));
		try {
			(function() {
				var k = __$$hmAppManager$$__.currentApp,
					m = k.current;
				new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(k, m), "drink");
				DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
				m.module = DeviceRuntimeCore.Page({
					init_view: function() {
var personcolortext = hmFS.SysProGetChars("colortextus");
var personcolorrec = hmFS.SysProGetChars("colorrecus");
				hmUI.createWidget(hmUI.widget.TEXT, {
					x: 5,
					y: 55,
					w: 187,
					h: 150,
					color: 0xff0000,
					text_size: 60,
					align_h: hmUI.align.CENTER_H,
					align_v: hmUI.align.CENTER_V,
					text_style: hmUI.text_style.WRAP,
					text: "ERROR"
                                        });
				hmUI.createWidget(hmUI.widget.TEXT, {
					x: 5,
					y: 220,
					w: 187,
					h: 150,
					color: 0xffffff,
					text_size: 25,
					align_h: hmUI.align.CENTER_H,
					align_v: hmUI.align.CENTER_V,
					text_style: hmUI.text_style.WRAP,
					text: "You can´t put the same colors on text and background"
                                        });
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 32,
                            y: 395,
                            w: 128,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "Configurate again",
                            click_func: function () {
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page24', param: '...' })
                            }
                        })
						},
					onInit: function() {
						console.log("index page.js on init invoke");
						this.init_view()
					},
					onReady: function() {
						console.log("index page.js on ready invoke")
					},
					onShow: function() {
						console.log("index page.js on show invoke")
					},
					onHide: function() {
						console.log("index page.js on hide invoke")
					},
					onDestory: function() {
						console.log("index page.js on destory invoke")
					}
				})
			})()
		} catch (k) {
			console.log(k)
		}
	})()
} catch (h) {
	console.log(h)
};