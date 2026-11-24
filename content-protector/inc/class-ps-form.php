<?php

namespace passster;

class PS_Form {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_Form.
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
	 * Get password form markup and replace placeholders
	 *
	 * @return string
	 */
	public static function get_password_form(): string {
		$options = get_option( 'passster' );

		ob_start();
		include( apply_filters( 'passster_password_form', PASSSTER_PATH . '/inc/templates/password-form.php' ) );
		$password_form = ob_get_contents();
		ob_end_clean();

		$password_form_placeholders = array(
			'[PASSSTER_AUTH]'    => 'passster_password',
			'[PS_AJAX_LOADER]'   => PASSSTER_URL . '/assets/public/ps-loader.svg',
		);

		$show_password       = $options['show_password'] ?? false;
		$show_password_label = $options['show_password_label'] ?? __( 'Show Password', 'content-protector' );

		if ( $show_password ) {
			$password_form_placeholders['[PASSSTER_SHOW_PASSWORD]'] = '<label for="passster-password-hint"><input name="passster-password-hint" id="passster-password-hint" type="checkbox" onclick="showPassword()"/> ' . esc_html( $show_password_label ) . '</label>';
		} else {
			$password_form_placeholders['[PASSSTER_SHOW_PASSWORD]'] = '';
		}

		foreach ( $password_form_placeholders as $placeholder => $string ) {
			$password_form = str_replace( $placeholder, $string, $password_form );
		}

		return $password_form;
	}

	/**
	 * Get recaptcha form markup and replace placeholders
	 *
	 * @return string
	 */
	public static function get_recaptcha_form__premium_only(): string {
		ob_start();
		include( apply_filters( 'passster_recaptcha_form', PASSSTER_PATH . '/inc/templates/recaptcha-form.php' ) );
		$recaptcha_form = ob_get_contents();
		ob_end_clean();

		return $recaptcha_form;
	}

	/**
	 * Get hcaptcha form markup and replace placeholders
	 *
	 * @return string
	 */
	public static function get_hcaptcha_form__premium_only(): string {
		$options = get_option( 'passster' );

		ob_start();
		include( apply_filters( 'passster_hcaptcha_form', PASSSTER_PATH . '/inc/templates/hcaptcha-form.php' ) );
		$recaptcha_form = ob_get_contents();
		ob_end_clean();

		$recaptcha_form_placeholders = array(
			'[PASSSTER_BUTTON_LABEL]' => esc_html( $options['button_label'] ),
			'[PASSSTER_SITE_KEY]'     => esc_attr( $options['recaptcha_site_key'] ),
		);

		foreach ( $recaptcha_form_placeholders as $placeholder => $string ) {
			$recaptcha_form = str_replace( $placeholder, $string, $recaptcha_form );
		}

		return $recaptcha_form;
	}

	/**
	 * Get recaptcha v2 form markup and replace placeholders
	 *
	 * @return string
	 */
	public static function get_recaptcha_v2_form__premium_only(): string {
		$options = get_option( 'passster' );

		ob_start();
		include( apply_filters( 'passster_recaptcha_v2_form', PASSSTER_PATH . '/inc/templates/recaptcha-v2-form.php' ) );
		$recaptcha_form = ob_get_contents();
		ob_end_clean();

		$recaptcha_form_placeholders = array(
			'[PASSSTER_BUTTON_LABEL]' => esc_html( $options['button_label'] ),
		);

		foreach ( $recaptcha_form_placeholders as $placeholder => $string ) {
			$recaptcha_form = str_replace( $placeholder, $string, $recaptcha_form );
		}

		return $recaptcha_form;
	}

	/**
	 * Get turnstile form markup and replace placeholders
	 *
	 * @return string
	 */
	public static function get_turnstile_form__premium_only(): string {
		$options = get_option( 'passster' );

		ob_start();
		include( apply_filters( 'passster_turnstile_form', PASSSTER_PATH . '/inc/templates/turnstile-form.php' ) );
		$recaptcha_form = ob_get_contents();
		ob_end_clean();

		$recaptcha_form_placeholders = array(
			'[PASSSTER_BUTTON_LABEL]' => esc_html( $options['button_label'] ),
			'[PASSSTER_SITE_KEY]'     => esc_attr( $options['turnstile_site_key'] ),
		);

		foreach ( $recaptcha_form_placeholders as $placeholder => $string ) {
			$recaptcha_form = str_replace( $placeholder, $string, $recaptcha_form );
		}

		return $recaptcha_form;
	}
}
