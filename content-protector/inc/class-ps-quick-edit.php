<?php

namespace passster;

class PS_Quick_Edit {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_Quick_Edit.
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
		add_action( 'bulk_edit_custom_box', array( $this, 'add_quick_edit_fields' ), 10, 2 );
		add_action( 'save_post', array( $this, 'save_bulk_edit_fields' ) );
		add_action( 'quick_edit_custom_box', array( $this, 'add_quick_edit_fields' ), 10, 2 );
		add_action( 'save_post', array( $this, 'save_quick_edit_fields' ) );
		add_action( 'admin_footer', array( $this, 'add_bulk_styles' ) );
	}

	public function add_quick_edit_fields( $column, $post_type ) {

		// Only output for protected column.
		if ( 'protected' !== $column ) {
			return;
		}

		// Get available password lists.
		$args = array(
			'post_type'   => 'password_lists',
			'post_status' => 'publish',
			'numberposts' => - 1,
		);

		$lists = get_posts( $args );

		?>
		<div class="passster-quick-edit">
			<h4>Passster</h4>
			<fieldset class="inline-edit-col-left">
				<div class="inline-edit-col">
					<label>
						<input type="checkbox" name="activate-protection" class="activate-protection">
						<span class="checkbox-title"><?php esc_html_e( 'Overwrite Protection', 'content-protector' ); ?></span>
					</label>
					<div class="protection-settings">
						<label for="protection-type"><?php esc_html_e( 'Protection Type', 'content-protector' ); ?></label>
						<select name="protection-type" class="protection-type">
							<option value="password"><?php esc_html_e( 'Password', 'content-protector' ); ?></option>
							<option value="passwords"><?php esc_html_e( 'Passwords', 'content-protector' ); ?></option>
							<option value="password_list"><?php esc_html_e( 'Password List', 'content-protector' ); ?></option>
							<option value="recaptcha">reCAPTCHA</option>
							<option value="recaptcha">Turnstile</option>
						</select>
						<div class="protection-field password">
							<label><?php esc_html_e( 'Password', 'content-protector' ); ?></label>
							<input name="password" placeholder="password1">
						</div>
						<div class="protection-field passwords">
							<label><?php esc_html_e( 'Passwords', 'content-protector' ); ?></label>
							<input name="passswords" placeholder="password1,password2,password3">
						</div>
						<div class="protection-field password_list">
							<label><?php esc_html_e( 'Password List', 'content-protector' ); ?></label>
							<select name="password-list" class="password-list-selection">
								<?php foreach ( $lists as $list ) : ?>
									<option value="<?php echo esc_attr( $list->ID ); ?>"><?php echo esc_html( $list->post_title ); ?></option>
								<?php endforeach; ?>
							</select>
						</div>
					</div>
				</div>
			</fieldset>
		</div>
		<?php
	}

	/**
	 * Save bulk edit fields in meta.
	 *
	 * @param int $post_id given post id.
	 *
	 * @return void
	 */
	public function save_bulk_edit_fields( int $post_id ) {

		if ( ! isset( $_REQUEST['_wpnonce'] ) ) {
			return;
		}

		// Check bulk edit nonce.
		if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_REQUEST['_wpnonce'] ) ), 'bulk-posts' ) ) {
			return;
		}

		// Check user capability for this specific post.
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		if ( isset( $_REQUEST['activate-protection'] ) && 'on' === sanitize_text_field( wp_unslash( $_REQUEST['activate-protection'] ) ) ) {
			update_post_meta( $post_id, 'passster_activate_protection', true );

			if ( isset( $_REQUEST['protection-type'] ) ) {
				$protection_type = sanitize_text_field( wp_unslash( $_REQUEST['protection-type'] ) );

				// Activate protection.
				update_post_meta( $post_id, 'passster_protection_type', $protection_type );

				// Only if protection activated and protection type is set, we update the rest of the meta fields.
				switch ( $protection_type ) {
					case 'password':
						if ( ! empty( $_REQUEST['password'] ) ) {
							update_post_meta( $post_id, 'passster_password', sanitize_text_field( wp_unslash( $_REQUEST['password'] ) ) );
						}
						break;
					case 'passwords':
						if ( ! empty( $_REQUEST['passwords'] ) ) {
							update_post_meta( $post_id, 'passster_passwords', sanitize_text_field( wp_unslash( $_REQUEST['passwords'] ) ) );
						}
						break;
					case 'password_list':
						if ( ! empty( $_REQUEST['password-list'] ) ) {
							update_post_meta( $post_id, 'passster_password_list', sanitize_text_field( wp_unslash( $_REQUEST['password-list'] ) ) );
						}
						break;
				}
			}
		}
	}

	/**
	 * Save quick edit fields to meta.
	 *
	 * @param int $post_id given post id.
	 *
	 * @return void
	 */
	public function save_quick_edit_fields( $post_id ) {

		if ( ! isset( $_POST['_inline_edit'] ) ) {
			return;
		}

		// Check inline edit nonce.
		if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['_inline_edit'] ) ), 'inlineeditnonce' ) ) {
			return;
		}

		// Check user capability for this specific post.
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// Update meta fields.
		if ( isset( $_POST['activate-protection'] ) && 'on' === sanitize_text_field( wp_unslash( $_POST['activate-protection'] ) ) ) {
			$protection_type = isset( $_POST['protection-type'] ) ? sanitize_text_field( wp_unslash( $_POST['protection-type'] ) ) : '';

			// Activate protection.
			update_post_meta( $post_id, 'passster_activate_protection', true );

			if ( ! empty( $protection_type ) ) {
				update_post_meta( $post_id, 'passster_protection_type', $protection_type );

				// Only if protection activated and protection type is set, we update the rest of the meta fields.
				switch ( $protection_type ) {
					case 'password':
						if ( ! empty( $_POST['password'] ) ) {
							update_post_meta( $post_id, 'passster_password', sanitize_text_field( wp_unslash( $_POST['password'] ) ) );
						}
						break;
					case 'passwords':
						if ( ! empty( $_POST['passwords'] ) ) {
							update_post_meta( $post_id, 'passster_passwords', sanitize_text_field( wp_unslash( $_POST['passwords'] ) ) );
						}
						break;
					case 'password_list':
						if ( ! empty( $_POST['password-list'] ) ) {
							update_post_meta( $post_id, 'passster_password_list', sanitize_text_field( wp_unslash( $_POST['password-list'] ) ) );
						}
						break;
				}
			}
		}
	}

	/**
	 * Add styles to modify the bulk edit layout for Passster.
	 *
	 * @return void
	 */
	public function add_bulk_styles() {
		$current_screen = get_current_screen();

		if ( 'edit' !== $current_screen->base ) {
			return;
		}
		?>
		<style>
			.passster-quick-edit {
				float: left;
				width: 100%;
				padding: 15px;
				margin: 15px 0;
				border: solid 1px #cbcbcb;
				background: white;
				box-sizing: border-box;
			}

			.passster-quick-edit h4 {
				margin: 0;
			}

			.passster-quick-edit .protection-field input {
				padding: 6px 4px;
				box-shadow: 0 0 0 transparent;
				transition: box-shadow 0.1s linear;
				border-radius: 2px;
				border: 1px solid #757575;
				font-size: 14px;
				line-height: normal;
				box-sizing: border-box;
			}

			.passster-quick-edit .protection-settings {
				display: none;
			}

			.passster-quick-edit .protection-field {
				display: none;
			}

			.passster-quick-edit .password {
				display: block;
			}

		</style>
		<script>
			jQuery(document).ready(function ($) {
				// Change output based on settings.
				$('.activate-protection').on('change', function () {
					$(this).parent().parent().find('.protection-settings').toggle();
				});

				$('.protection-type').on('change', function () {
					let type = $(this).val();

					switch (type) {
						case 'password':
							$(this).parent().find('.protection-field').each(function () {
								$(this).hide();
							});

							$(this).parent().find('.password').show();

							break;
						case 'passwords':
							$(this).parent().find('.protection-field').each(function () {
								$(this).hide();
							});

							$(this).parent().find('.passwords').toggle();
							break;
						case 'password_list':
							$(this).parent().find('.protection-field').each(function () {
								$(this).hide();
							});

							$(this).parent().find('.password_list').toggle();
							break;
						case 'recaptcha':
						case 'turnstile':
							$(this).parent().find('.protection-field').each(function () {
								$(this).hide();
							});
							break;
					}
				});
			});
		</script>
		<?php
	}
}
