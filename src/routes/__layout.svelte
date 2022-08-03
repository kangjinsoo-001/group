<script context="module">
	import { locale, loadTranslations } from "$lib/translations";

	export const load = async ({ url }) => {
		const { pathname } = url;

		const defaultLocale = "ko"; // get from cookie, user session, ...

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		return {};
	};
</script>

<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../app.css";
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
	</p>
</footer>

<style global lang="scss">
	@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>
