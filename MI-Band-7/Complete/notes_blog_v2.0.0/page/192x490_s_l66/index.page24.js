try {
    (function () {
        var h = __$$hmAppManager$$__.currentApp;
        new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(h, h.current));
        try {
            (function () {
                var k = __$$hmAppManager$$__.currentApp,
                    m = k.current;
                new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(k, m), "drink");
                DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
                m.module = DeviceRuntimeCore.Page({
                    init_view: function () {
                        var ustext = "0x";
                        /*var newuser = hmFS.SysProGetInt("newusernum");
                        var delfunc = hmFS.SysProGetInt("delitem");
                        var ypos = hmFS.SysProGetInt("heigthpx");
                        var linewrited = hmFS.SysProGetInt("line");
                        var cool = hmFS.SysProGetChars("colortextus");
                        if (newuser === undefined) {
                            ustext = ""
                        } else {
                            ustext = hmFS.SysProGetChars("nameone");
                        }
                        if (delfunc === undefined) {
                            delfunc = 0
                        } else {
                            delfunc = hmFS.SysProGetInt("delitem");
                        }*/
                        //if (ypos === undefined) {
                        ypos = [0, 48, 96, 144, 192, 240, 288, 431];
                        /*} else {
                            ypos = hmFS.SysProGetInt("heightpx");
                        }*/
                        /*if (linewrited === undefined) {
                            linewrited = 0
                        } else {
                            linewrited = hmFS.SysProGetInt("line");
                        }*/
                        //hmApp.setLayerY(ypos[15])
hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 0,
      y: 95,
      w: 192,
      h: 35,
      radius: 20,
      line_width: 5,
      color: 0xffffff
    });
                        var notename = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 15,
                            y: 100,
                            w: 192,
                            h: 25,
                            color: 0xffffff,
                            text_size: 20,
                            text_style: hmUI.text_style.NONE,
                            text: ustext
                        });
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 16,
                            y: 140,
                            w: 160,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xfe8e40F,
                            text_size: 30,
                            text: "ACTUAL",
                            click_func: function () {
                                ustext = hmFS.SysProGetChars("colortextus")
                                update();
                            }
                        })
                        let keyboard = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 200,
                            w: 192,
                            h: 480,
                        })
                        var delbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[0],
                            w: 96,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "DEL",
                            click_func: function () {
                                ustext = ustext.substring(0, ustext.length - 1)
                                if(ustext == ""){
                                ustext = "0x"
                                }
                                update();
                            }
                        })
                        var enterbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 96,
                            y: ypos[0],
                            w: 96,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "0x",
                            click_func: function () {
                                ustext = "0x"
                                update();
                            }
                        })
                        var abutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "a",
                            click_func: function () {
                                //delfunc = 0
                                itemline = 1 
                                ustext = ustext + "a"
                                update();
                            }
                        })
                        //    .addEventListener(hmUI.event.CLICK_UP, );
                        var bbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "b",
                            click_func: function () {
                                itemline = 1 
                                ustext = ustext + "b"
                                update();
                            }
                        })
                        var cbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "c",
                            click_func: function () {
                                itemline = 1 
                                ustext = ustext + "c"
                                update();
                            }
                        })
                        var dbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "d",
                            click_func: function () {
                                itemline = 2 
                                ustext = ustext + "d"
                                update();
                            }
                        })
                        var ebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "e",
                            click_func: function () {
                                itemline = 2 
                                ustext = ustext + "e"
                                update();
                            }
                        })
                        var fbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "f",
                            click_func: function () {
                                itemline = 2
                                ustext = ustext + "f"
                                update();
                            }
                        })
                        var onebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "1",
                            click_func: function () {
                                itemline = 6
                                ustext = ustext + "1"
                                update();
                            }
                        })
                        var twobutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "2",
                            click_func: function () {
                                //delfunc = 0
                                itemline = 7
                                ustext = ustext + "2"
                                update();
                            }
                        })
                        //    .addEventListener(hmUI.event.CLICK_UP, );
                        var therebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "3",
                            click_func: function () {
                                itemline = 7
                                ustext = ustext + "3"
                                update();
                            }
                        })
                        var fourbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[4],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "4",
                            click_func: function () {
                                itemline = 7
                                ustext = ustext + "4"
                                update();
                            }
                        })
                        var fivebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[4],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "5",
                            click_func: function () {
                                itemline = 8
                                ustext = ustext + "5"
                                update();
                            }
                        })
                        var sixbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[4],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "6",
                            click_func: function () {
                                itemline = 8
                                ustext = ustext + "6"
                                update();
                            }
                        })
                        var sevenbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[5],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "7",
                            click_func: function () {
                                itemline = 8
                                ustext = ustext + "7"
                                update();
                            }
                        })
                        var eightbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[5],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "8",
                            click_func: function () {
                                itemline = 9
                                ustext = ustext + "8"
                                update();
                            }
                        })
                        var ninebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[5],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "9",
                            click_func: function () {
                                itemline = 9
                                ustext = ustext + "9"
                                update();
                            }
                        })
                        var zerobutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[6],
                            w: 192,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "0",
                            click_func: function () {
                                itemline = 9
                                ustext = ustext + "0"
                                update();
                            }
                        })
			var itemtoseeallbuttons = keyboard.createWidget(hmUI.widget.FILL_RECT, {
			    x: 20,
		            y: ypos[7],
			    w: 10,
			    h: 10,
                            radius: 15,
			    color: 0x000000,
			    });
                        function update() {
                            notename.setProperty(hmUI.prop.MORE, {
                                text: ustext
                            });
                            if(ustext.length == 8){
                            hmFS.SysProSetChars("precolortextus", ustext);
                            hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page25', param: '...' })
                            }
                        }         
                    },
                    onInit: function () {
                        console.log("index page.js on init invoke");
                        this.init_view()
                    },
                    onReady: function () {
                        console.log("index page.js on ready invoke")
                    },
                    onShow: function () {
                        console.log("index page.js on show invoke")
                    },
                    onHide: function () {
                        console.log("index page.js on hide invoke")
                    },
                    onDestory: function () {
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