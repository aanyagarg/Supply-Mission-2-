var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomRect,leftRect,rightRect;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)

	bottomRect=createSprite(400,height-40,200,20);
	bottomRect.shapeColor="red";

	leftRect=createSprite(310,600,20,100);
	leftRect.shapeColor="red";

	rightRect=createSprite(490,600,20,100);
	rightRect.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	boxLeftBody = Bodies.rectangle(310,600,20,100,{isStatic:true})
	World.add(world,boxLeftBody);

	boxRightBody = Bodies.rectangle(490,600,20,100,{isStatic:true})
	World.add(world,boxRightBody);

	boxBottomBody = Bodies.rectangle(400,height-55,200,20,{isStatic:true})
	World.add(world,boxBottomBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



