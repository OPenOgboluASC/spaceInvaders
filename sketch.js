  function setup(){
    createCanvas(1000, 500)
}
let playerX = 475;
let i;
let energyY = 400;

function draw(){
    background(255);
    rect(playerX,400,50,50);
    fill('blue');

    //the enemies
    rect(400, 10, 100, 50);
    rect(250, 80, 100, 50);
    rect(400, 80, 100, 50);
    rect(250, 10, 100, 50);
    rect(100, 10, 100, 50);
    rect(100, 80, 100, 50);
    rect(550, 10, 100, 50);
    rect(550, 80, 100, 50);
    rect(700, 10, 100, 50);
    rect(700, 80, 100, 50);
    rect(850, 10, 100, 50);
    rect(850, 80, 100, 50);
    rect(-50, 10, 100, 50);
    rect(-50, 80, 100, 50);
    fill('black');
     
    //projectile
    ellipse(playerX, energyY, 10, 10);

    
    if (keyIsDown(LEFT_ARROW)) {
        playerX -= 20; 
     } else if (keyIsDown(RIGHT_ARROW)) {
         playerX += 20;
     }
    
}

function keyPressed(){
     if(keyCode === UP_ARROW){
           energyY -= 300
     }
     if(keyCode === DOWN_ARROW){
         energyY += 300
     }
    
    }




































