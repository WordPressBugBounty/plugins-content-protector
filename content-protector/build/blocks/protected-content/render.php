<?php
/**
 * Server-side rendering for the Protected Content block.
 *
 * @package Passster
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block content (inner blocks).
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

// Early exit if classes not loaded yet (edge case).
if ( ! class_exists( 'passster\PS_Conditional' ) || ! class_exists( 'passster\PS_Form' ) ) {
	echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return;
}

// Ensure we have a valid block ID.
if ( empty( $attributes['blockId'] ) ) {
	$attributes['blockId'] = 'ps-' . wp_generate_password( 8, false );
}

// Find the synced Protected Area by block ID.
$synced_area_id = 0;
$synced_areas = get_posts( array(
	'post_type'      => 'protected_areas',
	'posts_per_page' => 1,
	'fields'         => 'ids',
	'meta_query'     => array(
		array(
			'key'   => '_passster_block_id',
			'value' => $attributes['blockId'],
		),
	),
) );
if ( ! empty( $synced_areas ) ) {
	$synced_area_id = $synced_areas[0];
}

use passster\PS_Conditional;
use passster\PS_Form;

// Get block attributes.
$block_id        = ! empty( $attributes['blockId'] ) ? sanitize_text_field( $attributes['blockId'] ) : '';
$protection_type = ! empty( $attributes['protectionType'] ) ? sanitize_text_field( $attributes['protectionType'] ) : 'password';
$password        = ! empty( $attributes['password'] ) ? $attributes['password'] : '';
$passwords       = ! empty( $attributes['passwords'] ) ? $attributes['passwords'] : '';
$password_list   = ! empty( $attributes['passwordList'] ) ? absint( $attributes['passwordList'] ) : 0;

// User Restriction attributes.
$user_restriction       = ! empty( $attributes['userRestriction'] );
$user_restriction_type  = ! empty( $attributes['userRestrictionType'] ) ? sanitize_text_field( $attributes['userRestrictionType'] ) : 'username';
$user_restriction_value = ! empty( $attributes['userRestrictionValue'] ) ? sanitize_text_field( $attributes['userRestrictionValue'] ) : '';

// Override Defaults attributes.
$overwrite_defaults = ! empty( $attributes['overwriteDefaults'] );
$headline           = ! empty( $attributes['headline'] ) ? sanitize_text_field( $attributes['headline'] ) : '';
$instruction        = ! empty( $attributes['instruction'] ) ? wp_kses_post( $attributes['instruction'] ) : '';
$placeholder        = ! empty( $attributes['placeholder'] ) ? sanitize_text_field( $attributes['placeholder'] ) : '';
$button_label       = ! empty( $attributes['buttonLabel'] ) ? sanitize_text_field( $attributes['buttonLabel'] ) : '';
$form_id            = ! empty( $attributes['formId'] ) ? sanitize_text_field( $attributes['formId'] ) : '';

// Advanced Options attributes.
$advanced_options = ! empty( $attributes['advancedOptions'] );
$redirect_url     = ! empty( $attributes['redirectUrl'] ) ? esc_url( $attributes['redirectUrl'] ) : '';
$hide_form        = ! empty( $attributes['hideForm'] );

// Schedule attributes (PRO only).
$schedule_enabled = ! empty( $attributes['scheduleEnabled'] );
$schedule_start   = ! empty( $attributes['scheduleStart'] ) ? $attributes['scheduleStart'] : '';
$schedule_end     = ! empty( $attributes['scheduleEnd'] ) ? $attributes['scheduleEnd'] : '';

// Check schedule - if outside the scheduled period, show content without protection.
if ( $schedule_enabled && \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
	$now = current_time( 'timestamp' );
	$is_within_schedule = true;

	if ( ! empty( $schedule_start ) ) {
		$start_time = strtotime( $schedule_start );
		if ( $now < $start_time ) {
			$is_within_schedule = false;
		}
	}

	if ( ! empty( $schedule_end ) ) {
		$end_time = strtotime( $schedule_end );
		if ( $now > $end_time ) {
			$is_within_schedule = false;
		}
	}

	// If outside schedule, show content without protection.
	if ( ! $is_within_schedule ) {
		echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		return;
	}
}

// If no protection is set, just render the content.
if ( 'password' === $protection_type && empty( $password ) ) {
	echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return;
}

if ( 'passwords' === $protection_type && empty( $passwords ) ) {
	echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return;
}

if ( 'password_list' === $protection_type && empty( $password_list ) ) {
	echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return;
}

// Build attributes array for validation.
$atts = array();

switch ( $protection_type ) {
	case 'password':
		$atts['password'] = $password;
		break;
	case 'passwords':
		$atts['passwords'] = $passwords;
		break;
	case 'password_list':
		$atts['password_list'] = $password_list;
		break;
}

// Add user restriction to validation attributes if enabled.
if ( $user_restriction && ! empty( $user_restriction_value ) && 'no-role' !== $user_restriction_value ) {
	if ( 'user-role' === $user_restriction_type ) {
		$atts['role'] = $user_restriction_value;
	} else {
		$atts['user'] = $user_restriction_value;
	}
}

// Check if already unlocked.
$is_unlocked = false;
if ( class_exists( PS_Conditional::class ) ) {
	$is_unlocked = PS_Conditional::is_valid( $atts );
}

// If unlocked, show content.
if ( $is_unlocked ) {
	echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return;
}

// If hide_form is enabled and not unlocked, show nothing (or just the content for cookie-based access).
if ( $advanced_options && $hide_form ) {
	echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return;
}

// Get global options for form defaults.
$options = get_option( 'passster', array() );

// Build the protection form using global settings.
$form = PS_Form::get_password_form();

// Form ID - use custom ID if set, otherwise block ID.
$final_form_id = ! empty( $form_id ) ? $form_id : 'ps-block-' . $block_id;
$form = str_replace( '[PASSSTER_ID]', esc_attr( $final_form_id ), $form );

// Hide form placeholder.
$form = str_replace( '[PASSSTER_HIDE]', '', $form );

// Redirect URL.
if ( $advanced_options && ! empty( $redirect_url ) ) {
	$form = str_replace( '[PASSSTER_REDIRECT]', esc_url( $redirect_url ), $form );
} else {
	$form = str_replace( '[PASSSTER_REDIRECT]', '', $form );
}

// Label.
$form = str_replace( '[PASSSTER_LABEL]', esc_html__( 'Enter your password', 'content-protector' ), $form );

// Headline tag.
$allowed_headline_tags = array( 'span', 'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' );
$headline_tag          = isset( $options['headline_tag'] ) && in_array( $options['headline_tag'], $allowed_headline_tags, true ) ? $options['headline_tag'] : 'span';
$form                  = str_replace( '[PASSSTER_HEADLINE_TAG]', $headline_tag, $form );

// Headline - use override if enabled and set, otherwise global.
if ( ! empty( $options['hide_headline'] ) ) {
	$form = str_replace( '[PASSSTER_FORM_HEADLINE]', '', $form );
} elseif ( $overwrite_defaults && ! empty( $headline ) ) {
	$form = str_replace( '[PASSSTER_FORM_HEADLINE]', esc_html( $headline ), $form );
} else {
	$form = str_replace( '[PASSSTER_FORM_HEADLINE]', esc_html( $options['headline'] ?? '' ), $form );
}

// Instruction - use override if enabled and set, otherwise global.
if ( $overwrite_defaults && ! empty( $instruction ) ) {
	$form = str_replace( '[PASSSTER_FORM_INSTRUCTIONS]', wp_kses_post( $instruction ), $form );
} else {
	$form = str_replace( '[PASSSTER_FORM_INSTRUCTIONS]', wp_kses_post( $options['instruction'] ?? '' ), $form );
}

// Placeholder - use override if enabled and set, otherwise global.
if ( $overwrite_defaults && ! empty( $placeholder ) ) {
	$form = str_replace( '[PASSSTER_PLACEHOLDER]', esc_attr( $placeholder ), $form );
} else {
	$form = str_replace( '[PASSSTER_PLACEHOLDER]', esc_attr( $options['placeholder'] ?? '' ), $form );
}

// Button label - use override if enabled and set, otherwise global.
if ( $overwrite_defaults && ! empty( $button_label ) ) {
	$form = str_replace( '[PASSSTER_BUTTON_LABEL]', esc_html( $button_label ), $form );
} else {
	$form = str_replace( '[PASSSTER_BUTTON_LABEL]', esc_html( $options['button_label'] ?? '' ), $form );
}

// Protection type placeholder.
$form = str_replace( '[PASSSTER_TYPE]', esc_attr( $protection_type ), $form );

// Protection mode - 'block' for Content Lock blocks (REST API validates from block attributes).
$form = str_replace( '[PASSSTER_PROTECTION]', 'block', $form );

// Password list placeholders.
$form = str_replace( '[PASSSTER_LIST]', esc_attr( $password_list ), $form );
$form = str_replace( '[PASSSTER_LISTS]', '', $form );

// Area placeholder (set to 0 for blocks - we use block_id instead).
$form = str_replace( '[PASSSTER_AREA]', '0', $form );

// ACF placeholder (not used in blocks).
$form = str_replace( '[PASSSTER_ACF]', '', $form );

// Store content for JS to reveal after unlock.
$content_encoded = base64_encode( $content );

// Wrapper classes.
$wrapper_classes = array( 'passster-protected-content', 'wp-block-passster-protected-content' );
if ( ! empty( $attributes['align'] ) ) {
	$wrapper_classes[] = 'align' . $attributes['align'];
}
if ( ! empty( $attributes['className'] ) ) {
	$wrapper_classes[] = $attributes['className'];
}

// Data attributes for JS handling.
$data_attrs = array(
	'block-id'        => $block_id,
	'protection-type' => $protection_type,
	'post-id'         => get_the_ID(),
);

if ( $advanced_options && ! empty( $redirect_url ) ) {
	$data_attrs['redirect'] = $redirect_url;
}

// Output.
?>
<div 
	class="<?php echo esc_attr( implode( ' ', $wrapper_classes ) ); ?>"
	<?php foreach ( $data_attrs as $key => $value ) : ?>
		data-<?php echo esc_attr( $key ); ?>="<?php echo esc_attr( $value ); ?>"
	<?php endforeach; ?>
>
	<div class="passster-protected-content__form">
		<?php echo $form; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>
	<div class="passster-protected-content__content" style="display: none;" data-content="<?php echo esc_attr( $content_encoded ); ?>">
	</div>
</div>
<?php
