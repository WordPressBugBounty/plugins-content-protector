<?php

namespace passster;

class PS_Block_Editor {
    /**
     * Contains instance or null
     *
     * @var object|null
     */
    private static $instance = null;

    /**
     * Returns instance of PS_Block_Editor.
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
     * Constructor for PS_Block_Editor
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', array($this, 'register_block_scripts') );
        add_action( 'enqueue_block_editor_assets', array($this, 'add_block_editor_assets') );
        add_action( 'init', array($this, 'register_area_block') );
        add_action( 'init', array($this, 'register_protected_content_block') );
        add_action(
            'save_post',
            array($this, 'sync_protected_content_blocks'),
            10,
            2
        );
        add_filter(
            'block_categories_all',
            array($this, 'register_block_category'),
            10,
            2
        );
    }

    /**
     * Register Passster block category.
     *
     * @param array                   $categories Block categories.
     * @param WP_Block_Editor_Context $context    Block editor context.
     *
     * @return array Modified categories.
     */
    public function register_block_category( $categories, $context ) {
        return array_merge( array(array(
            'slug'  => 'passster',
            'title' => __( 'Passster', 'content-protector' ),
            'icon'  => 'lock',
        )), $categories );
    }

    /**
     * Enqueue scripts for blocks.
     *
     * @return void
     */
    public function register_block_scripts() {
        $area_asset_file = (include PASSSTER_PATH . '/build/area/index.asset.php');
        wp_register_script(
            'area-script',
            PASSSTER_URL . '/build/area/index.js',
            $area_asset_file['dependencies'],
            $area_asset_file['version']
        );
    }

    /**
     * Add block editor scripts and styles.
     *
     * @return void
     */
    public function add_block_editor_assets() {
        // Area block.
        $area_asset_file = (include PASSSTER_PATH . '/build/area/index.asset.php');
        wp_enqueue_script(
            'area-script',
            PASSSTER_URL . '/build/area/index.js',
            $area_asset_file['dependencies'],
            $area_asset_file['version']
        );
        wp_localize_script( 'area-script', 'area_data', array(
            'is_pro'          => \passster_fs()->is_plan_or_trial__premium_only( 'pro' ),
            'create_area_url' => admin_url( 'post-new.php?post_type=protected_areas' ),
            'options'         => get_option( 'passster' ),
        ) );
        wp_enqueue_style( 'area-style', PASSSTER_URL . '/build/area/index.css' );
        // Protected Content block.
        $protected_content_asset = PASSSTER_PATH . '/build/blocks/protected-content/index.asset.php';
        if ( file_exists( $protected_content_asset ) ) {
            $protected_content_asset_file = (include $protected_content_asset);
            wp_enqueue_script(
                'passster-protected-content-script',
                PASSSTER_URL . '/build/blocks/protected-content/index.js',
                $protected_content_asset_file['dependencies'],
                $protected_content_asset_file['version']
            );
            wp_localize_script( 'passster-protected-content-script', 'passster_block_data', array(
                'is_pro'      => \passster_fs()->is_plan_or_trial__premium_only( 'pro' ),
                'options'     => get_option( 'passster' ),
                'date_format' => get_option( 'date_format' ),
                'time_format' => get_option( 'time_format' ),
                'timezone'    => wp_timezone_string(),
                'now'         => current_time( 'c' ),
            ) );
            wp_enqueue_style(
                'passster-protected-content-style',
                PASSSTER_URL . '/build/blocks/protected-content/index.css',
                array(),
                $protected_content_asset_file['version']
            );
            if ( function_exists( 'wp_set_script_translations' ) ) {
                wp_set_script_translations( 'passster-protected-content-script', 'content-protector', PASSSTER_PATH . '/languages' );
            }
        }
        // Make the blocks translatable.
        if ( function_exists( 'wp_set_script_translations' ) ) {
            wp_set_script_translations( 'area-script', 'content-protector', PASSSTER_PATH . '/languages' );
        }
    }

