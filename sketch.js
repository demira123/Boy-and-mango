
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;



var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,120,30)
	mango3=new mango(1100,100,20);
	mango4=new mango(1100,150,30)
	mango5=new mango(1100,100,10);
	mango6=new mango(1100,170,30)
	stoneobj=new stone(970,150,500)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  
  image(boy ,200,340,200,300);
  if(stoneobj.isTouching(treeObj||mango1||mango2||mango3||mango4||mango5||mango6)){
	textSize(40);
	fill("white");
	text("Press space to restart!",200,200)
  }
    

  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneobj.display();
  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stoneobj.fly();
}

function detectCollision(){
	detectCollision(stoneobj,mango1);
	detectCollision(stoneobj,mango2);
	detectCollision(stoneobj,mango3);
	detectCollision(stoneobj,mango4);
	detectCollision(stoneobj,mango5);
	detectCollision(stoneobj,mango6);
}
function keyPressed(){
    if(keyCode===32){
	   matter.Body.setPosition(stoneobj.body, {x:235,y:420})
	   launcherObj.attach(stoneObj.body)
    }
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}


}