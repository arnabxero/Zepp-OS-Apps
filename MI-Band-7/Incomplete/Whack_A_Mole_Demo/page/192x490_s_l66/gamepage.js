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
            let gamebgrnd = 0;

            const gameBground = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              src: "road/road_0.png",
            });

            let rightPressed = false;
            let leftPressed = false;

            const totalBg = 10;

            function createButtons() {
              const leftBtn = hmUI.createWidget(hmUI.widget.IMG, {
                x: -5,
                y: 0,
                w: 97,
                h: 450,
                src: "",
              });
              leftBtn.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                leftPressed = true;
                console.log("Left Down " + gamebgrnd);
                gamebgrnd = parseInt(gamebgrnd) - 1;
                if (gamebgrnd < 0) {
                  gamebgrnd = 0;
                }

                // gameBground.setProperty(hmUI.prop.MORE, {
                //   src: "road/road_" + gamebgrnd + ".png",
                // });
              });

              const rightBtn = hmUI.createWidget(hmUI.widget.IMG, {
                x: 98,
                y: 0,
                w: 95,
                h: 450,
                src: "",
              });
              rightBtn.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                rightPressed = true;
                console.log("Right Down " + gamebgrnd);

                gamebgrnd = parseInt(gamebgrnd) + 1;
                if (gamebgrnd > totalBg) {
                  gamebgrnd = 10;
                }

                // gameBground.setProperty(hmUI.prop.MORE, {
                //   src: "road/road_" + gamebgrnd + ".png",
                // });
              });
            }

            function draw() {
              createButtons();
            }

            draw();
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
