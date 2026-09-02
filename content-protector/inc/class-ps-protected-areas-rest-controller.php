<?php

namespace passster;

/**
 * REST controller for the "protected_areas" post type.
 *
 * WordPress' default WP_REST_Posts_Controller ignores a post type's
 * public/publicly_queryable flags when deciding read access — it only
 * checks show_in_rest and post status — so with the default controller
 * anyone could read every area's protected content via /wp/v2/protected_areas.
 * These routes exist only so the block editor (logged-in admins) can
 * read/write areas; visitors unlock areas exclusively through the
 * password-gated passster/v1 routes.
 */
class PS_Protected_Areas_Rest_Controller extends \WP_REST_Posts_Controller {

	/**
	 * Checks if a given request has access to read protected areas.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 *
	 * @return bool
	 */
	public function get_items_permissions_check( $request ) {
		return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
	}

	/**
	 * Checks if a given request has access to read a single protected area.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 *
	 * @return bool
	 */
	public function get_item_permissions_check( $request ) {
		return current_user_can( apply_filters( 'passster_user_capability', 'manage_options' ) );
	}
}
