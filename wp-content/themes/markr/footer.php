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
		<section id="talk">
			...form...
		</section>
		<section class="social-media">
			<h1><?php echo $social_media_title; ?></h1>
			<ul>
				<li><a href="<?php echo $twitter_url; ?>"><i class="icon-twitter"></i> <span class="visuallyhidden">Twitter</span></a></li>
				<li><a href="<?php echo $google_url; ?>"><i class="icon-gplus"></i> <span class="visuallyhidden">Google+</span></a></li>
				<li><a href="<?php echo $linkedin_url; ?>"><i class="icon-linkedin"></i> <span class="visuallyhidden">LinkedIn</span></a></li>
				<li><a href="<?php echo $dribbble_url; ?>"><i class="icon-dribbble"></i> <span class="visuallyhidden">Dribbble</span></a></li>
			</ul>
		</section>
		<p><small><?php echo $copyright_information; ?></small></p>
	</footer>
</div>

<script src="<?php echo get_template_directory_uri(); ?>/js/scripts.min.js"></script>
</body>

</html>