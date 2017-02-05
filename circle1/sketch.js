
var speed = 3;

var circle = {
  x:0,
  y:200,
  diameter:100
};

var spot ={
  x:100,
  y:50
};

var col={
  r:0,
  g:0,
  b:255
}

var a = 0;
var z = 160;
// red green blue

var bubbles=[];


function setup() {

createCanvas(800,800)

}

function draw() {


  a=map(mouseX,0,600,0,100);
  z=map(mouseX,0,600,0,255);
  background(a,0,z);
  fill(col.r,0,col.g);
  noStroke()
  ellipse(mouseX,mouseY,circle.diameter,circle.diameter);
  circle.x=circle.x+1;
  

if (mouseIsPressed)
background(random(100));

else
noStroke();
col.r=random(0,100);
col.g=random(0,255);
col.b=0;
spot.x= random(0, width);
spot.y= random(0,height);
size.m=random(40,width);
size.n=random(60,height)
fill(col.r,0,col.b,100);
ellipse(spot.x,spot.y,300,300);

  



}