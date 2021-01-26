
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bob1,bob2,bob3,bob4,bob5,roofobject
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
  roofobject= new Roof(width/2,height/4,width/7,20);
  //Create the Bodies Here.
  bobDiameter = 40
  startbobpositionX = width/2;
  startbobpositionY = height/4+500;
bob1 = new Bob(startbobpositionX -bobDiameter*2,startbobpositionY,bobDiameter);
bob2 = new Bob(startbobpositionX -bobDiameter,startbobpositionY,bobDiameter);
bob3 = new Bob(startbobpositionX,startbobpositionY,bobDiameter);
bob4 = new Bob(startbobpositionX + bobDiameter,startbobpositionY,bobDiameter);
bob5 = new Bob(startbobpositionX +bobDiameter*2,startbobpositionY,bobDiameter);


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});



//bobDiameter=r*2;
rope1 = new Rope(bob1.body,roofobject.body,-bobDiameter*2,0);
rope2 = new Rope(bob2.body,roofobject.body,-bobDiameter*1,0);
rope3 = new Rope(bob3.body,roofobject.body,0,0);
rope4 = new Rope(bob4.body,roofobject.body,bobDiameter*1,0);
rope5 = new Rope(bob5.body,roofobject.body,bobDiameter*2,0);

Engine.run(engine);
  
}

function draw() {
//  rectMode(CENTER);
  background("yellow");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
roofobject.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
 drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  }
}


function drawLine(constraint)
{
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}

