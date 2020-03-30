var r = 0;
var g = 50;
var b=255;

function setup(){
 createCanvas(1200,400);
}

function draw(){
r=map(mouseX,0,1200,200,255)
g=map(mouseX,0,1200,50,100)
b=map(mouseX,0,1200,110,255)

background(r,g,b)

ellipse(mouseX,100,10,10)



}