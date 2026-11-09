<?php
/**
 * Template used for a password-protected WooCommerce product on block themes.
 *
 * @package Passster
 */

defined( 'ABSPATH' ) || exit;

// Rendered before wp_head() so the styles these blocks enqueue get printed.
ob_start();
block_header_area();
$passster_header = ob_get_clean();

ob_start();
block_footer_area();
$passster_footer = ob_get_clean();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="wp-site-blocks">
	<?php echo $passster_header; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<main class="wp-block-group">
		<?php echo \passster\PS_Product_Protection::get_protected_form(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</main>
	<?php echo $passster_footer; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>
<?php wp_footer(); ?>
</body>
</html>
