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
    public static function is_valid( array $atts ) : bool {
        $inputs = array();
        // is Cookie set? Support multiple hashes (pipe-separated).
        if ( !empty( $_COOKIE['passster'] ) ) {
            $cookie_value = esc_html( $_COOKIE['passster'] );
            // Split by pipe to support multiple password hashes
            $inputs = array_filter( explode( '|', $cookie_value ) );
        }
        // For backwards compatibility, also check single input
        $input = ( !empty( $inputs ) ? $inputs[0] : '' );
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
    private static function maybe_remove_spaces( $passwords ) : string {
        $passwords = (string) $passwords;
        if ( apply_filters( 'passster_remove_spaces_from_list', true ) ) {
            $passwords = str_replace( ' ', '', $passwords );
        }
        return $passwords;
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
    public static function is_valid_password( string $input, array $atts ) : bool {
        // password.
        if ( !empty( $atts['password'] ) ) {
            $hash = hash_hmac( 'sha256', wp_unslash( $atts['password'] ), get_option( 'passster_secure_key' ) );
            if ( hash_equals( $hash, $input ) ) {
                return true;
            }
        }
        return false;
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
    private static function is_used_password_hash( $list_id, string $input ) : bool {
        $expired_passwords = get_post_meta( $list_id, 'passster_expired_passwords', true );
        if ( !is_array( $expired_passwords ) ) {
            return false;
        }
        foreach ( $expired_passwords as $entry ) {
            if ( empty( $entry['expired'] ) || !empty( $entry['time'] ) || !isset( $entry['password'] ) ) {
                continue;
            }
            $hash = hash_hmac( 'sha256', (string) $entry['password'], get_option( 'passster_secure_key' ) );
            if ( hash_equals( $hash, $input ) ) {
                return true;
            }
        }
        return false;
    }

}
