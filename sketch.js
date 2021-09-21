var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=750; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 8; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,265));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 5; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,365));
  }

  //crea la tercera fila de objetos plinko
  for(var j = 5; j<= width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  //crea la cuarta fila de objetos plinko
  for(var j = 15; j<= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  
  
 
         
    }
  
    

 


function draw() {
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2+10),10,10, ));
    }
  
    
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
   }

}
