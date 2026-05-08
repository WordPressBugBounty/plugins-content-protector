<?php
/**
 * Template used when a regular post category or taxonomy archive is password-protected.
 * Used only for classic (non-block) themes; block themes use the render_block filter instead.
 *
 * @package Passster
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>

<div class="passster-protected-archive">
	<header class="page-header">
		<?php the_archive_title( '<h1 class="page-title">', '</h1>' ); ?>
		<?php the_archive_description( '<div class="archive-description">', '</div>' ); ?>
	</header>

	<?php echo \passster\PS_Category_Lock::get_protected_form(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>

<?php
get_footer();
