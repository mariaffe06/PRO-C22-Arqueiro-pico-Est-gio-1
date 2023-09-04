const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImg = loadImage("./assets/base.png");
  playerImg = loadImage("./assets/player.png");
  playerArcherImg = loadImage("playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world, playerBase);

  //criar corpo do jogador
  player = Bodies.rectangle(250, playerBase.position.y - 160,50,180, options);
  World.add(world,player);

  //criar braço do jogador
  playerArcher = Bodies.rectangle(250, 300, 50, 180, options);
  World.add(world,playerArcher);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  //exibir a imagem do jogador usando a função image()
  image(baseimage, playerBase.position.x, playerBase.position.y,180,150)

  //exibir a imagem da base do jogador usando a função image()
  image(playerimage, player.position.x, player.position.y,50,180)

  //exibir a imagem do braço do jogador
  image(playerArcherImg, playerArcher.position.x, playerArcher.position.y,50,180)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
