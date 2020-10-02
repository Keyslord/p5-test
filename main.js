var balls = [];

function Ball(x, y, xVel, yVel, size) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
    this.size = size;
    this.bounces = 0;
    this.move = function() {
        this.y += this.yVel;
        this.x += this.xVel;
        this.yVel += 1;
        if (this.y < this.size && this.bounces < 1) {
            this.yVel *= -1;
            this.bounces++;
        }
    }
    this.display = function() {
        //fill(random(0, 255), random(0, 255), random(0, 255));
        circle(this.x, this.y, size);
    }
}

function setup() {
    createCanvas(720, 480);
    frameRate(30);
    fill('#450fff');
    noStroke();
}

function draw() {
    background(220);
    for (i = 0; i < 2; i++) {
        balls.push(new Ball(random(0, 720), -20, random(-20, 20), 0, random(10, 20)));
    }
    for (i = 0; i < balls.length; i++) {
        if (balls[i].y < -100) {
            balls[i].splice(i, 1);
        }
        balls[i].move();
        balls[i].display();
    }
}
