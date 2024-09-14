

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
                        var ustext = hmFS.SysProGetChars("textofusera");
                        if(ustext == undefined || ustext == "")ustext="-"
                        var sizetxt = hmFS.SysProGetInt("size");
                        if(sizetxt == undefined)sizetxt=20
                        var margdock = hmFS.SysProGetInt("marg");
                        if(margdock == undefined)margdock=3
                        if(ustext == "-")mayuscase=2
                        var cursorvel = hmFS.SysProGetInt("cursorgo");
                        if(cursorvel == undefined)cursorvel=500
                        var curtext = hmFS.SysProGetChars("cursortype")
                        if(curtext == undefined)curtext="|"
                        var indexcolortext = hmFS.SysProGetInt("indexcolor");
                        var indexcolorrec;
                        if(indexcolortext == undefined){
                        indexcolortext="0xffffff"
                        indexcolorrec="0x000000"
                        }else if(indexcolortext == 1){
                        indexcolortext="0xffffff"
                        indexcolorrec="0x000000"
                        }else if(indexcolortext == 2){
                        indexcolortext="0x000000"
                        indexcolorrec="0xffffff"
                        }else if(indexcolortext == 3){
                        indexcolortext="0x000000"
                        indexcolorrec="0xFFFDD1"
                        }else if(indexcolortext == 4){
                        indexcolortext="0x282894"
                        indexcolorrec="0xffffff"
                        }else if(indexcolortext == 5){
                        indexcolortext="0x00ff00"
                        indexcolorrec="0x000000"
                        }else if(indexcolortext == 6){
                        indexcolortext=hmFS.SysProGetChars("colortextus")
                        indexcolorrec=hmFS.SysProGetChars("colorrecus")
                        }
                        var mayuscase = 1,cursorFlag=false,cursorIndex=ustext.length,preLen=ustext.length
                            const { width, height } = hmUI.getTextLayout(ustext, {
                                text_size: sizetxt,
                                text_width: 192- margdock
                            })
                        if(height == 0)height=204         
                        /*var newuser = hmFS.SysProGetInt("newusernum");
                        var delfunc = hmFS.SysProGetInt("delitem");
                        var ypos = hmFS.SysProGetInt("heigthpx");
                        var linewrited = hmFS.SysProGetInt("line");
                        if (newuser === undefined) {
                            ustext = ""
                        } else {
                            ustext = hmFS.SysProGetChars("textofuser");
                        }
                        if (delfunc === undefined) {
                            delfunc = 0
                        } else {
                            delfunc = hmFS.SysProGetInt("delitem");
                        }*/
                        //if (ypos === undefined) {
                        ypos = [0, 48, 96, 144, 192, 240, 288, 336, 384, 432, 480, 528, 576, 624, 672, 720, 768, 816, 864, 912, 960, 1080, 0];
                        /*} else {
                            ypos = hmFS.SysProGetInt("heightpx");
                        }*/
                        /*if (linewrited === undefined) {
                            linewrited = 0
                        } else {
                            linewrited = hmFS.SysProGetInt("line");
                        }*/
                        const clearalltext = hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "clear",
                            click_func: function () {
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page14', param: '...' })
                            }
                        })
