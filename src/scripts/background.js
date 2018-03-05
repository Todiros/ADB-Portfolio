let points = [];
let tickSpeed = 5;
let base = 180;
let numPoints = 5;
let maxTicks = 1000;
let ticks = 0;

function Point(x = random(width), y = random(height), a = random(PI)){
  this.x = x;
  this.y = y;
  this.a = a;
  this.dx = cos(a);
  this.dy = sin(a);
  this.color = color(97,137,47,3);
}

Point.prototype.update = function(){
  this.x += this.dx;
  this.y += this.dy;
  if (this.x < 0 || this.x >= width) this.dx *= -1;
  if (this.y < 0 || this.y >= height) this.dy *= -1;
  stroke(this.color);
  line(this.x, this.y, this.neighbor.x, this.neighbor.y);
}

function setup(){
  createCanvas();
  colorMode(RGB);
  windowResized();
  blendMode(ADD);
  strokeWeight(1.2);
}

function init(){
  points = [];
  base = random(360);
  ticks = 0;
  
  for (var i = 0; i < 10; i++) points.push(new Point());
  
  for (var i = 0; i < points.length; i++){
    let j = i;
    while(j == i) j = floor(random(points.length));
    points[i].neighbor = points[j];
  }
}

function draw(){
  if (ticks > maxTicks) return;
  for (var n = 0; n < tickSpeed; n++){
    for (var i = 0; i < points.length; i++){
      points[i].update();
    }
    ticks++;
  }
}

function mouseClicked(){
  windowResized();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  clear();
  background(37,38,39);
  init();
}
