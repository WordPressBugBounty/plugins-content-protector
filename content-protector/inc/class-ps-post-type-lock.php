<?php

namespace passster;

/**
 * Class to handle post type level protection.
 * Locks every post of a given post type, its archive, and any taxonomy
 * archive that belongs exclusively to that post type.
 */
class PS_Post_Type_Lock {

	const OPTION_KEY = 'passster_post_type_protection';

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Rendered form HTML to pass to the protected archive template.
	 *
	 * @var string
	 */
	private static $rendered_form = '';

	/**
	 * Returns instance of PS_Post_Type_Lock.
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
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'rest_api_init' ) );

		// Frontend protection.
		add_filter( 'the_content', array( $this, 'filter_content_by_post_type' ), 12 );
		add_filter( 'the_excerpt', array( $this, 'filter_content_by_post_type' ), 12 );
		add_filter( 'render_block_core/post-excerpt', array( $this, 'filter_content_by_post_type' ), 12 );
		add_filter( 'get_the_excerpt', array( $this, 'filter_text_by_post_type' ), 12 );
		add_filter( 'the_content_feed', array( $this, 'filter_text_by_post_type' ), 12 );
		add_action( 'template_redirect', array( $this, 'protect_archive' ), 11 );

		// Search / discovery hardening.
		add_filter( 'pre_get_posts', array( $this, 'exclude_protected_types_from_search' ) );
		add_filter( 'rest_request_before_callbacks', array( $this, 'maybe_block_rest_access' ), 10, 3 );
		add_filter( 'wp_sitemaps_post_types', array( $this, 'exclude_from_sitemap_post_types' ) );
		add_filter( 'wp_sitemaps_taxonomies', array( $this, 'exclude_from_sitemap_taxonomies' ) );
	}

	/**
	 * Get the stored protected form HTML (used by the protected archive template).
	 *
	 * @return string
	 */
	public static function get_protected_form(): string {
		return self::$rendered_form;
	}

	// -------------------------------------------------------------------------
	// Configuration storage
	// -------------------------------------------------------------------------

	/**
	 * Default configuration for a single post type.
	 *
	 * @return array
	 */
	public static function get_default_config(): array {
		return array(
			'passster_activate_protection'         => false,
			'passster_protection_type'             => 'password',
			'passster_password'                    => '',
			'passster_passwords'                   => '',
			'passster_password_list'               => 0,
			'passster_password_lists'              => array(),
			'passster_activate_user_restriction'   => false,
			'passster_user_restriction_type'       => 'username',
			'passster_user_restriction'            => '',
			'passster_activate_overwrite_defaults' => false,
			'passster_headline'                    => '',
			'passster_instruction'                 => '',
			'passster_placeholder'                 => '',
			'passster_button'                      => '',
			'passster_activate_misc_settings'      => false,
			'passster_redirect_url'                => '',
			'passster_hide'                        => 'no',
			'passster_schedule_enabled'            => false,
			'passster_schedule_start'              => '',
			'passster_schedule_end'                => '',
		);
	}

	/**
	 * Full stored configuration, keyed by post type.
	 *
	 * @return array
	 */
	public static function get_config(): array {
		$config = get_option( self::OPTION_KEY, array() );

		return is_array( $config ) ? $config : array();
	}

	/**
	 * Configuration for a single post type, merged with defaults.
	 *
	 * @param string $post_type Post type slug.
	 * @return array
	 */
	public static function get_post_type_config( string $post_type ): array {
		$all    = self::get_config();
		$stored = isset( $all[ $post_type ] ) && is_array( $all[ $post_type ] ) ? $all[ $post_type ] : array();

		return array_merge( self::get_default_config(), $stored );
	}

	/**
	 * Whether a post type has protection activated.
	 *
	 * @param string $post_type Post type slug.
	 * @return bool
	 */
	public static function is_post_type_protected( string $post_type ): bool {
		return ! empty( self::get_post_type_config( $post_type )['passster_activate_protection'] );
	}

	/**
	 * All post types with protection currently activated.
	 *
	 * @return array
	 */
	public static function get_protected_post_types(): array {
		$protected = array();

		foreach ( self::get_config() as $post_type => $config ) {
			if ( ! empty( $config['passster_activate_protection'] ) ) {
				$protected[] = $post_type;
			}
		}

		return $protected;
	}

