// Initialize canvas and context
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Load sprites
const snakeImg = new Image();
snakeImg.src = "snake.png";

const foodImg = new Image();
foodImg.src = "food.png";

// Initialize game variables
const blockSize = 10;
const widthInBlocks = canvas.width / blockSize;
const heightInBlocks = canvas.height / blockSize;

let score = 0;

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
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37 && dx !== 1) {
    // left arrow
    dx = -1;
    dy = 0;
  } else if (event.keyCode === 38 && dy !== 1) {
    // up arrow
    dx = 0;
    dy = -1;
  } else if (event.keyCode === 39 && dx !== -1) {
    // right arrow
    dx = 1;
    dy = 0;
  } else if (event.keyCode === 40 && dy !== -1) {
    // down arrow
    dx = 0;
    dy = 1;
  }
});

// Draw a block on the canvas
function drawBlock(x, y) {
  context.drawImage(
    snakeImg,
    x * blockSize,
    y * blockSize,
    blockSize,
    blockSize
  );
}

// Draw the snake
function drawSnake() {
  snake.forEach((block) => {
    drawBlock(block.x, block.y);
  });
}

// Draw the food
function drawFood() {
  context.drawImage(
    foodImg,
    food.x * blockSize,
    food.y * blockSize,
    blockSize,
    blockSize
  );
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

// Draw the score
function drawScore() {
  context.font = "20px Arial";
  context.fillStyle = "black";
  context.textAlign = "left";
  context.fillText("Score: " + score, blockSize, blockSize * 2);
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
  drawScore();
}

// Start the game loop
let intervalId = setInterval(gameLoop, 1000);
