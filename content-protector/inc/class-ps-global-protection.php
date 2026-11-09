<?php

namespace passster;

use Exception;

/**
 * Site-wide password gate: the single place that decides whether a visitor is locked out.
 */
class PS_Global_Protection {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Cached so validation side effects (unlock link usage counting) run only once per request.
	 *
	 * @var bool|null
	 */
	private static $unlocked = null;

	/**
	 * Returns instance of PS_Global_Protection.
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
	 * Constructor for PS_Global_Protection
	 */
	public function __construct() {
		add_action( 'template_redirect', array( $this, 'protect_queried_object_routes' ) );
		// Runs last: a plugin callback on a URL that looks like the home page must finish first.
		add_action( 'template_redirect', array( $this, 'protect_listing_routes' ), PHP_INT_MAX );
		add_filter( 'template_include', array( $this, 'protect_home_template' ), PHP_INT_MAX );
	}

	/**
	 * Lock singular content and the archives that have a queried object.
	 *
	 * @return void
	 * @throws Exception
	 */
	public function protect_queried_object_routes() {
		if ( get_queried_object_id() ) {
			$this->enforce();
		}
	}

	/**
	 * Lock content listings without a queried object: latest posts, search, date and post type archives, feeds.
	 *
	 * @return void
	 * @throws Exception
	 */
	public function protect_listing_routes() {
		if ( get_queried_object_id() || self::is_excluded_shop() ) {
			return;
		}

		if ( ( is_home() && ! $this->is_plugin_route() ) || is_archive() || is_search() || is_feed() ) {
			$this->enforce();
		}
	}

	/**
	 * A custom query var added to the home page must not open it: lock it if no plugin took over the template.
	 *
	 * @param string $template Template about to load.
	 *
	 * @return string
	 * @throws Exception
	 */
	public function protect_home_template( $template ) {
		if ( ! is_home() || get_queried_object_id() || ! $this->is_plugin_route() ) {
			return $template;
		}

		$home_templates = array( get_front_page_template(), get_home_template(), get_index_template(), ABSPATH . WPINC . '/template-canvas.php' );

		if ( in_array( $template, $home_templates, true ) ) {
			$this->enforce();
		}

		return $template;
	}

	/**
	 * A plugin's own URL (custom query var) is seen by WordPress as the home page, but it isn't content.
	 *
	 * @return bool
	 */
	private function is_plugin_route(): bool {
		global $wp;

		$core_query_vars = get_class_vars( 'WP' )['public_query_vars'];

		return (bool) array_diff_key( $wp->query_vars, array_flip( $core_query_vars ) );
	}

	/**
	 * Redirect locked visitors to the protection page.
	 *
	 * @return void
	 * @throws Exception
	 */
	private function enforce() {
		if ( ! self::is_gate_configured() || $this->is_authorized_preview() ) {
			return;
		}

		if ( is_singular() && self::is_exempt_post( get_queried_object_id() ) ) {
			return;
		}

		// A cached redirect would keep sending unlocked visitors back, a cached page would leak to locked ones.
		nocache_headers();

		if ( self::is_unlocked() ) {
			if ( ! defined( 'DONOTCACHEPAGE' ) ) {
				define( 'DONOTCACHEPAGE', true );
			}

			return;
		}

		$global_protection_url = get_permalink( self::get_gate_id() );
		$pass_param            = filter_input( INPUT_GET, 'pass', FILTER_SANITIZE_FULL_SPECIAL_CHARS );

		if ( ! empty( $pass_param ) ) {
			$global_protection_url = add_query_arg( 'pass', $pass_param, $global_protection_url );
		}

		wp_redirect( esc_url_raw( $global_protection_url ) );
		exit;
	}

