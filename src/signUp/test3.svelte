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
        <div class="info">000님, 반갑습니다.</div>
        <div class="info sec">회원가입에 성공했습니다.</div>
      </div>
      <div class="flc jsb">
        <Link to="/sign_up3">
          <div class="go-back-btn">뒤로가기</div>
        </Link>
        <Link to="/">
          <div class="basic-btn">메인페이지로</div>
        </Link>
      </div>
    </div>
  </div>
</div>
