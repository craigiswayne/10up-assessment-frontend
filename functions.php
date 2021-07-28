<?php
define( 'CW_ASSESSMENT_VERSION', '1.0.0' );

/**
 * Theme Supports
 */
add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo', array(
	'height' => 40,
	'width'  => 171,
));

/**
 * Meta
 */
// Was previously loading the fonts from google
// Opted to use local copies to improve site performance
//if(!function_exists('cw_resource_hints')){
//	function cw_resource_hints($urls, $relation_type){
//		if($relation_type === 'preconnect'){
//			$urls[] = 'https://fonts.googleapis.com';
//			$urls[] = 'https://fonts.gstatic.com';
//		}
//
//		return $urls;
//	}
//}
//add_action('wp_resource_hints', 'cw_resource_hints', 10, 2);


/**
 * Enqueue Assets
 */
if(!function_exists('cw_enqueue_scripts')){
	function cw_enqueue_scripts() {
		wp_enqueue_style( 'cw-critical-styles', get_template_directory_uri() . '/dist/styles/critical-path.css', [], CW_ASSESSMENT_VERSION );
		wp_register_script('cw-scripts', get_template_directory_uri() . '/dist/scripts/scripts.min.js', [], CW_ASSESSMENT_VERSION, true);
		wp_enqueue_script('cw-scripts');
	}
}
add_action( 'wp_enqueue_scripts', 'cw_enqueue_scripts' );

if(!function_exists('cw_enqueue_scripts_footer')){
	function cw_enqueue_scripts_footer() {
		wp_enqueue_style( 'cw-late-styles', get_template_directory_uri().'/dist/styles/main.css', [], CW_ASSESSMENT_VERSION);
	}
}
add_action( 'get_footer', 'cw_enqueue_scripts_footer' );
