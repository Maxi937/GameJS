// declare classes
let player;
let level;

//declare globals
let playerImageFrames = [];

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
  for (const frame of playerFrames) {
    playerImageFrames.push(loadImage(`images/gameAssets/player/${frame}`));
  }
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
  level.display();
  player.update();
}

// controls
function keyPressed() {
  if (key == "a") {
    player.right = true;
  }

  if (key == "d") {
    player.left = true;
  }
}

function keyReleased() {
  if (key == "a") {
    player.right = false;
  }

  if (key == "d") {
    player.left = false;
  }
}

/**********************
--------CLASSES--------
***********************/

// Level Class
class Level {
  constructor() {
    this.height = 75;
    this.x = 0;
    this.y = cnv.height - this.height;
  }

  display() {
    background(50, 89, 100);
    fill(80);
    rect(this.x, this.y, cnv.width, this.height);
  }

  getLevelPos() {
    return this.y;
  }
}

// Player Class
class Player {
  constructor(origin, animations) {
    this.x = 10;
    this.y = origin - 40;
    this.width = 15;
    this.height = 40;
  }

  update() {
    this.controller();
    this.display();
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
    image(playerImageFrames[4], this.x - this.width, this.y);
  }

  controller() {
    if (this.right == true) {
      this.x = this.x - 2;
    }

    if (this.left == true) {
      this.x = this.x + 2;
    }
  }

  // getters
  getPos() {
    let playerPos = {
      x,
      y,
      width,
      height,
    };
    return playerPos;
  }
}
