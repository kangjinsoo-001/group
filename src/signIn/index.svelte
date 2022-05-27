<script lang="ts">
  import { Link } from "svelte-navigator";

  const logoImage: string = "image/group-logo.png";
  const googleLogoImage: string = "image/google_logo.png";
  const naverLogoImage: string = "image/naver_logo.png";
  const kakaoLogoImage: string = "image/kakao_logo.png";
</script>

<div class="sign-in-container">
  <div class="sub-container">
    <div class="logo-sign-in">
      <Link to="/">
        <img src={logoImage} alt="logo" />
      </Link>
    </div>

    <div class="sign-in">
      <div class="sign-in-input">
        <div class="sub-title">아이디</div>
        <div>
          <input type="email" placeholder="이메일을 입력해주세요." />
        </div>
      </div>

      <div class="sign-in-input">
        <div><div class="sub-title">비밀번호</div></div>
        <div>
          <input type="email" placeholder="비밀번호를 입력해주세요." />
        </div>
      </div>

      <div class="button-regular">
        <div>로그인</div>
      </div>

      <div class="another-sign-up-info">
        <div class="line" />
        <div class="info">다른 계정으로 로그인</div>
        <div class="line" />
      </div>

      <div class="another-sign-up">
        <div class="another-logo-container">
          <div class="container">
            <div class="another-logo google">
              <img src={googleLogoImage} alt="google" />
            </div>
            <div class="another-text">Google</div>
          </div>
          <div class="container">
            <div class="another-logo naver">
              <img src={naverLogoImage} alt="naver" />
            </div>
            <div class="another-text">Naver</div>
          </div>
          <div class="container">
            <div class="another-logo kakao">
              <img src={kakaoLogoImage} alt="kako" />
            </div>
            <div class="another-text">Kakao</div>
          </div>
        </div>
      </div>
    </div>
    <div class="find-content">
      <div>비밀번호 찾기</div>
      <div>|</div>
      <div>아이디 찾기</div>
      <div>|</div>
      <Link to="/sign_up">
        <div>회원가입</div>
      </Link>
    </div>
  </div>
</div>
