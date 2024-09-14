Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    const SAVE_KEY = "ENIGME_SAVING";
    const SAVE_KEY_CURRENT = "ENIGME_SAVING_CURRENT";
    var ctLevel = hmFS.SysProGetInt64(SAVE_KEY_CURRENT);
    var maxLevel = hmFS.SysProGetInt64(SAVE_KEY);
    console.log("ctlevel: " + ctLevel + "max_level: " + maxLevel);
    if (ctLevel) {
      ctLevel = ctLevel;
    } else {
      ctLevel = 0;
    }
    if (ctLevel == 0) {
      var arr = [
        1,
        1,
        1,
        0,
        2,
        2,
        2,
      ];
      function arr_Test(arg) {
        if (arr[arg] == 1) {
          return "down";
        } else if (arr[arg] == 2) {
          return "up";
        } else {
          return "zero";
        }
      }
      var widgets = [];
      for (let i = 0; i < 7; i++) {
        let widget = hmUI.createWidget(hmUI.widget.IMG, {
          x: 72,
          y: 5 + (50 * i),
          src: "arrows/" + arr_Test(i) + ".png",
        });
        widget.addEventListener(hmUI.event.CLICK_DOWN, () => {
          if (arr[i + 1] == 0 && arr[i] == 1) {
            widgets[i].setProperty(hmUI.prop.MORE, {
              src: "arrows/zero.png",
            });
            widgets[i + 1].setProperty(hmUI.prop.MORE, {
              src: "arrows/down.png",
            });
            arr[i] = 0;
            arr[i + 1] = 1;
            test_sucess();
          } else if (arr[i - 1] == 0 && arr[i] == 2) {
            widgets[i].setProperty(hmUI.prop.MORE, {
              src: "arrows/zero.png",
            });
            widgets[i - 1].setProperty(hmUI.prop.MORE, {
              src: "arrows/up.png",
            });
            arr[i] = 0;
            arr[i - 1] = 2;
            test_sucess();
          } else if (
            arr[i + 1] == 2 && arr[i] == 1 && arr[i + 2] != 1 &&
            arr[i + 2] != 2 && i < 5
          ) {
            widgets[i].setProperty(hmUI.prop.MORE, {
              src: "arrows/zero.png",
            });
            widgets[i + 2].setProperty(hmUI.prop.MORE, {
              src: "arrows/down.png",
            });
            arr[i] = 0;
            arr[i + 2] = 1;
            test_sucess();
          } else if (
            arr[i - 1] == 1 && arr[i] == 2 && arr[i - 2] != 1 &&
            arr[i - 2] != 2 && i > 1
          ) {
            widgets[i].setProperty(hmUI.prop.MORE, {
              src: "arrows/zero.png",
            });
            widgets[i - 2].setProperty(hmUI.prop.MORE, {
              src: "arrows/up.png",
            });
            arr[i] = 0;
            arr[i - 2] = 2;
            test_sucess();
          }
        });
        widgets.push(widget);
      }
      function test_sucess() {
        console.log("test");
        if (
          arr[0] == 2 && arr[1] == 2 && arr[2] == 2 && arr[3] == 0 &&
          arr[4] == 1 && arr[5] == 1 && arr[6] == 1
        ) {
          console.log(true);
          hmFS.SysProSetInt64(SAVE_KEY_CURRENT, ctLevel + 1);
          hmApp.gotoPage({ url: "pages/enigmes", param: "..." });
        }
      }
    } else if (ctLevel == 1) {
      var widgets = [];
      var srts = [];
      var can = 0;
      const init = [1, 2, 0, 4, 5, 6, 7, 8, 0];
      const x = [1, 61, 121, 1, 61, 121, 1, 61, 121];
      const y = [110, 110, 110, 170, 170, 170, 230, 230, 230];
      for (let i = 0; i < 9; i++) {
        let widget = hmUI.createWidget(hmUI.widget.IMG, {
          x: x[i],
          y: y[i],
          src: "row/" + init[i] + ".png",
        });
        let srt = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
          x: x[i],
          y: y[i],
          w: 60,
          h: 60,
          radius: 5,
          line_width: 5,
          color: 0x3f48cc,
        });
        srt.setProperty(hmUI.prop.VISIBLE, false);
        srts.push(srt);
        widget.addEventListener(hmUI.event.CLICK_DOWN, () => {
          if (can == 0) {
            for (let j = 0; j < 9; j++) {
              if (j != i) {
                srts[j].setProperty(hmUI.prop.VISIBLE, false);
              } else {
                srts[j].setProperty(hmUI.prop.VISIBLE, true);
              }
            }
            if (init[i + 1] == 0) {
              right.setProperty(hmUI.prop.VISIBLE, true);
              right.setProperty(hmUI.prop.MORE, {
                x: x[i] + 60,
                y: y[i],
              });
              right.addEventListener(hmUI.event.CLICK_DOWN, () => {
                init[i + 1] = init[i];
                init[i] = 0;
                widgets[i].setProperty(hmUI.prop.MORE, {
                  src: "row/" + init[i] + ".png",
                });
                widgets[i + 1].setProperty(hmUI.prop.MORE, {
                  src: "row/" + init[i + 1] + ".png",
                });
                test_success();
                up.setProperty(hmUI.prop.VISIBLE, false);
                down.setProperty(hmUI.prop.VISIBLE, false);
                left.setProperty(hmUI.prop.VISIBLE, false);
                right.setProperty(hmUI.prop.VISIBLE, false);
              });
            } else {
              right.setProperty(hmUI.prop.VISIBLE, false);
            }
            if (init[i - 1] == 0) {
              left.setProperty(hmUI.prop.VISIBLE, true);
              left.setProperty(hmUI.prop.MORE, {
                x: x[i] - 60,
                y: y[i],
              });
              left.addEventListener(hmUI.event.CLICK_DOWN, () => {
                init[i - 1] = init[i];
                init[i] = 0;
                widgets[i].setProperty(hmUI.prop.MORE, {
                  src: "row/" + init[i] + ".png",
                });
                widgets[i - 1].setProperty(hmUI.prop.MORE, {
                  src: "row/" + init[i - 1] + ".png",
                });
                test_success();
                up.setProperty(hmUI.prop.VISIBLE, false);
                down.setProperty(hmUI.prop.VISIBLE, false);
                left.setProperty(hmUI.prop.VISIBLE, false);
                right.setProperty(hmUI.prop.VISIBLE, false);
              });
            } else {
              left.setProperty(hmUI.prop.VISIBLE, false);
            }
            if (init[i - 3] == 0) {
              up.setProperty(hmUI.prop.VISIBLE, true);
              up.setProperty(hmUI.prop.MORE, {
                x: x[i],
                y: y[i] - 60,
              });
              up.addEventListener(hmUI.event.CLICK_DOWN, () => {
                init[i - 3] = init[i];
                init[i] = 0;
                widgets[i].setProperty(hmUI.prop.MORE, {
                  src: "row/" + "0" + ".png",
                });
                widgets[i - 3].setProperty(hmUI.prop.MORE, {
                  src: "row/" + init[i - 3] + ".png",
                });
                test_success();
                up.setProperty(hmUI.prop.VISIBLE, false);
                down.setProperty(hmUI.prop.VISIBLE, false);
                left.setProperty(hmUI.prop.VISIBLE, false);
                right.setProperty(hmUI.prop.VISIBLE, false);
              });
            } else {
              up.setProperty(hmUI.prop.VISIBLE, false);
            }
            if (init[i + 3] == 0) {
              down.setProperty(hmUI.prop.VISIBLE, true);
              down.setProperty(hmUI.prop.MORE, {
                x: x[i],
                y: y[i] + 60,
              });
              down.addEventListener(hmUI.event.CLICK_DOWN, () => {
                init[i + 3] = init[i];
                init[i] = 0;
                widgets[i].setProperty(hmUI.prop.MORE, {
                  src: "row/" + "0" + ".png",
                });
                widgets[i + 3].setProperty(hmUI.prop.MORE, {
                  src: "row/" + init[i + 3] + ".png",
                });
                test_success();
                up.setProperty(hmUI.prop.VISIBLE, false);
                down.setProperty(hmUI.prop.VISIBLE, false);
                left.setProperty(hmUI.prop.VISIBLE, false);
                right.setProperty(hmUI.prop.VISIBLE, false);
              });
            } else {
              down.setProperty(hmUI.prop.VISIBLE, false);
            }
            test_success();
          } else if (can == 1) {
            rest_srt.setProperty(hmUI.prop.MORE, {
              x: x[i],
              y: y[i],
            });
            rest_srt.addEventListener(hmUI.event.CLICK_DOWN, () => {
              if (i == 0) {
                rest.setProperty(hmUI.prop.MORE, {
                  x: x[i],
                  y: y[i],
                });
                let wait = timer.createTimer(1000, 1000, function () {
                  hmFS.SysProSetInt64(SAVE_KEY_CURRENT, ctLevel + 1);
                  hmApp.gotoPage({ url: "pages/enigmes", param: "..." });
                });
              }
            });
          }
        });
        widgets.push(widget);
      }
      function test_success() {
        for (let j = 0; j < 9; j++) {
          srts[j].setProperty(hmUI.prop.VISIBLE, false);
        }
        if (
          init[0] == 0 && init[1] == 6 && init[2] == 7 && init[3] == 4 &&
          init[4] == 5 && init[5] == 8 && init[6] == 1 && init[7] == 2 &&
          init[8] == 0
        ) {
          up.setProperty(hmUI.prop.VISIBLE, false);
          down.setProperty(hmUI.prop.VISIBLE, false);
          left.setProperty(hmUI.prop.VISIBLE, false);
          right.setProperty(hmUI.prop.VISIBLE, false);
          for (let j = 0; j < 9; j++) {
            srts[j].setProperty(hmUI.prop.VISIBLE, false);
          }
          rest.setProperty(hmUI.prop.VISIBLE, true);
          can = 1;
          rest_srt.setProperty(hmUI.prop.MORE, {
            x: x[i],
            y: y[i],
          });
          rest.setProperty(hmUI.prop.MORE, {
            x: x[i],
            y: y[i],
          });
          let wait = timer.createTimer(1000, 1000, function () {
            hmFS.SysProSetInt64(SAVE_KEY_CURRENT, ctLevel + 1);
            hmApp.gotoPage({ url: "pages/enigmes", param: "..." });
          });
        }
      }
      var rest = hmUI.createWidget(hmUI.widget.IMG, {
        x: 10,
        y: 10,
        src: "row/" + "9" + ".png",
      });
      var rest_srt = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 10,
        y: 10,
        w: 60,
        h: 60,
        radius: 5,
        line_width: 5,
        color: 0x00a8f3,
      });
      rest.addEventListener(hmUI.event.CLICK_DOWN, () => {
        if (can == 1) {
          rest_srt.setProperty(hmUI.prop.VISIBLE, true);
        }
      });
      rest_srt.setProperty(hmUI.prop.VISIBLE, false);
      rest.setProperty(hmUI.prop.VISIBLE, false);
      var up = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: "row/" + "up" + ".png",
      });
      var down = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: "row/" + "down" + ".png",
      });
      var left = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: "row/" + "left" + ".png",
      });
      var right = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: "row/" + "right" + ".png",
      });
      up.setProperty(hmUI.prop.VISIBLE, false);
      down.setProperty(hmUI.prop.VISIBLE, false);
      left.setProperty(hmUI.prop.VISIBLE, false);
      right.setProperty(hmUI.prop.VISIBLE, false);
    }
  },
});
