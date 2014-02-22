<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php wp_title(''); ?></title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<!--[if !IE 8]><!-->
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/style.css">
	<!--<![endif]-->

	<!--[if gte IE 9]>
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/style.css">
	<![endif]-->

	<!--[if (lt IE 9) & (!IEMobile)]>
	<script src="<?php bloginfo( 'template_directory' ); ?>/js/vendors/selectivizr.js"></script>
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/lte-ie8.css">
	<![endif]-->

	<link rel="stylesheet" href="css/print.css" media="print" />

	<link rel="apple-touch-icon-precomposed" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-iphone.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-ipad.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-iphone-retina.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-ipad-retina.png" />
	<link rel="shortcut icon" href="<?php bloginfo( 'template_directory' ); ?>/favicon.png">
	
	<script>document.cookie='resolution='+Math.max(screen.width,screen.height)+'; path=/';</script>
	<!--<script>document.cookie='resolution='+Math.max(screen.width,screen.height)+("devicePixelRatio" in window ? ","+devicePixelRatio : ",1")+'; path=/';</script>-->
	
	<script src="<?php bloginfo( 'template_directory' ); ?>/js/vendors/modernizr.custom.js"></script>

	<script type="text/javascript">
		var _gaq = _gaq || [];
			  _gaq.push(['_setAccount', 'UA-34177245-1']);
			  _gaq.push(['_trackPageview']);
			
			  (function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();
	</script>
	<?php wp_head(); ?>
</head>

<?php
	// stuff
?>

<body <?php body_class(); ?>>
	<!--[if lte IE 9]>
	<p class="chromeframe">Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p>
	<![endif]-->

	<div class="header-container">
		<header class="wrapper group">
			<?php
				/*$walker = new My_Walker; wp_nav_menu( array(
					'theme_location'  => 'global-menu',
					'container'       => 'nav',
					'container_class' => 'primary',
					'items_wrap'      => '<ul>%3$s</ul>',
					'walker'          => $walker
				));*/
			?>

			<h1><a href="/"><?php bloginfo('name'); ?></a></h1>
			<?php bloginfo('description'); ?>

			<?php if( is_front_page() && have_posts() ) : ?>
				<section>
				<?php while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
				</section>
			<?php else : ?>
			<?php endif; ?>
		</header>
	</div>