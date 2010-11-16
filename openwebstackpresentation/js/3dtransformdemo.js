  
var xAngle = 0, yAngle = 0;

document.addEventListener('keydown', function(e) {
		switch(e.keyCode)
		{
			
			case 65: // a = left
				yAngle -= 90;
				break;
			
			case 87: // w = up
				xAngle += 90;				
				break;
			
			case 68: // d = right
				yAngle += 90;
				break;
				
			case 83: // s = down
				xAngle -= 90;
				break;
		};
		
    if( $('.current .cube').length > 0 ) {
  		$('.current .cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";	
    }

	}, false);
             
  	
