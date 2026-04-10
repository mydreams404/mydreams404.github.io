var x = 0;

function setup() {
  let canvas = createCanvas(windowWidth, 50);
  canvas.parent('line-container');
  background(0, 0);
}

function draw() {
  stroke('#a8ebed');
  strokeWeight(1);
  line(x, 25, 0, 25);
  if (x < windowWidth)
    x += 5;
}
