function setup() {
    createCanvas (windowWidth, windowHeight);
    background (0);
  }

function draw(){
    fill("white");
    text('The End?', mouseX, mouseY);
    textSize(50);

    if (mouseIsPressed){
        background(0);
    }
}