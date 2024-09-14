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
hmUI.setLayerScrolling(false)
var typedel = 1;
                        var confirmmenu = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 492,
                        })
confirmmenu.setProperty(hmUI.prop.VISIBLE, false)
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 16,
                            y: 90,
                            w: 160,
                            h: 50,
                            radius: 15,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xffffff,
                            text_size: 25,
                            text: "DELETE ALL TEXT",
                            click_func: function () {
typedel = 1;
confirmmenu.setProperty(hmUI.prop.VISIBLE, true)
                            }
                        })
                       hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 16,
                            y: 160,
                            w: 160,
                            h: 50,
                            radius: 15,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xffffff,
                            text_size: 25,
                            text: "APP RESET",
                            click_func: function () {
typedel = 2;
confirmmenu.setProperty(hmUI.prop.VISIBLE, true)
                            }
                        })
                       hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 16,
                            y: 230,
                            w: 160,
                            h: 50,
                            radius: 15,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xffffff,
                            text_size: 25,
                            text: "DELETE ALL",
                            click_func: function () {
typedel = 3;
confirmmenu.setProperty(hmUI.prop.VISIBLE, true)
                            }
                        })
                       hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 16,
                            y: 300,
                            w: 160,
                            h: 50,
                            radius: 15,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xffffff,
                            text_size: 25,
                            text: "PASSWORD",
                            click_func: function () {
                                 hmApp.gotoPage({url: "page/192x490_s_l66/index.page32", param: "..."})
                            }
                        })
                        var textuser = confirmmenu.createWidget(hmUI.widget.TEXT, {
                            x: 5,
                            y: 395,
                            w: 192,
                            h: 492,
                            color: 0xffffff,
                            text_size: 30,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: "Are you sure?"
                        });
                        var clearalltext = confirmmenu.createWidget(hmUI.widget.BUTTON, {
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
                                 typeofdel()
                            }
                        })
                        var clearalltextt = confirmmenu.createWidget(hmUI.widget.BUTTON, {
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
function typeofdel() {
         if(typedel == 1){
                                hmFS.SysProSetChars("textofuser", "-");
                                hmFS.SysProSetChars("textofusera", "-");
                                hmFS.SysProSetChars("textofuserb", "-");
                                hmFS.SysProSetChars("textofuserc", "-");
                                hmFS.SysProSetChars("textofuserd", "-")
         }else if(typedel == 2){
                                hmFS.SysProSetInt("marg", 3);
                                hmFS.SysProSetInt("size", 20);
                                hmFS.SysProSetChars("colortextus", "0xffffff");
                                hmFS.SysProSetChars("colorrecus", "0x000000");
                                hmFS.SysProSetInt("indexcolor", 1)
         }else{
                                hmFS.SysProSetChars("textofuser", "-");
                                hmFS.SysProSetChars("textofusera", "-");
                                hmFS.SysProSetChars("textofuserb", "-");
                                hmFS.SysProSetChars("textofuserc", "-");
                                hmFS.SysProSetChars("textofuserd", "-");
                                hmFS.SysProSetInt("marg", 3);
                                hmFS.SysProSetInt("size", 20);
                                hmFS.SysProSetChars("colortextus", "0xffffff");
                                hmFS.SysProSetChars("colorrecus", "0x000000");
                                hmFS.SysProSetInt("indexcolor", 1)
        }
       hmApp.goBack()
}
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