let pig;

function setup() {
  createCanvas(400, 400);
  pig = loadImage("images/pd (2).png");
}

function draw() {
  background(199, 243, 240);
  image(pig, mouseX, mouseY, 65, 65);
}
