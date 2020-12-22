PLAY=1;
END=0;
var gameState=PLAY
var ground,groundImage;
var plane1,planeImage;


function preload(){
  
  groundImage=loadImage("ground.png");  
  planeImage = loadImage("plane.png")
  obstacleImage = loadImage ("obstacle.png")
  obstacleImage1 = loadImage ("obstacle2.png") }


function setup() {
  createCanvas(900,600)
  
    ground = createSprite(600, 300, 900, 20);
    ground.scale = 2;
    ground.addAnimation("background.png", groundImage);
    ground.x = ground.width / 2; 
  
  plane1 = createSprite(300,300,10,12) 
  plane1.addImage("plane.png",planeImage);
 
  obstacleGroup = new Group();
  obstacleGroup1 = new Group();  }

function draw() {
  background("black");
  
  if(gameState===PLAY){
  if (ground.x < 0) {
  ground.x = ground.width / 2;}
 
  if(keyDown("space")){
     ground.velocityX = -2;
     plane1.velocityY=3
    Spawnobstacle();
    Spawnobstacle1();}
  
  if(keyDown("up_arrow")){
    plane1.velocityY=-2   }  }
  
  
  
 if(plane1.y>600  ||plane1.y<0) {
   ground.velocityX=0  
   plane1.destroy();
    gameState=END;}             
  
 

   
  
   
  drawSprites();
    if(gameState===END){
    stroke("red");
    fill("yellow");
    strokeWeight(4);
    textSize(30);
    text ("GAMEOVER",200,250);  }}


  