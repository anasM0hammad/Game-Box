
 var ctx = document.getElementById("ctx").getContext("2d") ;
 ctx.fontStyle = "blue" ;
 ctx.font = "16px comic sans MS";

 var tileList , noOfTiles , score =0 , lives , intervalVal , noOfStrTiles , strTileList , start =0 ;
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

 var strongTile = {
 	color : "blue",
 	width : 30,
    height : 12
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

 //Phone controls
 
 var left = document.getElementById("left");
 var right = document.getElementById("right");

 left.onmousedown = function(){
     base.left = true ;
     base.right = false;
 }
 
 right.onmousedown = function(){
     base.left = false ;
     base.right = true;
 }
 
 
 left.onmouseup = function(){
     base.left = false ;
    
 }
 
 right.onmouseup = function(){
     
     base.right = false;
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

  drawStrongTile = function(t,i){
  	ctx.save();
  	ctx.fillStyle = strongTile.color ;
  	ctx.fillRect(t.x , t.y , strongTile.width , strongTile.height);
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

  checkLives = function(){
  	if(ball.y + ball.radius >= 300 ){
  		lives -- ;
  		 ball.x = base.x + 35 ;
         ball.y = base.y - 10 ;
  		ball.x
  		return true ;
  	}
  }

  gameWin = function(){
  	if(score == 66){
  	ctx.save();
  	ctx.fillStyle = "red";
  	ctx.font = "35px  comic sans MS "; 
  	ctx.fillText("You Win ..!", 110 , 150 );
  	ctx.restore();
  	clearInterval(intervalVal);
  	}
  }

  gameOverMsg = function(){
  	ctx.save();
  	ctx.fillStyle = "red";
  	ctx.font = "35px  comic sans MS "; 
  	ctx.fillText("Game Over ..!", 100 , 150 );
  	ctx.restore();
  	clearInterval(intervalVal);

  }

  updateGame = function(){
  	ctx.clearRect(0 , 0 , 400 ,300) ;
  	tileList.forEach(drawTile);
  	strTileList.forEach(drawStrongTile);
  	drawBase();
  	drawBall();
    collisionBaseBall(base , ball)
    updateBasePosition();
  	updateBallPosition();
  	checkLives();
  	gameWin();

  	for(key in strTileList){
  		if(collisionBallTile(strTileList[key],ball)){
         	delete strTileList[key];
  			ball.spdY  = -ball.spdY ;
  			score++ ;

  		/*	if(ball.spdY < 0){
  				ball.spdY = ball.spdY - 0.4 ;
  			}
  			else{
  				ball.spdY = ball.spdY + 0.4 ;
  			}

  			if(ball.spdX < 0){
  				ball.spdX = ball.spdX - 0.4 ;
  			}
  			else{
  				ball.spdX = ball.spdX + 0.4 ;
  			}*/
  		 
  		}
	}


 

  	for(key in tileList){
  		if(collisionBallTile(tileList[key], ball)){
  			delete tileList[key];
  			ball.spdY = ball.spdY * (-1);
  			score++;
  		}
  	}

  	if(lives <=0){
  		gameOverMsg();
  	}

  	ctx.fillText("Score : "+score , 10 , 285);
  	ctx.fillText("Lives : "+lives , 330 , 285);
  }

    startMsg = function(){
       	ctx.save() ;
       	ctx.fillStyle = "red" ;
       	ctx.font = "28px comic sans MS"
       	ctx.fillText("Click to start" , 100 , 150) ;
        ctx.restore();
         	document.getElementById("ctx").onclick = function(){
       	
       		if(start == 0){
       		startGame();
       		start = 1 ;
       	   }

       	}
       }


 startGame = function(){
 
  base.x = 160 ;
  base.y = 250 ;

  ball.x = base.x + 35 ;
  ball.y = base.y - 10 ;
  start = 1;
  
  noOfStrTiles = 0;         
  noOfTiles = 0;
  score = 0 ;
  lives = 3 ;
  

  var tileX = 6 ;
  var tileY = 24 ;
  var strTileX = 6 ;
  var strTileY = 6 ;
  tileList = [];
  strTileList = [];

  for(var k =1 ; k<=11 ; k++){
  	strTileList[noOfStrTiles] = {x:strTileX , y:strTileY};
  	noOfStrTiles++ ;
  	strTileX = strTileX + 36 ;
  }

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

intervalVal = setInterval(updateGame, 25);
 
   
 }

 if(start == 0){
       	startMsg();
      }
