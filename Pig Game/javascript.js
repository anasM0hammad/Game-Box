
var score = [0 , 0];       //Global score
var roundScore = 0;     //round score
var current = 0;        //current player  
var dice;
var gameRunning = true;
var animation = 0;

document.getElementById("rotate").onclick = function(){
    dice = Math.floor(Math.random()*6 + 1);
    document.querySelector("#dice-img").src = "dice-"+dice+".JPG";
    
    if(animation === 0){
      document.querySelector("#dice-img").classList.add("tada");
      document.querySelector("#dice-img").classList.remove('shake');
      animation=1;      
    }
    
    else{
        document.querySelector("#dice-img").classList.remove('tada');
        document.querySelector("#dice-img").classList.add('shake');
       
        animation = 0;
        
    }
}




function game() {
    
    score = [0,0];
    roundScore = 0 ;
    current=0;
    gameRunning = true;
    
    document.querySelector(".score-0").textContent = "0";
    document.querySelector(".score-1").textContent = "0";
    document.querySelector(".current-0").textContent = "0";
    document.querySelector(".current-1").textContent = "0";

   
}

 
game();
