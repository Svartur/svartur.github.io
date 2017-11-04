var scl = 50;
var inc = 0.1;
var zinc = 0.01;
var cinc = 0.001;

var col, row;
var xoff, yoff, zoff;
var roff, goff, boff, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  
  col = floor(width/scl);
  row = floor(height/scl);
  
  zoff = 0;
  
  roff = random(666);
  goff = random(666);
  boff = random(666);
}

function draw() {
  background(color(abs(255-r), abs(255-g), abs(255-b) ));
  roff += cinc;
  goff += cinc;
  boff += cinc;
  r = map(noise(roff), 0, 1, 0, 255);
  g = map(noise(goff), 0, 1, 0, 255);
  b = map(noise(boff), 0, 1, 0, 255);
  fill(color(r, g, b));
  
  yoff = 0;
  for (var y = 0; y < row+4; y++) {
    xoff = 0;
    for (var x = 0; x < col+4; x++) {
      xoff += inc;
      
      var radius = map(noise(xoff, yoff, zoff), 0, 1, 0, scl*1.5);
      ellipse(x*scl-scl*2, y*scl-scl*2, radius, radius);
    }
    yoff += inc;
  }  
  zoff += zinc;
  
  
  //noLoop(0);
}