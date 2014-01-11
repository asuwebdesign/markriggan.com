<section class="featured-projects callout">

    <?php if ( function_exists( 'ot_get_option' ) ) { $heading = ot_get_option( 'portfolio_options_heading' ); } ?>

    <h2>
        <?php echo $heading; ?>
    </h2>
    <div id="portfolio">
        <ul>
            <?php query_posts( array( 'post_type'=>'portfolio', 'posts_per_page' => 4 )); if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <li>
                <article>
                    <a href="<?php the_permalink(); ?>">
                        <figure>
                            <?php echo(types_render_field( "photo_grid_thumb", array( "width"=>"400", "height"=>"400", "proportional"=>"true" ))); ?>
                        </figure>
                        <h3>
                            <?php echo(types_render_field( "photo_grid_label", array())); ?>
                        </h3>
                        <p>
                            <?php echo(types_render_field( "photo_grid_cat", array())); ?>
                        </p>
                    </a>
                </article>
            </li>
            <?php endwhile; endif; wp_reset_query(); ?>
        </ul>
    </div>
</section>