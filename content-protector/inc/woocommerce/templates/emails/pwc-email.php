<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * @hooked WC_Emails::email_header() Output the email header
*/
do_action( 'woocommerce_email_header', $email_heading, $email );

/**
 * Show user-defined additional content - this is set in each email's settings.
 */

$options = get_option( 'woocommerce_pwc_email_settings' );

if ( isset( $options['additional_content'] ) && ! empty( $options['additional_content'] ) ) {
	echo wp_kses_post( wpautop( wptexturize( $options['additional_content'] ) ) );
}

// Output the email content.
?>

<?php if ( count( $passwords ) > 1 ) : ?>
    <h4><?php esc_html_e( 'We generated these personal passwords for you', 'content-protector' ); ?></h4>
<?php else: ?>
    <h4><?php esc_html_e( 'We generated a personal password for you', 'content-protector' ); ?></h4>
<?php endif; ?>

    <p>
		<?php foreach ( $passwords as $product_id => $data ) : ?>
            <span>
			<strong><?php esc_html_e( 'Product', 'content-protector' ); ?></strong>: <?php echo esc_html( $data['product_name'] ?? get_the_title( $product_id ) ); ?><br>
			<strong><?php esc_html_e( 'Password', 'content-protector' ); ?></strong>: <?php echo esc_html( $data['password'] ); ?><br>
			<?php if ( isset( $data['unlock_link'] ) && isset( $data['page_id'] ) ) : ?>
                <strong><?php esc_html_e( 'Unlock', 'content-protector' ); ?></strong>: <a
                        href="<?php echo esc_url( $data['unlock_link'] ); ?>"><?php echo esc_html( get_the_title( $data['page_id'] ) ); ?></a>
			<?php endif; ?>
		</span>
		<?php endforeach; ?>
    </p>

<?php
/*
* @hooked WC_Emails::email_footer() Output the email footer
*/
do_action( 'woocommerce_email_footer', $email );