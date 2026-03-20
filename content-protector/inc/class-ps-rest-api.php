<?php

/**
 * REST API endpoints for Passster.
 *
 * @package Passster
 */
namespace passster;

defined( 'ABSPATH' ) || exit;
/**
 * REST API handler class.
 */
class PS_Rest_API {
    /**
     * Singleton instance.
     *
     * @var PS_Rest_API|null
     */
    private static $instance = null;

    /**
     * Get singleton instance.
     *
     * @return PS_Rest_API
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
        add_action( 'rest_api_init', array($this, 'register_routes') );
    }

    /**
     * Register REST routes.
     */
    public function register_routes() {
        // Unlock content endpoint.
        register_rest_route( 'passster/v1', '/unlock', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'unlock_content'),
            'permission_callback' => '__return_true',
            'args'                => array(
                'password'   => array(
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => function ( $value ) {
                        return wp_unslash( $value );
                    },
                ),
                'type'       => array(
                    'required'          => true,
                    'type'              => 'string',
                    'enum'              => array(
                        'password',
                        'passwords',
                        'password_list',
                        'password_lists'
                    ),
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'post_id'    => array(
                    'required'          => true,
                    'type'              => 'integer',
                    'sanitize_callback' => 'absint',
                ),
                'area_id'    => array(
                    'required'          => false,
                    'type'              => 'integer',
                    'sanitize_callback' => 'absint',
                ),
                'block_id'   => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'list_id'    => array(
                    'required'          => false,
                    'type'              => 'integer',
                    'sanitize_callback' => 'absint',
                ),
                'lists'      => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'redirect'   => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'esc_url_raw',
                ),
                'protection' => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'acf'        => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
            ),
        ) );
        // Hash password endpoint.
        register_rest_route( 'passster/v1', '/hash', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'hash_password'),
            'permission_callback' => '__return_true',
            'args'                => array(
                'password' => array(
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => function ( $value ) {
                        return wp_unslash( $value );
                    },
                ),
            ),
        ) );
        // reCAPTCHA/hCaptcha validation endpoint.
        register_rest_route( 'passster/v1', '/captcha', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'validate_captcha'),
            'permission_callback' => '__return_true',
            'args'                => array(
                'token'      => array(
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'type'       => array(
                    'required'          => true,
                    'type'              => 'string',
                    'enum'              => array(
                        'recaptcha_v2',
                        'recaptcha_v3',
                        'hcaptcha',
                        'turnstile'
                    ),
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'post_id'    => array(
                    'required'          => true,
                    'type'              => 'integer',
                    'sanitize_callback' => 'absint',
                ),
                'area_id'    => array(
                    'required'          => false,
                    'type'              => 'integer',
                    'sanitize_callback' => 'absint',
                ),
                'redirect'   => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'esc_url_raw',
                ),
                'protection' => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'captcha_id' => array(
                    'required'          => false,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
            ),
        ) );
        // Logout endpoint (for concurrent sessions).
        register_rest_route( 'passster/v1', '/logout', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'handle_logout'),
            'permission_callback' => '__return_true',
        ) );
    }

    /**
     * Unlock content endpoint.
     *
     * @param \WP_REST_Request $request Request object.
     * @return \WP_REST_Response|\WP_Error
     */
    public function unlock_content( \WP_REST_Request $request ) {
        $options = get_option( 'passster', array() );
        $input = $request->get_param( 'password' );
        $type = $request->get_param( 'type' );
        $post_id = $request->get_param( 'post_id' );
        $area_id = $request->get_param( 'area_id' );
        $block_id = $request->get_param( 'block_id' );
        $list_id = $request->get_param( 'list_id' );
        $lists = $request->get_param( 'lists' );
        $redirect = $request->get_param( 'redirect' );
        $protection = $request->get_param( 'protection' );
        $acf = $request->get_param( 'acf' );
        // Default error response.
        $error_message = $options['error'] ?? __( 'Invalid password.', 'content-protector' );
        $remove_spaces = apply_filters( 'passster_remove_spaces_from_list', true );
        if ( empty( $protection ) ) {
            $protection = false;
        }
        // Parent page protection inheritance.
        $parent_id = wp_get_post_parent_id( $post_id );
        if ( $parent_id ) {
            $activate_protection = get_post_meta( $parent_id, 'passster_activate_protection', true );
            $children_protection = get_post_meta( $parent_id, 'passster_protect_child_pages', true );
            if ( $activate_protection && $children_protection ) {
                $post_id = $parent_id;
            }
        }
        // Prepare content.
        $post = get_post( $post_id );
        $content = '';
        if ( $post ) {
            $content = apply_filters( 'passster_compatibility_actions', $post->post_content, $post_id );
        }
        // ACF field support.
        if ( !empty( $acf ) ) {
            $content = \get_field( $acf, $post_id );
        }
        // Category/taxonomy protection: if the post itself has no protection,
        // check if it belongs to a protected category and validate against term meta.
        $post_protection = get_post_meta( $post_id, 'passster_activate_protection', true );
        if ( !$post_protection && 'full' === $protection && class_exists( 'passster\\PS_Category_Lock' ) ) {
            $term_data = PS_Category_Lock::get_instance()->get_protected_term_for_post( $post_id );
            if ( $term_data ) {
                // Use term redirect if no redirect was sent from the frontend.
                if ( empty( $redirect ) ) {
                    $redirect = get_term_meta( $term_data['term_id'], 'passster_redirect_url', true );
                }
                $result = $this->validate_category_unlock(
                    $input,
                    $type,
                    $term_data['term_id'],
                    $post,
                    $content,
                    $redirect,
                    $options,
                    $remove_spaces
                );
                if ( $result['valid'] ) {
                    $response_data = array(
                        'success' => true,
                    );
                    if ( !empty( $redirect ) ) {
                        $response_data['redirect'] = $redirect;
                    } else {
                        // For category/taxonomy protection we can't return the full archive HTML via REST.
                        // Redirect to the term archive instead.
                        $term = get_term( $term_data['term_id'] );
                        $term_link = ( $term && !is_wp_error( $term ) ? get_term_link( $term ) : '' );
                        $response_data['redirect'] = ( $term_link ?: wp_get_referer() );
                    }
                    do_action(
                        'passsster_track_record',
                        $post_id,
                        $input,
                        'full'
                    );
                    do_action( 'passster_validation_success', $input );
                    return new \WP_REST_Response($response_data, 200);
                }
                // Category protection exists but validation failed.
                return new \WP_REST_Response(array(
                    'success' => false,
                    'error'   => $error_message,
                ), 200);
            }
        }
        // Validate based on type.
        $valid = false;
        $result_content = '';
        // Block-based protection (Gutenberg blocks).
        if ( !empty( $block_id ) ) {
            switch ( $type ) {
                case 'password':
                    $result = $this->get_block_password( $post_id, $block_id );
                    if ( !empty( $result['password'] ) && $input === $result['password'] ) {
                        $valid = true;
                        $result_content = $result['content'];
                    }
                    break;
                case 'passwords':
                    $result = $this->get_block_passwords( $post_id, $block_id );
                    if ( !empty( $result['passwords'] ) ) {
                        $passwords_str = $result['passwords'];
                        if ( $remove_spaces ) {
                            $passwords_str = str_replace( ' ', '', $passwords_str );
                        }
                        $passwords = explode( ',', $passwords_str );
                        if ( in_array( $input, $passwords, true ) ) {
                            $valid = true;
                            $result_content = $result['content'];
                        }
                    }
                    break;
            }
        } elseif ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
            // PRO: shortcode/area/full protection.
            switch ( $type ) {
                case 'password':
                    $result = $this->validate_password_pro(
                        $input,
                        $post_id,
                        $area_id,
                        $protection,
                        $post,
                        $content,
                        $redirect,
                        $options
                    );
                    $valid = $result['valid'];
                    $result_content = $result['content'];
                    break;
                case 'passwords':
                    $result = $this->validate_passwords_pro(
                        $input,
                        $post_id,
                        $area_id,
                        $protection,
                        $post,
                        $content,
                        $redirect,
                        $options,
                        $remove_spaces
                    );
                    $valid = $result['valid'];
                    $result_content = $result['content'];
                    break;
                case 'password_list':
                    $result = $this->validate_password_list_pro(
                        $input,
                        $list_id,
                        $post_id,
                        $area_id,
                        $protection,
                        $post,
                        $content,
                        $redirect,
                        $options,
                        $remove_spaces
                    );
                    $valid = $result['valid'];
                    $result_content = $result['content'];
                    break;
                case 'password_lists':
                    $result = $this->validate_password_lists_pro(
                        $input,
                        $lists,
                        $post_id,
                        $area_id,
                        $protection,
                        $post,
                        $content,
                        $redirect,
                        $options,
                        $remove_spaces
                    );
                    $valid = $result['valid'];
                    $result_content = $result['content'];
                    break;
            }
        } else {
            // Free version: only password type.
            if ( 'password' === $type ) {
                $result = $this->validate_password_free(
                    $input,
                    $post_id,
                    $area_id,
                    $protection,
                    $post,
                    $content,
                    $redirect,
                    $options
                );
                $valid = $result['valid'];
                $result_content = $result['content'];
            }
        }
        if ( !$valid ) {
            return new \WP_REST_Response(array(
                'success' => false,
                'error'   => $error_message,
            ), 200);
        }
        // Success - prepare response.
        $response_data = array(
            'success' => true,
        );
        if ( !empty( $redirect ) ) {
            $response_data['redirect'] = $redirect;
        } else {
            // Block content is already rendered via render_block(); apply the_content filter only for shortcode/area protection.
            $response_data['content'] = ( empty( $block_id ) ? apply_filters( 'the_content', str_replace( '{post-id}', get_the_id(), $result_content ) ) : $result_content );
        }
        // Determine source for tracking.
        $source = 'shortcode';
        if ( !empty( $block_id ) ) {
            $source = 'block';
        } elseif ( 'full' === $protection ) {
            $source = 'full';
        } elseif ( !empty( $area_id ) || 'area' === $protection ) {
            $source = 'area';
        }
        do_action(
            'passsster_track_record',
            $post_id,
            $input,
            $source
        );
        do_action( 'passster_validation_success', $input );
        return new \WP_REST_Response($response_data, 200);
    }

    /**
     * Validate single password (PRO).
     *
     * @param string      $input      User input.
     * @param int         $post_id    Post ID.
     * @param int         $area_id    Area ID.
     * @param string|bool $protection Protection type.
     * @param \WP_Post    $post       Post object.
     * @param string      $content    Post content.
     * @param string      $redirect   Redirect URL.
     * @param array       $options    Plugin options.
     * @return array
     */
    private function validate_password_pro(
        $input,
        $post_id,
        $area_id,
        $protection,
        $post,
        $content,
        $redirect,
        $options
    ) {
        switch ( $protection ) {
            case 'full':
                $password = get_post_meta( $post_id, 'passster_password', true );
                if ( !empty( $password ) && $input === $password ) {
                    if ( $post && 'publish' === $post->post_status ) {
                        return array(
                            'valid'   => true,
                            'content' => $content,
                        );
                    }
                }
                break;
            case 'area':
                if ( !empty( $area_id ) ) {
                    $password = get_post_meta( $area_id, 'passster_password', true );
                    if ( !empty( $password ) && $input === $password ) {
                        $area = get_post( $area_id );
                        if ( $area && 'protected_areas' === $area->post_type && 'publish' === $area->post_status ) {
                            $area_content = apply_filters( 'passster_compatibility_actions', $area->post_content, $area_id );
                            return array(
                                'valid'   => true,
                                'content' => $area_content,
                            );
                        }
                    }
                }
                break;
            default:
                $shortcode_content = apply_filters( 'passster_compatibility_actions', PS_Helper::get_shortcode_content( $content, $input ) );
                if ( !empty( $shortcode_content ) ) {
                    return array(
                        'valid'   => true,
                        'content' => $shortcode_content,
                    );
                } elseif ( !empty( $options['toggle_ajax'] ) && 'on' === $options['toggle_ajax'] ) {
                    return array(
                        'valid'   => true,
                        'content' => '',
                    );
                }
                break;
        }
        return array(
            'valid'   => false,
            'content' => '',
        );
    }

    /**
     * Validate multiple passwords (PRO).
     *
     * @param string      $input         User input.
     * @param int         $post_id       Post ID.
     * @param int         $area_id       Area ID.
     * @param string|bool $protection    Protection type.
     * @param \WP_Post    $post          Post object.
     * @param string      $content       Post content.
     * @param string      $redirect      Redirect URL.
     * @param array       $options       Plugin options.
     * @param bool        $remove_spaces Whether to remove spaces.
     * @return array
     */
    private function validate_passwords_pro(
        $input,
        $post_id,
        $area_id,
        $protection,
        $post,
        $content,
        $redirect,
        $options,
        $remove_spaces
    ) {
        switch ( $protection ) {
            case 'full':
                $passwords_str = get_post_meta( $post_id, 'passster_passwords', true );
                if ( $remove_spaces ) {
                    $passwords_str = str_replace( ' ', '', $passwords_str );
                }
                $passwords = explode( ',', $passwords_str );
                if ( !empty( $passwords ) && in_array( $input, $passwords, true ) ) {
                    if ( $post && 'publish' === $post->post_status ) {
                        return array(
                            'valid'   => true,
                            'content' => $content,
                        );
                    }
                }
                break;
            case 'area':
                if ( !empty( $area_id ) ) {
                    $passwords_str = get_post_meta( $area_id, 'passster_passwords', true );
                    if ( $remove_spaces ) {
                        $passwords_str = str_replace( ' ', '', $passwords_str );
                    }
                    $passwords = explode( ',', $passwords_str );
                    if ( !empty( $passwords ) && in_array( $input, $passwords, true ) ) {
                        $area = get_post( $area_id );
                        if ( $area && 'protected_areas' === $area->post_type && 'publish' === $area->post_status ) {
                            $area_content = apply_filters( 'passster_compatibility_actions', $area->post_content, $area_id );
                            return array(
                                'valid'   => true,
                                'content' => $area_content,
                            );
                        }
                    }
                }
                break;
            default:
                $shortcode_content = apply_filters( 'passster_compatibility_actions', PS_Helper::get_shortcode_content( $content, $input ) );
                if ( !empty( $shortcode_content ) ) {
                    return array(
                        'valid'   => true,
                        'content' => $shortcode_content,
                    );
                } elseif ( !empty( $options['toggle_ajax'] ) && 'on' === $options['toggle_ajax'] ) {
                    return array(
                        'valid'   => true,
                        'content' => '',
                    );
                }
                break;
        }
        return array(
            'valid'   => false,
            'content' => '',
        );
    }

    /**
     * Validate password from single list (PRO).
     *
     * @param string      $input         User input.
     * @param int         $list_id       Password list ID.
     * @param int         $post_id       Post ID.
     * @param int         $area_id       Area ID.
     * @param string|bool $protection    Protection type.
     * @param \WP_Post    $post          Post object.
     * @param string      $content       Post content.
     * @param string      $redirect      Redirect URL.
     * @param array       $options       Plugin options.
     * @param bool        $remove_spaces Whether to remove spaces.
     * @return array
     */
    private function validate_password_list_pro(
        $input,
        $list_id,
        $post_id,
        $area_id,
        $protection,
        $post,
        $content,
        $redirect,
        $options,
        $remove_spaces
    ) {
        if ( empty( $list_id ) ) {
            return array(
                'valid'   => false,
                'content' => '',
            );
        }
        $passwords_str = get_post_meta( $list_id, 'passster_passwords', true );
        if ( $remove_spaces ) {
            $passwords_str = str_replace( ' ', '', $passwords_str );
        }
        $passwords = explode( ',', $passwords_str );
        return $this->validate_single_list(
            $input,
            $passwords,
            $list_id,
            $post_id,
            $area_id,
            $protection,
            $post,
            $content,
            $options
        );
    }

    /**
     * Validate password from multiple lists (PRO).
     *
     * @param string      $input         User input.
     * @param string      $lists         Pipe-separated list IDs.
     * @param int         $post_id       Post ID.
     * @param int         $area_id       Area ID.
     * @param string|bool $protection    Protection type.
     * @param \WP_Post    $post          Post object.
     * @param string      $content       Post content.
     * @param string      $redirect      Redirect URL.
     * @param array       $options       Plugin options.
     * @param bool        $remove_spaces Whether to remove spaces.
     * @return array
     */
    private function validate_password_lists_pro(
        $input,
        $lists,
        $post_id,
        $area_id,
        $protection,
        $post,
        $content,
        $redirect,
        $options,
        $remove_spaces
    ) {
        if ( empty( $lists ) ) {
            return array(
                'valid'   => false,
                'content' => '',
            );
        }
        $password_list_ids = explode( '|', $lists );
        foreach ( $password_list_ids as $pid ) {
            $passwords_str = get_post_meta( $pid, 'passster_passwords', true );
            if ( $remove_spaces ) {
                $passwords_str = str_replace( ' ', '', $passwords_str );
            }
            $passwords = explode( ',', $passwords_str );
            $result = $this->validate_single_list(
                $input,
                $passwords,
                $pid,
                $post_id,
                $area_id,
                $protection,
                $post,
                $content,
                $options
            );
            if ( $result['valid'] ) {
                return $result;
            }
        }
        return array(
            'valid'   => false,
            'content' => '',
        );
    }

    /**
     * Validate input against a single password list with protection type handling.
     *
     * @param string      $input      User input.
     * @param array       $passwords  Passwords array.
     * @param int         $list_id    Password list ID.
     * @param int         $post_id    Post ID.
     * @param int         $area_id    Area ID.
     * @param string|bool $protection Protection type.
     * @param \WP_Post    $post       Post object.
     * @param string      $content    Post content.
     * @param array       $options    Plugin options.
     * @return array
     */
    private function validate_single_list(
        $input,
        $passwords,
        $list_id,
        $post_id,
        $area_id,
        $protection,
        $post,
        $content,
        $options
    ) {
        $valid = false;
        $result_content = '';
        switch ( $protection ) {
            case 'full':
                if ( !empty( $passwords ) && in_array( $input, $passwords, true ) ) {
                    if ( $post && 'publish' === $post->post_status ) {
                        $valid = true;
                        $result_content = $content;
                    }
                    do_action(
                        'passster_validation_success_list',
                        $input,
                        $list_id,
                        $post_id
                    );
                    PS_Conditional::maybe_expire_password_from_list__premium_only( $input, $passwords, $list_id );
                }
                break;
            case 'area':
                if ( !empty( $area_id ) && !empty( $passwords ) && in_array( $input, $passwords, true ) ) {
                    $area = get_post( $area_id );
                    if ( $area && 'protected_areas' === $area->post_type && 'publish' === $area->post_status ) {
                        $valid = true;
                        $result_content = apply_filters( 'passster_compatibility_actions', $area->post_content, $area_id );
                    }
                    do_action(
                        'passster_validation_success_list',
                        $input,
                        $list_id,
                        $area_id
                    );
                    PS_Conditional::maybe_expire_password_from_list__premium_only( $input, $passwords, $list_id );
                }
                break;
            default:
                if ( in_array( $input, $passwords, true ) ) {
                    $shortcode_content = apply_filters( 'passster_compatibility_actions', PS_Helper::get_shortcode_content( $content, $list_id ) );
                    if ( !empty( $shortcode_content ) ) {
                        $valid = true;
                        $result_content = $shortcode_content;
                    } elseif ( !empty( $options['toggle_ajax'] ) && 'on' === $options['toggle_ajax'] ) {
                        $valid = true;
                    }
                    do_action(
                        'passster_validation_success_list',
                        $input,
                        $list_id,
                        $post_id
                    );
                    PS_Conditional::maybe_expire_password_from_list__premium_only( $input, $passwords, $list_id );
                }
                break;
        }
        return array(
            'valid'   => $valid,
            'content' => $result_content,
        );
    }

    /**
     * Validate single password (Free version).
     *
     * @param string      $input      User input.
     * @param int         $post_id    Post ID.
     * @param int         $area_id    Area ID.
     * @param string|bool $protection Protection type.
     * @param \WP_Post    $post       Post object.
     * @param string      $content    Post content.
     * @param string      $redirect   Redirect URL.
     * @param array       $options    Plugin options.
     * @return array
     */
    private function validate_password_free(
        $input,
        $post_id,
        $area_id,
        $protection,
        $post,
        $content,
        $redirect,
        $options
    ) {
        switch ( $protection ) {
            case 'full':
                $password = get_post_meta( $post_id, 'passster_password', true );
                if ( !empty( $password ) && $input === $password ) {
                    if ( $post && 'publish' === $post->post_status ) {
                        return array(
                            'valid'   => true,
                            'content' => $content,
                        );
                    }
                }
                break;
            case 'area':
                if ( !empty( $area_id ) ) {
                    $password = get_post_meta( $area_id, 'passster_password', true );
                    if ( !empty( $password ) && $input === $password ) {
                        $area = get_post( $area_id );
                        if ( $area && 'protected_areas' === $area->post_type && 'publish' === $area->post_status ) {
                            $area_content = apply_filters( 'passster_compatibility_actions', $area->post_content, $area_id );
                            return array(
                                'valid'   => true,
                                'content' => $area_content,
                            );
                        }
                    }
                }
                break;
            default:
                $shortcode_content = apply_filters( 'passster_compatibility_actions', PS_Helper::get_shortcode_content( $content, $input ) );
                if ( !empty( $shortcode_content ) ) {
                    return array(
                        'valid'   => true,
                        'content' => $shortcode_content,
                    );
                } elseif ( !empty( $options['toggle_ajax'] ) && 'on' === $options['toggle_ajax'] ) {
                    return array(
                        'valid'   => true,
                        'content' => '',
                    );
                }
                break;
        }
        return array(
            'valid'   => false,
            'content' => '',
        );
    }

    /**
     * Get password from block attributes.
     *
     * @param int    $post_id  Post ID.
     * @param string $block_id Block ID.
     * @return array
     */
    /**
     * Validate unlock for category-protected posts (password stored in term meta).
     *
     * @param string   $input         User input.
     * @param string   $type          Protection type (password, passwords, password_list, password_lists).
     * @param int      $term_id       Protected term ID.
     * @param \WP_Post $post          Post object.
     * @param string   $content       Post content.
     * @param string   $redirect      Redirect URL.
     * @param array    $options       Plugin options.
     * @param bool     $remove_spaces Whether to remove spaces from password lists.
     * @return array
     */
    private function validate_category_unlock(
        $input,
        $type,
        $term_id,
        $post,
        $content,
        $redirect,
        $options,
        $remove_spaces
    ) {
        switch ( $type ) {
            case 'password':
                $password = get_term_meta( $term_id, 'passster_password', true );
                if ( !empty( $password ) && $input === $password ) {
                    return array(
                        'valid'   => true,
                        'content' => $content,
                    );
                }
                break;
            case 'passwords':
                break;
            case 'password_list':
                break;
            case 'password_lists':
                break;
        }
        return array(
            'valid'   => false,
            'content' => '',
        );
    }

    private function get_block_password( $post_id, $block_id ) {
        $post = get_post( $post_id );
        if ( !$post ) {
            return array(
                'password' => '',
                'content'  => '',
            );
        }
        $blocks = parse_blocks( $post->post_content );
        $block = $this->find_block_by_id( $blocks, $block_id );
        if ( !$block ) {
            return array(
                'password' => '',
                'content'  => '',
            );
        }
        $password = $block['attrs']['password'] ?? '';
        $content = $this->render_inner_blocks( $block );
        return array(
            'password' => $password,
            'content'  => $content,
        );
    }

    /**
     * Get passwords from block attributes.
     *
     * @param int    $post_id  Post ID.
     * @param string $block_id Block ID.
     * @return array
     */
    private function get_block_passwords( $post_id, $block_id ) {
        $post = get_post( $post_id );
        if ( !$post ) {
            return array(
                'passwords' => '',
                'content'   => '',
            );
        }
        $blocks = parse_blocks( $post->post_content );
        $block = $this->find_block_by_id( $blocks, $block_id );
        if ( !$block ) {
            return array(
                'passwords' => '',
                'content'   => '',
            );
        }
        $passwords = $block['attrs']['passwords'] ?? '';
        $content = $this->render_inner_blocks( $block );
        return array(
            'passwords' => $passwords,
            'content'   => $content,
        );
    }

    /**
     * Find block by ID recursively.
     *
     * @param array  $blocks   Blocks array.
     * @param string $block_id Block ID.
     * @return array|null
     */
    private function find_block_by_id( $blocks, $block_id ) {
        foreach ( $blocks as $block ) {
            if ( 'passster/content-lock' === $block['blockName'] ) {
                if ( isset( $block['attrs']['blockId'] ) && $block['attrs']['blockId'] === $block_id ) {
                    return $block;
                }
            }
            // Check inner blocks.
            if ( !empty( $block['innerBlocks'] ) ) {
                $found = $this->find_block_by_id( $block['innerBlocks'], $block_id );
                if ( $found ) {
                    return $found;
                }
            }
        }
        return null;
    }

    /**
     * Render inner blocks content.
     *
     * @param array $block Block data.
     * @return string
     */
    private function render_inner_blocks( $block ) {
        if ( empty( $block['innerBlocks'] ) ) {
            return '';
        }
        $content = '';
        foreach ( $block['innerBlocks'] as $inner_block ) {
            $content .= render_block( $inner_block );
        }
        return $content;
    }

    /**
     * Hash password endpoint.
     *
     * @param \WP_REST_Request $request Request object.
     * @return \WP_REST_Response
     */
    public function hash_password( \WP_REST_Request $request ) {
        $password = $request->get_param( 'password' );
        $hashed = hash_hmac( 'sha256', $password, get_option( 'passster_secure_key' ) );
        return new \WP_REST_Response(array(
            'success' => true,
            'hash'    => $hashed,
        ), 200);
    }

    /**
     * Validate captcha endpoint.
     *
     * @param \WP_REST_Request $request Request object.
     * @return \WP_REST_Response
     */
    public function validate_captcha( \WP_REST_Request $request ) {
        $options = get_option( 'passster', array() );
        $token = $request->get_param( 'token' );
        $type = $request->get_param( 'type' );
        $post_id = $request->get_param( 'post_id' );
        $area_id = $request->get_param( 'area_id' );
        $redirect = $request->get_param( 'redirect' );
        $protection = $request->get_param( 'protection' );
        $captcha_id = $request->get_param( 'captcha_id' );
        if ( empty( $protection ) ) {
            $protection = false;
        }
        if ( empty( $captcha_id ) ) {
            // Default captcha ID based on type.
            $captcha_id = str_replace( array('_v2', '_v3'), '', $type );
        }
        $error_message = $options['error'] ?? __( 'Captcha validation failed.', 'content-protector' );
        // Validate captcha based on type.
        $valid = false;
        switch ( $type ) {
            case 'recaptcha_v2':
            case 'recaptcha_v3':
                $valid = $this->verify_recaptcha( $token, $options, $type );
                break;
            case 'hcaptcha':
                $valid = $this->verify_hcaptcha( $token, $options );
                break;
            case 'turnstile':
                $valid = $this->verify_turnstile( $token, $options );
                break;
        }
        if ( !$valid ) {
            return new \WP_REST_Response(array(
                'success' => false,
                'error'   => $error_message,
            ), 200);
        }
        // Get content based on protection type (mirrors AJAX logic).
        $content = '';
        if ( 'full' !== $protection ) {
            if ( 'area' === $protection ) {
                if ( !empty( $area_id ) ) {
                    $area = get_post( $area_id );
                    if ( $area && 'protected_areas' === $area->post_type && 'publish' === $area->post_status ) {
                        $content = apply_filters( 'passster_compatibility_actions', $area->post_content, $area_id );
                    }
                }
            } else {
                // Shortcode protection - extract content using captcha_id.
                $post = get_post( $post_id );
                if ( $post ) {
                    $post_content = apply_filters( 'passster_compatibility_actions', $post->post_content, $post_id );
                    $content = apply_filters( 'passster_compatibility_actions', PS_Helper::get_shortcode_content( $post_content, $captcha_id ) );
                }
            }
        } else {
            // Full page protection - return full post content.
            $post = get_post( $post_id );
            if ( $post ) {
                $content = apply_filters( 'passster_compatibility_actions', $post->post_content, $post_id );
            }
        }
        // Track record.
        $source = 'shortcode';
        if ( 'full' === $protection ) {
            $source = 'full';
        } elseif ( !empty( $area_id ) || 'area' === $protection ) {
            $source = 'area';
        }
        do_action(
            'passsster_track_record',
            $post_id,
            $captcha_id,
            $source
        );
        // Success response.
        $response_data = array(
            'success' => true,
        );
        if ( !empty( $redirect ) ) {
            $response_data['redirect'] = $redirect;
        } else {
            $response_data['content'] = $content;
        }
        return new \WP_REST_Response($response_data, 200);
    }

    /**
     * Verify reCAPTCHA token.
     *
     * @param string $token   Token from client.
     * @param array  $options Plugin options.
     * @param string $type    recaptcha_v2 or recaptcha_v3.
     * @return bool
     */
    private function verify_recaptcha( $token, $options, $type ) {
        $secret = $options['recaptcha_secret'] ?? '';
        if ( empty( $secret ) ) {
            return false;
        }
        $response = wp_remote_post( 'https://www.google.com/recaptcha/api/siteverify', array(
            'body' => array(
                'secret'   => $secret,
                'response' => $token,
            ),
        ) );
        if ( is_wp_error( $response ) ) {
            return false;
        }
        $body = json_decode( wp_remote_retrieve_body( $response ), true );
        if ( 'recaptcha_v2' === $type ) {
            return !empty( $body['success'] );
        }
        // v3 - check score.
        return !empty( $body['success'] ) && isset( $body['score'] ) && $body['score'] >= 0.5 && isset( $body['action'] ) && 'validate_input' === $body['action'];
    }

    /**
     * Verify hCaptcha token.
     *
     * @param string $token   Token from client.
     * @param array  $options Plugin options.
     * @return bool
     */
    private function verify_hcaptcha( $token, $options ) {
        $secret = $options['recaptcha_secret'] ?? '';
        if ( empty( $secret ) ) {
            return false;
        }
        $response = wp_remote_post( 'https://hcaptcha.com/siteverify', array(
            'body' => array(
                'secret'   => $secret,
                'response' => $token,
            ),
        ) );
        if ( is_wp_error( $response ) ) {
            return false;
        }
        $body = json_decode( wp_remote_retrieve_body( $response ), true );
        return !empty( $body['success'] );
    }

    /**
     * Verify Turnstile token.
     *
     * @param string $token   Token from client.
     * @param array  $options Plugin options.
     * @return bool
     */
    private function verify_turnstile( $token, $options ) {
        $secret = $options['turnstile_secret'] ?? '';
        if ( empty( $secret ) ) {
            return false;
        }
        $response = wp_remote_post( 'https://challenges.cloudflare.com/turnstile/v0/siteverify', array(
            'body' => array(
                'secret'   => $secret,
                'response' => $token,
            ),
        ) );
        if ( is_wp_error( $response ) ) {
            return false;
        }
        $body = json_decode( wp_remote_retrieve_body( $response ), true );
        return !empty( $body['success'] );
    }

    /**
     * Handle logout endpoint.
     *
     * @param \WP_REST_Request $request Request object.
     * @return \WP_REST_Response
     */
    public function handle_logout( \WP_REST_Request $request ) {
        // Clear concurrent session if PRO and class exists.
        if ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) && class_exists( 'passster\\PS_Concurrent' ) ) {
            $cookie = ( isset( $_COOKIE['passster'] ) ? sanitize_text_field( wp_unslash( $_COOKIE['passster'] ) ) : '' );
            if ( !empty( $cookie ) && method_exists( PS_Concurrent::class, 'clear_session__premium_only' ) ) {
                PS_Concurrent::clear_session__premium_only( $cookie );
            }
        }
        return new \WP_REST_Response(array(
            'success' => true,
        ), 200);
    }

}
