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
			</div>
		</section>
		<section id="services" class="services">
			<div class="wrapper group">
				<h1><?php echo $services_title; ?></h1>
				<h2><?php echo $services_sub_title; ?></h2>

				<ul>
					<li><?php echo $services_label_a; ?></li>
					<li><?php echo $services_label_b; ?></li>
					<li><?php echo $services_label_c; ?></li>
				</ul>

				<section>
					<?php echo $services_content_a; ?>
				</section>

				<section>
					<?php echo $services_content_b; ?>
				</section>

				<section>
					<?php echo $services_content_c; ?>
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