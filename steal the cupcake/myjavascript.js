
var ctx = document.getElementById("ctx").getContext("2d") ;
var background = new Image();
var catcherOne = new Image();
var catcherTwo = new Image();
var catcherThree = new Image();
var catcherFour = new Image();
var blood = new Image();
var food = new Image();
var tile = new Image();

var tileList , foodList ;

var score =0 ;
var blink = 0;
var level = 100 ;
var gameOver = false ;
var foodTimer ;
var intervalVar ;

var foodObject = {
   'width' : 50 ,
   'height' : 50,
   'speed' : 0
};

var tileObject = {
	'width' : 50 ,
	'height' : 20
};

var catcher = {
   'width' : 30,
   'height' : 50,
   'x':200 ,
   'y':250,
   'jump': 0 ,
   'jumpUnit' : 5,
   'onAir' : false,
   'speed' : 0 ,
   'left' : false ,
   'right': false,
   'gravity' : 10,
   'safe': true

};


  background.onload = function() {
  	catcherOne.onload = function(){
  		catcherTwo.onload = function(){
  		  catcherThree.onload = function(){
  		  	catcherFour.onload = function(){
  		  		blood.onload = function(){
  		  			food.onload = function(){
  		  				tile.onload = function(){

                            // our whole game Code after all images loaded
                          drawObject = function(object , x , y , width , height){
                          	ctx.drawImage(object , x , y , width , height) ;
                          }

                          updateGame = function(){
                          	ctx.clearRect(0 , 0 ,500 , 400) ;
                          	drawObject(background , 0 , 0 , 500 , 400);

                          	if(blink == 0){
                          	drawObject(catcherTwo , catcher.x , catcher.y , catcher.width , catcher.height) ;
                          	blink = 1;
                            }

                            else if(blink ==1 ){
                             drawObject(catcherOne , catcher.x , catcher.y , catcher.width , catcher.height) ;
                          	 blink = 0;
                            }

                          	for(var i = 0 ; i<tileList.length ; i++){
                            	drawObject(tile , tileList[i].x , tileList[i].y , tileObject.width , tileObject.height);
                           	}
                          	
                          }


                           startGame = function(){
                           	score = 0;
                           	level = 100 ;
                           	blink = 0 ;
                           	catcher.x  = 100;
                           	catcher.y = 250;
                           	catcher.left = false ;
                           	catcher.right = false ;
                           	catcher.onAir = false ;
                           	catcher.safe = true ;
                           	gameOver = false ;
                           	foodTimer = 0;

                           	foodList = [];
                           	tileList = [];

                           	for(var i=0; i<10 ; i++ ){
                               //tileList.push({'x':i*50 , 'y':400});
                               tileList[i] = {x:i*50 , y:400} ;
                           	}

                           

                           	intervalVar = setInterval(updateGame , 110);

                         }
                           
                    
                          startGame();





  		  					
  		  				}
  		  				tile.src = "tile.png" ;
  		  			}
  		  			
                    food.src = "food.png";
  		  		}
  		  		 blood.src = "blood.png" ;
  		  	}     
  		
  		     catcherFour.src = "catcher4.png";
  	    }
  		   catcherThree.src = "catcher3.png";
      }
  		 catcherTwo.src = "catcher2.png";
  	}
  	catcherOne.src = "catcher1.png";
  }

  background.src = "background.jpg" ;