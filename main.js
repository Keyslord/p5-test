var balls = [];

function Ball(x, y, xVel, yVel, size, color) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
    this.size = size;
    this.bounces = 0;
    this.color = color;
    this.move = function() {
        this.y += this.yVel;
        this.x += this.xVel;
        this.yVel += 0.5;
        this.xVel /= 1.01;
        if (this.y > windowHeight - this.size / 2 && this.bounces < 2) {
            this.yVel = this.yVel / -1.5;
            this.y += this.yVel;
            this.bounces += 1;
        }
    }
    this.display = function() {
        fill(color[0], color[1], color[2]);
        circle(this.x, this.y, this.size);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    noStroke();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    for (i = 0; i < 1; i++) {
        var color = [random(0, 255), random(0, 255), random(0, 255)];
        balls.push(new Ball(random(0, windowWidth), -50, random(-20, 20), random(0, 20), random(20, 25), color));
    }
    for (i = 0; i < balls.length; i++) {
        if (balls[i].y - balls[i].size > windowHeight) balls.splice(i, 1);
        balls[i].move();
        balls[i].display();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        balls = [];
    }
}
