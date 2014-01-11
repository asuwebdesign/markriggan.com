<?php /* Template Name: About Page Customized Process Template */ ?>

<?php get_header(); ?>

<div class="main-container">
    <div class="main wrapper clearfix">

        <?php if ( have_posts() ) : ?>

        <?php /* Start the Loop */ ?>
        <?php while ( have_posts() ) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header">
                <figure class="entry-figure">
                    <?php echo(types_render_field( "featured-graphic", array())); ?>
                </figure>
                <hgroup>
                    <h1 class="entry-title">
                        <?php echo(types_render_field( "page-headline", array( ))); ?>
                    </h1>
                    <h2 class="entry-subtitle">
                        <?php echo(types_render_field( "page-sub-heading", array( ))); ?>
                    </h2>
                </hgroup>
            </header>
            <!-- .entry-header -->

            <section class="entry-content">
                <?php the_content(); ?>
            </section>
            <!-- .entry-content -->
            <section class="entry-subcontent">
                <section class="skills">
                    <h2>Focused Skills Include</h2>
                    <?php echo(types_render_field( "supplemental-content", array())); ?>
                </section>
                <section class="awards">
                    <h2>Select Awards Received</h2>
                    <?php get_template_part( 'loop', 'awards'); ?>
                </section>
            </section>
        </article>
        <!-- #post-<?php the_ID(); ?> -->

        <?php get_template_part( 'latest', 'projects'); ?>

        <?php endwhile; ?>

        <?php else : ?>
        <?php endif; ?>

    </div>
</div>

<?php get_footer(); ?>