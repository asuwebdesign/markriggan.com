<section class="featured-projects callout">

    <?php if ( function_exists( 'ot_get_option' ) ) {
        $heading = ot_get_option( 'portfolio_options_heading' ); }
    ?>

    <h2><?php echo $heading; ?></h2>
    <div id="portfolio">
        <?php 
            // the query
            remove_all_filters('posts_orderby');
            $args                 = array(
                'post_type'       => 'portfolio',
                'orderby'         => 'rand',
                'order'           => 'ASC',
                'posts_per_page'  => 4
            );
            $the_query            = new WP_Query( $args );

        ?>        
        <?php if ( $the_query->have_posts() ) : ?>
            <ul>
            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <?php
                $thumb    = types_render_field( "photo_grid_thumb", array( "width"=>"400", "height"=>"400", "proportional"=>"true" ));
                $label    = types_render_field( "photo_grid_label", array());
                $category = types_render_field( "photo_grid_cat", array());
            ?>    
                <li>
                    <article>
                        <a href="<?php the_permalink(); ?>">
                            <figure><?php echo $thumb; ?></figure>
                            <h3><?php echo $label; ?></h3>
                            <p><?php echo $category; ?></p>
                        </a>
                    </article>
                </li>
            <?php endwhile; ?>
            </ul>
            <?php wp_reset_postdata(); ?>
        <?php else:  ?>
          <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
    </div>
</section>