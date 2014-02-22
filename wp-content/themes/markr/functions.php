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

?>