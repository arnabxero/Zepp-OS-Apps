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
var option = hmUI.createWidget(hmUI.widget.GROUP, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 50,
                        });
option.setProperty(hmUI.prop.VISIBLE, false)
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 0,
                            y: 0,
                            text: '',
                            w: 192,
                            h: 80,
                            normal_src: 'setnopress.png',
                            press_src: 'setpress.png',
                            click_func: function () {
                                docki = 1
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page18', param: '...' })
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 20,
                            y: 115,
                            w: 152,
                            h: 50,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: none,
                            click_func: function () {
                                docki = 1;
                                if(menueditopenone == 1){
                                menueditopenone = 2
                                option.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menueditopenone = 1
                                option.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 20,
                            y: 175,
                            w: 152,
                            h: 48,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: ntwo,
                            click_func: function () {
                                docki = 2;
                                if(menueditopentwo == 1){
                                menueditopentwo = 2
                                option.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menueditopentwo = 1
                                option.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 20,
                            y: 235,
                            w: 152,
                            h: 50,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: nthe,
                            click_func: function () {
                                docki = 3;
                                if(menueditopenthe == 1){
                                menueditopenthe = 2
                                option.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menueditopenthe = 1
                                option.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 20,
                            y: 295,
                            w: 152,
                            h: 50,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: nfou,
                            click_func: function () {
                                docki = 4;
                                if(menueditopenfou == 1){
                                menueditopenfou = 2
                                option.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menueditopenfou = 1
                                option.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 20,
                            y: 355,
                            w: 152,
                            h: 50,
                            radius: 15,
                            normal_color: 0x8e8e8e,
                            press_color: 0x7e7e7e,
                            color: 0xffffff,
                            text_size: 30,
                            text: nfiv,
                            click_func: function () {
                                docki = 5;
                                if(menueditopenfiv == 1){
                                menueditopenfiv = 2
                                option.setProperty(hmUI.prop.VISIBLE, true)
                                }else{
                                menueditopenfiv = 1
                                option.setProperty(hmUI.prop.VISIBLE, false)
                                }
                            }
                        })
var edit = option.createWidget(hmUI.widget.BUTTON, {
                            x: 20,
                            y: 415,
                            w: 71,
                            h: 50,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xf6e541,
                            text_size: 20,
                            text: "edit",
                            click_func: function () {
                                go();
                            }
                        })
var open = option.createWidget(hmUI.widget.BUTTON, {
                            x: 101,
                            y: 415,
                            w: 71,
                            h: 50,
                            radius: 5,
                            normal_color: 0x555555,
                            press_color: 0x494949,
                            color: 0xf6e541,
                            text_size: 20,
                            text: "  open",
                            click_func: function () {
                                got();
                            }
                        })
function go(){
                                if(docki == 1){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page2', param: '...' })
                                }else if(docki == 2){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page6', param: '...' })
                                }else if(docki == 3){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page7', param: '...' })
                                }else if(docki == 4){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page8', param: '...' })
                                }else{
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page9', param: '...' })
                                }
}
function got(){
                                if(docki == 1){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page5', param: '...' })
                                }else if(docki == 2){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page10', param: '...' })
                                }else if(docki == 3){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page11', param: '...' })
                                }else if(docki == 4){
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page12', param: '...' })
                                }else{
                                hmApp.gotoPage({ url: 'page/192x490_s_l66/index.page13', param: '...' })
                                }
}
hmApp.registerGestureEvent(function (event) {
  if (event == hmApp.gesture.RIGHT)
   hmApp.gotoHome();
   return false;
})
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
                                                hmApp.unregisterGestureEvent();
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