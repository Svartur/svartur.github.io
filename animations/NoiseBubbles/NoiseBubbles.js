var amount = 70;
var diameter = 30;
var inc = 0.002;
var bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i<amount; i++) {
    bubbles.push( new Bubble( random(666), random(666), color(10, random(255), random(200)) ) );
  }
}

function draw() {
  background(255);
  
  for (var i=0; i<amount; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(nX, nY, c) {
  this.noiseX = nX;
  this.noiseY = nY;
  this.clr = c;
  var x, y;
  
  this.dia = random(diameter/6, diameter);
  this.mode = int(random(2));
  
  this.move = function() {
    this.noiseX += inc;
    this.noiseY += inc;
    this.x = map(noise(this.noiseX), 0, 1, this.dia, width-this.dia);
    this.y = map(noise(this.noiseY), 0, 1, this.dia, height-this.dia);
  }
  
  this.display = function() {
    fill(this.clr);
    noStroke();
    if (this.mode == 0)
      rect(this.x, this.y, this.dia, this.dia);
    else
      ellipse(this.x, this.y, this.dia, this.dia);
  }
}