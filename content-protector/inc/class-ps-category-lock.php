<?php

namespace passster;

/**
 * Class to handle category/taxonomy protection.
 * Adds password protection to hierarchical taxonomy terms.
 */
class PS_Category_Lock {
    /**
     * Contains instance or null
     *
     * @var object|null
     */
    private static $instance = null;

    /**
     * Returns instance of PS_Category_Lock.
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
        add_action( 'init', array($this, 'register_term_meta'), 99 );
        add_action( 'init', array($this, 'register_taxonomy_hooks'), 99 );
        // REST API endpoints for React metabox.
        add_action( 'rest_api_init', array($this, 'rest_api_init') );
        // Enqueue React scripts on term edit pages.
        add_action( 'admin_enqueue_scripts', array($this, 'add_term_meta_scripts') );
        // AJAX handler for quick edit modal.
        add_action( 'wp_ajax_passster_quick_edit_category', array($this, 'ajax_quick_edit_category') );
        // Frontend protection.
        add_filter( 'the_content', array($this, 'filter_content_by_category'), 11 );
        add_filter( 'get_the_excerpt', array($this, 'filter_content_by_category'), 11 );
        add_action( 'template_redirect', array($this, 'protect_category_archive') );
    }

    /**
     * Get all public hierarchical taxonomies.
     *
     * @return array
     */
    private function get_taxonomies() : array {
        return get_taxonomies( array(
            'public'       => true,
            'hierarchical' => true,
        ), 'names' );
    }

    /**
     * Register term meta fields.
     *
     * @return void
     */
    public function register_term_meta() {
        $taxonomies = $this->get_taxonomies();
        foreach ( $taxonomies as $taxonomy ) {
            register_term_meta( $taxonomy, 'passster_activate_protection', array(
                'type'              => 'boolean',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'rest_sanitize_boolean',
            ) );
            register_term_meta( $taxonomy, 'passster_password', array(
                'type'              => 'string',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'sanitize_text_field',
            ) );
            register_term_meta( $taxonomy, 'passster_redirect_url', array(
                'type'              => 'string',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'esc_url_raw',
            ) );
            register_term_meta( $taxonomy, 'passster_headline', array(
                'type'              => 'string',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'sanitize_text_field',
            ) );
            register_term_meta( $taxonomy, 'passster_instruction', array(
                'type'              => 'string',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'wp_kses_post',
            ) );
            register_term_meta( $taxonomy, 'passster_placeholder', array(
                'type'              => 'string',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'sanitize_text_field',
            ) );
            register_term_meta( $taxonomy, 'passster_button', array(
                'type'              => 'string',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'sanitize_text_field',
            ) );
            register_term_meta( $taxonomy, 'passster_activate_overwrite_defaults', array(
                'type'              => 'boolean',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'rest_sanitize_boolean',
            ) );
            register_term_meta( $taxonomy, 'passster_activate_misc_settings', array(
                'type'              => 'boolean',
                'single'            => true,
                'show_in_rest'      => false,
                'sanitize_callback' => 'rest_sanitize_boolean',
            ) );
        }
    }

    /**
     * Register hooks for each taxonomy (form fields, columns, row actions).
     *
     * @return void
     */
    public function register_taxonomy_hooks() {
        $taxonomies = $this->get_taxonomies();
        foreach ( $taxonomies as $taxonomy ) {
            // Add/Edit form fields.
            add_action( "{$taxonomy}_add_form_fields", array($this, 'add_form_fields') );
            add_action(
                "{$taxonomy}_edit_form_fields",
                array($this, 'edit_form_fields'),
                10,
                2
            );
            // Save term meta (only on create; edit uses React + REST API).
            add_action( "created_{$taxonomy}", array($this, 'save_term_meta') );
            // Admin columns.
            add_filter( "manage_edit-{$taxonomy}_columns", array($this, 'add_columns') );
            add_filter(
                "manage_{$taxonomy}_custom_column",
                array($this, 'render_column'),
                10,
                3
            );
            // Row actions.
            add_filter(
                "{$taxonomy}_row_actions",
                array($this, 'add_row_actions'),
                10,
                2
            );
        }
        // Quick edit modal UI.
        add_action( 'admin_footer-edit-tags.php', array($this, 'quick_edit_ui') );
    }

    // -------------------------------------------------------------------------
    // Add Form Fields (Add New Term screen)
    // -------------------------------------------------------------------------
    /**
     * Render React container on the "Add New" term form.
     * The actual UI is rendered by TermMetabox.jsx.
     * Hidden inputs are managed by React to submit data with the form.
     *
     * @param string $taxonomy Current taxonomy slug.
     * @return void
     */
    public function add_form_fields( $taxonomy ) {
        ?>
		<div class="form-field passster-term-fields">
			<div id="passster-term-metabox-add"></div>
		</div>
		<?php 
    }

