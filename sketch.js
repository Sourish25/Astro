var bg,bgImg;
var sleep,brush,gym,eat,drink,bath,training;
var astro;

function preload(){
  bgImg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  //move = loadAnimation("images/move.png","images/move1.png");
  training = loadAnimation("images/gym12.png","images/gym11.png");
}

function setup() {
  createCanvas(1536,721);
  bg = createSprite(1536/2,721/2,50,50)
  bg.addImage(bgImg);
  bg.scale = 0.25

  astro = createSprite(1536/2,500,50,50);
  astro.addAnimation("sleeping",sleep);
  astro.scale = 0.15;

  


}

function draw() {
  background("cyan");  
  
  if(keyDown("UP_ARROW")){
  astro.addAnimation("brushing",brush);
  astro.changeAnimation("brushing");
  astro.y=500;
  astro.x=500;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
  astro.addAnimation("gymming",gym);
  astro.changeAnimation("gymming");
  astro.y=550;
  astro.x = 650;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
  astro.addAnimation("eating",eat);
  astro.changeAnimation("eating");
  astro.y=550;
  astro.x = 650;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astro.addAnimation("bathing",bath);
  astro.changeAnimation("bathing");
  astro.y=520;
  astro.x = 1100;
  astro.velocityX = 0;
  astro.velocityY = 0;
}

if(keyDown("m")){
  astro.addAnimation("training",training);
  astro.changeAnimation("training");
  astro.y=550;
  astro.x = 650;
  astro.velocityX = 0;
  astro.velocityY = 0;
}
  
  
  drawSprites();
  textSize(30);
  fill(255);
  text("Instructions:",160,50);
  textSize(15);
  fill(255);
  text("Up Arrow = Brushing",160,70);
  text("Down Arrow = Gymming",160,90);
  text("Left Arrow = Eating",160,110);
  text("Right Arrow = Bathing",160,130);
  text("m key = training",160,150);
  
  
}

