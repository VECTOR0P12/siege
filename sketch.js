const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, polygon, block;
var polygon_img;

function preload(){
    polygon_img = loadImage(polygon.png); 

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    polygon = Bodies.circle(50,200,20);
    world.add(world,polygon);
   sling = new SlingShot(polygon.body,{x:200, y:50});
   
}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    sling.display(); 
    polygon.display(); 
    imageMode(CENTER)
    image(polygon_img, polygon.position.x,polygon.position.y,40,40);  
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body);
    
    }
}
