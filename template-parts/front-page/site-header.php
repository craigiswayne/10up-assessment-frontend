<header id="site-header">
	<div class="column">
		<a id="site-logo" href="<?= site_url() ?>">
			<?php if ( has_custom_logo() ) : ?>
               <?php the_custom_logo(); ?>
            <?php else: ?>
                <img loading="lazy" width="171" height="40" src="<?php echo get_template_directory_uri(); ?>/spec/icons/site_logo.svg" tabindex="0" alt="Site Logo">
			<?php endif; ?>
		</a>
	</div>
	<div class="column position-relative">
		<img id="menu-toggle" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/spec/icons/Icon:Menu.svg" width="37" height="28" tabindex="0" alt="menu" />
	</div>
</header>
