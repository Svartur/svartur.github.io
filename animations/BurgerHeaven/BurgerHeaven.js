var n = 20;
var inc = 0.004;
var movingRange;
var maxRotatingSpeed = 0.1;

var movingBurgers = [];
var rotatingBurgers = [];
var burgers = [];
var galaxy;

function preload() {
  burgers[0] = loadImage("data/burger1.png");
  burgers[1] = loadImage("data/burger2.png");
  burgers[2] = loadImage("data/burger3.png");
  burgers[3] = loadImage("data/burger4.png");
  burgers[4] = loadImage("data/burger5.png");
  burgers[5] = loadImage("data/burger6.png");
  burgers[6] = loadImage("data/burger7.png");
  burgers[7] = loadImage("data/burger8.png");
  galaxy =     loadImage("data/galaxy.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (var i=0; i<8; i++) {
    burgers[i].resize((width+height)/15, 0);
  }
  galaxy.resize(width, height);
  imageMode(CENTER);
  movingRange = (width+height)/5;
  
  for (var i=0; i<n; i++) {
    movingBurgers.push(new Burger());
    rotatingBurgers.push(new Burger());
  }
}

function draw() {
  image(galaxy, width/2, height/2);
  
  for (var i=0; i<n; i++) {
    movingBurgers[i].move();
    rotatingBurgers[i].rot();
  }
}

function Burger() {
  this.x = random(width);
  this.y = random(height);
  this.speed = random(-maxRotatingSpeed, maxRotatingSpeed);
  this.bur = int(random(8));
  
  this.a = random(5);
  this.tx;
  this.ty;
  this.xoff = random(666);
  this.yoff = random(666);
  
  this.move = function() {
    this.xoff += inc;
    this.yoff += inc;
    
    this.tx = map(noise(this.xoff), 0, 1, this.x-movingRange, this.x+movingRange);
    this.ty = map(noise(this.yoff), 0, 1, this.y-movingRange, this.y+movingRange);
    
    push();
    translate(this.tx, this.ty);
      rotate(this.a);
      image(burgers[this.bur], 0, 0);
    pop();
    
    image(burgers[this.bur], 0, 0);
  } 
  
  this.rot = function() {
    push();
    translate(this.x, this.y);
      rotate(this.a);
      image(burgers[this.bur], 0, 0);
      this.a += this.speed;
    pop();
  }
  
}