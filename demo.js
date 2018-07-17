function setup (){
    createCanvas(500,500);
    background(225);
    
}
let spriteY= 399;
let obstacleX=350;
let obstacleY=400;
let rise=0;
let ground=true;
let rising = false;
let falling=false;
let riseSpeed=3;
let fallSpeed=5;

function draw(){
    if(losing()===true){
    background(225);
    sprite(spriteY,50,50);
    
    gravity();
   obstacles(obstacleX,obstacleY-);
    
    spriteY=spriteY+rise;
    obstacleX=obstacleX-1;
    }
    else{
        background(0);
        fill(255);
        text("You Lost!",225,250);
    }
}
function sprite(y,w,h){
    strokeWeight(0);
    fill(0,225,0);
    rect(175,y,w,h);
}
function gravity(){
    if(keyIsPressed === true&&keyCode === UP_ARROW&&ground===true){
        ground = false;
        rising=true;
    }
    if(spriteY<200&&ground==false){
        rising=false;
        falling=true;
    }
   
    if(spriteY>400){
        ground=true;
        falling=false;
       
        
    }
    if (falling ===true){
        rise=fallSpeed;
    }
    if (ground===true){
        rise=0;
    }
    if(rising ===true){
        rise=-riseSpeed;
    }
}
function obstacles(x,y){
    strokeWeight(8);
    stroke(255,0,0);
    line(x,y,x,450);

}
