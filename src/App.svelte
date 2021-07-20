<script lang="ts">
  import Router from 'svelte-spa-router';
  import Navbar from './components/shared/Navbar.svelte';
  import {
    About,
    Contact,
    Blog,
    ComingSoon,
    Home,
    Projects,
  } from './views/index';

  const routes = {
    '/': Home,
    '/about': About,
    // '/about/contact': Contact,
    '/projects': Projects,
    '/blog': Blog,
    '*': ComingSoon,
  };
</script>

<!--Alerady wrapped in <nav> tag-->
<Navbar />
<main>
  <Router {routes} restoreScrollState={true} />
</main>

<style lang="scss">
  main {
    margin-left: var(--navbar-width);
  }
</style>
