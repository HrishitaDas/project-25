
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;
var ground;
var dustbinbottom,dustbinleft,dustbinright;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  paper = new Paper();
  ground = new Ground(400,650,800,10);
  dustbinbottom = new Dustbin(590,500,90,0);


  
}

function draw() {
  background("white");
  Engine.update(engine);
  
  paper.display();
  ground.display();
  dustbinbottom.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:180,y:-110});
  }
}