const background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 48,
						  w: 192,
						  h: 252 + height,
                                                  radius: 0,
						  color: indexcolorrec,
					});
                         var charactersnum = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 65,
                            y: 50,
                            w: 192,
                            h: 492,
                            color: indexcolortext,
                            text_size: 25,
                            text_style: hmUI.text_style.NONE,
                            text: ustext.length + "items"
                        });
                        var mayusprop = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 65,
                            y: 85,
                            w: 192,
                            h: 492,
                            color: indexcolortext,
                            text_size: 17,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: "M.OFF"
                        });
                        var textuser = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: margdock,
                            y: 115,
                            w: 192 - margdock,
                            h: 492,
                            color: indexcolortext,
                            text_size: sizetxt,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: ustext
                        });
                        let keyboard = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 252,
                            w: 192,
                            h: 480,
                        })
                        var spacebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[1],
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
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "<-´",
                            click_func: function () {
                                ustext = ustext + "\n"
                                update();
                            }
                        })
                        var delbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[1],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x494949,
                            press_color: 0x3B3B3B,
                            color: 0xfe8e40F,
                            text_size: 25,
                            text: "DEL",
                            click_func: function () {
                                if(ustext != "-"){
                                ustext = ustext.substring(0, ustext.length - 1)
                                update();
                                }
                            }
                        })
                        var mayus = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[2],
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
                            y: ypos[3],
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
                            y: ypos[3],
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
                            y: ypos[3],
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
                            y: ypos[4],
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
                            y: ypos[4],
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
                            y: ypos[4],
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
                            y: ypos[5],
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
                            y: ypos[5],
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
                            y: ypos[5],
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
                            y: ypos[6],
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
                            y: ypos[6],
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
                            y: ypos[6],
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
                            y: ypos[7],
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
                            y: ypos[7],
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
                            y: ypos[7],
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
                            y: ypos[8],
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
                            y: ypos[8],
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
                            y: ypos[8],
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
                            y: ypos[9],
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
                            y: ypos[9],
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
                            y: ypos[9],
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
                            y: ypos[10],
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
                            y: ypos[10],
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
                            y: ypos[10],
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
                            y: ypos[11],
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
                            y: ypos[11],
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
                            y: ypos[11],
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
                        var pointbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[12],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: ".",
                            click_func: function () {
                                mayuscase = 2
                                ustext = ustext + ". "
                                update();
                            }
                        })
                        var commebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[12],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: ",",
                            click_func: function () {
                                ustext = ustext + ","
                                update();
                            }
                        })
                        var pointcommebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[12],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: ";",
                            click_func: function () {
                                ustext = ustext + "; "
                                update();
                            }
                        })
                        var inrbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[13],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "¿",
                            click_func: function () {
                                mayuscase = 2;
                                ustext = ustext + "¿";
                                update();
                            }
                        })
                        var inlbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[13],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "?",
                            click_func: function () {
                                mayuscase = 2
                                ustext = ustext + "?"
                                update();
                            }
                        })
                        var exupbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[13],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "¡",
                            click_func: function () {
                                mayuscase = 2;
                                ustext = ustext + "¡";
                                update();
                            }
                        })
                        var exdbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[14],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "!",
                            click_func: function () {
                                mayuscase = 2;
                                ustext = ustext + "! ";
                                update();
                            }
                        })
                        var pharlbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[14],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "(",
                            click_func: function () {
                                ustext = ustext + "("
                                update();
                            }
                        })
                        var pharrbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[14],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: ")",
                            click_func: function () {
                                ustext = ustext + ") "
                                update();
                            }
                        })
                        var yelegantbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[15],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "&",
                            click_func: function () {
                                ustext = ustext + "&"
                                update();
                            }
                        })
                        var arrobebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[15],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "@",
                            click_func: function () {
                                ustext = ustext + "@"
                                update();
                            }
                        })
                        var expbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[15],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "+",
                            click_func: function () {
                                ustext = ustext + "+"
                                update();
                            }
                        })
                        var addbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[16],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "-",
                            click_func: function () {
                                ustext = ustext + "-"
                                update();
                            }
                        })
                        var lessbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[16],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "*",
                            click_func: function () {
                                ustext = ustext + "*"
                                update();
                            }
                        })
                        var multiplybutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[16],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "/",
                            click_func: function () {
                                ustext = ustext + "/"
                                update();
                            }
                        })
                        var onebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[17],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "1",
                            click_func: function () {
                                ustext = ustext + "1"
                                update();
                            }
                        })
                        var twobutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[17],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "2",
                            click_func: function () {
                                ustext = ustext + "2"
                                update();
                            }
                        })
                        var thebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[17],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "3",
                            click_func: function () {
                                ustext = ustext + "3"
                                update();
                            }
                        })
                        var foubutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[18],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "4",
                            click_func: function () {
                                ustext = ustext + "4"
                                update();
                            }
                        })
                        var fivbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[18],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "5",
                            click_func: function () {
                                ustext = ustext + "5"
                                update();
                            }
                        })
                        var sixbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[18],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "6",
                            click_func: function () {
                                ustext = ustext + "6"
                                update();
                            }
                        })
                        var sepbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[19],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "7",
                            click_func: function () {
                                ustext = ustext + "7"
                                update();
                            }
                        })
                        var eightbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 64,
                            y: ypos[19],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "8",
                            click_func: function () {
                                ustext = ustext + "8"
                                update();
                            }
                        })
                        var ninebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 128,
                            y: ypos[19],
                            w: 64,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "9",
                            click_func: function () {
                                ustext = ustext + "9"
                                update();
                            }
                        })
                        var zerobutton = keyboard.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: ypos[20],
                            w: 192,
                            h: 48,
                            radius: 5,
                            normal_color: 0x696969,
                            press_color: 0x555555,
                            color: 0xffffff,
                            text_size: 30,
                            text: "0",
                            click_func: function () {
                                ustext = ustext + "0"
                                update();
                            }
                        })
			var itemtoseeallbuttons = keyboard.createWidget(hmUI.widget.FILL_RECT, {
			    x: 20,
		            y: ypos[21],
			    w: 10,
			    h: 10,
                            radius: 15,
			    color: 0x000000,
			    });
                        function update() {
                            charactersnum.setProperty(hmUI.prop.MORE, {
                                text: ustext.length + "items"
                            });
                            if(ustext.length>preLen)cursorIndex++
                            else if(ustext.length<preLen)cursorIndex--
                            preLen=ustext.length
                            let text=cursorText()
                            const { width, height } = hmUI.getTextLayout(text, {
                                text_size: sizetxt,
                                text_width: 192 - margdock
                            })
                            textuser.setProperty(hmUI.prop.MORE, { text: text, h: height })
                            if (height > 162) {
                                //let more = Math.round(height - 162);
                                //hmUI.showToast({text:more+".."})
                                keyboard.setProperty(hmUI.prop.more, { y: 148+height });
                                background.setProperty(hmUI.prop.more, { h: 148+height});
                            }
                            hmFS.SysProSetChars("textofusera", ustext);
                            if (ustext == "-") {
                                mayuscase = 2
                            }
                        } 
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
    }else if(ustext == "-"){
    mayuscase = 2;
     mayusprop.setProperty(hmUI.prop.MORE, {
                  text: "M.ON"
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
    }else if(ustext == "-"){
    mayuscase = 1
    mayusstatus();
    }
}
                        function cursorText() {
                            let cursor=cursorFlag? curtext:' '
                            return ustext.slice(0, cursorIndex) + cursor + ustext.slice(cursorIndex)             
                        }
                        function changeCursor(){
                            cursorFlag=!cursorFlag
                            textuser.setProperty(hmUI.prop.MORE, { text: cursorText()})
                        }
                        const timer1 = timer.createTimer(cursorvel,cursorvel,changeCursor)
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

