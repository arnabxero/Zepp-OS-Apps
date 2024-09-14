/**
 * Build with ZMake tool
 */

Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);
    var correct_answer = -1;

    var right_option = -1;
    var selected_option = -2;
    var score = 0;
    var time = 10;
    var timeArch_timer;

    var gameover_running = 0;

    var arcSize = 330;
    var colorIndex = 9;
    var size = 30;
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
      y: 170,
      w: 168,
      h: 55,
      src: "button_normal.png",
    });

    const option1_text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 11,
      y: 173,
      w: 170,
      h: 50,
      color: 0x000000,
      text_size: 30,
      align_h: hmUI.align.CENTER_H,
      text: "HELLO",
    });

    const option1_btn = hmUI.createWidget(hmUI.widget.IMG, {
      x: 11,
      y: 170,
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
      y: 235,
      w: 168,
      h: 55,
      src: "button_normal.png",
    });

    const option2_text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 11,
      y: 238,
      w: 170,
      h: 50,
      color: 0x000000,
      text_size: 30,
      align_h: hmUI.align.CENTER_H,
      text: "HELLO",
    });

    const option2_btn = hmUI.createWidget(hmUI.widget.IMG, {
      x: 11,
      y: 235,
      w: 168,
      h: 55,
      src: "invisible_button_normal.png",
    });
    const option3_bg = hmUI.createWidget(hmUI.widget.IMG, {
      x: 11,
      y: 300,
      w: 168,
      h: 55,
      src: "button_normal.png",
    });

    const option3_text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 11,
      y: 303,
      w: 170,
      h: 50,
      color: 0x000000,
      text_size: 30,
      align_h: hmUI.align.CENTER_H,
      text: "HELLO",
    });

    const option3_btn = hmUI.createWidget(hmUI.widget.IMG, {
      x: 11,
      y: 300,
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
    option3_btn.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      if (gameover_running === 0) {
        selected_option = 2;
        if (right_option === 2) {
          option3_bg.setProperty(hmUI.prop.MORE, {
            src: "button_pressed_green.png",
          });
        } else {
          option3_bg.setProperty(hmUI.prop.MORE, {
            src: "button_pressed_red.png",
          });
        }
        checkResult();
      }
    });
    option3_btn.addEventListener(hmUI.event.CLICK_UP, (info) => {
      option3_bg.setProperty(hmUI.prop.MORE, {
        src: "button_normal.png",
      });
    });

    const eqText = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 11,
      y: 100,
      w: 170,
      h: 50,
      color: 0x000000,
      text_size: size,
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
      scoreObj.setProperty(hmUI.prop.MORE, {
        text: "" + score,
      });
    }

    function checkResult() {
      if (right_option === selected_option) {
        score++;
        refreshScore();
        reroll();
      } else {
        hmUI.showToast({
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

      // generate a random number within 1 to 1000
      let num1 = Math.floor(Math.random() * 1000) + 1;
      let num2 = Math.floor(Math.random() * 1000) + 1;
      let num3 = Math.floor(Math.random() * 1000) + 1;
      let min = ["", "-"];
      let is_Minus = min[Math.floor(Math.random() * min.length)];
      let choice = min[Math.floor(Math.random() * min.length)];
      // select a random math operator
      let operators = ["+", "-", "*", "/", "**", "%"];
      let l;
      if (score > 10 && choice == "") {
        l = 1;
      } else {
        l = 0;
      }
      let operator =
        operators[Math.floor(Math.random() * operators.length) - l];
      let operator2 =
        operators[Math.floor(Math.random() * operators.length) - l];
      if (operator == undefined) {
        operator = operators[0];
      }
      if (operator2 == undefined) {
        operator2 = operators[0];
      }
      if (operator == "*") {
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
      }
      if (operator == "**") {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
      }
      if (operator2 == "*") {
        num3 = Math.floor(Math.random() * 100) + 1;
      }
      if (operator2 == "**") {
        num3 = Math.floor(Math.random() * 10) + 1;
      }
      // generate the equation
      function operator_current(j) {
        if (j == 1) {
          if (operator == "%") {
            return "∟";
          } else if (operator == "**") {
            return "^";
          } else {
            return operator;
          }
        } else {
          if (operator2 == "%") {
            return "∟";
          } else if (operator2 == "**") {
            return "^";
          } else {
            return operator2;
          }
        }
      }
      let equation = is_Minus + num1 + " " + operator + " " + num2;
      let equation_TWO = is_Minus + num1 + " " + operator_current(1) + " " +
        num2;
      size = 30;
      if (score > 10 && choice == "") {
        equation = is_Minus + num1 + " " + operator + " " + num2 + operator2 +
          num3;
        equation_TWO = is_Minus + num1 + " " + operator_current(1) + " " +
          num2 + operator_current(2) + num3;
        size = 20;
      }
      console.log(equation);

      eqText.setProperty(hmUI.prop.MORE, {
        text_size: size,
        text: "" + equation_TWO,
      });

      let randomOption = Math.floor(Math.random() * 3);
      right_option = randomOption;

      correct_answer = parseInt(right_option) + 1;

      console.log(randomOption);

      let answer = eval(equation);
      let wrongAns;
      let wrongAns2;
      if (Math.floor(Math.random() * 3) + 1 == 1) {
        wrongAns = answer + Math.floor(Math.random() * 10) + 1;
        wrongAns2 = answer - Math.floor(Math.random() * 10) + 1;
      } else if (Math.floor(Math.random() * 3) + 1 == 2) {
        wrongAns = answer + Math.floor(Math.random() * 10) + 1;
        wrongAns2 = wrongAns + Math.floor(Math.random() * 10) + 1;
      } else {
        wrongAns = answer - Math.floor(Math.random() * 10) + 1;
        wrongAns2 = wrongAns - Math.floor(Math.random() * 10) + 1;
      }
      if (wrongAns == wrongAns2) {
        wrongAns += Math.floor(Math.random() * 10) + 2;
        wrongAns2 -= Math.floor(Math.random() * 10) + 2;
      }
      let correctOptionText = answer % 1 === 0
        ? answer.toString()
        : answer.toFixed(2);
      let wrongOptionText = wrongAns % 1 === 0
        ? wrongAns.toString()
        : wrongAns.toFixed(2);
      let wrongOptionText_2 = wrongAns2 % 1 === 0
        ? wrongAns2.toString()
        : wrongAns2.toFixed(2);

      if (randomOption === 0) {
        option1_text.setProperty(hmUI.prop.MORE, {
          text: "" + correctOptionText,
        });
        option2_text.setProperty(hmUI.prop.MORE, {
          text: "" + wrongOptionText,
        });
        option3_text.setProperty(hmUI.prop.MORE, {
          text: "" + wrongOptionText_2,
        });
      } else if (randomOption === 1) {
        option1_text.setProperty(hmUI.prop.MORE, {
          text: "" + correctOptionText,
        });
        option2_text.setProperty(hmUI.prop.MORE, {
          text: "" + correctOptionText,
        });
        option3_text.setProperty(hmUI.prop.MORE, {
          text: "" + wrongOptionText_2,
        });
      } else {
        option1_text.setProperty(hmUI.prop.MORE, {
          text: "" + wrongOptionText,
        });
        option2_text.setProperty(hmUI.prop.MORE, {
          text: "" + wrongOptionText_2,
        });
        option3_text.setProperty(hmUI.prop.MORE, {
          text: "" + correctOptionText,
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
  },
});
