<?php

namespace passster;

class PS_Concurrent {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

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
	 * Constructor for PS_Concurrent
	 */
	public function __construct() {
		add_action( 'passster_validation_success', array( $this, 'check_concurrent_status' ) );
		add_shortcode( 'passster-logout', array( $this, 'render_logout_shortcode' ) );
		add_action( 'wp_ajax_handle_logout', array( $this, 'handle_logout' ) );
		add_action( 'wp_ajax_nopriv_handle_logout', array( $this, 'handle_logout' ) );
	}

	/**
	 * Check concurrent status on validation.
	 *
	 * @param string $password given password.
	 *
	 * @return void
	 */
	public function check_concurrent_status( string $password ) {
		$settings = get_option( 'passster' );

		if ( isset( $settings['use_concurrent'] ) && true === $settings['use_concurrent'] ) {
			$ip            = self::get_ip();
			$is_concurrent = self::is_concurrent( $ip, $password );

			if ( $is_concurrent ) {
				$response = array(
					'error'   => __( 'You reached the limit of concurrent logins. Please logout on one of the devices.', 'content-protector' ),
					'content' => '',
				);

				print wp_json_encode( $response );
				exit;
			}
		}
	}

	/**
	 * Creates a new table in the database for handling customer numbers.
	 *
	 * @return void
	 */
	public static function create_table() {
		global $wpdb;

		$charset_collate = $wpdb->get_charset_collate();
		$table_exists    = $wpdb->prepare( 'SHOW TABLES LIKE %s', $wpdb->prefix . 'passster_concurrent_logins' );

		if ( $wpdb->get_var( $table_exists ) === $wpdb->prefix . 'passster_concurrent_logins' ) {
			return;
		}

		// if not, create passster_concurrent_logins table in database.
		$sql = "CREATE TABLE `{$wpdb->base_prefix}passster_concurrent_logins` (
		id bigint(20) NOT NULL AUTO_INCREMENT,
		password CHAR(50) NOT NULL,
		ip CHAR(50) NOT NULL,
		PRIMARY KEY  (id)
		) $charset_collate;";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}

	/**
	 * Returns true or false based on the restrictions of concurrent logins.
	 *
	 * @param string $ip current IP.
	 * @param string $password used password.
	 *
	 * @return bool
	 */
	public static function is_concurrent( string $ip, string $password ): bool {
		global $wpdb;

		// Get number of allowed concurrents.
		$settings = get_option( 'passster' );

		$allowed_logins = intval( $settings['number_of_concurrents'] );
		$rows           = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}passster_concurrent_logins WHERE password = %s", $password ) );

		if ( empty( $rows ) ) {
			$wpdb->insert(
				$wpdb->prefix . 'passster_concurrent_logins',
				array(
					'password' => $password,
					'ip'       => $ip,
				),
				array(
					'%s',
					'%s',
				)
			);

			return false;

		} else {
			$number_of_rows = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM {$wpdb->prefix}passster_concurrent_logins WHERE ip != %s AND password = %s", $ip, $password ) );

			if ( $number_of_rows < $allowed_logins ) {
				return false;
			} else {
				return true;
			}
		}
	}

	/**
	 * Remove IP from concurrent table.
	 *
	 * @param string $ip current IP address.
	 *
	 * @return void
	 */
	public static function delete_concurrent( string $ip ) {
		global $wpdb;
		$wpdb->delete( $wpdb->prefix . 'passster_concurrent_logins', array( 'ip' => $ip ) );
	}

	/**
	 * Remove all entries from concurrent table.
	 *
	 * @return void
	 */
	public static function clear_concurrents() {
		global $wpdb;
		$wpdb->query( 'DELETE FROM ' . $wpdb->prefix . 'passster_concurrent_logins' );
	}

	/**
	 * Get current ip from user agent.
	 *
	 * @return string
	 */
	public static function get_ip(): string {
		if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
			$ip_address = $_SERVER['HTTP_CLIENT_IP'];
		} elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
			$ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
		} else {
			$ip_address = $_SERVER['REMOTE_ADDR'];
		}

		return $ip_address;
	}

	/**
	 * Clear the IP from the concurrent table.
	 *
	 * @return void
	 */
	public function handle_logout() {
		// Find IP and delete record.
		$ip = self::get_ip();
		self::delete_concurrent( $ip );

		$response = array( 'success' => true );

		print wp_json_encode( $response );
		exit;
	}

	/**
	 * Renders a logout button.
	 *
	 * @param array $atts array of arguments.
	 *
	 * @return string
	 */
	public function render_logout_shortcode( $atts ): string {
		$class = 'wp-element-button';

		if ( isset( $atts['class'] ) ) {
			$class = ' ' . $atts['class'];
		}

		ob_start();
		?>
        <p>
            <button id="ps-logout" class="<?php echo esc_attr( $class ); ?>"><?php esc_html_e( 'Logout', 'content-protector' ); ?></button>
        </p>
		<?php
		return ob_get_clean();
	}
}
