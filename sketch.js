var boy , boy_image;



function preload() {
  boy_image = loadImage("assets/boy_image");
}
function setup() {
  createCanvas(windowWidth , windowHeight);

  boy = createSprite(250 , 550 ,60 , 70);
  boy.addImage(boy_image)

}

function draw() {
  background(255,255,255);  

  text(" x "+World.mouseX +" "+" y "+World.mouseY,World.mouseX,World.mouseY)
  drawSprites();
}