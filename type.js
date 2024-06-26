let string = 'Although we had through the memories learned about the pain of loss and loneliness, now we gained, too, an understanding of solitude and its joy.';

let currentCharacter = 0;

let pageMargin = 300;

let font;

function preload (){
    font = loadFont ('Caveat-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  let currentString = string.substring(0, currentCharacter);
  
  push();
  fill(0);
  noStroke();
  rect(pageMargin, pageMargin, width - pageMargin*2, height - pageMargin);
  pop();
  
  push();
  textSize(70);
  fill("white");
  textFont(`Caveat-VariableFont_wght`);
  textLeading(110);
  textAlign(LEFT, TOP);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin*2, height - pageMargin);
  pop();
  
  currentCharacter += 0.3;
}