	/**
	 * Post types eligible for post type level protection: public post types,
	 * excluding Passster's own internal post types and WooCommerce products (the
	 * "shop" archive is a regular WooCommerce page, not a standard archive template).
	 * An archive page is not required — post type level protection still locks
	 * every individual post of the type even when there's no archive to protect.
	 *
	 * @return array
	 */
	public static function get_eligible_post_types(): array {
		$excluded   = array( 'attachment', 'protected_areas', 'password_lists' );
		$post_types = get_post_types( array( 'public' => true ), 'objects' );
		$eligible   = array();

		foreach ( $post_types as $post_type ) {
			if ( in_array( $post_type->name, $excluded, true ) ) {
				continue;
			}

			if ( 'product' === $post_type->name && class_exists( 'WooCommerce' ) ) {
				continue;
			}

			$eligible[] = array(
				'label'       => ! empty( $post_type->labels->singular_name ) ? $post_type->labels->singular_name : $post_type->label,
				'value'       => $post_type->name,
				'active'      => self::is_post_type_protected( $post_type->name ),
				'has_archive' => ! empty( $post_type->has_archive ),
			);
		}

		return $eligible;
	}

	/**
	 * Public taxonomies registered exclusively for the given post type.
	 * A shared taxonomy (also used by other, unprotected post types) is left alone
	 * so its archive doesn't lock out unrelated content.
	 *
	 * @param string $post_type Post type slug.
	 * @return array Taxonomy names.
	 */
	private function get_exclusive_taxonomies( string $post_type ): array {
		$taxonomies = get_object_taxonomies( $post_type, 'objects' );
		$exclusive  = array();

		foreach ( $taxonomies as $taxonomy ) {
			if ( ! $taxonomy->public ) {
				continue;
			}

			if ( 1 === count( $taxonomy->object_type ) && in_array( $post_type, $taxonomy->object_type, true ) ) {
				$exclusive[] = $taxonomy->name;
			}
		}

		return $exclusive;
	}

