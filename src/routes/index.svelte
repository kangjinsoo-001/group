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
	import Ranking from "$lib/components/Ranking.svelte";
	import PostCard from "$lib/components/PostCard.svelte";
	import { Col, Container, Row } from "sveltestrap";
	import dieterRamsFirst from "$lib/image/dieter_rams_first.png";
	import dieterRamsSec from "$lib/image/dieter_rams_sec.png";

	type Todo = {
		uid: string;
		created_at: Date;
		text: string;
		done: boolean;
		pending_delete: boolean;
	};

	export let todos: Todo[];
</script>

<svelte:head>
	<title>main</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container class="mt40 main-container">
	<Row>
		<Col xs="12" md="8"><PostCard /></Col>
		<Col xs="0" md="4">
			<Ranking />
		</Col>
	</Row>
</Container>

<style>
	@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>
