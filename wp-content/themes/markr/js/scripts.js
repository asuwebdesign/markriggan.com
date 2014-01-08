/* Functions
======================================================================================================= */

	/* Detect if Apple device
	-------------------------------------------------------------*/
	function isApple() {
		var deviceAgent = navigator.userAgent.toLowerCase();
	    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	
	    if (agentID) {
			return true;	
		}
		else{
			return false;	
		}
	}
	
	
	/* Detect if Android device
	-------------------------------------------------------------*/
	function isDroid() {
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	
		if(isAndroid) {
			return true;	
		}
		else{
			return false;	
		}
	}
	
	
	/* Hide iOS Address Bar
	-------------------------------------------------------------*/
	function hideURLbar() {
	    setTimeout(scrollTo, 0, 0, 1);
	}



/* Document Ready Scripts
======================================================================================================= */

$(document).ready(function() {
	
	
	/* All Devices
	======================================================================================================= */
	
		
		/* Hide iOS Address Bar
		-------------------------------------------------------------*/
		hideURLbar();
		
	
		/* Flexible Headings
		-------------------------------------------------------------*/
		$('.page-about .entry-title').fitText();		
	
		
		/* Fix Margin for IE8 or lower
		-------------------------------------------------------------*/
		$('.lt-ie9 .featured-projects li:nth-child(4n)').css('margin-right', '0');	
			
	
	/* iPhone & Other Smartphones
	======================================================================================================= */
	Responder.query("only screen and (max-width: 480px)", function() {
				
		
		/* Setup Mobile Menu
		-------------------------------------------------------------*/
		if( $('.header-container nav').length > 0 ) {
			
			$('.header-container nav').after('<a id="nav-toggle" href="#">Menu</a>').find('ul').hide();
			$('#nav-toggle').click(function(){
				$(this).toggleClass('open').prev().find('ul').slideToggle(250);
				return false;
			});		
		
		}
	
		
		/* Setup Swipe Portfolio
		-------------------------------------------------------------*/
		if ( isApple() || isDroid() ) {
			new Swipe(document.getElementById('portfolio'), {
				speed: 250,
				auto: 3000
			});			
		}
		
		
		/* Reset Additional Projects
		-------------------------------------------------------------*/
		if( $('body.home').length > 0 ) {
			
			// Display all projects
			$('#portfolio li').removeClass('secondary').show();
			
			// Remove toggle button
			$('#portfolio-toggle').remove();
			
		}
	
	
	}, true);
	
	
	Responder.query("only screen and (min-width: 481px)", function() {
	}, true);
	
	
	/* iPad & Other Tablets
	======================================================================================================= */
	Responder.query("only screen and (min-width: 481px)", function() {
			
		
		/* Reset Mobile Menu
		-------------------------------------------------------------*/
		if( $('#nav-toggle').length > 0 ) {
			
			$('.header-container nav').find('ul').show();
			$('#nav-toggle').remove();		
		
		}
		
	
	}, false);
	
	
	Responder.query("only screen and (max-width: 1024px)", function() {
			
		
		/* Reset Additional Projects
		-------------------------------------------------------------*/
		if( $('body.home').length > 0 ) {
			
			// Display all projects
			$('#portfolio li').removeClass('secondary').show();
			
			// Remove toggle button
			$('#portfolio-toggle').remove();
			
		}
		
	
	}, false);
	
	
	
	/* Desktop
	======================================================================================================= */
	Responder.query("only screen and (min-width: 1025px)", function() {
			
		
		/* Show/Hide Additional Projects
		-------------------------------------------------------------*/
		if( $('body.home').length > 0 ) {
			
			// Setup projects to toggle
			$('#portfolio li:gt(7)').addClass('secondary').hide();
			
			// Setup toggle button
			$('#portfolio').after('<div id="portfolio-toggle"><span>Wanna See More?</span></div>');
			
			// Toggle projects
			$('#portfolio-toggle').toggle(
				function() {
					$(this).addClass('active').html('<span>Wanna See Less?</span>');
					$('#portfolio li.secondary').fadeIn(250);
				},
				function() {
					$(this).removeClass('active').html('<span>Wanna See More?</span>');
					$('#portfolio li.secondary').fadeOut(250);
				}
			);
			
		}
		
	
	}, true);
	
	
});