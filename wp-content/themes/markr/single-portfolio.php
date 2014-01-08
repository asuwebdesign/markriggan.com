<?php

	/* Default Page Template */

?>

<?php get_header(); ?>

	<div class="main-container">
		<div class="main wrapper clearfix">			
			
			<?php if ( have_posts() ) : ?>

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="entry-header">
							<h1 class="entry-title"><?php the_title(); ?></h1>
						</header><!-- .entry-header -->
					
						<div class="entry-content">
							
							<h2>Summary</h2>
							<?php the_content(); ?>
							
							<h2>Services:</h2>
							<?php echo(types_render_field("services_list", array(						
							))); ?>
							
							<h2>Live Site</h2>
							<p><?php echo(types_render_field("live_source", array(						
							))); ?></p>
							<p><small>Please note that the live site may or may not accurately reflect screenshots you see on my personal site. However, if the screenshots are fairly accurate, enjoy!</small></p>
														
						</div>
						<div class="entry-media">						
							<?php
								/* Get the snapshots from the child posts */
								$child_posts = types_child_posts('snapshots');
								foreach ($child_posts as $child_post) {
									$snapshot = $child_post->fields['snapshot_img'];
									$caption = $child_post->fields['snapshot_caption'];
							?>
							
								<figure>
									<img src="<?php echo $snapshot; ?>" alt="<?php echo $caption; ?>" />
									<figcaption><?php echo $caption; ?></figcaption>
								</figure>
							
							<?php } ?>				
						</div><!-- .entry-content -->						
					</article><!-- #post-<?php the_ID(); ?> -->

				<?php endwhile; ?>

			<?php else : ?>
			<?php endif; ?>
						
		</div>
	</div>	
	
<?php get_footer(); ?>