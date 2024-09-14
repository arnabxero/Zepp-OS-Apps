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
                        var ustext = hmFS.SysProGetChars("namefiv");
                        if(ustext == undefined)ustext=""
                        /*var newuser = hmFS.SysProGetInt("newusernum");
                        var delfunc = hmFS.SysProGetInt("delitem");
                        var ypos = hmFS.SysProGetInt("heigthpx");
                        var linewrited = hmFS.SysProGetInt("line");
                        var mayuscase = 1
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
                        ypos = [0, 48, 96, 144, 192, 240, 288, 336, 384, 432, 480, 700, 0];
                        /*} else {
                            ypos = hmFS.SysProGetInt("heightpx");
                        }*/
                        /*if (linewrited === undefined) {
                            linewrited = 0
                        } else {
                            linewrited = hmFS.SysProGetInt("line");
                        }*/
                        //hmApp.setLayerY(ypos[11])
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
                        var mayusprop = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 65,
                            y: 135,
                            w: 192,
                            h: 492,
                            color: 0xffffff,
                            text_size: 17,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: "M.OFF"
                        });
                        let keyboard = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 200,
                            w: 192,
                            h: 480,
                        })
var spacebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[0],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "Spc",
                            click_func: function () {
                                ustext = ustext + " "
                                update();
                            }
                        })
                        var enterbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[0],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "AC",
                            click_func: function () {
                                ustext = ""
                                mayuscase = 2
                                update();
                            }
                        })
                        var delbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[0],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x494949,
                            press_color: 0x3B3B3B,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "DEL",
                            click_func: function () {
                                ustext = ustext.substring(0, ustext.length - 1)
                                update();
                            }
                        })
                        var mayus = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[1],
                            w: 192,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 20,
                            text: "Mayus.>",
                            click_func: function () {
                            mayusstatus();
                           }
                        })
                        var abutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "a",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "a"
                                }else if(mayuscase == 2){
                                ustext = ustext + "A";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "A"
                                }
                                update();
                            }
                        })
                        var bbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "b",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "b"
                                }else if(mayuscase == 2){
                                ustext = ustext + "B";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "B"
                                }
                                update();
                            }
                        })
                        var cbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[2],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "c",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "c"
                                }else if(mayuscase == 2){
                                ustext = ustext + "C";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "C"
                                }
                                update();
                            }
                        })
                        var dbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "d",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "d"
                                }else if(mayuscase == 2){
                                ustext = ustext + "D";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "D"
                                }
                                update();
                            }
                        })
                        var ebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "e",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "e"
                                }else if(mayuscase == 2){
                                ustext = ustext + "E";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "E"
                                }
                                update();
                            }
                        })
                        var fbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[3],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "f",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "f"
                                }else if(mayuscase == 2){
                                ustext = ustext + "F";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "F"
                                }
                                update();
                            }
                        })
                        var gbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[4],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "g",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "g"
                                }else if(mayuscase == 2){
                                ustext = ustext + "G";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "G"
                                }
                                update();
                            }
                        })
                        var hbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[4],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "h",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "h"
                                }else if(mayuscase == 2){
                                ustext = ustext + "H";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "H"
                                }
                                update();
                            }
                        })
                        var ibutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[4],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "i",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "i"
                                }else if(mayuscase == 2){
                                ustext = ustext + "I";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "I"
                                }
                                update();
                            }
                        })
                        var jbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[5],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "j",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "j"
                                }else if(mayuscase == 2){
                                ustext = ustext + "J";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "J"
                                }
                                update();
                            }
                        })
                        var kbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[5],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "k",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "k"
                                }else if(mayuscase == 2){
                                ustext = ustext + "K";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "K"
                                }
                                update();
                            }
                        })
                        var lbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[5],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "l",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "l"
                                }else if(mayuscase == 2){
                                ustext = ustext + "L";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "L"
                                }
                                update();
                            }
                        })
                        var mbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[6],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "m",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "m"
                                }else if(mayuscase == 2){
                                ustext = ustext + "M";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "M"
                                }
                                update();
                            }
                        })
                        var nbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[6],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "n",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "n"
                                }else if(mayuscase == 2){
                                ustext = ustext + "N";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "N"
                                }
                                update();
                            }
                        })
                        var eniebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[6],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "ñ",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "ñ"
                                }else if(mayuscase == 2){
                                ustext = ustext + "Ñ";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "Ñ"
                                }
                                update();
                            }
                        })
                        var obutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[7],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "o",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "o"
                                }else if(mayuscase == 2){
                                ustext = ustext + "O";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "O"
                                }
                                update();
                            }
                        })
                        var pbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[7],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "p",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "p"
                                }else if(mayuscase == 2){
                                ustext = ustext + "P";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "P"
                                }
                                update();
                            }
                        })
                        var qbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[7],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "q",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "q"
                                }else if(mayuscase == 2){
                                ustext = ustext + "Q";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "Q"
                                }
                                update();
                            }
                        })
                        var rbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[8],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "r",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "r"
                                }else if(mayuscase == 2){
                                ustext = ustext + "R";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "R"
                                }
                                update();
                            }
                        })
                        //    .addEventListener(hmUI.event.CLICK_UP, );
                        var sbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[8],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "s",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "s"
                                }else if(mayuscase == 2){
                                ustext = ustext + "S";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "S"
                                }
                                update();
                            }
                        })
                        var tbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[8],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "t",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "t"
                                }else if(mayuscase == 2){
                                ustext = ustext + "T";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "T"
                                }
                                update();
                            }
                        })
                        var ubutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[9],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "u",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "u"
                                }else if(mayuscase == 2){
                                ustext = ustext + "U";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "U"
                                }
                                update();
                            }
                        })
                        var vbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[9],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "v",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "v"
                                }else if(mayuscase == 2){
                                ustext = ustext + "V";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "V"
                                }
                                update();
                            }
                        })
                        var wbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[9],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "w",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "w"
                                }else if(mayuscase == 2){
                                ustext = ustext + "W";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "W"
                                }
                                update();
                            }
                        })
                        var xbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[10],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "x",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "x"
                                }else if(mayuscase == 2){
                                ustext = ustext + "X";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "X"
                                }
                                update();
                            }
                        })
                        var ybutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[10],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "y",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "y"
                                }else if(mayuscase == 2){
                                ustext = ustext + "Y";
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "Y"
                                }
                                update();
                            }
                        })
                        var zbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[10],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "z",
                            click_func: function () {
                                if(mayuscase == 1){
                                ustext = ustext + "z"
                                }else if(mayuscase == 2){
                                ustext = ustext + "Z"
                                mayuscase = 1;
                                mayusstatusa();
                                }else{
                                ustext = ustext + "Z"
                                }
                                update();
                            }
                        })
			var itemtoseeallbuttons = keyboard.createWidget(hmUI.widget.FILL_RECT, {
			    x: 20,
		            y: ypos[11],
			    w: 10,
			    h: 10,
                            radius: 15,
			    color: 0x000000,
			    });
                        function update() {
                            if(ustext.length < 16){
                            hmFS.SysProSetChars("namefiv", ustext)
                            notename.setProperty(hmUI.prop.MORE, {
                                text: ustext
                            })
                            }else{
                            ustext = ustext.substring(0, ustext.length - 1)
                            }                            
                        }   
                        update()
function mayusstatus(){
     if(mayuscase == 1){   
     mayuscase = 2;
     mayusprop.setProperty(hmUI.prop.MORE, {
                  text: "M.ON"
                });
     }else if(mayuscase == 2){
     mayuscase = 3;
     mayusprop.setProperty(hmUI.prop.MORE, {
                  text: "M.BLOCK"
                });
     }else if(mayuscase == 3){
     mayuscase = 1;
     mayusprop.setProperty(hmUI.prop.MORE, {
                  text: "M.OFF"
                });
    }
     
}    
function mayusstatusa(){
     if(mayuscase == 1){   
     mayusprop.setProperty(hmUI.prop.MORE, {
                  text: "M.ON"
                });
     }else if(mayuscase == 2){
     mayusprop.setProperty(hmUI.prop.MORE, {
                  text: "M.BLOCK"
                });
     }else if(mayuscase == 3){
     mayusprop.setProperty(hmUI.prop.MORE, {
                  text: "M.OFF"
                });
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