const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const restartButton = document.querySelector("#restartButton");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foody;
let score = 0;
let snake [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
restartButton.addEventListener("click", restartGame);

gameStart();

function gameStart() {};

function nextTick() {};

function clearBoard() {};

function createFood() {};

function drawFood() {};

function moveSnake() {};

function changeDirection() {};

function checkGame() {};

function checkGameOver() {};

function displayGameOver() {};

function restartGame() {};