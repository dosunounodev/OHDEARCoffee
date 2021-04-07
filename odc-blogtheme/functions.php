<?php

function init_template() {

  add_theme_support('post-thumbnails');
  add_theme_support('title-tag');

}

add_action('after_setup_theme', 'init_template');



function assets() {

  wp_enqueue_style( 'custom', get_template_directory_uri().'/assets/css/blog.css' );
}

add_action('wp_enqueue_scripts', 'assets');



function sidebar() {
  register_sidebar(
    array(
      'name' => 'Aside Container',
      'id' => 'asidewidget',
      'description' => 'zona de widget para aside',
      'before_title' => '<p>',
      'after_title' => '</p>',
      'before_widget' => '<div id="%1$s" class="%2$s">',
      'after_widget' => '</div>'
    )
    );
}

add_action('widgets_init', 'sidebar');




