
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box;
var ball;
function preload()
{
	ball = createSprite(100,350,50,20);
	ball.shapeColor="blue";
	
}

function setup() {
	createCanvas(1500, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red");


	 
	boxPosition = width/2-100;
	boxY = 610;

	boxleftSprite = createSprite(boxPosition,boxY,20,100);
	boxleftSprite.shapeColor="yellow";

	boxLeftBody = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	World.add(world, boxLeftBody);

	boxBase = createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor="yellow";

    boxBottomBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatic:true});
	World.add(world, boxBottomBody);

	boxleftSprite = createSprite(boxPosition+200,boxY,20,100);
	boxleftSprite.shapeColor="yellow";

	boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  
  drawSprites();
 
}



