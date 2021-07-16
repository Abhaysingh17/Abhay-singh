var boy , path , leftboun , rightboun , coinImg
var boyImage , pathImage;

function preload(){
  //pre-load images
  boyImage = loadAnimation("Runner-1.png","Runner-2.png")
  pathImage = loadImage("path.png")
  coinImg = loadImage("coin.png")
}

function setup(){
  createCanvas(400,600);
  //create sprites here

  path=createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 4
  path.scale=1.2

  boy = createSprite(180,380,30,30)
  boy.addAnimation("running",boyImage)
  boy.scale=0.08

 coin = createSprite(100,200,80,90)
 coin.addImage(coinImg)
 coin.scale = 0.3

 coin = createSprite(300,200,80,90)
 coin.addImage(coinImg)
 coin.scale = 0.3

 coin = createSprite(200,200,80,90)
 coin.addImage(coinImg)
 coin.scale = 0.3

  leftboun=createSprite(0,0,100,800)
  leftboun.visible = false

  rightboun=createSprite( 410,0,100,800)
  rightboun.visible = false


}

function draw() {
  background(0);
  path.velocityY = 4

  boy.x = World.mouseX

  edges = createEdgeSprites()
  boy.collide(edges[3])
  boy.collide(leftboun)
  boy.collide(rightboun)

   if(path.y > 400){
    path.y = height/5
   }
   drawSprites()
}
