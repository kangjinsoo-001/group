<script context="module">
	import { browser, dev } from "$app/env";

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import logoImage from "$lib/image/group-logo.png";
	import dieterRamsFirst from "$lib/image/dieter_rams_first.png";
	import dieterRamsSec from "$lib/image/dieter_rams_sec.png";
	import { t } from "$lib/translations";
</script>

<svelte:head>
	<title>main</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="header" id="header">
	<div class="header-container">
		<div class="main-logo">
			<div>
				<a href="/"><img src={logoImage} alt="logo" /></a>
			</div>
		</div>
		<div class="category">
			<div>{$t("main.myPage")}</div>
			<div>
				<a href="sign_in">{$t("main.logIn")}</a>
			</div>
			<div>{$t("main.nightMode")}</div>
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
					<img src={dieterRamsFirst} alt="" />
					<img src={dieterRamsSec} alt="" />
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
