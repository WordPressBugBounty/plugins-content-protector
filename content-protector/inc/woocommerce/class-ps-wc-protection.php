<?php

namespace passster;

use Exception;


class PS_WC_Protection {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Constructor for PS_WC_Protection
	 */
	public function __construct() {
		// WooCommerce support.
		add_action( 'woocommerce_before_single_product_summary', array( $this, 'protect_product' ) );
		add_action( 'pre_get_posts', array( $this, 'protect_shop' ) );
		remove_action( 'woocommerce_no_products_found', 'wc_no_products_found' );
		add_action( 'woocommerce_no_products_found', array( $this, 'modify_shop_message' ) );
	}

	/**
	 * Returns instance of PS_WC_Protection.
	 *
	 * @return object
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Protect a WooCommerce product.
	 *
	 * @return void
	 * @throws Exception
	 */
	public function protect_product() {
		$post_id = get_the_id();

		$activate_protection = get_post_meta( $post_id, 'passster_activate_protection', true );

		// Redirection.
		$redirection = PS_Helper::get_redirect_url( $post_id );

		// user restriction.
		$user_restriction_type = get_post_meta( $post_id, 'passster_user_restriction_type', true );
		$user_restriction      = get_post_meta( $post_id, 'passster_user_restriction', true );

		// texts.
		$headline    = get_post_meta( $post_id, 'passster_headline', true );
		$instruction = get_post_meta( $post_id, 'passster_instruction', true );
		$placeholder = get_post_meta( $post_id, 'passster_placeholder', true );
		$button      = get_post_meta( $post_id, 'passster_button', true );
		$id          = get_post_meta( $post_id, 'passster_id', true );

		if ( ! $activate_protection ) {
			return;
		}

		// build atts array to validate.
		$atts      = array();
		$shortcode = '';

		$protection_type = get_post_meta( $post_id, 'passster_protection_type', true );

		switch ( $protection_type ) {
			case 'password':
				$password         = get_post_meta( $post_id, 'passster_password', true );
				$atts['password'] = $password;
				$shortcode        = '[passster password="' . $password . '" protection="full" ';
				break;
			case 'passwords':
				$passwords         = get_post_meta( $post_id, 'passster_passwords', true );
				$atts['passwords'] = $passwords;
				$shortcode         = '[passster passwords="' . $passwords . '" protection="full" ';
				break;
			case 'password_list':
				$password_list         = get_post_meta( $post_id, 'passster_password_list', true );
				$atts['password_list'] = esc_html( $password_list );
				$shortcode             = '[passster password_list="' . $password_list . '" protection="full" ';
				break;
			case 'recaptcha':
				$atts['recaptcha'] = true;
				$shortcode         = '[passster recaptcha="true" protection="full" ';
				break;
			case 'turnstile':
				$atts['turnstile'] = true;
				$shortcode         = '[passster turnstile="true" protection="full" ';
				break;
		}

		if ( ! empty( $user_restriction_type ) && ! empty( $user_restriction ) ) {
			if ( 'user-role' === $user_restriction_type ) {
				$atts['role'] = esc_html( $user_restriction );
			} else {
				$atts['user'] = esc_html( $user_restriction );
			}
		}

		if ( ! empty( $redirection ) ) {
			$shortcode .= 'redirect="' . esc_html( $redirection ) . '" ';
		}

		if ( ! empty( $headline ) ) {
			$shortcode .= 'headline="' . esc_html( $headline ) . '" ';
		}

		if ( ! empty( $instruction ) ) {
			$shortcode .= 'instruction="' . base64_encode( $instruction ) . '" ';
		}

		if ( ! empty( $placeholder ) ) {
			$shortcode .= 'placeholder="' . esc_html( $placeholder ) . '" ';
		}

		if ( ! empty( $button ) ) {
			$shortcode .= 'button="' . esc_html( $button ) . '" ';
		}

		if ( ! empty( $id ) ) {
			$shortcode .= 'id="' . esc_html( $id ) . '" ';
		}


		$shortcode .= '][/passster]';

		// check if valid before restrict anything.
		$valid = PS_Conditional::is_valid( $atts );

		if ( ! $valid ) {
			echo do_shortcode( $shortcode );

			add_filter( 'woocommerce_is_purchasable', '__return_false' );

			// unhook allwoocommerce_before_single_product_summary.
			remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );
			remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );

