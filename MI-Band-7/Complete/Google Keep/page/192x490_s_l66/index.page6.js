try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current,
      { px: o } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t)
        ),
        e.app.__globals__);
    try {
      (() => {
        var e = __$$hmAppManager$$__.currentApp,
          t = e.current;
        new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t),
          "drink"
        );
        DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
        t.module = DeviceRuntimeCore.Page({
          init_view() {
            var ustext2 = hmFS.SysProGetChars("textofuser3");
            if (ustext2 == undefined) ustext2 = "";

            hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 50,
              w: 30,
              h: 30,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x494949,
              color: 0xfe8e40f,
              text_size: 25,
              text: "Delete",
              click_func: function () {
                hmFS.SysProSetChars("textofuser3", "");
                hmApp.goBack();
              },
            });
            var charactersnum = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 50,
              w: 120,
              h: 492,
              color: 0xffffff,
              text_size: 20,
              text_style: hmUI.text_style.NONE,
              text: ustext2.length + " Words",
              align_h: hmUI.align.CENTER_H,
            });
            var textuser = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 90,
              w: 192,
              h: 602,
              color: 0xffffff,
              text_size: 20,
              text_style: hmUI.text_style.WRAP, //wrap!!!
              text: ustext2,
            });
            let keyboard = hmUI.createWidget(hmUI.widget.GROUP, {
              x: 0,
              y: 252,
              w: 192,
              h: 480,
            });
            var spacebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 50,
              y: 260,
              w: 100,
              h: 50,
              radius: 1,
              normal_color: 0x000000,
              press_color: 0x494949,
              color: 0xfe8e40f,
              text_size: 25,
              text: "___",
              click_func: function () {
                ustext2 = ustext2 + " ";
                update();
              },
            });
            var spacebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 85,
              w: 40,
              h: 30,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x494949,
              color: 0xfe8e40f,
              text_size: 20,
              text: "the",
              click_func: function () {
                ustext2 = ustext2 + " the";
                update();
              },
            });
            var spacebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 55,
              y: 85,
              w: 40,
              h: 30,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x494949,
              color: 0xfe8e40f,
              text_size: 20,
              text: "in",
              click_func: function () {
                ustext2 = ustext2 + " in";
                update();
              },
            });
            var spacebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 100,
              y: 85,
              w: 40,
              h: 30,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x494949,
              color: 0xfe8e40f,
              text_size: 20,
              text: "on",
              click_func: function () {
                ustext2 = ustext2 + " on";
                update();
              },
            });
            var spacebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 155,
              y: 85,
              w: 40,
              h: 30,
              radius: 3,
              normal_color: 0x000000,
              press_color: 0x494949,
              color: 0xfe8e40f,
              text_size: 20,
              text: "and",
              click_func: function () {
                ustext2 = ustext2 + " and";
                update();
              },
            });
            var enterbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 165,
              y: 120,
              w: 20,
              h: 30,
              radius: 10,
              normal_color: 0x000000,
              press_color: 0x494949,
              color: 0xfe8e40f,
              text_size: 25,
              text: "⏎",
              click_func: function () {
                ustext2 = ustext2 + "\n";
                update();
              },
            });
            var delbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 120,
              w: 30,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x3b3b3b,
              color: 0xfe8e40f,
              text_size: 25,
              text: "⨉",
              click_func: function () {
                ustext2 = ustext2.substring(0, ustext2.length - 1);
                update();
              },
            });
            var abutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 40,
              y: 120,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "a",
              click_func: function () {
                //delfunc = 0
                itemline = 1;
                ustext2 = ustext2 + "a";
                update();
              },
            });
            //    .addEventListener(hmUI.event.CLICK_UP, );
            var bbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 65,
              y: 120,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "b",
              click_func: function () {
                itemline = 1;
                ustext2 = ustext2 + "b";
                update();
              },
            });
            var cbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 90,
              y: 120,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "c",
              click_func: function () {
                itemline = 1;
                ustext2 = ustext2 + "c";
                update();
              },
            });
            var dbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 115,
              y: 120,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "d",
              click_func: function () {
                itemline = 2;
                ustext2 = ustext2 + "d";
                update();
              },
            });
            var ebutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 140,
              y: 120,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "e",
              click_func: function () {
                itemline = 2;
                ustext2 = ustext2 + "e";
                update();
              },
            });
            var fbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 155,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "f",
              click_func: function () {
                itemline = 2;
                ustext2 = ustext2 + "f";
                update();
              },
            });
            var gbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 35,
              y: 155,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "g",
              click_func: function () {
                itemline = 3;
                ustext2 = ustext2 + "g";
                update();
              },
            });
            var hbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 60,
              y: 155,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "h",
              click_func: function () {
                itemline = 3;
                ustext2 = ustext2 + "h";
                update();
              },
            });
            var ibutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 85,
              y: 155,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "i",
              click_func: function () {
                itemline = 3;
                ustext2 = ustext2 + "i";
                update();
              },
            });
            var jbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 110,
              y: 155,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "j",
              click_func: function () {
                //delfunc = 0
                itemline = 4;
                ustext2 = ustext2 + "j";
                update();
              },
            });
            //    .addEventListener(hmUI.event.CLICK_UP, );
            var kbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 135,
              y: 155,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "k",
              click_func: function () {
                itemline = 4;
                ustext2 = ustext2 + "k";
                update();
              },
            });
            var lbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 160,
              y: 155,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "l",
              click_func: function () {
                itemline = 4;
                ustext2 = ustext2 + "l";
                update();
              },
            });
            var mbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 190,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "m",
              click_func: function () {
                itemline = 5;
                ustext2 = ustext2 + "m";
                update();
              },
            });
            var nbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 35,
              y: 190,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "n",
              click_func: function () {
                itemline = 5;
                ustext2 = ustext2 + "n";
                update();
              },
            });
            var obutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 60,
              y: 190,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "o",
              click_func: function () {
                itemline = 6;
                ustext2 = ustext2 + "o";
                update();
              },
            });
            var pbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 85,
              y: 190,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "p",
              click_func: function () {
                itemline = 6;
                ustext2 = ustext2 + "p";
                update();
              },
            });
            var qbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 110,
              y: 190,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "q",
              click_func: function () {
                itemline = 6;
                ustext2 = ustext2 + "q";
                update();
              },
            });
            var rbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 135,
              y: 190,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "r",
              click_func: function () {
                //delfunc = 0
                itemline = 7;
                ustext2 = ustext2 + "r";
                update();
              },
            });
            //    .addEventListener(hmUI.event.CLICK_UP, );
            var sbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 160,
              y: 190,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "s",
              click_func: function () {
                itemline = 7;
                ustext2 = ustext2 + "s";
                update();
              },
            });
            var tbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 10,
              y: 225,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "t",
              click_func: function () {
                itemline = 7;
                ustext2 = ustext2 + "t";
                update();
              },
            });
            var ubutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 35,
              y: 225,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "u",
              click_func: function () {
                itemline = 8;
                ustext2 = ustext2 + "u";
                update();
              },
            });
            var vbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 60,
              y: 225,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "v",
              click_func: function () {
                itemline = 8;
                ustext2 = ustext2 + "v";
                update();
              },
            });
            var wbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 85,
              y: 225,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "w",
              click_func: function () {
                itemline = 8;
                ustext2 = ustext2 + "w";
                update();
              },
            });
            var xbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 110,
              y: 225,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "x",
              click_func: function () {
                itemline = 9;
                ustext2 = ustext2 + "x";
                update();
              },
            });
            var ybutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 135,
              y: 225,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "y",
              click_func: function () {
                itemline = 9;
                ustext2 = ustext2 + "y";
                update();
              },
            });
            var zbutton = keyboard.createWidget(hmUI.widget.BUTTON, {
              x: 160,
              y: 225,
              w: 20,
              h: 30,
              radius: 5,
              normal_color: 0x000000,
              press_color: 0x555555,
              color: 0xffffff,
              text_size: 30,
              text: "z",
              click_func: function () {
                itemline = 9;
                ustext2 = ustext2 + "z";
                update();
              },
            });
            var itemtoseeallbuttons = keyboard.createWidget(
              hmUI.widget.FILL_RECT,
              {
                x: 20,
                y: 250,
                w: 10,
                h: 10,
                radius: 15,
                color: 0x000000,
              }
            );
            function update() {
              charactersnum.setProperty(hmUI.prop.MORE, {
                text: ustext2.length + "words",
              });
              const { width, height } = hmUI.getTextLayout(ustext2, {
                text_size: 20,
                text_width: 192,
              });
              textuser.setProperty(hmUI.prop.MORE, {
                text: ustext2,
                h: height,
              });
              if (height > 162) {
                let more = Math.round(height - 162);
                hmApp.setLayerY(-more);
                //hmUI.showToast({text:more+".."})
                keyboard.setProperty(hmUI.prop.more, { y: 252 + more });
              }
              hmFS.SysProSetChars("textofuser3", ustext2);
            }
            update();
          },
          onInit() {
            console.log("index page.js on init invoke"), this.init_view();
          },
          onReady() {
            console.log("index page.js on ready invoke");
          },
          onShow() {
            console.log("index page.js on show invoke");
          },
          onHide() {
            console.log("index page.js on hide invoke");
          },
          onDestory() {
            console.log("index page.js on destory invoke");
          },
        });
      })();
    } catch (e) {
      console.log(e);
    }
  })();
} catch (e) {
  console.log(e);
}
