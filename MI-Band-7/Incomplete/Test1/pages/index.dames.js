Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    var theme = hmFS.SysProGetInt("theme_42");
    var colors = [];
    if (theme == 0) {
      colors = [
        0x0000ff,
        0xff0000,
      ];
    } else {
      colors = [
        0x18e367,
        0xf57d0f,
      ];
    }
    const color_arr = [
      0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821,
      0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 
      0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821,
      0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e,
      0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821,
      0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e,
      0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821,
      0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e, 0x462821, 0xcd9e6e,
    ];
    const game_Board = [
      2,
      0,
      2,
      0,
      2,
      0,
      2,
      0,
      0,
      2,
      0,
      2,
      0,
      2,
      0,
      2,
      2,
      0,
      2,
      0,
      2,
      0,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
    ];
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 1,
      y: 136,
      src: "gameboard.png",
    });
    var y_POS = [
      136,
      136,
      136,
      136,
      136,
      136,
      136,
      136,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      184,
      184,
      184,
      184,
      184,
      184,
      184,
      184,
      208,
      208,
      208,
      208,
      208,
      208,
      208,
      208,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      232,
      256,
      256,
      256,
      256,
      256,
      256,
      256,
      256,
      280,
      280,
      280,
      280,
      280,
      280,
      280,
      280,
      304,
      304,
      304,
      304,
      304,
      304,
      304,
      304,
    ];
    var x_POS = [
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
      1,
      25,
      49,
      73,
      97,
      121,
      145,
      169,
    ];
    var modif_arr = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
    ];
    var items = [];
    var turn = 1;
    var modif_r;
    var modif_b;
    var x;
    var y;
    var creations = [];
    for (let i = 0; i < 65; i++) {
      if (game_Board[i] == 1) {
        let item = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x_POS[i],
          y: y_POS[i],
          w: 24,
          h: 24,
          radius: 12,
          color: colors[0],
        });
        item.addEventListener(hmUI.event.CLICK_DOWN, () => {
          if (turn == 1) {
            console.log("pos:" + i);
            x = x_POS[i];
            y = y_POS[i];
            for (let i = 0; i <= creations.length - 1; i++) {
              creations[i].setProperty(hmUI.prop.VISIBLE, false);
            }
            let round = movement(modif_arr[i], x, y);
            //turn = 2;
          }
        });
        items.push(item);
      } else if (game_Board[i] == 2) {
        let item = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x_POS[i],
          y: y_POS[i],
          w: 24,
          h: 24,
          radius: 12,
          color: colors[1],
        });
        item.addEventListener(hmUI.event.CLICK_DOWN, () => {
          if (turn == 2) {
            console.log("pos:" + i);
            x = x_POS[i];
            y = y_POS[i];
            for (let i = 0; i <= creations.length - 1; i++) {
              creations[i].setProperty(hmUI.prop.VISIBLE, false);
            }
            let round = movement(modif_arr[i], x, y);
            //turn = 1;
          }
        });
        items.push(item);
      } else {
        let item = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x_POS[i],
          y: y_POS[i],
          w: 24,
          h: 24,
          radius: 12,
          color: color_arr[i],
        });
        item.addEventListener(hmUI.event.CLICK_DOWN, () => {
          console.log("pos:" + i);

          console.log("st:" + game_Board[i]);
        });
        items.push(item);
      }
    }
    var modif;
    function j() {
      if (turn == 1) {
        return 2;
      } else {
        return 1;
      }
    }
    function movement(pos, x, y) {
      creations = [];
      let mod1 = pos + 8;
      let mod2 = pos - 8;
      let mod3 = pos + 16;
      let mod4 = pos - 16;
      let up = game_Board[pos - 8];
      let down = game_Board[pos + 8];
      let right = game_Board[pos + 1];
      let left = game_Board[pos - 1];
      let u_r = game_Board[mod2 + 1];
      let u_l = game_Board[mod2 - 1];
      let d_r = game_Board[mod1 + 1];
      let d_l = game_Board[mod1 - 1];
      let up1 = game_Board[pos - 16];
      let down1 = game_Board[pos + 16];
      let right1 = game_Board[pos + 2];
      let left1 = game_Board[pos - 2];
      let u_r1 = game_Board[mod3 + 2];
      let u_l1 = game_Board[mod3 - 2];
      let d_r1 = game_Board[mod4 + 2];
      let d_l1 = game_Board[mod4 - 2];
      console.log("u_r1: " + u_r1)
      console.log("u_l1: " + u_l1)
      console.log("d_r1: " + d_r1)
      console.log("d_l1: " + d_l1)
      console.log("u_r: " + u_r)
      console.log("u_l: " + u_l)
      console.log("d_r: " + d_r)
      console.log("d_l: " + d_l)
console.log("j: " + j())
      let l = turn;
      let arr = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ];
      modif = pos;
      let t1 = turn - 1;
      if (u_r == 0 && u_r != turn) {
        arr[2] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x + 24,
          y: y - 24,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          let b = game_Board[mod2 + 1];
          game_Board[mod2 + 1] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod2 + 1].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod2 + 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod2 + 1];
              y = y_POS[mod2 + 1];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod2 + 1], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      if (u_l == 0 && u_l != turn) {
        arr[0] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x - 24,
          y: y - 24,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          let b = game_Board[mod2 - 1];
          game_Board[mod2 - 1] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod2 - 1].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod2 - 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod2 - 1];
              y = y_POS[mod2 - 1];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod2 - 1], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      if (d_r == 0 && d_r != turn) {
        arr[8] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x + 24,
          y: y + 24,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          let b = game_Board[mod1 + 1];
          game_Board[mod1 + 1] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod1 + 1].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod1 + 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod1 + 1];
              y = y_POS[mod1 + 1];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod1 + 1], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      if (d_l == 0 && d_l != turn) {
        arr[6] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x - 24,
          y: y + 24,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          let b = game_Board[mod1 - 1];
          game_Board[mod1 - 1] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod1 - 1].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod1 - 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod1 - 1];
              y = y_POS[mod1 - 1];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod1 - 1], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      if (u_r == j() && u_r1 == 0) {
        arr[2] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x + 48,
          y: y - 48,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          game_Board[mod4 + 1] = 0
          let b = game_Board[mod4 + 2];
          game_Board[mod4 + 2] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod4 + 2].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod4 + 2].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod4 + 2];
              y = y_POS[mod4 + 2];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod4 + 2], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
          items[mod2 - 1].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod2 - 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      if (u_l == j() && u_l1 == 0) {
        arr[0] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x - 48,
          y: y - 48,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          game_Board[mod4 - 1] = 0
          let b = game_Board[mod4 - 2];
          game_Board[mod4 - 2] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod4 - 2].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod4 - 2].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod4 - 2];
              y = y_POS[mod4 - 2];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod4 - 2], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
          items[mod2 - 1].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod2 - 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      if (d_r == j() && d_r1 == 0) {
        arr[8] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x + 48,
          y: y + 48,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          game_Board[mod3 + 1] = 0
          let b = game_Board[mod3 + 2];
          game_Board[mod3 + 2] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod3 + 2].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod3 + 2].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod3 + 2];
              y = y_POS[mod3 + 2];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod3 + 2], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
          items[mod1 + 1].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod1 + 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      if (d_l == j() && d_l1 == 0) {
        arr[6] = turn;
        let creation = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: x - 48,
          y: y + 48,
          w: 24,
          h: 24,
          radius: 12,
          color: 0x555555,
        });
        creation.addEventListener(hmUI.event.CLICK_DOWN, () => {
          movement_TO();
          game_Board[mod3 - 1] = 0
          let b = game_Board[mod3 - 2];
          game_Board[mod3 - 2] = game_Board[pos];
          game_Board[pos] = b;
          items[pos].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod3 - 2].setProperty(hmUI.prop.MORE, {
            color: colors[t1],
          });
          items[mod3 - 2].addEventListener(hmUI.event.CLICK_DOWN, () => {
            if (turn == l) {
              console.log("pos:" + pos);
              x = x_POS[mod3 - 2];
              y = y_POS[mod3 - 2];
              for (let i = 0; i <= creations.length - 1; i++) {
                creations[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              let round = movement(modif_arr[mod3 - 2], x, y);
              //turn = 2;
            }
          });
          items[pos].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
          items[mod1 - 1].setProperty(hmUI.prop.MORE, {
            color: color_arr[pos],
          });
          items[mod1 - 1].addEventListener(hmUI.event.CLICK_DOWN, () => {
            console.log("pos:" + pos);

            console.log("st:" + game_Board[pos]);
          });
        });
        creations.push(creation);
      }
      console.log("arr: " + u_r1, u_l1, d_r1, d_l1);
      return arr;
    }
    function movement_TO(item, x_a, y_a) {
      for (let i = 0; i <= creations.length - 1; i++) {
        creations[i].setProperty(hmUI.prop.VISIBLE, false);
      }
      if (turn == 1) {
        turn = 2;
      } else {
        turn = 1;
      }
    }
    var bg1 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 328,
      w: 198,
      h: 45,
      radius: 0,
      color: color_arr[pos],
    });
    var bg2 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 198,
      h: 136,
      radius: 0,
      color: color_arr[pos],
    });
    var bg3 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 1,
      h: 368,
      radius: 0,
      color: color_arr[pos],
    });
    var bg4 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 193,
      y: 0,
      w: 1,
      h: 368,
      radius: 0,
      color: color_arr[pos],
    });
    var str = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: "init.png",
    });
    const quit = timer.createTimer(2000, 10, function () {
      str.setProperty(hmUI.prop.VISIBLE, false);
      timer.stopTimer(quit);
    });
  },
});
