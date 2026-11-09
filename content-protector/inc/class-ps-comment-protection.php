<?php

namespace passster;

use Exception;

/**
 * Keeps the comments of a locked post away from visitors who haven't unlocked it.
 */
class PS_Comment_Protection {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_Comment_Protection.
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
	 * Constructor for PS_Comment_Protection
	 */
	public function __construct() {
		// Every WP_Comment_Query: classic threads, the Comments block, widgets, REST lists.
		add_filter( 'the_comments', array( $this, 'filter_comments' ) );
		// Comment feeds query the database directly, bypassing WP_Comment_Query.
		add_action( 'template_redirect', array( $this, 'filter_feed_comments' ) );

		add_filter( 'get_comments_number', array( $this, 'filter_comments_number' ), 10, 2 );
		add_filter( 'comments_open', array( $this, 'filter_comments_open' ), 10, 2 );
		add_filter( 'pings_open', array( $this, 'filter_comments_open' ), 10, 2 );

		add_filter( 'rest_comment_query', array( $this, 'filter_rest_query' ) );
		add_filter( 'rest_prepare_comment', array( $this, 'filter_rest_comment' ), 10, 2 );
	}

	/**
	 * Whether a post is locked for the current visitor.
	 *
	 * @param int $post_id Post ID.
	 *
	 * @return bool
	 * @throws Exception
	 */
	private function is_locked( int $post_id ): bool {
		return ! current_user_can( 'moderate_comments' ) && PS_Public::get_instance()->is_post_locked( $post_id );
	}

	/**
	 * Remove the comments of locked posts from a list.
	 *
	 * @param array $comments Comment objects.
	 *
	 * @return array
	 * @throws Exception
	 */
	public function filter_comments( $comments ) {
		return array_values(
			array_filter(
				(array) $comments,
				function ( $comment ) {
					return ! $this->is_locked( (int) $comment->comment_post_ID );
				}
			)
		);
	}

	/**
	 * Remove the comments of locked posts from the site-wide and the per-post comment feeds.
	 *
	 * @return void
	 * @throws Exception
	 */
	public function filter_feed_comments() {
		global $wp_query;

		if ( is_comment_feed() && ! empty( $wp_query->comments ) ) {
			$wp_query->comments      = $this->filter_comments( $wp_query->comments );
			$wp_query->comment_count = count( $wp_query->comments );
		}
	}

	/**
	 * @param int|string $count   Number of comments.
	 * @param int        $post_id Post ID.
	 *
	 * @return int|string
	 * @throws Exception
	 */
	public function filter_comments_number( $count, $post_id ) {
		return $this->is_locked( (int) $post_id ) ? 0 : $count;
	}

	/**
	 * Close comments and pings, which also makes WordPress reject a direct submission.
	 *
	 * @param bool $open    Whether it's open.
	 * @param int  $post_id Post ID.
	 *
	 * @return bool
	 * @throws Exception
	 */
	public function filter_comments_open( $open, $post_id ) {
		return $open && ! $this->is_locked( (int) $post_id );
	}

	/**
	 * Exclude locked posts from the query itself, so a search and X-WP-Total can't reveal what a comment says.
	 *
	 * @param array $args WP_Comment_Query arguments.
	 *
	 * @return array
	 * @throws Exception
	 */
	public function filter_rest_query( $args ) {
		if ( empty( $args['search'] ) && empty( $args['post__in'] ) ) {
			return $args;
		}

		$post_ids = empty( $args['search'] ) ? array_map( 'absint', (array) $args['post__in'] ) : $this->get_matching_post_ids( $args );
		$locked   = array_values( array_filter( $post_ids, array( $this, 'is_locked' ) ) );

		if ( $locked ) {
			$args['post__not_in'] = array_merge( (array) ( $args['post__not_in'] ?? array() ), $locked );
		}

		return $args;
	}

	/**
	 * Posts of all the comments a REST query would match, across all its pages.
	 *
	 * @param array $args WP_Comment_Query arguments.
	 *
	 * @return array
	 */
	private function get_matching_post_ids( array $args ): array {
		global $wpdb;

		// Asking for IDs only skips the_comments, which would already drop the locked ones.
		$comment_ids = get_comments(
			array_merge(
				$args,
				array(
					'fields'        => 'ids',
					'number'        => '',
					'offset'        => '',
					'no_found_rows' => true,
				)
			)
		);

		if ( ! $comment_ids ) {
			return array();
		}

		$comment_ids = implode( ',', array_map( 'absint', $comment_ids ) );

		// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared -- integers only.
		return array_map( 'absint', $wpdb->get_col( "SELECT DISTINCT comment_post_ID FROM {$wpdb->comments} WHERE comment_ID IN ( {$comment_ids} )" ) );
	}

	/**
	 * Refuse reading a single comment of a locked post.
	 *
	 * @param \WP_REST_Response $response REST response.
	 * @param \WP_Comment       $comment  Comment object.
	 *
	 * @return \WP_REST_Response|\WP_Error
	 * @throws Exception
	 */
	public function filter_rest_comment( $response, $comment ) {
		if ( ! $this->is_locked( (int) $comment->comment_post_ID ) ) {
			return $response;
		}

		return new \WP_Error(
			'rest_forbidden',
			__( 'This content is password-protected.', 'content-protector' ),
			array( 'status' => rest_authorization_required_code() )
		);
	}
}
