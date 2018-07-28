
 var ctx = document.getElementById("ctx").getContext("2d") ;
 
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
 	radius : 10
 };

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



 startGame = function(){
 
  base.x = 160 ;
  base.y = 250 ;

  ball.x = base.x + 35 ;
  ball.y = base.y - 10 ;

  drawBall();
  drawBase();
 
   
 }

 startGame() ;