    // -------------------------------------------------------------------------
    // Edit Form Fields (Edit Term screen) — React-based UI
    // -------------------------------------------------------------------------
    /**
     * Render React container on the "Edit" term form.
     * The actual UI is rendered by TermMetabox.jsx via the React app.
     *
     * @param \WP_Term $term     Current term object.
     * @param string   $taxonomy Current taxonomy slug.
     * @return void
     */
    public function edit_form_fields( $term, $taxonomy ) {
        ?>
		<tr class="form-field">
			<th scope="row" colspan="2">
				<h3 style="margin:0;"><?php 
        esc_html_e( 'Passster Protection', 'content-protector' );
        ?></h3>
			</th>
		</tr>
		<tr class="form-field">
			<td colspan="2">
				<div id="passster-term-metabox"></div>
			</td>
		</tr>
		<?php 
    }

    // -------------------------------------------------------------------------
    // Enqueue React Scripts for Term Edit
    // -------------------------------------------------------------------------
    /**
     * Enqueue React scripts on term edit pages.
     *
     * @return void
     */
    public function add_term_meta_scripts() {
        $screen = get_current_screen();
        if ( !$screen || !in_array( $screen->base, array('term', 'edit-tags'), true ) ) {
            return;
        }
        $taxonomies = $this->get_taxonomies();
        if ( !in_array( $screen->taxonomy, $taxonomies, true ) ) {
            return;
        }
        wp_enqueue_script(
            'passster-term-meta-settings',
            PASSSTER_URL . '/inc/admin/build/index.js',
            array(
                'wp-api',
                'wp-components',
                'wp-element',
                'wp-api-fetch',
                'wp-data',
                'wp-i18n'
            ),
            PASSSTER_VERSION,
            true
        );
        // On edit (term) page, get the term ID. On add new (edit-tags) page, term_id is 0.
        if ( 'term' === $screen->base ) {
            $term_id = ( isset( $_GET['tag_ID'] ) ? absint( $_GET['tag_ID'] ) : 0 );
        } else {
            $term_id = 0;
        }
        $options = get_option( 'passster' );
        $meta = array(
            'passster_activate_protection'         => get_term_meta( $term_id, 'passster_activate_protection', true ),
            'passster_protection_type'             => get_term_meta( $term_id, 'passster_protection_type', true ),
            'passster_password'                    => get_term_meta( $term_id, 'passster_password', true ),
            'passster_headline'                    => get_term_meta( $term_id, 'passster_headline', true ),
            'passster_instruction'                 => get_term_meta( $term_id, 'passster_instruction', true ),
            'passster_placeholder'                 => get_term_meta( $term_id, 'passster_placeholder', true ),
            'passster_button'                      => get_term_meta( $term_id, 'passster_button', true ),
            'passster_redirect_url'                => get_term_meta( $term_id, 'passster_redirect_url', true ),
            'passster_activate_overwrite_defaults' => get_term_meta( $term_id, 'passster_activate_overwrite_defaults', true ),
            'passster_activate_misc_settings'      => get_term_meta( $term_id, 'passster_activate_misc_settings', true ),
        );
        $args = array(
            'screen'  => 'term-meta',
            'is_pro'  => \passster_fs()->is_plan_or_trial__premium_only( 'pro' ),
            'meta'    => $meta,
            'term_id' => $term_id,
        );
        if ( isset( $options['password_length'] ) ) {
            $args['password_length'] = esc_html( $options['password_length'] );
        } else {
            $args['password_length'] = 12;
        }
        if ( isset( $options['include_uppercase'] ) ) {
            $args['include_uppercase'] = esc_html( $options['include_uppercase'] );
        } else {
            $args['include_uppercase'] = true;
        }
        if ( isset( $options['include_numbers'] ) ) {
            $args['include_numbers'] = esc_html( $options['include_numbers'] );
        } else {
            $args['include_numbers'] = true;
        }
        if ( isset( $options['include_symbols'] ) ) {
            $args['include_symbols'] = esc_html( $options['include_symbols'] );
        } else {
            $args['include_symbols'] = true;
        }
        wp_localize_script( 'passster-term-meta-settings', 'options', $args );
        if ( function_exists( 'wp_set_script_translations' ) ) {
            wp_set_script_translations( 'passster-term-meta-settings', 'content-protector', PASSSTER_PATH . '/languages' );
        }
        wp_enqueue_style( 'passster-term-meta-style', PASSSTER_URL . '/inc/admin/build/index.css', array('wp-components') );
    }

