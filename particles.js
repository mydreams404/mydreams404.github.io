class Particle { //describes properties of a single particle
  constructor() { //sets co-ordinates, radius and speed
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 15);
    this.xSpeed = random(-0.1, 0.1);
    this.ySpeed = random(-0.1, 0.05);
  }

  createParticle() {
    noStroke();
    // let colours = ['rgba(168, 235, 237,0.1)', 'rgba(168, 235, 237,0.2)', 'rgba(168, 235, 237,0.5)']
    // fill(random(colours));
    fill('rgba(168, 235, 237,0.5)');
    circle(this.x, this.y, this.r);
  }

  moveParticle() {
    if (this.x < 0 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < 0 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  joinParticles() {
    particles.forEach(element => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke('rgba(168, 235, 237,0.3)');
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

let particles = [];

function setup() {
  createCanvas(windowWidth, 250);
  for (let i = 0; i < width / 20; i++)
    particles.push(new Particle());
}

function draw() {
  // background(0);
  clear();
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles();
  }
}