	/**
	 * Whether the current time falls within the configured schedule.
	 *
	 * @param array $config Post type configuration.
	 * @return bool
	 */
	private function is_within_schedule( array $config ): bool {
		if ( empty( $config['passster_schedule_enabled'] ) ) {
			return true;
		}

		$now = current_time( 'timestamp' );

		if ( ! empty( $config['passster_schedule_start'] ) && $now < strtotime( $config['passster_schedule_start'] ) ) {
			return false;
		}

		if ( ! empty( $config['passster_schedule_end'] ) && $now > strtotime( $config['passster_schedule_end'] ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Build $atts array from config (for PS_Conditional::is_valid).
	 *
	 * @param array $config Post type configuration.
	 * @return array
	 */
	private function build_atts( array $config ): array {
		$atts = array();

		switch ( $config['passster_protection_type'] ) {
			case 'password':
				$atts['password'] = $config['passster_password'];
				break;
			case 'passwords':
				$atts['passwords'] = $config['passster_passwords'];
				break;
			case 'password_list':
				$atts['password_list'] = $config['passster_password_list'];
				break;
			case 'password_lists':
				$atts['password_lists'] = implode( '|', (array) $config['passster_password_lists'] );
				break;
			case 'recaptcha':
				$atts['recaptcha'] = true;
				break;
			case 'turnstile':
				$atts['turnstile'] = true;
				break;
		}

		if ( ! empty( $config['passster_activate_user_restriction'] ) && ! empty( $config['passster_user_restriction'] ) && 'no-role' !== $config['passster_user_restriction'] ) {
			if ( 'user-role' === $config['passster_user_restriction_type'] ) {
				$atts['role'] = $config['passster_user_restriction'];
			} else {
				$atts['user'] = $config['passster_user_restriction'];
			}
		}

		return $atts;
	}

	/**
	 * Build a passster shortcode string from config.
	 *
	 * @param array  $config    Post type configuration.
	 * @param string $content   Content to wrap.
	 * @param string $post_type Post type slug — only passed for archive-level forms, where
	 *                          there's no real post ID for the REST unlock request to key off of.
	 * @return string
	 */
	private function build_shortcode( array $config, string $content, string $post_type = '' ): string {
		$shortcode = '[passster ';

		switch ( $config['passster_protection_type'] ) {
			case 'password':
				$shortcode .= 'password="' . esc_attr( $config['passster_password'] ) . '" ';
				break;
			case 'passwords':
				$shortcode .= 'passwords="' . esc_attr( $config['passster_passwords'] ) . '" ';
				break;
			case 'password_list':
				$shortcode .= 'password_list="' . esc_attr( $config['passster_password_list'] ) . '" ';
				break;
			case 'password_lists':
				$shortcode .= 'password_lists="' . esc_attr( implode( '|', (array) $config['passster_password_lists'] ) ) . '" ';
				break;
			case 'recaptcha':
				$shortcode .= 'recaptcha="true" ';
				break;
			case 'turnstile':
				$shortcode .= 'turnstile="true" ';
				break;
		}

		$shortcode .= 'protection="full" ';

		if ( ! empty( $post_type ) ) {
			$shortcode .= 'post_type="' . esc_attr( $post_type ) . '" ';
		}

		if ( ! empty( $config['passster_activate_user_restriction'] ) && ! empty( $config['passster_user_restriction'] ) && 'no-role' !== $config['passster_user_restriction'] ) {
			if ( 'user-role' === $config['passster_user_restriction_type'] ) {
				$shortcode .= 'role="' . esc_attr( $config['passster_user_restriction'] ) . '" ';
			} else {
				$shortcode .= 'user="' . esc_attr( $config['passster_user_restriction'] ) . '" ';
			}
		}

		if ( ! empty( $config['passster_activate_misc_settings'] ) ) {
			if ( ! empty( $config['passster_redirect_url'] ) ) {
				$shortcode .= 'redirect="' . esc_url( $config['passster_redirect_url'] ) . '" ';
			}

			if ( 'yes' === $config['passster_hide'] ) {
				$shortcode .= 'hide="true" ';
			}
		}

		if ( ! empty( $config['passster_activate_overwrite_defaults'] ) ) {
			if ( ! empty( $config['passster_headline'] ) ) {
				$shortcode .= 'headline="' . esc_attr( $config['passster_headline'] ) . '" ';
			}

			if ( ! empty( $config['passster_instruction'] ) ) {
				$shortcode .= 'instruction="' . base64_encode( $config['passster_instruction'] ) . '" ';
			}

			if ( ! empty( $config['passster_placeholder'] ) ) {
				$shortcode .= 'placeholder="' . esc_attr( $config['passster_placeholder'] ) . '" ';
			}

			if ( ! empty( $config['passster_button'] ) ) {
				$shortcode .= 'button="' . esc_attr( $config['passster_button'] ) . '" ';
			}
		}

		$shortcode .= ']' . $content . '[/passster]';

		return $shortcode;
	}

	// -------------------------------------------------------------------------
	// Frontend: Protect Posts of a Locked Post Type
	// -------------------------------------------------------------------------

	/**
	 * Filter the_content/the_excerpt for posts of a protected post type.
	 * Runs after post-level (priority 10) and term-level (priority 11) protection,
	 * both of which take precedence when active for the given post.
	 *
	 * @param string $content Post content.
	 * @return string
	 */
	public function filter_content_by_post_type( string $content ): string {
		$post_type = $this->get_current_post_type_lock();
		if ( ! $post_type ) {
			return $content;
		}

		$config    = self::get_post_type_config( $post_type );
		$shortcode = $this->build_shortcode( $config, $content );

		return do_shortcode( $shortcode );
	}

	/**
	 * Replace plain-text output (get_the_excerpt, feeds) of a post type locked post.
	 *
	 * @param string $text Excerpt or feed content.
	 * @return string
	 */
	public function filter_text_by_post_type( string $text ): string {
		return $this->get_current_post_type_lock() ? PS_Helper::get_protected_text() : $text;
	}

	/**
	 * @return string|null
	 */
	private function get_current_post_type_lock() {
		if ( is_admin() ) {
			return null;
		}

		$post_id = get_the_id();
		if ( ! $post_id ) {
			return null;
		}

		return $this->get_active_post_type_lock( $post_id );
	}

	/**
	 * Determine whether a post should be locked by post type level protection.
	 *
	 * @param int $post_id Post ID.
	 * @return string|null The protected post type, or null if not applicable.
	 */
	public function get_active_post_type_lock( int $post_id ) {
		if ( get_post_meta( $post_id, 'passster_activate_protection', true ) ) {
			return null; // Post-level protection owns it.
		}

		if ( class_exists( PS_Category_Lock::class ) && PS_Category_Lock::get_instance()->get_protected_term_for_post( $post_id ) ) {
			return null; // Term-level protection owns it.
		}

		$post_type = get_post_type( $post_id );
		if ( ! $post_type || ! self::is_post_type_protected( $post_type ) ) {
			return null;
		}

		$config = self::get_post_type_config( $post_type );

		if ( ! $this->is_within_schedule( $config ) ) {
			return null;
		}

		if ( PS_Conditional::is_valid( $this->build_atts( $config ) ) ) {
			return null;
		}

		return $post_type;
	}

	// -------------------------------------------------------------------------
	// Frontend: Protect the Post Type Archive (and its exclusive taxonomies)
	// -------------------------------------------------------------------------

	/**
	 * Protect the post type archive and any taxonomy archive exclusive to it.
	 * Runs after PS_Category_Lock::protect_category_archive() so an explicit
	 * term-level lock always takes precedence over the broader post type lock.
	 *
	 * @return void
	 */
	public function protect_archive() {
		if ( is_admin() ) {
			return;
		}

		$protected_types = self::get_protected_post_types();
		if ( empty( $protected_types ) ) {
			return;
		}

		if ( is_post_type_archive( $protected_types ) ) {
			$post_type = get_query_var( 'post_type' );
			if ( is_array( $post_type ) ) {
				$post_type = reset( $post_type );
			}

			$this->maybe_lock_archive( $post_type );
			return;
		}

		if ( ! is_category() && ! is_tax() && ! is_tag() ) {
			return;
		}

		$term = get_queried_object();
		if ( ! $term instanceof \WP_Term ) {
			return;
		}

		if ( class_exists( PS_Category_Lock::class ) && PS_Category_Lock::get_instance()->get_active_protected_term_id( $term ) ) {
			return;
		}

		foreach ( $protected_types as $post_type ) {
			if ( in_array( $term->taxonomy, $this->get_exclusive_taxonomies( $post_type ), true ) ) {
				$this->maybe_lock_archive( $post_type );
				return;
			}
		}
	}

	/**
	 * Lock the current archive page for a protected post type, if not already unlocked.
	 *
	 * @param string $post_type Post type slug.
	 * @return void
	 */
	private function maybe_lock_archive( string $post_type ) {
		if ( ! self::is_post_type_protected( $post_type ) ) {
			return;
		}

		$config = self::get_post_type_config( $post_type );

		if ( ! $this->is_within_schedule( $config ) ) {
			return;
		}

		if ( PS_Conditional::is_valid( $this->build_atts( $config ) ) ) {
			return;
		}

		// A locked archive must not hand out its posts' URLs through WP 7.2 random content redirects.
		add_filter( 'wp_enable_random_content_redirect', '__return_false' );

		if ( ! empty( $config['passster_activate_misc_settings'] ) && ! empty( $config['passster_redirect_url'] ) ) {
			wp_redirect( esc_url_raw( $config['passster_redirect_url'] ) );
			exit;
		}

		self::$rendered_form = do_shortcode( $this->build_shortcode( $config, '', $post_type ) );

		if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			add_filter( 'render_block', array( $this, 'replace_query_block_with_form' ), 10, 2 );
		} else {
			add_filter( 'template_include', array( $this, 'use_protected_archive_template' ), 99 );
		}
	}

	/**
	 * Replace the core/query block output with the password form (FSE/block themes only).
	 *
	 * @param string $block_content Rendered block HTML.
	 * @param array  $block         Block data.
	 * @return string
	 */
	public function replace_query_block_with_form( string $block_content, array $block ): string {
		if ( 'core/query' !== $block['blockName'] ) {
			return $block_content;
		}

		return self::$rendered_form;
	}

	/**
	 * Swap the archive template for the protected archive template (classic themes only).
	 *
	 * @param string $template Current template path.
	 * @return string
	 */
	public function use_protected_archive_template( string $template ): string {
		return PASSSTER_PATH . '/inc/templates/post-type-archive-protected.php';
	}

	// -------------------------------------------------------------------------
	// Search / Discovery Hardening
	// -------------------------------------------------------------------------

	/**
	 * Exclude every post of a protected post type from search results,
	 * regardless of whether individual posts also carry their own protection meta.
	 *
	 * @param \WP_Query $query The WP_Query instance.
	 * @return \WP_Query
	 */
	public function exclude_protected_types_from_search( $query ) {
		if ( ! $this->should_exclude_from_search( $query ) ) {
			return $query;
		}

		$protected_types = self::get_protected_post_types();
		if ( empty( $protected_types ) ) {
			return $query;
		}

		$queried_types = $query->get( 'post_type' );
		if ( empty( $queried_types ) ) {
			$queried_types = get_post_types( array( 'exclude_from_search' => false ) );
		}

		$query->set( 'post_type', array_values( array_diff( (array) $queried_types, $protected_types ) ) );

		return $query;
	}

	/**
	 * Check if we should exclude protected post types from this query.
	 *
	 * @param \WP_Query $query The WP_Query instance.
	 * @return bool
	 */
	private function should_exclude_from_search( $query ) {
		if ( current_user_can( 'manage_options' ) ) {
			return false;
		}

		if ( ! is_admin() && $query->is_search() && $query->is_main_query() ) {
			return true;
		}

		if ( defined( 'REST_REQUEST' ) && REST_REQUEST && ! empty( $query->query_vars['s'] ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Block anonymous REST API access to protected post types, while leaving it open
	 * for users who can edit them (so the block editor keeps working for admins/editors).
	 *
	 * @param mixed            $response Response, or null/error if already handled.
	 * @param array            $handler  Route handler.
	 * @param \WP_REST_Request $request  Request object.
	 * @return mixed
	 */
	public function maybe_block_rest_access( $response, $handler, $request ) {
		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$protected_types = self::get_protected_post_types();
		if ( empty( $protected_types ) ) {
			return $response;
		}

		$route = ltrim( $request->get_route(), '/' );

		foreach ( $protected_types as $post_type ) {
			$post_type_obj = get_post_type_object( $post_type );
			if ( ! $post_type_obj || empty( $post_type_obj->show_in_rest ) ) {
				continue;
			}

			$namespace = ! empty( $post_type_obj->rest_namespace ) ? $post_type_obj->rest_namespace : 'wp/v2';
			$rest_base = ! empty( $post_type_obj->rest_base ) ? $post_type_obj->rest_base : $post_type_obj->name;

			if ( 0 !== strpos( $route, trailingslashit( $namespace ) . $rest_base ) ) {
				continue;
			}

			if ( current_user_can( $post_type_obj->cap->edit_posts ) ) {
				continue;
			}

			return new \WP_Error(
				'passster_post_type_protected',
				__( 'This content is password-protected.', 'content-protector' ),
				array( 'status' => 403 )
			);
		}

		return $response;
	}

	/**
	 * Remove protected post types from the core XML sitemap index.
	 *
	 * @param array $post_types Sitemap-eligible post type objects, keyed by name.
	 * @return array
	 */
	public function exclude_from_sitemap_post_types( $post_types ) {
		foreach ( self::get_protected_post_types() as $post_type ) {
			unset( $post_types[ $post_type ] );
		}

		return $post_types;
	}

	/**
	 * Remove taxonomies exclusive to a protected post type from the core XML sitemap index.
	 *
	 * @param array $taxonomies Sitemap-eligible taxonomy objects, keyed by name.
	 * @return array
	 */
	public function exclude_from_sitemap_taxonomies( $taxonomies ) {
		foreach ( self::get_protected_post_types() as $post_type ) {
			foreach ( $this->get_exclusive_taxonomies( $post_type ) as $taxonomy ) {
				unset( $taxonomies[ $taxonomy ] );
			}
		}

		return $taxonomies;
	}

	// -------------------------------------------------------------------------
	// REST API
	// -------------------------------------------------------------------------

	/**
	 * Register REST API routes.
	 *
	 * @return void
	 */
	public function rest_api_init() {
		register_rest_route(
			'passster/v1',
			'/eligible-post-types',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_eligible_post_types_rest' ),
				'permission_callback' => function () {
					return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
				},
			)
		);

		register_rest_route(
			'passster/v1',
			'/post-type-meta',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_post_type_meta_rest' ),
				'permission_callback' => function () {
					return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
				},
			)
		);

		register_rest_route(
			'passster/v1',
			'/post-type-meta',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'save_post_type_meta_rest' ),
				'permission_callback' => function () {
					return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
				},
			)
		);

		register_rest_route(
			'passster/v1',
			'/post-type-link',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_post_type_link_rest' ),
				'permission_callback' => function () {
					return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
				},
			)
		);
	}

