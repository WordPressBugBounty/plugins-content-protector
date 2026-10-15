<?php

namespace passster;

class PS_Upsells {
	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_Upsells.
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
	 * Setting up admin fields
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_menu' ) );
	}

	public function add_menu() {
		$password_lists_suffix = add_submenu_page(
			'passster',
			__( 'Password Lists', 'content-protector' ),
			__( 'Password Lists', 'content-protector' ),
			apply_filters( 'passster_user_capability', 'manage_options' ),
			'passster-password-lists',
			array( $this, 'render_password_lists_upsell' ),
		);

		$statistics_suffix = add_submenu_page(
			'passster',
			__( 'Statistics', 'content-protector' ),
			__( 'Statistics', 'content-protector' ),
			apply_filters( 'passster_user_capability', 'manage_options' ),
			'passster-statistics',
			array( $this, 'render_statistics_upsell' ),
		);

		add_action( "admin_print_scripts-{$password_lists_suffix}", array( $this, 'add_upsell_scripts' ) );
		add_action( "admin_print_scripts-{$statistics_suffix}", array( $this, 'add_upsell_scripts' ) );
	}

	public function add_upsell_scripts() {
		$screen = get_current_screen();

		wp_enqueue_script(
			'passster-upsells',
			PASSSTER_URL . '/inc/admin/build/upsells.js',
			array(
				'wp-api',
				'wp-components',
				'wp-element',
				'wp-api-fetch',
				'wp-i18n',
			),
			PASSSTER_VERSION,
			true
		);

		$args = array(
			'version' => PASSSTER_VERSION,
			'screen'  => 'passster-password-lists',
		);

		if ( 'passster_page_passster-statistics' === $screen->base ) {
			$args['screen'] = 'passster-statistics';
		}

		wp_localize_script( 'passster-upsells', 'options', $args );

		// Make translatable.
		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'passster-upsells', 'content-protector', PASSSTER_PATH . '/languages' );
		}

		wp_enqueue_style( 'passster-upsells-style', PASSSTER_URL . '/inc/admin/build/upsells.css', array( 'wp-components' ), PASSSTER_VERSION );
	}

	public function render_password_lists_upsell() {
		?>
		<div id="passster-upsell-page"></div>
		<?php
	}

	public function render_statistics_upsell() {
		?>
		<div id="passster-upsell-page"></div>
		<?php
	}
}
