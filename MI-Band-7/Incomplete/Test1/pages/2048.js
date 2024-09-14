Page({
  build(){
        hmUI.setStatusBarVisible(false);
        hmUI.setLayerScrolling(false);
        var theme = hmFS.SysProGetInt("theme_42");
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 1,
          y: 97,
          w: 190,
          h: 265,
          color: 12365471,
          radius: 26,
        });
        function colour(){
          if (theme == 0){
          return "0xCEC2B5 0xEFE5DA 0xF0E0C9 0xfcb477 0xff9c61 0xff865d 0xff6a38 0xebcf71 0xebcc5f 0xebc94f 0xebc53f 0xebc22c 0xF2B6B6 0xE8ED51 0xFFE3FB 0xE8FF8C 0xFFDEC9 0xF5A433 0xE6109B 0x96C4E6 0xE560CD".split(" ")
          }else{
              return "0xa19a91 0xEFE5DA 0xc2b7ac 0xfcb477 0xcb9263 0xff865d 0xd57352 0xebcf71 0xbba55c 0xebc94f 0xb4962a 0xa28000 0xc58181 0xc7cc30 0xd2a3cc 0xafc74f 0xcea58a 0xc9872b 0xb7137e 0x6596ba 0xa84196".split(" ")
          }
        }
        var k = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 0,
            y: 0,
            w: 192,
            h: 368,
          }),
          g = {
            rowNum: 4,
            colNum: 4,
            score: 0,
            isMoved: !1,
            content: [],
            colour: colour(),
            colourObject: {},
            wdMaps: [],
            wdBgMaps: [],
            scoreWd: "",
            maxScore: 0,
            maxScoreWd: "",
            settingKey: "max_score_key_2048",
            loadBackground: function (a) {
              for (var b = 0; b != this.rowNum; b++) {
                for (var d = 0; d != this.colNum; d++) {
                  var c = 42 * d + 12,
                    e = 42 * b + 150,
                    f = a.createWidget(hmUI.widget.FILL_RECT, {
                      x: c,
                      y: e,
                      w: 40,
                      h: 40,
                      color: 0,
                      radius: 4,
                    });
                  c = a.createWidget(hmUI.widget.TEXT, {
                    x: c,
                    y: e,
                    w: 40,
                    h: 40,
                    text: "X",
                    text_size: 20,
                    color: 16777215,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                  });
                  this.wdMaps.push(c);
                  this.wdBgMaps.push(f);
                }
              }
              this.scoreWd = a.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 312,
                w: 192,
                h: 24,
                text: "Score: 0",
                text_size: 20,
                color: 16777215,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                text_style: hmUI.text_style.WRAP,
              });
              if (b = hmFS.SysProGetInt64(this.settingKey)) this.maxScore = b;
              this.maxScoreWd = a.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 335,
                w: 192,
                h: 24,
                text: "Max: " + this.maxScore,
                text_size: 20,
                color: 16777215,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                text_style: hmUI.text_style.WRAP,
              });
              a.createWidget(hmUI.widget.IMG, {
                x: 0,
                y: 0,
                w: 192,
                h: 490,
                src: "2048/empty.png",
              });
              var l = this;
              hmApp.registerGestureEvent(function (p) {
                switch (p) {
                  case hmApp.gesture.UP:
                    l.addKeyListener(38);
                    break;
                  case hmApp.gesture.DOWN:
                    l.addKeyListener(40);
                    break;
                  case hmApp.gesture.LEFT:
                    l.addKeyListener(37);
                    break;
                  case hmApp.gesture.RIGHT:
                    l.addKeyListener(39);
                }
                return !0;
              });
            },
            findBlock: function (a, b) {
              return this.content.find(function (d) {
                return d.x == a && d.y == b;
              });
            },
            addBlockToMine: function () {
              var a = this.content.filter(function (b) {
                return 0 == b.v;
              });
              0 != a.length &&
                (a[this.makeRandomInteger(a.length)].v = 2 *
                  (this.makeRandomInteger(2) + 1));
            },
            makeRandomInteger: function (a) {
              return Math.floor(Math.random() * a);
            },
            checkDeath: function () {
              if (
                0 != this.content.filter(function (f) {
                  return 0 == f.v;
                }).length
              ) return !1;
              for (var a = 0; a < this.rowNum; a++) {
                if (a != this.rowNum - 1) {
                  for (var b = 0; b < this.colNum; b++) {
                    var d = this.findBlock(b, a), c = this.findBlock(b, a + 1);
                    if (b != this.colNum - 1) {
                      var e = this.findBlock(b + 1, a);
                      if (d.v == e.v || d.v == c.v) return !1;
                    } else if (d.v == c.v) return !1;
                  }
                } else {for (b = 0; b < this.colNum - 1; b++) {
                    if (
                      d = this.findBlock(b, a),
                        e = this.findBlock(
                          b +
                            1,
                          a,
                        ),
                        d.v == e.v
                    ) return !1;
                  }}
              }
              return !0;
            },
            refresh: function () {
              for (var a = 0; a < this.rowNum; a++) {
                for (var b = 0; b < this.colNum; b++) {
                  var d = this.findBlock(b, a).v, c = this.wdMaps[4 * a + b];
                  this.wdBgMaps[4 * a + b].setProperty(hmUI.prop.MORE, {
                    x: 42 * b + 12,
                    y: 42 * a + 150,
                    w: 40,
                    h: 40,
                    color: void 0 == this.colourObject[d]
                      ? this.colourObject[0]
                      : this.colourObject[d],
                  });
                  0 == d
                    ? c.setProperty(hmUI.prop.MORE, { text: "" })
                    : 2 == d
                    ? c.setProperty(hmUI.prop.MORE, { text: d, color: 0 })
                    : 4 == d
                    ? c.setProperty(hmUI.prop.MORE, { text: d, color: 0 })
                    : c.setProperty(hmUI.prop.MORE, {
                      text: d,
                      color: 16777215,
                    });
                }
              }
              this.scoreWd.setProperty(hmUI.prop.MORE, {
                text: "Score:  " + this.score,
              });
              this.score > this.maxScore &&
                (this.maxScore = this.score,
                  this.maxScoreWd.setProperty(hmUI.prop.MORE, {
                    text: "Max: " + this.maxScore,
                  }),
                  hmFS.SysProSetInt64(this.settingKey, this.maxScore));
            },
            addKeyListener: function (a) {
              var b = 0;
              switch (a) {
                case 37:
                  for (a = 0; a < this.rowNum; a++) {
                    for (var d = [], c = !1, e = 0; e < this.colNum; e++) {
                      var f = this.findBlock(e, a);
                      0 != f.v && (c = this.coreCalculate(f, d, c));
                    }
                    for (c = 0; c < this.colNum; c++) {
                      b += this.outOfQueue(c, a, d, c);
                    }
                  }
                  break;
                case 38:
                  for (a = 0; a < this.colNum; a++) {
                    d = [];
                    c = !1;
                    for (e = 0; e < this.rowNum; e++) {
                      f = this.findBlock(a, e),
                        0 != f.v && (c = this.coreCalculate(f, d, c));
                    }
                    for (c = 0; c < this.rowNum; c++) {
                      b += this.outOfQueue(a, c, d, c);
                    }
                  }
                  break;
                case 39:
                  for (a = 0; a < this.rowNum; a++) {
                    d = [];
                    c = !1;
                    for (
                      e = this.colNum - 1; 0 <= e; e--
                    ) {
                      f = this.findBlock(e, a),
                        0 != f.v && (c = this.coreCalculate(f, d, c));
                    }
                    c = this.colNum - 1;
                    for (e = 0; 0 <= c; c--, e++) {
                      b += this.outOfQueue(c, a, d, e);
                    }
                  }
                  break;
                case 40:
                  for (a = 0; a < this.colNum; a++) {
                    d = [];
                    c = !1;
                    for (
                      e = this.rowNum - 1; 0 <= e; e--
                    ) {
                      f = this.findBlock(a, e),
                        0 != f.v && (c = this.coreCalculate(f, d, c));
                    }
                    c = this.rowNum - 1;
                    for (e = 0; 0 <= c; c--, e++) {
                      b += this.outOfQueue(a, c, d, e);
                    }
                  }
              }
              0 != b && (this.addBlockToMine(), this.refresh());
              this.checkDeath() && hmUI.showToast({ text: "Game\nOver!" });
            },
            init: function () {
              for (var a = 0; a < this.rowNum; a++) {
                for (var b = 0; b < this.colNum; b++) {
                  this.content[this.content.length] = { x: b, y: a, v: 0 };
                }
              }
              for (a = 0; 20 >= a; a++) {
                0 == a
                  ? this.colourObject[a] = this.colour[a]
                  : this.colourObject[Math.pow(2, a)] = this.colour[a];
              }
            },
            coreCalculate: function (a, b, d) {
              if (0 == b.length) {
                return b[b.length] = a.v, d;
              }
              var c = b[b.length - 1];
              if (c != a.v || d) return b[b.length] = a.v, !1;
              this.score += b[b.length - 1] = 2 * c;
              return !0;
            },
            outOfQueue: function (a, b, d, c) {
              a = this.findBlock(a, b);
              b = a.v;
              a.v = void 0 == d[c] ? 0 : d[c];
              return b != a.v ? 1 : 0;
            },
            reset: function () {
              this.score = 0;
              this.isMoved = !1;
              this.content = [];
              this.colourObject = {};
              this.init();
              this.addBlockToMine();
              this.addBlockToMine();
              this.refresh();
            },
          };
        g.loadBackground(k);
        g.init();
        g.addBlockToMine();
        g.addBlockToMine();
        g.refresh();
        k.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: 35,
          w: 75,
          h: 35,
          press_color: "0x333333",
          normal_color: "0x262626",
          radius: 36,
          text: "QUIT",
          text_size: 30,
          color: "0xffffff",
          click_func: function () {
            hmApp.goBack();
          },
        });
        k.createWidget(hmUI.widget.BUTTON, {
          x: 113,
          y: 35,
          w: 75,
          h: 35,
          press_color: "0x0986d4",
          normal_color: "0x0d6eff",
          radius: 36,
          text: "Reset",
          text_size: 20,
          color: "0xffffff",
          click_func: function () {
            g.reset();
          },
        });
      },
      onDestroy: function () {
        hmApp.unregisterGestureEvent();
      },
    })
