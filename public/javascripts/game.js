let player;
let level;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(750, 400);
  centerCanvas();
  
  //create Level Object
  level = new Level();

  //create Player Object
  player = new Player(level.getLevelPos());
}

function windowResized() {
  centerCanvas();
}

function draw() {
  if (mouseIsPressed) {
    player.move();
  }
  level.display();
  player.display();
}

// Player Class
class Player {
  constructor(origin) {
    this.height = 40;
    this.width = 15;
    this.x = 20;
    this.y = origin-this.height;
  }

  move() {
    this.x += 2;
  }

  display() {
    rect(this.x, this.y, this.width,this.height)
  }
}

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

