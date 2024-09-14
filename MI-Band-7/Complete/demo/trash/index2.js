
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
            hmUI.setLayerScrolling(false);

            
            const text = hmUI.createWidget(hmUI.widget.TEXT, {
              // create a text widget
              x: 100,
              y: 120,
              w: 288,
              h: 46,
              color: 0xffffff,
              text_size: 36,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
              text_style: hmUI.text_style.NONE,
              text: "HELLO ZEPPOS",
            });

            let fx = new Fx({
              begin: 100, // Initial value of function.
              end: 200, // Target value of function.
              fps: 60, // FPS.
              time: 1, // Total during time (s).
              style: Fx.Styles.EASE_IN_OUT_QUAD, // Types of animation presets used, seeing @Fx.Style.
              onStop() {
                console.log("anim stop");
              }, // Callback function at the end of the animation.

              // Callback function for each frame, the parameter is the current function value, the value range is [begin, end]
              func: (result) => text.setProperty(hmUI.prop.X, result),
            });
            fx.restart(); // Replay animation can be called multiple times.
            console.log("ok bye");
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
