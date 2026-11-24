<?php

namespace passster;

class PS_Statistics {
	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Constructor for PS_Statistics
	 */
	public function __construct() {
		add_action( 'passsster_track_record', array( $this, 'track_record' ), 10, 3 );
	}

	/**
	 * Returns instance of PS_Public.
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
	 * Track password after validation.
	 *
	 * @param int    $post_id  Given post id.
	 * @param string $password Given password.
	 * @param string $source   Source: 'block', 'area', 'shortcode'.
	 *
	 * @return void
	 */
	public function track_record( int $post_id, string $password, string $source = 'shortcode' ) {
		self::add_record( $password, $post_id, $source );
	}

	/**
	 * Creates a new table in the database for handling statistics.
	 *
	 * @return void
	 */
	public static function create_table() {
		global $wpdb;

		$charset_collate = $wpdb->get_charset_collate();
		$table_name      = $wpdb->prefix . 'passster_statistics';

		// Always run dbDelta to update schema if needed.
		$sql = "CREATE TABLE `{$table_name}` (
			id bigint(20) NOT NULL AUTO_INCREMENT,
			password CHAR(50) NOT NULL,
			post_id bigint(20) NOT NULL,
			number_of_usages bigint(20) NOT NULL,
			first_usage TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
			ip VARCHAR(45) NOT NULL DEFAULT '',
			browser CHAR(100) NOT NULL DEFAULT '',
			source CHAR(20) NOT NULL DEFAULT 'shortcode',
			PRIMARY KEY  (id),
			KEY password (password),
			KEY source (source)
		) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( $sql );
	}

	/**
	 * Add a password to statistics table.
	 *
	 * @param string $password Given password.
	 * @param int    $post_id  Given post ID.
	 * @param string $source   Source type.
	 *
	 * @return void
	 */
	public static function add_record( string $password, $post_id, string $source = 'shortcode' ) {
		global $wpdb;

		$table_name = $wpdb->prefix . 'passster_statistics';
		$options    = get_option( 'passster' );

		// Get IP address.
		$ip = '';
		if ( ! empty( $options['track_ip'] ) ) {
			$ip = self::get_ip();

			// Anonymize IP if GDPR option is enabled.
			if ( ! empty( $options['anonymize_ip'] ) ) {
				$ip = self::anonymize_ip( $ip );
			}
		}

		// Check if record exists for this password.
		$existing = $wpdb->get_row(
			$wpdb->prepare(
				"SELECT * FROM {$table_name} WHERE password = %s",
				$password
			)
		);

		$browser = self::get_browser();

		if ( empty( $existing ) ) {
			$wpdb->insert(
				$table_name,
				array(
					'password'         => $password,
					'post_id'          => $post_id,
					'number_of_usages' => 1,
					// Stored in UTC so it stays correct if the site's timezone setting changes later.
					'first_usage'      => current_time( 'mysql', true ),
					'ip'               => $ip,
					'browser'          => $browser,
					'source'           => $source,
				),
				array( '%s', '%d', '%d', '%s', '%s', '%s', '%s' )
			);
		} else {
			$wpdb->update(
				$table_name,
				array(
					'number_of_usages' => intval( $existing->number_of_usages ) + 1,
					'post_id'          => $post_id,
					'ip'               => $ip,
					'browser'          => $browser,
					'source'           => $source,
				),
				array( 'password' => $password ),
				array( '%d', '%d', '%s', '%s', '%s' ),
				array( '%s' )
			);
		}
	}

	/**
	 * Get records.
	 *
	 * @return array|bool
	 */
	public static function get_records() {
		global $wpdb;

		$rows = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}passster_statistics ORDER BY number_of_usages DESC" );

		if ( ! empty( $rows ) ) {
			return $rows;
		}

		return false;
	}

	/**
	 * Remove all entries from statistics table.
	 *
	 * @return void
	 */
	public static function clear_records() {
		global $wpdb;
		$wpdb->query( "DELETE FROM {$wpdb->prefix}passster_statistics" );
	}

	/**
	 * Anonymize IP address (GDPR compliant).
	 * IPv4: Remove last octet (192.168.1.100 -> 192.168.1.0)
	 * IPv6: Remove last 80 bits.
	 *
	 * @param string $ip IP address.
	 * @return string Anonymized IP.
	 */
	public static function anonymize_ip( string $ip ): string {
		if ( empty( $ip ) ) {
			return '';
		}

		// IPv4
		if ( filter_var( $ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {
			return preg_replace( '/\.\d+$/', '.0', $ip );
		}

		// IPv6
		if ( filter_var( $ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6 ) ) {
			return substr( $ip, 0, strrpos( $ip, ':' ) ) . ':0000';
		}

		return '';
	}

	/**
	 * Get current IP from request.
	 *
	 * @return string
	 */
	public static function get_ip(): string {
		$ip = '';

		if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
			$ip = sanitize_text_field( wp_unslash( $_SERVER['HTTP_CLIENT_IP'] ) );
		} elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
			// May contain multiple IPs, get the first one.
			$ips = explode( ',', sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) );
			$ip  = trim( $ips[0] );
		} elseif ( ! empty( $_SERVER['REMOTE_ADDR'] ) ) {
			$ip = sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
		}

		return $ip;
	}

	/**
	 * Get current browser from user agent.
	 *
	 * @return string
	 */
	public static function get_browser(): string {
		$user_agent = isset( $_SERVER['HTTP_USER_AGENT'] )
			? sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) )
			: '';

		if ( empty( $user_agent ) ) {
			return __( 'Unknown', 'content-protector' );
		}

		$ua_lower = strtolower( $user_agent );

		if ( strpos( $ua_lower, 'edg/' ) !== false ) {
			return 'Edge';
		} elseif ( strpos( $ua_lower, 'opr/' ) !== false || strpos( $ua_lower, 'opera' ) !== false ) {
			return 'Opera';
		} elseif ( strpos( $ua_lower, 'chrome/' ) !== false ) {
			return 'Chrome';
		} elseif ( strpos( $ua_lower, 'firefox/' ) !== false ) {
			return 'Firefox';
		} elseif ( strpos( $ua_lower, 'safari/' ) !== false ) {
			return 'Safari';
		} elseif ( strpos( $ua_lower, 'msie' ) !== false || strpos( $ua_lower, 'trident/' ) !== false ) {
			return 'Internet Explorer';
		}

		return __( 'Other', 'content-protector' );
	}
}
