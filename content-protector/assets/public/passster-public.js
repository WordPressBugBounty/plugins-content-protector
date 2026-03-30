jQuery( document ).ready( function( $ ) {
	const restUrl = ps_ajax.rest_url + 'passster/v1';

	// Get cookie duration.
	function getDurationBySettings() {
		switch ( ps_ajax.cookie_duration_unit ) {
			case 'days':
				return parseInt( ps_ajax.cookie_duration );
			case 'hours':
				return new Date( new Date().getTime() + ( ps_ajax.cookie_duration * 60 ) * 60 * 1000 );
			case 'minutes':
				return new Date( new Date().getTime() + ps_ajax.cookie_duration * 60 * 1000 );
			default:
				return parseInt( ps_ajax.cookie_duration );
		}
	}

	// Get cache busting URL.
	function getCacheFriendlyURL() {
		const pts = 'pts=' + Math.floor( Date.now() / 1000 );
		const base = location.origin + location.pathname;
		const search = location.search ? location.search + '&' + pts : '?' + pts;
		const hash = location.hash || '';
		return base + search + hash;
	}

	// Hash password via REST API.
	async function hashPassword( password ) {
		try {
			const response = await fetch( restUrl + '/hash', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify( { password } ),
			} );
			const data = await response.json();
			return data.hash || '';
		} catch ( e ) {
			return '';
		}
	}

	// Get existing hashes from cookie as array.
	function getExistingHashes() {
		const existing = Cookies.get( 'passster' );
		if ( ! existing ) {
			return [];
		}
		// Support both old (single hash) and new (pipe-separated) format
		return existing.split( '|' ).filter( h => h.length > 0 );
	}

	// Set hashed cookie (appends to existing hashes).
	async function setHashedCookie( password ) {
		const hash = await hashPassword( password );
		if ( hash ) {
			const hashes = getExistingHashes();
			// Only add if not already present
			if ( ! hashes.includes( hash ) ) {
				hashes.push( hash );
			}
			Cookies.set( 'passster', hashes.join( '|' ), {
				expires: getDurationBySettings(),
				sameSite: 'strict',
			} );
		}
	}

	// Set simple cookie (for captcha) - appends to existing.
	function setCookie( value ) {
		const hashes = getExistingHashes();
		if ( ! hashes.includes( value ) ) {
			hashes.push( value );
		}
		Cookies.set( 'passster', hashes.join( '|' ), {
			expires: getDurationBySettings(),
			sameSite: 'strict',
		} );
	}

	// Handle successful unlock.
	function handleSuccess( data, $form, redirect, cookieValue ) {
		if ( ! ps_ajax.disable_cookie && cookieValue ) {
			setCookie( cookieValue );
		}

		if ( data.redirect ) {
			window.location.replace( data.redirect );
			return;
		}

		if ( ! ps_ajax.unlock_mode ) {
			window.location.href = getCacheFriendlyURL();
		} else {
			$form.find( '.passster-error' ).hide();
			if ( data.requires_reload ) {
				window.location.href = getCacheFriendlyURL();
				return;
			}
			if ( data.content ) {
				let content = data.content;
				if ( ps_ajax.shortcodes ) {
					$.each( ps_ajax.shortcodes, function( key, value ) {
						content = content.replace( key, value );
					} );
				}
				$form.replaceWith( content );
			}
			if ( redirect ) {
				window.location.replace( redirect );
			}
		}
	}

	// Show error.
	function showError( $form, message ) {
		const $error = $form.find( '.passster-error' );
		$error.text( message || 'An error occurred.' );
		$error.show().fadeOut( 3500 );
	}

	// Check if we have an unlock link.
	if ( ps_ajax.link_pass ) {
		if ( ! ps_ajax.disable_cookie ) {
			if ( ps_ajax.link_pass.length < 25 ) {
				setHashedCookie( atob( ps_ajax.link_pass ) ).then( () => {
					window.location.replace( ps_ajax.permalink + '?pts=' + Math.floor( Date.now() / 1000 ) );
				} );
			} else {
				setCookie( ps_ajax.link_pass );
				window.location.replace( ps_ajax.permalink + '?pts=' + Math.floor( Date.now() / 1000 ) );
			}
		}
	}

	// Password form submit - using REST API.
	$( '.passster-submit' ).on( 'click', async function( e ) {
		e.preventDefault();

		const $button = $( this );
		const psId = $button.attr( 'data-psid' );
		const $form = $( '#' + psId );
		const $input = $form.find( '.passster-password' );
		const postId = parseInt( $button.attr( 'data-post-id' ) ) || ps_ajax.post_id;

		// Validate form.
		const formEl = $form.find( 'form' )[ 0 ];
		if ( formEl && ! formEl.checkValidity() ) {
			formEl.reportValidity();
			return;
		}

		// Get form data.
		const password = $input.val();
		const type = ( $input.attr( 'data-protection-type' ) || 'password' ).replace( /-/g, '_' );
		const areaId = parseInt( $input.attr( 'data-area' ) ) || 0;
		const listId = parseInt( $input.attr( 'data-list' ) ) || 0;
		const lists = $input.attr( 'data-lists' ) || '';
		const protection = $input.attr( 'data-protection' ) || '';
		const acf = $button.attr( 'data-acf' ) || '';
		const redirect = $button.attr( 'data-redirect' ) || '';
		const termId = parseInt( $button.attr( 'data-term-id' ) ) || 0;

		// Get block ID from parent wrapper if exists.
		const $wrapper = $form.closest( '.passster-protected-content' );
		const blockId = $wrapper.length ? $wrapper.attr( 'data-block-id' ) : '';

		$form.find( '.ps-loader' ).css( 'display', 'block' );

		try {
			const response = await fetch( restUrl + '/unlock', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify( {
					password,
					type,
					post_id: postId,
					area_id: areaId,
					block_id: blockId,
					list_id: listId,
					lists,
					protection,
					acf,
					redirect,
					term_id: termId,
				} ),
			} );

			const data = await response.json();
			$form.find( '.ps-loader' ).css( 'display', 'none' );
			if ( data.success ) {
				if ( ! ps_ajax.disable_cookie ) {
					await setHashedCookie( password );
				}
				handleSuccess( data, $form, redirect, null );
			} else {
				showError( $form, data.error );
				$input.val( '' );
			}
		} catch ( err ) {
			$form.find( '.ps-loader' ).css( 'display', 'none' );
			showError( $form, 'An error occurred. Please try again.' );
		}
	} );

	// Captcha validation via REST API.
	async function validateCaptcha( token, type, $form, psId, areaId, redirect, protection ) {
		try {
			const response = await fetch( restUrl + '/captcha', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify( {
					token,
					type,
					post_id: ps_ajax.post_id,
					area_id: areaId,
					redirect,
					protection: protection || '',
				} ),
			} );

			const data = await response.json();

			if ( data.success ) {
				handleSuccess( data, $form, redirect, type.replace( '_v2', '' ).replace( '_v3', '' ) );
			} else {
				showError( $form, data.error );
			}
		} catch ( err ) {
			showError( $form, 'Captcha validation failed.' );
		}
	}

	// Recaptcha v2
	if ( $( '.recaptcha-form-v2' ).length > 0 && window.grecaptcha ) {
		grecaptcha.ready( function() {
			grecaptcha.render( 'ps-recaptcha-v2', {
				sitekey: ps_ajax.recaptcha_key,
				callback( token ) {
					const psId = $( '.recaptcha-v2-submit' ).attr( 'data-psid' );
					const $form = $( '#' + psId );
					const $btn = $form.find( '.recaptcha-v2-submit' );
					const areaId = parseInt( $btn.attr( 'data-area' ) ) || 0;
					const redirect = $btn.attr( 'data-redirect' ) || '';
					const protection = $btn.attr( 'data-protection' ) || '';

					validateCaptcha( token, 'recaptcha_v2', $form, psId, areaId, redirect, protection );
				},
			} );
		} );
	}

	// ReCaptcha v3
	$( '.recaptcha-form' ).on( 'submit', function( event ) {
		event.preventDefault();

		const $thisForm = $( this );
		const $btn = $thisForm.find( '.passster-submit-recaptcha' );
		const psId = $btn.attr( 'data-psid' );
		const $form = $( '#' + psId );
		const areaId = parseInt( $btn.attr( 'data-area' ) ) || 0;
		const redirect = $btn.attr( 'data-redirect' ) || '';
		const protection = $btn.attr( 'data-protection' ) || '';

		if ( window.grecaptcha ) {
			grecaptcha.ready( function() {
				grecaptcha.execute( ps_ajax.recaptcha_key, { action: 'validate_input' } ).then( function( token ) {
					validateCaptcha( token, 'recaptcha_v3', $form, psId, areaId, redirect, protection );
				} );
			} );
		}
	} );

	// hCaptcha
	$( '.hcaptcha-form' ).on( 'submit', function( event ) {
		event.preventDefault();

		const $thisForm = $( this );
		const $btn = $thisForm.find( '.passster-submit-recaptcha' );
		const psId = $btn.attr( 'data-psid' );
		const $form = $( '#' + psId );
		const areaId = parseInt( $btn.attr( 'data-area' ) ) || 0;
		const redirect = $btn.attr( 'data-redirect' ) || '';
		const protection = $btn.attr( 'data-protection' ) || '';

		if ( window.hcaptcha ) {
			hcaptcha.execute( { async: true } )
				.then( ( { response } ) => {
					validateCaptcha( response, 'hcaptcha', $form, psId, areaId, redirect, protection );
				} )
				.catch( ( err ) => {
					showError( $form, err.message || 'hCaptcha error' );
				} );
		}
	} );

	// Turnstile
	if ( $( '.turnstile-form' ).length > 0 && window.turnstile ) {
		window.turnstile.ready( function() {
			window.turnstile.render( '.passster-turnstile', {
				sitekey: ps_ajax.turnstile_key,
				callback( token ) {
					const $btn = $( '.passster-submit-turnstile' );
					const psId = $btn.attr( 'data-psid' );
					const $form = $( '#' + psId );
					const areaId = parseInt( $btn.attr( 'data-area' ) ) || 0;
					const redirect = $btn.attr( 'data-redirect' ) || '';
					const protection = $btn.attr( 'data-protection' ) || '';

					validateCaptcha( token, 'turnstile', $form, psId, areaId, redirect, protection );
				},
			} );
		} );
	}

	// Concurrent logout - using REST API.
	$( document ).on( 'click', '#ps-logout', async function() {
		try {
			const response = await fetch( restUrl + '/logout', {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json' },
			} );
			const data = await response.json();
			if ( data.success ) {
				Cookies.set( 'passster', '', { expires: 0, sameSite: 'strict' } );
				window.location.href = getCacheFriendlyURL();
			}
		} catch ( e ) {
			window.location.href = getCacheFriendlyURL();
		}
	} );
} );
