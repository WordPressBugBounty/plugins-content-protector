<?php

namespace passster;

class PS_WC_Meta {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_WC_Meta.
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
	 * Constructor for PS_WC_Meta
	 */
	public function __construct() {
		add_filter( 'woocommerce_product_data_tabs', array( $this, 'add_tab' ) );
		add_action( 'woocommerce_product_data_panels', array( $this, 'add_settings_panel' ) );
		add_action( 'woocommerce_process_product_meta', array( $this, 'save_settings' ) );
		add_action( 'woocommerce_product_after_variable_attributes', array( $this, 'add_variation_fields' ), 10, 3 );
		add_action( 'woocommerce_save_product_variation', array( $this, 'save_variation_fields' ), 10, 2 );
	}


	/**
	 * Add settings tab for Passster.
	 *
	 * @param $tabs
	 *
	 * @return mixed
	 */
	public function add_tab( $tabs ) {
		$tabs['passster'] = array(
			'label'    => 'Passster',
			'target'   => 'passster_product_data',
			'class'    => array( 'show_if_simple' ),
			'priority' => 21,
		);

		return $tabs;
	}


	/**
	 * Add settings panel for Passster.
	 *
	 * @return void
	 */
	public function add_settings_panel() {

		$selected_pw_list  = get_post_meta( get_the_ID(), 'passster_product_password_list', true );
		$generate_password = get_post_meta( get_the_ID(), 'passster_product_generate_password', true );
		$protected_page    = get_post_meta( get_the_ID(), 'passster_product_protected_page', true );

		// Get all password lists.
		$pw_lists = get_posts( array(
			'post_type'      => 'password_lists',
			'posts_per_page' => - 1,
			'post_status'    => 'publish',
			'fields'         => 'ids'
		) );

		$pw_list_options = [ '' => esc_html__( 'Choose a list', 'content-protector' ) ];

		foreach ( $pw_lists as $pw_list_id ) {
			$pw_list_options[ $pw_list_id ] = get_the_title( $pw_list_id );
		}


		// Get all pages with a password list.
		$pw_list_posts = get_posts( array(
			'post_type'      => 'page',
			'posts_per_page' => - 1,
			'post_status'    => 'publish',
			'fields'         => 'ids',
			'meta_query'     => array(
				array(
					'key'     => 'passster_password_list',
					'compare' => '=',
					'value'   => $selected_pw_list
				)
			)
		) );

		$pw_list_post_options = [ '' => esc_html__( 'Choose a page', 'content-protector' ) ];

		foreach ( $pw_list_posts as $pw_list_post_id ) {
			$pw_list_post_options[ $pw_list_post_id ] = get_the_title( $pw_list_post_id );
		}

		?>
        <div id="passster_product_data" class="panel woocommerce_options_panel">
			<?php
			woocommerce_wp_checkbox(
				array(
					'id'          => 'passster_product_generate_password',
					'value'       => $generate_password,
					'label'       => esc_html__( 'Generate password', 'content-protector' ),
					'desc_tip'    => true,
					'description' => esc_html__( 'Passster will generate a password after this product was purchased.', 'content-protector' ),
				)
			);

			woocommerce_wp_select(
				array(
					'id'          => 'passster_product_password_list',
					'value'       => $selected_pw_list,
					'label'       => esc_html__( 'Password List', 'content-protector' ),
					'options'     => $pw_list_options,
					'desc_tip'    => true,
					'description' => esc_html__( 'Passster will add the generated passsword to the selected password list.', 'content-protector' ),
				)
			);
			?>
			<?php if ( ! empty( $generate_password ) && ! empty( $selected_pw_list ) ) : ?>
				<?php
				woocommerce_wp_select(
					array(
						'id'          => 'passster_product_protected_page',
						'value'       => $protected_page,
						'label'       => esc_html__( 'Protected Page', 'content-protector' ),
						'options'     => $pw_list_post_options,
						'desc_tip'    => true,
						'description' => esc_html__( 'Passster creates an unlock link from the selected page and adds it to the e-mail.', 'content-protector' ),
					)
				);
				?>
			<?php endif; ?>
        </div>
        <style>
            #woocommerce-product-data ul.wc-tabs li.passster_options.passster_tab a:before {
                content: "\f160";
            }
        </style>
		<?php
	}

	/**
	 * Save settings for Passster.
	 *
	 * @param $id
	 *
	 * @return void
	 */
	public function save_settings( $id ) {
		$generate_password = isset( $_POST['passster_product_generate_password'] ) && 'yes' === $_POST['passster_product_generate_password'] ? 'yes' : 'no';
		update_post_meta( $id, 'passster_product_generate_password', sanitize_text_field( $generate_password ) );

		if ( isset( $_POST['passster_product_password_list'] ) && ! empty( $_POST['passster_product_password_list'] ) ) {
			update_post_meta( $id, 'passster_product_password_list', sanitize_text_field( $_POST['passster_product_password_list'] ) );
		} else {
			delete_post_meta( $id, 'passster_product_password_list' );
		}

		if ( isset( $_POST['passster_product_protected_page'] ) && ! empty( $_POST['passster_product_protected_page'] ) ) {
			update_post_meta( $id, 'passster_product_protected_page', sanitize_text_field( $_POST['passster_product_protected_page'] ) );
		} else {
			delete_post_meta( $id, 'passster_product_protected_page' );
		}
	}


	/**
	 * Add settings for variations.
	 *
	 * @param int $loop given iterator
	 * @param array $variation_data given variation data
	 * @param object $variation given variation object.
	 *
	 * @return void
	 */
	public function add_variation_fields( $loop, $variation_data, $variation ) {
		$selected_pw_list  = get_post_meta( $variation->ID, 'passster_product_password_list', true );
		$generate_password = get_post_meta( $variation->ID, 'passster_product_generate_password', true );
		$protected_page    = get_post_meta( $variation->ID, 'passster_product_protected_page', true );

		// Get all password lists.
		$pw_lists = get_posts( array(
			'post_type'      => 'password_lists',
			'posts_per_page' => - 1,
			'post_status'    => 'publish',
			'fields'         => 'ids'
		) );

		$pw_list_options = [ '' => esc_html__( 'Choose a list', 'content-protector' ) ];

		foreach ( $pw_lists as $pw_list_id ) {
			$pw_list_options[ $pw_list_id ] = get_the_title( $pw_list_id );
		}

		// Get all pages with a password list.
		$pw_list_posts = get_posts( array(
			'post_type'      => 'page',
			'posts_per_page' => - 1,
			'post_status'    => 'publish',
			'fields'         => 'ids',
			'meta_query'     => array(
				array(
					'key'     => 'passster_password_list',
					'compare' => '=',
					'value'   => $selected_pw_list
				)
			)
		) );

		$pw_list_post_options = [ '' => esc_html__( 'Choose a page', 'content-protector' ) ];

		foreach ( $pw_list_posts as $pw_list_post_id ) {
			$pw_list_post_options[ $pw_list_post_id ] = get_the_title( $pw_list_post_id );
		}

		?>

        <div class="ps-checkbox">
			<?php
			woocommerce_wp_checkbox(
				array(
					'id'            => 'passster_product_generate_password[' . $loop . ']',
					'value'         => $generate_password,
					'label'         => esc_html__( 'Generate password', 'content-protector' ),
					'wrapper_class' => 'form-row',
					'desc_tip'      => true,
					'description'   => esc_html__( 'Passster will generate a password after this product was purchased.', 'content-protector' ),
				)
			);
			?>
        </div>
        <style>
            .ps-checkbox label {
                position: relative;
                padding-left: 5px;
                top: 1px;
            }
        </style>
		<?php
		woocommerce_wp_select(
			array(
				'id'            => 'passster_product_password_list[' . $loop . ']',
				'value'         => $selected_pw_list,
				'label'         => esc_html__( 'Password List', 'content-protector' ),
				'options'       => $pw_list_options,
				'wrapper_class' => 'form-row',
				'desc_tip'      => true,
				'description'   => esc_html__( 'Passster will add the generated passsword to the selected password list.', 'content-protector' ),
			)
		);
		?>
		<?php if ( ! empty( $generate_password ) && ! empty( $selected_pw_list ) ) : ?>
			<?php
			woocommerce_wp_select(
				array(
					'id'            => 'passster_product_protected_page[' . $loop . ']',
					'value'         => $protected_page,
					'label'         => esc_html__( 'Protected Page', 'content-protector' ),
					'options'       => $pw_list_post_options,
					'wrapper_class' => 'form-row',
					'desc_tip'      => true,
					'description'   => esc_html__( 'Passster creates an unlock link from the selected page and adds it to the e-mail.', 'content-protector' ),
				)
			);
			?>
		<?php endif; ?>

		<?php
	}

	/**
	 * Save variation meta fields.
	 *
	 * @param int $variation_id the given variation id.
	 * @param int $loop the given iterator key.
	 *
	 * @return void
	 */
	public function save_variation_fields( $variation_id, $loop ) {
		$generate_password = ! empty( $_POST['passster_product_generate_password'][ $loop ] ) ? 'yes' : 'no';
		update_post_meta( $variation_id, 'passster_product_generate_password', $generate_password );

		$list_id = ! empty( $_POST['passster_product_password_list'][ $loop ] ) ? $_POST['passster_product_password_list'][ $loop ] : '';
		update_post_meta( $variation_id, 'passster_product_password_list', sanitize_text_field( $list_id ) );

		$page_id = ! empty( $_POST['passster_product_protected_page'][ $loop ] ) ? $_POST['passster_product_protected_page'][ $loop ] : '';
		update_post_meta( $variation_id, 'passster_product_protected_page', sanitize_text_field( $page_id ) );
	}
}
