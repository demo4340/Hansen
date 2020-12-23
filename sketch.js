//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var MyEngine,world,object;

function setup() {
  var canvas = createCanvas(400,400);
  MyEngine = Engine.create();
  world = MyEngine.world;
  
  var options = {
    isStatic : true
  }
  
  object = Bodies.rectangle(200,100,50,50,options);
  World.add(world,object);
 
 
}

function draw() {
  background("black");  
  Engine.update(MyEngine);
  rectMode (CENTER);
  rect(object.position.x,object.position.y,50,50);
}