	/**
	 * Get eligible post types via REST API.
	 *
	 * @return array
	 */
	public function get_eligible_post_types_rest(): array {
		return self::get_eligible_post_types();
	}

	/**
	 * Get a post type's configuration via REST API.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return array|\WP_Error
	 */
	public function get_post_type_meta_rest( \WP_REST_Request $request ) {
		$post_type = sanitize_key( (string) $request->get_param( 'post_type' ) );

		if ( ! $post_type ) {
			return new \WP_Error( 'passster_missing_post_type', __( 'Missing post type.', 'content-protector' ), array( 'status' => 400 ) );
		}

		return self::get_post_type_config( $post_type );
	}

	/**
	 * Save a post type's configuration via REST API. Replaces the whole config
	 * (merged with existing values) in a single request, saved explicitly via a
	 * "Save" action rather than per-field autosave.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return array|\WP_Error
	 */
	public function save_post_type_meta_rest( \WP_REST_Request $request ) {
		$post_type    = sanitize_key( (string) $request->get_param( 'post_type' ) );
		$config_input = $request->get_param( 'config' );

		if ( ! $post_type || ! is_array( $config_input ) ) {
			return new \WP_Error( 'passster_invalid_params', __( 'Invalid post type or configuration.', 'content-protector' ), array( 'status' => 400 ) );
		}

		$defaults  = self::get_default_config();
		$sanitized = array();

		foreach ( $config_input as $key => $value ) {
			if ( ! array_key_exists( $key, $defaults ) ) {
				continue;
			}
			$sanitized[ $key ] = $this->sanitize_config_value( $key, $value );
		}

		$all_config               = self::get_config();
		$all_config[ $post_type ] = array_merge( self::get_post_type_config( $post_type ), $sanitized );

		update_option( self::OPTION_KEY, $all_config );

		return array(
			'status'  => 200,
			'message' => 'Ok',
		);
	}

