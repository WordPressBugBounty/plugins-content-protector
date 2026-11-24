<?php
/**
 * Template used when a post type archive (or one of its exclusive taxonomy
 * archives) is password-protected via post type level protection.
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

	<?php echo \passster\PS_Post_Type_Lock::get_protected_form(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>

<?php
get_footer();
