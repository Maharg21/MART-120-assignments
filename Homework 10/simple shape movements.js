var redColor = 255;
var greenColor = 204;
var blueColor = 0;

var x = 100;
var y = 50;

var a = 100;
var b = 150;

var v = 300
var z = 380
var diameter = 50; 
var movement = 13;
function setup() {
    createCanvas(500,400);
  movement = Math.floor(Math.random() * 10);
  }
  
  function draw() 
{
    background(128, 130, 87); fill(redColor,greenColor,blueColor);
    rect(x,y,100);
    if(x >= 400 || x<= 0)
      {
        movement*=-1;
      }
    
    x += movement;
  
  fill(0,0,255);
  ellipse(a,b,120);
  if(b >=500 || b<=0)
    {
      movement *= -1;
    }
    b += movement;
    fill('silver') 
    rect (120,160,150,240);
    fill(90,80,70);
    circle (200,120,140); 
    fill('green');
    circle (165, 100, 35);
    fill('green');
    circle (230, 101, 35);
    fill('black') 
    line (140, 60, 180, 80);
    line(250,80,200,80);
    
    fill('gold');
    textSize(18);
    text ('Graham.M',300,380);
  if(v>=400 || v<= 0) 
    { 
     movement *= -1;
    }
  v += movement;
  }