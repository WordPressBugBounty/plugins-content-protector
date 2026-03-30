<?php

namespace passster;

class PS_Rest_Handler {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_Rest_Handler.
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
	 * Constructor for PS_Rest_Handler
	 */
	public function __construct() {
		add_filter( 'rest_authentication_errors', array( $this, 'restrict_rest_access' ) );
		add_filter( 'rest_prepare_post', array( $this, 'filter_rest_response' ), 10, 3 );

		add_action( 'rest_api_init', array( $this, 'register_nonce_routes' ) );
	}

	public function restrict_rest_access( $result ) {

		// If a previous authentication check was applied,
		// pass that result along without modification.
		if ( true === $result || is_wp_error( $result ) ) {
			return $result;
		}

		// Allow Passster nonces endpoint for unauthenticated users.
		$request_uri = isset( $_SERVER['REQUEST_URI'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';
		if ( strpos( $request_uri, '/passster/v1/nonces' ) !== false ) {
			return $result;
		}

		// Check if request is coming from a frontend page builder.
		if ( current_user_can( 'manage_options' ) && ( is_plugin_active( 'elementor/elementor.php' ) || is_plugin_active( 'livecanvas/livecanvas-plugin-index.php' ) || is_plugin_active( 'divi-builder/divi-builder.php' ) || is_plugin_active( 'oxygen/functions.php' ) || is_plugin_active( 'pagelayer/pagelayer.php' ) ) ) {
			return $result;
		}

		// Global protection activated?
		$settings           = get_option( 'passster' );
		$protection_enabled = $settings['activate_global_protection'] ?? false;

		// Check if access is allowed.
		$valid = false;

		if ( ! empty( $settings['global_protection_id'] ) ) {
			$page_id = esc_attr( $settings['global_protection_id'] );
			$atts    = array( 'password' => get_post_meta( $page_id, 'passster_password', true ) );
			$valid   = PS_Conditional::is_valid( $atts );
		}

		if ( $protection_enabled && ! $valid && ! is_user_logged_in() ) {
			return new \WP_Error(
				'rest_not_logged_in',
				__( 'You are not allowed to access this content. Please authenticate with a password first.', 'content-protector' ),
				array( 'status' => 401 )
			);
		}

		return $result;
	}

	/**
	 * Filter REST API response to hide sensitive password data from unauthenticated users
	 *
	 * @param \WP_REST_Response $response The response object.
	 * @param \WP_Post          $post     The post object.
	 * @param \WP_REST_Request  $request  The request object.
	 * @return \WP_REST_Response
	 */
	public function filter_rest_response( $response, $post, $request ) {
		// Only filter for unauthenticated users or users without proper permissions
		if ( is_user_logged_in() && current_user_can( 'manage_options' ) ) {
			return $response;
		}

		// Get the response data
		$data = $response->get_data();

		// List of sensitive meta fields that should be hidden
		$sensitive_fields = array(
			'passster_password',
			'passster_passwords',
			'passster_password_list',
			'passster_password_lists',
		);

		// Remove sensitive fields from meta if they exist
		if ( isset( $data['meta'] ) && is_array( $data['meta'] ) ) {
			foreach ( $sensitive_fields as $field ) {
				if ( isset( $data['meta'][ $field ] ) ) {
					unset( $data['meta'][ $field ] );
				}
			}
		}

		// Update the response data
		$response->set_data( $data );

		return $response;
	}

	public function register_nonce_routes() {

		register_rest_route(
			'passster/v1',
			'/nonces',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'get_all_nonces' ),
				'permission_callback' => '__return_true',
			)
		);
	}
	public function get_all_nonces() {
		$user_id = wp_validate_auth_cookie( '', 'logged_in' );

		if ( $user_id ) {
			wp_set_current_user( $user_id );
		}

		$response = new \WP_REST_Response(
			array(
				'nonce'        => wp_create_nonce( 'ps-password-nonce' ),
				'hash_nonce'   => wp_create_nonce( 'ps-hash-nonce' ),
				'logout_nonce' => wp_create_nonce( 'ps-logout-nonce' ),
			)
		);

		// Prevent caching of nonces - they are user-session specific.
		$response->header( 'Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0, private' );
		$response->header( 'Pragma', 'no-cache' );
		$response->header( 'Expires', '0' );
		$response->header( 'X-LiteSpeed-Cache-Control', 'no-cache' );
		$response->header( 'X-Accel-Expires', '0' ); // Nginx
		$response->header( 'Surrogate-Control', 'no-store' ); // Varnish/CDN

		return $response;
	}
}