    /**
     * Register area block in WordPress.
     *
     * @return void
     */
    public function register_area_block() {
        $options = get_option( 'passster' );
        $settings = array(
            'render_callback' => array($this, 'render_area_block'),
            'attributes'      => array(
                'area_id'     => array(
                    'type'    => 'string',
                    'default' => 0,
                ),
                'headline'    => array(
                    'type'    => 'string',
                    'default' => esc_html( $options['headline'] ),
                ),
                'instruction' => array(
                    'type'    => 'string',
                    'default' => wp_kses_post( $options['instruction'] ),
                ),
                'buttonLabel' => array(
                    'type'    => 'string',
                    'default' => esc_html( $options['button_label'] ),
                ),
                'placeholder' => array(
                    'type'    => 'string',
                    'default' => esc_html( $options['placeholder'] ),
                ),
            ),
        );
        register_block_type( 'content-protector/area', array_merge( array(
            'editor_script' => 'area-script',
            'editor_style'  => 'area-style',
        ), $settings ) );
    }

    /**
     * Returns the shortcode for an area based on block attributes.
     *
     * @param array $attributes the list attributes from the block.
     *
     * @return string
     */
    public function render_area_block( array $attributes ) {
        $area_id = esc_attr( $attributes['area_id'] );
        $area = get_post( $area_id );
        if ( !$area ) {
            return '';
        }
        // Build dynamic shortcode.
        $content = $area->post_content;
        $shortcode = '';
        // texts.
        $headline = esc_attr( $attributes['headline'] );
        $instruction = wp_kses_post( $attributes['instruction'] );
        $button = esc_attr( $attributes['buttonLabel'] );
        $placeholder = esc_attr( $attributes['placeholder'] );
        $id = get_post_meta( $area_id, 'passster_id', true );
        // Redirection.
        $redirection = get_post_meta( $area_id, 'passster_redirect_url', true );
        $atts = array();
        $password = get_post_meta( $area_id, 'passster_password', true );
        $atts['password'] = $password;
        $shortcode = '[passster password="' . $password . '" area="' . $area_id . '" ';
        // Building the actual shortcode.
        if ( !empty( $redirection ) ) {
            $shortcode .= 'redirect="' . $redirection . '" ';
        }
        if ( !empty( $headline ) ) {
            $shortcode .= 'headline="' . $headline . '" ';
        }
        if ( !empty( $instruction ) ) {
            $shortcode .= 'instruction="' . $instruction . '" ';
        }
        if ( !empty( $placeholder ) ) {
            $shortcode .= 'placeholder="' . $placeholder . '" ';
        }
        if ( !empty( $button ) ) {
            $shortcode .= 'button="' . $button . '" ';
        }
        if ( !empty( $id ) ) {
            $shortcode .= 'id="' . $id . '" ';
        }
        $shortcode = rtrim( $shortcode );
        $shortcode .= ']';
        // check if valid before restrict anything.
        $valid = PS_Conditional::is_valid( $atts );
        if ( $valid ) {
            return $content;
        }
        return do_shortcode( $shortcode );
    }

    /**
     * Register protected content block.
     *
     * @return void
     */
    public function register_protected_content_block() {
        // Check if build files exist.
        $block_path = PASSSTER_PATH . '/build/blocks/protected-content';
        if ( !file_exists( $block_path . '/block.json' ) ) {
            return;
        }
        register_block_type( $block_path );
    }

