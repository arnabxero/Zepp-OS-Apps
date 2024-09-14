try {
  (() => {
    var __$$app$$__ = __$$hmAppManager$$__.currentApp;
    var __$$module$$__ = __$$app$$__.current;
    var h = new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__),
      "drink"
    );
    /*
     * huamiOS bundle tool v1.0.17
     * Copyright © Huami. All Rights Reserved
     */
    ("use strict");
    console.log("----->>>current");
    console.log(__$$hmAppManager$$__.currentApp.pid);
    console.log(__$$hmAppManager$$__.currentApp.current);

    const logger = DeviceRuntimeCore.HmLogger.getLogger("defult");
    __$$module$$__.module = DeviceRuntimeCore.WatchFace({
      init_view() {
        let bgMain = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: "bgmain.png",
        });
      },
      onInit() {
        console.log("index page.js on init invoke");
        this.init_view();
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
    /*
     * end js
     */
  })();
} catch (e) {
  console.log(e);
}
