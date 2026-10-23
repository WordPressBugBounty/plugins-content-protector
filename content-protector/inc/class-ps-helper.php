<?php

namespace passster;

use Exception;
class PS_Helper {
    public static function remember_unlock( string $proof ) {
        $options = get_option( 'passster', array() );
        if ( !empty( $options['disable_cookie'] ) ) {
            return;
        }
        $existing = array();
        if ( !empty( $_COOKIE['passster'] ) ) {
            $existing = array_filter( explode( '|', esc_html( wp_unslash( $_COOKIE['passster'] ) ) ) );
        }
        if ( in_array( $proof, $existing, true ) ) {
            return;
        }
        $existing[] = $proof;
        $unit = $options['cookie_duration_unit'] ?? 'days';
        $duration = (int) ($options['cookie_duration'] ?? 1);
        switch ( $unit ) {
            case 'hours':
                $expires = time() + $duration * HOUR_IN_SECONDS;
                break;
            case 'minutes':
                $expires = time() + $duration * MINUTE_IN_SECONDS;
                break;
            default:
                $expires = time() + $duration * DAY_IN_SECONDS;
                break;
        }
        setcookie( 'passster', implode( '|', $existing ), array(
            'expires'  => $expires,
            'path'     => '/',
            'secure'   => is_ssl(),
            'httponly' => false,
            'samesite' => 'Strict',
        ) );
    }

    /**
     * Redirect URL of a protected post, only when Advanced Options is enabled (a stale value may remain saved after disabling it).
     *
     * @param int $post_id Post ID.
     *
     * @return string
     */
    public static function get_redirect_url( $post_id ) : string {
        if ( !get_post_meta( $post_id, 'passster_activate_misc_settings', true ) ) {
            return '';
        }
        return (string) get_post_meta( $post_id, 'passster_redirect_url', true );
    }

    /**
     * Plain-text replacement for locked content where a form can't be rendered (excerpts, feeds, SEO).
     *
     * @return string
     */
    public static function get_protected_text() : string {
        $options = get_option( 'passster', array() );
        $text = ( !empty( $options['instruction'] ) ? $options['instruction'] : __( 'This content is password-protected. Please verify with a password to unlock the content.', 'content-protector' ) );
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
    public static function get_string_between( string $string, string $start, string $end ) : string {
        $string = ' ' . $string;
        $ini = strpos( $string, $start );
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
            return $string;
            $recaptcha_re = '/\\[passster[^\\]]*recaptcha="true"[^\\]]*\\]/';
            $turnstile_re = '/\\[passster[^\\]]*turnstile="true"[^\\]]*\\]/';
            if ( preg_match( $recaptcha_re, $content, $m ) ) {
                $string = self::get_string_between( $content, $m[0], '[/passster]' );
            } elseif ( preg_match( $turnstile_re, $content, $m ) ) {
                $string = self::get_string_between( $content, $m[0], '[/passster]' );
            }
            return $string;
        }
        $password = preg_quote( (string) $password, '/' );
        $pass_re = '/\\[passster[^\\]]*password="' . $password . '"[^\\]]*\\]/';
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
    public static function parse_password_list( $passwords_str, bool $remove_spaces = false ) : array {
        $passwords_str = (string) $passwords_str;
        if ( $remove_spaces ) {
            $passwords_str = str_replace( ' ', '', $passwords_str );
        }
        // A missing/empty meta value explodes to [''], which would match an empty input.
        return array_values( array_filter( explode( ',', $passwords_str ), function ( $password ) {
            return '' !== trim( $password );
        } ) );
    }

}
