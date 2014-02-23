<?php

/* Add Menu Support
-----------------------------------------------*/
add_action( 'init', 'register_my_menus' );

function register_my_menus() {
	register_nav_menus(array(
		'global-menu' => __( 'Global Menu' )
	));
}

/* Fix Admin Icon Size
-----------------------------------------------*/
add_action('admin_head', 'admin_icon_fix');

function admin_icon_fix() {
  echo '<style>
	#adminmenu .wp-menu-image img { max-width: 16px; padding-top: 8px; } 
  </style>';
}

/* Remove Pre-installed jQuery
-----------------------------------------------*/
if (!is_admin()) add_action("wp_enqueue_scripts", "remove_jquery", 11);
function remove_jquery() {
	wp_deregister_script('jquery');
}

/* Remove Contact Form 7 Styles
-----------------------------------------------*/
add_action( 'wp_enqueue_scripts', 'wap8_wpcf7_css', 10 );

function wap8_wpcf7_css() {
	if ( !is_admin() ) {
		if ( class_exists( 'WPCF7_ContactForm' ) ) {
			wp_deregister_style( 'contact-form-7' );
		}
	}
}

?>