/* global createCanvas, colorMode, HSB, background, height, width, random, 
           noStroke, fill, ellipse, windowWidth, windowHeight, HSL  */

let dot1;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSL, 360, 100, 100);
  //number of balls on the screen
  numberOfBalls = 100;
  //adding balls to an array
  balls = [];
  for (let i = 0 ; i < numberOfBalls; i++){
      let name = new BouncyDot();
      balls.push(name)
    }
}

function draw() {
  background(220, 0, 80);
  
  //having each ball move and be printed to the screen
  for (let i = 0 ; i < balls.length; i++){
    balls[i].float();
    balls[i].display();
    }
  }
  

function mousePressed() {
  // We'll use this for console log statements only.
  console.log(dot1.x);
}

class BouncyDot {
  constructor() {
    // Randomly generate position
    this.x = random(width);
    this.y = random(height);
    // Randomly generate radius
    this.r = random(5, 12);
    // Randomly generate color
    this.color = random(360);
    // Randomly generate a master velocity (broken into components)...
    this.masterXvelocity = random(0.5, 3);
    this.masterYvelocity = random(0.5, 3);
    // ...and use those as starting velocities.
    this.xVelocity = this.masterXvelocity;
    this.yVelocity = this.masterYvelocity;
  }

 //making the ball move around the screen. if it hits the side of the canvas, velocity changes.
  float() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
    }
    if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity;
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
    }
    if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity;
    }
  }

//show the balls
  display() {
    fill(this.color, 80, 70);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
