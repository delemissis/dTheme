<?php
add_action( 'after_setup_theme', 'theme_setup' );
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 */
function theme_setup() {
	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu'),
	) );

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
		* Enable support for Post Formats.
		* See http://codex.wordpress.org/Post_Formats
		*/
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'custom_background_args', array(
		'default-color' => 'ffffff',
			'default-image' => '',
	) ) );

	// Set up the WordPress Theme logo feature.
	add_theme_support( 'custom-logo' );

	// Add support for responsive embedded content.
	add_theme_support( 'responsive-embeds' );
}

function wp4wp_scripts() {
	wp_enqueue_style('main_css', get_template_directory_uri() . '/assets/styles/main.css', array(), '1.0', false);
	wp_enqueue_script('main_js', get_template_directory_uri() . '/assets/scripts/main.js', array(), '1.0', true);
  }
  add_action('wp_enqueue_scripts', 'wp4wp_scripts');

