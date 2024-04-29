var xspeed = 5;
var xpos = 75;

function setup() {
  createCanvas(1345, windowHeight);
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
  while (x <= width) {
    
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

  //pupil#6
  fill(0);
  ellipse(xpos + 850, 180, 45, 45);

  //pupil#7
  fill(0);
  ellipse(xpos + 1020, 180, 45, 45);

  //pupil#8
  fill(0);
  ellipse(xpos + 1190, 180, 45, 45);

  //pupil#9
  fill(0);
  ellipse(xpos + 1360, 180, 45, 45);

  
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
    xspeed = -5;
  }
  
  if (xpos < 70) {
    xspeed = 5;
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

  //pupil#6
  fill(0);
  ellipse(xpos + 850, 180, 45, 45);

  //pupil#7
  fill(0);
  ellipse(xpos + 1020, 180, 45, 45);

  //pupil#8
  fill(0);
  ellipse(xpos + 1190, 180, 45, 45);

  //pupil#9
  fill(0);
  ellipse(xpos + 1360, 180, 45, 45);
  }

  // let string = 'Our people made that choice, the choice to go to Sameness. Before my time, before the previous time, back and back and back. We relinquished color when we relinquished sunshine and did away with a difference. We gained control of many things. But we had to let go of others.';

  // let currentCharacter = 0;
  // let pageMargin = 25;

  // let currentString = string.substring(0, currentCharacter);
  // push();
  // fill(0);
  // noStroke();
  // rect(pageMargin, pageMargin, width - pageMargin*2, height - pageMargin);
  // pop();
  
  // push();
  // textSize(12);
  // fill("white");
  // textFont(`Courier`);
  // textLeading(30);
  // textAlign(LEFT, TOP);
  // text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin*2, height - pageMargin);
  // pop();
  
  // currentCharacter += 0.5;  
}

