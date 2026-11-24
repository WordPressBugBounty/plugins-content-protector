<?php

namespace passster;

class PS_WC_Email {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_WC_Email.
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
	 * Constructor for PS_WC_Email
	 */
	public function __construct() {
		add_filter( 'woocommerce_email_classes', array( $this, 'register_mail' ), 90, 1 );
		add_action( 'woocommerce_order_status_completed', array( $this, 'trigger_mail' ), 10 );
	}

	/**
	 * Register new WooCommerce Mail for sending passwords.
	 *
	 * @param array $emails currently registered WooCommerce mails.
	 *
	 * @return array
	 */
	public function register_mail( array $emails ): array {
		require_once( PASSSTER_PATH . '/inc/woocommerce/class-ps-wc-email-template.php' );
		$emails['PSWC_Mail'] = new \PSWC_Mail();

		return $emails;
	}

	/**
	 * Triggers send password email if conditions are met.
	 *
	 * @param int $order_id current order id.
	 *
	 * @return void
	 */
	public function trigger_mail( $order_id ) {
		$wc_emails = WC()->mailer()->get_emails();
		$wc_emails['PSWC_Mail']->trigger( $order_id );
	}

	/**
	 * @param $order_id
	 *
	 * @return array|false
	 * @throws \Exception
	 */
	public static function get_mail_passwords( $order_id ) {
		// Get order and check if there are products that have protection metadata.
		$passwords = array();
		$order     = wc_get_order( $order_id );

		foreach ( $order->get_items() as $item_id => $item ) {
			$product_id = $item->get_product_id();

			// Check if it's a variation.
			if ( ! empty( $item->get_variation_id() ) ) {
				$product_id = $item->get_variation_id();
			}

			// Check for meta.
			$generate_password = get_post_meta( $product_id, 'passster_product_generate_password', true );

			if ( ! empty( $generate_password ) && 'yes' === $generate_password ) {
				$list_id = get_post_meta( $product_id, 'passster_product_password_list', true );
				$page_id = get_post_meta( $product_id, 'passster_product_protected_page', true );

				// Generate password and save it to password list.
				$password                 = apply_filters( 'passster_generated_password', PS_Helper::generate_password_for_list__premium_only( $list_id ) );
				$passwords[ $product_id ] = array( 'password' => $password );

				do_action('passster_password_generated', $password, $list_id, $product_id, $order_id );

				if ( ! empty( $page_id ) ) {
					// Generate unlock link.
					$unlock_link = PS_Helper::get_unlock_link__premium_only( $page_id, $password );

					$passwords[ $product_id ] = array(
						'password'    => $password,
						'page_id'     => $page_id,
						'unlock_link' => $unlock_link,
					);
				}
			}
		}

		if ( count( $passwords ) > 0 ) {
			return $passwords;
		}

		return false;
	}
}
