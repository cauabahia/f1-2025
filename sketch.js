var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, estadobob;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var contagemdevettel,c,b,a
var gaz,coin,capa,pizza
function preload() {
  backgroundImage = loadImage("planodefundo.png");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  track = loadImage("track.jpg");
  c= loadImage("kapa.png");
 a = loadImage("gas.png");
 b= loadImage("bit.png");
 pizza = loadImage("life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (contagemdevettel=== 2) {
    game.update(1);
  }

  if (estadobob === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
