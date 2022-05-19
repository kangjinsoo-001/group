<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Main from "./main/index.svelte";
  import SignIn from "./signIn/index.svelte";

  import "./css/style.scss";
</script>

<Router>
  <main>
    <Route path="/" component={Main} />
    <Route path="sign_in" component={SignIn} />
    <Route>
      <h3>Default</h3>
      <p>No Route could be matched.</p>
    </Route>
  </main>
</Router>
