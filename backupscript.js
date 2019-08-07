//Variables
let playerlocation = 475
let projectile = 0
let bullet = 400
let shooting = false
//Confirms existence of targets
let alive1 = true 
let alive2 = true
let alive3 = true
//Initial Setup
function setup(){
    createCanvas(1000, 500)
}
//Objects to be drawn in scene every frame
function draw(){
    background(240)
    //rect here will be player character it will use player to process it's x position value
    fill('gray')
    rect(playerlocation, 400, 50, 80)
    fill('red')
    rect(playerlocation, bullet, 20, 20)
    if(alive1 = true){rect(20, 20, 50, 50)}
    if(alive2 = true){rect(475, 20, 50, 50)}
    if(alive3 = true){rect(930, 20, 50, 50)}
     if(shooting) {
         bullet-=10
     }
     if(bullet < 0 || bullet <= 70 && playerlocation > 0 && playerlocation < 70 || bullet <= 70 && playerlocation > 455 && playerlocation < 525 || bullet <= 70 && playerlocation > 910 && playerlocation < 980){
         shooting = false
         bullet = 400
     }
     if(bullet <= 70 && playerlocation > 0 && playerlocation < 70){
        alive1 = false
     }
     if(bullet <= 70 && playerlocation > 455 && playerlocation < 525){
        alive2 = false
     }   
     if(bullet <= 70 && playerlocation > 910 && playerlocation < 980){
        alive3 = false
     }
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        playerlocation -= 10
    }
    if(keyCode === RIGHT_ARROW){
        playerlocation += 10
    }
    if(keyCode === UP_ARROW){
       shooting = true
        
    }
}