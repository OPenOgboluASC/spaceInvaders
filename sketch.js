function setup(){
    frameRate(60);
    createCanvas(1000,700);
}

let playerX = 475;
let isShooting = false;
let y = 600;

function draw(){
    background(0);
    
    //PLayer
    fill(255);
    rect(playerX,600,50,50);
    if(keyIsDown(LEFT_ARROW))
        playerX -= 20;
        if(playerX < 50)
            playerX = 50;
        console.log(isShooting);
    if(keyIsDown(RIGHT_ARROW))
        playerX += 20;
        if(playerX > 900)
            playerX = 900;
        console.log(isShooting);

    //Shooting
    if(keyCode === 32 && isShooting == false){
        isShooting = true;
        while(isShooting && y > 0){
            console.log(y + " " + isShooting);
            y -= 100;
            rect(playerX + 15,y,20,20);
        }
        y = 600;
        isShooting = false;
    }
}