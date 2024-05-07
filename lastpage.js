function setup() {
    createCanvas (windowWidth, windowHeight);
    background ("#50C878");
  }

function draw(){
    fill(0);
    textSize(100);
    textFont('Netto Brushes');
    text('This is', width/4.2, height/1.8);


    drawEnd();
    drawStart();

    if (mouseIsPressed){
        background("#50C878");
    }
}

function drawEnd(){
    fill("white");
    textFont('anaphora');
    text('The End?', mouseX, mouseY);
    textSize(100);
}

function drawStart(){
    fill("#50C878");
    textFont('Netto Brushes');
    text('The Beginning...', width/2.4, height/1.8);
}