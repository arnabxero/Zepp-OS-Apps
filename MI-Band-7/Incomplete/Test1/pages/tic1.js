Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    var theme = hmFS.SysProGetInt("theme_42");
    var theme2
    if (theme  == 0) {
      theme2 = "";
    } else {
      theme2 = 2;
    }
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 1,
      y: 98,
      w: 190,
      h: 190,
      color: theme  == 0 ? 0x585858 : 0x233648,
      radius: 8,
    });
    var k = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: 0,
        w: 192,
        h: 368,
      }),
      g = {
        move: 0,
        selfield: -1,
        field: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        cell: null,
        player: null,
        cord: [],
        wincomb: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 4, 8],
          [6, 4, 2],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
        ],
        FaC: [],
        sel: function (gfield, xx, yy) {
          if (this.field[gfield] === 0) {
            if (this.selfield !== -1) hmUI.deleteWidget(this.cell);
            this.cell = hmUI.createWidget(hmUI.widget.FILL_RECT, {
              x: xx,
              y: yy,
              w: 58,
              h: 58,
              color: theme  == 0 ? 0xe9e9e9 : 0x0f171f,
              radius: 8,
            });
            this.selfield = gfield;
          }
        },
        loadBackground: function (a) {
          for (var yi = 0; yi < 3; yi++) {
            for (var xi = 0; xi < 3; xi++) {
              let i = yi * 3 + xi;
              let x = 4 + (63 * xi);
              let y = 100 + (63 * yi);
              this.cord.push(String(x) + "/" + String(y));
              a.createWidget(hmUI.widget.BUTTON, {
                x,
                y,
                w: 58,
                h: 58,
                text: "",
                press_color: theme  == 0 ? 0xd3d3d3 : 0x233648,
                normal_color: theme  == 0 ? 0xc3c3c3 : 0x1b2937,
                radius: 8,
                click_func: function () {
                  g.sel(i, x, y);
                },
              });
            }
          }
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 30,
            y: 50,
            w: 100,
            h: 40,
            text: "Wait player:",
            text_size: 18,
            color: 0xffffff,
          });
          this.player = hmUI.createWidget(hmUI.widget.IMG, {
            x: 140,
            y: 55,
            w: 100,
            h: 40,
            src: "ttt/ticm" + theme2 + ".png",
          });
        },
        checkWinner: function () {
          let winnerFound = false;
          for (let w = 0; w < this.wincomb.length; w++) {
            let nc = this.wincomb[w];
            if (
              this.field[nc[0]] === this.field[nc[1]] &&
              this.field[nc[1]] === this.field[nc[2]] &&
              this.field[nc[1]] !== 0
            ) {
              let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                x: 1,
                y: 98,
                w: 190,
                h: 202,
                color: theme  == 0 ? 0x585858 : 0x233648,
                radius: 8,
              });
              let twin = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 68,
                y: 225,
                w: 205,
                h: 70,
                text: "Win",
                text_size: 32,
                color: 0xffffff,
              });
              if (this.field[nc[1]] === 1) {
                let plwin = hmUI.createWidget(hmUI.widget.IMG, {
                  x: 68,
                  y: 170,
                  src: "ttt/tic" + theme2 + ".png",
                });
                this.FaC.push(plwin);
              } else {
                let plwin = hmUI.createWidget(hmUI.widget.IMG, {
                  x: 68,
                  y: 170,
                  src: "ttt/" + theme2 + "tac.png",
                });
                this.FaC.push(plwin);
              }
              this.FaC.push(bg);
              this.FaC.push(twin);
              winnerFound = true;
            }
          }
          if (!winnerFound && !this.field.includes(0)) {
            let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
              x: 1,
              y: 98,
              w: 190,
              h: 202,
              color: theme  == 0 ? 0x585858 : 0x233648,
              radius: 8,
            });
            let twin = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 175,
              w: 192,
              h: 70,
              align_h: hmUI.align.CENTER_H,
              text: "Draw",
              text_size: 32,
              color: 0xffffff,
            });
            this.FaC.push(bg);
            this.FaC.push(twin);
          }
        },
        conf: function () {
          if (this.move < 9 && this.selfield !== -1) {
            if ((this.move % 2) === 0) {
              hmUI.deleteWidget(this.player);
              this.player = hmUI.createWidget(hmUI.widget.IMG, {
                x: 140,
                y: 300,
                src: "ttt/tacm" + theme2 + ".png",
              });
              if (this.field[this.selfield] === 0) {
                this.field[this.selfield] = 1;
                let xxyy = this.cord[this.selfield].split("/");
                let xx = Number(xxyy[0]) + 2;
                let yy = Number(xxyy[1]) + 2;
                let cl = hmUI.createWidget(hmUI.widget.IMG, {
                  x: xx,
                  y: yy,
                  src: "ttt/tic" + theme2 + ".png",
                });
                this.FaC.push(cl);
              }
            } else {
              hmUI.deleteWidget(this.player);
              this.player = hmUI.createWidget(hmUI.widget.IMG, {
                x: 140,
                y: 300,
                w: 100,
                h: 40,
                src: "ttt/ticm" + theme2 + ".png",
              });
              if (this.field[this.selfield] === 0) {
                this.field[this.selfield] = 2;
                let xxyy = this.cord[this.selfield].split("/");
                let xx = Number(xxyy[0]) + 2;
                let yy = Number(xxyy[1]) + 2;
                let cl = hmUI.createWidget(hmUI.widget.IMG, {
                  x: xx,
                  y: yy,
                  src: "ttt/tac" + theme2 + ".png",
                });
                this.FaC.push(cl);
              }
            }
            hmUI.deleteWidget(this.cell);
            this.selfield = -1;
            this.move++;
          }
          g.checkWinner();
        },
        reset: function () {
          for (let i = 0; i < this.FaC.length; i++) {
            hmUI.deleteWidget(this.FaC[i]);
          }
          this.FaC = [];
          hmUI.deleteWidget(this.player);
          this.player = hmUI.createWidget(hmUI.widget.IMG, {
            x: 140,
            y: 300,
            w: 100,
            h: 40,
            src: "ttt/ticm" + theme2 + ".png",
          });
          this.field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.move = 0;
        },
      };
    g.loadBackground(k);
    k.createWidget(hmUI.widget.BUTTON, {
      x: 5,
      y: 305,
      w: 85,
      h: 45,
      press_color: "0x0986d4",
      normal_color: "0x0d6eff",
      radius: 30,
      text: "Confirm",
      text_size: 20,
      color: "0xffffff",
      click_func: function () {
        g.conf();
      },
    });
    k.createWidget(hmUI.widget.BUTTON, {
      x: 104,
      y: 305,
      w: 85,
      h: 45,
      press_color: "0x707070",
      normal_color: "0x5c5c5c",
      radius: 25,
      text: "Restart",
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
});
