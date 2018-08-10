
	var ctx = document.getElementById("ctx").getContext("2d");
	var mouseX ;
	var mouseY ;

	var eye1 = {
		x: 82 ,
		y: 210 
	};

	var eye2 = {
       x: 382 ,
       y: 210

	};

	 document.getElementById("ctx").onmousemove = function(mouse){
    	 mouseX = mouse.clientX - document.getElementById("ctx").getBoundingClientRect().left ;
    	 mouseY = mouse.clientY - document.getElementById("ctx").getBoundingClientRect().top ;

    }


	updateEyes = function(){

   ctx.clearRect(0 , 0 , 500 , 450);		
    
    ctx.beginPath();
    ctx.arc(100 , 200 , 30 , 0 , 2*Math.PI);
    ctx.stroke(); 

    ctx.beginPath();
    ctx.arc(400 , 200 , 30 , 0 , 2*Math.PI);
    ctx.stroke(); 

    ctx.beginPath();
    ctx.arc(eye1.x , eye1.y , 14 , 0 ,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(eye2.x , eye2.y , 14 , 0 ,2*Math.PI);
    ctx.fill();

      if(mouseX < eye1.x && mouseY < eye1.y - 30  ){
            
         eye1.y = 190 ;
         eye2.y = 190 ;   
         eye1.x = 82;
         eye2.x = 382;
    }

    else if(mouseX< eye1.x && mouseY >= eye1.y - 30 && mouseY < eye1.y + 30){

    	eye1.y = 200 ;
    	eye2.y = 200 ;
    	eye1.x = 80 ;
    	eye2.x = 380 ;
    }

    else if(mouseX < eye1.x - 30 && mouseY >= eye1.y + 30){
    	eye1.y = 215 ;
    	eye2.y = 215 ;
    	eye1.x = 82 ;
    	eye2.x = 382;
    }

    else if(mouseX > eye1.x  && mouseX <= eye2.x + 30 && mouseY < eye1.y - 30 ){

    	eye1.y = 190 ;
    	eye1.x = 120 ;
    	eye2.y = 190 ;
    	eye2.x = 382 ;
    }

     else if(mouseX > 100 && mouseX < 400 && mouseY > 170 && mouseY < 230){

  	 eye1.x = 120 ;
  	 eye1.y = 200 ;
  	 eye2.x = 378 ;
  	 eye2.y = 200; 
  }

  else if(mouseX >100 && mouseX < 400 && mouseY > 230){

  	eye1.x = 115 ;
  	eye1.y = 215 ;
  	eye2.x = 380 ;
  	eye2.y = 215;
  }

 else if(mouseX > 400 && mouseY < 200  ){

 	eye1.x = 120 ;
 	eye1.y = 190 ;
 	eye2.x = 415 ;
 	eye2.y = 188;
 }

 else if(mouseX > 400 && mouseY > 200 && mouseY < 300){
 	eye1.x = 122;
 	eye1.y = 200 ;
 	eye2.x = 420 ;
 	eye2.y = 200;
 }

 else if(mouseX > 400 && mouseY > 300){
 	eye1.x = 120 ;
 	eye1.y = 215 ;
 	eye2.x = 418 ;
 	eye2.y = 215
 }





  }


 

  setInterval(updateEyes, 40);

   

  