			// unhook woocommerce_single_product_summary.
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50 );

			// unhook woocommerce_after_single_product_summary.
			remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
			remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
			remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

			// Unhook German Market strings.
			add_filter( 'wgm_product_summary_parts_after', function ( $output_parts, $product, $hook ) {
				unset( $output_parts['shipping'] );
				unset( $output_parts['tax'] );
				unset( $output_parts['ppu'] );

				return $output_parts;
			}, 50, 3 );

			// Unhook Germanized strings.
			add_filter( 'pre_option_woocommerce_gzd_display_product_detail_tax_info', function () {
				return 'no';
			} );

			add_filter( 'pre_option_woocommerce_gzd_display_single_product_unit_price', function () {
				return 'no';
			} );

			add_filter( 'pre_option_woocommerce_gzd_display_product_detail_shipping_costs_info', function () {
				return 'no';
			} );

			add_filter( 'pre_option_woocommerce_gzd_display_single_product_delivery_time', function () {
				return 'no';
			} );

			add_filter( 'pre_option_woocommerce_gzd_display_single_product_units', function () {
				return 'no';
			} );
		}
	}

	/**
	 * Protect a WooCommerce product.
	 *
	 * @return void
	 * @throws Exception
	 */
	public function protect_shop( $q ) {

		if ( ! $q->is_main_query() ) {
			return;
		}

		if ( ! $q->is_post_type_archive() ) {
			return;
		}

		$post_id = get_option( 'woocommerce_shop_page_id' );

		$activate_protection = get_post_meta( $post_id, 'passster_activate_protection', true );

		// user restriction.
		$user_restriction_type = get_post_meta( $post_id, 'passster_user_restriction_type', true );
		$user_restriction      = get_post_meta( $post_id, 'passster_user_restriction', true );

		if ( ! $activate_protection ) {
			return;
		}

		// build atts array to validate.
		$atts = array();

		$protection_type = get_post_meta( $post_id, 'passster_protection_type', true );

		switch ( $protection_type ) {
			case 'password':
				$password         = get_post_meta( $post_id, 'passster_password', true );
				$atts['password'] = $password;
				break;
			case 'passwords':
				$passwords         = get_post_meta( $post_id, 'passster_passwords', true );
				$atts['passwords'] = $passwords;
				break;
			case 'password_list':
				$password_list         = get_post_meta( $post_id, 'passster_password_list', true );
				$atts['password_list'] = esc_html( $password_list );
				break;
			case 'recaptcha':
				$atts['recaptcha'] = true;
				break;
			case 'turnstile':
				$atts['turnstile'] = true;
				break;
		}

		if ( ! empty( $user_restriction_type ) && ! empty( $user_restriction ) ) {
			if ( 'user-role' === $user_restriction_type ) {
				$atts['role'] = esc_html( $user_restriction );
			} else {
				$atts['user'] = esc_html( $user_restriction );
			}
		}


		// check if valid before restrict anything.
		$valid = PS_Conditional::is_valid( $atts );

		if ( ! $valid ) {
			if ( ! is_admin() && is_shop() ) {
				$q->set( 'post__in', array( 0 ) );
			}
		}

		return $q;
	}

	/**
	 * Protect a WooCommerce product.
	 *
	 * @return void
	 * @throws Exception
	 */
	public function modify_shop_message() {

		if ( ! is_shop() ) {
			return;
		}

		$post_id = get_option( 'woocommerce_shop_page_id' );

		$activate_protection = get_post_meta( $post_id, 'passster_activate_protection', true );

		// user restriction.
		$user_restriction_type = get_post_meta( $post_id, 'passster_user_restriction_type', true );
		$user_restriction      = get_post_meta( $post_id, 'passster_user_restriction', true );

		// Redirection.
		$redirection = PS_Helper::get_redirect_url( $post_id );

		// texts.
		$headline    = get_post_meta( $post_id, 'passster_headline', true );
		$instruction = get_post_meta( $post_id, 'passster_instruction', true );
		$placeholder = get_post_meta( $post_id, 'passster_placeholder', true );
		$button      = get_post_meta( $post_id, 'passster_button', true );
		$id          = get_post_meta( $post_id, 'passster_id', true );

		if ( ! $activate_protection ) {
			return;
		}

		// build atts array to validate.
		$atts = array();

		$protection_type = get_post_meta( $post_id, 'passster_protection_type', true );

		switch ( $protection_type ) {
			case 'password':
				$password         = get_post_meta( $post_id, 'passster_password', true );
				$atts['password'] = $password;
				$shortcode        = '[passster password="' . $password . '" ';
				break;
			case 'passwords':
				$passwords         = get_post_meta( $post_id, 'passster_passwords', true );
				$atts['passwords'] = $passwords;
				$shortcode         = '[passster passwords="' . $passwords . '" ';
				break;
			case 'password_list':
				$password_list         = get_post_meta( $post_id, 'passster_password_list', true );
				$atts['password_list'] = esc_html( $password_list );
				$shortcode             = '[passster password_list="' . $password_list . '" ';
				break;
			case 'recaptcha':
				$atts['recaptcha'] = true;
				$shortcode         = '[passster recaptcha="true" ';
				break;
			case 'turnstile':
				$atts['turnstile'] = true;
				$shortcode         = '[passster turnstile="true" ';
				break;
		}

		if ( ! empty( $user_restriction_type ) && ! empty( $user_restriction ) ) {
			if ( 'user-role' === $user_restriction_type ) {
				$atts['role'] = esc_html( $user_restriction );
			} else {
				$atts['user'] = esc_html( $user_restriction );
			}
		}

		if ( ! empty( $redirection ) ) {
			$shortcode .= 'redirect="' . esc_html( $redirection ) . '" ';
		}

		if ( ! empty( $headline ) ) {
			$shortcode .= 'headline="' . esc_html( $headline ) . '" ';
		}

		if ( ! empty( $instruction ) ) {
			$shortcode .= 'instruction="' . base64_encode( $instruction ) . '" ';
		}

		if ( ! empty( $placeholder ) ) {
			$shortcode .= 'placeholder="' . esc_html( $placeholder ) . '" ';
		}

		if ( ! empty( $button ) ) {
			$shortcode .= 'button="' . esc_html( $button ) . '" ';
		}

		if ( ! empty( $id ) ) {
			$shortcode .= 'id="' . esc_html( $id ) . '" ';
		}

		$shortcode .= '][/passster]';

		// check if valid before restrict anything.
		$valid = PS_Conditional::is_valid( $atts );

		if ( ! $valid ) {
			echo do_shortcode( $shortcode );
		}
	}
}
