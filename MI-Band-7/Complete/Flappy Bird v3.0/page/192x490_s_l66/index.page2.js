try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
      a = e.current;
    new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(e, a),
      "drink"
    );
    DeviceRuntimeCore.HmLogger.getLogger("xiping");
    a.module = DeviceRuntimeCore.Page({
      init_view() {

        var variable = hmFS.SysProGetInt("game_var");
        let status = hmFS.SysProGetBool("hardmode_stat");

        const language = hmSetting.getLanguage();
        var info_trans = "";
        var hardmode_trans = "";
        switch (language) {
          case 0:
            info_trans = "像素鸟 2.0.1\nAPPID 38625\n原创 NEOURAA\nAPP版由 EthanLeung 修改";
            hardmode_trans = "地狱模式";
            break;
          case 1:
            info_trans = "像素鳥 2.0.1\nAPPID 38625\n原創 NEOURAA\nAPP版由 EthanLeung 修改";
            hardmode_trans = "地獄模式";
            break;
          case 2:
            info_trans = "Flappy Bird 2.0.1\nAPPID 38625\nOriginal author NEOURAA\nAPP version edited by EthanLeung";
            hardmode_trans = "Hardmode";
            break;
        }

        hmUI.setLayerScrolling(!1);
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 46,
          y: 46,
          src: "icon.png"
        });
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: 116,
          w: 192,
          h: 244,
          color: 16777215,
          text_size: 20,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.WRAP,
          text: info_trans
        });
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: 400,
          w: 192,
          h: 60,
          color: 16777215,
          text_size: 25,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.WRAP,
          text: hardmode_trans
        });
        const button = hmUI.createWidget(hmUI.widget.IMG, {
          x: 50,
          y: 350,
          src: "switch_" + status + ".png",
        });
        button.addEventListener(hmUI.event.CLICK_DOWN, function () {
          test();
        });
        function test() {
          if (variable <= 1) {
            variable = 2;
            status = false;
            button.setProperty(hmUI.prop.MORE, {
              src: "switch_" + status + ".png"
            });
            hmFS.SysProSetInt("game_var", variable);
            hmFS.SysProSetBool("hardmode_stat", status);
          } else if (variable >= 2) {
            variable = 1;
            status = true;
            button.setProperty(hmUI.prop.MORE, {
              src: "switch_" + status + ".png"
            });
            hmFS.SysProSetInt("game_var", variable);
            hmFS.SysProSetBool("hardmode_stat", status);
          } else {
            variable = 2;
            check = false;
            button.setProperty(hmUI.prop.MORE, {
              src: "switch_" + status + ".png"
            });
            hmFS.SysProSetInt("game_var", variable);
            hmFS.SysProSetBool("hardmode_stat", status);
          }
        }
        hmFS.SysProSetInt("game_var", variable);
        hmFS.SysProSetBool("hardmode_stat", status);
      },
      onInit: function () {
        console.log("Page2 onInit!");
        this.init_view()
      },
      onDestroy: function () {
        console.log("Page2 onDestroy!")
      }
    })
  })()
} catch (e) {
  console.log(e)
};
