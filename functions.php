// Should be placed in functions.php

add_action( 'init', 'create_slide_post_type' );
function create_slide_post_type() {
	register_post_type( 'slider_post',
		array(
			'labels' => array(
				'name' => __( 'Slide posts' ),
				'singular_name' => __( 'Slide post' )
			),
		'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'revisions' ),
		'public' => true,
		'has_archive' => true,
		)
	);
}
 
add_action( 'init', 'slides_tax' );
function slides_tax() {
 
		register_taxonomy(
		'slides',
		'slider_post',
		array(
			'label' => __( 'Slide Catagorys' ),
			'rewrite' => array( 'slug' => 'slide' ),
		)
	);
}