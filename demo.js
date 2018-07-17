function setup (){
    createCanvas(800,500);
    background(225);
    
}
let spriteY= 425;
let obstacleX=350;
let obstacleX1=550;
let obstacleX2=750;
let obstacleY=[412,400,387];
let rise=0;
let ground=true;
let rising = false;
let falling=false;
let riseSpeed=6;
let fallSpeed=5;
let obstacleSpeed=2;
let value=0;
let globalCeiling=300;
let intro= true;
let replay=false;
let gameState=[true,false,false];
function draw(){
    if (gameState[0]===true){
introduction();
    }
    if(gameState[1]===true){
    var score = value;
    background(225);
    noStroke();
    fill(205);
    rect(0,450,800,60);
    sprite(spriteY,25,25);
    fill(0);
    textSize(40);
    text(Math.floor(score),750,50);
    gravity();
   obstacles(obstacleX,obstacleY[0]);

   obstacles(obstacleX2,obstacleY[2]);
    losing();
    spriteY=spriteY+rise;
    obstacleX=obstacleX-obstacleSpeed;
   
    obstacleX2=obstacleX2-obstacleSpeed;
    value+=0.01;
    comeback();
    }
    if(gameState[2]===true){
       lost();
        
    }
 
}
    

function sprite(y,w,h){
    strokeWeight(0);
    fill(0,225,0);
    rect(175,y,w,h);
}
function gravity(){
    if(keyIsDown(UP_ARROW)&&ground===true){
        ground = false;
        rising=true;
        
    }
    if(spriteY<=globalCeiling&&ground==false){
        rising=false;
        falling=true;
    
    }
   
    if(spriteY>425){
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
// function keyReleased(){
//     if(falling===true){
//     globalCeiling=300;
//     }
    
// }
function losing(){
   
    if(obstacleX>187&&obstacleX<212&&obstacleY[0]<spriteY+25){
       
        gameState[1]=false;
        gameState[2]=true;
        value=0;

    }
    
    if(obstacleX2>187&&obstacleX2<212&&obstacleY[2]<spriteY+25){
        
        gameState[1]=false;
        gameState[2]=true;
        value=0;
    }
    
    
}

function comeback(){
    if(obstacleX<0){
        obstacleX=800;
        obstacleSpeed++;
    }
    if(obstacleX1<0){
        obstacleX1=800;
        
    }
    if(obstacleX2<0){
        obstacleX2=800;
    
    }
}
function introduction(){
background('green');
fill('red');
textSize(72);
text('Hopper',275,250);
strokeWeight(4);
rect(350,350,100,40);
fill(0);
textSize(20);
text("play",377,375);

}
function mousePressed(){
    if(mouseX>350&&mouseX<450&&mouseY>350&&mouseY<390){
        gameState[0]=false;
        gameState[1]=true;
    }
    if(mouseX>100&&mouseX<200&&mouseY>350&&mouseY<390){
        obstacleX=350;
        obstacleX2=750;
        obstacleSpeed=2;
        gameState[2]=false;
        gameState[1]=true;
    }
}
function lost(){
    background(0);
    fill(255);
    text("You Lost!",100,250);
    score=0;
    strokeWeight(4);
    rect(100,350,100,40);
    fill(0);
    textSize(20);
    text("replay",122,375);
    
}