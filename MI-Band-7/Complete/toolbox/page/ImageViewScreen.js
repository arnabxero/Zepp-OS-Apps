/**
 * Build with ZMake tool
 */

(() => {
  // page/ImageViewScreen.js
  var ImageViewScreen = class {
    constructor(data) {
      this.path = data;
    }
    start() {
      const f = hmFS.open_asset(this.path, hmFS.O_RDONLY);
      const header = new Uint8Array(18);
      hmFS.seek(f, 0, hmFS.SEEK_SET);
      hmFS.read(f, header.buffer, 0, 18);
      hmFS.close(f);
      const width = (header[13] << 8) + header[12];
      const height = (header[15] << 8) + header[14];
      hmUI.showToast({ text: width + "x" + height });
      hmUI.createWidget(hmUI.widget.IMG, {
        x: (192 - width) / 2,
        y: (490 - height) / 2,
        src: this.path
      });
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      new ImageViewScreen(p).start();
    }
  });
})();
