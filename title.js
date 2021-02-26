let font;
var points;
var pos = 0;
var speed = 15;

function preload() {
  font = loadFont('assets/TIMES.TTF');
}

function setup() {
  let canvas = createCanvas(800, 250);
  canvas.parent('title-container');
  background(200, 0);
  // frameRate(60);
  textSize(128);
  fill(255);

  points = font.textToPoints('Y U K A R I', 50, 170, 128, {
    sampleFactor: 1
  });
  // console.log(points);

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var pt2 = points[constrain(i + 1, 1, points.length - 1)];
  }

}

function draw() {
  stroke('#a8ebed');
  strokeWeight(1);

  var pt = points[constrain(pos, 0, points.length - 1)];
  point(pt.x, pt.y);

  for (var i = 0; i < pos; i++) {
    pt = points[i];
    point(pt.x, pt.y);
  }

  pos = constrain(pos + speed, 0, points.length - 1);
}
