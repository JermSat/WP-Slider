// The Script

	<script type="text/javascript" charset="utf-8">
		
		jQuery(function(){
			
			/* Image Preload Function */
			jQuery("#headerSlider li").each(function(){
				var imageName = jQuery(this).css('background-image');
				imageName = imageName.substring(5);
				imageName = imageName.substring(0, imageName.length - 2);
								
				var img = new Image();
				img.src = imageName;
			});
			
				
			var slideSpeed = 1500;
			
			function slideLeft() {
				
					if(!jQuery('#headerSlider .focused').is(':animated')){
							/* Handels Infinity Lopping */
							if ( jQuery("#headerSlider .focused").is(':last-child') ){
 
								jQuery("#headerSlider li:first-child").addClass("staged");
								
								jQuery("#headerSlider .focused").animate({
									  left: "-100%"
								  }, slideSpeed, function(){
									jQuery(this).removeClass('focused');
									jQuery("#headerSlider li:first-child").addClass('focused');
									jQuery("#headerSlider li:first-child").removeClass('staged');
									jQuery(this).css('left', '');
								});
							}
							else{
									jQuery("#headerSlider .focused").next().addClass("staged");
							
									jQuery("#headerSlider .focused").animate({
										  left: "-100%"
									  }, slideSpeed, function(){
										jQuery(this).removeClass('focused');
										jQuery(this).next().addClass('focused');
										jQuery(this).next().removeClass('staged');
										jQuery(this).css('left', '');
									});
								}//End Else
					}//End If animated
				
				
			} //End slideLeft()
			
			
			
			
			function slideRight() {
				
				
				if(!jQuery('#headerSlider .focused').is(':animated')){
						/* Handels Infinity Lopping */
						if ( jQuery("#headerSlider .focused").is(':first-child') ){
 
							jQuery("#headerSlider li:last-child").addClass("staged");
							
							jQuery("#headerSlider .focused").animate({
								  left: "100%"
							  }, slideSpeed, function(){
								jQuery(this).removeClass('focused');
								jQuery("#headerSlider li:last-child").addClass('focused');
								jQuery("#headerSlider li:last-child").removeClass('staged');
								jQuery(this).css('left', '');
							});
						}
						else{
								jQuery("#headerSlider .focused").prev().addClass("staged");
								
								jQuery("#headerSlider .focused").animate({
									  left: "100%"
								  }, slideSpeed, function(){
									jQuery(this).removeClass('focused');
									jQuery(this).prev().addClass('focused');
									jQuery(this).prev().removeClass('staged');
									jQuery(this).css('left', '');
								});
							}//End Else
				}//End If animated
						
			} //End slideLeft()
 
 
						
			jQuery("#slideRight").click(function(){
				
				slideLeft();
				window.clearInterval(slideLeftTimerId);
				
				//Retart Timer
				slideLeftTimerId = setInterval(slideLeft, slideTime);
				
			});
			
			jQuery("#slideLeft").click(function(){
				
				slideRight();
				window.clearInterval(slideLeftTimerId);
				
				//Restart Timer
				slideLeftTimerId = setInterval(slideLeft, slideTime);
				
			});
 
			jQuery("#headerSlider li:first-child").addClass('focused');
 
			var slideTime = 6000;
 
			//Stat animimations 
			var slideLeftTimerId = setInterval(slideLeft, slideTime);
			
			//Player Controls
			jQuery('#slider').on('mouseenter', function(){
				
				jQuery('#slideLeft:not(.in)').animate({
					left: "5%"
				}, function(){
					jQuery(this).addClass('in');
					jQuery(this).removeClass('out');
				});
				
				
				jQuery('#slideRight:not(.in)').animate({
					left: "90%"
				}, function(){
					jQuery(this).addClass('in');
					jQuery(this).removeClass('out');
				});
				
				
			});
			
 
			jQuery('#slider').on('mouseleave', function(){
				
				jQuery('#slideLeft:not(.out)').animate({
					left: "-100px"
				}, function(){
					jQuery(this).addClass('out');
					jQuery(this).removeClass('in');
				});
				
				jQuery('#slideRight:not(.out)').animate({
					left: "100%"
				}, function(){
					jQuery(this).addClass('out');
					jQuery(this).removeClass('in');
				});
				
			});
		});
 
	</script>