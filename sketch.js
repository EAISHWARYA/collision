var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=-5;
  fixedRect.velocityX=5;
}

function draw() {
  background(0,0,0);  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.velocityX=-(movingRect.velocityX);
    fixedRect.velocityX=-(fixedRect.velocityX);
  }


  
  drawSprites();
}
