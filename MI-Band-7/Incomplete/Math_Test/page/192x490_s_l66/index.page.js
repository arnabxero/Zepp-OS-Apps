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
            hmUI.setLayerScrolling(false);

            const allYAdd = -80;

            const gamebg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "bg3.png",
            });

            const timeArc = hmUI.createWidget(hmUI.widget.ARC, {
              x: 12,
              y: 12,
              w: 168,
              h: 168,
              start_angle: 210,
              end_angle: 330,
              line_width: 6,
              color: 0x3db5ff,
            });

            const eqText = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 133 + allYAdd,
              w: 192,
              text: "",
              text_size: 30,
              color: 0x000000,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
            });

            const option1 = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 250 + allYAdd,
              w: 192,
              text: "",
              text_size: 30,
              color: 0x000000,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
            });

            option1.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
              console.log("clicked option 1");
              checkResult(0);
            });

            const option2 = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 327 + allYAdd,
              w: 192,
              text: "",
              text_size: 30,
              color: 0x000000,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
            });

            option2.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
              console.log("clicked option 1");
              checkResult(1);
            });

            const timerObj = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 20 + allYAdd,
              w: 192,
              text: "10",
              text_size: 20,
              color: 0x000000,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
            });

            ///////////////////////////
            //////////////////////////

            let globalCorrectAnswer = 3;

            let time = 10;
            let arcSize = 330;
            let colorIndex = 9;
            let colorArray = [
              0xff0000, // Red
              0xff4000, // Orange Red
              0xff8000, // Dark Orange
              0xffff00, // Yellow
              0x00ff00, // Green
              0x00ffff, // Cyan
              0x0000ff, // Blue
              0x800080, // Purple
              0xff00ff, // Magenta
              0xff69b4, // Hot Pink
            ];

            let score = 0;
            /////////////////////////////

            let globalTimer = timer.createTimer(0, 1000, function (e) {
              timerObj.setProperty(hmUI.prop.MORE, {
                text: time,
              });
              time--;

              timeArc.setProperty(hmUI.prop.MORE, {
                end_angle: arcSize,
                color: colorArray[colorIndex],
              });
              colorIndex--;

              arcSize -= 12;

              if (time < 0) {
                hmUI.showToast({
                  text: "You Lost!",
                });
                restartGame();
              }
            });

            function restartGame() {
              // hmApp.gotoPage({
              //   url: "page/192x490_s_l66/maingame",
              // });
            }

            function resetTime() {
              time = 10;
              arcSize = 330;
              colorIndex = 10;
            }

            function gameOver() {
              hmUI.showToast("");
            }

            function generateRandomEquations() {
              // generate a random number within 1 to 100
              let num1 = Math.floor(Math.random() * 100) + 1;
              let num2 = Math.floor(Math.random() * 100) + 1;

              // select a random math operator
              let operators = ["+", "-", "*", "/", "%"];
              let operator =
                operators[Math.floor(Math.random() * operators.length)];

              // generate the equation
              let equation = num1 + " " + operator + " " + num2;

              console.log(equation);

              // calculate the answer
              let answer = eval(equation);

              console.log(answer);

              // display the equation
              eqText.setProperty(hmUI.prop.MORE, {
                text: equation,
              });

              // generate random number from 0 or 1
              let randomOption = Math.floor(Math.random() * 2);
              globalCorrectAnswer = randomOption;

              let showOptionsArray = [];
              showOptionsArray[randomOption] = answer;
              showOptionsArray[randomOption == 0 ? 1 : 0] =
                answer + Math.floor(Math.random() * 10) + 1;

              console.log(showOptionsArray);
              console.log(globalCorrectAnswer);

              if (randomOption == 0) {
                option1.setProperty(hmUI.prop.MORE, {
                  text:
                    showOptionsArray[randomOption] % 1 === 0
                      ? showOptionsArray[randomOption].toString()
                      : showOptionsArray[randomOption].toFixed(2),
                });
                option2.setProperty(hmUI.prop.MORE, {
                  text:
                    showOptionsArray[randomOption == 0 ? 1 : 0] % 1 === 0
                      ? showOptionsArray[randomOption == 0 ? 1 : 0].toString()
                      : showOptionsArray[randomOption == 0 ? 1 : 0].toFixed(2),
                });
              } else {
                option1.setProperty(hmUI.prop.MORE, {
                  text:
                    showOptionsArray[randomOption == 0 ? 1 : 0] % 1 === 0
                      ? showOptionsArray[randomOption == 0 ? 1 : 0].toString()
                      : showOptionsArray[randomOption == 0 ? 1 : 0].toFixed(2),
                });
                option2.setProperty(hmUI.prop.MORE, {
                  text:
                    showOptionsArray[randomOption] % 1 === 0
                      ? showOptionsArray[randomOption].toString()
                      : showOptionsArray[randomOption].toFixed(2),
                });
              }
            }

            const scoreText = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 20,
              y: 48 + allYAdd,
              w: 192,
              text: String(score),
              text_size: 28,
              color: 0x000000,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
            });

            function checkResult(option) {
              if (globalCorrectAnswer === option) {
                console.log("Correct");
                score += 1;
                scoreText.setProperty(hmUI.prop.MORE, {
                  text: String(score),
                });

                generateRandomEquations();
              } else {
                console.log("You Lose!");
              }
              resetTime();
            }

            function mainFun() {
              let answerOption = generateRandomEquations();
            }

            mainFun();
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
