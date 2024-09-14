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
                               hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 0,
						  w: 192,
						  h: 492,
                                                  radius: 0,
						  color: personcolorrec,
					});
				hmUI.createWidget(hmUI.widget.TEXT, {
					x: 5,
					y: 110,
					w: 187,
					h: 150,
					color: personcolortext,
					text_size: 25,
					align_h: hmUI.align.CENTER_H,
					align_v: hmUI.align.CENTER_V,
					text_style: hmUI.text_style.WRAP,
					text: "Your text\nlook\nlike this"
                                        });
				hmUI.createWidget(hmUI.widget.TEXT, {
					x: 5,
					y: 260,
					w: 187,
					h: 150,
					color: personcolortext,
					text_size: 15,
					align_h: hmUI.align.CENTER_H,
					align_v: hmUI.align.CENTER_V,
					text_style: hmUI.text_style.WRAP,
					text: personcolortext + " in " + personcolorrec
                                        });
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 32,
                            y: 52,
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
hmApp.exit()
                            }
                        })
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