    /**
     * Sync protected content blocks with Protected Areas CPT.
     *
     * @param int     $post_id Post ID being saved.
     * @param WP_Post $post    Post object.
     *
     * @return void
     */
    public function sync_protected_content_blocks( $post_id, $post ) {
        // Skip auto-saves and revisions.
        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
            return;
        }
        if ( wp_is_post_revision( $post_id ) ) {
            return;
        }
        // Skip protected areas CPT to avoid loops.
        if ( 'protected_areas' === $post->post_type ) {
            return;
        }
        // Parse blocks from content.
        $blocks = parse_blocks( $post->post_content );
        $protected_blocks = $this->find_protected_content_blocks( $blocks );
        // Get existing synced areas for this post.
        $existing_areas = get_posts( array(
            'post_type'      => 'protected_areas',
            'posts_per_page' => -1,
            'meta_query'     => array(array(
                'key'   => '_passster_source',
                'value' => 'block',
            ), array(
                'key'   => '_passster_source_post_id',
                'value' => $post_id,
            )),
        ) );
        $existing_block_ids = array();
        foreach ( $existing_areas as $area ) {
            $block_id = get_post_meta( $area->ID, '_passster_block_id', true );
            $existing_block_ids[$block_id] = $area->ID;
        }
        $synced_block_ids = array();
        // Sync each protected block.
        foreach ( $protected_blocks as $block ) {
            $attrs = $block['attrs'];
            $block_id = ( !empty( $attrs['blockId'] ) ? $attrs['blockId'] : '' );
            if ( empty( $block_id ) ) {
                continue;
            }
            $synced_block_ids[] = $block_id;
            // Prepare area data.
            $area_title = ( !empty( $attrs['areaTitle'] ) ? $attrs['areaTitle'] : sprintf( 
                /* translators: %s: Post title */
                __( 'Protected block in %s', 'content-protector' ),
                $post->post_title
             ) );
            $area_data = array(
                'post_title'  => $area_title,
                'post_type'   => 'protected_areas',
                'post_status' => 'publish',
            );
            // Check if area already exists.
            if ( isset( $existing_block_ids[$block_id] ) ) {
                $area_data['ID'] = $existing_block_ids[$block_id];
                $area_id = wp_update_post( $area_data );
            } else {
                $area_id = wp_insert_post( $area_data );
            }
            if ( !$area_id || is_wp_error( $area_id ) ) {
                continue;
            }
            // Save source meta.
            update_post_meta( $area_id, '_passster_source', 'block' );
            update_post_meta( $area_id, '_passster_source_post_id', $post_id );
            update_post_meta( $area_id, '_passster_block_id', $block_id );
            // Save protection settings.
            $protection_type = ( !empty( $attrs['protectionType'] ) ? $attrs['protectionType'] : 'password' );
            update_post_meta( $area_id, 'passster_activate_protection', true );
            update_post_meta( $area_id, 'passster_protection_type', $protection_type );
            switch ( $protection_type ) {
                case 'password':
                    update_post_meta( $area_id, 'passster_password', ( !empty( $attrs['password'] ) ? $attrs['password'] : '' ) );
                    break;
                case 'passwords':
                    update_post_meta( $area_id, 'passster_passwords', ( !empty( $attrs['passwords'] ) ? $attrs['passwords'] : '' ) );
                    break;
                case 'password_list':
                    update_post_meta( $area_id, 'passster_password_list', ( !empty( $attrs['passwordList'] ) ? absint( $attrs['passwordList'] ) : 0 ) );
                    break;
            }
        }
        // Delete areas for blocks that no longer exist.
        foreach ( $existing_block_ids as $block_id => $area_id ) {
            if ( !in_array( $block_id, $synced_block_ids, true ) ) {
                wp_delete_post( $area_id, true );
            }
        }
    }

    /**
     * Recursively find protected content blocks.
     *
     * @param array $blocks Parsed blocks.
     *
     * @return array Protected content blocks.
     */
    private function find_protected_content_blocks( $blocks ) {
        $found = array();
        foreach ( $blocks as $block ) {
            if ( 'passster/content-lock' === $block['blockName'] ) {
                $found[] = $block;
            }
            // Check inner blocks recursively.
            if ( !empty( $block['innerBlocks'] ) ) {
                $found = array_merge( $found, $this->find_protected_content_blocks( $block['innerBlocks'] ) );
            }
        }
        return $found;
    }

}
