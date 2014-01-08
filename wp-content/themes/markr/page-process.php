<?php

	/* Template Name: Process Page
	   Customized Process Template */

?>

<?php get_header(); ?>

	<div class="main-container">
		<div class="main wrapper clearfix">			
			
			<?php if ( have_posts() ) : ?>

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="entry-header">
							<figure class="entry-figure">
								<?php echo(types_render_field("featured-graphic", array())); ?>
							</figure>
							<hgroup>
								<h1 class="entry-title"><?php echo(types_render_field("page-headline", array(						
								))); ?></h1>
								<h2 class="entry-subtitle"><?php echo(types_render_field("page-sub-heading", array(						
								))); ?></h2>
							</hgroup>
						</header><!-- .entry-header -->
					
						<div class="entry-content">
							<?php the_content(); ?>							
						
							<ol class="my-process">
								<li class="discover">
									<h2><?php echo(types_render_field("step-1-title", array(						
									))); ?></h2>
									<?php echo(types_render_field("step-1-content", array(
									))); ?>
								</li>
								<li class="plan">
									<h2><?php echo(types_render_field("step-2-title", array(						
									))); ?></h2>
									<?php echo(types_render_field("step-2-content", array(
									))); ?>
								</li>
								<li class="create">
									<h2><?php echo(types_render_field("step-3-title", array(						
									))); ?></h2>
									<?php echo(types_render_field("step-3-content", array(
									))); ?>
								</li>
								<li class="implement">
									<h2><?php echo(types_render_field("step-4-title", array(						
									))); ?></h2>
									<?php echo(types_render_field("step-4-content", array(
									))); ?>
								</li>
								<li class="measure">
									<h2><?php echo(types_render_field("step-5-title", array(						
									))); ?></h2>
									<?php echo(types_render_field("step-5-content", array(
									))); ?>
								</li>
								<li class="evolve">
									<h2><?php echo(types_render_field("step-6-title", array(						
									))); ?></h2>
									<?php echo(types_render_field("step-6-content", array(
									))); ?>
								</li>
							</ol>
						</div><!-- .entry-content -->
					</article><!-- #post-<?php the_ID(); ?> -->

					<?php get_template_part('latest', 'projects'); ?>

				<?php endwhile; ?>

			<?php else : ?>
			<?php endif; ?>
			
		</div>
	</div>
	
<?php get_footer(); ?>