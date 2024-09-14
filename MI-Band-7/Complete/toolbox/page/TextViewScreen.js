/**
 * Build with ZMake tool
 */

(() => {
  // ../lib/FsUtils.js
  var FsUtils = class {
    static writeText(fn, data) {
      if (!fn.startsWith("/storage"))
        fn = FsUtils.fullPath(fn);
      try {
        hmFS.remove(fn);
      } catch (e) {
      }
      const buffer2 = FsUtils.strToUtf8(data);
      const f = FsUtils.open(fn, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.write(f, buffer2, 0, buffer2.byteLength);
      hmFS.close(f);
    }
    static read(fn, limit = false) {
      if (!fn.startsWith("/storage"))
        fn = FsUtils.fullPath(fn);
      const [st, e] = FsUtils.stat(fn);
      const f = FsUtils.open(fn, hmFS.O_RDONLY);
      const size = limit ? limit : st.size;
      const data = new ArrayBuffer(size);
      hmFS.read(f, data, 0, size);
      hmFS.close(f);
      return data;
    }
    static fetchTextFile(fn, limit = false) {
      const data = FsUtils.read(fn, limit);
      const view = new Uint8Array(data);
      let str = "";
      return FsUtils.Utf8ArrayToStr(view);
    }
    static stat(path) {
      path = FsUtils.fixPath(path);
      return hmFS.stat_asset(path);
    }
    static fixPath(path) {
      if (path.startsWith("/storage")) {
        const statPath = "../../../" + path.substring(9);
        return statPath;
      }
      return path;
    }
    static open(path, m) {
      if (path.startsWith("/storage")) {
        const statPath = "../../../" + path.substring(9);
        return hmFS.open_asset(statPath, m);
      }
      return hmFS.open(path, m);
    }
    static fetchJSON(fn) {
      const text = FsUtils.fetchTextFile(fn);
      return JSON.parse(text);
    }
    static copy(source, dest) {
      try {
        hmFS.remove(dest);
      } catch (e) {
      }
      const buffer2 = FsUtils.read(source);
      const f = FsUtils.open(dest, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.write(f, buffer2, 0, buffer2.byteLength);
      hmFS.close(f);
    }
    static isFolder(path) {
      const [st, e] = FsUtils.stat(path);
      return (st.mode & 32768) == 0;
    }
    static getSelfPath() {
      if (!FsUtils.selfPath) {
        const pkg = hmApp.packageInfo();
        const idn = pkg.appId.toString(16).padStart(8, "0").toUpperCase();
        return "/storage/js_" + pkg.type + "s/" + idn;
      }
      return FsUtils.selfPath;
    }
    static fullPath(path) {
      return FsUtils.getSelfPath() + "/assets/" + path;
    }
    static rmTree(path) {
      if (!path.startsWith("/storage"))
        path = FsUtils.fullPath(path);
      const [files, e] = hmFS.readdir(path);
      for (let i in files) {
        FsUtils.rmTree(path + "/" + files[i]);
      }
      hmFS.remove(path);
    }
    static copyTree(source, dest, removeSource) {
      if (!source.startsWith("/storage"))
        source = FsUtils.fullPath(source);
      if (!dest.startsWith("/storage"))
        dest = FsUtils.fullPath(dest);
      if (!FsUtils.isFolder(source)) {
        console.log("copy", source, "->", dest);
        FsUtils.copy(source, dest);
      } else {
        const [files, e] = hmFS.readdir(source);
        hmFS.mkdir(dest);
        for (let i in files) {
          FsUtils.copyTree(source + "/" + files[i], dest + "/" + files[i], removeSource);
        }
      }
      if (removeSource) {
        console.log("Delete", source);
        hmFS.remove(source);
      }
    }
    static sizeTree(path) {
      if (!path.startsWith("/storage"))
        path = FsUtils.fullPath(path);
      const [files, e] = hmFS.readdir(path);
      let value = 0;
      for (let fn in files) {
        const file = path + "/" + files[fn];
        const statPath = "../../../" + file.substring(9);
        const [st, e2] = hmFS.stat_asset(statPath);
        value += st.size ? st.size : FsUtils.sizeTree(file);
      }
      return value;
    }
    static strToUtf8(str) {
      var utf8 = [];
      for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 128)
          utf8.push(charcode);
        else if (charcode < 2048) {
          utf8.push(
            192 | charcode >> 6,
            128 | charcode & 63
          );
        } else if (charcode < 55296 || charcode >= 57344) {
          utf8.push(
            224 | charcode >> 12,
            128 | charcode >> 6 & 63,
            128 | charcode & 63
          );
        } else {
          i++;
          charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i) & 1023);
          utf8.push(
            240 | charcode >> 18,
            128 | charcode >> 12 & 63,
            128 | charcode >> 6 & 63,
            128 | charcode & 63
          );
        }
      }
      return new Uint8Array(utf8).buffer;
    }
    static decodeUtf8(array, outLimit = Infinity, startPosition = 0) {
      let out = "";
      let length = array.length;
      let i = startPosition, c, char2, char3;
      while (i < length && out.length < outLimit) {
        c = array[i++];
        switch (c >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            out += String.fromCharCode(c);
            break;
          case 12:
          case 13:
            char2 = array[i++];
            out += String.fromCharCode(
              (c & 31) << 6 | char2 & 63
            );
            break;
          case 14:
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(
              (c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0
            );
            break;
        }
      }
      return [out, i - startPosition];
    }
    static Utf8ArrayToStr(array) {
      return FsUtils.decodeUtf8(array)[0];
    }
    static printBytes(val) {
      if (this.fsUnitCfg === void 0)
        this.fsUnitCfg = hmFS.SysProGetBool("mmk_tb_fs_unit");
      const options = this.fsUnitCfg ? ["B", "KiB", "MiB"] : ["B", "KB", "MB"];
      const base = this.fsUnitCfg ? 1024 : 1e3;
      let curr = 0;
      while (val > 800 && curr < options.length) {
        val = val / base;
        curr++;
      }
      return Math.round(val * 100) / 100 + " " + options[curr];
    }
  };

  // page/TextViewScreen.js
  var BOX_HEIGHT = 300;
  var TextViewScreen = class {
    PAGE_SIZE = 256;
    fontSize = 16;
    position = 0;
    bufferSize = 0;
    backStack = [];
    constructor(data) {
      this.path = data;
    }
    start() {
      hmSetting.setBrightScreen(1800);
      hmUI.setLayerScrolling(false);
      const userFontSize = hmFS.SysProGetInt("mmk_tb_fontsize");
      if (userFontSize)
        this.fontSize = userFontSize;
      this.file = FsUtils.open(this.path, hmFS.O_RDONLY);
      const [st, e] = FsUtils.stat(this.path);
      this.fileSize = st.size;
      this.makeWidgets();
      this.displayForward();
    }
    makeWidgets() {
      this.textView = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: (490 - BOX_HEIGHT) / 2,
        w: 192,
        h: BOX_HEIGHT,
        text_size: this.fontSize,
        color: 16777215,
        text_style: hmUI.text_style.WRAP,
        text: ""
      });
      this.posView = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 0,
        w: 192,
        h: (490 - BOX_HEIGHT) / 2,
        text_size: 20,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        color: 10066329,
        text: ""
      });
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 490 / 2,
        w: 192,
        h: 490 / 2
      }).addEventListener(hmUI.event.CLICK_UP, () => {
        this.pageNext();
      });
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        w: 192,
        h: 490 / 2
      }).addEventListener(hmUI.event.CLICK_UP, () => {
        this.pageBack();
      });
      this.overlay = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: "loading.png",
        alpha: 200
      });
    }
    getTextHeight(text) {
      return hmUI.getTextLayout(text, {
        text_size: this.fontSize,
        text_width: 192,
        wrapped: true
      }).height;
    }
    pageNext() {
      if (this.position + this.bufferSize >= this.fileSize)
        return;
      this.backStack.push(this.position);
      this.position += this.bufferSize;
      this.displayForward();
    }
    pageBack() {
      if (this.backStack.length < 1)
        return;
      this.position = this.backStack.pop();
      this.displayForward();
    }
    displayForward() {
      this.overlay.setProperty(hmUI.prop.VISIBLE, true);
      const ti = timer.createTimer(150, 150, () => {
        timer.stopTimer(ti);
        this._displayForward();
        this.overlay.setProperty(hmUI.prop.VISIBLE, false);
      });
    }
    _displayForward() {
      const temp = new Uint8Array(4);
      hmFS.read(this.file, temp.buffer, 0, temp.byteLength);
      let readBytes = 0, readLimit = this.fileSize - this.position, readSinceLastSpace = 0, result = "";
      while (readBytes < readLimit) {
        hmFS.seek(this.file, this.position + readBytes, hmFS.SEEK_SET);
        hmFS.read(this.file, temp.buffer, 0, 4);
        const [char, byteLength] = FsUtils.decodeUtf8(temp, 1, 0);
        if (this.getTextHeight(result + char) > BOX_HEIGHT) {
          if (char != " " && char != "\n" && readBytes - readSinceLastSpace > 0) {
            readBytes -= readSinceLastSpace;
            result = result.substring(0, result.lastIndexOf(" "));
          }
          break;
        }
        readBytes += byteLength;
        char == " " ? readSinceLastSpace = 0 : readSinceLastSpace += byteLength;
        if (result != "" || char != "\n")
          result += char;
      }
      this.bufferSize = readBytes;
      this.textView.setProperty(hmUI.prop.TEXT, result);
      const progress = Math.floor((this.position + this.bufferSize) / this.fileSize * 100);
      this.posView.setProperty(hmUI.prop.TEXT, progress + "%");
    }
    switchPage(delta) {
      const newOffset = this.offset + this.PAGE_SIZE * delta;
      if (newOffset < 0)
        return;
      hmFS.seek(this.file, newOffset, hmFS.SEEK_SET);
      hmFS.read(this.file, buffer, 0, this.PAGE_SIZE);
      const text = FsUtils.Utf8ArrayToStr(new Uint8Array(buffer));
      const { height } = hmUI.getTextLayout(text, {
        text_size: 20,
        text_width: 176,
        wrapped: 1
      });
      console.log(height, text);
      this.textView.setProperty(hmUI.prop.MORE, {
        h: height
      });
      this.textView.setProperty(hmUI.prop.TEXT, text);
      this.buttonMore.setProperty(hmUI.prop.Y, height + 72);
      this.offset = newOffset;
      hmApp.setLayerY(0);
    }
    finish() {
      hmSetting.setBrightScreenCancel();
      hmFS.close(this.file);
    }
  };
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      if (!p)
        p = "/storage/js_apps/00008470/README.txt";
      new TextViewScreen(p).start();
    }
  });
})();
