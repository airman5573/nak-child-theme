<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

$timeline_page_id = 258;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'hello-elementor','hello-elementor','hello-elementor-theme-style' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

// END ENQUEUE PARENT ACTION



/**
 * timeline js파일을 load합니다
 */
function nak_enqueue_scripts() {
  global $timeline_page_id;
  if (is_page($timeline_page_id)) {
    wp_enqueue_script('nak-jquery', get_stylesheet_directory_uri() . '/jquery.js', array(), '0.0.1', true);
    wp_enqueue_script('nak-gsap', get_stylesheet_directory_uri() . '/gsap.min.js', array(), '0.0.1', true);
    wp_enqueue_script('nak-main', get_stylesheet_directory_uri() . '/main.js', array('nak-jquery', 'nak-gsap'), '0.0.1', true);
  }
}
add_action('wp_enqueue_scripts', 'nak_enqueue_scripts');


/**
 * css파일을 load합니다
 */
function nak_enqueue_styles() {
  global $timeline_page_id;
  if (is_page($timeline_page_id)) {
    wp_enqueue_style('nak-style', get_stylesheet_directory_uri() . '/timeline.css', array(), '0.0.1');
  }
}
add_action('wp_enqueue_scripts', 'nak_enqueue_styles');