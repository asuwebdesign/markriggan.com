/* Functions
======================================================================================================= */

	/* Setup Mobile Menu
	-------------------------------------------------------------*/
	function initMobileMenu() {

		var toggle = $('nav.primary h1');
		var menu   = $('nav.primary ul');

		toggle.click(function() {
			toggle.toggleClass('active');
			menu.slideToggle(250);
		});

	}

	/* Destroy Mobile Menu
	-------------------------------------------------------------*/
	function destroyMobileMenu() {

		var toggle = $('nav.primary h1');

		toggle.unbind('click');

	}

	/* Setup Animated Scroll for Menu
	-------------------------------------------------------------*/
	function initAnimateScroll() {

		var link = $('nav.primary li');

		link.click(function() {

			var ID     = $(this).find('a').attr('href');
			var toggle = $('nav.primary h1');

			$('html, body').animate({ scrollTop: $(ID).offset().top }, 1000);
			toggle.trigger('click');		

		});

	}

	/* Ajax in Projects
	-------------------------------------------------------------*/
	function ajaxProjects() {

		$('#projects li a').click(function() {
			var postID = $(this).attr('data-post-id');
			var postURL = $(this).attr('href');
			var container = $('#active-project');			

			// Load Project
			container.load(postURL + " #post-" + postID);
		
			return false;
		});

	}



/* Document Ready Scripts
======================================================================================================= */

$(document).ready(function() {
	
	initAnimateScroll();
	ajaxProjects();
	
	Responder.query("only screen and (max-width: 639px)", function() {
		initMobileMenu();
	}, true);

	Responder.query("only screen and (min-width: 1024px)", function() {
		destroyMobileMenu();
	}, false);
	
});