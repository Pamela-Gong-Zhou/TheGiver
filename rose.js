let draft, ready;
var img;

function preload(){
  ready = loadImage ('rose.jpg');
  draft = loadImage ('bwrose.jpg');
  img = loadImage('Brush.png');
}

function setup() {
  createCanvas(600, windowHeight);
  noCursor(); 
  cursor('Brush.png', 25, 25); 
  image (ready, 0, 0);
  image (draft, 0, 0);
}
  
function mouseDragged() {
  copy (ready, mouseX, mouseY, 50, 50, mouseX, mouseY, 50, 50);
}