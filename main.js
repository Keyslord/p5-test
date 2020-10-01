var ballX = 360;
var ballY = 240;
var ballXSpeed = 5;
var ballYSpeed = 5;

function setup() {
  createCanvas(720, 480);
  fill('#450fff');
  noStroke();
}

function draw() {
  background(220);
  ballX += ballXSpeed;
  ballY += ballYSpeed;
  if (ballX < 10 || ballX > 710) {
    ballXSpeed *= -1;
    ballX += ballXSpeed;
  }
  if (ballY < 10 || ballY > 470) {
    ballYSpeed *= -1;
    ballY += ballYSpeed;
  }
  circle(ballX, ballY, 20);
}
