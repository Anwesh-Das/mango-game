
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var ground;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{

}

function setup() {
	createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,1200,10);
	tree = new Tree(800,540,40,10);
	stone = new Stone(80,500,40);
	mango1 = new Mango(800,200,60);
	mango2 = new Mango(660,160,60);
	mango3 = new Mango(580,200,60);
	mango4 = new Mango(720,120,60);
	mango5 = new Mango(740,180,60);
	mango6 = new Mango(640,100,60);
	mango7 = new Mango(560,120,60);
  mango8 = new Mango(500,200,60);
  
  boy = new Boy(stone.body,{x:80, y:480});

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("white");

  boy.display();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  this.boy.fly();
}

function keypressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(stone.body,{x:235,y:420});
     launcherObject.attach(stone.body);
  }
}

function detectollision(stone,mango){
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance <= mango.r+stone.r){
     Matter.Body.setStatic(mango.body,false);
  }
}