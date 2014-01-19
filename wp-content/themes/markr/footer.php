<div class="footer-container">
    <footer class="wrapper">

        <?php if ( function_exists( 'ot_get_option' ) ) {
            
            // Get Values Set From OptionTree Plugin
            $contact_callout_heading = ot_get_option( 'contact_callout_heading' );
            $contact_callout_subheading = ot_get_option( 'contact_callout_subheading' );
            $twitter_url = ot_get_option( 'twitter_url' );
            $dribbble_url = ot_get_option( 'dribbble_url' );
            $linkedin_url = ot_get_option( 'linkedin_url' );
            $featured_quote = ot_get_option( 'featured_quote' );
            $copyright_information = ot_get_option( 'copyright_information' );
        } ?>

        <?php if ( !is_page_template( 'page-contact.php') ) : ?>
        <section class="contact-callout">
            <hgroup>
                <h2><?php echo $contact_callout_heading; ?></h2>
                <h3><?php echo $contact_callout_subheading; ?></h3>
            </hgroup>
            <ul>
                <li class="twitter">
                    <a href="<?php echo $twitter_url; ?>" title="Twitter">Twitter</a>
                </li>
                <li class="dribbble">
                    <a href="<?php echo $dribbble_url; ?>" title="Dribbble">Dribbble</a>
                </li>
                <li class="linkedin">
                    <a href="<?php echo $linkedin_url; ?>" title="LinkedIn">LinkedIn</a>
                </li>
            </ul>
            <a class="button" href="/contact">Contact Me</a>
        </section>
        <?php endif; ?>

        <q><?php echo $featured_quote; ?></q>
        <p><small><?php echo $copyright_information; ?></small></p>

        <div class="logo"><a href="/" title="Back to the Home Page">Back to Home</a></div>
    </footer>
</div>

<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>
    window.jQuery || document.write('<script src="<?php echo get_template_directory_uri(); ?>/js/libs/jquery-1.7.1.min.js"><\/script>')
</script>

<script src="<?php echo get_template_directory_uri(); ?>/js/plugins.js"></script>
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