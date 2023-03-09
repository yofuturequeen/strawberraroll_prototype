let player;
let strawberry, poison;
let strawberries, poisons;
let cakeVid;
let collectSound, overSound, themeSound;

function preload() {
  collectSound = loadSound('audio/collect.wav');
  overSound = loadSound('audio/over.mp3');
  themeSound = loadSound('audio/theme.mp3');
  cakeVid = loadImage('cake_making.gif');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strawberries = new Group();
  poisons = new Group();
  
  player = new Sprite(200, 200, 40, 40);
  player.color = 'white';
  player.textColor = 'blue';
  player.text = 'player';
  
  themeSound.play();
}

function draw() {
  background(209, 240, 255);
  
  
  if (frameCount % 50 == 0) {
    createStrawberry();
  }
  
  if (frameCount % 80 == 0) {
    createPoison();
  }
  

  if (player.overlaps(strawberries)) {
    strawberries.remove();
    collectSound.play();
  } if (player.overlaps(poisons)) {
    themeSound.stop();
    strawberries.removeAll();
    poisons.removeAll();
    overSound.play();
    image(cakeVid, 0, 0);
  }
  // player.overlap(strawberries, collect);
  
  player.moveTowards(mouse, 1);
}

function createStrawberry() {
  strawberries = new Group();
  let strawberry = new Sprite(random(width), random(height));
  strawberry.d = 10;
  strawberry.velocity.x = -3;
  strawberry.color = 'red';
  strawberries.add(strawberry);
}

function createPoison() {
  poisons = new Group();
  let poison = new Sprite(random(width), random(height), 20, 20);
  poison.velocity.x = -3;
  poison.color = 'green';
  poisons.add(poison);
}
function collect(player, strawberry) {
  collectSound.play();
  strawberry.remove();
}

function gameOver(player,) {
  themeSound.stop();
  overSound.play();
  strawberries.removeAll();
  poisons.removeAll();
  //noLoop();
  image(cakeVid, 0, 0);
}
