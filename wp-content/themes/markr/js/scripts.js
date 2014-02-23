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
	
		
			
			
	
	/* iPhone & Other Smartphones
	======================================================================================================= */
	Responder.query("only screen and (max-width: 480px)", function() {
				
		
		
	
	
	}, true);
	
	
	Responder.query("only screen and (min-width: 481px)", function() {
	}, true);
	
	
	/* iPad & Other Tablets
	======================================================================================================= */
	Responder.query("only screen and (min-width: 481px)", function() {
			
		
		
		
	
	}, false);
	
	
	Responder.query("only screen and (max-width: 1024px)", function() {
			
		
		
		
	
	}, false);
	
	
	
	/* Desktop
	======================================================================================================= */
	Responder.query("only screen and (min-width: 1025px)", function() {
			
		
		
		
	
	}, true);
	
	
});