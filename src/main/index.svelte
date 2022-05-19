<script lang="ts">
  import { Link } from "svelte-navigator";

  const logoImage: string = "image/group-logo.png";
</script>

<div class="header" id="header">
  <div class="header-container">
    <div class="main-logo">
      <div>
        <Link to="/"><img src={logoImage} alt="logo" /></Link>
      </div>
    </div>
    <div class="category">
      <div>마이페이지</div>
      <div>
        <Link to="sign_in">로그인</Link>
      </div>
      <div>나이트모드</div>
    </div>
  </div>
</div>
<div class="main-container">
  <div class="container">
    <div class="word">
      <div class="word-container">
        <div>
          <div>좋은 디자인은</div>
          <div>
            <div>불필요한 관심을 끌지 않는다.</div>
          </div>
        </div>
        <div class="dieter-rams-img">
          <img src="./image/dieter_rams_first.png" alt="" />
          <img src="./image/dieter_rams_sec.png" alt="" />
          <div>
            <div class="important">난 중요해 🔥</div>
          </div>
          <div>
            <div class="important reverse">난 없어도 돼</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="for-height" />
</div>
