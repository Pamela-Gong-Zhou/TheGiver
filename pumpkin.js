let draft, ready;

function preload (){
  ready = loadImage ('pumpkin.jpg');
  draft = loadImage ('bwpumpkin.jpg');
  
}
function setup() {
  createCanvas(800, windowHeight);
  image (ready, 0, 0);
  image (draft, 0, 0);
}

function mouseDragged() {
  copy (ready, mouseX, mouseY, 50, 50, mouseX, mouseY, 50, 50);
}