<!doctype html>
<html class="no-js" lang="en">
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
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/lte-ie8.css">
	<![endif]-->

	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/print.min.css" media="print" />

	<link rel="apple-touch-icon-precomposed" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-iphone.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-ipad.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-iphone-retina.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php bloginfo( 'template_directory' ); ?>/touch-icon-ipad-retina.png" />
	<link rel="shortcut icon" href="<?php bloginfo( 'template_directory' ); ?>/favicon.png">
	
	<script src="<?php bloginfo( 'template_directory' ); ?>/js/modernizr.min.js"></script>	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/wp-content/themes/markr/libs/jquery/jquery.min.js"><\/script>')</script>

	<?php wp_head(); ?>
</head>

<?php
	// stuff
?>

<body <?php // body_class(); ?>>
	<!--[if lte IE 10]>
		<p class="chromeframe">Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p>
	<![endif]-->

	<div class="header-container">
		<header class="wrapper group">
			<h1><a href="/"><?php bloginfo('name'); ?></a></h1>
			<?php bloginfo('description'); ?>

			<nav class="primary">
				<ul>
					<li><a href="#hello">Hello!</a></li>
					<li><a href="#projects">Work</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#talk">Let's Talk</a></li>
				</ul>
			</nav>

			<?php if( is_front_page() && have_posts() ) : ?>
				<section id="hello">
					<?php while ( have_posts() ) : the_post(); ?>
						<?php the_content(); ?>
					<?php endwhile; ?>
				</section>
			<?php else : ?>
			<?php endif; ?>
		</header>
	</div>