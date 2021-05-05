const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var earth;
var backgroundImg;
var doctor;
var corona;
var earthSmilingImage;
var PLAY=1;
var END=0;
var gameState;
var score=0;
var ground;

function preload(){
   backgroundImg=loadImage("Sprites/Background.png");
   earthSmilingImage=loadImage("Sprites/Earth Smiling.png");
}
function setup() {
  var canvas = createCanvas(1800,900);
  engine = Engine.create();
  world = engine.world;

  earth=new Earth(600,300,300)
  doctor=new Doctor(822,240,300,300);
  ground=new Ground();

corona=new Corona(1422,220,200);
 
 // if(keyCode==RIGHT_ARROW){
 //   doctor.body.move(2,0);
 // }
  
  Engine.run(engine);
}

function draw() {
  ground.display();
  background(backgroundImg);
  text(mouseX + ',' + mouseY, 10, 15); 
  fill("white");
  textSize(30);
  text("Score:"+score,196,54);

  Engine.update(engine);
  
  
  earth.display();
  doctor.display();
  corona.display();

  //doctor.body.collide(ground.body);

 

 // if(frameCount%80==0){
 //   corona.display();
 //   corona.body.position.y=Math.round(random(100,300));
 // }
 // if(gameState=="PLAY"){
  //  doctor.body.x=World.mouseX;
  //  doctor.body.y=World.mouseY; 
    //earth.body.addImage(earthSmilingImage);
 // }
 // if(doctor.isTouching(corona)){
  //  gameState=="END";
  //  corona.body.destroyEach();
//}
  //if(gameState=="END"){
 //   earth.body.addImage(earthSmilingImage);
 // }

  
  }
