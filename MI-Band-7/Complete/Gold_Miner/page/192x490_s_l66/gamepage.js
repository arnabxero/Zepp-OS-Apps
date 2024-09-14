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

            var goldArray = [];
            // var currentGoldObject = {
            //   row: -99,
            //   col: -99,
            // };
            function createGoldsInRandomPos() {
              var index = 0;
              for (i = 0; i < 7; i++) {
                for (j = 0; j < 4; j++) {
                  let x = j * 48;
                  let y = i * 50 + 120;

                  var goldHere = hmUI.createWidget(hmUI.widget.IMG, {
                    x: x,
                    y: y,
                    w: 48,
                    h: 50,
                    src: "hidden_sprite.png",
                  });

                  var goldObject = {
                    row: j,
                    col: i,
                    object: goldHere,
                    active: false,
                    index: index,
                  };

                  goldHere.addEventListener(
                    hmUI.event.CLICK_DOWN,
                    function (info) {
                      console.log(
                        "Click Down: " + goldObject.row,
                        goldArray.col
                      );
                    }
                  );

                  goldHere.addEventListener(
                    hmUI.event.CLICK_UP,
                    function (info) {
                      console.log("Click Up: " + goldArray.row, goldArray.col);
                    }
                  );

                  index++;
                  goldArray.push(goldObject);
                }
              }
            }

            createGoldsInRandomPos();
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
