import {
	Button,
	Card,
	CardBody,
	CardHeader,
	__experimentalSpacer as Spacer,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

const { __ } = wp.i18n;

function WooIntegrationSettings() {
	const [ isCollapsed, setIsCollapsed ] = useState( false );

	return (
		<div className={ 'inner-settings' }>
			<Card>
				<CardHeader
					onClick={ () => setIsCollapsed( ! isCollapsed ) }
					className="header_collapse"
				>
					<span>{ __( 'WooCommerce Integration', 'content-protector' ) }</span>
					<span>
						{ isCollapsed ? (
							<span className="dashicons dashicons-arrow-up-alt2" />
						) : (
							<span className="dashicons dashicons-arrow-down-alt2" />
						) }
					</span>
				</CardHeader>
				{ ! isCollapsed && (
					<CardBody>
						{ __( 'Enable protection features in your WooCommerce store through Passster.', 'content-protector' ) }
						<ul className="upsell-settings-list">
							<li className="upsell-settings-list-item">{ __( 'Protect your entire store.', 'content-protector' ) }</li>
							<li className="upsell-settings-list-item">{ __( 'Protect individual products.', 'content-protector' ) }</li>
						</ul>
						<Spacer margin={ 10 } />
						<div>
							<Button
								href="https://passster.com/#free-vs-pro"
								target="_blank"
								className="button"
								style={ { marginRight: '10px' } }
							>
								{ __( 'Free vs Premium', 'content-protector' ) }
							</Button>
							<Button
								href="https://passster.com/#pricing"
								target="_blank"
								className="button-primary button"
							>
								{ __( 'Get Premium!', 'content-protector' ) }
							</Button>
						</div>
					</CardBody>
				) }
			</Card>
			<Spacer margin={ 5 } />
		</div>
	);
}

export default WooIntegrationSettings;
