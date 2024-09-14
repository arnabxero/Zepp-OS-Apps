var mapdata = [
 {
    name: "Rowling",
    size: { col: 9, row: 9 },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 2, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    correct: [
      { row: 1, col: 1 },
    ],
    init_x: 37,
    init_y: 233,
  },
  {
    name: "Undefinitions",
    size: { col: 9, row: 11 },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 2, 0, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    correct: [
      { row: 1, col: 1 },
    ],
    init_x: 71,
    init_y: 148,
  },
  {
    name: "Increasing",
    size: { col: 13, row: 13 },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 0, 2, 1, 0, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 6, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    correct: [
      { row: 1, col: 1 },
    ],
    init_x: 139,
    init_y: 148,
  },
  {
    name: "sense of things",
    size: { col: 13, row: 13 },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 5, 0, 0, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 5, 0, 0, 1, 1, 1, 0, 1, 1],
      [1, 7, 1, 0, 1, 0, 1, 1, 1, 1, 6, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 2, 0, 0, 1],
      [1, 6, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 4, 0, 4, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    correct: [
      { row: 1, col: 1 },
    ],
    init_x: 139,
    init_y: 165,
  },
  {
    name: "Unique end",
    size: { col: 13, row: 13 },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 10, 0, 0, 10, 1, 0, 0, 11, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 10, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 10, 0, 1, 0, 1],
      [1, 0, 1, 6, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 4, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 2, 1, 10, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    correct: [
      { row: 1, col: 1 },
    ],
    init_x: 71,
    init_y: 267,
  },
  {
    name: "Travel",
    size: { col: 11, row: 9 },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 11, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    correct: [
      { row: 1, col: 1 },
    ],
    init_x: 37,
    init_y: 233,
  },
  {
    name: "Lion",
    size: { col: 13, row: 8 },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    correct: [
      { row: 1, col: 1 },
    ],
    init_x: 3,
    init_y: 233,
  },
];
try {
  (function () {
    var f = __$$hmAppManager$$__.currentApp,
      F = f.current;
    new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(f, F),
      "drink",
    );
    DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
    F.module = DeviceRuntimeCore.Page({
      init_view() {
        var dif_arr = [
          ["1", "0", "0", "0", "0"],
          ["2", "0", "0", "0", "0"],
          ["2", "0", "0", "0", "0"],
          ["2", "1", "0", "0", "0"],
          ["2", "1", "0", "0", "0"],
          ["2", "2", "1", "0", "0"],
          ["2", "2", "0", "0", "0"],
          ["2", "2", "1", "0", "0"],
          ["2", "2", "2", "0", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "0", "0", "0"],
          ["2", "1", "0", "0", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "2", "2", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "2", "2", "0"],
          ["2", "2", "2", "2", "1"],
          ["2", "2", "2", "2", "2"],
          ["2", "2", "2", "2", "2"],
        ];
        hmUI.setStatusBarVisible(false);
        hmUI.setLayerScrolling(false);
        var lang = hmFS.SysProGetInt("lang_42");
        if (lang == undefined) {
          hmFS.SysProSetInt("lang_42", 0);
          lang = 0;
        }
        var w2;
        if (lang == 0) {
          w2 = "EXIT";
        } else if (lang == 1) {
          w2 = "SALIR";
        } else if (lang == 2) {
          w2 = "萨利尔";
        } else {
          w2 = "SORTIE";
        }
        var path;
        var theme = hmFS.SysProGetInt("theme_42");
        if (theme == 0) {
          path = "/box/";
        } else {
          path = "/box2/";
        }
        var stars = [];
        let txtBg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
          color: 0x000000,
        });
        txtBg.setProperty(hmUI.prop.VISIBLE, false);
        let txtGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 0,
          y: 0,
          w: 192,
          h: 368,
        });
        txtGroup.setProperty(hmUI.prop.VISIBLE, true);
        const maxCol = 13;
        const boxSize = 17;
        const EMPTY = 0;
        const WALL = 1;
        const SPACE = 0;
        const FILL = 3;
        const PLAYER = 2;
        const UP = 1;
        const DOWN = 2;
        const LEFT = 3;
        const RIGHT = 4;
        const SPACE_R = 4;
        const SPACE_L = 5;
        const SPACE_U = 6;
        const SPACE_D = 7;
        const SPACE_LR = 8;
        const SPACE_UD = 9;
        const BAD = 10;
        const FINISH = 11;
        const SAVE_KEY = "LAB_SAVING";
        const SAVE_KEY_CURRENT = "LAB_SAVING_CURRENT";
        var wdMap = {};
        var currentData = {};
        function setBlockSrc(a, b, c) {
          var d =
            wdMap[currentData.startBX + a + "," + (currentData.startBY + b)];
          var e = "";
          var f = currentData.correctObj[a + "," + b];
          if (c == WALL) {
            e = "images2" + path + "wall.png";
          } else if (c == SPACE) {
            if (f) {
              e = "images2" + path + "ground1.png";
            } else {
              e = "images2" + path + "ground1.png";
            }
          } else if (c == SPACE_D) {
            e = "images2" + path + "arrow_down.png";
          } else if (c == SPACE_U) {
            e = "images2" + path + "arrow_up.png";
          } else if (c == SPACE_L) {
            e = "images2" + path + "arrow_left.png";
          } else if (c == SPACE_R) {
            e = "images2" + path + "arrow_right.png";
          } else if (c == SPACE_LR) {
            e = "images2" + path + "arrow_rightleft.png";
          } else if (c == SPACE_UD) {
            e = "images2" + path + "arrow_updown.png";
          } else if (c == PLAYER) {
            e = "images2" + path + "ground2.png";
          } else if (c == BAD) {
            e = "images2" + path + "bad.png";
          } else if (c == FILL) {
            e = "images2" + path + "ground2.png";
          } else if (c == FINISH) {
            e = "images2" + path + "finish.png";
          } else {
            e = "";
          }
          d.setProperty(hmUI.prop.MORE, { src: e });
        }
        function initUI() {
          var x = -14;
          var y = 80;
          for (var i = 0; i < maxCol; i++) {
            for (var j = 0; j < maxCol; j++) {
              var a = txtGroup.createWidget(hmUI.widget.IMG, {
                x: x + j * boxSize,
                y: y + i * boxSize,
                src: "images2" + path + "ground1.png",
              });
              wdMap[i + "," + j] = a;
            }
          }
        }
        function clearUI() {
          for (var a in wdMap) {
            wdMap[a].setProperty(hmUI.prop.MORE, { src: "" });
          }
        }
        var x_current;
        var y_current;
        function loadAndInitMap(a) {
          if (a >= hmFS.SysProGetInt64(SAVE_KEY_CURRENT)) {
            hmFS.SysProSetInt64(SAVE_KEY_CURRENT, a);
          }
          currentData.level = a;
          for (let i = 0; i < 5; i++) {
            stars[i].setProperty(hmUI.prop.MORE, {
              src: "stars/" + dif_arr[currentData.level][i] + ".png",
            });
          }
          currentData.map = JSON.parse(JSON.stringify(mapdata[a]));
          var b = {};
          for (var i = 0; i < currentData.map.correct.length; i++) {
            var c = currentData.map.correct[i];
            b[c.row + "," + c.col] = true;
          }
          currentData.correctObj = b;
          var d = currentData.map.size.col;
          var e = currentData.map.size.row;
          clearUI();
          currentData.startBX = Math.floor((maxCol - e) / 2);
          currentData.startBY = Math.floor((maxCol - d) / 2);
          type_G = 1;
          for (var i = 0; i < e; i++) {
            for (var j = 0; j < d; j++) {
              var f = currentData.map.map[i][j];
              setBlockSrc(i, j, f);
              if (PLAYER == f) {
                currentData.x = i;
                currentData.y = j;
                x_current = currentData.map.init_x;
                y_current = currentData.map.init_y;
                player.setProperty(hmUI.prop.MORE, {
                  x: currentData.map.init_x,
                  y: currentData.map.init_y,
                });
              }
            }
          }
          type_G = 2;
          levelWd.setProperty(hmUI.prop.MORE, {
            text: currentData.map.name,
          });
        }
        function loadAndInitMapSet(a) {
          currentData.level = a;
          for (let i = 0; i < 5; i++) {
            stars[i].setProperty(hmUI.prop.MORE, {
              src: "stars/" + dif_arr[currentData.level][i] + ".png",
            });
          }
          currentData.map = JSON.parse(JSON.stringify(mapdata[a]));
          var b = {};
          for (var i = 0; i < currentData.map.correct.length; i++) {
            var c = currentData.map.correct[i];
            b[c.row + "," + c.col] = true;
          }
          currentData.correctObj = b;
          var d = currentData.map.size.col;
          var e = currentData.map.size.row;
          clearUI();
          currentData.startBX = Math.floor((maxCol - e) / 2);
          currentData.startBY = Math.floor((maxCol - d) / 2);
          type_G = 1;
          for (var i = 0; i < e; i++) {
            for (var j = 0; j < d; j++) {
              var f = currentData.map.map[i][j];
              setBlockSrc(i, j, f);
              if (PLAYER == f) {
                currentData.x = i;
                currentData.y = j;
                var x = -14;
                var y = 80;
                x_current = currentData.map.init_x;
                y_current = currentData.map.init_y;
                player.setProperty(hmUI.prop.MORE, {
                  x: currentData.map.init_x,
                  y: currentData.map.init_y,
                });
              }
            }
          }
          type_G = 2;
          levelWd.setProperty(hmUI.prop.MORE, {
            text: currentData.map.name,
          });
        }
        function move(a) {
          var b = currentData.x;
          var c = currentData.y;
          var d = currentData.x;
          var e = currentData.y;
          if (a == UP) {
            b -= 1;
            d -= 2;
          } else if (a == DOWN) {
            b += 1;
            d += 2;
          } else if (a == LEFT) {
            c -= 1;
            e -= 2;
          } else if (a == RIGHT) {
            c += 1;
            e += 2;
          }
          var f = currentData.map.map[b][c];
          if (f == SPACE || f == FILL || f == PLAYER || f == BAD || f == FINISH) {
            playerMove(b, c, a);
            move(a);
            testSuccess();
          } else if (f == SPACE_R && a == RIGHT) {
            playerMove(b, c, a);
            move(a);
            testSuccess();
          } else if (f == SPACE_L && a == LEFT) {
            playerMove(b, c, a);
            move(a);
            testSuccess();
          } else if (f == SPACE_U && a == UP) {
            playerMove(b, c, a);
            move(a);
            testSuccess();
          } else if (f == SPACE_D && a == DOWN) {
            playerMove(b, c, a);
            move(a);
            testSuccess();
          }
          if (currentData.map.map[currentData.x][currentData.y] == SPACE) {
            currentData.map.map[currentData.x][currentData.y] = FILL;
            setBlockSrc(currentData.x, currentData.y, FILL);
          }
          testSuccess()
        }
        function playerMove(x, y, or) {
          if (currentData.map.map[currentData.x][currentData.y] == SPACE) {
            currentData.map.map[currentData.x][currentData.y] = FILL;
            setBlockSrc(currentData.x, currentData.y, FILL);
          } else if (currentData.map.map[currentData.x][currentData.y] == BAD) {
            currentData.map.map[currentData.x][currentData.y] = WALL;
            setBlockSrc(currentData.x, currentData.y, WALL);
          }
          if (or == UP) {
            y_current = y_current - 17;
            player.setProperty(hmUI.prop.MORE, {
              y: y_current,
            });
          } else if (or == DOWN) {
            y_current = y_current + 17;
            player.setProperty(hmUI.prop.MORE, {
              y: y_current,
            });
          } else if (or == RIGHT) {
            x_current = x_current + 17;
            player.setProperty(hmUI.prop.MORE, {
              x: x_current,
            });
          } else if (or == LEFT) {
            x_current = x_current - 17;
            player.setProperty(hmUI.prop.MORE, {
              x: x_current,
            });
          }
          currentData.x = x;
          currentData.y = y;

        }
        function testSuccess() {
          var d = currentData.map.size.col;
          var e = currentData.map.size.row;
          var b = false;
          let arr = [];
          let on_wrong = false;
          for (var i = 0; i < e; i++) {
            for (var j = 0; j < d; j++) {
              var f = currentData.map.map[i][j];
              if (f == SPACE) {
                arr.push(SPACE);
              }
              if (f == FINISH) {
                if(on_wrong == false){
                on_wrong = true;
                }
              }
            }
          }
          var f = currentData.x;
          var j = currentData.y;
          if (arr.length == 0 || arr.length == 1 && currentData.map.map[f][j] == SPACE) {
            b = true;
          }
          if (currentData.map.map[f][j] != FINISH && on_wrong == true && b) {
            b = false;
            loadAndInitMap(currentData.level);
            hmUI.showToast({
              text: "Make sure to end in the correct point"
            })
          }
          if (b) {
            var c = currentData.level;
            c += 1;
            if (c >= mapdata.length) {
            //  c = 0;
              hmUI.showToast({ text: "All games passed, good!" });
            }
            for (let i = 0; i < 5; i++) {
              stars[i].setProperty(hmUI.prop.MORE, {
                src: "stars/" + dif_arr[currentData.level][i] + ".png",
              });
            }
            hmFS.SysProSetInt64(SAVE_KEY, c);
            loadAndInitMap(c);
          }
        }
        const levelWd = txtGroup.createWidget(hmUI.widget.TEXT, {
          x: 5,
          y: 3,
          w: 192,
          text: "level 1",
          text_size: 18,
          color: 0x929292,
        });
        for (let i = 0; i < 5; i++) {
          const star = txtGroup.createWidget(hmUI.widget.IMG, {
            x: 5 + (27 * i),
            y: 28,
            src: "a.png",
          });
          stars.push(star);
        }
        initUI();
        var player = txtGroup.createWidget(hmUI.widget.IMG, {
          src: "images2" + path + "man.png",
        });
        var ctLevel = hmFS.SysProGetInt64(SAVE_KEY);
        var maxLevel = hmFS.SysProGetInt64(SAVE_KEY_CURRENT);
        console.log("ctlevel: " + ctLevel + "max_level: " + maxLevel)
        if (ctLevel) {
          loadAndInitMap(ctLevel);
        } else {
          loadAndInitMap(0);
        }
        if (!maxLevel) {
          maxLevel = 0;
        }
        for (let i = 0; i < 5; i++) {
          stars[i].setProperty(hmUI.prop.MORE, {
            src: "stars/" + dif_arr[currentData.level][i] + ".png",
          });
        }
        var leftWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 140,
          w: 96,
          h: 166,
          src: "images2" + path + "empty.png",
        });
        var rightWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 97,
          y: 140,
          w: 96,
          h: 166,
          src: "images2" + path + "empty.png",
        });
        var upWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 78,
          w: 192,
          h: 60,
          src: "images" + path + "empty.png",
        });
        var downWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 309,
          w: 192,
          h: 70,
          src: "images2" + path + "empty.png",
        });
        if (variable == 1) {
          leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(LEFT);
          });
          rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(RIGHT);
          });
          upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(UP);
          });
          downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(DOWN);
          });
        } else {
          hmApp.registerGestureEvent(function (p) {
            switch (p) {
              case hmApp.gesture.UP:
                move(UP);
                break;
              case hmApp.gesture.DOWN:
                move(DOWN);
                break;
              case hmApp.gesture.LEFT:
                move(LEFT);
                break;
              case hmApp.gesture.RIGHT:
                move(RIGHT);
                break;
            }
            return !0;
          });
        }
        const pause = txtGroup.createWidget(hmUI.widget.BUTTON, {
          x: 140,
          y: 10,
          w: 50,
          h: 50,
          press_src: "pause.png",
          normal_src: "pause.png",
          radius: 0,
          text: "",
          text_size: 0,
          click_func: function () {
            render_Menu();
          },
        });
        var variable = hmFS.SysProGetInt("move_var");
        var st = hmFS.SysProGetBool("move_stat");
        if (st == undefined) st = true;
        if (variable == undefined) variable = 1;
        function render_Menu() {
          let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 0,
            y: 0,
            w: 194,
            h: 368,
            color: 0x000000,
          });
          let play = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 140,
            y: 10,
            w: 50,
            h: 50,
            press_src: "play.png",
            normal_src: "play.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              bg.setProperty(hmUI.prop.VISIBLE, false);
              play.setProperty(hmUI.prop.VISIBLE, false);
              menu.setProperty(hmUI.prop.VISIBLE, false);
              rst.setProperty(hmUI.prop.VISIBLE, false);
              button.setProperty(hmUI.prop.VISIBLE, false);
              ex.setProperty(hmUI.prop.VISIBLE, false);
            },
          });
          var ex = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 10,
            y: 10,
            w: 100,
            h: 50,
            radius: 14,
            text: w2,
            text_size: 30,
            color: 0xffffff,
            press_color: 0x555555,
            normal_color: 0x686868,
            click_func: function () {
              hmApp.goBack();
            },
          });
          let button = hmUI.createWidget(hmUI.widget.IMG, {
            x: 50,
            y: 300,
            src: "switch_" + st + ".png",
          });
          button.addEventListener(hmUI.event.CLICK_DOWN, function () {
            test();
          });
          function test() {
            if (variable <= 1) {
              variable = 2;
              hmApp.registerGestureEvent(function (p) {
                switch (p) {
                  case hmApp.gesture.UP:
                    move(UP);
                    break;
                  case hmApp.gesture.DOWN:
                    move(DOWN);
                    break;
                  case hmApp.gesture.LEFT:
                    move(LEFT);
                    break;
                  case hmApp.gesture.RIGHT:
                    move(RIGHT);
                    break;
                }
                return !0;
              });
              leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              st = false;
              button.setProperty(hmUI.prop.MORE, {
                src: "switch_" + st + ".png",
              });
              hmFS.SysProSetInt("move_var", variable);
              hmFS.SysProSetBool("move_stat", st);
            } else if (variable >= 2) {
              variable = 1;
              hmApp.registerGestureEvent(function (p) {
                switch (p) {
                  case hmApp.gesture.UP:
                    console.log("b");
                    break;
                  case hmApp.gesture.DOWN:
                    console.log("b");
                    break;
                  case hmApp.gesture.LEFT:
                    console.log("b");
                    break;
                  case hmApp.gesture.RIGHT:
                    console.log("b");
                    break;
                }
                return !0;
              });
              leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(LEFT);
              });
              rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(RIGHT);
              });
              upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(UP);
              });
              downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(DOWN);
              });
              st = true;
              button.setProperty(hmUI.prop.MORE, {
                src: "switch_" + st + ".png",
              });
              hmFS.SysProSetInt("move_var", variable);
              hmFS.SysProSetBool("move_stat", st);
            } else {
              variable = 2;
              hmApp.registerGestureEvent(function (p) {
                switch (p) {
                  case hmApp.gesture.UP:
                    move(UP);
                    break;
                  case hmApp.gesture.DOWN:
                    move(DOWN);
                    break;
                  case hmApp.gesture.LEFT:
                    move(LEFT);
                    break;
                  case hmApp.gesture.RIGHT:
                    move(RIGHT);
                    break;
                }
                return !0;
              });
              leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              check = false;
              button.setProperty(hmUI.prop.MORE, {
                src: "switch_" + st + ".png",
              });
              hmFS.SysProSetInt("move_var", variable);
              hmFS.SysProSetBool("move_stat", st);
            }
          }
          hmFS.SysProSetInt("move_var", variable);
          hmFS.SysProSetBool("move_stat", st);
          let rst = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 61,
            y: 100,
            w: 75,
            h: 75,
            press_src: "restart.png",
            normal_src: "restart.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              loadAndInitMap(currentData.level);
              bg.setProperty(hmUI.prop.VISIBLE, false);
              play.setProperty(hmUI.prop.VISIBLE, false);
              menu.setProperty(hmUI.prop.VISIBLE, false);
              rst.setProperty(hmUI.prop.VISIBLE, false);
              button.setProperty(hmUI.prop.VISIBLE, false);
              ex.setProperty(hmUI.prop.VISIBLE, false);
            },
          });
          let menu = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 61,
            y: 200,
            w: 75,
            h: 75,
            press_src: "menu.png",
            normal_src: "menu.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              go_levels();
            },
          });
        }
        var move_RIGHT = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 144,
          y: 310,
          w: 48,
          h: 58,
          radius: 0,
          text: "→",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(RIGHT);
          },
        });
        var move_LEFT = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: 310,
          w: 48,
          h: 58,
          radius: 0,
          text: "←",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(LEFT);
          },
        });
        var move_UP = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 48,
          y: 310,
          w: 96,
          h: 29,
          radius: 0,
          text: "↑",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(UP);
          },
        });
        var move_DOWN = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 48,
          y: 339,
          w: 96,
          h: 29,
          radius: 0,
          text: "↓",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(DOWN);
          },
        });
        const x_POS = [
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
        ];
        var y_POS = [
          13,
          13,
          13,
          65,
          65,
          65,
          117,
          117,
          117,
          169,
          169,
          169,
          221,
          221,
          221,
          273,
          273,
          273,
          325,
          325,
        ];
        function go_levels() {
          let j = hmFS.SysProGetInt64(SAVE_KEY);
          let m = currentData.level;
          let levels = [];
          let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 0,
            y: 0,
            w: 194,
            h: 368,
            color: 0x000000,
          });
          for (let i = 0; i < mapdata.length; i++) {
            let level = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: x_POS[i],
              y: y_POS[i],
              w: 40,
              h: 40,
              press_color: i <= j && i != m
                ? 0x686868
                : i == m
                ? 0x1234ff
                : 0xff0000,
              normal_color: i <= j && i != m
                ? 0x555555
                : i == m
                ? 0x0000ff
                : 0xff2323,
              color: 0xffffff,
              radius: 4,
              text: i + 1,
              text_size: 14,
              click_func: function () {
                if (i <= j) {
                  type_G = 1;
                  loadAndInitMapSet(i);
                  for (let i = 0; i < mapdata.length; i++) {
                    levels[i].setProperty(hmUI.prop.VISIBLE, false);
                  }
                  bg.setProperty(hmUI.prop.VISIBLE, false);
                  arrow.setProperty(hmUI.prop.VISIBLE, false);
                }else{
                  hmUI.showToast({
                    text: "Complete the levels in red which are before this level to play this level"
                  })
                }
              },
            });
            levels.push(level);
          }
          let arrow = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 131,
            y: 315,
            w: 50,
            h: 50,
            press_src: "arrow.png",
            normal_src: "arrow.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              for (let i = 0; i < mapdata.length; i++) {
                levels[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              bg.setProperty(hmUI.prop.VISIBLE, false);
              arrow.setProperty(hmUI.prop.VISIBLE, false);
            },
          });
        }
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
        console.log("index page.js on destory invoke"),
          hmApp.unregisterGestureEvent();
      },
    });
  })();
} catch (f) {
  console.log(f);
}
