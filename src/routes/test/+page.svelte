<script lang="ts">
  import Ranking from "$lib/components/Ranking.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  import { Col, Container, Row } from "sveltestrap";
  // import dieterRamsFirst from "$lib/image/dieter_rams_first.png";
  // import dieterRamsSec from "$lib/image/dieter_rams_sec.png";

  type Todo = {
    uid: string;
    created_at: Date;
    text: string;
    done: boolean;
    pending_delete: boolean;
  };

  // export let todos: Todo[];
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
