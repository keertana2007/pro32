const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, base1, base2, polygon, slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18;
var score = 0;
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(0,590,2000,20)
  base1 = new Ground(350,400,230,10)
  base2 = new Ground(700,250,250,10)
  polygon = new Polygon(70,360,40)
  slingshot = new Slingshot(polygon.body,{x:70, y:300});

  box1 = new Box(270, 380, 40, 40)
  box2 = new Box(310, 380, 40, 40)
  box3 = new Box(350, 380, 40, 40)
  box4 = new Box(390, 380, 40, 40)
  box5 = new Box(430, 380, 40, 40)
  box6 = new Box(310, 340, 40, 40)
  box7 = new Box(350, 340, 40, 40)
  box8 = new Box(390, 340, 40, 40)
  box9 = new Box(350, 300, 40, 40)

  box10 = new Box_2(620, 230, 40, 40)
  box11 = new Box_2(660, 230, 40, 40)
  box12 = new Box_2(700, 230, 40, 40)
  box13 = new Box_2(740, 230, 40, 40)
  box14 = new Box_2(780, 230, 40, 40)
  box15 = new Box_2(660, 190, 40, 40)
  box16 = new Box_2(700, 190, 40, 40)
  box17 = new Box_2(740, 190, 40, 40)
  box18 = new Box_2(700, 150, 40, 40) 
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  fill("#C5A8DA")
  textSize(20)
  text("Help Girl Destroy Aliens Press SPACE to try again", 50,50)
  

 

  ground.display();
  base1.display();
  base2.display();
  polygon.display();
  slingshot.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x : mouseX, y:mouseY})
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}