<script lang="ts">
  import logoImage from "$lib/images/group_logo_gray.png";
  import { darkMode } from "$lib/store";
  //   import { t } from "$lib/translations";
  // // import {
  // // 	Navbar,
  // // 	NavbarBrand,
  // // 	Nav,
  // // 	NavItem,
  // // 	NavLink,
  // // 	Dropdown,
  // // 	DropdownToggle,
  // // 	DropdownMenu,
  // // 	DropdownItem,
  // // 	FormGroup,
  // // 	Input,
  // // 	Button
  // } from "sveltestrap";
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
    darkMode.update((value) => !value);
  }
</script>

<!-- <header>
	<div class="nav-bar">
		<Navbar class="nav-bar-sec dark-container" light expand="md">
			<NavbarBrand href="/"
				><img class="main-logo" src={logoImage} alt="logo" /></NavbarBrand
			>
			<Nav class="nav-input flc jcc" navbar>
				<FormGroup>
					<Input
						class="mb-none"
						type="search"
						name="search"
						placeholder={$t("layout.placeholder.search")}
					/>
				</FormGroup>
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>{$t("layout.writing")}</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem>{$t("layout.dropDown.write")}</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>{$t("layout.dropDown.picture")}</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>{$t("layout.dropDown.video")}</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<NavItem>
					<NavLink href="sign_in">{$t("layout.logIn")}</NavLink>
				</NavItem>
				<Button on:click={toggle}>다크모드</Button>
			</Nav>
		</Navbar>
	</div>
</header> -->
<header class="p-3 nav-bar text-bg-dark">
  <div class="container">
    <div
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
    >
      <a
        href="/"
        class="d-flex align-items-center mr-2 mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <img class="main-logo" src={logoImage} alt="logo" />
      </a>

      <ul
        class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
      />

      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          class="form-control form-control-dark text-bg-dark"
          placeholder="검색어를 입력하세요"
          aria-label="Search"
        />
      </form>

      <div class="text-end">
        <button type="button" class="btn btn-outline-light me-2"
          >{"글쓰기"}</button
        >
        <button type="button" class="btn btn-primary me-2">{"로그인"}</button>
        <button type="button" on:click={toggle} class="btn btn-secondary"
          >다크모드</button
        >
      </div>
    </div>
  </div>
</header>

<style>
  .main-logo {
    cursor: pointer;
    width: 120px;
    margin-top: 10px;
  }

  .nav-bar {
    background-color: #272728 !important;
    border: 1px solid #3c3c43 !important;
    padding: 5px 20px;
    width: 100%;
  }

  :global(body) {
    background-color: #ffffff;
    color: #0084f6;
  }
  :global(body.dark-mode) {
    background-color: #181819;
    color: #bfc2c7;
  }
</style>
