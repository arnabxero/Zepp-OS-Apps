Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    var left = 81;// this was error, know it is fixed :)
    var colored = [];
    const colors = [
      0xff0000,
      0x00ff00,
      0x0000ff,
      0xffff00,
      0xff0000,
      0x00ff00,
      0x0000ff,
      0xffff00,
    ];
    var modif;
    var press_COLORS = [];
    for (let i = 0; i <= 3; i++) {
      let press_C = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 27 + (35 * i),
        y: 0,
        w: 35,
        h: 35,
        color: colors[i],
      });
      press_COLORS.push(press_C);
    }
    for (let i = 0; i <= 3; i++) {
      let press_C = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 27 + (35 * i),
        y: 333,
        w: 35,
        h: 35,
        color: colors[i],
      });
      press_COLORS.push(press_C);
    }
    var items = [];
    var turn = 1;
    var board = [
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
    ];
    var arrow = hmUI.createWidget(hmUI.widget.IMG, {
      x: 77,
      y: 40,
      src: `arrow_${turn}.png`,
    });
    var add = hmUI.createWidget(hmUI.widget.IMG, {
      x: 77,
      y: 159,
      src: ``,
    });
    function no_more() {
      console.log("left:" + left);
      if (left <= 0) {
        return 1;
      } else {
        return 2;
      }
    }
    function game_finish() {
      let load;
      hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 0,
        y: 0,
        w: 198,
        h: 368,
        color: 0x000000,
      });
      if (score_1 > score_2) {
        load = "lw.png";
      } else if (score_2 > score_1) {
        load = "wl.png";
      } else {
        load = "dd.png";
      }
      let fm_MENU = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: load,
      });
    }
    for (let i = 0; i <= 3; i++) {
      press_COLORS[i].addEventListener(hmUI.event.CLICK_DOWN, () => {
        if (modif != undefined) {
          if (turn == 1 && Test(modif) != modif) {
            items[modif].setProperty(hmUI.prop.MORE, {
              color: colors[i],
              line_width: 12,
            });
            items[modif].removeEventListener(hmUI.event.CLICK_DOWN);
            board[modif] = String(colors[i]);
            grey()
            if (Test() == 1) {
              add_Score_2();
            } else {
              add_Score();
            }
            left--;
            turn = 2;
            colored.push(modif);
            if (no_more() == 1) {
              game_finish();
            }
            arrow.setProperty(hmUI.prop.MORE, {
              y: 288,
              src: `arrow_${turn}.png`,
            });
          }
        }
      });
    }
    for (let i = 0; i <= 3; i++) {
      press_COLORS[i + 4].addEventListener(hmUI.event.CLICK_DOWN, () => {
        if (modif != undefined) {
          if (turn == 2 && Test(modif) != modif) {
            items[modif].setProperty(hmUI.prop.MORE, {
              color: colors[i],
              line_width: 12,
            });
            items[modif].removeEventListener(hmUI.event.CLICK_DOWN);
            colored.push(modif);
            board[modif] = String(colors[i]);
            grey()
            if (Test() == 1) {
              add_Score_2();
            } else {
              add_Score();
            }
            left--;
            turn = 1;
            if (no_more() == 1) {
              game_finish();
            }
            arrow.setProperty(hmUI.prop.MORE, {
              y: 40,
              src: `arrow_${turn}.png`,
            });
          }
        }
      });
    }
    var score_1 = 0;
    var score_2 = 0;
    var supreme1 = 0;
    var supreme2 = 0;
    var supreme3 = 0;
    var supreme4 = 0;
    function add_Score() {
      if (turn == 1) {
        let toadd = supreme1 + supreme2 + supreme3 + supreme4;
        score_1 += toadd;
        add.setProperty(hmUI.prop.MORE, {
          src: `+${toadd}_2.png`,
        });
        let finish = timer.createTimer(500, 500, function () {
          add.setProperty(hmUI.prop.MORE, {
            src: ``,
          });
          timer.stopTimer(finish);
        });
      } else {
        let toadd = supreme1 + supreme2 + supreme3 + supreme4;
        score_2 += toadd;
        add.setProperty(hmUI.prop.MORE, {
          src: `+${toadd}_1.png`,
        });
        let finish = timer.createTimer(500, 500, function () {
          add.setProperty(hmUI.prop.MORE, {
            src: ``,
          });
          timer.stopTimer(finish);
        });
      }
    }
    function y_NOT1() {
if(board[modif +1])
        return 1;

    }
    var all_FILL = 0;
    var plus4_arr = [];
    function can_PUT() {
      if (
        board[modif + 9] == 16711680 || board[modif - 9] == 16711680 ||
        board[modif + 1] == 16711680 ||
        board[modif - 1] == 16711680 
      ) {
        press_COLORS[0].setProperty(hmUI.prop.VISIBLE, false);
        press_COLORS[4].setProperty(hmUI.prop.VISIBLE, false);
        supreme1 = 1;
        if (all_FILL < 5) all_FILL++;
      } else {
        press_COLORS[0].setProperty(hmUI.prop.VISIBLE, true);
        press_COLORS[4].setProperty(hmUI.prop.VISIBLE, true);
        supreme1 = 0;
        if (all_FILL > 0) all_FILL--;
      }
      if (
        board[modif + 9] == 65280 || board[modif - 9] == 65280 ||
        board[modif + 1] == 65280 || board[modif - 1] == 65280 
      ) {
        press_COLORS[1].setProperty(hmUI.prop.VISIBLE, false);
        press_COLORS[5].setProperty(hmUI.prop.VISIBLE, false);
        supreme2 = 1;
        if (all_FILL < 5) all_FILL++;
      } else {
        press_COLORS[1].setProperty(hmUI.prop.VISIBLE, true);
        press_COLORS[5].setProperty(hmUI.prop.VISIBLE, true);
        supreme2 = 0;
        if (all_FILL > 0) all_FILL--;
      }
      if (
        board[modif + 9] == 255 || board[modif - 9] == 255 ||
        board[modif + 1] == 255 || board[modif - 1] == 255 
      ) {
        press_COLORS[2].setProperty(hmUI.prop.VISIBLE, false);
        press_COLORS[6].setProperty(hmUI.prop.VISIBLE, false);
        supreme3 = 1;
        if (all_FILL < 5) all_FILL++;
      } else {
        press_COLORS[2].setProperty(hmUI.prop.VISIBLE, true);
        press_COLORS[6].setProperty(hmUI.prop.VISIBLE, true);
        supreme3 = 0;
        if (all_FILL > 0) all_FILL--;
      }
      if (
        board[modif + 9] == 16776960 || board[modif - 9] == 16776960 ||
        board[modif + 1] == 16776960 ||
        board[modif - 1] == 16776960
      ) {
        press_COLORS[3].setProperty(hmUI.prop.VISIBLE, false);
        press_COLORS[7].setProperty(hmUI.prop.VISIBLE, false);
        if (all_FILL < 5) all_FILL++;
        supreme4 = 1;
      } else {
        press_COLORS[3].setProperty(hmUI.prop.VISIBLE, true);
        press_COLORS[7].setProperty(hmUI.prop.VISIBLE, true);
        if (all_FILL > 0) all_FILL--;
        supreme4 = 0;
      }
    }
    function rev(cad) {
      let char = "";
      for (var i = cad.length - 1; i >= 0; i--) {
        char += cad[i];
      }
      return char;
    }
    var scores = [];
    var t_Scores = rev(String(score_1));
    for (let i = 0; i <= t_Scores.length; i++) {
      let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
        x: 179 - 14 * i,
        y: 290,
        src: "white2/" + t_Scores.substring(i, i + 1) + ".png",
      });
      scores.push(score_TEXT);
    }
    const score_TIMER = timer.createTimer(500, 500, function () {
      let t_Scores = rev(String(score_1));
      for (let i = 0; i <= t_Scores.length; i++) {
        try {
          scores[i].setProperty(hmUI.prop.MORE, {
            src: "white2/" + t_Scores.substring(i, i + 1) + ".png",
          });
        } catch (e) {
          let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
            x: 179 - 14 * i,
            y: 290,
            src: "white2/" + t_Scores.substring(i, i + 1) + ".png",
          });
          scores.push(score_TEXT);
        }
      }
    });
    var scores_2 = [];
    var t_Scores_2 = String(score_2);
    for (let i = 0; i <= t_Scores_2.length; i++) {
      let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
        x: 5 + 14 * i,
        y: 43,
        src: "white/" + t_Scores_2.substring(i, i + 1) + ".png",
      });
      scores_2.push(score_TEXT);
    }
    const score_TIMER_2 = timer.createTimer(500, 500, function () {
      console.log("modif:" + modif);
      let t_Scores_2 = String(score_2);
      for (let i = 0; i <= t_Scores_2.length; i++) {
        try {
          scores_2[i].setProperty(hmUI.prop.MORE, {
            src: "white/" + t_Scores_2.substring(i, i + 1) + ".png",
          });
        } catch (e) {
          let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
            x: 5 + 14 * i,
            y: 43,
            src: "white/" + t_Scores_2.substring(i, i + 1) + ".png",
          });
          scores_2.push(score_TEXT);
        }
      }
    });
    var scores_3 = [];
    var t_Scores_3 = rev(String(score_2));
    for (let i = 0; i <= t_Scores.length; i++) {
      let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
        x: 5 + 14 * i,
        y: 290,
        src: "grey2/" + t_Scores_3.substring(i, i + 1) + ".png",
      });
      scores_3.push(score_TEXT);
    }
    const score_TIMER_3 = timer.createTimer(500, 500, function () {
      let t_Scores_3 = rev(String(score_2));
      for (let i = 0; i <= t_Scores_3.length; i++) {
        try {
          scores_3[i].setProperty(hmUI.prop.MORE, {
            src: "grey2/" + t_Scores_3.substring(i, i + 1) + ".png",
          });
        } catch (e) {
          let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
            x: 5 + 14 * i,
            y: 290,
            src: "grey2/" + t_Scores_3.substring(i, i + 1) + ".png",
          });
          scores_3.push(score_TEXT);
        }
      }
    });
    var scores_4 = [];
    var t_Scores_4 = String(score_1);
    for (let i = 0; i <= t_Scores_4.length; i++) {
      let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
        x: 179 - 14 * i,
        y: 43,
        src: "grey/" + t_Scores_4.substring(i, i + 1) + ".png",
      });
      scores_4.push(score_TEXT);
    }
    const score_TIMER_4 = timer.createTimer(500, 500, function () {
      console.log("modif:" + modif);
      let t_Scores_4 = String(score_1);
      for (let i = 0; i <= t_Scores_4.length; i++) {
        try {
          scores_4[i].setProperty(hmUI.prop.MORE, {
            src: "grey/" + t_Scores_4.substring(i, i + 1) + ".png",
          });
        } catch (e) {
          let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
            x: 179 - 14 * i,
            y: 43,
            src: "grey/" + t_Scores_4.substring(i, i + 1) + ".png",
          });
          scores_4.push(score_TEXT);
        }
      }
    });
    function all_DIF() {
      let up = board[modif + 9];
      let down = board[modif - 9];
      let right = board[modif + 1];
      let left = board[modif - 1];
      for (let i = 0; i < 4; i++) {
        if (
          up != down && up != right && up != left && down != right &&
          down != left && right != left && up != 0 && down != 0 && left != 0 &&
          right != 0
        ) {
          return 1;
        } else {
          return 2;
        }
      }
    }
    function grey() {
      let up = modif + 9
      let down = modif - 9
      let right = modif + 1
      let left = modif - 1
      test_G1(up)
      test_G2(down)
      test_G3(right)
      test_G4(left)
    }
    function test_G1(side){
      let up = board[side + 9];
      let down = board[side - 9];
      let right = board[side + 1];
      let left = board[side - 1];
      if (
        up != down && up != right && up != left && down != right &&
        down != left && right != left && up != 0 && down != 0 && left != 0 &&
        right != 0
      ) {
        items[side].setProperty(hmUI.prop.MORE, {
          color: 0x555555,
          line_width: 12,
        });
        add.setProperty(hmUI.prop.MORE, {
          src: `+4_${turn}.png`,
        });
        let finish = timer.createTimer(500, 500, function () {
          add.setProperty(hmUI.prop.MORE, {
            src: ``,
          });
          timer.stopTimer(finish);
        });
        if (turn == 1 && Test_2(modif) == 1) {
          score_1 += 4;
          left--;
        } else if (Test_2(modif) == 1) {
          score_2 += 4;
          left--;
        }
        plus4_arr.push(side);
        colored.push(side);
      }
    }
    function test_G2(side){
      let up = board[side + 9];
      let down = board[side - 9];
      let right = board[side + 1];
      let left = board[side - 1];
      if (
        up != down && up != right && up != left && down != right &&
        down != left && right != left && up != 0 && down != 0 && left != 0 &&
        right != 0
      ) {
        items[side].setProperty(hmUI.prop.MORE, {
          color: 0x555555,
          line_width: 12,
        });
        add.setProperty(hmUI.prop.MORE, {
          src: `+4_${turn}.png`,
        });
        let finish = timer.createTimer(500, 500, function () {
          add.setProperty(hmUI.prop.MORE, {
            src: ``,
          });
          timer.stopTimer(finish);
        });
        if (turn == 1 && Test_2(modif) == 1) {
          score_1 += 4;
          left--;
        } else if (Test_2(modif) == 1) {
          score_2 += 4;
          left--;
        }
        plus4_arr.push(side);
        colored.push(side);
      }
    }
    function test_G3(side){
      let up = board[side + 9];
      let down = board[side - 9];
      let right = board[side + 1];
      let left = board[side - 1];
      if (
        up != down && up != right && up != left && down != right &&
        down != left && right != left && up != 0 && down != 0 && left != 0 &&
        right != 0
      ) {
        items[side].setProperty(hmUI.prop.MORE, {
          color: 0x555555,
          line_width: 12,
        });
        add.setProperty(hmUI.prop.MORE, {
          src: `+4_${turn}.png`,
        });
        let finish = timer.createTimer(500, 500, function () {
          add.setProperty(hmUI.prop.MORE, {
            src: ``,
          });
          timer.stopTimer(finish);
        });
        if (turn == 1 && Test_2(modif) == 1) {
          score_1 += 4;
          left--;
        } else if (Test_2(modif) == 1) {
          score_2 += 4;
          left--;
        }
        plus4_arr.push(side);
        colored.push(side);
      }
    }
    function test_G4(side){
      let up = board[side + 9];
      let down = board[side - 9];
      let right = board[side + 1];
      let left = board[side - 1];
      if (
        up != down && up != right && up != left && down != right &&
        down != left && right != left && up != 0 && down != 0 && left != 0 &&
        right != 0
      ) {
        items[side].setProperty(hmUI.prop.MORE, {
          color: 0x555555,
          line_width: 12,
        });
        add.setProperty(hmUI.prop.MORE, {
          src: `+4_${turn}.png`,
        });
        let finish = timer.createTimer(500, 500, function () {
          add.setProperty(hmUI.prop.MORE, {
            src: ``,
          });
          timer.stopTimer(finish);
        });
        if (turn == 1 && Test_2(modif) == 1) {
          score_1 += 4;
          left--;
        } else if (Test_2(modif) == 1) {
          score_2 += 4;
          left--;
        }
        plus4_arr.push(side);
        colored.push(side);
      }
    }
    const visible_TM = timer.createTimer(10, 10, function () {
      can_PUT();
    });
    for (let i = 0; i < 10; i++) {
      let item_1 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 88,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_2 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 109,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_3 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 130,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_4 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 151,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_5 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 172,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_6 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 193,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_7 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 214,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_8 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 235,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      let item_9 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 2 + (21 * i),
        y: 256,
        w: 21,
        h: 21,
        radius: 0,
        line_width: 3,
        color: 0xffffff,
      });
      items.push(item_1)
      items.push(item_2)
      items.push(item_3)
      items.push(item_4)
      items.push(item_5)
      items.push(item_6)
      items.push(item_7)
      items.push(item_8)
      items.push(item_9)
    }
    function Test(src) {
      if (colored.includes(src)) {
        return src;
      } else {
        return src - 1;
      }
    }
    function Test_2(src) {
      if (plus4_arr.includes(src)) {
        return 2;
      } else {
        return 1;
      }
    }
    var str = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      src: "init.png",
    });
    const quit = timer.createTimer(2000, 10, function () {
      str.setProperty(hmUI.prop.VISIBLE, false);
      timer.stopTimer(quit);
    });
    for (let i = 0; i <= items.length - 1; i++) {
      items[i].addEventListener(hmUI.event.CLICK_DOWN, () => {
        let to_PUT = i;
        modif = i;
        for (let i = 0; i <= items.length - 1; i++) {
          if (i != Test(i)) {
            if (i != to_PUT) {
              items[i].setProperty(hmUI.prop.MORE, {
                color: 0xffffff,
              });
            } else {
              items[i].setProperty(hmUI.prop.MORE, {
                color: 0x0b0bfb,
              });
            }
          }
        }
      });
    }
  },
});
