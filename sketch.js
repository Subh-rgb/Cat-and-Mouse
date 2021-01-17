var Cat , CatImg;
var Mouse, MoouseImg;
var Ground,GroundImg;

function preload() {
    //load the images here
    GroundImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    Ground = createSprite(500,400,10,10);
    Ground.addImage(GroundImg)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
