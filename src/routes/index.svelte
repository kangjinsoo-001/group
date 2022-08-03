<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Ranking from "$lib/components/Ranking.svelte";
	import { Col, Container, Row } from "sveltestrap";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Container>
	<Row><Col xs="7">1</Col><Col xs="5"><Ranking /></Col></Row>
</Container>
