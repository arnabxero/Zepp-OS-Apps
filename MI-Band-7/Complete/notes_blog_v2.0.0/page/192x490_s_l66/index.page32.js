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
                                        var code = "";
                                        var codepre = "";
                                        var ypos = [0, 48, 96, 144, 192, 292];        
var variable = hmFS.SysProGetInt("wordbool");
let status = hmFS.SysProGetBool("hardmode_stat");  
hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 0,
      y: 95,
      w: 192,
      h: 35,
      radius: 20,
      line_width: 5,
      color: 0xffffff
    });
                        var accessword = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 15,
                            y: 100,
                            w: 192,
                            h: 25,
                            color: 0xffffff,
                            text_size: 20,
                            text_style: hmUI.text_style.NONE,
                            text: code
                        });
    const button = hmUI.createWidget(hmUI.widget.IMG, {
     x: 50,
     y: 135,
     src: "switch_" + status + ".png",
    });
                        let keyboard = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 248,
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
                                code = code.substring(0, code.length - 1)
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
                            text: "AC",
                            click_func: function () {
                                code = ""
                                update();
                            }
                        })
                        var onebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "1",
                            click_func: function () {
                                code = code + "1"
                                update();
                            }
                        })
                        var twobutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "2",
                            click_func: function () {
                                code = code + "2"
                                update();
                            }
                        })
                        //    .addEventListener(hmUI.event.CLICK_UP, );
                        var therebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "3",
                            click_func: function () {
                                code = code + "3"
                                update();
                            }
                        })
                        var fourbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "4",
                            click_func: function () {
                                code = code + "4"
                                update();
                            }
                        })
                        var fivebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "5",
                            click_func: function () {
                                code = code + "5"
                                update();
                            }
                        })
                        var sixbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "6",
                            click_func: function () {
                                code = code + "6"
                                update();
                            }
                        })
                        var sevenbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "7",
                            click_func: function () {
                                code = code + "7"
                                update();
                            }
                        })
                        var eightbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "8",
                            click_func: function () {
                                code = code + "8"
                                update();
                            }
                        })
                        var ninebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "9",
                            click_func: function () {
                                code = code + "9"
                                update();
                            }
                        })
                        var zerobutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[4],
                            w: 192,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "0",
                            click_func: function () {
                                code = code + "0"
                                update();
                            }
                        })
                        function update() {
                            accessword.setProperty(hmUI.prop.MORE, {
                                text: code
                            });
                       if(code.length == 6 && code != codepre){
                       codepre = code
                       code = ""
                       }
                            if(code == codepre){
                            hmFS.SysProSetChars("PassCodeApp", code);
                                hmUI.showToast({
                                text: 'Code have\nbeen set\nsuccesfully!!!'
                                });
			   hmApp.goBack()
                           }else if(code.length == 6){
                                hmUI.showToast({
                                text: 'Codes does´t match'
                                });
                                code = "";
                                codepre = "";
                          }    
                    }
button.addEventListener(hmUI.event.CLICK_DOWN, function () {
     test();
    });
   function test() {
    if (variable <= 1){
     variable = 2;
     status = true;
     button.setProperty(hmUI.prop.MORE, {
                  src: "switch_" + status + ".png"
                });
   hmFS.SysProSetInt("wordbool", variable);
   hmFS.SysProSetBool("hardmode_stat", status);
    }else if (variable >= 2){
     variable = 1;
     status = false;
     button.setProperty(hmUI.prop.MORE, {
                  src: "switch_" + status + ".png"
                });
   hmFS.SysProSetInt("wordbool", variable);
   hmFS.SysProSetBool("hardmode_stat", status);
    }else{
     variable = 1;
     check = false;
     button.setProperty(hmUI.prop.MORE, {
                  src: "switch_" + status + ".png"
                });
   hmFS.SysProSetInt("wordbool", variable);
   hmFS.SysProSetBool("hardmode_stat", status);
    }
   }
   hmFS.SysProSetInt("wordbool", variable);
   hmFS.SysProSetBool("hardmode_stat", status);
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