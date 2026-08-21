<?php

namespace passster;

use Exception;
class PS_Helper {
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
    public static function get_shortcode_content( string $content, $password ) {
        $password = preg_quote( (string) $password, '/' );
        $pass_re = '/\\[passster[^\\]]*password="' . $password . '"[^\\]]*\\]/';
        $recaptcha_re = '/\\[passster[^\\]]*recaptcha="true"[^\\]]*\\]/';
        $turnstile_re = '/\\[passster[^\\]]*turnstile="true"[^\\]]*\\]/';
        $string = '';
        if ( preg_match( $pass_re, $content, $m ) ) {
            $string = self::get_string_between( $content, $m[0], '[/passster]' );
        }
        return $string;
    }

}
