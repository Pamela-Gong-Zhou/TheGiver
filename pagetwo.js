var xspeed = 5;
var xpos = 130;

function setup() {
  createCanvas(1345, windowHeight);
}

function draw() {
  background(0);
  frameRate(12);
  stroke("white");

  text("You are at: "+mouseX, mouseX + 35, mouseY);
  text("You are at: "+mouseY, mouseX - 20, mouseY + 45);
  noFill();
  rectMode (CENTER);
  rect (mouseX, mouseY, 50, 50);

  var x = 130
  while (x <= width){

    //outer eye
    fill("white");
    ellipse(x, 250, 250, 180);

    //eyes
    fill(220);
    ellipse(x, 250, 165, 165);
    noStroke();
    x = x + 270;
  }

  //pupil#1
  fill(0);
  ellipse (xpos, 250, 145, 145);

  if (xpos > 135){
    xspeed = -2;
  }

  if (xpos < 125){
    xspeed = 2;
  }

  xpos += xspeed;

  //pupil#2
  fill(0);
  ellipse(xpos + 270, 250, 145, 145);

  //pupil#3
  fill(0);
  ellipse(xpos + 540, 250, 145, 145);

  //pupil#4
  fill(0);
  ellipse(xpos + 810, 250, 145, 145);

  //pupil#5
  fill(0);
  ellipse(xpos + 1080, 250, 145, 145);

  if (mouseIsPressed){
    var x = 130
  while (x <= width){

    //outer eye
    fill("red");
    ellipse(x, 250, 250, 180);

    //eyes
    fill("white");
    ellipse(x, 250, 165, 165);
    noStroke();
    x = x + 270;
  }

  //pupil#1
  fill(0);
  ellipse (xpos, 250, 145, 145);

  if (xpos > 135){
    xspeed = -2;
  }

  if (xpos < 125){
    xspeed = 2;
  }

  xpos += xspeed;

  //pupil#2
  fill(0);
  ellipse(xpos + 270, 250, 145, 145);

  //pupil#3
  fill(0);
  ellipse(xpos + 540, 250, 145, 145);

  //pupil#4
  fill(0);
  ellipse(xpos + 810, 250, 145, 145);

  //pupil#5
  fill(0);
  ellipse(xpos + 1080, 250, 145, 145);
  }

}

