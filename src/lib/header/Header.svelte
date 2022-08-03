<script lang="ts">
	import logoImage from "$lib/image/group-logo.png";
	import { t } from "$lib/translations";
	import {
		Navbar,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,
		FormGroup,
		Input
	} from "sveltestrap";
</script>

<header>
	<Navbar color="light" light expand="md">
		<NavbarBrand href="/"
			><img class="main-logo" src={logoImage} alt="logo" /></NavbarBrand
		>
		<Nav class="ms-auto" navbar>
			<FormGroup>
				<Input
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
		</Nav>
	</Navbar>
</header>

<style>
	.main-logo {
		cursor: pointer;
		width: 120px;
		margin-top: 10px;
	}
</style>
