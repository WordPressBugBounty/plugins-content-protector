<?php

namespace passster;

use Exception;

/**
 * Keeps a locked product's descriptions away from every output and shows its form once on block themes.
 */
class PS_Product_Protection {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Rendered form HTML to pass to the protected template.
	 *
	 * @var string
	 */
	private static $protected_form = '';

	/**
	 * Returns instance of PS_Product_Protection.
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
	 * Constructor for PS_Product_Protection
	 */
	public function __construct() {
		// The getters are what Store API, structured data and product blocks all read from.
		add_filter( 'woocommerce_product_get_description', array( $this, 'filter_description' ), 10, 2 );
		add_filter( 'woocommerce_product_get_short_description', array( $this, 'filter_description' ), 10, 2 );
		add_filter( 'woocommerce_product_variation_get_description', array( $this, 'filter_description' ), 10, 2 );

		// WooCommerce's template reads the short description straight from the post.
		add_filter( 'woocommerce_short_description', array( $this, 'filter_short_description' ) );

		add_filter( 'woocommerce_is_purchasable', array( $this, 'filter_purchasable' ), 10, 2 );

		// After PS_Category_Lock, whose template expects a classic theme.
		add_filter( 'template_include', array( $this, 'use_protected_template' ), 100 );
	}

	/**
	 * Get the stored protected form HTML (used by the protected template).
	 *
	 * @return string
	 */
	public static function get_protected_form(): string {
		return self::$protected_form;
	}

	/**
	 * Empty a description while its product is locked. The edit context bypasses this filter.
	 *
	 * @param string      $description Product description.
	 * @param \WC_Product $product     Product object.
	 *
	 * @return string
	 * @throws Exception
	 */
	public function filter_description( $description, $product ) {
		return $this->is_product_locked( $product ) ? '' : $description;
	}

	/**
	 * Refuse buying a locked product from any route: add-to-cart links, AJAX, Store API, an existing cart.
	 *
	 * @param bool        $purchasable Whether it can be bought.
	 * @param \WC_Product $product     Product object.
	 *
	 * @return bool
	 * @throws Exception
	 */
	public function filter_purchasable( $purchasable, $product ) {
		return $purchasable && ! $this->is_product_locked( $product );
	}

	/**
	 * A variation follows its parent product.
	 *
	 * @param \WC_Product $product Product object.
	 *
	 * @return bool
	 * @throws Exception
	 */
	private function is_product_locked( $product ): bool {
		$post_id = $product->get_parent_id() ?: $product->get_id();

		return PS_Public::get_instance()->is_post_locked( (int) $post_id );
	}

	/**
	 * Empty the short description of the current product while it's locked.
	 *
	 * @param string $description Short description.
	 *
	 * @return string
	 * @throws Exception
	 */
	public function filter_short_description( $description ) {
		return PS_Public::get_instance()->is_post_locked( (int) get_the_ID() ) ? '' : $description;
	}

	/**
	 * Block themes render a product from separate blocks that can't be unhooked, so replace the whole template.
	 *
	 * @param string $template Current template path.
	 *
	 * @return string
	 * @throws Exception
	 */
	public function use_protected_template( $template ) {
		if ( ! wp_is_block_theme() ) {
			return $template;
		}

		$form = is_singular( 'product' ) ? PS_Public::get_instance()->get_protection_form( get_queried_object_id() ) : '';

		self::$protected_form = $form ?: PS_Category_Lock::get_woo_protected_form();

		return '' === self::$protected_form ? $template : PASSSTER_PATH . '/inc/templates/block-theme-product-protected.php';
	}
}
