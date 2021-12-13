var x = 50;
var y = 50;
var diameter = 25; 
var mousex = 0;
var mousey = 0;
var s = 83;
var w = 87; 
var a = 65;
var d = 68;

var myXs = [];
var myYs = [];
var myDiameters = [];

function setup()
{
    createCanvas(800,600);
    var x = 50; 
    var y = 50;
    var diameter = 25;
    for(var i = 0; i < 10; i++)
    {
        myXs[i] = getRandomNumber(800);
        myYs[i] = getRandomNumber(600);
        myDiameters[i] = getRandomNumber(100);
        myXs[1] = 150;
        myYs[1] = 150;
        myDiameters[1] = 125;
        myXs[2] = 250;
        myYs[2] = 250;
        myDiameters[2] = 75; 
        x += 50;
        y += 50;
        diameter += 25;
    }
}

function draw()
{
    background(50);

    fill(300,600,2);
    circle(x, y, diameter);

    controlCircle();
    rect(mousex, mousey, 10, 40);

    for(var i = 0; i < myXs.length; i++)
    {
        ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, 50, 120, 120, 50, 120);
    }
}

function controlCircle()
{
    if (x >= 300)
    {
        x = 50;
    } 

    if (y >= 300)
{
    y = 50;
}
if (keyIsDown(s))
{
    y += 10;
}
else if (keyIsDown(w))
{
    y -= 10;
}
if (keyIsDown(d))
{
    x += 10;
}
else if (keyIsDown(a))
{
    x -= 10;
}

    changeDiameter();
} 

function changeDiameter()
{
    if (diameter < 200)
    {
        diameter += 2;
    }
    else if (diameter >= 200) 
    {
        diameter = 25;
    }
} 

function mouseMoved()
{
    mousex = mouseX;
    mousey = mouseY;
} 

function getRandomNumber(number)
{
    return Math.floor(Math.random()*number)+10;
} 

function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green, outer_blue, inner_red, inner_green, inner_blue) 
{
    fill(outer_red,outer_green, outer_blue);
    circle(x,y,outer_diameter);
    fill(inner_red, inner_green, inner_blue);
    circle(x,y,inner_diameter);
}