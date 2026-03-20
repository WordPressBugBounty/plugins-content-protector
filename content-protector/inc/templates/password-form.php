<div class="passster-form[PASSSTER_HIDE]" id="[PASSSTER_ID]">
    <form class="password-form" method="post" autocomplete="off" target="_top">
        <h4 class="ps-form-headline">[PASSSTER_FORM_HEADLINE]</h4>
        <div class="ps-form-instructions-wrap">[PASSSTER_FORM_INSTRUCTIONS]</div>
        <fieldset>
            <label for="input-[PASSSTER_ID]" style="display:none;">Enter your password</label>
            <input placeholder="[PASSSTER_PLACEHOLDER]" type="password" tabindex="1" name="[PASSSTER_AUTH]"
                   id="input-[PASSSTER_ID]" class="passster-password" autocomplete="off"
                   data-protection-type="[PASSSTER_TYPE]" data-list="[PASSSTER_LIST]" data-lists="[PASSSTER_LISTS]" data-area="[PASSSTER_AREA]"
                   data-protection="[PASSSTER_PROTECTION]">
            [PASSSTER_SHOW_PASSWORD]
            <button name="submit" type="submit" class="passster-submit" data-psid="[PASSSTER_ID]" data-post-id="[PASSSTER_POST_ID]" [PASSSTER_ACF]
                    data-submit="...Checking Password" data-redirect="[PASSSTER_REDIRECT]">[PASSSTER_BUTTON_LABEL]
            </button>
            <div class="passster-error"></div>
        </fieldset>
    </form>
</div>
