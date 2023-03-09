<?php

/*
Plugin Name:    YAY FLY
Description:	This plugin as an add-on to the existing theme of the site and for additional functionality.
Version:        1.0.0
Author:         YAY FLY
Author URI:     https://yayfly.com/
License:        GPLv2 or later
*/


/**
 * 
 */
add_action('wp_enqueue_scripts', function() {
	wp_deregister_script('jquery');
	wp_register_script('jquery', 'https://code.jquery.com/jquery-3.6.4.min.js', false);
	wp_enqueue_script('jquery');

	wp_register_script('moment', 'https://cdn.jsdelivr.net/momentjs/latest/moment.min.js', false);
	wp_enqueue_script('moment');	

	wp_register_style('daterangepicker', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css', false);
	wp_enqueue_style('daterangepicker');
	wp_register_script('daterangepicker', 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js', array('jquery', 'moment'));
	wp_enqueue_script('daterangepicker');	

	wp_register_style('yayfly', plugin_dir_url(__FILE__).'yayfly.css', false);
	wp_enqueue_style('yayfly');
	wp_register_script('yayfly', plugin_dir_url(__FILE__).'yayfly.js', NULL, time(), true);
	wp_enqueue_script('yayfly');
}, 11);


/**
 * 
 */
add_action('init', function() {
	if (
		$_SERVER['REQUEST_URI'] == '/search' or
		$_SERVER['REQUEST_URI'] == '/booking-details' or
		$_SERVER['REQUEST_URI'] == '/confirm-booking' or
		$_SERVER['REQUEST_URI'] == '/payment'		
	) {
		$path = '/wp-content/plugins/yayfly/build';
		$content = file_get_contents(__DIR__.'/build/index.html');
		$content = str_replace([
			'href="/',
			'src="/static/'
		], [
			'href="'.$path.'/',
			'src="'.$path.'/static/'
		], $content);

		die($content);
	}
});

?>
