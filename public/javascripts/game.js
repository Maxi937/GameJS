// declare classes
let player;
let level;

// recentre canvas if window resized
function windowResized() {
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

// preload -- load images
function preload() {
  testImg = loadImage("images/gameAssets/player/player03.png");
}

// Setup game --create objects
function setup() {
  cnv = createCanvas(750, 400);
  centerCanvas();
  
  //create Level Object
  level = new Level();

  //create Player Object
  player = new Player(level.getLevelPos());
}

// DRAW
function draw() {
  if (mouseIsPressed) {
    player.move();
  }
  level.display();
  player.display();
}




/**********************
--------CLASSES--------
***********************/


// Level Class
class Level {
  constructor() {
    this.height = 75;
    this.x = 0;
    this.y = cnv.height-this.height;
  }

  display(){
    background(50, 89, 100);
    fill(80)
    rect(this.x, this.y, cnv.width, this.height)
  }

  getLevelPos(){
    return this.y;
  }
}

// Player Class
class Player {
  constructor(origin) {
    this.hitbox = {
      height: 40,
      width: 15,
    }
    this.hitbox.x = 10;
    this.hitbox.y = origin - this.hitbox.height;
  }

  move() {
    this.hitbox.x += 2;
  }

  display() {
    rect(this.hitbox.x, this.hitbox.y, this.hitbox.width, this.hitbox.height);
    image(testImg, this.hitbox.x - this.hitbox.width, this.hitbox.y);
  }

  getPos(){
    return this.hitbox;
  }
}

