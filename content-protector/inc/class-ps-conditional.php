<?php

namespace passster;

use Exception;

class PS_Conditional {

	/**
	 * Check if valid authentication exists.
	 *
	 * @param array $atts array of attributes.
	 *
	 * @return boolean
	 * @throws Exception
	 */
	public static function is_valid( array $atts ): bool {
		$inputs = array();

		// is Cookie set? Support multiple hashes (pipe-separated).
		if ( ! empty( $_COOKIE['passster'] ) ) {
			$cookie_value = esc_html( $_COOKIE['passster'] );
			// Split by pipe to support multiple password hashes
			$inputs = array_filter( explode( '|', $cookie_value ) );
		}

		// For backwards compatibility, also check single input
		$input = ! empty( $inputs ) ? $inputs[0] : '';

		if ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
			// Get parameter set?
			$pass = filter_input( INPUT_GET, 'pass', FILTER_SANITIZE_FULL_SPECIAL_CHARS );

			if ( ! empty( $pass ) ) {
				$input = esc_html( $pass );

				// It's maybe an old base64 link.
				if ( strlen( $input ) < 25 ) {
					$input = hash_hmac( 'sha256', base64_decode( $input ), get_option( 'passster_secure_key' ) );
				}

				if ( self::is_valid_link_password__premium_only( $input, $atts ) ) {
					return true;
				}

			}
		}

		// Valid password - check all inputs from cookie (supports multiple unlocks).
		foreach ( $inputs as $input ) {
			if ( self::is_valid_password( $input, $atts ) ) {
				return true;
			}
		}

		// captcha - check all inputs.
		if ( isset( $atts['captcha'] ) ) {
			foreach ( $inputs as $input ) {
				if ( 'captcha' === $input ) {
					return true;
				}
			}
		}

		if ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
			// Check for concurrent - use first input for backwards compatibility.
			$settings = get_option( 'passster' );

			if ( isset( $settings['use_concurrent'] ) && true === $settings['use_concurrent'] ) {
				$ip            = PS_Concurrent::get_ip();
				$first_input   = ! empty( $inputs ) ? $inputs[0] : '';
				$is_concurrent = PS_Concurrent::is_concurrent( $ip, $first_input );

				if ( $is_concurrent ) {
					return false;
				}
			}

			// valid user.
			if ( self::is_user_valid__premium_only( $atts ) ) {
				return true;
			}

