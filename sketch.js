// NAME TITLE
var loadText = false;
frameRate = 30;

// UNDERLINE
var underline = function(p) {
  var x = p.windowWidth;

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, 1);
    // canvas.parent('line-container');
    p.background(0, 0);
  };

  p.draw = function() {
    p.stroke('#a8ebed');
    p.strokeWeight(3);
    p.line(x, 1, p.windowWidth, 1);
    if (x > 0)
      x -= 5;
  };
};
var myp5 = new p5(underline, 'line-container');

// BG PARTICLES

var particles = function(p) {
  class Particle {
    constructor() { //sets co-ordinates, radius and speed
      this.x = p.random(0, p.width);
      this.y = p.random(0, p.height);
      this.r = p.random(1, 15);
      this.xSpeed = p.random(-0.1, 0.1);
      this.ySpeed = p.random(-0.1, 0.05);
    }

    createParticle() {
      p.noStroke();
      p.fill('rgba(168, 235, 237,0.5)');
      p.circle(this.x, this.y, this.r);
    }

    moveParticle() {
      if (this.x < 0 || this.x > p.width)
        this.xSpeed *= -1;
      if (this.y < 0 || this.y > p.height)
        this.ySpeed *= -1;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }

    joinParticles() {
      particles.forEach(element => {
        let dis = p.dist(this.x, this.y, element.x, element.y);
        if (dis < 150) {
          p.stroke('rgba(168, 235, 237,0.3)');
          p.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }

  let particles = [];

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight * 0.8);
    for (let i = 0; i < p.windowWidth / 15; i++)
      particles.push(new Particle());
  }

  p.draw = function() {
    p.clear();
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles();
    }
  }
}
var myp5 = new p5(particles, 'particle-container');
