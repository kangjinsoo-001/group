<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Main from "./main/index.svelte";
  import SignIn from "./signIn/index.svelte";
  import SignUp from "./signUp/index.svelte";
  import SignUp2 from "./signUp/test.svelte";
  import SignUp3 from "./signUp/test2.svelte";
  import SignUp4 from "./signUp/test3.svelte";

  import "./css/style.scss";
</script>

<Router>
  <main>
    <Route path="/" component={Main} />
    <Route path="sign_in" component={SignIn} />
    <Route path="sign_up" component={SignUp} />
    <Route path="sign_up2" component={SignUp2} />
    <Route path="sign_up3" component={SignUp3} />
    <Route path="sign_up4" component={SignUp4} />
    <Route>
      <h3>Default</h3>
      <p>No Route could be matched.</p>
    </Route>
  </main>
</Router>
