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
var cursortext = "";
var cursorvel = hmFS.SysProGetInt("cursorgo");
if(cursorvel == undefined){
cursorvel = 500
}
hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 34,
                            y: 50,
                            w: 192,
                            h: 50,
                            color: 0xffffff,
                            text_size: 30,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: "Speed:"
                        });
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 105,
                            w: 64,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "-",
                            click_func: function () {
                                cursorvel = cursorvel - 25
                                cursorchange();
                            }
                        })
var curvar = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 68,
                            y: 105,
                            w: 64,
                            h: 50,
                            color: 0xffffff,
                            text_size: 30,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: cursorvel
                        });
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: 105,
                            w: 64,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "+",
                            click_func: function () {
                                cursorvel = cursorvel + 25
                                cursorchange();
                            }
                        })
hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 34,
                            y: 150,
                            w: 192,
                            h: 50,
                            color: 0xffffff,
                            text_size: 30,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: "Theme:"
                        });
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 210,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "|",
                            click_func: function () {
                                cursortext = "|"
                                cursortexttxt();
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 265,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "¦",
                            click_func: function () {
                                cursortext = "¦"
                                cursortexttxt();
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 320,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "¶",
                            click_func: function () {
                                cursortext = "¶"
                                cursortexttxt();
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 375,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "NO CURSOR",
                            click_func: function () {
                                cursortext = ""
                                cursortexttxt();
                            }
                        })
function cursorchange(){
if(cursorvel > 0 && cursorvel < 1000){
                                hmFS.SysProSetInt("cursorgo", cursorvel);
                                curvar.setProperty(hmUI.prop.more,{text:cursorvel});
                          }
}
function cursortexttxt(){
                                hmFS.SysProSetChars("cursortype", cursortext);
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