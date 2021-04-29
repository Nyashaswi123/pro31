const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var backgroundIMG;
 
function preload(){



}

function setup() {
  strokeWeight(6)
  createCanvas(700,600);

 engine = Engine.create();
 world = engine.world;
 ground = new Ground(350,575 ,700, 20)
 
 for (var k = 0; k <=width; k = k + 80){
   divisions.push(new Divisions(k, height-divisionHeight/2,5, 270))
 }

 for (var j = 40; j <=width; j=j+50){
   plinkos.push(new Plinko(j,50))}

   for (var j = 45; j <=width-10 ; j=j+55){
    plinkos.push(new Plinko(j,150))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,250))
  }

  wall1=createSprite(05,300,10,600);
  wall2=createSprite(350,595,700,10);
  wall3=createSprite(695,300,10,600);
  
}

function draw() {
  
  strokeWeight(5);
  stroke("white")

  background("black");
 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
    score++;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  

}
