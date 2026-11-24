<?php

namespace passster;

/**
 * Class to handle protected posts functionality
 */
class PS_Protected_Posts {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	const PASSTER_META_KEY = 'passster_activate_protection';

	const HAS_SECTION_META_KEY = '_passster_has_section';

	const SECTION_MARKERS = array( '[passster', '[content_protector', 'wp:passster/content-lock' );
	/**
	 * Returns instance of PS_Protected_Posts.
	 *
	 * @return object
	 */
	public static function get_instance() {
		if ( null === self::$instance || ! self::$instance instanceof PS_Protected_Posts ) {
			self::$instance = new PS_Protected_Posts();
		}

		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter( 'pre_get_posts', array( $this, 'exclude_protected_posts_from_search' ) );
		add_filter( 'posts_search', array( $this, 'skip_protected_sections_in_search' ), 10, 2 );
		add_action( 'save_post', array( $this, 'flag_protected_sections' ), 10, 2 );
	}

	/**
	 * Flag posts holding a Passster shortcode or block, so search can tell them apart cheaply.
	 *
	 * @param int      $post_id Post ID.
	 * @param \WP_Post $post    Post object.
	 * @return void
	 */
	public function flag_protected_sections( $post_id, $post ) {
		if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
			return;
		}

		foreach ( self::SECTION_MARKERS as $marker ) {
			if ( false !== stripos( (string) $post->post_content, $marker ) ) {
				update_post_meta( $post_id, self::HAS_SECTION_META_KEY, 1 );
				return;
			}
		}

		// get_post_meta() reads from cache; delete_post_meta() would always hit the DB.
		if ( get_post_meta( $post_id, self::HAS_SECTION_META_KEY, true ) ) {
			delete_post_meta( $post_id, self::HAS_SECTION_META_KEY );
		}
	}

	/**
	 * Exclude protected posts from search results for non-logged in users
	 *
	 * @param \WP_Query $query The WP_Query instance.
	 * @return \WP_Query
	 */
	public function exclude_protected_posts_from_search( $query ) {
		if ( ! $this->should_exclude_from_search( $query ) ) {
			return $query;
		}

		$meta_query = array(
			'relation' => 'AND',
			array(
				'relation' => 'OR',
				array(
					'key'     => self::PASSTER_META_KEY,
					'compare' => 'NOT EXISTS',
				),
				array(
					'key'     => self::PASSTER_META_KEY,
					'value'   => '1',
					'compare' => '!=',
				),
			),
		);

		$existing_meta_query = $query->get( 'meta_query', array() );
		if ( ! empty( $existing_meta_query ) ) {
			$meta_query = array_merge( array( 'relation' => 'AND' ), $existing_meta_query, array( $meta_query ) );
		}

		$query->set( 'meta_query', $meta_query );

		$this->exclude_locked_terms( $query );
		$this->exclude_protected_children( $query );

		return $query;
	}

	/**
	 * Exclude posts of locked categories (and their subcategories).
	 *
	 * @param \WP_Query $query The WP_Query instance.
	 * @return void
	 */
	private function exclude_locked_terms( $query ) {
		$tax_query = array();
		foreach ( PS_Category_Lock::get_instance()->get_locked_term_ids() as $taxonomy => $term_ids ) {
			$tax_query[] = array(
				'taxonomy'         => $taxonomy,
				'terms'            => $term_ids,
				'operator'         => 'NOT IN',
				'include_children' => true,
			);
		}

		if ( ! $tax_query ) {
			return;
		}

		$existing_tax_query = $query->get( 'tax_query' );
		if ( ! empty( $existing_tax_query ) ) {
			$tax_query[] = $existing_tax_query;
		}

		$query->set( 'tax_query', array_merge( array( 'relation' => 'AND' ), $tax_query ) );
	}

	/**
	 * Exclude child pages of parents that protect them.
	 *
	 * @param \WP_Query $query The WP_Query instance.
	 * @return void
	 */
	private function exclude_protected_children( $query ) {
		global $wpdb;

		// Direct query: get_posts() would skip post types and statuses that can still be parents.
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
		$parent_ids = $wpdb->get_col(
			$wpdb->prepare(
				"SELECT a.post_id FROM {$wpdb->postmeta} a
				INNER JOIN {$wpdb->postmeta} b ON b.post_id = a.post_id AND b.meta_key = %s AND b.meta_value NOT IN ( '', '0' )
				WHERE a.meta_key = %s AND a.meta_value NOT IN ( '', '0' )",
				'passster_protect_child_pages',
				self::PASSTER_META_KEY
			)
		);

		if ( ! $parent_ids ) {
			return;
		}

		$query->set( 'post_parent__not_in', array_merge( (array) $query->get( 'post_parent__not_in', array() ), array_map( 'intval', $parent_ids ) ) );
	}

	/**
	 * Posts holding a Passster shortcode or block are matched on title and excerpt only, since their
	 * stored content contains the hidden section and its password.
	 *
	 * @param string    $search Search SQL for the WHERE clause.
	 * @param \WP_Query $query  The WP_Query instance.
	 * @return string
	 */
	public function skip_protected_sections_in_search( $search, $query ) {
		global $wpdb;

		if ( '' === trim( (string) $search ) || ! $this->should_exclude_from_search( $query ) ) {
			return $search;
		}

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
		$section_ids = $wpdb->get_col( $wpdb->prepare( "SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key = %s", self::HAS_SECTION_META_KEY ) );
		if ( ! $section_ids ) {
			return $search;
		}

		$has_section = "{$wpdb->posts}.ID IN (" . implode( ',', array_map( 'intval', $section_ids ) ) . ')';

		$columns = $query->get( 'search_columns' );
		$columns = array_diff( empty( $columns ) ? array( 'post_title', 'post_excerpt', 'post_content' ) : (array) $columns, array( 'post_content' ) );

		$public_search = $columns ? $this->build_search_sql( $query, $columns ) : '';
		if ( '' === trim( $public_search ) ) {
			$public_search = ' AND 1=0 ';
		}

		return " AND ( ( NOT {$has_section} {$search} ) OR ( {$has_section} {$public_search} ) ) ";
	}

	/**
	 * Core's search SQL for the same search, limited to the given columns.
	 *
	 * @param \WP_Query $query   The WP_Query instance.
	 * @param array     $columns Columns to search.
	 * @return string
	 */
	private function build_search_sql( $query, array $columns ): string {
		$vars = array(
			// Core already unslashed the term on the original query and unslashes it again here.
			's'              => wp_slash( (string) $query->get( 's' ) ),
			'sentence'       => $query->get( 'sentence' ),
			'exact'          => $query->get( 'exact' ),
			'search_columns' => array_values( $columns ),
		);

		$builder = new class() extends \WP_Query {
			public function search_sql( array $vars ): string {
				return $this->parse_search( $vars );
			}
		};

		return $builder->search_sql( $vars );
	}

	/**
	 * Check if we should exclude protected posts from this query
	 *
	 * @param \WP_Query $query The WP_Query instance.
	 * @return boolean
	 */
	private function should_exclude_from_search( $query ) {
		// Skip if user is logged in as admin
		if ( current_user_can( 'manage_options' ) ) {
			return false;
		}

		// Check for regular search
		if ( ! is_admin() && $query->is_search() && $query->is_main_query() ) {
			return true;
		}

		// Check for REST API search
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST && ! empty( $query->query_vars['s'] ) ) {
			return true;
		}

		return false;
	}
}
