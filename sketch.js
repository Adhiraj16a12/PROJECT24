const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var cannon,ball;
var engine, world;

function setup() 
{
  createCanvas(900, 550);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450, 530, 900, 50);
  cannon = new Cannon(90,430,60,20);
  ball = new Ball(600,450,20);
  ball2 = new Ball(120,450,20);
  ball3 = new Ball(500,450,20);
  

}

function draw() 
{
  background("green");
  Engine.update(engine);
  cannon.display();
  ball.display();
  ball2.display()
  ground.display();
  ball3.display();
}
