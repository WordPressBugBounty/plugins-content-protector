<?php

namespace passster;

class PS_Admin {
    /**
     * Contains instance or null
     *
     * @var object|null
     */
    private static $instance = null;

    /**
     * Returns instance of PS_Admin.
     *
     * @return object
     */
    public static function get_instance() {
        if ( null === self::$instance ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function __construct() {
        // Check permissions before include settings.
        add_action( 'admin_menu', array($this, 'remove_custom_fields_metabox') );
        add_action( 'init', array($this, 'register_password_areas') );
        add_filter( 'manage_protected_areas_posts_columns', array($this, 'set_area_columns') );
        // Register columns for all public post types (post, page, and custom).
        add_action( 'init', array($this, 'register_post_type_columns'), 99 );
        add_action(
            'manage_protected_areas_posts_custom_column',
            array($this, 'set_area_columns_content'),
            10,
            2
        );
        // Modify row actions and edit links for block-sourced areas.
        add_filter(
            'post_row_actions',
            array($this, 'modify_area_row_actions'),
            10,
            2
        );
        add_filter(
            'get_edit_post_link',
            array($this, 'modify_area_edit_link'),
            10,
            3
        );
        // Quick edit AJAX handler.
        add_action( 'wp_ajax_passster_quick_edit_area', array($this, 'ajax_quick_edit_area') );
        // Quick edit UI assets.
        add_action( 'admin_footer-edit.php', array($this, 'quick_edit_ui') );
        // Generate shortcode meta on every save so it appears in the list table.
        add_action(
            'save_post_protected_areas',
            array($this, 'save_area_shortcode'),
            20,
            1
        );
    }

    /**
     * Register Password column for all public post types.
     *
     * @return void
     */
    public function register_post_type_columns() {
        $post_types = get_post_types( array(
            'public' => true,
        ), 'names' );
        foreach ( $post_types as $post_type ) {
            if ( 'attachment' === $post_type || 'protected_areas' === $post_type ) {
                continue;
            }
            add_filter( "manage_{$post_type}_posts_columns", array($this, 'set_post_columns') );
            add_action(
                "manage_{$post_type}_posts_custom_column",
                array($this, 'set_post_columns_content'),
                10,
                2
            );
        }
    }

    /**
     * Remove Custom Fields meta box
     */
    public function remove_custom_fields_metabox() {
        $post_types = get_post_types( array(
            'public'              => true,
            'exclude_from_search' => false,
        ), 'names' );
        remove_meta_box( 'postcustom', $post_types, 'normal' );
    }

    /**
     * Generate and save shortcode meta on post save so it appears in the list table.
     *
     * @param int $post_id Post ID.
     */
    public function save_area_shortcode( $post_id ) {
        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
            return;
        }
        if ( wp_is_post_revision( $post_id ) ) {
            return;
        }
        $source = get_post_meta( $post_id, '_passster_source', true );
        if ( 'block' === $source ) {
            return;
        }
        $protection_type = get_post_meta( $post_id, 'passster_protection_type', true );
        $password = get_post_meta( $post_id, 'passster_password', true );
        $passwords = get_post_meta( $post_id, 'passster_passwords', true );
        $password_list = get_post_meta( $post_id, 'passster_password_list', true );
        $shortcode = '';
        switch ( $protection_type ) {
            case 'passwords':
                if ( !empty( $passwords ) ) {
                    $shortcode = '[passster passwords="' . esc_attr( $passwords ) . '" area="' . $post_id . '"]';
                }
                break;
            case 'password_list':
                if ( !empty( $password_list ) ) {
                    $shortcode = '[passster password_list="' . esc_attr( $password_list ) . '" area="' . $post_id . '"]';
                }
                break;
            case 'recaptcha':
                $shortcode = '[passster recaptcha="true" area="' . $post_id . '"]';
                break;
            case 'turnstile':
                $shortcode = '[passster turnstile="true" area="' . $post_id . '"]';
                break;
            default:
                if ( !empty( $password ) ) {
                    $shortcode = '[passster password="' . esc_attr( $password ) . '" area="' . $post_id . '"]';
                }
                break;
        }
        if ( !empty( $shortcode ) ) {
            update_post_meta( $post_id, 'passster_area_shortcode', $shortcode );
        }
    }

    /**
     * Register post type "protected areas"
     *
     * @return void
     */
    public function register_password_areas() {
        $labels = array(
            'name'               => _x( 'Protected Areas', 'post type general name', 'content-protector' ),
            'singular_name'      => _x( 'Protected Area', 'post type singular name', 'content-protector' ),
            'menu_name'          => _x( 'Protected Areas', 'admin menu', 'content-protector' ),
            'name_admin_bar'     => _x( 'Protected Area', 'add new on admin bar', 'content-protector' ),
            'add_new'            => _x( 'Add New', 'content-protector' ),
            'add_new_item'       => __( 'Add New Protected Area', 'content-protector' ),
            'new_item'           => __( 'New Protected Area', 'content-protector' ),
            'edit_item'          => __( 'Edit Protected Area', 'content-protector' ),
            'view_item'          => __( 'View Protected Area', 'content-protector' ),
            'all_items'          => __( 'Protected Areas', 'content-protector' ),
            'search_items'       => __( 'Search Protected Areas', 'content-protector' ),
            'parent_item_colon'  => __( 'Parent Protected Area', 'content-protector' ),
            'not_found'          => __( 'No Protected Areas found.', 'content-protector' ),
            'not_found_in_trash' => __( 'No Protected Areas found in Trash.', 'content-protector' ),
        );
        $args = array(
            'labels'             => $labels,
            'description'        => __( 'Manageable protected areas', 'content-protector' ),
            'public'             => false,
            'publicly_queryable' => false,
            'show_ui'            => true,
            'show_in_menu'       => 'passster',
            'query_var'          => true,
            'rewrite'            => false,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_position'      => null,
            'supports'           => array('title', 'editor'),
            'show_in_rest'       => true,
        );
        if ( current_user_can( 'administrator' ) && (is_plugin_active( 'elementor/elementor.php' ) || is_plugin_active( 'fusion-builder/fusion-builder.php' ) || is_plugin_active( 'livecanvas/livecanvas-plugin-index.php' ) || is_plugin_active( 'divi-builder/divi-builder.php' ) || is_plugin_active( 'oxygen/functions.php' )) ) {
            $args['public'] = true;
            $args['publicly_queryable'] = true;
        }
        $theme = wp_get_theme();
        if ( current_user_can( 'administrator' ) && 'Divi' == $theme->name || 'Divi' == $theme->parent_theme ) {
            $args['public'] = true;
            $args['publicly_queryable'] = true;
        }
        register_post_type( 'protected_areas', $args );
    }

    /**
     * Set column headers for pages/post
     *
     * @param array $columns array of columns.
     *
     * @return array
     */
    public function set_post_columns( array $columns ) : array {
        $columns['protected'] = __( 'Password', 'content-protector' );
        return $columns;
    }

    /**
     * Add content to registered columns for posts/pages
     *
     * @param string $column name of the column.
     * @param int $post_id current id.
     *
     * @return void
     */
    public function set_post_columns_content( string $column, int $post_id ) {
        switch ( $column ) {
            case 'protected':
                $protected = get_post_meta( $post_id, 'passster_activate_protection', true );
                if ( $protected ) {
                    $protection_type = get_post_meta( $post_id, 'passster_protection_type', true );
                    $password = get_post_meta( $post_id, 'passster_password', true );
                    echo esc_html( $password );
                } else {
                    // Check category-level protection.
                    $term_data = PS_Category_Lock::get_instance()->get_protected_term_for_post( $post_id );
                    if ( $term_data ) {
                        $term = get_term( $term_data['term_id'] );
                        $edit_url = get_edit_term_link( $term_data['term_id'], $term_data['taxonomy'] );
                        echo '<span class="dashicons dashicons-category" style="font-size:14px;width:14px;height:14px;color:#007cba;vertical-align:middle;"></span> ';
                        echo '<a href="' . esc_url( $edit_url ) . '" title="' . esc_attr__( 'Edit category protection', 'content-protector' ) . '">';
                        echo esc_html( $term->name );
                        echo '</a><br>';
                        $protection_type = ( get_term_meta( $term_data['term_id'], 'passster_protection_type', true ) ?: 'password' );
                        echo esc_html( get_term_meta( $term_data['term_id'], 'passster_password', true ) );
                    }
                }
                break;
        }
    }

    /**
     * Set column headers password lists post type
     *
     * @param array $columns array of columns.
     *
     * @return array
     */
    public function set_area_columns( array $columns ) : array {
        $columns['source'] = __( 'Source', 'content-protector' );
        $columns['shortcode'] = __( 'Shortcode', 'content-protector' );
        $columns['protection-type'] = __( 'Protection Type', 'content-protector' );
        $columns['password'] = __( 'Password', 'content-protector' );
        $columns['redirect'] = __( 'Redirect', 'content-protector' );
        unset($columns['date']);
        return $columns;
    }

    /**
     * Add content to registered columns for password list post type.
     *
     * @param string $column name of the column.
     * @param int $post_id current id.
     *
     * @return void
     */
    public function set_area_columns_content( string $column, int $post_id ) {
        switch ( $column ) {
            case 'source':
                $source = get_post_meta( $post_id, '_passster_source', true );
                if ( 'block' === $source ) {
                    $source_post_id = get_post_meta( $post_id, '_passster_source_post_id', true );
                    $source_post = get_post( $source_post_id );
                    if ( $source_post ) {
                        $block_id = get_post_meta( $post_id, '_passster_block_id', true );
                        $params = array(
                            'post'   => absint( $source_post_id ),
                            'action' => 'edit',
                        );
                        if ( $block_id ) {
                            $params['passster_focus_block'] = $block_id;
                        }
                        $edit_link = add_query_arg( $params, admin_url( 'post.php' ) );
                        echo '<span class="dashicons dashicons-block-default" style="color: #007cba;"></span> ';
                        printf(
                            '<a href="%s" title="%s">%s</a>',
                            esc_url( $edit_link ),
                            esc_attr__( 'Edit source post', 'content-protector' ),
                            esc_html( $source_post->post_title )
                        );
                    } else {
                        echo '<span class="dashicons dashicons-block-default"></span> ';
                        esc_html_e( 'Block (orphaned)', 'content-protector' );
                    }
                } else {
                    echo '<span class="dashicons dashicons-admin-page" style="color: #757575;"></span> ';
                    esc_html_e( 'Standalone', 'content-protector' );
                }
                break;
            case 'shortcode':
                $source = get_post_meta( $post_id, '_passster_source', true );
                $shortcode = get_post_meta( $post_id, 'passster_area_shortcode', true );
                // Block-sourced areas don't need shortcode (embedded in post).
                if ( 'block' === $source ) {
                    echo '<span style="color: #757575;">' . esc_html__( 'Embedded in block', 'content-protector' ) . '</span>';
                    break;
                }
                ?>
				<?php 
                if ( !empty( $shortcode ) ) {
                    ?>
                <button type="button"
                        class="components-button components-clipboard-button is-primary area-<?php 
                    echo esc_html( $post_id );
                    ?>"
                        data-shortcode="<?php 
                    echo esc_html( $shortcode );
                    ?>"
                        onclick="copyShortcode(this)"
                >
					<?php 
                    esc_html_e( 'Copy Shortcode', 'content-protector' );
                    ?>
                </button>
                <script>
                    function copyShortcode(element) {
                        // Copy to clipboard.
                        navigator.clipboard.writeText(element.getAttribute('data-shortcode')).then(function () {
                            element.innerHTML = "<?php 
                    esc_html_e( 'Copied!', 'content-protector' );
                    ?>";

                            setTimeout(function () {
                                element.innerHTML = "<?php 
                    esc_html_e( 'Copy Shortcode', 'content-protector' );
                    ?>"
                            }, 1500);

                        }, function (err) {
                            console.error('Could not copy shortcode: ', err);
                        });
                    }
                </script>
                <style>
                    button {
                        white-space: nowrap;
                        text-shadow: none;
                        outline: 1px solid transparent;
                        width: auto;
                        display: inline-flex;
                        text-decoration: none;
                        font-family: inherit;
                        font-weight: normal;
                        font-size: 13px;
                        margin: 0;
                        border: 0;
                        cursor: pointer;
                        -webkit-appearance: none;
                        background: #007cba;
                        transition: box-shadow 0.1s linear;
                        height: 36px;
                        align-items: center;
                        box-sizing: border-box;
                        padding: 6px 12px;
                        border-radius: 2px;
                        color: #fff;
                    }

                    button:hover {
                        background: #006ba1;
                    }
                </style>
			<?php 
                }
                ?>
				<?php 
                break;
            case 'protection-type':
                $type = get_post_meta( $post_id, 'passster_protection_type', true );
                $protection_types = array(
                    'password'       => __( 'Password', 'content-protector' ),
                    'password_list'  => __( 'Password List', 'content-protector' ),
                    'password_lists' => __( 'Password Lists', 'content-protector' ),
                    'passwords'      => __( 'Passwords', 'content-protector' ),
                    'recaptcha'      => __( 'reCaptcha', 'content-protector' ),
                    'turnstile'      => __( 'Turnstile', 'content-protector' ),
                );
                echo esc_html( $protection_types[$type] );
                break;
            case 'password':
                $type = get_post_meta( $post_id, 'passster_protection_type', true );
                $protection_types = array(
                    'password'       => get_post_meta( $post_id, 'passster_password', true ),
                    'password_list'  => get_post_meta( $post_id, 'passster_password_list', true ),
                    'password_lists' => get_post_meta( $post_id, 'passster_password_lists', true ),
                    'passwords'      => get_post_meta( $post_id, 'passster_passwords', true ),
                    'recaptcha'      => '-',
                    'turnstile'      => '-',
                );
                // Build the edit link if it's a password list.
                if ( 'password_list' === $type ) {
                    $edit_link = get_edit_post_link( $protection_types[$type] );
                    ?>
                    <a target="_blank"
                       href="<?php 
                    echo esc_url( $edit_link );
                    ?>"><?php 
                    echo esc_html( $protection_types[$type] );
                    ?></a>
					<?php 
                } elseif ( 'password_lists' === $type ) {
                    $password_list_ids = get_post_meta( $post_id, 'passster_password_lists', true );
                    $lists_string = '';
                    foreach ( $password_list_ids as $password_list_id ) {
                        $edit_url = admin_url( 'post.php?post=' . esc_html( $password_list_id ) . '&action=edit', 'https' );
                        $lists_string .= '<a href="' . esc_url( $edit_url ) . '">' . esc_html( $password_list_id ) . '</a> | ';
                    }
                    echo rtrim( $lists_string, " |" );
                } else {
                    echo esc_html( $protection_types[$type] );
                }
                break;
            case 'user-restriction':
                $restriction = get_post_meta( $post_id, 'passster_activate_user_restriction', true );
                $type = get_post_meta( $post_id, 'passster_user_restriction_type', true );
                $value = get_post_meta( $post_id, 'passster_user_restriction', true );
                // Get available user roles.
                global $wp_roles;
                $roles = $wp_roles->roles;
                if ( $restriction ) {
                    if ( 'user-role' === $type ) {
                        echo esc_html( $roles[$value]['name'] );
                    } elseif ( 'username' === $type ) {
                        echo esc_html( $value );
                    } else {
                        echo '-';
                    }
                } else {
                    echo '-';
                }
                break;
            case 'redirect':
                $redirect = get_post_meta( $post_id, 'passster_redirect_url', true );
                if ( !empty( $redirect ) ) {
                    echo '<a href="' . esc_url( $redirect ) . '">' . esc_url( $redirect ) . '</a>';
                } else {
                    echo '-';
                }
                break;
        }
    }

    /**
     * Output quick edit UI HTML and JS.
     *
     * @return void
     */
    public function quick_edit_ui() {
        $screen = get_current_screen();
        if ( !$screen || 'protected_areas' !== $screen->post_type ) {
            return;
        }
        // Get password lists for dropdown.
        $password_lists = get_posts( array(
            'post_type'      => 'password_lists',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
        ) );
        ?>
		<div id="passster-quick-edit-modal" style="display: none;">
			<div class="passster-quick-edit-backdrop"></div>
			<div class="passster-quick-edit-panel">
				<div class="passster-quick-edit-header">
					<h3><?php 
        esc_html_e( 'Quick Settings', 'content-protector' );
        ?></h3>
					<button type="button" class="passster-quick-edit-close">&times;</button>
				</div>
				<div class="passster-quick-edit-body">
					<input type="hidden" id="passster-qe-area-id" value="">
					<input type="hidden" id="passster-qe-nonce" value="">

					<p class="passster-qe-field">
						<label for="passster-qe-protection-type"><?php 
        esc_html_e( 'Protection Type', 'content-protector' );
        ?></label>
						<select id="passster-qe-protection-type">
							<option value="password"><?php 
        esc_html_e( 'Single Password', 'content-protector' );
        ?></option>
							<option value="passwords"><?php 
        esc_html_e( 'Multiple Passwords', 'content-protector' );
        ?></option>
							<option value="password_list"><?php 
        esc_html_e( 'Password List', 'content-protector' );
        ?></option>
						</select>
					</p>

					<p class="passster-qe-field passster-qe-password-field">
						<label for="passster-qe-password"><?php 
        esc_html_e( 'Password', 'content-protector' );
        ?></label>
						<input type="text" id="passster-qe-password" value="">
					</p>

					<p class="passster-qe-field passster-qe-passwords-field" style="display: none;">
						<label for="passster-qe-passwords"><?php 
        esc_html_e( 'Passwords (one per line)', 'content-protector' );
        ?></label>
						<textarea id="passster-qe-passwords" rows="4"></textarea>
					</p>

					<p class="passster-qe-field passster-qe-list-field" style="display: none;">
						<label for="passster-qe-password-list"><?php 
        esc_html_e( 'Password List', 'content-protector' );
        ?></label>
						<select id="passster-qe-password-list">
							<option value="0"><?php 
        esc_html_e( '— Select —', 'content-protector' );
        ?></option>
							<?php 
        foreach ( $password_lists as $list ) {
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

					<p class="passster-qe-source-info" style="display: none;">
						<em><?php 
        esc_html_e( 'This area is synced from a block. Changes will update the block.', 'content-protector' );
        ?></em>
					</p>
				</div>
				<div class="passster-quick-edit-footer">
					<button type="button" class="button passster-quick-edit-cancel"><?php 
        esc_html_e( 'Cancel', 'content-protector' );
        ?></button>
					<button type="button" class="button button-primary passster-quick-edit-save"><?php 
        esc_html_e( 'Save', 'content-protector' );
        ?></button>
					<span class="spinner"></span>
				</div>
			</div>
		</div>

		<style>
			.passster-quick-edit-backdrop {
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: rgba(0, 0, 0, 0.5);
				z-index: 100000;
			}
			.passster-quick-edit-panel {
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: #fff;
				border-radius: 8px;
				box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
				width: 400px;
				max-width: 90vw;
				z-index: 100001;
			}
			.passster-quick-edit-header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 16px 20px;
				border-bottom: 1px solid #ddd;
			}
			.passster-quick-edit-header h3 {
				margin: 0;
				font-size: 16px;
			}
			.passster-quick-edit-close {
				background: none;
				border: none;
				font-size: 24px;
				cursor: pointer;
				color: #666;
				padding: 0;
				line-height: 1;
			}
			.passster-quick-edit-close:hover {
				color: #d63638;
			}
			.passster-quick-edit-body {
				padding: 20px;
			}
			.passster-qe-field {
				margin-bottom: 16px;
			}
			.passster-qe-field label {
				display: block;
				margin-bottom: 4px;
				font-weight: 600;
			}
			.passster-qe-field input,
			.passster-qe-field select,
			.passster-qe-field textarea {
				width: 100%;
			}
			.passster-qe-source-info {
				background: #f0f6fc;
				padding: 10px;
				border-radius: 4px;
				color: #1e1e1e;
			}
			.passster-quick-edit-footer {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				gap: 8px;
				padding: 16px 20px;
				border-top: 1px solid #ddd;
				background: #f6f7f7;
				border-radius: 0 0 8px 8px;
			}
			.passster-quick-edit-footer .spinner {
				float: none;
				margin: 0;
			}
		</style>

		<script>
		jQuery(function($) {
			var $modal = $('#passster-quick-edit-modal');
			var $typeSelect = $('#passster-qe-protection-type');

			// Toggle fields based on protection type
			function toggleFields() {
				var type = $typeSelect.val();
				$('.passster-qe-password-field').toggle(type === 'password');
				$('.passster-qe-passwords-field').toggle(type === 'passwords');
				$('.passster-qe-list-field').toggle(type === 'password_list');
			}

			$typeSelect.on('change', toggleFields);

			// Open modal
			$(document).on('click', '.passster-quick-settings', function(e) {
				e.preventDefault();
				var areaId = $(this).data('area-id');
				var nonce = $(this).data('nonce');

				$('#passster-qe-area-id').val(areaId);
				$('#passster-qe-nonce').val(nonce);

				// Load current settings
				$.post(ajaxurl, {
					action: 'passster_quick_edit_area',
					area_id: areaId,
					nonce: nonce,
					edit_action: 'get'
				}, function(response) {
					if (response.success) {
						var data = response.data;
						$typeSelect.val(data.protection_type);
						$('#passster-qe-password').val(data.password || '');
						$('#passster-qe-passwords').val(data.passwords || '');
						$('#passster-qe-password-list').val(data.password_list || 0);
						$('.passster-qe-source-info').toggle(data.source === 'block');
						toggleFields();
						$modal.show();
					}
				});
			});

			// Close modal
			$modal.on('click', '.passster-quick-edit-close, .passster-quick-edit-cancel, .passster-quick-edit-backdrop', function() {
				$modal.hide();
			});

			// Save
			$modal.on('click', '.passster-quick-edit-save', function() {
				var $btn = $(this);
				var $spinner = $modal.find('.spinner');

				$btn.prop('disabled', true);
				$spinner.addClass('is-active');

				$.post(ajaxurl, {
					action: 'passster_quick_edit_area',
					area_id: $('#passster-qe-area-id').val(),
					nonce: $('#passster-qe-nonce').val(),
					edit_action: 'save',
					protection_type: $typeSelect.val(),
					password: $('#passster-qe-password').val(),
					passwords: $('#passster-qe-passwords').val(),
					password_list: $('#passster-qe-password-list').val()
				}, function(response) {
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

			// ESC to close
			$(document).on('keydown', function(e) {
				if (e.key === 'Escape' && $modal.is(':visible')) {
					$modal.hide();
				}
			});
		});
		</script>
		<?php 
    }

    /**
     * Modify row actions for Protected Areas.
     * Block-sourced areas: Edit goes to source post, add Quick Settings.
     *
     * @param array   $actions Row actions.
     * @param WP_Post $post    Post object.
     *
     * @return array Modified actions.
     */
    public function modify_area_row_actions( $actions, $post ) {
        if ( 'protected_areas' !== $post->post_type ) {
            return $actions;
        }
        $source = get_post_meta( $post->ID, '_passster_source', true );
        if ( 'block' === $source ) {
            $source_post_id = get_post_meta( $post->ID, '_passster_source_post_id', true );
            $source_post = get_post( $source_post_id );
            if ( $source_post ) {
                $block_id = get_post_meta( $post->ID, '_passster_block_id', true );
                $edit_url = get_edit_post_link( $source_post_id );
                if ( $block_id && $edit_url ) {
                    $edit_url = add_query_arg( 'passster_focus_block', rawurlencode( $block_id ), $edit_url );
                }
                // Change Edit to go to source post with the specific block focused.
                $actions['edit'] = sprintf(
                    '<a href="%s" aria-label="%s">%s</a>',
                    esc_url( $edit_url ),
                    /* translators: %s: Post title */
                    esc_attr( sprintf( __( 'Edit block in &#8220;%s&#8221;', 'content-protector' ), $source_post->post_title ) ),
                    __( 'Edit Block', 'content-protector' )
                );
            }
            // Remove trash for block-sourced (they're synced automatically).
            unset($actions['trash']);
        }
        // Add Quick Settings for all areas.
        $actions['quick_settings'] = sprintf(
            '<a href="#" class="passster-quick-settings" data-area-id="%d" data-nonce="%s">%s</a>',
            $post->ID,
            wp_create_nonce( 'passster_quick_edit_' . $post->ID ),
            __( 'Quick Settings', 'content-protector' )
        );
        return $actions;
    }

    /**
     * Modify edit post link for block-sourced areas.
     *
     * @param string $link    Edit link.
     * @param int    $post_id Post ID.
     * @param string $context Context.
     *
     * @return string Modified link.
     */
    public function modify_area_edit_link( $link, $post_id, $context ) {
        $post = get_post( $post_id );
        if ( !$post || 'protected_areas' !== $post->post_type ) {
            return $link;
        }
        $source = get_post_meta( $post_id, '_passster_source', true );
        if ( 'block' === $source ) {
            $source_post_id = get_post_meta( $post_id, '_passster_source_post_id', true );
            if ( $source_post_id ) {
                $block_id = get_post_meta( $post_id, '_passster_block_id', true );
                $params = array(
                    'post'   => absint( $source_post_id ),
                    'action' => 'edit',
                );
                if ( $block_id ) {
                    $params['passster_focus_block'] = $block_id;
                }
                $edit_link = add_query_arg( $params, admin_url( 'post.php' ) );
                return ( 'display' === $context ? esc_url( $edit_link ) : $edit_link );
            }
        }
        return $link;
    }

    /**
     * AJAX handler for quick edit area settings.
     *
     * @return void
     */
    public function ajax_quick_edit_area() {
        $area_id = ( isset( $_POST['area_id'] ) ? absint( $_POST['area_id'] ) : 0 );
        $nonce = ( isset( $_POST['nonce'] ) ? sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) : '' );
        $action = ( isset( $_POST['edit_action'] ) ? sanitize_text_field( wp_unslash( $_POST['edit_action'] ) ) : 'get' );
        if ( !wp_verify_nonce( $nonce, 'passster_quick_edit_' . $area_id ) ) {
            wp_send_json_error( array(
                'message' => __( 'Security check failed.', 'content-protector' ),
            ) );
        }
        if ( !current_user_can( 'edit_post', $area_id ) ) {
            wp_send_json_error( array(
                'message' => __( 'Permission denied.', 'content-protector' ),
            ) );
        }
        $area = get_post( $area_id );
        if ( !$area || 'protected_areas' !== $area->post_type ) {
            wp_send_json_error( array(
                'message' => __( 'Invalid area.', 'content-protector' ),
            ) );
        }
        if ( 'get' === $action ) {
            // Return current settings.
            $data = array(
                'area_id'         => $area_id,
                'title'           => $area->post_title,
                'protection_type' => ( get_post_meta( $area_id, 'passster_protection_type', true ) ?: 'password' ),
                'password'        => get_post_meta( $area_id, 'passster_password', true ),
                'passwords'       => get_post_meta( $area_id, 'passster_passwords', true ),
                'password_list'   => get_post_meta( $area_id, 'passster_password_list', true ),
                'source'          => get_post_meta( $area_id, '_passster_source', true ),
            );
            wp_send_json_success( $data );
        }
        if ( 'save' === $action ) {
            // Save settings.
            $protection_type = ( isset( $_POST['protection_type'] ) ? sanitize_text_field( wp_unslash( $_POST['protection_type'] ) ) : 'password' );
            update_post_meta( $area_id, 'passster_protection_type', $protection_type );
            switch ( $protection_type ) {
                case 'password':
                    $password = ( isset( $_POST['password'] ) ? sanitize_text_field( wp_unslash( $_POST['password'] ) ) : '' );
                    update_post_meta( $area_id, 'passster_password', $password );
                    break;
                case 'passwords':
                    $passwords = ( isset( $_POST['passwords'] ) ? sanitize_textarea_field( wp_unslash( $_POST['passwords'] ) ) : '' );
                    update_post_meta( $area_id, 'passster_passwords', $passwords );
                    break;
                case 'password_list':
                    $password_list = ( isset( $_POST['password_list'] ) ? absint( $_POST['password_list'] ) : 0 );
                    update_post_meta( $area_id, 'passster_password_list', $password_list );
                    break;
            }
            // If block-sourced, sync back to block.
            $source = get_post_meta( $area_id, '_passster_source', true );
            if ( 'block' === $source ) {
                $source_post_id = get_post_meta( $area_id, '_passster_source_post_id', true );
                $block_id = get_post_meta( $area_id, '_passster_block_id', true );
                if ( $source_post_id && $block_id ) {
                    $this->sync_settings_to_block( $source_post_id, $block_id, $area_id );
                }
            }
            wp_send_json_success( array(
                'message' => __( 'Settings saved.', 'content-protector' ),
            ) );
        }
        wp_send_json_error( array(
            'message' => __( 'Invalid action.', 'content-protector' ),
        ) );
    }

    /**
     * Sync settings from Protected Area back to the block.
     *
     * @param int    $post_id  Source post ID.
     * @param string $block_id Block ID.
     * @param int    $area_id  Protected Area ID.
     *
     * @return bool Success.
     */
    private function sync_settings_to_block( $post_id, $block_id, $area_id ) {
        $post = get_post( $post_id );
        if ( !$post ) {
            return false;
        }
        $content = $post->post_content;
        $blocks = parse_blocks( $content );
        $protection_type = get_post_meta( $area_id, 'passster_protection_type', true );
        $password = get_post_meta( $area_id, 'passster_password', true );
        $passwords = get_post_meta( $area_id, 'passster_passwords', true );
        $password_list = get_post_meta( $area_id, 'passster_password_list', true );
        $updated_blocks = $this->update_block_settings( $blocks, $block_id, array(
            'protectionType' => $protection_type,
            'password'       => $password,
            'passwords'      => $passwords,
            'passwordList'   => (int) $password_list,
        ) );
        $new_content = serialize_blocks( $updated_blocks );
        // Update post without triggering our sync hook.
        remove_action( 'save_post', array(\passster\PS_Block_Editor::get_instance(), 'sync_protected_content_blocks'), 10 );
        wp_update_post( array(
            'ID'           => $post_id,
            'post_content' => $new_content,
        ) );
        add_action(
            'save_post',
            array(\passster\PS_Block_Editor::get_instance(), 'sync_protected_content_blocks'),
            10,
            2
        );
        return true;
    }

    /**
     * Recursively update block settings.
     *
     * @param array  $blocks   Blocks array.
     * @param string $block_id Target block ID.
     * @param array  $settings New settings.
     *
     * @return array Updated blocks.
     */
    private function update_block_settings( $blocks, $block_id, $settings ) {
        foreach ( $blocks as &$block ) {
            if ( 'passster/content-lock' === $block['blockName'] ) {
                if ( isset( $block['attrs']['blockId'] ) && $block['attrs']['blockId'] === $block_id ) {
                    $block['attrs'] = array_merge( $block['attrs'], $settings );
                }
            }
            if ( !empty( $block['innerBlocks'] ) ) {
                $block['innerBlocks'] = $this->update_block_settings( $block['innerBlocks'], $block_id, $settings );
            }
        }
        return $blocks;
    }

}
