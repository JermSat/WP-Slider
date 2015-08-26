// Goes in your template

		// The Query
		$args = array(
			'post_type' => 'slider_post',
			'orderby' => 'date',
			'order' => 'DESC'
		);
		
		$the_query = new WP_Query( $args );
		
		
		if ( $the_query->have_posts() ) {
			echo '<ul id="headerSlider">';
			while ( $the_query->have_posts() ) {
				$the_query->the_post();
                                //Grabs the featured image source and stores it in a var
				$productThumb = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
                                //echo out the featured image url as 
                                //the background image in a inline style
				echo '<li class="slideBG" style="background-image: url('.$productThumb[0].');"><div class="center-content"><p class="slideContent">' . get_the_content() . '</p></div></li>';
			}
			echo '</ul>';
		}
		
		/* Restore original Post Data */
		wp_reset_postdata();