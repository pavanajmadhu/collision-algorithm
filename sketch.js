function setup() {
  createCanvas(800,400);
 mbox=createSprite(400,200,80,30);
 box=createSprite(500,200,40,70);
 mbox.debug=true;
 box.debug=true;
}

function draw() {
  background(255,255,255);  
  mbox.x=mouseX;
  mbox.y=mouseY;
  console.log(mbox.x-box.x);


  if(mbox.x-box.x<mbox.width/2 + box.width/2 &&
     box.x-mbox.x<mbox.width/2 + box.width/2 &&
     
    mbox.y-box.y<mbox.height/2+box.height/2&&
    box.y-mbox.y<mbox.height/2+box.height/2)
     {
    mbox.shapeColor="red";
    box.shapeColor="red";
  }
  else{
    mbox.shapeColor="green";
    box.shapeColor="green";
  }
  

  drawSprites();

}