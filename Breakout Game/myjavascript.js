
 var ctx = document.getElementById("ctx").getContext("2d") ;
 var tileList , noOfTiles  ;
 var base = {
   
    x : 0,
    y: 0,
 	height : 15 ,
 	width :  75 ,
 	color : "blue" ,
 	left : false,
 	right : false
 };

 var ball = {
   
    x:0,
    y:0,
 	color : "red" ,
 	radius : 6,
 	spdX : -4,
 	spdY : -4
 };

 var tile = {
 
 	color : "green",
 	height : 12 ,
 	width : 30
 };

 document.onkeydown = function(event){
 	if(event.keyCode == 37){
 		base.left = true ;
 		base.right = false;
 	}

 	else if(event.keyCode == 39){
 		base.left = false ;
 		base.right = true;
 	}
 }

 document.onkeyup = function(event){
 	if(event.keyCode == 37){
 		base.left = false ;
 	}

 	else if(event.keyCode == 39){
 		base.right = false ;
 	}
 }

  drawBase = function(){
  	ctx.save();
  	ctx.fillStyle = base.color ;
  	ctx.fillRect(base.x , base.y , base.width , base.height);
  	ctx.restore();
  }

  drawBall = function(){
  	ctx.save();
  	ctx.fillStyle = ball.color ;
  	ctx.beginPath();
  	ctx.arc(ball.x , ball.y , ball.radius , 0 , 2*Math.PI) ;
  	ctx.fill();
  	ctx.restore();
  }

  drawTile = function(t , i){
  	ctx.save();
  	ctx.fillStyle = tile.color ;
  	ctx.fillRect(t.x ,t.y , tile.width , tile.height);
  	ctx.restore();
  }

  updateBasePosition = function(){

  	if(base.left){
  		base.x = base.x - 5 ;
  	}

  	else if(base.right){
  		base.x = base.x + 5 ;

  	}

  	if(base.x <= 0){
  		base.x = 0 ;
  	}

  	if(base.x >= 325){
  		base.x = 325 ;
  	}
  }

  updateBallPosition = function(){

   ball.x = ball.x + ball.spdX ;
   ball.y = ball.y + ball.spdY ;

   if(ball.x <= 0 + ball.radius){
   	ball.spdX = ball.spdX*(-1) ;
   }

   else if(ball.x >= 400 - ball.radius){
   	ball.spdX = ball.spdX*(-1);
   }

   else if(ball.y <=0 + ball.radius){
   	ball.spdY = ball.spdY * (-1) ;
   }

   else if(ball.y >= 300 - ball.radius){
   	ball.spdY = ball.spdY * (-1);
   }

  }

 /* collisionBaseBall = function(base , ball){

     if(ball.y + ball.radius >= 250 && ball.y - ball.radius <= 265 && ball.x + ball.radius >= base.x && ball.x - ball.radius <= (base.x + 75) ){
     	ball.spdY = ball.spdY * (-1)    ;                                                   // changing the direction after collision with base
        
        if(ball.x + ball.radius == base.x || ball.x - ball.radius == (base.x + 75)){
        	ball.spdX = ball.spdX * (-1);
        }

     }
  }*/

  collisionBaseBall = function(base , ball){

  	if(ball.y + ball.radius == 250 && ball.x + ball.radius >= base.x && ball.x - ball.radius <= (base.x + 75)){
  		ball.spdY = ball.spdY * (-1);
  	}

  	else if(ball.y - ball.radius == 265 &&  ball.x + ball.radius >= bae.x && ball.x - ball.radius <= (base.x + 75) ){
         ball. spdY = ball.spdY * (-1);
  	}
     
     else if(ball.y + ball.radius > 250 && ball.y - ball.radius < 265 && ball.x + ball.radius >= base.x && ball.x - ball.radius <= (base.x + 75) ){
     	ball.spdY = ball.spdY * (-1);
     	ball.spdX = ball.spdX * (-1);
     }

  }

  collisionBallTile = function(t , ball){
     if(ball.y + ball.radius >= t.y && ball.y - ball.radius <= t.y + tile.height && ball.x + ball.radius >= t.x && ball.x - ball.radius <= (t.x + tile.width) ){
     	return true ;
     }

  }

  updateGame = function(){
  	ctx.clearRect(0 , 0 , 400 ,300) ;
  	tileList.forEach(drawTile);
  	drawBase();
  	drawBall();
    collisionBaseBall(base , ball)
    updateBasePosition();
  	updateBallPosition();

  	for(key in tileList){
  		if(collisionBallTile(tileList[key], ball)){
  			delete tileList[key];
  			ball.spdY = ball.spdY * (-1);
  			console.log("Hello");
  		}
  	}
  }


 startGame = function(){
 
  base.x = 160 ;
  base.y = 250 ;

  ball.x = base.x + 35 ;
  ball.y = base.y - 10 ;
           
  noOfTiles = 0;

  var tileX = 6 ;
  var tileY = 6 ;
  tileList = [];

  for(var i=1 ; i<6 ; i++){
       tileX = 6 ;
  	for(var j=1 ; j<=11 ; j++ ){
  		tileList[noOfTiles] = {x:tileX , y:tileY};
  		noOfTiles++ ;
  		tileX = tileX + 36 ;
    }
    tileY = tileY + 18 ;

  }

  drawBall();
  drawBase();

  setInterval(updateGame, 30);
 
   
 }

 startGame() ;