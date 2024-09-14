try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
      a = e.current;
    new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(e, a),
      "drink"
    );
    DeviceRuntimeCore.HmLogger.getLogger("xiping");
    a.module = DeviceRuntimeCore.Page({
      init_view() {
        hmUI.setLayerScrolling(!1);

        var vari = hmFS.SysProGetInt("game_var");
        if (vari == 1) {
          vari = hmFS.SysProGetInt("game_var");
        } else {
          hmFS.SysProSetInt("game_var", 2);
          vari = hmFS.SysProGetInt("game_var");
        }

        var StartSpeedInt = 30 * 2.15;
        var MainTimer = "";
        var startDis = 0;
        var infoNum = 0;
        var angle = 0;
        var infoHeig = 0;
        var num = 0;

        const language = hmSetting.getLanguage();
        var info_trans = "";
        var retry_trans = "";
        var gameover_trans = "";
        var highest_trans = "";
        switch (language) {
          case 0:
            info_trans = "关于";
            retry_trans = "重试";
            gameover_trans = "游戏结束";
            highest_trans = "最高:";
            break;
          case 1:
            info_trans = "關於";
            retry_trans = "重試";
            gameover_trans = "遊戲結束";
            highest_trans = "最高:";
            break;
          case 2:
            info_trans = "About";
            retry_trans = "Retry";
            gameover_trans = "Game Over!";
            highest_trans = "Highest:";
            break;
        }

        function startMain(b) {
          if (MainTimer) {
            timer.stopTimer(MainTimer);
          }
          var c = 0;
          if (b) {
            c = b;
          }
          MainTimer = timer.createTimer(
            c,
            StartSpeedInt,
            function (a) {
              StartUpdate();
            },
            {}
          );
        }

        function stopMain() {
          if (MainTimer) {
            timer.stopTimer(MainTimer);
          }
          MainTimer = "";
        }
        function StartUpdate() {
          landMove();
          infoMove();
          birdinfoMove();
        }

        let txtBg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
          color: 0xffffff,
        });

        txtBg.setProperty(hmUI.prop.VISIBLE, false);

        let txtGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
        });

        let startGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
        });

        const backg = startGroup.createWidget(hmUI.widget.IMG, {
          x: -10 - 40,
          y: 0,
          src: "bird/bg_day.png",
        });

        const topshad = startGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: "bird/35.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const landbg = startGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 450,
          src: "bird/land.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        function landMove() {
          startDis -= 1 * 2.5;
          if (startDis <= -123) {
            startDis = 0;
          }
          landbg.setProperty(hmUI.prop.MORE, { x: startDis });
        }

        const bottomshad = startGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 415,
          src: "bird/36.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const info = startGroup.createWidget(hmUI.widget.IMG, {
          x: 16,
          y: infoHeig + 135,
          src: "name.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const infoButton = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 46+15,
          y: 20,
          w: 70,
          h: 20,
          press_color: 0x4f4f54,
          normal_color: 0x1e1e20,
          radius: 36,
          text: info_trans,
          text_size: 15,
          color: 0xffffff,
          click_func: page2,
        });

        function page2() {
          hmApp.gotoPage({
            url: "page/192x490_s_l66/index.page2",
            param: "...",
          });
        }

        const startButton = startGroup.createWidget(hmUI.widget.IMG, {
          x: 46,
          y: 350,
          src: "playbtn.png",
        });

        startButton.addEventListener(hmUI.event.CLICK_DOWN, function () {
          startGame();
        });

        function infoMove() {
          if (infoNum >= 0) {
            infoHeig += 1 * 1.25;
            infoNum = infoNum - 1;
          } else if (infoNum >= -8) {
            infoHeig -= 1 * 1.25;
            infoNum = infoNum - 1;
          } else {
            infoNum = 7;
          }

          info.setProperty(hmUI.prop.MORE, { x: 16, y: 135 + infoHeig });

          infobird.setProperty(hmUI.prop.MORE, { x: 75, y: 190 + infoHeig });
        }

        function birdinfoMove() {
          switch (infoNum) {
            case -8:
            case -7:
            case -6:
            case -5:
              num = 0;
              break;
            case -4:
            case -3:
            case -2:
            case -1:
              num = 1;
              break;
            case 0:
            case 1:
            case 2:
            case 3:
              num = 2;
              break;
            case 4:
            case 5:
            case 6:
            case 7:
              num = 3;
              break;
          }

          infobird.setProperty(hmUI.prop.MORE, {
            src: "bird/bird0_" + num + ".png",
          });
        }
        const infobird = startGroup.createWidget(hmUI.widget.IMG, {
          x: 75,
          y: infoHeig + 190,
          src: "bird/bird0_" + num + ".png",
        });

        txtGroup.setProperty(hmUI.prop.VISIBLE, true);

        switchUI(true);

        function switchUI(b) {
          startGroup.setProperty(hmUI.prop.VISIBLE, b);

          txtGroup.setProperty(hmUI.prop.VISIBLE, !b);

          if (b) {
            stopTimer();
            startMain();
          } else {
            startTimer();
            stopMain();
          }
        }
        var vari = hmFS.SysProGetInt("game_var");
        let check = true;
        var checkint = 2;
        var num0 = 0;
        var num1 = 0;
        var num2 = 0;
        var num3 = 0;
        var num4 = 0;

        if (vari == 1) {
          num0 = 10;
          num1 = 5;
          num2 = 4;
          num3 = 4.5;
          num4 = 3.75;
          num5 = -265;
          num6 = -45;
        } else if (vari == 2) {
          num0 = 5;
          num1 = 2.5;
          num2 = 0;
          num3 = 2.5;
          num4 = 2.5;
          num5 = -275;
          num6 = -40;
        }
        var speedInterVal = 30 * 2.15;
        var timerId = "";
        var bgDis = 0;

        function startTimer(b) {
          if (timerId) {
            timer.stopTimer(timerId);
          }
          var c = 0;
          if (b) {
            c = b;
          }
          timerId = timer.createTimer(
            c,
            speedInterVal,
            function (a) {
              onUpdate();
            },
            {}
          );
        }

        function stopTimer() {
          if (timerId) {
            timer.stopTimer(timerId);
          }
          timerId = "";
        }
        function startGame() {
          switchUI(false);
        }

        txtGroup.createWidget(hmUI.widget.IMG, {
          x: -10 - 40,
          y: 0,
          src: "bird/bg_day.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        function onUpdate() {
          bgMove();
          pipeMove();
          birdMove();
          birdAni();
        }

        function rand(a, b) {
          return Math.round(Math.random() * (b - a) + a);
        }
        var bird = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 30,
          y: birdDis,
          center_x: 30 + 24,
          center_y: birdDis + 24,
        });
        var liDis = 250;
        var piHeig = 1;
        var count = 0;
        var pipNum = 10;
        let pipeheight = -123;
        var random = rand(0, 1000);
        var chance = 10;

        var topli = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 192,
          y: pipeheight + piHeig,
          src: "bird/pipe_down.png",
        });
        var bottomli = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 192,
          y: pipeheight + piHeig + 320 + 120,
          src: "bird/pipe_up.png",
        });
        var score = 0;
        const SCORE_KEY = "BIRD_SCORE";
        const HARD_SCORE_KEY = "HARD_BIRD_SCORE";
        var maxScore = hmFS.SysProGetInt64(SCORE_KEY);
        var maxScore2 = hmFS.SysProGetInt64(HARD_SCORE_KEY);
        if (!maxScore) {
          maxScore = 0;
        }
        if (!maxScore2) {
          maxScore2 = 0;
        }
        const bg = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 450,
          src: "bird/land.png",
        });
        function bgMove() {
          bgDis -= 1 * num0;
          if (bgDis <= -123) {
            bgDis = 0;
          }
          bg.setProperty(hmUI.prop.MORE, { x: bgDis });
        }
        function pipeMove() {
          if (pipNum >= 0) {
            liDis -= 2 * num1;
            piHeig += 2 * num2;
            pipNum = pipNum - 1;
          } else if (pipNum >= -10) {
            liDis -= 2 * num1;
            piHeig -= 2 * num2;
            pipNum = pipNum - 1;
          } else {
            liDis -= 2 * num1;
            piHeig += 2 * num2;
            pipNum = 9;
          }

          topli.setProperty(hmUI.prop.MORE, {
            x: liDis,
            y: pipeheight + piHeig,
          });
          bottomli.setProperty(hmUI.prop.MORE, {
            x: liDis,
            y: pipeheight + piHeig + 320 + 120,
          });

          if (liDis <= -50) {
            count += 1;
            liDis = 192;
            pipeheight = rand(num5, num6);
            random = rand(0, 1000);
            chance = chance + 10;
            topli.setProperty(hmUI.prop.MORE, {
              x: liDis,
              y: pipeheight + piHeig,
            });

            bottomli.setProperty(hmUI.prop.MORE, {
              x: liDis,
              y: pipeheight + piHeig + 320 + 120,
            });
            setScore(count);
            if ((vari == 2) & (random <= chance)) {
              num2 = 3;
            } else if ((vari == 2) & (random >= chance)) {
              num2 = 0;
            }
          }
        }
        var speed = 0;
        var birdDis = 200;
        var isDown = true;
        var angle = 0;
        var a = 10 * num3;
        var t = 5 * num3;
        var t2 = 0;
        var t4 = 0;
        function birdMove() {
          if (isDown) {
            t += 1 * num3;
            speed += (t * a) / 100;
            angle += (t * a) / 500;
          } else {
            t = 5 * num3;
            t4 += 0.3 * num4;
            if (angle >= 15) {
              angle = 0;
            }
            speed -= ((4 - t4) * a) / 5;
            angle -= (t4 * a) / 60;
            if (t4 >= 4) {
              t4 = 0;
              isDown = true;
            }
          }
          let birdX = birdDis + speed;
          birdX = birdX.toFixed(1);
          let topStatus =
            -5 <= liDis &&
            liDis <= 62 &&
            birdX <= pipeheight + piHeig + 320 - 10;
          let bottomStatus =
            -5 <= liDis &&
            liDis <= 62 &&
            birdX >= pipeheight + piHeig + 440 - 33;
          if (
            topStatus ||
            bottomStatus ||
            birdX <= 0 ||
            birdX >= 490 - 48 - 40
          ) {
            hmUI.showToast({
              text: gameover_trans,
            });
            stopTimer();
            maxScoreWd.setProperty(hmUI.prop.VISIBLE, true);

            play.setProperty(hmUI.prop.VISIBLE, false);

            hardMaxScoreWd.setProperty(hmUI.prop.VISIBLE, true);
            retryButton.setProperty(hmUI.prop.VISIBLE, true);
          }
          bird.setProperty(hmUI.prop.MORE, {
            y: birdX,
            center_y: birdX + 24,
          });
        }
        txtGroup.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
          isDown = false;
        });
        function birdAni() {
          t2 += 0.1 * num3;
          var a = parseInt(t2) % 3;
          if (-5 >= angle) {
            bird.setProperty(hmUI.prop.MORE, {
              src: "bird/bird1_" + a + ".png",
            });
          } else if (angle >= 5) {
            bird.setProperty(hmUI.prop.MORE, {
              src: "bird/bird2_" + a + ".png",
            });
          } else {
            bird.setProperty(hmUI.prop.MORE, {
              src: "bird/bird0_" + a + ".png",
            });
          }
        }
        const fontRootPath = "bird/font_";
        const fontArray = [
          fontRootPath + "0.png",
          fontRootPath + "1.png",
          fontRootPath + "2.png",
          fontRootPath + "3.png",
          fontRootPath + "4.png",
          fontRootPath + "5.png",
          fontRootPath + "6.png",
          fontRootPath + "7.png",
          fontRootPath + "8.png",
          fontRootPath + "9.png",
        ];
        const scoretext = txtGroup.createWidget(hmUI.widget.TEXT_IMG, {
          x: 0,
          y: 53,
          w: 192,
          font_array: fontArray,
          h_space: 1,
          align_h: hmUI.align.CENTER_H,
          text: "0",
        });
        const hardMaxScoreWd = txtGroup.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: 290,
          w: 192,
          h: 60,
          color: 0xdb0404,
          text_size: 25,
          align_h: hmUI.align.CENTER_H,
          text: highest_trans + maxScore2,
        });
        const maxScoreWd = txtGroup.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: 340,
          w: 192,
          h: 60,
          color: 0x000000,
          text_size: 25,
          align_h: hmUI.align.CENTER_H,
          text: highest_trans + maxScore,
        });
        function setScore(s) {
          score = s;
          let score2 = score.toString();
          scoretext.setProperty(hmUI.prop.TEXT, score2);
          if ((vari == 2) & (score > maxScore)) {
            maxScore = score;
            hmFS.SysProSetInt64(SCORE_KEY, maxScore);
          }

          if ((vari == 1) & (score > maxScore2)) {
            maxScore2 = score;
            hmFS.SysProSetInt64(HARD_SCORE_KEY, maxScore2);
          }
          maxScoreWd.setProperty(hmUI.prop.MORE, {
            text: highest_trans + maxScore,
          });

          hardMaxScoreWd.setProperty(hmUI.prop.MORE, {
            text: highest_trans + maxScore2,
          });
        }
        function initGame() {
          startTimer();
        }

        txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: "bird/35.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });
        txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 415,
          src: "bird/36.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const play = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 15,
          y: 55,
          src: "bird/play_" + check + ".png",
        });

        play.addEventListener(hmUI.event.CLICK_DOWN, function () {
          test();
        });

        function test() {
          if (checkint == 2) {
            check = false;
            checkint = checkint - 1;
            stopTimer();
            play.setProperty(hmUI.prop.MORE, {
              src: "bird/play_" + check + ".png",
            });
          } else if (checkint == 1) {
            check = true;
            checkint = checkint + 1;
            startTimer();
            play.setProperty(hmUI.prop.MORE, {
              src: "bird/play_" + check + ".png",
            });
          }
        }
        const retryButton = txtGroup.createWidget(hmUI.widget.BUTTON, {
          x: 46+25,
          y: 400,
          w: 50,
          h: 30,
          press_color: 0x034880,
          normal_color: 0x0067ff,
          radius: 36,
          text: retry_trans,
          text_size: 15,
          color: 0xffffff,
          click_func: retryFun,
        });

        function retryFun() {
          liDis = 250;
          count = 0;
          speed = 0;
          speedInterVal = 30 * 2.15;
          birdDis = 200;
          isDown = true;
          angle = 0;
          t = 5;
          t2 = 0;
          t4 = 0;
          bgDis = 0;
          piHeig = 0;
          pipNum = 0;
          random = rand(0, 1000);
          chance = 5;
          pipeheight = -123;
          check = true;
          checkint = 2;

          topli.setProperty(hmUI.prop.MORE, { x: 192, y: pipeheight + piHeig });
          bottomli.setProperty(hmUI.prop.MORE, {
            x: 192,
            y: pipeheight + piHeig + 320 + 120,
          });

          scoretext.setProperty(hmUI.prop.TEXT, "0");
          maxScoreWd.setProperty(hmUI.prop.VISIBLE, false);

          hardMaxScoreWd.setProperty(hmUI.prop.VISIBLE, false);

          play.setProperty(hmUI.prop.VISIBLE, true);
          retryButton.setProperty(hmUI.prop.VISIBLE, false);

          initGame();
        }
        maxScoreWd.setProperty(hmUI.prop.VISIBLE, false);

        hardMaxScoreWd.setProperty(hmUI.prop.VISIBLE, false);
        retryButton.setProperty(hmUI.prop.VISIBLE, false);

        play.setProperty(hmUI.prop.VISIBLE, true);
        txtGroup.setProperty(hmUI.prop.VISIBLE, false);
      },

      onInit() {
        console.log("index page.js on init invoke");
        this.init_view();
      },
      onReady() {
        console.log("index page.js on ready invoke");
      },
      onShow() {
        console.log("index page.js on show invoke");
      },
      onHide() {
        console.log("index page.js on hide invoke");
      },
      onDestory() {
        console.log("index page.js on destory invoke"),
          timer.stopTimer(clock_timer);
      },
    });
  })();
} catch (e) {
  console.log(e);
}
