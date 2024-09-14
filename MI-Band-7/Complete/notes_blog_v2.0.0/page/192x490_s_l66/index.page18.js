
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
var dockittii = 1
var menudespone = 1
var menudesptwo = 1
var menudespthe = 1
var menudespfou = 1
var menudespsix = 1
var stxt = hmFS.SysProGetInt("size");
if(stxt == undefined){
stxt = 20
}
var margen = hmFS.SysProGetInt("marg");
if(margen == undefined){
margen = 3
}
var cursorvel = hmFS.SysProGetInt("cursorgo");
if(cursorvel == undefined){
cursorvel = 500
}
var colorpage = hmFS.SysProGetInt("indexcolor");
if(colorpage == undefined){
colorpage = "0x000000"
}
var colorpertxt = hmFS.SysProGetChars("colortextus");
if(colorpertxt == undefined){
colorpertxt = "0xffffff"
}
var colorperback = hmFS.SysProGetChars("colorrecus");
if(colorperback == undefined){
colorperback = "0x000000"
}
var menu = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 150,
                            w: 192,
                            h: 70,
                        });
menu.setProperty(hmUI.prop.VISIBLE, false)
var menut = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 285,
                            w: 192,
                            h: 150,
                        });
menut.setProperty(hmUI.prop.VISIBLE, false)
var menuthu = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 385,
                            w: 192,
                            h: 70,
                        });
menuthu.setProperty(hmUI.prop.VISIBLE, false)
var menufou = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 685,
                            w: 192,
                            h: 70,
                        });
menufou.setProperty(hmUI.prop.VISIBLE, false)
var menufiv = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 585,
                            w: 192,
                            h: 70,
                        });
menufiv.setProperty(hmUI.prop.VISIBLE, false)
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 50,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xf6e541,
                            text_size: 25,
                            text: "Advanced",
                            click_func: function () {
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page28', param: '...' })
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 100,
                            w: 192,
                            h: 50,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "Change name",
                            click_func: function () {
                                if(menudespone == 1){
                                menudespone = 2
                                menu.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menudespone = 1
                                menu.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
var menuo = menu.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 35,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "1",
                            click_func: function () {
                                dockittii = 1
                                gott();
                            }
                        })
var menutt = menu.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: 0,
                            w: 64,
                            h: 35,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "2",
                            click_func: function () {
                                dockittii = 2
                                gott();
                            }
                        })
var menuth = menu.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: 0,
                            w: 64,
                            h: 35,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "3",
                            click_func: function () {
                                dockittii = 3
                                gott();
                            }
                        })
var menuf = menu.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 35,
                            w: 64,
                            h: 35,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "4",
                            click_func: function () {
                                dockittii = 4
                                gott();
                            }
                        })
var menufi = menu.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: 35,
                            w: 64,
                            h: 35,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "5",
                            click_func: function () {
                                dockittii = 5
                                gott();
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 235,
                            w: 192,
                            h: 50,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "Text size",
                            click_func: function () {
                                if(menudesptwo == 1){
                                menudesptwo = 2
                                menut.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menudesptwo = 1
                                menut.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
var menusitt = menut.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "-",
                            click_func: function () {
                                stxt = stxt - 1
                                sizedock();
                            }
                        })
var txtvar = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 78,
                            y: 285,
                            w: 64,
                            h: 50,
                            color: 0xffffff,
                            text_size: 35,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: stxt
                        });
var menusithh = menut.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: 0,
                            w: 64,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "+",
                            click_func: function () {
                                stxt = stxt + 1
                                sizedock();
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 340,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "Margin",
                            click_func: function () {
                                if(menudespthe == 1){
                                menudespthe = 2
                                menuthu.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menudespthe = 1
                                menuthu.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
var menusittuughh = menuthu.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "-",
                            click_func: function () {
                                margen = margen - 1
                                margenpx();
                            }
                        })
var margvar = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 78,
                            y: 385,
                            w: 64,
                            h: 50,
                            color: 0xffffff,
                            text_size: 35,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: margen
                        });
var menusithhuughhhhh = menuthu.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: 0,
                            w: 64,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "+",
                            click_func: function () {
                                margen = margen + 1
                                margenpx();
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 440,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "Manage notes",
                            click_func: function () {
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page29', param: '...' })
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 540,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "Cursor",
                            click_func: function () {
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page33', param: '...' })
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 640,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "Color page",
                            click_func: function () {
                                if(menudespfou == 1){
                                menudespfou = 2
                                menufou.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menudespfou = 1
                                menufou.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
var menusittuughhsdgbfjhgwaqeurdfgaiehriuaq = menufou.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x000000,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "Black on White",
                            click_func: function () {
                            hmFS.SysProSetInt("indexcolor", 1);
                            }
                        })
var menugale = menufou.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 45,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0xffffff,
                            press_color: 0x555555,
                            color: 0x000000,
                            text_size: 25,
                            text: "White on Black",
                            click_func: function () {
                            hmFS.SysProSetInt("indexcolor", 2);
                            }
                        })
var menuproodata = menufou.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 90,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0xFFFDD1,
                            press_color: 0x7e7e7e,
                            color: 0x000000,
                            text_size: 25,
                            text: "Black on Cream",
                            click_func: function () {
                            hmFS.SysProSetInt("indexcolor", 3);
                            }
                        })
var menuperitem = menufou.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 135,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0xffffff,
                            press_color: 0x7e7e7e,
                            color: 0x282894,
                            text_size: 25,
                            text: "Blue on White",
                            click_func: function () {
                            hmFS.SysProSetInt("indexcolor", 4);
                            }
                        })
var menusiitemt = menufou.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 180,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: 0x000000,
                            press_color: 0x7e7e7e,
                            color: 0x00ff00,
                            text_size: 25,
                            text: "Green on Black",
                            click_func: function () {
                            hmFS.SysProSetInt("indexcolor", 5);
                            }
                        })
var menusdatll = menufou.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 225,
                            w: 192,
                            h: 45,
                            radius: 15,
                            normal_color: colorperback,
                            press_color: 0x7e7e7e,
                            color: colorpertxt,
                            text_size: 25,
                            text: "Personalize>",
                            click_func: function () {
                            hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page24', param: '...' })
                            }
                        })
hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 78,
                            y: 1000,
                            w: 64,
                            h: 50,
                            color: 0x000000,
                            text_size: 35,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: "halloooo"
                        });
function gott(){
                                if(dockittii == 1){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page19', param: '...' })
                                }else if(dockittii == 2){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page20', param: '...' })
                                }else if(dockittii == 3){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page21', param: '...' })
                                }else if(dockittii == 4){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page22', param: '...' })
                                }else{
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page23', param: '...' })
                                }
}
function sizedock(){
if(stxt > 14 && stxt < 36){
                                hmFS.SysProSetInt("size", stxt);
                                txtvar.setProperty(hmUI.prop.more,{text:stxt});
                          }
}
function margenpx(){
if(margen > 0 && margen < 31){
                                hmFS.SysProSetInt("marg", margen);
                                margvar.setProperty(hmUI.prop.more,{text:margen});
                          }
}
function cursorchange(){
if(cursorvel > 0 && cursorvel < 1000){
                                hmFS.SysProSetInt("cursorgo", cursorvel);
                                curvar.setProperty(hmUI.prop.more,{text:cursorvel});
                          }
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