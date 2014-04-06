<?php /*
	Template Name: Home Page
	Customized Homepage Template
*/ ?>

<?php
	$project_title      = types_render_field("recent-work-title", array( ));
	$project_sub_title  = types_render_field("recent-work-sub-title", array( ));
	
	$services_title     = types_render_field("creative-services-title", array( ));
	$services_sub_title = types_render_field("creative-services-sub-title", array( ));
	$services_label_a   = types_render_field("creative-services-service-a-label", array( ));
	$services_label_b   = types_render_field("creative-services-service-b-label", array( ));
	$services_label_c   = types_render_field("creative-services-service-c-label", array( ));
	$services_content_a = types_render_field("creative-services-service-a-content", array( ));
	$services_content_b = types_render_field("creative-services-service-b-content", array( ));
	$services_content_c = types_render_field("creative-services-service-c-content", array( ));
	$services_tag_a     = types_render_field("creative-services-service-a-tags", array());
	$services_tags_a    = '<ul><li>' . do_shortcode('[types field="creative-services-service-a-tags" separator="</li><li>"][/types]') . '</li></ul>';
	$services_tag_b     = types_render_field("creative-services-service-b-tags", array());
	$services_tags_b    = '<ul><li>' . do_shortcode('[types field="creative-services-service-b-tags" separator="</li><li>"][/types]') . '</li></ul>';
	$services_tag_c     = types_render_field("creative-services-service-c-tags", array());
	$services_tags_c    = '<ul><li>' . do_shortcode('[types field="creative-services-service-c-tags" separator="</li><li>"][/types]') . '</li></ul>';
	
	$about_title        = types_render_field("about-me-title", array( ));
	$about_sub_title    = types_render_field("about-me-sub-title", array( ));
	$about_content      = types_render_field("about-me-content", array( ));
?>

<?php get_header(); ?>

	<div class="content-container">
		<section id="projects" class="projects">
			<div class="wrapper group">
				<h1><?php echo $project_title; ?></h1>
				<h2><?php echo $project_sub_title; ?></h2>

				<?/* Dynamically load in detail contents via Ajax */?>
				<article id="active-project"></article>

				<ul>
				<?php $projects = new WP_Query(array('posts_per_page' => 8, 'post_type' => 'projects'));
				while($projects->have_posts()) : $projects->the_post(); ?>

					<?php
						$thumb_small        = types_render_field("project-thumbnail-small", array('raw' => true));					
						$thumb_medium       = types_render_field("project-thumbnail-medium", array('raw' => true));					
						$thumb_large        = types_render_field("project-thumbnail-large", array('raw' => true));
						$thumb_small_hidpi  = types_render_field("project-thumbnail-small-hidpi", array('raw' => true));
						$thumb_medium_hidpi = types_render_field("project-thumbnail-medium-hidpi", array('raw' => true));
						$thumb_large_hidpi  = types_render_field("project-thumbnail-large-hidpi", array('raw' => true));
					?>
					<li>
						<a href="<?php the_permalink(); ?>" data-post-id="<?php the_ID(); ?>">
							<!--<?php the_title(); ?>-->
							
						<?php if ($thumb_small) : ?>
							<span data-picture data-alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
								<span data-src="<?php echo $thumb_small; ?>"></span>
								<span data-src="<?php echo $thumb_small_hidpi; ?>" data-media="(min-device-pixel-ratio: 2.0)"></span>
								<span data-src="<?php echo $thumb_medium; ?>" data-media="(min-width: 640px)"></span>
								<span data-src="<?php echo $thumb_medium_hidpi; ?>" data-media="(min-width: 640px) and (min-device-pixel-ratio: 2.0)"></span>
								<span data-src="<?php echo $thumb_large; ?>" data-media="(min-width: 1024px)"></span>
								<span data-src="<?php echo $thumb_large_hidpi; ?>" data-media="(min-width: 1024px) and (min-device-pixel-ratio: 2.0)"></span>

								<noscript>
									<img src="<?php echo $thumb_small; ?>" alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
								</noscript>
							</span>
						<?php else : ?>
							<img src="http://www.placekitten.com/g/400/400" />
						<?php endif; ?>
						</a>
					</li>

				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
				</ul>
			</div>
		</section>
		<section id="services" class="services">
			<div class="wrapper group">
				<h1><?php echo $services_title; ?></h1>
				<h2><?php echo $services_sub_title; ?></h2>

				<ul>
					<li><i class="icon-pencil"></i><?php echo $services_label_a; ?></li>
					<li><i class="icon-mobile"></i><?php echo $services_label_b; ?></li>
					<li><i class="icon-code"></i><?php echo $services_label_c; ?></li>
				</ul>

				<section>
					<?php echo $services_content_a; ?>
					<?php echo $services_tags_a; ?>
				</section>

				<section>
					<?php echo $services_content_b; ?>
					<?php echo $services_tags_b; ?>
				</section>

				<section>
					<?php echo $services_content_c; ?>
					<?php echo $services_tags_c; ?>
				</section>

			</div>
		</section>
		<section id="about" class="about">
			<div class="wrapper group">
				<h1><?php echo $about_title; ?></h1>
				<h2><?php echo $about_sub_title; ?></h2>
				<?php echo $about_content; ?>
			</div>
		</section>
	</div>
	
<?php get_footer(); ?>