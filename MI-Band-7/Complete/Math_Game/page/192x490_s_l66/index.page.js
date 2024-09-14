try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current,
      { px: o } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t)
        ),
        e.app.__globals__);
    try {
      (() => {
        var e = __$$hmAppManager$$__.currentApp,
          t = e.current;
        new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t),
          "drink"
        );
        DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
        t.module = DeviceRuntimeCore.Page({
          init_view() {
            var esterEgg = 0;
            var correct_answer = -1;

            var right_option = -1;
            var selected_option = -2;
            var score = 0;
            var time = 10;
            var timeArch_timer = null;

            var gameover_running = 0;

            let arcSize = 330;
            let colorIndex = 9;
            // let colorArray = [
            //   0xff0000, // Red
            //   0xff4000, // Orange Red
            //   0xff8000, // Dark Orange
            //   0xffff00, // Yellow
            //   0x00ff00, // Green
            //   0x00ffff, // Cyan
            //   0x0000ff, // Blue
            //   0x800080, // Purple
            //   0xff00ff, // Magenta
            //   0xff69b4, // Hot Pink
            // ];

            let colorArray = [
              0xff0000, // Red
              0xff4000, // Orange Red
              0xff8000, // Dark Orange
              0xcccc00, // Dark Yellow
              0x008000, // Dark Green
              0x008080, // Dark Cyan
              0x0000ff, // Blue
              0x800080, // Purple
              0xff00ff, // Magenta
              0xff69b4, // Hot Pink
            ];

            const gamebg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "old.bgmain3.png",
            });

            const option1_bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 11,
              y: 245,
              w: 168,
              h: 55,
              src: "button_normal.png",
            });

            const option1_text = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 11,
              y: 248,
              w: 170,
              h: 50,
              color: 0x000000,
              text_size: 30,
              align_h: hmUI.align.CENTER_H,
              text: "HELLO",
            });

            const option1_btn = hmUI.createWidget(hmUI.widget.IMG, {
              x: 11,
              y: 245,
              w: 168,
              h: 55,
              src: "invisible_button_normal.png",
            });

            option1_btn.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
              if (gameover_running === 0) {
                selected_option = 0;
                if (right_option === 0) {
                  option1_bg.setProperty(hmUI.prop.MORE, {
                    src: "button_pressed_green.png",
                  });
                } else {
                  option1_bg.setProperty(hmUI.prop.MORE, {
                    src: "button_pressed_red.png",
                  });
                }
                checkResult();
              }
            });

            option1_btn.addEventListener(hmUI.event.CLICK_UP, (info) => {
              option1_bg.setProperty(hmUI.prop.MORE, {
                src: "button_normal.png",
              });
            });

            const option2_bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 11,
              y: 320,
              w: 168,
              h: 55,
              src: "button_normal.png",
            });

            const option2_text = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 11,
              y: 324,
              w: 170,
              h: 50,
              color: 0x000000,
              text_size: 30,
              align_h: hmUI.align.CENTER_H,
              text: "HELLO",
            });

            const option2_btn = hmUI.createWidget(hmUI.widget.IMG, {
              x: 11,
              y: 320,
              w: 168,
              h: 55,
              src: "invisible_button_normal.png",
            });

            option2_btn.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
              if (gameover_running === 0) {
                selected_option = 1;
                if (right_option === 1) {
                  option2_bg.setProperty(hmUI.prop.MORE, {
                    src: "button_pressed_green.png",
                  });
                } else {
                  option2_bg.setProperty(hmUI.prop.MORE, {
                    src: "button_pressed_red.png",
                  });
                }
                checkResult();
              }
            });

            option2_btn.addEventListener(hmUI.event.CLICK_UP, (info) => {
              option2_bg.setProperty(hmUI.prop.MORE, {
                src: "button_normal.png",
              });
            });

            const esterEgg_text = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 500,
              y: 100,
              w: 170,
              h: 50,
              color: 0x000000,
              text_size: 15,
              // align_h: hmUI.align.CENTER_H,
              text: "1",
            });

            const eqText = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 11,
              y: 133,
              w: 170,
              h: 50,
              color: 0x000000,
              text_size: 30,
              align_h: hmUI.align.CENTER_H,
              text: "HELLO",
            });

            const scoreObj = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 30,
              y: 47,
              w: 170,
              h: 50,
              color: 0x000000,
              text_size: 25,
              align_h: hmUI.align.CENTER_H,
              text: "" + score,
            });

            const timeText = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 11,
              y: 20,
              w: 170,
              h: 50,
              color: 0x000000,
              text_size: 20,
              align_h: hmUI.align.CENTER_H,
              text: "00:" + time,
            });

            function refreshScore() {
              if (score > 5) {
                gamebg.setProperty(hmUI.prop.MORE, {
                  src: "bgmain3.png",
                });
              }
              scoreObj.setProperty(hmUI.prop.MORE, {
                text: "" + score,
              });
            }

            function checkResult() {
              if (right_option === selected_option) {
                // hmUI.showToast({
                //   text: "Correct",
                // });

                score++;
                refreshScore();
                reroll();
              } else {
                hmUI.showToast({
                  y: 400,
                  text: "Wrong Answer!",
                });

                restart();
              }
            }

            function restart() {
              timer.stopTimer(timeArch_timer);

              console.log("Restarted");

              let timenow = 0;

              eqText.setProperty(hmUI.prop.MORE, {
                text: "Game Over",
              });

              const showScoreTemp = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 207,
                w: 190,
                h: 50,
                color: 0x000000,
                text_size: 25,
                align_h: hmUI.align.CENTER_H,
                text: "Your Score: " + score,
              });

              gameover_running = 1;

              const gameoverTimer = timer.createTimer(0, 100, function () {
                timenow = parseInt(timenow) + parseInt(1);

                // time = 0;

                if (timenow >= 50) {
                  hmUI.deleteWidget(showScoreTemp);
                  score = 0;
                  reroll();
                  gameover_running = 0;
                  timer.stopTimer(gameoverTimer);
                }

                console.log(timenow);
              });
            }

            function reroll() {
              refreshScore();
              console.log("Rerolllleeeddddd");

              timer.stopTimer(timeArch_timer);

              timeArch_timer = timer.createTimer(0, 1000, function (e) {
                time--;

                timeText.setProperty(hmUI.prop.MORE, {
                  text: "00:0" + time,
                });

                if (time <= 0) {
                  timeText.setProperty(hmUI.prop.MORE, {
                    text: "00:00",
                  });
                }

                timeArc.setProperty(hmUI.prop.MORE, {
                  end_angle: arcSize,
                  color: colorArray[colorIndex],
                });
                colorIndex--;

                arcSize -= 12;

                if (arcSize <= 210) {
                  arcSize = 210;
                }

                if (time < 0 && gameover_running === 0) {
                  hmUI.showToast({
                    text: "Time Over!",
                  });
                  restart();
                }
              });
              time = 10;
              arcSize = 330;
              colorIndex = 9;

              // generate a random number within 1 to 100
              let num1 = Math.floor(Math.random() * 100) + 1;
              let num2 = Math.floor(Math.random() * 100) + 1;

              // select a random math operator
              let operators = ["+", "-", "*", "/"];
              let operator =
                operators[Math.floor(Math.random() * operators.length)];

              // generate the equation
              let equation = num1 + " " + operator + " " + num2;

              console.log(equation);

              eqText.setProperty(hmUI.prop.MORE, {
                text: "" + equation,
              });

              let randomOption = Math.floor(Math.random() * 2);
              right_option = randomOption;

              correct_answer = parseInt(right_option) + 1;

              esterEgg_text.setProperty(hmUI.prop.MORE, {
                text: "" + correct_answer,
              });

              console.log(randomOption);

              let answer = eval(equation);
              let wrongAns = answer + Math.floor(Math.random() * 10) + 1;

              let correctOptionText =
                answer % 1 === 0 ? answer.toString() : answer.toFixed(2);
              let wrongOptionText =
                wrongAns % 1 === 0 ? wrongAns.toString() : wrongAns.toFixed(2);

              if (randomOption === 0) {
                option1_text.setProperty(hmUI.prop.MORE, {
                  text: "" + correctOptionText,
                });
                option2_text.setProperty(hmUI.prop.MORE, {
                  text: "" + wrongOptionText,
                });
              } else {
                option2_text.setProperty(hmUI.prop.MORE, {
                  text: "" + correctOptionText,
                });
                option1_text.setProperty(hmUI.prop.MORE, {
                  text: "" + wrongOptionText,
                });
              }
            }

            reroll();

            const timeArc = hmUI.createWidget(hmUI.widget.ARC, {
              x: 12,
              y: 12,
              w: 168,
              h: 168,
              start_angle: 210,
              end_angle: 330,
              line_width: 8,
              color: 0x3db5ff,
            });

            var exit_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 22,
              y: 420,
              w: 150,
              h: 60,
              text: "",
              normal_src: "button2_normal.png",
              press_src: "button2_pressed.png",
              click_func: (function (h) {
                return function () {
                  // go to watchface
                  hmApp.gotoHome();
                };
              })(e),
            });

            var esterEgg_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 0,
              y: 80,
              w: 100,
              h: 60,
              text: "",
              normal_src: "invisible.png",
              press_src: "invisible.png",
              click_func: (function (h) {
                return function () {
                  esterEgg++;

                  if (esterEgg > 5) {
                    hmUI.showToast({
                      text: "Game Hacked!",
                    });
                    esterEgg_text.setProperty(hmUI.prop.MORE, {
                      x: 39,
                    });
                  }
                };
              })(e),
            });
          },
          onInit() {
            console.log("index page.js on init invoke"), this.init_view();
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
            console.log("index page.js on destory invoke");
          },
        });
      })();
    } catch (e) {
      console.log(e);
    }
  })();
} catch (e) {
  console.log(e);
}
