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
            const screenHeight = 250;
            const screenWidth = 190;

            const snakeImg = "snake.png";
            const foodImg = "food.png";

            // Initialize game variables
            const blockSize = 10;
            const widthInBlocks = screenWidth / blockSize;
            const heightInBlocks = screenHeight / blockSize;

            let snake = [];
            snake[0] = {
              x: Math.floor(widthInBlocks / 2),
              y: Math.floor(heightInBlocks / 2),
            };

            let food = {
              x: Math.floor(Math.random() * (widthInBlocks - 1)),
              y: Math.floor(Math.random() * (heightInBlocks - 1)),
            };

            let dx = 1;
            let dy = 0;

            // Handle key presses
            // document.addEventListener("keydown", (event) => {
            //   if (event.keyCode === 37 && dx !== 1) {
            //     // left arrow
            //     dx = -1;
            //     dy = 0;
            //   } else if (event.keyCode === 38 && dy !== 1) {
            //     // up arrow
            //     dx = 0;
            //     dy = -1;
            //   } else if (event.keyCode === 39 && dx !== -1) {
            //     // right arrow
            //     dx = 1;
            //     dy = 0;
            //   } else if (event.keyCode === 40 && dy !== -1) {
            //     // down arrow
            //     dx = 0;
            //     dy = 1;
            //   }
            // });

            // Draw a block on the canvas
            function drawBlock(x, y) {
              hmUI.createWidget(hmUI.widget.IMG, {
                x: (x * blockSize),
                y: (y * blockSize),
                h: blockSize,
                w: blockSize,
                src: snakeImg,
              });
            }

            // Draw the snake
            function drawSnake() {
              snake.forEach((block) => {
                drawBlock(block.x, block.y);
              });
            }

            // Draw the food
            function drawFood() {
              hmUI.createWidget(hmUI.widget.IMG, {
                x: food.x * blockSize,
                y: food.y * blockSize,
                h: blockSize,
                w: blockSize,
                src: foodImg,
              });
            }

            // Move the snake
            function moveSnake() {
              // Add a new head block
              let head = {
                x: snake[0].x + dx,
                y: snake[0].y + dy,
              };
              snake.unshift(head);

              // Check if snake ate food
              if (head.x === food.x && head.y === food.y) {
                score++;
                newFood();
              } else {
                snake.pop();
              }
            }

            // Generate new food position
            function newFood() {
              food = {
                x: Math.floor(Math.random() * (widthInBlocks - 1)),
                y: Math.floor(Math.random() * (heightInBlocks - 1)),
              };
            }

            // Check if snake has collided with walls or itself
            function checkCollision() {
              let head = snake[0];

              if (
                head.x < 0 ||
                head.x >= widthInBlocks ||
                head.y < 0 ||
                head.y >= heightInBlocks
              ) {
                return true;
              }

              for (let i = 1; i < snake.length; i++) {
                if (head.x === snake[i].x && head.y === snake[i].y) {
                  return true;
                }
              }

              // If no collision, return false
              return false;
            }

            // Game loop
            function gameLoop() {
              if (checkCollision()) {
                clearInterval(intervalId);
                alert("Game Over! Score: " + score);
                return;
              }
              context.clearRect(0, 0, canvas.width, canvas.height);

              moveSnake();
              drawSnake();
              drawFood();
            }

            // hmUI.createWidget(hmUI.widget.IMG, {
            //   x: 100,
            //   y: 100,
            //   h: 10,
            //   w: 10,
            //   src: "food.png",
            // });

            timer.createTimer(0, 30, function () {
              gameLoop();
            });

            console.log("Goodbye World");
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
