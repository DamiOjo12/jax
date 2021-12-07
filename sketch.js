
function preload(){
  //pre-load images
  jake_running = loadAnimation("Runner-1.png","Runner-2.png");
  groundImage=loadImage("path,png")
  coinImage=loadImage("coin.png")
  enegryImage=loadImage("energyDrink.png")
  powerImage=loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground=createSprite(200,-100)
  ground.addAnimation("path",groundImage)
  ground.scale=0.9
  ground.velocityY=8
  ground.tint="yellow"

  coin = createSprite(200,10)
  coin.addAnimation("coin",coinImage)
  coin.scale=0.3
  coin.velocityY=8;

  Runner1=createSprite(200,300)
  Runner1.addAnimation("running",runner1_running)
  Runner1.scale=0.6

  bomb=createSprite(200,-100);
  bomb.addAnimation("bomb",bombImage)
  bomb.scale=0.05
  bomb.velocityY=8
  bomb.tint=rgb(255,0,0);

  invisbleGround=createSprite(370,200,100,400);
  invisbleGround.visible=false;

  invisbleGround2=createSprite(40,200,100,400);
  invisbleGround2.visible=false

  enegry=createSprite(200,-2000)
  enegry.addAnimation("enegry",enegryImage);
  enegry.scale=0.05;
  enegry.velocityY=10;

}

function draw() {
  background(0);

}
