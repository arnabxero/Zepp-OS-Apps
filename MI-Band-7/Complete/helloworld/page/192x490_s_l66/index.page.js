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
            /* 小米手环7并未适配小程序，
      因此所有小程序均以480*480大小渲染，
      而小米手环7分辨率192*490，
      下方10px像素无法利用，
      有超出h480的组件就能上下滑动 */
            hmUI.setLayerScrolling(false);
            //禁用页面上下滑动
            const Text = hmUI.createWidget(hmUI.widget.TEXT, {
              //HelloWorld文本
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              color: 0xffffff,
              text_size: 30,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
              text_style: hmUI.text_style.WRAP,
              text: "HelloWorld",
            });
            // var warningOffroad = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
            //   x: 45,
            //   y: 70,
            //   anim_path: "",
            //   anim_prefix: "offroad",
            //   anim_ext: "png",
            //   anim_fps: 2,
            //   anim_size: 2,
            //   repeat_count: 255,
            //   anim_repeat: true,
            //   anim_status: hmUI.anim_status.START,
            //   show_level: hmUI.show_level.ONLY_NORMAL,
            // });
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
