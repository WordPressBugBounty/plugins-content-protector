<?php
/**
 * Plugin Name:       Passster
 * Plugin URI:        https://passster.com/
 * Description:       A simple plugin to password-protect your complete website, some pages/posts or just parts of your content.
 * Version:           4.3.26
 * Author:            WPChill
 * Author URI:        https://wpchill.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       content-protector
 * Domain Path:       /languages
 *
 * @fs_premium_only /inc/templates/recaptcha-form.php, /inc/templates/hcaptcha-form.php, /inc/templates/recaptcha-v2-form.php, /inc/templates/turnstile-form.php, /inc/class-ps-concurrent.php, /inc/woocommerce/, /inc/class-ps-quick-edit.php, /inc/admin/inc/class-ps-statistics.php, /inc/class-ps-post-type-lock.php, /inc/templates/post-type-archive-protected.php
 *
 *
 * NOTE:
 * Patrick Posner transferred ownership rights on: 6th of December, 2024 when ownership was handed over to WPChill
 */

defined( 'ABSPATH' ) || exit;

define( 'PASSSTER_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'PASSSTER_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'PASSSTER_VERSION', '4.3.26' );

// run plugin.
if ( ! function_exists( 'passster_run_plugin' ) ) {
	add_action( 'plugins_loaded', 'passster_run_plugin' );

	/**
	 * Run plugin
	 *
	 * @return void
	 * @throws Exception
	 */
	function passster_run_plugin() {
		// Include files.
		require_once PASSSTER_PATH . '/inc/class-ps-conditional.php';
		require_once PASSSTER_PATH . '/inc/class-ps-helper.php';
		require_once PASSSTER_PATH . '/inc/class-ps-form.php';
		require_once PASSSTER_PATH . '/inc/class-ps-global-protection.php';
		require_once PASSSTER_PATH . '/inc/class-ps-public.php';
		require_once PASSSTER_PATH . '/inc/class-ps-comment-protection.php';
		require_once PASSSTER_PATH . '/inc/class-ps-product-protection.php';
		require_once PASSSTER_PATH . '/inc/class-ps-migrator.php';
		require_once PASSSTER_PATH . '/inc/class-ps-block-editor.php';
		require_once PASSSTER_PATH . '/inc/class-ps-rest-handler.php';
		require_once PASSSTER_PATH . '/inc/class-ps-protected-areas-rest-controller.php';
		require_once PASSSTER_PATH . '/inc/class-ps-rest-api.php';
		require_once PASSSTER_PATH . '/inc/class-ps-protected-posts.php';
		require_once PASSSTER_PATH . '/inc/class-ps-category-lock.php';

		// admin.
		require_once PASSSTER_PATH . '/inc/admin/inc/class-ps-admin-settings.php';
		require_once PASSSTER_PATH . '/inc/admin/inc/class-ps-upsells.php';
		require_once PASSSTER_PATH . '/inc/admin/inc/class-ps-admin.php';
		require_once PASSSTER_PATH . '/inc/admin/inc/class-ps-meta.php';
		require_once PASSSTER_PATH . '/inc/admin/inc/class-ps-dynamic-styles.php';

		// load Freemius.
		require_once PASSSTER_PATH . '/inc/freemius-setup.php';

		// localize.
		$textdomain_dir = plugin_basename( __DIR__ ) . '/languages';
		load_plugin_textdomain( 'content-protector', false, $textdomain_dir );

		if ( ! get_option( 'passster_secure_key' ) ) {
			add_option( 'passster_secure_key', bin2hex( random_bytes( 32 ) ) );
		}

		if ( \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
			// Pro only.
			require_once PASSSTER_PATH . '/inc/class-ps-concurrent.php';
			require_once PASSSTER_PATH . '/inc/class-ps-quick-edit.php';
			require_once PASSSTER_PATH . '/inc/admin/inc/class-ps-statistics.php';
			require_once PASSSTER_PATH . '/inc/class-ps-post-type-lock.php';

			passster\PS_Concurrent::get_instance();
			passster\PS_Quick_Edit::get_instance();
			passster\PS_Statistics::get_instance();
			passster\PS_Statistics::create_table();
			passster\PS_Post_Type_Lock::get_instance();

			// WooCommerce Integration.
			if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
				require_once PASSSTER_PATH . '/inc/woocommerce/class-ps-wc-meta.php';
				require_once PASSSTER_PATH . '/inc/woocommerce/class-ps-wc-protection.php';
				require_once PASSSTER_PATH . '/inc/woocommerce/class-ps-wc-email.php';

				passster\PS_WC_Protection::get_instance();
				passster\PS_WC_Meta::get_instance();
				passster\PS_WC_Email::get_instance();
			}
		}

		passster\PS_Admin::get_instance();
		passster\PS_Admin_Settings::get_instance();
		passster\PS_Meta::get_instance();
		passster\PS_Dynamic_Styles::get_instance();
		passster\PS_Form::get_instance();
		passster\PS_Global_Protection::get_instance();
		passster\PS_Public::get_instance();
		passster\PS_Comment_Protection::get_instance();
		passster\PS_Product_Protection::get_instance();
		passster\PS_Block_Editor::get_instance();
		passster\PS_Rest_Handler::get_instance();
		passster\PS_Rest_API::get_instance();

		if ( ! \passster_fs()->is_plan_or_trial__premium_only( 'pro' ) ) {
			passster\PS_Upsells::get_instance();
		}

		add_action( 'init', array( 'passster\PS_Migrator', 'maybe_migrate' ), 0 );

		passster\PS_Protected_Posts::get_instance();
		passster\PS_Category_Lock::get_instance();
	}
}
