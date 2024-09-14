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
                        var ustext = hmFS.SysProGetChars("textofuser")
                        if(ustext == undefined || ustext == "-" || ustext == "")ustext="you not write anything"
                        var sizetxt = hmFS.SysProGetInt("size");
                        if(sizetxt == undefined)sizetxt=20
                        var margdock = hmFS.SysProGetInt("marg");
                        if(margdock == undefined)margdock=3
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
                            const { width, height } = hmUI.getTextLayout(ustext, {
                                text_size: sizetxt,
                                text_width: 192- margdock
                            })
const background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
						  x: 0,
						  y: 0,
						  w: 192,
						  h: 492 + height,
                                                  radius: 0,
						  color: indexcolorrec,
					});
                        var textuser = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: margdock,
                            y: 100,
                            w: 192,
                            h: 492,
                            color:indexcolortext,
                            text_size: sizetxt,
                            text_style: hmUI.text_style.WRAP,//wrap!!!
                            text: ustext
                        });
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            w: 96,
                            h: 65,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "-",
                            click_func: function () {
                                sizetxt = sizetxt - 1
                                sizedock();
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 96,
                            y: 0,
                            w: 96,
                            h: 65,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: "+",
                            click_func: function () {
                                sizetxt = sizetxt + 1
                                sizedock();
                            }
                        })
function sizedock(){
if(sizetxt > 14 && sizetxt < 36){
                                textuser.setProperty(hmUI.prop.more,{text_size:sizetxt});
                          }
}
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
    }
  });
})();
} catch (e) {
console.log(e);
}
})();
} catch (e) {
console.log(e);
}