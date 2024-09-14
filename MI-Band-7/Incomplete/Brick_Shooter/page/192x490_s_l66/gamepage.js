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
            const bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              src: "background.png",
            });

            var currentOnClickBtnPos = {
              row: -99,
              col: -99,
            };

            var buttonsArray = [];

            function createBtn() {
              const btn_height = 18;
              const btn_width = 18;

              for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 10; j++) {
                  let x = j * btn_width;
                  let y = i * btn_height;

                  let btnHere = hmUI.createWidget(hmUI.widget.IMG, {
                    x: x + 6,
                    y: 66 + y,
                    w: btn_width,
                    h: btn_height,
                    src: "btn.png",
                  });

                  btnHere.addEventListener(
                    hmUI.event.CLICK_DOWN,
                    function (info) {
                      currentOnClickBtnPos.rowNum = i;
                      currentOnClickBtnPos.colNum = j;

                      console.log("Mouse");
                      console.log(currentMousePos);
                      console.log("Button");
                      console.log(currentOnClickBtnPos);

                      checkCoalision();
                    }
                  );

                  btnHere.addEventListener(
                    hmUI.event.CLICK_UP,
                    function (info) {
                      currentOnClickBtnPos.rowNum = -99;
                      currentOnClickBtnPos.colNum = -99;
                      console.log("--------------------");
                    }
                  );

                  let btnObject = {
                    rowNum: i,
                    colNum: j,
                    btn: btnHere,
                  };
                  buttonsArray.push(btnObject);
                }
              }
            }
            createBtn();
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
