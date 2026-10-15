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

}
