//var starSize = 6;
var minSpeed = .1;
var maxSpeed = 1;
var minSize = 6;
var maxSize = 20;
var n = 20;
var maxDist;
var stars = [];

function setup() {
  var canvasDiv = document.getElementById('animationDiv');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var canvas = createCanvas(width, height);
  canvas.parent('animationDiv');

  //createCanvas(windowWidth, 200);
  maxDist = width/10;
  rectMode(CENTER);
  
  for (var i=0; i<=n; i++) {
    stars.push(new star());
  }
}

function draw() {
  background(color(38, 38, 38));
  
  noFill();
  stroke(color(244, 92, 247));
  strokeWeight(3);
  
  for (var i=0; i<=n; i++) {
    stars[i].checked = false;
  }
  
  for (var i=0; i<=n; i++) {
    for (var j=0; j<=n; j++) {
      if (i > j) {
        if (dist(stars[i].x, stars[i].y, stars[j].x, stars[j].y) < maxDist) {
          line(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
        } 
      }
    }
  }
  
  for (var i=0; i<=n; i++) {
    stars[i].move();
    stars[i].show();
  }
}

function star() {
  this.radius = random(minSize, maxSize);
  
  this.x = random(this.radius, width - this.radius);
  this.y = random(this.radius, height - this.radius);
  
  this.xSpeed = random(minSpeed, maxSpeed);
  this.ySpeed = random(minSpeed, maxSpeed);
  
  if (int(random(2)) == 1) {
    this.xSpeed *= -1;
  }
  if (int(random(2)) == 1) {
    this.ySpeed *= -1;
  }
  
  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    var halfSize = this.radius/2;
    if ((this.x > width-halfSize) || (this.x < halfSize)) {
      this.xSpeed *= -1;
    }
    if ((this.y > height-halfSize) || (this.y < halfSize)) {
      this.ySpeed *= -1;
    }
  }
  
  this.show = function() {
    noStroke();
    fill(color(116, 62, 211));
    rect(this.x, this.y, this.radius, this.radius);
  }
}