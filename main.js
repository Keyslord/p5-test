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
        if (this.y > 480 - this.size / 2 && this.bounces < 2) {
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
    createCanvas(720, 480);
    frameRate(30);
    noStroke();
}

function draw() {
    background(220);
    for (i = 0; i < 1; i++) {
        var color = [random(0, 255), random(0, 255), random(0, 255)];
        balls.push(new Ball(random(0, 720), -50, random(-20, 20), random(0, 20), random(20, 25), color));
    }
    for (i = 0; i < balls.length; i++) {
        if (balls[i].y < -100) balls.splice(i, 1);
        balls[i].move();
        balls[i].display();
    }
}
