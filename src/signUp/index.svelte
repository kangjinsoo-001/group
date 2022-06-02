<script lang="ts">
  import { Link } from "svelte-navigator";

  const logoImage: string = "image/group_logo_gray.png";
</script>

<div class="sign-in-container">
  <div class="sub-container">
    <div class="logo-sign-up">
      <Link to="/">
        <img src={logoImage} alt="logo" />
      </Link>
    </div>
    <div class="sign-up-container">
      <div class="sign-up-sec-info">회원가입</div>
      <div class="sign-up-info-container">
        <div class="info">연동할 이메일을</div>
        <div class="info sec">입력해주세요.</div>
      </div>
      <div class="sign-in-input">
        <div class="sign-up-email-input">
          <input
            class="mr10"
            type="email"
            placeholder="이메일을 입력해주세요."
          />
          <input type="email" placeholder="이메일을 입력해주세요." />
        </div>
      </div>
      <div class="flc jsb">
        <div class="go-back-btn">뒤로가기</div>
        <div class="basic-btn">다음</div>
      </div>
    </div>
  </div>
</div>
