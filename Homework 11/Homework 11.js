var characterX = 100;
var characterY = 100;
var w = 87;
var s = 83; 
var a = 65 
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup() {
  createCanvas(500, 600);
  fill(120,130,140); 
circle(mouseShapeX, mouseShapeY, 25);
}

function draw() {
  background(220,80,11);
  stroke(0) 
  fill(0)
  rect(0,0,width,10);
  rect(0,0,10,height-50);
  rect(0,0,width,10);
  rect(0,height-10,width,10);
  rect(width-10,0,10,height);
  
  textSize(24)
  text("EXIT",width-490,height-75); 
  
  fill(85,40,127);
  square(characterX,characterY,25) 
  
  if(keyIsDown(w))
    {
      characterY -= 15;
    }
  if(keyIsDown(s))
    {
      characterY += 15;
    } 
  if(keyIsDown(a)) 
    {
      characterX -= 15;
    } 
  if(keyIsDown(d)) 
    {
      characterX += 15;
    }
  
  fill(8,152,26) 
  circle(shapeX, shapeY, 10);
  
  shapeXSpeed = Math.floor(Math.random) * (Math.floor(Math.random() * 5)) + 1;
  shapeYSpeed = Math.floor(Math.random) * (Math.floor(Math.random() * 5)) + 1;
  
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
 
   if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
  
} 

if(characterX > "width" && characterY > "width" -50) 
  {
    fill(0)
    stroke(5)
    textSize(24);
    text("Victory!", width/2-50, height/2-50); 
  } 

function mouseClicked() 
{
 mouseShapeX = mouseX;
 mouseShapeY = mouseY;
  } 
