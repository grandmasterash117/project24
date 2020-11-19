var ground,ball;
var s1,s2,s3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";

    //binSprite=new Dustbin();
	fill('purple');
	ballSprite=ellipse(100,400,150,150);

	s1Sprite=createSprite(960,655,300,10);
	s1Sprite.shapeColor="white";

	s2Sprite=createSprite(810,610,10,100);
	s2Sprite.shapeColor="white";
	
	s3Sprite=createSprite(1110,610,10,100);
	s3Sprite.shapeColor="white";
	
	//ballSprite=new Paper(100,400,100);
   //ballSprite.shapeColor="green";

	Engine.run(engine);
}


function draw() {
	background(0);
  rectMode(CENTER);
  
  drawSprites();
}

/*function keyPressed(){
	if(keyCode===UP_ARROW)
	{
       Matter.Body.applyForce(ballSprite.body,ballSprite.body.position,{x:85,y:-85});
	}
}*/


