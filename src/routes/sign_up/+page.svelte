<script lang="ts">
  import { darkMode } from "$lib/store";
  import logoImage from "$lib/images/group-logo.png";
  import DarkLogoImage from "$lib/images/dark_mode_logo.png";
  //   import { t } from "$lib/translations";
  import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";

  type Procedure = "first" | "second" | "third" | "fourth";
  let procedure: Procedure = "first";
  let isDarkMode: boolean;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

  function handleChange(value: Procedure, order: "asc" | "desc") {
    switch (value) {
      case "first":
        procedure = order === "asc" ? "second" : "first";
        break;
      case "second":
        procedure = order === "asc" ? "third" : "first";
        break;
      case "third":
        procedure = order === "asc" ? "fourth" : "second";
        break;
      case "fourth":
        procedure = order === "asc" ? "fourth" : "third";
        break;
      default:
        break;
    }
  }
</script>

<div class="sign-in-container">
  <div class="sub-container sign-up">
    <div class="logo-sign-up">
      <a href="/">
        <img src={isDarkMode ? DarkLogoImage : logoImage} alt="logo" />
      </a>
    </div>
    <div class="sign-up-container dark-container">
      <div class="sign-up-sec-info">{"회원가입"}</div>
      <div class="sign-up-info-container">
        <div class="info">
          <!-- {$t(`sign_up.title.${procedure}`).split("\n")[0]} -->
        </div>
        <div class="info sec">
          <!-- {$t(`sign_up.title.${procedure}`).split("\n")[1]} -->
        </div>
      </div>
      <div class="sign-in-input">
        <div class="sign-up-email-input">
          {#if procedure === "first"}
            <input
              class="mr10"
              type="email"
              placeholder={"이메일을 입력해주세요."}
            />
            <Dropdown class="select-email">
              <DropdownToggle caret>이메일을 선택하세요</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>이메일</DropdownItem>
                <DropdownItem>naver.com</DropdownItem>
                <DropdownItem>gmail.com</DropdownItem>
                <DropdownItem>nate.com</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          {:else if procedure === "second"}
            <input type="email" placeholder={"6자리 코드를 입력해주세요."} />
          {:else if procedure === "third"}
            <input type="email" placeholder={"닉네임을 입력해주세요."} />
          {/if}
        </div>
      </div>
      <div class="flc jsb mt20">
        {#if procedure !== "first"}
          <div
            class="go-back-btn"
            on:click={() => handleChange(procedure, "desc")}
            on:keypress={() => handleChange(procedure, "desc")}
          >
            {"뒤로가기"}
          </div>
        {:else}
          <div />
        {/if}
        {#if procedure === "fourth"}
          <a href="/">
            <Button
              class="basic-btn"
              on:click={() => handleChange(procedure, "asc")}
              >{"메인페이지로"}</Button
            >
          </a>
        {:else}
          <Button
            color="primary"
            class="basic-btn"
            on:click={() => handleChange(procedure, "asc")}>{"다음"}</Button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
