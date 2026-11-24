<div class="passster-form[PASSSTER_HIDE]" id="[PASSSTER_ID]">
    <form class="turnstile-form" method="post" autocomplete="off" target="_top">
        <h4>[PASSSTER_FORM_HEADLINE]</h4>
        <p>[PASSSTER_FORM_INSTRUCTIONS]</p>
        <fieldset>
            <div class="passster-turnstile" data-field-type="turnstile" data-sitekey="[PASSSTER_SITE_KEY]"></div>
            <button name="submit" type="submit" class="passster-submit-turnstile" data-psid="[PASSSTER_ID]"
                    [PASSSTER_ACF] data-protection="[PASSSTER_PROTECTION]" data-submit="...Checking Password"
                    data-area="[PASSSTER_AREA]" data-redirect="[PASSSTER_REDIRECT]">[PASSSTER_BUTTON_LABEL]
            </button>
            <div class="passster-error"></div>
        </fieldset>
    </form>
</div>