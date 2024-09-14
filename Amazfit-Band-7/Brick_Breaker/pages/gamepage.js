Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.setLayerScrolling(false);

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

      return "bricks/brick_" + randomNum + ".png";
    }

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
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
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
    const screenWidth = 194;
    const screenHeight = 368;

    let current_Paddle = hmFS.SysProGetInt("paddlenum");

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

              score++;
              if (score === brickRowCount * brickColumnCount) {
                console.log("YOU WIN, CONGRATS!");
                gameWin();
              }
            }
          }
        }
      }
    }

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
          ballX + ballDX + rightWallPadding > screenWidth - ballRadius ||
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
        w: 194,
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
        w: 194,
        h: 400,
        text: "Your Score: " + score,
        text_size: 20,
        color: 0xffffff,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
      });

      const retryBtn = hmUI.createWidget(hmUI.widget.IMG, {
        x: 32,
        y: 230,
        w: 130,
        h: 90,
        src: "button/retry_normal.png",
      });
      retryBtn.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
        retryBtn.setProperty(hmUI.prop.MORE, {
          src: "button/retry_pressed.png",
        });
        console.log("Retry Pressedddd........");
        hmApp.gotoPage({ url: "pages/gamepage", param: "..." });
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
        w: 194,
        h: 300,
        text: "Level Complete!",
        text_size: 20,
        color: 0xffffff,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
      });

      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 0,
        w: 194,
        h: 400,
        text: "Your Score: " + score,
        text_size: 20,
        color: 0xffffff,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
      });

      const nextLevelBtn = hmUI.createWidget(hmUI.widget.IMG, {
        x: 32,
        y: 230,
        w: 130,
        h: 90,
        src: "button/next_normal.png",
      });
      nextLevelBtn.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
        nextLevelBtn.setProperty(hmUI.prop.MORE, {
          src: "button/next_pressed.png",
        });
        console.log("Next Level Pressedddd........");
        hmApp.gotoPage({ url: "pages/goto_next_level", param: "..." });
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
      y: 0,
      w: 30,
      h: 30,
      text: "",
      normal_src: "button/exit2_normal.png",
      press_src: "button/exit2_pressed.png",
      click_func: function () {
        hmApp.gotoPage({ url: "pages/index.page", param: "..." });
      },
    });

    // var retryBtn = hmUI.createWidget(hmUI.widget.BUTTON, {
    //   x: 0,
    //   y: 200,
    //   w: 194,
    //   h: 90,
    //   text: "",
    //   normal_src: "button/retry_normal.png",
    //   press_src: "button/retry_pressed.png",
    //   click_func: function () {
    //     hmApp.gotoPage({ url: "pages/gamepage", param: "..." });
    //   },
    // });

    console.log("wtf");
    console.log("ok bye");
  },
});
