var backgroundImg;
var tomImg1, tomImg2, tomImg3;
var jerryImg1, jerryImg2, jerryImg3;
var tom, jerry;


function preload() {
    backgroundImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870, 600);
    tom.addAnimation("sleeping_tom", tomImg1)
    tom.scale = 0.2;
    jerry = createSprite(200, 600);
    jerry.addAnimation("standing_jerry", jerryImg1)
    jerry.scale = 0.15;

}

function draw() {

    background(backgroundImg);
    if (tom.x-jerry.x < (tom.width - jerry.width)/2 ) {
        tom.velocityX = 0;
        tom.addAnimation("collided", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("collided", tomImg3);
        jerry.addAnimation("collided", jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("collided", jerryImg3);
    }

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW) {
      tom.velocityX = -5;
      tom.addAnimation("running", tomImg2);
      tom.changeAnimation("running", tomImg2);
      jerry.addAnimation("tesing", jerryImg2);
      jerry.changeAnimation("tesing", jerryImg2);
  }


}
