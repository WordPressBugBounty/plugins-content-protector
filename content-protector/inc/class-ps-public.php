<?php

namespace passster;

use Exception;
class PS_Public {
    /**
     * Contains instance or null
     *
     * @var object|null
     */
    private static $instance = null;

    /**
     * Track which posts have already had their protection form rendered
     * to prevent duplicate forms on page builders like Avada.
     *
     * @var array
     */
    private static $rendered_protection = array();

    /**
     * Constructor for PS_Public
     */
    public function __construct() {
        add_shortcode( 'content_protector', array($this, 'render_shortcode') );
        add_shortcode( 'passster', array($this, 'render_shortcode') );
        add_filter( 'the_content', array($this, 'filter_the_content') );
        add_filter( 'acf_the_content', array($this, 'filter_the_content') );
        add_filter( 'get_the_excerpt', array($this, 'filter_the_content') );
        add_action( 'template_redirect', array($this, 'check_global_proctection') );
        add_action( 'wp_enqueue_scripts', array($this, 'add_public_scripts') );
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
     * Render the Passster shortcode.
     *
     * @param array $atts array of attributes.
     * @param string|null $content the current content.
     *
     * @return string
     */
    public function render_shortcode( array $atts, string $content = null ) : string {
        // Schedule check for protected areas (PRO only).
        if ( !empty( $atts['area'] ) && \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
            $area_id = absint( $atts['area'] );
            $schedule_enabled = get_post_meta( $area_id, 'passster_schedule_enabled', true );
            if ( $schedule_enabled ) {
                $schedule_start = get_post_meta( $area_id, 'passster_schedule_start', true );
                $schedule_end = get_post_meta( $area_id, 'passster_schedule_end', true );
                $now = current_time( 'timestamp' );
                $in_schedule = true;
                if ( !empty( $schedule_start ) && $now < strtotime( $schedule_start ) ) {
                    $in_schedule = false;
                }
                if ( !empty( $schedule_end ) && $now > strtotime( $schedule_end ) ) {
                    $in_schedule = false;
                }
                if ( !$in_schedule ) {
                    $area = get_post( $area_id );
                    if ( $area && ('publish' === $area->post_status || current_user_can( 'edit_post', $area_id )) ) {
                        return apply_filters( 'the_content', str_replace( '{post-id}', get_the_id(), $area->post_content ) );
                    }
                    return $content ?? '';
                }
            }
        }
        // check if valid before restrict anything.
        $valid = PS_Conditional::is_valid( $atts );
        $options = get_option( 'passster' );
        if ( $valid ) {
            if ( !empty( $atts['area'] ) ) {
                $area_id = esc_html( $atts['area'] );
                $area = get_post( $area_id );
                if ( 'publish' === $area->post_status || current_user_can( 'edit_post', $area_id ) ) {
                    $content = $area->post_content;
                    do_action( 'passster_content_unlocked' );
                    return apply_filters( 'the_content', str_replace( '{post-id}', get_the_id(), $content ) );
                }
            } else {
                $content = apply_filters( 'the_content', $content );
                do_action( 'passster_content_unlocked' );
                return apply_filters( 'passster_content', $content );
            }
        }
        // do nothing if no atts.
        if ( empty( $atts ) ) {
            return $content;
        }
        // Set default form.
        $form = PS_Form::get_password_form();
        // Password.
        if ( !empty( $atts['password'] ) ) {
            $form = PS_Form::get_password_form();
            $form = str_replace( '[PASSSTER_TYPE]', 'password', $form );
        }
        // Area.
        if ( !empty( $atts['area'] ) ) {
            $area_id = absint( $atts['area'] );
            $form = str_replace( '[PASSSTER_AREA]', $area_id, $form );
        }
        // Page.
        if ( !empty( $atts['protection'] ) ) {
            $form = str_replace( '[PASSSTER_PROTECTION]', 'full', $form );
        } elseif ( !empty( $atts['area'] ) ) {
            $form = str_replace( '[PASSSTER_PROTECTION]', 'area', $form );
        }
        // Redirect.
        if ( !empty( $atts['redirect'] ) ) {
            $form = str_replace( '[PASSSTER_REDIRECT]', esc_url( $atts['redirect'] ), $form );
        } else {
            $form = str_replace( '[PASSSTER_REDIRECT]', '', $form );
        }
        // headline.
        if ( !empty( $options['hide_headline'] ) ) {
            $form = str_replace( '[PASSSTER_FORM_HEADLINE]', '', $form );
        } elseif ( !empty( $atts['headline'] ) ) {
            $form = str_replace( '[PASSSTER_FORM_HEADLINE]', esc_html( $atts['headline'] ), $form );
        } else {
            $form = str_replace( '[PASSSTER_FORM_HEADLINE]', esc_html( $options['headline'] ), $form );
        }
        // instruction.
        if ( !empty( $atts['instruction'] ) ) {
            $decoded_instruction = base64_decode( $atts['instruction'] );
            $decoded_instruction = html_entity_decode( $decoded_instruction );
            $sanitized_instruction = wp_kses_post( $decoded_instruction );
            $form = str_replace( '[PASSSTER_FORM_INSTRUCTIONS]', $sanitized_instruction, $form );
        } else {
            $form = str_replace( '[PASSSTER_FORM_INSTRUCTIONS]', wp_kses_post( $options['instruction'] ), $form );
        }
        // placeholder.
        if ( !empty( $atts['placeholder'] ) ) {
            $form = str_replace( '[PASSSTER_PLACEHOLDER]', esc_attr( $atts['placeholder'] ), $form );
        } else {
            $form = str_replace( '[PASSSTER_PLACEHOLDER]', esc_attr( $options['placeholder'] ), $form );
        }
        // button.
        if ( !empty( $atts['button'] ) ) {
            $form = str_replace( '[PASSSTER_BUTTON_LABEL]', esc_html( $atts['button'] ), $form );
        } else {
            $form = str_replace( '[PASSSTER_BUTTON_LABEL]', esc_html( $options['button_label'] ), $form );
        }
        // modify id.
        if ( !empty( $atts['id'] ) ) {
            $form = str_replace( '[PASSSTER_ID]', 'ps-' . esc_attr( $atts['id'] ), $form );
        } else {
            $form = str_replace( '[PASSSTER_ID]', 'ps-' . wp_rand( 10, 1000 ), $form );
        }
        // post id (per-form, for correct REST unlock on archive pages with multiple protected posts).
        $form = str_replace( '[PASSSTER_POST_ID]', absint( get_the_ID() ), $form );
        // hide or not.
        if ( !empty( $atts['hide'] ) ) {
            $form = str_replace( '[PASSSTER_HIDE]', ' passster-hide', $form );
        } else {
            $form = str_replace( '[PASSSTER_HIDE]', '', $form );
        }
        // ACF field.
        if ( !empty( $atts['acf'] ) ) {
            $form = str_replace( '[PASSSTER_ACF]', ' data-acf="' . esc_url( $atts['acf'] ) . '"', $form );
        } else {
            $form = str_replace( '[PASSSTER_ACF]', '', $form );
        }
        return $form;
    }

    /**
     * Filters the_content with Passster.
     *
     * @param string $content given content.
     *
     * @return string
     * @throws Exception
     */
    public function filter_the_content( string $content ) : string {
        $post_id = get_the_id();
        // Prevent duplicate form rendering (fixes issue with Avada and other page builders)
        if ( isset( self::$rendered_protection[$post_id] ) ) {
            // Already rendered the protection form for this post, return protected content placeholder
            // or the form that was already generated
            return self::$rendered_protection[$post_id]['form'] ?? $content;
        }
        $parent_id = wp_get_post_parent_id( $post_id );
        if ( $parent_id ) {
            $activate_protection = get_post_meta( $parent_id, 'passster_activate_protection', true );
            $children_protection = get_post_meta( $parent_id, 'passster_protect_child_pages', true );
            if ( $activate_protection && $children_protection ) {
                $post_id = $parent_id;
                // Check parent too
                if ( isset( self::$rendered_protection[$post_id] ) ) {
                    return self::$rendered_protection[$post_id]['form'] ?? $content;
                }
            }
        }
        $activate_protection = get_post_meta( $post_id, 'passster_activate_protection', true );
        // user restriction.
        $user_restriction_type = get_post_meta( $post_id, 'passster_user_restriction_type', true );
        $user_restriction = get_post_meta( $post_id, 'passster_user_restriction', true );
        // Redirection.
        $redirection = get_post_meta( $post_id, 'passster_redirect_url', true );
        // texts.
        $headline = get_post_meta( $post_id, 'passster_headline', true );
        $instruction = get_post_meta( $post_id, 'passster_instruction', true );
        $placeholder = get_post_meta( $post_id, 'passster_placeholder', true );
        $button = get_post_meta( $post_id, 'passster_button', true );
        $id = get_post_meta( $post_id, 'passster_id', true );
        if ( !$activate_protection ) {
            return $content;
        }
        // build atts array to validate.
        $atts = array();
        $shortcode = '';
        $password = get_post_meta( $post_id, 'passster_password', true );
        $atts['password'] = $password;
        $shortcode = '[passster password="' . $password . '" protection="full" ';
        if ( !empty( $redirection ) ) {
            $shortcode .= 'redirect="' . $redirection . '" ';
        }
        if ( !empty( $headline ) ) {
            $shortcode .= 'headline="' . $headline . '" ';
        }
        if ( !empty( $instruction ) ) {
            $shortcode .= 'instruction="' . base64_encode( $instruction ) . '" ';
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
        $shortcode .= ']{content}[/passster]';
        // check if valid before restrict anything.
        $valid = PS_Conditional::is_valid( $atts );
        if ( $valid ) {
            return $content;
        }
        // replace placeholder with content.
        $shortcode = str_replace( '{content}', $content, $shortcode );
        // Generate the form
        $rendered_form = do_shortcode( $shortcode );
        // Store reference to prevent duplicate rendering (Avada, Elementor, etc.)
        self::$rendered_protection[$post_id] = array(
            'form' => $rendered_form,
        );
        return $rendered_form;
    }

    /**
     * Redirect if global protection is activated and no password is set.
     *
     * @return void
     * @throws Exception
     */
    public function check_global_proctection() {
        $options = get_option( 'passster' );
        $post_id = get_queried_object_id();
        if ( !$post_id ) {
            return;
        }
        // Allow Elementor editing the page.
        $elementor_preview = filter_input( INPUT_GET, 'elementor-preview', FILTER_SANITIZE_FULL_SPECIAL_CHARS );
        // Allow Live Canvas Editor.
        $live_canvas_preview = filter_input( INPUT_GET, 'lc_action_launch_editing', FILTER_SANITIZE_FULL_SPECIAL_CHARS );
        if ( is_preview() || $elementor_preview || $live_canvas_preview ) {
            if ( is_user_logged_in() && current_user_can( 'edit_post', $post_id ) ) {
                return;
            }
        }
        if ( !isset( $options['global_protection_id'] ) ) {
            return;
        }
        if ( !isset( $options['activate_global_protection'] ) ) {
            return;
        }
        // Build $atts array based on protection settings.
        $post_id = esc_html( $options['global_protection_id'] );
        $is_active = esc_html( $options['activate_global_protection'] );
        $atts = array();
        $password = get_post_meta( $post_id, 'passster_password', true );
        $atts['password'] = esc_html( $password );
        if ( !empty( $post_id ) ) {
            if ( $is_active ) {
                if ( is_page( $post_id ) || is_single( $post_id ) ) {
                    return;
                }
                // Check excluded pages.
                if ( isset( $options['exclude_pages'] ) ) {
                    foreach ( $options['exclude_pages'] as $excluded_page_id ) {
                        if ( is_page( $excluded_page_id ) ) {
                            return;
                        }
                    }
                }
                // Check if cookie is set.
                $cookie = esc_html( $_COOKIE['passster'] );
                if ( !PS_Conditional::is_valid( $atts ) ) {
                    $global_protection_url = get_permalink( $post_id );
                    wp_redirect( esc_url_raw( $global_protection_url ) );
                    exit;
                }
            }
        }
    }

    /**
     * Enqueue scripts for shortcode
     *
     * @return void
     */
    public function add_public_scripts() {
        $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min' );
        $options = get_option( 'passster' );
        // Only load CSS if not disabled (allows themes to style the form)
        if ( empty( $options['disable_css'] ) ) {
            wp_enqueue_style(
                'passster-public',
                PASSSTER_URL . '/assets/public/passster-public' . $suffix . '.css',
                array(),
                PASSSTER_VERSION,
                'all'
            );
        }
        wp_enqueue_script(
            'passster-cookie',
            PASSSTER_URL . '/assets/public/cookie.js',
            array('jquery', 'wp-api-fetch'),
            PASSSTER_VERSION,
            false
        );
        wp_enqueue_script(
            'passster-public',
            PASSSTER_URL . '/assets/public/passster-public' . $suffix . '.js',
            array('jquery', 'passster-cookie'),
            PASSSTER_VERSION,
            false
        );
        $shortcodes = array();
        if ( isset( $options['third_party_shortcodes'] ) && !empty( $options['third_party_shortcodes'] ) ) {
            $shortcodes_in_options = explode( ',', $options['third_party_shortcodes'] );
            if ( is_array( $shortcodes_in_options ) ) {
                foreach ( $shortcodes_in_options as $shortcode ) {
                    $shortcodes[$shortcode] = do_shortcode( str_replace( '{post-id}', get_the_id(), $shortcode ) );
                }
            }
        }
        $args = array(
            'ajax_url'     => admin_url() . 'admin-ajax.php',
            'rest_url'     => get_rest_url(),
            'nonce'        => wp_create_nonce( 'ps-password-nonce' ),
            'hash_nonce'   => wp_create_nonce( 'ps-hash-nonce' ),
            'logout_nonce' => wp_create_nonce( 'ps-logout-nonce' ),
            'post_id'      => get_the_id(),
            'shortcodes'   => $shortcodes,
            'permalink'    => get_permalink( get_the_id() ),
        );
        if ( isset( $options['cookie_duration_unit'] ) ) {
            $args['cookie_duration_unit'] = esc_html( $options['cookie_duration_unit'] );
        } else {
            $args['cookie_duration_unit'] = 'days';
        }
        if ( isset( $options['cookie_duration'] ) ) {
            $args['cookie_duration'] = esc_html( $options['cookie_duration'] );
        } else {
            $args['cookie_duration'] = 1;
        }
        if ( isset( $options['disable_cookie'] ) ) {
            $args['disable_cookie'] = esc_html( $options['disable_cookie'] );
        } else {
            $args['disable_cookie'] = false;
        }
        // Always use inline unlock (no page refresh) - uses REST API
        $args['unlock_mode'] = true;
        wp_localize_script( 'passster-public', 'ps_ajax', $args );
        // if password type hint used.
        $password_typing = $options['show_password'];
        if ( $password_typing ) {
            wp_enqueue_script(
                'password-typing',
                PASSSTER_URL . '/assets/public/password-typing.js',
                array('jquery'),
                PASSSTER_VERSION,
                false
            );
        }
    }

}
