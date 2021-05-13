
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundImg
function preload() {

    changeTime();
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  

	//grounds
ground1=new Ground(400, 390, 800, 20);
ground2=new Ground(600, 200, 170, 15);
ground3=new Ground(400, 300, 170, 15);

//tower1
// layer 1
box1=new Box(550, 190);
box2=new Box(580, 190);
box3=new Box(610, 190);
box4=new Box(640, 190);
// layer 2
box5=new Box(565, 140);
box6=new Box(595, 140);
box7=new Box(625, 140);
//layer3
box8=new Box(580, 90);
box9=new Box(610, 90);

//tower2
//layer1
box10=new Box(350, 270);
box11=new Box(380, 270);
box12=new Box(410, 270);
box13=new Box(440, 270);
//layer2
box14=new Box(365, 230);
box15=new Box(395, 230);
box16=new Box(425, 230);
//layer3
box17=new Box(380,  190);
box18=new Box(410, 190);

box19=new Player(20, 200);

chain=new Chain(box19.body, {x:100, y:200});


  
}


function draw() {
    if(backgroundImg){
  background(backgroundImg);
    }
  Engine.run(engine);
  rectMode(CENTER);
  ground1.display();
  ground2.display();
  ground3.display();
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
  box19.display();
  chain.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(box19.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if (keyCode===32){
        chain.attach(box19.body);
    }
}

async function changeTime(){
    var resp=await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
    var time=await resp.json();
    var dt=time.datetime;
    var d=  dt.slice(11, 13);
    console.log(d);

    if(d>=06&&d<20){
       bg="bg.png";
    }else{
        bg="bg2.jpg";
    }

    backgroundImg=loadImage(bg);
}




