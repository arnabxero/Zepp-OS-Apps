// Initialize variables
let canvas = document.getElementById("canvas");
let score = 0;
let snake = [
  { x: 90, y: 110 },
  { x: 100, y: 110 },
  { x: 110, y: 110 },
];
let direction = "right";
let food = getRandomPosition();
let intervalId;

// Create the initial canvas and draw the snake and food
let snakeHead = hmUI.createWidget(hmUI.widget.IMG, {
  x: snake[0].x,
  y: snake[0].y,
  h: 10,
  w: 10,
  src: "snake.png",
});

let foodSprite = hmUI.createWidget(hmUI.widget.IMG, {
  x: food.x,
  y: food.y,
  h: 10,
  w: 10,
  src: "food.png",
});

// Add event listener for keyboard input
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  }
});

// Start the game loop
intervalId = setInterval(gameLoop, 100);

// Game loop function
function gameLoop() {
  // Move the snake in the chosen direction
  let head = { x: snake[0].x, y: snake[0].y };
  if (direction === "left") {
    head.x -= 10;
  } else if (direction === "up") {
    head.y -= 10;
  } else if (direction === "right") {
    head.x += 10;
  } else if (direction === "down") {
    head.y += 10;
  }

  // Check if the snake hit the wall
  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height
  ) {
    endGame();
    return;
  }

  // Check if the snake hit itself
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      endGame();
      return;
    }
  }

  // Check if the snake ate the food
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    document.getElementById("score").innerHTML = score;
    food = getRandomPosition();
    foodSprite.x = food.x;
    foodSprite.y = food.y;
    snake.unshift(head);
  } else {
    // Move the tail to the front of the snake
    snake.pop();
    snake.unshift(head);
  }

  // Redraw the snake and food
  for (let i = 0; i < snake.length; i++) {
    let sprite = hmUI.createWidget(hmUI.widget.IMG, {
      x: snake[i].x,
      y: snake[i].y,
      h: 10,
      w: 10,
      src: "snake.png",
    });
    if (i === 0) {
      snakeHead = sprite;
    }
  }
}

// Helper function to get a random position for the food
function getRandomPosition() {
  let x = Math.floor(Math.random() * (canvas.width / 10)) * 10;
  let y = Math.floor(Math.random() * (canvas.height / 10)) * 10;
  return { x: x, y: y };
}

// Helper function to end the game
function endGame() {
  clearInterval(intervalId);
  alert("Game Over! Your score was " + score);
  hmUI.deleteWidget(snakeHead);
  hmUI.deleteWidget(foodSprite);
  for (let i = 1; i < snake.length; i++) {
    hmUI.deleteWidget(
      hmUI.createWidget(hmUI.widget.IMG, {
        x: snake[i].x,
        y: snake[i].y,
        h: 10,
        w: 10,
        src: "snake.png",
      })
    );
  }
}
