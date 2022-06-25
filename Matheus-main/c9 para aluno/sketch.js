var box;



function setup() {
  createCanvas(600,600);
  
  box=createSprite(300,300,50,50);
  box.shapeColor="fuchsia"



}

function draw() 
{
  background(0);

  if (keyDown("right")) {
    box.x=box.x+5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.x=box.x-5;
  }

  if (keyDown("space")) {
    background("white")
  }

  if (keyDown('up')) {
    box.y-=5 
    
  }
 
if (keyIsDown(DOWN_ARROW)) {
  box.y+=5
}

  drawSprites();
}




