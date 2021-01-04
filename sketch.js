const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball,ground;


function setup() {
  createCanvas(400,400);
 
  engine=Engine.create();
  world=engine.world;

  var ground_options={
  isStatic:true  
  }
  var ball_options={
  restitution:1.0
}
  ground=Bodies.rectangle(200,380,30,20,ground_options);
  World.add(world,ground);
  ball=Bodies.circle(150,200,50,ball_options); 
  World.add(world,ball);
  
 
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
 ellipse(RADIUS);
 ellipse(ball.position.x,ball.position.y,50,50);

}