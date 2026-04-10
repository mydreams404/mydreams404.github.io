var x = 0;

  function setup() {
    createCanvas(windowWidth, 50);
    background(0, 0);
  }

  function draw() {
    stroke('#a8ebed');
    strokeWeight(1);
    line(x, 25, 0, 25);
    x+=5;
  }