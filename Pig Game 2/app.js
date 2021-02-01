var score ;
var res ;
var player,game;
var prev;

new_game();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(game){

        //1. random dice
        var dice = Math.floor(Math.random()*6 ) + 1;


        // display dice

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        
        //update scores
        if(dice == 6 && prev == 6){
            score[player] = 0;

            turn();
        }
        else if(dice != 1){
            prev = dice;
            res += dice;      
            document.getElementById('current-'+ player).innerHTML = res;
        }
        else{
            
            turn();
        }
    }


});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(game){
        score[player] += res; 
        //update global score
        

        if(score[player] >= 100){
            document.getElementById('score-'+ player).innerHTML = score[player];
            document.getElementById('current-'+ player).innerHTML = 0;
            document.getElementById('name-' + player).innerHTML = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + player + '-panel').classList.add('winner');
            document.querySelector('.player-' + player + '-panel').classList.remove('active');
            game = false;

        }
        else{
            turn();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click',new_game);

function turn(){

        if(game){
            prev = -1;
            document.getElementById('score-'+ player).innerHTML = score[player];
            document.getElementById('current-'+ player).innerHTML = 0;
            res = 0;
            if(player == 1)
                player = 0;
            else
                player = 1;

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
        }


}



function new_game(){
    
   
    score = Array(0 , 0);
    player = 0;
    res = 0;
    game = true;
    prev = -1;

    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').innerHTML = 'Player 1';
    document.getElementById('name-1').innerHTML = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
 
    

}