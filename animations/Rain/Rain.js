var dropAmount = 200;
var dropSize = 10;
var splashSpeed = 2;
var maxDropSpeed = 20;
var minDropSpeed = 2;
var maxDropWeight = 3;
var minDropWeight = 0.5;

var rain = [];
var splashes = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(900, 600);
  for (var i=0; i<dropAmount; i++)
      rain.push(new drop());
}


function draw() {
  background(color(0, 80, 80));
  
  for (var i=0; i<rain.length; i++) {
    rain[i].move();
    if (rain[i].startY > rain[i].splashAt) {
      splashes.push(new splash(rain[i].endX, rain[i].endY));
      rain[i] = new drop();
    }
    rain[i].display();
  }
  
  for (var i=0; i<splashes.length; i++) {
      splashes[i].fade();
      splashes[i].display();
      if (splashes[i].alpha < 0)
        splashes.splice(i, 1);
  }
}


function drop() {
  this.startX = random(width);
  this.endX = this.startX;
  this.startY = -dropSize;
  this.endY = 0;
  this.speed = random(minDropSpeed, maxDropSpeed);
  this.weight = map(this.speed, minDropSpeed, maxDropSpeed, minDropWeight, maxDropWeight);
  this.clr = random(100, 255);
  this.splashAt = random(height*.8, height);
  
  this.move = function() {
    this.startY += this.speed;
    this.endY += this.speed;
  }
  
  this.display = function() {
    strokeWeight(this.weight);
    stroke(this.clr);
    line(this.startX, this.startY, this.endX, this.endY);
  }
}


function splash(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.alpha = 255;
  this.size = random(dropSize/2, dropSize*1.5);
  
  this.fade = function() {
    this.alpha = this.alpha - splashSpeed;
  }
  
  
  this.display = function() {
    fill(255, this.alpha);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size/3);
  }
}