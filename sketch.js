const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Rubber = new Rubber(110,60,90);
    Stone = new Stone(180,40,90,90);
    Iron = new Iron(300,80,45,45);
  


}

function draw(){
    background("black");
    Engine.update(engine);
    


    plane.display();
    Iron.display();
    hammer.display();
    Stone.display();
    Rubber.display();

    
 
}