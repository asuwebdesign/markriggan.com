<ul class="clearfix">
    <?php query_posts( array( 'post_type'=>'award', 'posts_per_page' => -1 )); if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <li>
        <article>
            <figure>
                <?php echo(types_render_field( "thumbnail-icon", array())); ?>
            </figure>
            <h3 class="visuallyhidden">
                <?php the_title(); ?>
            </h3>
        </article>
    </li>
    <?php endwhile; endif; wp_reset_query(); ?>
</ul>