    // -------------------------------------------------------------------------
    // REST API Endpoints for Term Meta
    // -------------------------------------------------------------------------
    /**
     * Register REST API routes for term meta.
     *
     * @return void
     */
    public function rest_api_init() {
        register_rest_route( 'passster/v1', '/term-meta', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'save_term_meta_rest'),
            'permission_callback' => function () {
                return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
            },
        ) );
        register_rest_route( 'passster/v1', '/term-meta', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'get_term_meta_rest'),
            'permission_callback' => function () {
                return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
            },
        ) );
        register_rest_route( 'passster/v1', '/term-password-lists', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'get_term_password_lists_rest'),
            'permission_callback' => function () {
                return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
            },
        ) );
    }

    /**
     * Save term meta via REST API.
     *
     * @param \WP_REST_Request $request Request object.
     * @return string
     */
    public function save_term_meta_rest( \WP_REST_Request $request ) {
        $params = $request->get_params();
        $term_id = ( isset( $params['term_id'] ) ? absint( $params['term_id'] ) : 0 );
        $meta_key = ( isset( $params['meta_key'] ) ? sanitize_key( $params['meta_key'] ) : '' );
        if ( !$term_id || !$meta_key ) {
            return wp_json_encode( array(
                'status'  => 400,
                'message' => 'Missing term_id or meta_key',
            ) );
        }
        if ( isset( $params['meta_value'] ) ) {
            if ( 'passster_instruction' === $meta_key ) {
                $meta_value = wp_kses_post( $params['meta_value'] );
            } else {
                $meta_value = sanitize_text_field( $params['meta_value'] );
            }
            update_term_meta( $term_id, $meta_key, $meta_value );
        } elseif ( isset( $params['delete'] ) ) {
            delete_term_meta( $term_id, $meta_key );
        }
        return wp_json_encode( array(
            'status'  => 200,
            'message' => 'Ok',
        ) );
    }

    /**
     * Get term meta via REST API.
     *
     * @param \WP_REST_Request $request Request object.
     * @return string
     */
    public function get_term_meta_rest( \WP_REST_Request $request ) {
        $params = $request->get_params();
        $term_id = ( isset( $params['term_id'] ) ? absint( $params['term_id'] ) : 0 );
        $meta_key = ( isset( $params['meta_key'] ) ? sanitize_key( $params['meta_key'] ) : '' );
        if ( !$term_id || !$meta_key ) {
            return wp_json_encode( array(
                'status'  => 400,
                'message' => 'Missing term_id or meta_key',
                'data'    => '',
            ) );
        }
        $meta = get_term_meta( $term_id, $meta_key, true );
        if ( !empty( $meta ) ) {
            return wp_json_encode( array(
                'status'  => 200,
                'message' => 'Ok',
                'data'    => $meta,
            ) );
        }
        return wp_json_encode( array(
            'status'  => 400,
            'message' => 'Empty value',
            'data'    => '',
        ) );
    }

    /**
     * Get password lists for term meta dropdowns via REST API.
     *
     * @return array
     */
    public function get_term_password_lists_rest() {
        $lists = $this->get_password_lists();
        $fetched_lists = array();
        foreach ( $lists as $list ) {
            $item = new \stdClass();
            $item->title = $list->post_title;
            $item->id = $list->ID;
            $fetched_lists[] = $item;
        }
        return $fetched_lists;
    }

    // -------------------------------------------------------------------------
    // Save Term Meta
    // -------------------------------------------------------------------------
    /**
     * Save term meta on create/edit.
     *
     * @param int $term_id Term ID.
     * @return void
     */
    public function save_term_meta( $term_id ) {
        if ( !current_user_can( 'manage_categories' ) ) {
            return;
        }
        $activate = ( !empty( $_POST['passster_activate_protection'] ) ? 1 : 0 );
        update_term_meta( $term_id, 'passster_activate_protection', $activate );
        if ( $activate ) {
            if ( isset( $_POST['passster_password'] ) ) {
                update_term_meta( $term_id, 'passster_password', sanitize_text_field( wp_unslash( $_POST['passster_password'] ) ) );
            }
            if ( isset( $_POST['passster_redirect_url'] ) ) {
                update_term_meta( $term_id, 'passster_redirect_url', esc_url_raw( wp_unslash( $_POST['passster_redirect_url'] ) ) );
            }
            // Overwrite defaults.
            if ( isset( $_POST['passster_headline'] ) ) {
                update_term_meta( $term_id, 'passster_headline', sanitize_text_field( wp_unslash( $_POST['passster_headline'] ) ) );
            }
            if ( isset( $_POST['passster_instruction'] ) ) {
                update_term_meta( $term_id, 'passster_instruction', wp_kses_post( wp_unslash( $_POST['passster_instruction'] ) ) );
            }
            if ( isset( $_POST['passster_placeholder'] ) ) {
                update_term_meta( $term_id, 'passster_placeholder', sanitize_text_field( wp_unslash( $_POST['passster_placeholder'] ) ) );
            }
            if ( isset( $_POST['passster_button'] ) ) {
                update_term_meta( $term_id, 'passster_button', sanitize_text_field( wp_unslash( $_POST['passster_button'] ) ) );
            }
        }
    }

    // -------------------------------------------------------------------------
    // Admin Columns
    // -------------------------------------------------------------------------
    /**
     * Add columns to taxonomy list table.
     *
     * @param array $columns Existing columns.
     * @return array
     */
    public function add_columns( array $columns ) : array {
        $columns['passster_password'] = __( 'Password', 'content-protector' );
        return $columns;
    }

    /**
     * Render column content for taxonomy list table.
     *
     * @param string $content     Column content.
     * @param string $column_name Column name.
     * @param int    $term_id     Term ID.
     * @return string
     */
    public function render_column( $content, $column_name, $term_id ) {
        $activate = get_term_meta( $term_id, 'passster_activate_protection', true );
        if ( !$activate ) {
            if ( 'passster_password' === $column_name || 'passster_protection_type' === $column_name ) {
                return '-';
            }
            return $content;
        }
        $protection_type = ( get_term_meta( $term_id, 'passster_protection_type', true ) ?: 'password' );
        switch ( $column_name ) {
            case 'passster_password':
                return esc_html( get_term_meta( $term_id, 'passster_password', true ) );
                break;
            case 'passster_protection_type':
                $types = array(
                    'password'       => __( 'Password', 'content-protector' ),
                    'passwords'      => __( 'Passwords', 'content-protector' ),
                    'password_list'  => __( 'Password List', 'content-protector' ),
                    'password_lists' => __( 'Password Lists', 'content-protector' ),
                    'recaptcha'      => __( 'reCaptcha', 'content-protector' ),
                    'turnstile'      => __( 'Turnstile', 'content-protector' ),
                );
                return esc_html( $types[$protection_type] ?? $protection_type );
        }
        return $content;
    }

    // -------------------------------------------------------------------------
    // Row Actions
    // -------------------------------------------------------------------------
    /**
     * Add Quick Settings link to term row actions.
     *
     * @param array    $actions Existing actions.
     * @param \WP_Term $term    Term object.
     * @return array
     */
    public function add_row_actions( $actions, $term ) {
        if ( current_user_can( 'manage_categories' ) ) {
            $actions['passster_quick_settings'] = sprintf(
                '<a href="#" class="passster-category-quick-settings" data-term-id="%d" data-nonce="%s">%s</a>',
                $term->term_id,
                wp_create_nonce( 'passster_quick_edit_cat_' . $term->term_id ),
                __( 'Quick Settings', 'content-protector' )
            );
        }
        return $actions;
    }

    // -------------------------------------------------------------------------
    // Quick Edit Modal UI
    // -------------------------------------------------------------------------
    /**
     * Output quick edit modal HTML, CSS and JS.
     *
     * @return void
     */
    public function quick_edit_ui() {
        $screen = get_current_screen();
        if ( !$screen ) {
            return;
        }
        $taxonomies = $this->get_taxonomies();
        if ( !in_array( $screen->taxonomy, $taxonomies, true ) ) {
            return;
        }
        $is_pro = \passster_fs()->is_plan_or_trial__premium_only( 'pro' );
        $lists = ( $is_pro ? $this->get_password_lists() : array() );
        ?>
		<div id="passster-cat-quick-edit-modal" style="display:none;">
			<div class="passster-cat-qe-backdrop"></div>
			<div class="passster-cat-qe-panel">
				<div class="passster-cat-qe-header">
					<h3><?php 
        esc_html_e( 'Passster - Quick Settings', 'content-protector' );
        ?></h3>
					<button type="button" class="passster-cat-qe-close">&times;</button>
				</div>
				<div class="passster-cat-qe-body">
					<input type="hidden" id="passster-cat-qe-term-id" value="">
					<input type="hidden" id="passster-cat-qe-nonce" value="">

					<p class="passster-cat-qe-field">
						<label>
							<input type="checkbox" id="passster-cat-qe-activate">
							<?php 
        esc_html_e( 'Activate Protection', 'content-protector' );
        ?>
						</label>
					</p>

					<div class="passster-cat-qe-settings" style="display:none;">
						<?php 
        if ( $is_pro ) {
            ?>
						<p class="passster-cat-qe-field">
							<label for="passster-cat-qe-type"><?php 
            esc_html_e( 'Protection Type', 'content-protector' );
            ?></label>
							<select id="passster-cat-qe-type">
								<option value="password"><?php 
            esc_html_e( 'Password', 'content-protector' );
            ?></option>
								<option value="passwords"><?php 
            esc_html_e( 'Passwords', 'content-protector' );
            ?></option>
								<option value="password_list"><?php 
            esc_html_e( 'Password List', 'content-protector' );
            ?></option>
								<option value="password_lists"><?php 
            esc_html_e( 'Password Lists', 'content-protector' );
            ?></option>
								<option value="recaptcha">reCAPTCHA</option>
								<option value="turnstile">Turnstile</option>
							</select>
						</p>
						<?php 
        }
        ?>

						<p class="passster-cat-qe-field passster-cat-qe-password-field">
							<label for="passster-cat-qe-password"><?php 
        esc_html_e( 'Password', 'content-protector' );
        ?></label>
							<input type="text" id="passster-cat-qe-password" value="">
						</p>

						<?php 
        if ( $is_pro ) {
            ?>
						<p class="passster-cat-qe-field passster-cat-qe-passwords-field" style="display:none;">
							<label for="passster-cat-qe-passwords"><?php 
            esc_html_e( 'Passwords (comma-separated)', 'content-protector' );
            ?></label>
							<input type="text" id="passster-cat-qe-passwords" value="">
						</p>

						<p class="passster-cat-qe-field passster-cat-qe-list-field" style="display:none;">
							<label for="passster-cat-qe-list"><?php 
            esc_html_e( 'Password List', 'content-protector' );
            ?></label>
							<select id="passster-cat-qe-list">
								<option value="0"><?php 
            esc_html_e( '— Select —', 'content-protector' );
            ?></option>
								<?php 
            foreach ( $lists as $list ) {
                ?>
									<option value="<?php 
                echo esc_attr( $list->ID );
                ?>"><?php 
                echo esc_html( $list->post_title );
                ?></option>
								<?php 
            }
            ?>
							</select>
						</p>

						<p class="passster-cat-qe-field passster-cat-qe-lists-field" style="display:none;">
							<label for="passster-cat-qe-lists"><?php 
            esc_html_e( 'Password Lists (comma-separated IDs)', 'content-protector' );
            ?></label>
							<input type="text" id="passster-cat-qe-lists" value="">
						</p>
						<?php 
        }
        ?>
					</div>
				</div>
				<div class="passster-cat-qe-footer">
					<button type="button" class="button passster-cat-qe-cancel"><?php 
        esc_html_e( 'Cancel', 'content-protector' );
        ?></button>
					<button type="button" class="button button-primary passster-cat-qe-save"><?php 
        esc_html_e( 'Save', 'content-protector' );
        ?></button>
					<span class="spinner"></span>
				</div>
			</div>
		</div>

		<style>
			.passster-cat-qe-backdrop {
				position: fixed; top: 0; left: 0; right: 0; bottom: 0;
				background: rgba(0,0,0,0.5); z-index: 100000;
			}
			.passster-cat-qe-panel {
				position: fixed; top: 50%; left: 50%;
				transform: translate(-50%,-50%);
				background: #fff; border-radius: 8px;
				box-shadow: 0 4px 20px rgba(0,0,0,0.2);
				width: 420px; max-width: 90vw; z-index: 100001;
			}
			.passster-cat-qe-header {
				display: flex; justify-content: space-between; align-items: center;
				padding: 16px 20px; border-bottom: 1px solid #ddd;
			}
			.passster-cat-qe-header h3 { margin: 0; font-size: 16px; }
			.passster-cat-qe-close {
				background: none; border: none; font-size: 24px;
				cursor: pointer; color: #666; padding: 0; line-height: 1;
			}
			.passster-cat-qe-close:hover { color: #d63638; }
			.passster-cat-qe-body { padding: 20px; }
			.passster-cat-qe-field { margin-bottom: 14px; }
			.passster-cat-qe-field label { display: block; margin-bottom: 4px; font-weight: 600; }
			.passster-cat-qe-field input[type="text"],
			.passster-cat-qe-field input[type="url"],
			.passster-cat-qe-field select { width: 100%; }
			.passster-cat-qe-footer {
				display: flex; justify-content: flex-end; align-items: center;
				gap: 8px; padding: 16px 20px;
				border-top: 1px solid #ddd; background: #f6f7f7;
				border-radius: 0 0 8px 8px;
			}
			.passster-cat-qe-footer .spinner { float: none; margin: 0; }
		</style>

		<script>
		jQuery(function($) {
			var $modal = $('#passster-cat-quick-edit-modal');
			var $activate = $('#passster-cat-qe-activate');
			var $typeSelect = $('#passster-cat-qe-type');
			var isPro = <?php 
        echo ( $is_pro ? 'true' : 'false' );
        ?>;

			function toggleTypeFields() {
				if (!isPro) return;
				var type = $typeSelect.val();
				$('.passster-cat-qe-password-field').toggle(type === 'password');
				$('.passster-cat-qe-passwords-field').toggle(type === 'passwords');
				$('.passster-cat-qe-list-field').toggle(type === 'password_list');
				$('.passster-cat-qe-lists-field').toggle(type === 'password_lists');
			}

			$activate.on('change', function() {
				$('.passster-cat-qe-settings').toggle(this.checked);
			});

			if (isPro) {
				$typeSelect.on('change', toggleTypeFields);
			}

			// Open modal.
			$(document).on('click', '.passster-category-quick-settings', function(e) {
				e.preventDefault();
				var termId = $(this).data('term-id');
				var nonce = $(this).data('nonce');

				$('#passster-cat-qe-term-id').val(termId);
				$('#passster-cat-qe-nonce').val(nonce);

				$.post(ajaxurl, {
					action: 'passster_quick_edit_category',
					term_id: termId,
					nonce: nonce,
					edit_action: 'get'
				}, function(response) {
					if (response.success) {
						var data = response.data;
						$activate.prop('checked', !!data.activate);
						$('.passster-cat-qe-settings').toggle(!!data.activate);
						$('#passster-cat-qe-password').val(data.password || '');

						if (isPro) {
							$typeSelect.val(data.protection_type || 'password');
							$('#passster-cat-qe-passwords').val(data.passwords || '');
							$('#passster-cat-qe-list').val(data.password_list || 0);
							$('#passster-cat-qe-lists').val(data.password_lists || '');
							toggleTypeFields();
						}

						$modal.show();
					}
				});
			});

			// Close modal.
			$modal.on('click', '.passster-cat-qe-close, .passster-cat-qe-cancel, .passster-cat-qe-backdrop', function() {
				$modal.hide();
			});

			// Save.
			$modal.on('click', '.passster-cat-qe-save', function() {
				var $btn = $(this);
				var $spinner = $modal.find('.spinner');

				$btn.prop('disabled', true);
				$spinner.addClass('is-active');

				var postData = {
					action: 'passster_quick_edit_category',
					term_id: $('#passster-cat-qe-term-id').val(),
					nonce: $('#passster-cat-qe-nonce').val(),
					edit_action: 'save',
					activate: $activate.is(':checked') ? 1 : 0,
					password: $('#passster-cat-qe-password').val()
				};

				if (isPro) {
					postData.protection_type = $typeSelect.val();
					postData.passwords = $('#passster-cat-qe-passwords').val();
					postData.password_list = $('#passster-cat-qe-list').val();
					postData.password_lists = $('#passster-cat-qe-lists').val();
				}

				$.post(ajaxurl, postData, function(response) {
					$btn.prop('disabled', false);
					$spinner.removeClass('is-active');

					if (response.success) {
						$modal.hide();
						location.reload();
					} else {
						alert(response.data.message || 'Error saving settings.');
					}
				});
			});

			// ESC to close.
			$(document).on('keydown', function(e) {
				if (e.key === 'Escape' && $modal.is(':visible')) {
					$modal.hide();
				}
			});
		});
		</script>

		<?php 
    }

    // -------------------------------------------------------------------------
    // AJAX Quick Edit Handler
    // -------------------------------------------------------------------------
    /**
     * AJAX handler for quick edit category settings.
     *
     * @return void
     */
    public function ajax_quick_edit_category() {
        $term_id = ( isset( $_POST['term_id'] ) ? absint( $_POST['term_id'] ) : 0 );
        $nonce = ( isset( $_POST['nonce'] ) ? sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) : '' );
        $action = ( isset( $_POST['edit_action'] ) ? sanitize_text_field( wp_unslash( $_POST['edit_action'] ) ) : 'get' );
        if ( !wp_verify_nonce( $nonce, 'passster_quick_edit_cat_' . $term_id ) ) {
            wp_send_json_error( array(
                'message' => __( 'Security check failed.', 'content-protector' ),
            ) );
        }
        if ( !current_user_can( 'manage_categories' ) ) {
            wp_send_json_error( array(
                'message' => __( 'Permission denied.', 'content-protector' ),
            ) );
        }
        $term = get_term( $term_id );
        if ( !$term || is_wp_error( $term ) ) {
            wp_send_json_error( array(
                'message' => __( 'Invalid term.', 'content-protector' ),
            ) );
        }
        if ( 'get' === $action ) {
            $data = array(
                'term_id'         => $term_id,
                'activate'        => (bool) get_term_meta( $term_id, 'passster_activate_protection', true ),
                'password'        => get_term_meta( $term_id, 'passster_password', true ),
                'protection_type' => ( get_term_meta( $term_id, 'passster_protection_type', true ) ?: 'password' ),
                'passwords'       => get_term_meta( $term_id, 'passster_passwords', true ),
                'password_list'   => get_term_meta( $term_id, 'passster_password_list', true ),
                'password_lists'  => get_term_meta( $term_id, 'passster_password_lists', true ),
            );
            wp_send_json_success( $data );
        }
        if ( 'save' === $action ) {
            $activate = ( isset( $_POST['activate'] ) ? absint( $_POST['activate'] ) : 0 );
            update_term_meta( $term_id, 'passster_activate_protection', $activate );
            if ( $activate ) {
                $password = ( isset( $_POST['password'] ) ? sanitize_text_field( wp_unslash( $_POST['password'] ) ) : '' );
                update_term_meta( $term_id, 'passster_password', $password );
            }
            wp_send_json_success( array(
                'message' => __( 'Settings saved.', 'content-protector' ),
            ) );
        }
        wp_send_json_error( array(
            'message' => __( 'Invalid action.', 'content-protector' ),
        ) );
    }

    // -------------------------------------------------------------------------
    // Frontend: Protect Posts in Protected Categories
    // -------------------------------------------------------------------------
    /**
     * Filter the_content for posts belonging to a protected category.
     * Runs at priority 11, after PS_Public (priority 10).
     *
     * @param string $content Post content.
     * @return string
     */
    public function filter_content_by_category( $content ) {
        // Skip admin, REST, and non-singular contexts.
        if ( is_admin() || defined( 'REST_REQUEST' ) && REST_REQUEST ) {
            return $content;
        }
        // On category/taxonomy archives, template_include already handles protection.
        // Skip here to avoid showing escaped shortcode HTML in post excerpts.
        if ( is_category() || is_tax() ) {
            return $content;
        }
        $post_id = get_the_id();
        if ( !$post_id ) {
            return $content;
        }
        // Skip if the post itself already has protection (PS_Public handles it).
        $post_protection = get_post_meta( $post_id, 'passster_activate_protection', true );
        if ( $post_protection ) {
            return $content;
        }
        // Check each hierarchical taxonomy for protected terms.
        $term_data = $this->get_protected_term_for_post( $post_id );
        if ( !$term_data ) {
            return $content;
        }
        // Build atts and validate.
        $atts = $this->build_atts_from_term( $term_data['term_id'] );
        if ( PS_Conditional::is_valid( $atts ) ) {
            return $content;
        }
        // Build shortcode and render form.
        $shortcode = $this->build_shortcode_from_term( $term_data['term_id'], $content );
        return do_shortcode( $shortcode );
    }

    /**
     * Protect category archive pages.
     *
     * @return void
     */
    public function protect_category_archive() {
        if ( is_admin() ) {
            return;
        }
        if ( !is_category() && !is_tax() ) {
            return;
        }
        $term = get_queried_object();
        if ( !$term || !is_a( $term, 'WP_Term' ) ) {
            return;
        }
        // Only handle hierarchical taxonomies.
        $taxonomy_obj = get_taxonomy( $term->taxonomy );
        if ( !$taxonomy_obj || !$taxonomy_obj->hierarchical || !$taxonomy_obj->public ) {
            return;
        }
        $activate = get_term_meta( $term->term_id, 'passster_activate_protection', true );
        if ( !$activate ) {
            return;
        }
        $atts = $this->build_atts_from_term( $term->term_id );
        if ( PS_Conditional::is_valid( $atts ) ) {
            return;
        }
        // Check for redirect.
        $redirect = get_term_meta( $term->term_id, 'passster_redirect_url', true );
        if ( !empty( $redirect ) ) {
            wp_redirect( esc_url_raw( $redirect ) );
            exit;
        }
        // Directly replace the main query's posts with a virtual post whose content is the password form.
        $shortcode = $this->build_shortcode_from_term( $term->term_id, '' );
        global $wp_query;
        $virtual = new \WP_Post((object) array(
            'ID'                    => 0,
            'post_author'           => 0,
            'post_date'             => current_time( 'mysql' ),
            'post_date_gmt'         => current_time( 'mysql', true ),
            'post_content'          => $shortcode,
            'post_title'            => '',
            'post_excerpt'          => '',
            'post_status'           => 'publish',
            'comment_status'        => 'closed',
            'ping_status'           => 'closed',
            'post_password'         => '',
            'post_name'             => 'passster-protected',
            'to_ping'               => '',
            'pinged'                => '',
            'post_modified'         => current_time( 'mysql' ),
            'post_modified_gmt'     => current_time( 'mysql', true ),
            'post_content_filtered' => '',
            'post_parent'           => 0,
            'guid'                  => '',
            'menu_order'            => 0,
            'post_type'             => 'post',
            'post_mime_type'        => '',
            'comment_count'         => 0,
            'filter'                => 'raw',
        ));
        $wp_query->posts = array($virtual);
        $wp_query->post_count = 1;
        $wp_query->found_posts = 1;
    }

    // -------------------------------------------------------------------------
    // Helper Methods
    // -------------------------------------------------------------------------
    /**
     * Get the first protected term for a given post.
     *
     * @param int $post_id Post ID.
     * @return array|null Array with 'term_id' and 'taxonomy', or null.
     */
    public function get_protected_term_for_post( int $post_id ) {
        $taxonomies = $this->get_taxonomies();
        foreach ( $taxonomies as $taxonomy ) {
            $terms = get_the_terms( $post_id, $taxonomy );
            if ( !$terms || is_wp_error( $terms ) ) {
                continue;
            }
            foreach ( $terms as $term ) {
                $activate = get_term_meta( $term->term_id, 'passster_activate_protection', true );
                if ( $activate ) {
                    return array(
                        'term_id'  => $term->term_id,
                        'taxonomy' => $taxonomy,
                    );
                }
            }
        }
        return null;
    }

    /**
     * Build $atts array from term meta (for PS_Conditional::is_valid).
     *
     * @param int $term_id Term ID.
     * @return array
     */
    private function build_atts_from_term( int $term_id ) : array {
        $atts = array();
        $atts['password'] = get_term_meta( $term_id, 'passster_password', true );
        return $atts;
    }

    /**
     * Build a passster shortcode string from term meta.
     *
     * @param int    $term_id Term ID.
     * @param string $content Content to wrap.
     * @return string
     */
    private function build_shortcode_from_term( int $term_id, string $content ) : string {
        $options = get_option( 'passster' );
        $shortcode = '[passster ';
        $password = get_term_meta( $term_id, 'passster_password', true );
        $shortcode .= 'password="' . esc_attr( $password ) . '" ';
        $shortcode .= 'protection="full" ';
        // Redirect.
        $redirect = get_term_meta( $term_id, 'passster_redirect_url', true );
        if ( !empty( $redirect ) ) {
            $shortcode .= 'redirect="' . esc_url( $redirect ) . '" ';
        }
        // Overwrite defaults.
        $headline = get_term_meta( $term_id, 'passster_headline', true );
        if ( !empty( $headline ) ) {
            $shortcode .= 'headline="' . esc_attr( $headline ) . '" ';
        }
        $instruction = get_term_meta( $term_id, 'passster_instruction', true );
        if ( !empty( $instruction ) ) {
            $shortcode .= 'instruction="' . base64_encode( $instruction ) . '" ';
        }
        $placeholder = get_term_meta( $term_id, 'passster_placeholder', true );
        if ( !empty( $placeholder ) ) {
            $shortcode .= 'placeholder="' . esc_attr( $placeholder ) . '" ';
        }
        $button = get_term_meta( $term_id, 'passster_button', true );
        if ( !empty( $button ) ) {
            $shortcode .= 'button="' . esc_attr( $button ) . '" ';
        }
        $shortcode .= ']' . $content . '[/passster]';
        return $shortcode;
    }

    /**
     * Get published password lists.
     *
     * @return array
     */
    private function get_password_lists() : array {
        return get_posts( array(
            'post_type'      => 'password_lists',
            'post_status'    => 'publish',
            'posts_per_page' => -1,
        ) );
    }

}
