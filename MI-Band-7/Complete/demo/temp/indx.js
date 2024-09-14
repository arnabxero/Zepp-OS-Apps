var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
  var c = 0;
  return function () {
    return c < a.length ? { done: !1, value: a[c++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (a) {
  return { next: $jscomp.arrayIteratorImpl(a) };
};
$jscomp.makeIterator = function (a) {
  var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return c ? c.call(a) : $jscomp.arrayIterator(a);
};
try {
  (function () {
    var a = __$$hmAppManager$$__.currentApp,
      c = a.current;
    new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(a, c));
    ("use strict");
    var g = DeviceRuntimeCore.HmLogger.getLogger("ebook-page-1");
    c.module = DeviceRuntimeCore.Page({
      init_view: function () {
        hmUI.setLayerScrolling(!1);
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 20,
          y: 30,
          w: 152,
          h: 35,
          color: "0xdddddd",
          text_size: 25,
          text_style: hmUI.text_style.NONE,
          align_h: hmUI.align.CENTER_H,
          text: "\u73af\u95f4\u7535\u5b50\u4e66",
        });
        var d = $jscomp.makeIterator(hmFS.stat_asset("pages.txt")),
          b = d.next().value;
        d.next();
        d = hmFS.open_asset("pages.txt", hmFS.O_RDONLY);
        b = parseInt(b.size / 2) - 1;
        b = new Uint16Array(b);
        b = new Uint16Array(b.length);
        hmFS.seek(d, 2, hmFS.SEEK_SET);
        var k = hmFS.read(d, b.buffer, 0, 2 * b.length);
        d = String.fromCharCode.apply(null, b).split(",");
        b = [];
        for (
          var e = {}, f = 0;
          f < d.length && 10 > f;
          e = { $jscomp$loop$prop$fileName$1: e.$jscomp$loop$prop$fileName$1 },
            f++
        ) {
          e.$jscomp$loop$prop$fileName$1 = d[f];
          var l = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 5 + (f % 2) * 91,
            y: 85 + (62 * f) / 2,
            w: 90,
            h: 58,
            press_color: 2697513,
            normal_color: 1381653,
            text: e.$jscomp$loop$prop$fileName$1.slice(0, -4),
            text_size: 28,
            text_style: hmUI.text_style.NONE,
            color: 16777215,
            radius: 20,
            click_func: (function (h) {
              return function () {
                hmApp.gotoPage({
                  url: "page/192x490_s_l66/home/index.page3",
                  param: JSON.stringify({
                    fileName1: h.$jscomp$loop$prop$fileName$1,
                    result1: k,
                  }),
                });
              };
            })(e),
          });
          hmFS.stat_asset(e.$jscomp$loop$prop$fileName$1);
          b.push(l);
        }
        hmUI
          .createWidget(hmUI.widget.IMG, {
            x: 74,
            y: 436,
            src: "images/help.png",
          })
          .addEventListener(hmUI.event.CLICK_DOWN, function (h) {
            hmApp.gotoPage({
              url: "page/192x490_s_l66/home/index.page2",
              param: "...",
            });
          });
      },
      onInit: function () {
        g.log("page onInit invoked");
        this.init_view();
      },
      onDestroy: function () {
        g.log("page onDestroy invoked");
      },
    });
  })();
} catch (a) {
  console.log(a);
}
