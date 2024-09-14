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
            // Screen hold
            hmApp.setScreenKeep(true);
            const gamebgrnd = hmFS.SysProGetInt("gamebg");

            const gameBground = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              src: "road/road_" + gamebgrnd + ".png",
            });

            const brickBallCoalisionDistance = 35;

            const brickImg = "brick.png";

            function randomBrickImg() {
              const randomNum = Math.floor(Math.random() * 19);
              // switch (randomNum) {
              //   case 0:
              //     return "brick.png";
              //   case 1:
              //     return "brick2.png";
              //   case 2:
              //     return "brick3.png";
              // }

              return "bricks/brick_" + randomNum + ".png";
            }
            // const brickRowCount = 6;

            const brickRowCount = hmFS.SysProGetInt("brickrow");
            const brickColumnCount = 7;
            const brickWidth = 20;
            const brickHeight = 6;
            const brickPadding = 5;
            const brickOffsetTop = 60;
            const brickOffsetLeft = 11;
            const bricks = [];

            let bricksDrawn = [];

            for (let c = 0; c < brickColumnCount; c++) {
              bricks[c] = [];

              for (let r = 0; r < brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
              }
            }

            function drawBricks() {
              for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                  if (bricks[c][r].status === 1) {
                    const brickX =
                      c * (brickWidth + brickPadding) + brickOffsetLeft;
                    const brickY =
                      r * (brickHeight + brickPadding) + brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;

                    console.log(c * 3 + r);

                    bricksDrawn[c * brickRowCount + r] = hmUI.createWidget(
                      hmUI.widget.IMG,
                      {
                        x: brickX,
                        y: brickY,
                        w: brickWidth,
                        h: brickHeight,
                        src: randomBrickImg(),
                      }
                    );
                  }
                }
              }
            }

            const screenWidth = 192;
            const screenHeight = 450;

            let current_Paddle = hmFS.SysProGetInt("paddlenum");

            // let paddleImg = "paddle_0.png";

            // if (current_Paddle == 0) {
            //   paddleImg = "paddle_0.png";
            // } else {
            //   paddleImg = "paddle_1.png";
            // }

            let paddleImg = "paddle_" + current_Paddle + ".png";
            let paddleX = (screenWidth - 40) / 2;
            const paddleY = screenHeight - 35;
            const paddleWidth = 40;
            const paddleHeight = 5;

            let paddleObject = "";

            function drawPaddle() {
              paddleObject = hmUI.createWidget(hmUI.widget.IMG, {
                x: paddleX,
                y: paddleY,
                w: paddleWidth,
                h: 8 /*paddleHeight*/,
                src: paddleImg,
              });
            }

            let ballSpeed = hmFS.SysProGetInt("speed");
            let ballX = (screenWidth - 14) / 2;
            let ballY = screenHeight - 85;
            // let ballDX = 2;
            // let ballDY = -2;
            let ballDX = ballSpeed;
            let ballDY = -1 * ballSpeed;
            let ballImg = "ball.png";
            let ballRadius = 8;

            let ballObject = "";

            function drawBall() {
              ballObject = hmUI.createWidget(hmUI.widget.IMG, {
                x: ballX,
                y: ballY,
                w: 16,
                h: 16,
                src: ballImg,
              });
            }

            ////////////////////////////
            ///// Coalision ////////////
            let score = 0;
            function collisionDetection() {
              for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                  const brick = bricks[c][r];
                  if (brick.status === 1) {
                    if (
                      ballX > brick.x &&
                      ballX < brick.x + brickWidth &&
                      ballY > brick.y &&
                      ballY < brick.y + brickHeight
                    ) {
                      ballDY = -ballDY;
                      brick.status = 0;

                      hmUI.deleteWidget(bricksDrawn[c * brickRowCount + r]);

                      // ????????????  here delete bricks
                      score++;
                      if (score === brickRowCount * brickColumnCount) {
                        console.log("YOU WIN, CONGRATS!");
                        gameWin();
                        // alert("YOU WIN, CONGRATS!");
                        // document.location.reload();
                      }
                    }
                  }
                }
              }
            }

            //////////////////////////////////
            //////////////////////////////////
            let scoreText = "";

            function drawScore() {
              scoreText = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 15,
                w: 192,
                h: 20,
                text: "Score: " + score,
                text_size: 15,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
              });
            }

            function updateScore() {
              scoreText.setProperty(hmUI.prop.MORE, {
                text: "Score: " + score,
              });
            }

            let rightPressed = false;
            let leftPressed = false;

            function createButtons() {
              const leftBtn = hmUI.createWidget(hmUI.widget.IMG, {
                x: -5,
                y: 0,
                w: 97,
                h: 450,
                src: "",
              });
              leftBtn.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                leftPressed = true;
                console.log("Left Down");
              });
              leftBtn.addEventListener(hmUI.event.CLICK_UP, function (info) {
                leftPressed = false;
                console.log("Left Up");
              });

              const rightBtn = hmUI.createWidget(hmUI.widget.IMG, {
                x: 98,
                y: 0,
                w: 95,
                h: 450,
                src: "",
              });
              rightBtn.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                rightPressed = true;
                console.log("Right Down");
              });
              rightBtn.addEventListener(hmUI.event.CLICK_UP, function (info) {
                rightPressed = false;
                console.log("Right Up");
              });
            }

            let gameLoopTimer = "";

            const rightWallPadding = 0;
            const leftWallPadding = 10;

            function draw() {
              drawBricks();
              drawBall();
              drawPaddle();
              createButtons();
              drawScore();

              gameLoopTimer = timer.createTimer(0, 30, function () {
                updateScore();
                // Handle ball collisions with walls and paddle
                if (
                  ballX + ballDX + rightWallPadding >
                    screenWidth - ballRadius ||
                  ballX + ballDX + leftWallPadding < ballRadius
                ) {
                  ballDX = -ballDX;
                }
                if (ballY + ballDY < ballRadius) {
                  ballDY = -ballDY;
                } else if (
                  ballY + ballDY + brickBallCoalisionDistance >
                  screenHeight - ballRadius
                ) {
                  if (ballX > paddleX - 20 && ballX < paddleX + paddleWidth) {
                    console.log("BallX: " + ballX);
                    console.log("PaddleX: " + paddleX);

                    ballDY = -ballDY;
                  } else {
                    console.log("GAME OVER");
                    //////////////
                    gameOver();
                  }
                }

                // Move paddle
                if (rightPressed && paddleX < screenWidth - paddleWidth) {
                  paddleX += 7;
                } else if (leftPressed && paddleX > 0) {
                  paddleX -= 7;
                }

                // Move ball
                ballX += ballDX;
                ballY += ballDY;

                ballObject.setProperty(hmUI.prop.MORE, {
                  x: ballX,
                  y: ballY,
                });

                paddleObject.setProperty(hmUI.prop.MORE, {
                  x: paddleX,
                });

                // Detect collisions with bricks
                collisionDetection();
              });
            }

            draw();

            function gameOver() {
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 0,
                w: 192,
                h: 300,
                text: "Game Over",
                text_size: 20,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
              });

              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 0,
                w: 192,
                h: 490,
                text: "Your Score: " + score,
                text_size: 20,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
              });

              // timer.createTimer(0, 2000, function () {
              //   hmApp.gotoPage({
              //     url: "page/192x490_s_l66/gamepage",
              //   });
              // });

              var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 22,
                y: 441,
                w: 150,
                h: 51,
                text: "",
                normal_src: "button/start_normal.png",
                press_src: "button/start_pressed.png",
                click_func: (function (h) {
                  return function () {
                    hmApp.gotoPage({
                      url: "page/192x490_s_l66/gamepage",
                    });
                  };
                })(e),
              });

              timer.stopTimer(gameLoopTimer);

              hmUI.deleteWidget(ballObject);
              hmUI.deleteWidget(paddleObject);
              hmUI.deleteWidget(scoreText);
              for (let i = 0; i < bricksDrawn.length; i++) {
                hmUI.deleteWidget(bricksDrawn[i]);
              }
              hmUI.deleteWidget(leftBtn);
              hmUI.deleteWidget(rightBtn);
            }

            function gameWin() {
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 0,
                w: 192,
                h: 300,
                text: "YOU WIN, CONGRATS!",
                text_size: 20,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
              });

              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 0,
                w: 192,
                h: 490,
                text: "Your Score: " + score,
                text_size: 20,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
              });

              // timer.createTimer(0, 2000, function () {
              //   hmApp.gotoPage({
              //     url: "page/192x490_s_l66/gamepage",
              //   });
              // });

              var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 22,
                y: 441,
                w: 150,
                h: 51,
                text: "",
                normal_src: "button/start_normal.png",
                press_src: "button/start_pressed.png",
                click_func: (function (h) {
                  return function () {
                    hmApp.gotoPage({
                      url: "page/192x490_s_l66/gamepage",
                    });
                  };
                })(e),
              });

              timer.stopTimer(gameLoopTimer);

              hmUI.deleteWidget(ballObject);
              hmUI.deleteWidget(paddleObject);
              hmUI.deleteWidget(scoreText);
              for (let i = 0; i < bricksDrawn.length; i++) {
                hmUI.deleteWidget(bricksDrawn[i]);
              }
              hmUI.deleteWidget(leftBtn);
              hmUI.deleteWidget(rightBtn);
            }

            var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 0,
              y: 450,
              w: 192,
              h: 40,
              text: "",
              normal_src: "button/exit2_normal.png",
              press_src: "button/exit2_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/index.page",
                  });
                };
              })(e),
            });

            console.log("wtf");
            console.log("ok bye");
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