	/**
	 * Sanitize an incoming configuration value based on its key.
	 *
	 * @param string $key   Configuration key.
	 * @param mixed  $value Raw value.
	 * @return mixed
	 */
	private function sanitize_config_value( string $key, $value ) {
		$boolean_keys = array(
			'passster_activate_protection',
			'passster_activate_user_restriction',
			'passster_activate_overwrite_defaults',
			'passster_activate_misc_settings',
			'passster_schedule_enabled',
		);

		if ( in_array( $key, $boolean_keys, true ) ) {
			return (bool) $value;
		}

		if ( 'passster_instruction' === $key ) {
			return wp_kses_post( (string) $value );
		}

		if ( 'passster_redirect_url' === $key ) {
			return esc_url_raw( (string) $value );
		}

		if ( 'passster_password_list' === $key ) {
			return absint( $value );
		}

		if ( 'passster_password_lists' === $key ) {
			return is_array( $value ) ? array_map( 'absint', $value ) : array();
		}

		return sanitize_text_field( (string) $value );
	}

	/**
	 * Generate an unlock link to a protected post type's archive via REST API.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return string|\WP_Error
	 */
	public function get_post_type_link_rest( \WP_REST_Request $request ) {
		$post_type   = sanitize_key( (string) $request->get_param( 'post_type' ) );
		$password    = wp_unslash( (string) $request->get_param( 'password' ) );
		$is_list     = (bool) $request->get_param( 'is_list' );
		$is_multiple = (bool) $request->get_param( 'is_multiple' );

		if ( ! $post_type || ! get_post_type_object( $post_type ) ) {
			return new \WP_Error( 'passster_missing_post_type', __( 'Missing post type.', 'content-protector' ), array( 'status' => 400 ) );
		}

		$archive_link = get_post_type_archive_link( $post_type );
		if ( ! $archive_link ) {
			return new \WP_Error( 'passster_no_archive', __( 'This post type has no archive page to unlock.', 'content-protector' ), array( 'status' => 400 ) );
		}

		if ( $is_list ) {
			if ( $is_multiple ) {
				$list_ids = explode( ',', $password );
				$password = $list_ids[0];
			}

			$passwords = get_post_meta( $password, 'passster_passwords', true );
			if ( ! empty( $passwords ) ) {
				$password = strtok( $passwords, ',' );
			}
		}

		$hash = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );
		$link = add_query_arg( 'pass', $hash, $archive_link );

		$options = get_option( 'passster' );
		if ( ! empty( $options['bitly_token'] ) ) {
			$link = PS_Helper::get_bitly_url__premium_only( $link );
		}

		return $link;
	}
}
