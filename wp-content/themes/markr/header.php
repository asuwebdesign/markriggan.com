<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php wp_title(''); ?></title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

	<!-- Google Font -->
	<link href="http://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
	
	<!-- Stylesheets -->
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/base.css"    media="screen, handheld">
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/mobile.css"  media="only screen and (min-width: 481px)">
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/desktop.css" media="only screen and (min-width: 1025px)">
	
	<!--[if lt IE 9]>
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/mobile.css"  media="screen">
	<link rel="stylesheet" href="<?php bloginfo( 'template_directory' ); ?>/css/desktop.css" media="screen">
	<![endif]-->

	<!-- For iPhone 4 -->
	<!-- <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/h/apple-touch-icon.png"> -->
	<!-- For iPad 1-->
	<!-- <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/m/apple-touch-icon.png"> -->
	<!-- For the new iPad -->
	<!-- <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/h/apple-touch-icon-144x144-precomposed.png"> -->
	<!-- For iPhone 3G, iPod Touch and Android -->
	<!-- <link rel="apple-touch-icon-precomposed" href="img/l/apple-touch-icon-precomposed.png"> -->
	<!-- For everything else -->
	<link rel="shortcut icon" href="/favicon.ico">

	<script src="<?php echo get_template_directory_uri(); ?>/js/libs/modernizr-2.6.1.min.js"></script>
	
	<!-- Google Analytics -->
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
	<?php 
	   /* Always have wp_head() just before the closing </head>
	    * tag of your theme, or you will break many plugins, which
	    * generally use this hook to add elements to <head> such
	    * as styles, scripts, and meta tags.
	    */
	   wp_head();
	?>
</head>
<body <?php body_class(); ?>>
  	<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
	
	<div class="header-container">
		<header class="wrapper clearfix">			
			<?php			
			$walker = new My_Walker;			
			wp_nav_menu( array(
				'theme_location'	=> 'global-menu',
				'container'     	=> 'nav',
				'container_class' 	=> '', 
				'items_wrap'      	=> '<ul>%3$s</ul>',
				'walker' 			=> $walker
			)); ?>
			
			<div class="site-title"><a href="/">Mark Riggan</a></div>
			
			<?php if ( is_front_page() ) : ?>			
			<?php
			
				$site_title = ot_get_option( 'site_title' );
				$site_subtitle = ot_get_option( 'site_subtitle' );
			
			?>
			<hgroup>
				<h1><?php echo $site_title; ?></h1>
				<h2><?php echo $site_subtitle; ?></h2>
			</hgroup>			
			<?php endif; ?>			
		</header>
	</div>