			// recaptcha/turnstile - check all inputs.
			if ( isset( $atts['recaptcha'] ) || isset( $atts['turnstile'] ) ) {
				$captcha_proof = hash_hmac( 'sha256', 'captcha-verified', get_option( 'passster_secure_key' ) );

				foreach ( $inputs as $input ) {
					if ( hash_equals( $captcha_proof, $input ) ) {
						return true;
					}
				}
			}
		}

		// if nothing was correct.
		return false;
	}

	/**
	 * Strip spaces from a comma-separated password string, matching the REST unlock validation.
	 *
	 * @param mixed $passwords comma-separated passwords.
	 *
	 * @return string
	 */
	private static function maybe_remove_spaces( $passwords ): string {
		$passwords = (string) $passwords;

		if ( apply_filters( 'passster_remove_spaces_from_list', true ) ) {
			$passwords = str_replace( ' ', '', $passwords );
		}

		return $passwords;
	}

	/**
	 * Return username and role as array
	 *
	 * @param array $atts added attributes.
	 *
	 * @return boolean
	 */
	public static function is_user_valid__premium_only( array $atts ): bool {
		$unlock = false;
		$user   = wp_get_current_user();

		if ( isset( $atts['role'] ) && ! empty( $atts['role'] ) ) {

			$roles = $user->roles;

			if ( strpos( $atts['role'], ',' ) !== false ) {
				$roles_array = explode( ',', $atts['role'] );

				foreach ( $roles_array as $role ) {
					if ( in_array( $role, $roles ) ) {
						$unlock = true;
					}
				}
			} else {
				if ( in_array( $atts['role'], $roles ) ) {
					$unlock = true;
				}
			}
		}

		if ( isset( $atts['user'] ) && ! empty( $atts['user'] ) ) {

			if ( strpos( $atts['user'], ',' ) !== false ) {
				$users_array = explode( ',', $atts['user'] );

				foreach ( $users_array as $user ) {
					if ( $user === $user->user_login ) {
						$unlock = true;
					}
				}
			} else {
				if ( $atts['user'] === $user->user_login ) {
					$unlock = true;
				}
			}
		}

		return $unlock;
	}

	/**
	 * Validate the password.
	 *
	 * @param string $input given password to validate.
	 * @param array $atts given arguments to check.
	 *
	 * @return bool
	 * @throws Exception
	 */
	public static function is_valid_password( string $input, array $atts ): bool {
		// password.
		if ( ! empty( $atts['password'] ) ) {
			$hash = hash_hmac( 'sha256', wp_unslash( $atts['password'] ), get_option( 'passster_secure_key' ) );

			if ( hash_equals( $hash, $input ) ) {
				return true;
			}
		}

		if ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
			// passwords.
			if ( ! empty( $atts['passwords'] ) ) {
				$passwords = PS_Helper::parse_password_list( self::maybe_remove_spaces( wp_unslash( $atts['passwords'] ) ) );

				// Convert passwords to hashes.
				foreach ( $passwords as $password ) {
					$hash = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );

					if ( hash_equals( $hash, $input ) ) {
						return true;
					}
				}
			}

			// password list.
			if ( ! empty( $atts['password_list'] ) ) {
				$ps_list_id        = esc_html( $atts['password_list'] );
				$passwords_in_list = get_post_meta( $ps_list_id, 'passster_passwords', true );
				$passwords_in_list = PS_Helper::parse_password_list( self::maybe_remove_spaces( $passwords_in_list ) );

				// Convert passwords to hashes.
				foreach ( $passwords_in_list as $password ) {
					$hash = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );

					if ( hash_equals( $hash, $input ) ) {
						do_action( 'password_list_hash_valid', $ps_list_id );

						return true;
					}
				}

				if ( self::is_used_password_hash( $ps_list_id, $input ) ) {
					return true;
				}
			}

			// password list.
			if ( ! empty( $atts['password_lists'] ) ) {
				$password_list_ids = explode( '|', esc_html( $atts['password_lists'] ) );

				foreach ( $password_list_ids as $password_list_id ) {

					$passwords_in_list = get_post_meta( $password_list_id, 'passster_passwords', true );
					$passwords_in_list = PS_Helper::parse_password_list( self::maybe_remove_spaces( $passwords_in_list ) );

					// Convert passwords to hashes.
					foreach ( $passwords_in_list as $password ) {
						$hash = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );

						if ( hash_equals( $hash, $input ) ) {
							do_action( 'password_list_hash_valid', $password_list_id );

							return true;
						}
					}

					if ( self::is_used_password_hash( $password_list_id, $input ) ) {
						return true;
					}
				}
			}
		}

		return false;
	}

	/**
	 * Check whether a password list's fixed expiration date/time has passed.
	 *
	 * @param int|string $list_id list ID.
	 *
	 * @return bool
	 */
	public static function is_password_list_past_fixed_expiration__premium_only( $list_id ): bool {
		$expire_datetime = get_post_meta( $list_id, 'passster_expire_datetime', true );

		if ( empty( $expire_datetime ) ) {
			return false;
		}

		// Stored as an absolute UTC moment ("...Z"), so the site's timezone setting doesn't matter.
		return time() >= strtotime( $expire_datetime );
	}

	/**
	 * Keep an existing unlock valid after its password was removed from the list by usage expiration.
	 * Time-based expirations stay invalid.
	 *
	 * @param mixed  $list_id password list id.
	 * @param string $input   hash from the cookie.
	 *
	 * @return bool
	 */
	private static function is_used_password_hash( $list_id, string $input ): bool {
		$expired_passwords = get_post_meta( $list_id, 'passster_expired_passwords', true );

		if ( ! is_array( $expired_passwords ) ) {
			return false;
		}

		foreach ( $expired_passwords as $entry ) {
			if ( empty( $entry['expired'] ) || ! empty( $entry['time'] ) || ! isset( $entry['password'] ) ) {
				continue;
			}

			$hash = hash_hmac( 'sha256', (string) $entry['password'], get_option( 'passster_secure_key' ) );

			if ( hash_equals( $hash, $input ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Validate the password.
	 *
	 * @param string $input given password to validate.
	 * @param array $atts given arguments to check.
	 *
	 * @return bool
	 * @throws Exception
	 */
	public static function is_valid_link_password__premium_only( string $input, array $atts ): bool {
		if ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
			// password list.
			if ( ! empty( $atts['password_list'] ) ) {
				$ps_list_id = esc_html( $atts['password_list'] );

				if ( self::is_password_list_past_fixed_expiration__premium_only( $ps_list_id ) ) {
					return false;
				}

				$passwords_in_list = get_post_meta( $ps_list_id, 'passster_passwords', true );
				$passwords_in_list = PS_Helper::parse_password_list( self::maybe_remove_spaces( $passwords_in_list ) );

				// Convert passwords to hashes.
				foreach ( $passwords_in_list as $password ) {
					$hash = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );

					if ( hash_equals( $hash, $input ) ) {
						do_action( 'password_list_hash_valid', $atts['password_list'] );

						PS_Conditional::maybe_expire_password_from_list__premium_only( $password, $passwords_in_list, $ps_list_id );

						return true;
					}
				}
			}

			// password list.
			if ( ! empty( $atts['password_lists'] ) ) {
				$password_list_ids = explode( '|', esc_html( $atts['password_lists'] ) );

				foreach ( $password_list_ids as $password_list_id ) {
					if ( self::is_password_list_past_fixed_expiration__premium_only( $password_list_id ) ) {
						continue;
					}

					$passwords_in_list = get_post_meta( $password_list_id, 'passster_passwords', true );
					$passwords_in_list = PS_Helper::parse_password_list( self::maybe_remove_spaces( $passwords_in_list ) );

					// Convert passwords to hashes.
					foreach ( $passwords_in_list as $password ) {
						$hash = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );

						if ( hash_equals( $hash, $input ) ) {
							do_action( 'password_list_hash_valid', $password_list_id );

							PS_Conditional::maybe_expire_password_from_list__premium_only( $password, $passwords_in_list, esc_html( $atts['password_list'] ) );

							return true;
						}
					}
				}
			}
		}

		return false;
	}

	/**
	 * Maybe expire a password from a list by usage or time.
	 *
	 * @param string $password given password.
	 * @param array $passwords_in_list passwords from list.
	 *
	 * @return void
	 * @throws Exception
	 */
	public static function maybe_expire_password_from_list__premium_only( string $password, array $passwords_in_list, $list_id ) {
		$should_delete = false;
		$key           = array_search( $password, $passwords_in_list );
		$options       = get_option( 'passster' );
		$use_ajax      = ! empty( $options['unlock_mode'] );

		if ( false !== $key ) {
			// Password is in list now we check if we should expire it.
			$expire_now        = get_post_meta( $list_id, 'passster_expire_passwords', true );
			$expire_usage      = get_post_meta( $list_id, 'passster_expire_usage', true );
			$expire_time       = get_post_meta( $list_id, 'passster_expire_time', true );
			$expire_time_unit  = get_post_meta( $list_id, 'passster_expire_time_unit', true );
			$expired_passwords = get_post_meta( $list_id, 'passster_expired_passwords', true );

			// Check if we should expire now.
			if ( $expire_now ) {
				$expire_usage = 1;
			}

			// If there are no expired passwords array, set it up.
			if ( ! is_array( $expired_passwords ) ) {
				$expired_passwords = [];
			}

			// Check the number of usages.
			if ( ! empty( $expire_usage ) ) {

				if ( ! array_key_exists( $password, $expired_passwords ) ) {
					$expired_passwords[ $password ] = [
						'usage'    => 1,
						'password' => $password,
						'time'     => '',
						'expired'  => false,
					];

					if ( $use_ajax ) {
						if ( $expired_passwords[ $password ]['usage'] >= $expire_usage ) {
							$expired_passwords[ $password ]['expired'] = true;
							$should_delete                             = true;
						}
					}
				} else {
					$current_usage = intval( $expired_passwords[ $password ]['usage'] ) + 1;

					if ( $use_ajax ) {
						if ( $current_usage >= $expire_usage ) {
							$expired_passwords[ $password ]['expired'] = true;
							$expired_passwords[ $password ]['usage']   = $current_usage;
							$should_delete                             = true;
						} else {
							$expired_passwords[ $password ]['usage']   = $current_usage;
							$expired_passwords[ $password ]['expired'] = false;
						}
					} else {
						if ( $current_usage > $expire_usage ) {
							$expired_passwords[ $password ]['expired'] = true;
							$expired_passwords[ $password ]['usage']   = $current_usage - 1;
							$should_delete                             = true;
						} else {
							$expired_passwords[ $password ]['usage']   = $current_usage;
							$expired_passwords[ $password ]['expired'] = false;
						}
					}
				}
			}

			// Check the time.
			if ( ! empty( $expire_time ) ) {
				$timezone = get_option( 'timezone_string' );
				$datetime = new \DateTime();
				$now      = new \DateTime();

				if ( ! empty( $timezone ) ) {
					$datetime->setTimezone( new \DateTimeZone( $timezone ) );
				}

				// Calculate expire date.
				$datetime->modify( '+' . $expire_time . ' ' . $expire_time_unit );
				$expire_date = $datetime->format( 'Y-m-d H:i:s' );

				if ( ! array_key_exists( $password, $expired_passwords ) ) {
					$expired_passwords[ $password ] = [
						'usage'    => '',
						'password' => $password,
						'time'     => $expire_date,
						'expired'  => false,
					];
				} else {
					$expire_at  = new \DateTime( $expired_passwords[ $password ]['time'] );
					$difference = $now->diff( $expire_at );

					do_action( 'passster_compare_expiration_date', $password, $difference->days, $list_id );

					if ( $now >= $expire_at ) {
						$should_delete                             = true;
						$expired_passwords[ $password ]['expired'] = true;
					}
				}
			}

			// Update usage meta.
			update_post_meta( $list_id, 'passster_expired_passwords', $expired_passwords );

			// Convert for statistics.
			$expired_passwords_statistics = [];

			foreach ( $expired_passwords as $expired_password ) {
				// Transform to object.
				$password_object           = new \StdClass();
				$password_object->password = $expired_password['password'];
				$password_object->usage    = $expired_password['usage'];
				$password_object->time     = $expired_password['time'];

				if ( $expired_password['expired'] ) {
					$password_object->expired = __( 'Yes', 'content-protector' );
				} else {
					$password_object->expired = __( 'No', 'content-protector' );
				}

				$expired_passwords_statistics[] = $password_object;
			}

			update_post_meta( $list_id, 'passster_expired_passwords_statistics', $expired_passwords_statistics );

			// Maybe remove password from list.
			if ( $should_delete ) {
				unset( $passwords_in_list[ $key ] );
				$passwords_to_update = implode( ',', $passwords_in_list );
				update_post_meta( $list_id, 'passster_passwords', $passwords_to_update );
			}
		}
	}
}
