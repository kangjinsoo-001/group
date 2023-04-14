<script lang="ts">
  import { darkMode } from "$lib/store";
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
        <h2 class="sub-title">아이디</h2>
        <div>
          <input type="email" placeholder="이메일을 입력해주세요." />
        </div>
      </div>

      <div class="sign-in-input last-child">
        <h2 class="sub-title">비밀번호</h2>
        <div>
          <input type="email" placeholder="비밀번호를 입력해주세요." />
        </div>
      </div>

      <Button class="button-regular" color="primary">로그인</Button>

      <aside class="another-sign-up-info">
        <div class="line" />
        <div class="info">다른 계정으로 로그인</div>
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
      <div>비밀번호 찾기</div>
      <div>|</div>
      <div>아이디 찾기</div>
      <div>|</div>
      <a href="/sign_up">
        <div>회원가입</div>
      </a>
    </footer>
  </section>
</div>
