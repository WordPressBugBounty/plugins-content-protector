<?php

use passster\PS_WC_Email;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WC_Email' ) ) {
	return;
}

/**
 * Class WCOE_Mail
 */
class PSWC_Mail extends WC_Email {

	/**
	 * Generated passwords keyed by product ID (empty in WooCommerce email preview).
	 *
	 * @var array|false
	 */
	public $passwords = array();

	/**
	 * Create an instance of the class.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {
		// Email slug we can use to filter other data.
		$this->id          = 'pwc_email';
		$this->title       = esc_html__( 'Passster: Send Password', 'content-protector' );
		$this->description = esc_html__( 'Sends the generated password to a customer after product purchase.', 'content-protector' );
		// For admin area to let the user know we are sending this email to customers.
		$this->customer_email = true;
		$this->heading        = esc_html__( 'Your personal password', 'content-protector' );
		$this->subject        = sprintf( esc_html_x( '[%s] Your personal password', 'default email subject for sending customers their personal passsword.', 'content-protector' ), '{blogname}' );

		// Template paths.
		$this->template_html  = 'emails/pwc-email.php';
		$this->template_plain = 'emails/plain/pwc-email.php';
		$this->template_base  = PASSSTER_PATH . '/inc/woocommerce/templates/';

		parent::__construct();

		add_filter( 'woocommerce_prepare_email_for_preview', array( $this, 'prepare_preview' ) );
	}

	/**
	 * Add a sample password for the WooCommerce email preview.
	 *
	 * @param WC_Email $email email object being previewed.
	 *
	 * @return WC_Email
	 */
	public function prepare_preview( $email ) {
		if ( $email instanceof self ) {
			$email->passwords = array(
				0 => array(
					'product_name' => __( 'Sample Product', 'content-protector' ),
					'password'     => '123456',
				),
			);
		}

		return $email;
	}

	/**
	 * Triggers the email if matched conditions.
	 *
	 * @param int $order_id given order id.
	 *
	 * @return void
	 */
	public function trigger( $order_id ) {
		$this->object    = wc_get_order( $order_id );
		$this->passwords = PS_WC_Email::get_mail_passwords( $order_id );

		if ( version_compare( '3.0.0', WC()->version, '>' ) ) {
			$order_email = $this->object->billing_email;
		} else {
			$order_email = $this->object->get_billing_email();
		}

		$this->recipient = $order_email;

		if ( ! $this->is_enabled() || ! $this->get_recipient() ) {
			return;
		}

		if ( false !== $this->passwords ) {
			$this->send( $this->get_recipient(), $this->get_subject(), $this->get_content(), $this->get_headers(), $this->get_attachments() );
		}
	}

	/**
	 * Get content html.
	 *
	 * @return string
	 */
	public function get_content_html() {
		return wc_get_template_html(
			$this->template_html,
			array(
				'order'         => $this->object,
				'email_heading' => $this->get_heading(),
				'passwords'     => $this->passwords,
				'sent_to_admin' => false,
				'plain_text'    => false,
				'email'         => $this,
			),
			'',
			$this->template_base
		);
	}

	/**
	 * Get content plain.
	 *
	 * @return string
	 */
	public function get_content_plain() {
		return wc_get_template_html(
			$this->template_plain,
			array(
				'order'         => $this->object,
				'email_heading' => $this->get_heading(),
				'passwords'     => $this->passwords,
				'sent_to_admin' => false,
				'plain_text'    => true,
				'email'         => $this,
			),
			'',
			$this->template_base
		);
	}
}