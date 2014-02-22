<?php
	$section_title         = ot_get_option('footer_title');
	$social_media_title    = ot_get_option('social_media_title');
	$twitter_url           = ot_get_option('twitter_url');
	$google_url            = ot_get_option('google_plus_url');
	$linkedin_url          = ot_get_option('linkedin_url');
	$dribbble_url          = ot_get_option('dribbble_url');			
	$copyright_information = ot_get_option('copyright_info');
?>
<div class="footer-container">
	<footer class="wrapper group">
		<h1><?php echo $section_title; ?></h1>		
		<section class="social-media">
			<h1><?php echo $social_media_title; ?></h1>
			<ul>
				<li><a href="<?php echo $twitter_url; ?>"><i class="icon"></i> <span class="visuallyhidden">Twitter</span></a></li>
				<li><a href="<?php echo $google_url; ?>"><i class="icon"></i> <span class="visuallyhidden">Google+</span></a></li>
				<li><a href="<?php echo $linkedin_url; ?>"><i class="icon"></i> <span class="visuallyhidden">LinkedIn</span></a></li>
				<li><a href="<?php echo $dribbble_url; ?>"><i class="icon"></i> <span class="visuallyhidden">Dribbble</span></a></li>
			</ul>
		</section>
		<p><small><?php echo $copyright_information; ?></small></p>
	</footer>
</div>

<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>
	window.jQuery || document.write('<script src="<?php echo get_template_directory_uri(); ?>/js/libs/jquery-1.7.1.min.js"><\/script>')
</script>

<script src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>

<!-- Asynchronous Google Analytics snippet. Change UA-XXXXX-X to be your site's ID.
		 mathiasbynens.be/notes/async-analytics-snippet -->
<script>
	var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
		(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
		g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
		s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
</body>

</html>