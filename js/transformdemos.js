
		  var rotateInterval = null;
		  var rotateDegrees = 0;

		  var scaleInterval = null;
		  var scaleValue = 1.0;
		  var scaleForwards = true;

		  var translateInterval = null;
		  var translateX = 0;
		  var translateForwards = true;
                  var translateFinishing = false;

                  $(function() {

		    // Rotation
		    $('.rotateme').click(function(event) {
		      if( rotateInterval == null ) {
                        rotateInterval = setInterval(
                          function() {
		            
                            rotateDegrees += 3;
                            
                            $('.rotateme').css('-webkit-transform', 'rotate('+(rotateDegrees % 360)+'deg)' );
		            
                            // Finish after 1 rotation
		            if( rotateDegrees >= 360 ) {
                              clearTimeout(rotateInterval);
		              rotateInterval = null;
                              rotateDegrees = 0;
		            }
                          },
                          1
                        );
		      }
		      event.preventDefault();
                    });

		    // Scaling
		    $('.scaleme').click(function(event) {
		      if( scaleInterval == null ) {
		        scaleInterval = setInterval(
		          function() {

                            if( scaleForwards ) { scaleValue += 0.1; }
                            else { scaleValue -= 0.05; }

		            $('.scaleme').css('-webkit-transform', 'scale('+(scaleValue)+')' );

                            if( scaleForwards && scaleValue > 2.5 ) scaleForwards = false;
		            else if( !scaleForwards && scaleValue <= 1.0 ) {
                              // Finish after scaling up and down once
                              clearTimeout(scaleInterval);
                              scaleInterval = null;
                              scaleValue = 1.0;
                              scaleForwards = true;
                            }
		          },
		          10
		        );
                      }
                      event.preventDefault();
		    });

		    // Translation
		    $('.translateme').click(function(event) {
		      if( translateInterval == null ) {
		        translateInterval = setInterval(
		          function() {

                            if( translateForwards ) { translateX += 3; }
                            else { translateX -= 2; }

		            $('.translateme').css('-webkit-transform', 'translateX('+translateX+'px)' );

			    if( translateFinishing && translateForwards && translateX > 0 ) {

                              // Finish after moving forwards, backwards, then back to the beginning
                              clearTimeout(translateInterval);
                              translateInterval = null;
                              translateX = 0;
                              translateFinishing = false;
                              
                            } else if( translateForwards && translateX > 100 ) {
                              translateForwards = false;

                            } else if( !translateForwards && translateX < -100 ) {
                              translateForwards = true; 
                              translateFinishing = true;
                            }

		          },
		          10
		        );
                      }
                      event.preventDefault();
		    });

                  });

