try {
  (function () {
    var v = __$$hmAppManager$$__.currentApp;
    new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(v, v.current)
    );
    try {
      (function () {
        var w = __$$hmAppManager$$__.currentApp,
          E = w.current;
        new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(w, E),
          "drink"
        );
        DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
        E.module = DeviceRuntimeCore.Page({
          init_view: function () {
            function F() {
              g = C[Math.floor(Math.random() * C.length)];
              var a = Math.floor(100 * Math.random()) + 20;
              a < g.width && (a = g.width + 20);
              m += 1;
              m %= c.length;
              var b = c[m];
              b.x = 40 + a + g.offsetX;
              b.y = 300 - a + g.offsetY;
              b.wd.setProperty(hmUI.prop.MORE, {
                x: 0 + b.x,
                y: b.y,
                src: g.src,
              });
              b.wd.setProperty(hmUI.prop.VISIBLE, !0);
              d = a;
            }
            function G(a) {
              n = a;
              a > p && ((p = a), hmFS.SysProSetInt64("JUMP_SCORE", p));
              L.setProperty(hmUI.prop.TEXT, String(n));
              x.setProperty(hmUI.prop.MORE, { text: "\u6700\u9ad8\uff1a" + p });
            }
            function H() {
              var a = C[0],
                b = c[m];
              b.x = 40 + a.offsetX;
              b.y = 300 + a.offsetY;
              b.wd.setProperty(hmUI.prop.MORE, {
                x: 0 + b.x,
                y: b.y,
                src: a.src,
              });
              b.wd.setProperty(hmUI.prop.VISIBLE, !0);
              F();
              G(n);
            }
            function I() {
              if (
                !k &&
                (y.setProperty(hmUI.prop.MORE, { src: "jump/btn2.png" }),
                (z = !1),
                !k && 2 == h)
              ) {
                d = l + 20;
                h = 0;
                J = Math.floor(360 / (d / 5));
                q = 0;
                var a = 40 + d + 7,
                  b = c[m],
                  r = b.x + g.judgeX1,
                  t = b.x + g.judgeX2;
                console.log("px=" + a);
                console.log("bWd.x=" + b.x);
                console.log("aimx1=" + r);
                console.log("aimx2=" + t);
                if (a < r || a > t)
                  (k = !0),
                    hmUI.showToast({ text: "game over" }),
                    x.setProperty(hmUI.prop.VISIBLE, !0),
                    A.setProperty(hmUI.prop.VISIBLE, !0);
                k || G(n + (g.score + Math.floor(d / 10)));
              }
            }
            hmUI.setLayerScrolling(!1);
            var g = "",
              d = 0,
              e = 0,
              J = 0,
              q = 0,
              h = 2,
              k = !1,
              c = [],
              m = 0,
              n = 0,
              p = 0,
              z = !1,
              l = 0,
              D = 1;
            hmSensor.createSensor(hmSensor.id.VIBRATE);
            var B = Math.floor(-3 * Math.random() + 4),
              M = { 1: 16569742, 2: 14344168, 3: 16766163, 4: 13230069 }[B];
            B = { 1: 5065266, 2: 4014402, 3: 5262148, 4: 4934739 }[B];
            hmFS.SysProGetInt64("JUMP_SCORE") &&
              (p = hmFS.SysProGetInt64("JUMP_SCORE"));
            var C = [
                {
                  src: "jump/block10.png",
                  height: 40,
                  width: 30,
                  judgeX1: 32,
                  judgeX2: 54,
                  score: 20,
                  offsetX: -35,
                  offsetY: 20,
                },
                {
                  src: "jump/block25.png",
                  height: 40,
                  width: 30,
                  judgeX1: 32,
                  judgeX2: 54,
                  score: 20,
                  offsetX: -35,
                  offsetY: 20,
                },
                {
                  src: "jump/block26.png",
                  height: 40,
                  width: 30,
                  judgeX1: 32,
                  judgeX2: 54,
                  score: 20,
                  offsetX: -35,
                  offsetY: 20,
                },
                {
                  src: "jump/block13.png",
                  height: 40,
                  width: 30,
                  judgeX1: 33,
                  judgeX2: 52,
                  score: 40,
                  offsetX: -35,
                  offsetY: 20,
                },
              ],
              f = hmUI.createWidget(hmUI.widget.GROUP, {
                x: 0,
                y: 0,
                w: 192,
                h: 480,
              });
            f.createWidget(hmUI.widget.FILL_RECT, {
              color: M,
              x: 0,
              y: 0,
              w: 192,
              h: 480,
            });
            var L = f.createWidget(hmUI.widget.TEXT_IMG, {
                x: 0,
                y: 90,
                w: 192,
                font_array:
                  "num/0.png num/1.png num/2.png num/3.png num/4.png num/5.png num/6.png num/7.png num/8.png num/9.png".split(
                    " "
                  ),
                h_space: 5,
                align_h: hmUI.align.CENTER_H,
                text: "0",
              }),
              x = f.createWidget(hmUI.widget.TEXT, {
                color: B,
                x: 0,
                y: 120,
                w: 192,
                h: 50,
                align_h: hmUI.align.CENTER_H,
                text: "your score",
                text_size: 30,
              });
            (function () {
              var a = f.createWidget(hmUI.widget.IMG, {
                  x: 40,
                  y: 200,
                  src: "jump/block10.png",
                }),
                b = f.createWidget(hmUI.widget.IMG, {
                  x: 40,
                  y: 200,
                  src: "jump/block10.png",
                }),
                r = f.createWidget(hmUI.widget.IMG, {
                  x: 40,
                  y: 200,
                  src: "jump/block10.png",
                }),
                t = f.createWidget(hmUI.widget.IMG, {
                  x: 40,
                  y: 200,
                  src: "jump/block10.png",
                });
              a.setProperty(hmUI.prop.VISIBLE, !1);
              b.setProperty(hmUI.prop.VISIBLE, !1);
              r.setProperty(hmUI.prop.VISIBLE, !1);
              t.setProperty(hmUI.prop.VISIBLE, !1);
              c.push({ wd: t });
              c.push({ wd: r });
              c.push({ wd: b });
              c.push({ wd: a });
            })();
            var u = f.createWidget(hmUI.widget.IMG, {
              x: 18,
              y: 290,
              src: "jump/piece.png",
            });
            f.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 423,
              src: "Shadow_down.png",
            });
            f.createWidget(hmUI.widget.IMG, {
              x: 74,
              y: 23,
              src: "help.png",
            }).addEventListener(hmUI.event.CLICK_DOWN, function (a) {
              hmApp.gotoPage({
                url: "page/192x490_s_l66/index_about",
                param: "...",
              });
            });
            var y = f.createWidget(hmUI.widget.IMG, {
              x: 36,
              y: 390,
              src: "jump/btn2.png",
            });
            y.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
              console.log(a.x);
              2 != h ||
                k ||
                ((z = !0),
                (l = 0),
                (D = 1),
                y.setProperty(hmUI.prop.MORE, { src: "jump/btn1.png" }));
            });
            y.addEventListener(hmUI.event.CLICK_UP, function (a) {
              console.log(a.x);
              I();
            });
            var A = f.createWidget(hmUI.widget.IMG, {
              x: -2,
              y: 210,
              src: "jump/restart.png",
            });
            A.setProperty(hmUI.prop.VISIBLE, !1);
            x.setProperty(hmUI.prop.VISIBLE, !1);
            A.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
              console.log(a.x);
              A.setProperty(hmUI.prop.VISIBLE, !1);
              x.setProperty(hmUI.prop.VISIBLE, !1);
              for (a = 0; a < c.length; a++)
                c[a].wd.setProperty(hmUI.prop.VISIBLE, !1);
              d = n = 0;
              h = 2;
              k = !1;
              n = m = 0;
              z = !1;
              u.setProperty(hmUI.prop.MORE, { x: 18, y: 290 });
              K.setProperty(hmUI.prop.MORE, {
                x: 46,
                y: 390,
                w: 0,
                h: 6,
                color: "0xffffff",
              });
              H();
            });
            f.createWidget(hmUI.widget.FILL_RECT, {
              x: 46,
              y: 390,
              w: 100,
              h: 6,
              color: "0x858585",
              radius: 3,
            });
            var K = f.createWidget(hmUI.widget.FILL_RECT, {
              x: 46,
              y: 390,
              w: 0,
              h: 6,
              color: "0xffffff",
              radius: 3,
            });
            H();
            timer.createTimer(
              10,
              50,
              function (a) {
                if (0 == h)
                  e < d
                    ? ((e += 5),
                      (q += J),
                      360 < q && (q = 0),
                      e > d && (e = d),
                      u.setProperty(hmUI.prop.MORE, {
                        x: 40 + e + -22,
                        y: 300 - e - 3 * (e > d / 2 ? d - e : e) + -10,
                        pos_x: 0,
                        pos_y: 0,
                        center_x: 30,
                        center_y: 30,
                        angle: q,
                      }))
                    : ((h = 1),
                      (e = 0),
                      u.setProperty(hmUI.prop.MORE, { angle: 0 }));
                else if (1 != h || k)
                  2 == h &&
                    !k &&
                    z &&
                    ((l += 4 * D),
                    100 <= l
                      ? ((l = 100), I())
                      : 0 >= l && ((l = 0), (D *= -1)),
                    K.setProperty(hmUI.prop.MORE, {
                      x: 46,
                      y: 390,
                      w: l,
                      h: 6,
                      color: "0xffffff",
                    }));
                else if (e < d) {
                  e += 7;
                  a = 7;
                  e > d && ((a -= e - d), (e = d));
                  u.setProperty(hmUI.prop.MORE, {
                    x: 40 + d - e + -22,
                    y: 300 - d + e + -10,
                  });
                  for (var b = 0; b < c.length; b++)
                    (c[b].x -= a),
                      (c[b].y += a),
                      c[b].wd.setProperty(hmUI.prop.MORE, {
                        x: 0 + c[b].x,
                        y: c[b].y,
                      });
                } else
                  (d = 0),
                    u.setProperty(hmUI.prop.MORE, { x: 18, y: 290 }),
                    (h = 2),
                    (e = 0),
                    F();
              },
              {}
            );
          },
          onInit: function () {
            console.log("index page.js on init invoke");
            this.init_view();
          },
          onReady: function () {
            console.log("index page.js on ready invoke");
          },
          onShow: function () {
            console.log("index page.js on show invoke");
          },
          onHide: function () {
            console.log("index page.js on hide invoke");
          },
          onDestory: function () {
            console.log("index page.js on destory invoke");
          },
        });
      })();
    } catch (w) {
      console.log(w);
    }
  })();
} catch (v) {
  console.log(v);
}
