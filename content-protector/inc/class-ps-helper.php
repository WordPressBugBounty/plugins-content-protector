<?php

namespace passster;

use Exception;

class PS_Helper {

	public static function remember_unlock( string $proof ) {
		$options = get_option( 'passster', array() );

		if ( ! empty( $options['disable_cookie'] ) ) {
			return;
		}

		$existing = array();
		if ( ! empty( $_COOKIE['passster'] ) ) {
			$existing = array_filter( explode( '|', esc_html( wp_unslash( $_COOKIE['passster'] ) ) ) );
		}

		if ( in_array( $proof, $existing, true ) ) {
			return;
		}

		$existing[] = $proof;

		$unit     = $options['cookie_duration_unit'] ?? 'days';
		$duration = (int) ( $options['cookie_duration'] ?? 1 );

		switch ( $unit ) {
			case 'hours':
				$expires = time() + ( $duration * HOUR_IN_SECONDS );
				break;
			case 'minutes':
				$expires = time() + ( $duration * MINUTE_IN_SECONDS );
				break;
			default:
				$expires = time() + ( $duration * DAY_IN_SECONDS );
				break;
		}

		setcookie(
			'passster',
			implode( '|', $existing ),
			array(
				'expires'  => $expires,
				'path'     => '/',
				'secure'   => is_ssl(),
				'httponly' => false,
				'samesite' => 'Strict',
			)
		);
	}

	/**
	 * Redirect URL of a protected post, only when Advanced Options is enabled (a stale value may remain saved after disabling it).
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return string
	 */
	public static function get_redirect_url( $post_id ): string {
		if ( ! get_post_meta( $post_id, 'passster_activate_misc_settings', true ) ) {
			return '';
		}

		return (string) get_post_meta( $post_id, 'passster_redirect_url', true );
	}

	/**
	 * Escape a value for use inside a quoted shortcode attribute.
	 * Brackets are encoded too, since shortcode parsing stops at them even inside quotes.
	 *
	 * @param mixed $value Attribute value.
	 *
	 * @return string
	 */
	public static function shortcode_attr( $value ): string {
		return str_replace( array( '[', ']' ), array( '&#91;', '&#93;' ), esc_attr( (string) $value ) );
	}

	/**
	 * Build the $atts array that PS_Conditional::is_valid() checks for a post.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return array
	 */
	public static function get_protection_atts( int $post_id ): array {
		$atts = array();

		if ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
			$protection_type = get_post_meta( $post_id, 'passster_protection_type', true ) ?: 'password';

			switch ( $protection_type ) {
				case 'password':
					$atts['password'] = get_post_meta( $post_id, 'passster_password', true );
					break;
				case 'passwords':
					$atts['passwords'] = get_post_meta( $post_id, 'passster_passwords', true );
					break;
				case 'password_list':
					$atts['password_list'] = get_post_meta( $post_id, 'passster_password_list', true );
					break;
				case 'password_lists':
					$atts['password_lists'] = implode( '|', (array) get_post_meta( $post_id, 'passster_password_lists', true ) );
					break;
				case 'recaptcha':
					$atts['recaptcha'] = true;
					break;
				case 'turnstile':
					$atts['turnstile'] = true;
					break;
			}

			$user_restriction_type = get_post_meta( $post_id, 'passster_user_restriction_type', true );
			$user_restriction      = get_post_meta( $post_id, 'passster_user_restriction', true );

			if ( ! empty( $user_restriction_type ) && ! empty( $user_restriction ) ) {
				if ( 'user-role' === $user_restriction_type ) {
					$atts['role'] = $user_restriction;
				} else {
					$atts['user'] = $user_restriction;
				}
			}
		} else {
			$atts['password'] = get_post_meta( $post_id, 'passster_password', true );
		}

