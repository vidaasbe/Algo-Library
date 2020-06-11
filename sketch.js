var fixedRect, movingRect, playRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  playRect = createSprite(200,700,50,70);
  playRect.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  playRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  bounceOff(playRect, fixedRect);
  
if(isTouching(playRect, movingRect)){
  playRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}

else{
  playRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

  drawSprites();
}

