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
      const buffer = FsUtils.strToUtf8(data);
      const f = FsUtils.open(fn, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.write(f, buffer, 0, buffer.byteLength);
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
      const buffer = FsUtils.read(source);
      const f = FsUtils.open(dest, hmFS.O_WRONLY | hmFS.O_CREAT);
      hmFS.write(f, buffer, 0, buffer.byteLength);
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

  // utils/misc.js
  var APP_ID = hmApp.packageInfo().appId;
  function openPage(name, param = null) {
    hmApp.gotoPage({ url: "page/" + name, param });
  }

  // page/FileManagerScreen.js
  var FileManagerScreen = class {
    maxItems = 16;
    HEADER_ROW_TYPE = {
      type_id: 1,
      item_height: 96,
      item_bg_color: 0,
      item_bg_radius: 0,
      text_view: [{
        x: 4,
        y: 64,
        w: 172,
        h: 32,
        key: "title",
        color: 15658734
      }],
      text_view_count: 1,
      image_view: [{
        x: 84,
        y: 24,
        w: 24,
        h: 24,
        key: "icon"
      }],
      image_view_count: 1
    };
    FILE_ROW_TYPE = {
      type_id: 2,
      item_height: 64,
      item_bg_color: 1118481,
      item_bg_radius: 12,
      text_view: [{
        x: 44,
        y: 0,
        w: 144,
        h: 64,
        key: "name",
        color: 16777215,
        text_size: 22
      }],
      text_view_count: 1,
      image_view: [{
        x: 10,
        y: 20,
        w: 24,
        h: 24,
        key: "icon"
      }],
      image_view_count: 1
    };
    path = "/storage/js_apps";
    editPath = null;
    content = [];
    rows = [];
    constructor() {
      this.path = FsUtils.getSelfPath();
      const lastPath = hmFS.SysProGetChars("mmk_tb_lastpath");
      if (!!lastPath)
        this.path = lastPath;
    }
    finish() {
      hmSetting.setBrightScreenCancel();
    }
    start() {
      hmSetting.setBrightScreen(1800);
      this.viewFiles = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
        x: 0,
        y: 0,
        w: 192,
        h: 490,
        item_space: 8,
        item_config: [
          this.FILE_ROW_TYPE,
          this.HEADER_ROW_TYPE
        ],
        item_config_count: 2,
        item_click_func: (_, i) => this.onRowClick(i),
        data_type_config: [],
        data_type_config_count: 0,
        data_array: [],
        data_count: 0
      });
      this.applyPath(this.path);
    }
    modify(path) {
      openPage("FileEditScreen", path);
    }
    applyPath(path) {
      this.path = path;
      this.refresh();
      hmFS.SysProSetChars("mmk_tb_lastpath", path);
    }
    isFolder(path) {
      const [st, e] = FsUtils.stat(path);
      if (st == null)
        return true;
      return (st.mode & 32768) == 0;
    }
    getFileIcon(path) {
      if (path.endsWith(".png")) {
        return "files/img.png";
      } else if (path.endsWith(".txt")) {
        return "files/text.png";
      } else if (path.endsWith(".js") || path.endsWith(".json")) {
        return "files/code.png";
      }
      return "files/file.png";
    }
    refresh() {
      const [dirContent, e] = hmFS.readdir(this.path);
      console.log("refr", this.path);
      let folders = [], files = [];
      if (this.path !== "/storage") {
        folders.push({ name: "..", icon: "files/up.png" });
      }
      for (let i = 0; i < Math.min(dirContent.length, this.maxItems); i++) {
        const fn = dirContent[i];
        if (this.isFolder(this.path + "/" + fn)) {
          folders.push({
            name: fn,
            icon: "files/folder.png"
          });
        } else {
          files.push({
            name: fn,
            icon: this.getFileIcon(fn)
          });
        }
      }
      folders.sort(this._sortFnc);
      files.sort(this._sortFnc);
      this.contents = [
        {
          title: this.path,
          icon: "menu/context.png",
          isContext: true
        },
        ...folders,
        ...files
      ];
      this.contents.push(dirContent.length > this.maxItems ? {
        title: "",
        icon: "menu/expand.png",
        isExpand: true
      } : {
        title: "",
        icon: ""
      });
      console.log(this.contents);
      this.viewFiles.setProperty(hmUI.prop.UPDATE_DATA, {
        data_type_config: [
          {
            start: 0,
            end: 0,
            type_id: 1
          },
          {
            start: 1,
            end: this.contents.length - 2,
            type_id: 2
          },
          {
            start: this.contents.length - 1,
            end: this.contents.length - 1,
            type_id: 1
          }
        ],
        data_type_config_count: 3,
        data_array: this.contents,
        data_count: this.contents.length,
        on_page: 1
      });
    }
    onRowClick(i) {
      if (!this.contents[i])
        return;
      if (this.contents[i].isContext)
        return this.modify(this.path);
      else if (this.contents[i].isExpand) {
        this.maxItems += 50;
        return this.refresh();
      }
      let val = this.contents[i].name;
      let path = this.path + "/" + val;
      if (val == "..") {
        path = this.path.substring(0, this.path.lastIndexOf("/"));
      }
      if (this.isFolder(path)) {
        console.log("newpath", path);
        this.applyPath(path);
      } else {
        this.modify(path);
      }
    }
    _sortFnc(a, b) {
      return a.name < b.name ? -1 : 1;
    }
  };
  var screen;
  var __$$app$$__ = __$$hmAppManager$$__.currentApp;
  var __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit(p) {
      hmUI.setLayerScrolling(false);
      screen = new FileManagerScreen();
      screen.start();
    },
    onDestroy: () => {
      screen.finish();
    }
  });
})();