		return $atts;
	}

	/**
	 * Plain-text replacement for locked content where a form can't be rendered (excerpts, feeds, SEO).
	 *
	 * @return string
	 */
	public static function get_protected_text(): string {
		$options = get_option( 'passster', array() );
		$text    = ! empty( $options['instruction'] ) ? $options['instruction'] : __( 'This content is password-protected. Please verify with a password to unlock the content.', 'content-protector' );

		return wp_strip_all_tags( $text );
	}

	/**
	 * Get string between two strings.
	 *
	 * @param string $string string to find.
	 * @param string $start start string.
	 * @param string $end end string.
	 *
	 * @return string
	 */
	public static function get_string_between( string $string, string $start, string $end ): string {
		$string = ' ' . $string;
		$ini    = strpos( $string, $start );

		if ( $ini == 0 ) {
			return '';
		}

		$ini += strlen( $start );
		$len = strpos( $string, $end, $ini ) - $ini;

		return substr( $string, $ini, $len );
	}

	/**
	 * Preg matches shortcode and return cleaned output.
	 *
	 * @param string $content given content.
	 *
	 * @return string
	 */
	public static function get_shortcode_content( string $content, $password, string $mode = 'password' ) {
		$string = '';

		if ( 'captcha' === $mode ) {
			if ( ! \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
				return $string;
			}

			$recaptcha_re = '/\[passster[^\]]*recaptcha="true"[^\]]*\]/';
			$turnstile_re = '/\[passster[^\]]*turnstile="true"[^\]]*\]/';

			if ( preg_match( $recaptcha_re, $content, $m ) ) {
				$string = self::get_string_between( $content, $m[0], '[/passster]' );
			} elseif ( preg_match( $turnstile_re, $content, $m ) ) {
				$string = self::get_string_between( $content, $m[0], '[/passster]' );
			}

			return $string;
		}

		$password = preg_quote( (string) $password, '/' );
		$pass_re  = '/\[passster[^\]]*password="' . $password . '"[^\]]*\]/';

		if ( preg_match( $pass_re, $content, $m ) ) {
			$string = self::get_string_between( $content, $m[0], '[/passster]' );
		}

		return $string;
	}

	/**
	 * Split a comma-separated password string, dropping empty entries.
	 *
	 * @param mixed $passwords_str Raw meta value.
	 * @param bool  $remove_spaces Whether to strip spaces first.
	 *
	 * @return array
	 */
	public static function parse_password_list( $passwords_str, bool $remove_spaces = false ): array {
		$passwords_str = (string) $passwords_str;

		if ( $remove_spaces ) {
			$passwords_str = str_replace( ' ', '', $passwords_str );
		}

		// A missing/empty meta value explodes to [''], which would match an empty input.
		return array_values(
			array_filter(
				explode( ',', $passwords_str ),
				function ( $password ) {
					return '' !== trim( $password );
				}
			)
		);
	}

	/**
	 * Generate password.
	 *
	 * @return string
	 * @throws Exception
	 */
	public static function generate_password_for_list__premium_only( $list_id ): string {
		$options   = get_option( 'passster' );
		$length    = $options['password_length'] ?? 12;
		$uppercase = $options['include_uppercase'] ?? true;
		$numbers   = $options['include_numbers'] ?? true;
		$symbols   = $options['include_symbols'] ?? true;

		// Set allowed characters.
		$chars = 'abcdefghijklmnopqrstuvwxyz';

		if ( $uppercase ) {
			$chars .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}

		if ( $numbers ) {
			$chars .= '0123456789';
		}

		if ( $symbols ) {
			$chars .= '!@#$%^&*()_+-=';
		}

		// Combine to string.
		$str = '';
		$max = strlen( $chars ) - 1;

		for ( $i = 0; $i < $length; $i ++ ) {
			$str .= $chars[ random_int( 0, $max ) ];
		}

		// Now save it to the password list.
		$passwords = get_post_meta( $list_id, 'passster_passwords', true );
		$passwords .= ',' . $str;
		update_post_meta( $list_id, 'passster_passwords', $passwords );

		return $str;
	}

	/**
	 * Get unlock link.
	 *
	 * @param int $post_id given post id.
	 * @param string $password given password.
	 *
	 * @return string
	 */
	public static function get_unlock_link__premium_only( int $post_id, string $password ): string {
		// Set up the link.
		$hash = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );
		$link = get_permalink( $post_id ) . '?pass=' . $hash;

		// Check for bitly.
		$options = get_option( 'passster' );

		if ( ! empty( $options['bitly_token'] ) ) {
			$link = PS_Helper::get_bitly_url__premium_only( $link );
		}

		return $link;
	}


	/**
	 * Get short URL from Bit.ly.
	 *
	 * @param string $unlock_link unlock URL from Passster.
	 *
	 * @return string
	 */
	public static function get_bitly_url__premium_only( string $unlock_link ): string {
		$options = get_option( 'passster' );

		$data = wp_json_encode( array(
			'long_url' => $unlock_link
		) );

		$response = wp_remote_post( 'https://api-ssl.bitly.com/v4/shorten', array(
			'headers' => array(
				'Authorization' => 'Bearer ' . $options['bitly_token'],
				'Content-Type'  => 'application/json',
			),
			'body'    => $data,
		) );

		if ( ! is_wp_error( $response ) ) {
			if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
				$body = json_decode( wp_remote_retrieve_body( $response ) );

				return $body->link;
			}
		}

		return $unlock_link;
	}
}
