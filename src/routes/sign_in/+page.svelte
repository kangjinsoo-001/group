<script lang="ts">
  import { darkMode } from "$lib/store";
  import { t } from "$lib/locale/translations";

  import logoImage from "$lib/images/group-logo.png";
  import DarkLogoImage from "$lib/images/dark_mode_logo.png";
  import googleLogoImage from "$lib/images/google_logo.png";
  import naverLogoImage from "$lib/images/naver_logo.png";
  import kakaoLogoImage from "$lib/images/kakao_logo.png";
  import { Button } from "sveltestrap";

  let isDarkMode: boolean;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });
</script>

<svelte:head>
  <title>sign_in</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="sign-in-container">
  <section class="sub-container">
    <div class="logo-sign-in">
      <a href="/">
        <img src={isDarkMode ? DarkLogoImage : logoImage} alt="logo" />
      </a>
    </div>

    <div class="sign-in dark-container">
      <div class="sign-in-input">
        <h2 class="sub-title">{$t("common.id")}</h2>
        <div>
          <input type="email" placeholder={$t("sign_in.placeholder.email")} />
        </div>
      </div>

      <div class="sign-in-input last-child">
        <h2 class="sub-title">{$t("common.password")}</h2>
        <div>
          <input
            type="email"
            placeholder={$t("sign_in.placeholder.password")}
          />
        </div>
      </div>

      <Button class="button-regular" color="primary"
        >{$t("sign_in.logIn")}
      </Button>

      <aside class="another-sign-up-info">
        <div class="line" />
        <div class="info">{$t("sign_in.oAuthLogIn")}</div>
        <div class="line" />
      </aside>

      <aside class="another-sign-up">
        <div class="another-logo-container">
          <div class="container">
            <div class="another-logo google dark-logo">
              <img src={googleLogoImage} alt="google" />
            </div>
            <div class="another-text">Google</div>
          </div>
          <div class="container">
            <div class="another-logo naver dark-logo">
              <img src={naverLogoImage} alt="naver" />
            </div>
            <div class="another-text">Naver</div>
          </div>
          <div class="container">
            <div class="another-logo kakao dark-logo">
              <img src={kakaoLogoImage} alt="kako" />
            </div>
            <div class="another-text">Kakao</div>
          </div>
        </div>
      </aside>
    </div>

    <footer class="find-content">
      <div>{$t("sign_in.search.id")}</div>
      <div>|</div>
      <div>{$t("sign_in.search.password")}</div>
      <div>|</div>
      <a href="/sign_up">
        <div>{$t("sign_in.search.signUp")}</div>
      </a>
    </footer>
  </section>
</div>
