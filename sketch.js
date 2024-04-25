var xspeed = 5;
var xpos = 75;

function setup() {
  createCanvas(835, 500);
}

function draw() {
  
  background(0);
  frameRate(12);
  stroke("white");
  
  text("You are here at: "+mouseX, mouseX + 35, mouseY);
  text("You are here at: "+mouseY, mouseX - 20, mouseY + 45);
  noFill();
  rectMode (CENTER);
  rect (mouseX, mouseY, 50, 50);
  
  var x = 75
  while (x <= width){
    
  //outer eye
  fill("white");
  ellipse(x, 180, 150, 80);
  
   //eyes
  fill(220);
  ellipse(x, 180, 65, 65);
  noStroke();
    
    x = x + 170;
  }
  
  //pupil#1
  fill(0);
  ellipse(xpos, 180, 45, 45);
  
  if (xpos > 80) {
    xspeed = -2;
  }
  
  if (xpos < 70) {
    xspeed = 2;
  }
  
  xpos += xspeed;
  
  //pupil#2
  fill(0);
  ellipse(xpos + 170, 180, 45, 45);
  
  //pupil#3
  fill(0);
  ellipse(xpos + 340, 180, 45, 45);
  
  //pupil#4
  fill(0);
  ellipse(xpos + 510, 180, 45, 45);
  
  //pupil#5
  fill(0);
  ellipse(xpos + 680, 180, 45, 45);

  if (mouseIsPressed){
    
  var x = 75
  while (x <= width){
  //outer eye
  fill("red");
  ellipse(x, 180, 150, 80);  
    
   //eyes
  fill("white");
  ellipse(x, 180, 65, 65);
  noStroke();
  
  x = x + 170;
  }
    
  //pupil#1
  fill(0);
  ellipse(xpos, 180, 45, 45);
  
  if (xpos > 80) {
    xspeed = -2;
  }
  
  if (xpos < 70) {
    xspeed = 2;
  }
  
  xpos += xspeed;
  
  //pupil#2
  fill(0);
  ellipse(xpos + 170, 180, 45, 45);
  
  //pupil#3
  fill(0);
  ellipse(xpos + 340, 180, 45, 45);
  
  //pupil#4
  fill(0);
  ellipse(xpos + 510, 180, 45, 45);  
    
  //pupil#5
  fill(0);
  ellipse(xpos + 680, 180, 45, 45);
  }
}

