<?php

	/* Template Name: Contact Page
	   Customized Process Template */

?>

<?php get_header(); ?>

	<div class="main-container">
		<div class="main wrapper clearfix">			
			
			<?php if ( have_posts() ) : ?>
			
				<?php if ( function_exists( 'ot_get_option' ) ) {
	  			
		  			// Get Values Set From OptionTree Plugin
		  			
		  			$facebook_url = ot_get_option( 'facebook_url' );
		  			$twitter_url = ot_get_option( 'twitter_url' );
		  			$dribbble_url = ot_get_option( 'dribbble_url' );
		  			$linkedin_url = ot_get_option( 'linkedin_url' );
		  		
		  		} ?>

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
							
							<section class="social-follow">
								<h3>You can also follow me on these networks:</h3>
								<ul>
									<li class="facebook"><a href="<?php echo $facebook_url; ?>"><em></em> Facebook <span>mark.riggan.84</span></a></li>
									<li class="twitter"><a href="<?php echo $twitter_url; ?>"><em></em> Twitter <span>asuwebdesign</span></a></li>
									<li class="dribbble"><a href="<?php echo $dribbble_url; ?>"><em></em> Dribbble <span>markr</span></a></li>
									<li class="linkedin"><a href="<?php echo $linkedin_url; ?>"><em></em> LinkedIn <span>in/markriggan</span></a></li>
								</ul>
							</section>					
						</div><!-- .entry-content -->
					</article><!-- #post-<?php the_ID(); ?> -->
					
				<?php endwhile; ?>

			<?php else : ?>
			<?php endif; ?>
						
		</div>
	</div>
	
<?php get_footer(); ?>