<script lang="ts">
  import { darkMode } from "$lib/store";
  import { t } from "$lib/locale/translations";
  import logoImage from "$lib/images/group-logo.png";
  import DarkLogoImage from "$lib/images/dark_mode_logo.png";
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
      <div class="sign-up-sec-info">{$t("sign_up.signUp")}</div>
      <div class="sign-up-info-container">
        <div class="info">
          {$t(`sign_up.title.${procedure}`).split("\n")[0]}
        </div>
        <div class="info sec">
          {$t(`sign_up.title.${procedure}`).split("\n")[1]}
        </div>
      </div>
      <div class="sign-in-input">
        <div class="sign-up-email-input">
          {#if procedure === "first"}
            <input
              class="mr10"
              type="email"
              placeholder={$t("sign_up.placeholder.email")}
            />
            <Dropdown class="select-email">
              <DropdownToggle caret>{$t("sign_up.selectEmail")}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{$t("common.email")}</DropdownItem>
                <DropdownItem>naver.com</DropdownItem>
                <DropdownItem>gmail.com</DropdownItem>
                <DropdownItem>nate.com</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          {:else if procedure === "second"}
            <input type="email" placeholder={$t("sign_up.placeholder.code")} />
          {:else if procedure === "third"}
            <input
              type="email"
              placeholder={$t("sign_up.placeholder.nickName")}
            />
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
            {$t("sign_up.goBack")}
          </div>
        {:else}
          <div />
        {/if}
        {#if procedure === "fourth"}
          <a href="/">
            <Button
              class="basic-btn"
              on:click={() => handleChange(procedure, "asc")}
            >
              {$t("sign_up.toMainPage")}</Button
            >
          </a>
        {:else}
          <Button
            color="primary"
            class="basic-btn"
            on:click={() => handleChange(procedure, "asc")}
            >{$t("sign_up.next")}</Button
          >
        {/if}
      </div>
    </div>
  </div>
</div>
