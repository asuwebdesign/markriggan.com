<?php

	/* Template Name: Home Page
	   Customized Homepage Template */

?>

<?php get_header(); ?>

	<div class="main-container">
		<div class="main wrapper clearfix">			
			<section id="featured-projects" class="featured-projects">
				<h2 class="visuallyhidden">Featured Projects</h2>
				<div id="portfolio">
					<ul>
						<?php
							query_posts( array(
								'post_type' => 'portfolio',
								'posts_per_page' => -1
							));
							if ( have_posts() ) : while ( have_posts() ) : the_post();
						?>
						<li>
							<article>
								<a href="<?php the_permalink(); ?>">
									<figure><?php echo(types_render_field("photo_grid_thumb", array(
										"width"=>"400",
										"height"=>"400",
										"alt"=>"",
										"title"=>"",
										"proportional"=>"true"
									))); ?>
									</figure>
									<h3><?php echo(types_render_field("photo_grid_label", array())); ?></h3>
									<p><?php echo(types_render_field("photo_grid_cat", array())); ?></p>									
								</a>
							</article>
						</li>
						<?php endwhile; endif; wp_reset_query(); ?>
					</ul>
				</div>
			</section>
			
			<section class="skillset">
				<figure><?php echo(types_render_field("block_1_graphic", array())); ?></figure>
				<h2><?php echo(types_render_field("block_1_title", array())); ?></h2>
				<?php echo(types_render_field("block_1_content", array())); ?>
			</section>
			
			<section class="creative-process">
				<figure><?php echo(types_render_field("block_2_graphic", array())); ?></figure>
				<h2><?php echo(types_render_field("block_2_title", array())); ?></h2>
				<?php echo(types_render_field("block_2_content", array())); ?>
				<a href="<?php echo(types_render_field("block_2_link_url", array( "raw" => 'true' ))); ?>"><?php echo(types_render_field("block_2_link_text", array())); ?></a>
			</section>			
			
			<section class="about-me">				
				<figure><?php echo(types_render_field("block_3_graphic", array())); ?></figure>
				<h2><?php echo(types_render_field("block_3_title", array())); ?></h2>
				<?php echo(types_render_field("block_3_content", array())); ?>
				<a href="<?php echo(types_render_field("block_3_link_url", array( "raw" => 'true' ))); ?>"><?php echo(types_render_field("block_3_link_text", array())); ?></a>
			</section>			
		</div>
	</div>
	
<?php get_footer(); ?>