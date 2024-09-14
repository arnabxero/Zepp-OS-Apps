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
                        var docki = 1
                        var menueditopenone = 1
                        var menueditopentwo = 1
                        var menueditopenthe = 1
                        var menueditopenfou = 1
                        var menueditopenfiv = 1
                        var none = hmFS.SysProGetChars("nameone");
                        if(none == undefined)none="page 1"
                        var ntwo = hmFS.SysProGetChars("nametwo");
                        if(ntwo == undefined)ntwo="page 2"
                        var nthe = hmFS.SysProGetChars("namethe");
                        if(nthe == undefined)nthe="page 3"
                        var nfou = hmFS.SysProGetChars("namefou");
                        if(nfou == undefined)nfou="page 4"
                        var nfiv = hmFS.SysProGetChars("namefiv");
                        if(nfiv == undefined)nfiv="page 5"
                        var tone = hmFS.SysProGetChars("textofuser");
                        var ttwo = hmFS.SysProGetChars("textofusera");
                        var tthe = hmFS.SysProGetChars("textofuserb");
                        var tfou = hmFS.SysProGetChars("textofuserc");
                        var tfiv = hmFS.SysProGetChars("textofuserd");
hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 115,
						  w: 192,
						  h: 225,
                                                  radius: 5,
						  color: 0x494949,
					});
hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 350,
						  w: 192,
						  h: 225,
                                                  radius: 5,
						  color: 0x494949,
					});
hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 585,
						  w: 192,
						  h: 225,
                                                  radius: 5,
						  color: 0x494949,
					});
hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 820,
						  w: 192,
						  h: 225,
                                                  radius: 5,
						  color: 0x494949,
					});
hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 1055,
						  w: 192,
						  h: 225,
                                                  radius: 5,
						  color: 0x494949,
					});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 25,
							y: 120,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 30,
							text: none
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 25,
							y: 355,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 30,
							text: ntwo
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 590,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 30,
							text: nthe
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 25,
							y: 825,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 30,
							text: nfou
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 25,
							y: 1060,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 30,
							text: nfiv
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 180,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: "Read time:\n" + Math.round(tone.length * 3.8 / 500) + "min"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 415,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: "Read time:\n" + Math.round(ttwo.length * 3.8 / 500) + "min"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 650,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: "Read time:\n" + Math.round(tthe.length * 3.8 / 500) + "min"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 885,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: "Read time:\n" + Math.round(tfou.length * 3.8 / 500) + "min"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 1120,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: "Read time:\n" + Math.round(tfiv.length * 3.8 / 500) + "min"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 240,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: tone.length + "items"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 475,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: ttwo.length + "items"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 710,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: tthe.length + "items"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 945,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: tfou.length + "items"
						});
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 1180,
							w: 193,
							h: 70,
							color: 0xffffff,
							text_size: 25,
							text: tfiv.length + "items"
						});
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 10,
                            y: 282,
                            w: 172,
                            h: 48,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "DELETE TEXT",
                            click_func: function () {
                            hmFS.SysProSetChars("textofuser", "-")
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 10,
                            y: 517,
                            w: 172,
                            h: 48,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "DELETE TEXT",
                            click_func: function () {
                            hmFS.SysProSetChars("textofusera", "-")
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 10,
                            y: 752,
                            w: 172,
                            h: 48,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "DELETE TEXT",
                            click_func: function () {
                            hmFS.SysProSetChars("textofuserb", "-")
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 10,
                            y: 987,
                            w: 172,
                            h: 48,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "DELETE TEXT",
                            click_func: function () {
                            hmFS.SysProSetChars("textofuserc", "-")
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 10,
                            y: 1222,
                            w: 172,
                            h: 48,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 25,
                            text: "DELETE TEXT",
                            click_func: function () {
                            hmFS.SysProSetChars("textofuserd", "-")
                            }
                        })
hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 1365,
							w: 193,
							h: 70,
							color: 0x000000,
							text_size: 25,
							text: "how are you???"
						});
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