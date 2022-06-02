<script lang="ts">
  import { Link } from "svelte-navigator";

  const logoImage: string = "image/group_logo_gray.png";
</script>

<div class="sign-in-container">
  <div class="sub-container sign-up">
    <div class="logo-sign-up">
      <Link to="/">
        <img src={logoImage} alt="logo" />
      </Link>
    </div>
    <div class="sign-up-container">
      <div class="sign-up-sec-info">회원가입</div>
      <div class="sign-up-info-container">
        <div class="info">이메일로 발송된</div>
        <div class="info sec">6자리 코드를 입력해주세요.</div>
      </div>
      <div class="sign-in-input">
        <div class="sign-up-email-input">
          <input type="email" placeholder="6자리 코드를 입력해주세요." />
        </div>
      </div>
      <div class="flc jsb">
        <Link to="/sign_up">
          <div class="go-back-btn">뒤로가기</div>
        </Link>
        <Link to="/sign_up3">
          <div class="basic-btn">다음</div>
        </Link>
      </div>
    </div>
  </div>
</div>