	/**
	 * Page builder and customizer previews stay available, only to users allowed to edit.
	 *
	 * @return bool
	 */
	private function is_authorized_preview(): bool {
		$elementor_preview   = filter_input( INPUT_GET, 'elementor-preview', FILTER_SANITIZE_FULL_SPECIAL_CHARS );
		$live_canvas_preview = filter_input( INPUT_GET, 'lc_action_launch_editing', FILTER_SANITIZE_FULL_SPECIAL_CHARS );

		if ( is_preview() || $elementor_preview || $live_canvas_preview ) {
			$can_edit = is_singular() ? current_user_can( 'edit_post', get_queried_object_id() ) : current_user_can( 'edit_others_posts' );

			if ( is_user_logged_in() && $can_edit ) {
				return true;
			}
		}

		return is_customize_preview() && current_user_can( 'customize' );
	}

	/**
	 * Whether global protection applies to this post in the current request.
	 * Second layer behind the redirect: blocks and widgets on allowed pages, front-end AJAX loaders.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return bool
	 * @throws Exception
	 */
	public static function is_post_hidden( int $post_id ): bool {
		if ( ! $post_id || self::is_internal_request() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
			return false;
		}

		if ( ! self::is_gate_configured() || self::is_exempt_post( $post_id ) || self::is_excluded_shop() ) {
			return false;
		}

		$post_type = get_post_type_object( (string) get_post_type( $post_id ) );

		// Excluded from search: builder templates (headers, footers), not content a visitor reads.
		if ( ! $post_type || ! $post_type->public || $post_type->exclude_from_search || current_user_can( 'edit_post', $post_id ) ) {
			return false;
		}

		return ! self::is_unlocked();
	}

	/**
	 * Whether the visitor still has to pass the gate. Used for REST, where a missing page stays locked.
	 *
	 * @return bool
	 * @throws Exception
	 */
	public static function is_visitor_locked(): bool {
		return self::is_activated() && ! self::is_unlocked();
	}

	/**
	 * Requests where nobody is browsing the site: dashboard, cron, WP-CLI.
	 *
	 * @return bool
	 */
	public static function is_internal_request(): bool {
		return ( is_admin() && ! wp_doing_ajax() ) || wp_doing_cron() || ( defined( 'WP_CLI' ) && WP_CLI );
	}

	/**
	 * Whether the visitor passed the gate.
	 *
	 * @return bool
	 * @throws Exception
	 */
	private static function is_unlocked(): bool {
		if ( null === self::$unlocked ) {
			self::$unlocked = PS_Conditional::is_valid( PS_Helper::get_protection_atts( self::get_gate_id() ) );
		}

		return self::$unlocked;
	}

	/**
	 * @return bool
	 */
	private static function is_activated(): bool {
		return ! empty( self::get_options()['activate_global_protection'] );
	}

	/**
	 * @return bool
	 */
	private static function is_gate_configured(): bool {
		return self::get_gate_id() && self::is_activated();
	}

	/**
	 * @return int
	 */
	private static function get_gate_id(): int {
		return absint( self::get_options()['global_protection_id'] ?? 0 );
	}

	/**
	 * @return array
	 */
	private static function get_options(): array {
		return (array) get_option( 'passster', array() );
	}

	/**
	 * @return array
	 */
	private static function get_excluded_ids(): array {
		return array_map( 'absint', (array) ( self::get_options()['exclude_pages'] ?? array() ) );
	}

	/**
	 * The protection page and the excluded pages stay public.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return bool
	 */
	private static function is_exempt_post( int $post_id ): bool {
		return self::get_gate_id() === $post_id || in_array( $post_id, self::get_excluded_ids(), true );
	}

	/**
	 * The shop renders as a product archive, so a Shop page that is exempt isn't seen as a singular page.
	 *
	 * @return bool
	 */
	private static function is_excluded_shop(): bool {
		return function_exists( 'wc_get_page_id' ) && is_post_type_archive( 'product' ) && self::is_exempt_post( absint( wc_get_page_id( 'shop' ) ) );
	}
}
