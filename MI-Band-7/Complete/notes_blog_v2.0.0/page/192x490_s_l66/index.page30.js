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
var personcolortext = hmFS.SysProGetChars("precolortextus");
var personcolorrec = hmFS.SysProGetChars("precolorrecus");
				hmUI.createWidget(hmUI.widget.TEXT, {
					x: 5,
					y: 50,
					w: 187,
					h: 200,
					color: 0xffffff,
					text_size: 25,
					align_h: hmUI.align.CENTER_H,
					align_v: hmUI.align.CENTER_V,
					text_style: hmUI.text_style.WRAP,
					text: "It is possibly that your Contrast isn´t very good, anyway, you would like to change it?"
                                        });
                               hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 16,
						  y: 325,
						  w: 160,
						  h: 50,
                                                  radius: 15,
						  color: personcolorrec,
					});
				hmUI.createWidget(hmUI.widget.TEXT, {
					x: 5,
					y: 330,
					w: 187,
					h: 45,
					color: personcolortext,
					text_size: 25,
					align_h: hmUI.align.CENTER_H,
					align_v: hmUI.align.CENTER_V,
					text_style: hmUI.text_style.WRAP,
					text: "text"
                                        });
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 32,
                            y: 390,
                            w: 128,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "OK",
                            click_func: function () {
                                hmFS.SysProSetInt("indexcolor", 6)
                                hmFS.SysProSetChars("colortextus", personcolortext)
                                hmFS.SysProSetChars("colorrecus", personcolorrec)
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page', param: '...' })
                                hmApp.gotoHome()
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