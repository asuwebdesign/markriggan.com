    <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php

        $bus_goal         = types_render_field("business-goal", array("raw"=>"true"));
        $priority         = types_render_field("priority", array("raw"=>"true"));
        $timeline         = types_render_field("timeline", array("raw"=>"true"));
        $tactics          = types_render_field("tactics-and-methods", array("raw"=>"true"));
        $tag              = types_render_field("tags", array());
        $tags             = '<ul><li>' . do_shortcode('[types field="tags" separator="</li><li>"][/types]') . '</li></ul>';
        $achievements     = types_render_field("achievement-details", array("raw"=>"true"));
        $visual_example   = types_render_field("visual-examples", array());
        $visual_examples  = "<ul class=\"visual\"><li><figure>" . do_shortcode("[types field=\"visual-examples\" separator=\"</li><li><figure>\"][/types]") . "</figure></li></ul>";
        $ext_example      = types_render_field("external-examples", array());
        $ext_examples     = "<ul class=\"external\"><li>" . do_shortcode("[types field=\"external-examples\" separator=\"</li><li>\"][/types]") . "</li></ul>";


    ?>

            <h1><?php the_title(); ?></h1>

            <?php if ( $bus_goal ) : ?>
                <section class="business-goal">
                    <h2>Business Goal</h2>
                    <?php echo $bus_goal; ?>

                    <?php if ( $priority == "high" ) : ?>
                        <div class="priority"><img class="svg" src="<?php echo get_stylesheet_directory_uri(); ?>/img/i_priority-high.svg" />High Priority</div>
                    <?php elseif ( $priority == "med" ) : ?>
                        <div class="priority"><img class="svg" src="<?php echo get_stylesheet_directory_uri(); ?>/img/i_priority-med.svg" />Medium Priority</div>
                    <?php elseif ( $priority == "low" ) : ?>
                        <div class="priority"><img class="svg" src="<?php echo get_stylesheet_directory_uri(); ?>/img/i_priority-low.svg" />Low Priority</div>
                    <?php endif; ?>

                    <?php if ( $timeline ) : ?>
                        <div class="timeline"><img class="svg" src="<?php echo get_stylesheet_directory_uri(); ?>/img/i_clock.svg" /><?php echo $timeline; ?></div>
                    <?php endif; ?>
                </section>
            <?php endif; ?>

            <?php if ( $tactics ) : ?>
                <section class="tactics-methods">
                    <h2>Tactics &amp; Methods</h2>
                    <?php echo $tactics; ?>

                    <?php if ( $tag ) : ?>
                        <?php echo $tags; ?>
                    <?php endif; ?>
                </section>
            <?php endif; ?>

            <?php if ( $achievements ) : ?>
                <section class="achievements">
                    <h2>Achievement Details</h2>
                    <?php echo $achievements; ?>
                </section>
            <?php endif; ?>

            <?php if ( $visual_example || $ext_example ) : ?>
                <section class="examples">
                    <h2>Examples</h2>
                    <?php if ( $visual_example ) : ?>
                        <?php echo $visual_examples; ?>
                    <?php endif; ?>
                    <?php if ( $ext_example ) : ?>
                        <?php echo $ext_examples; ?>
                    <?php endif; ?>
                </section>
            <?php endif; ?>

    <?php endwhile; ?>

    <?php else : ?>
            <h1><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h1>
    <?php endif; ?>