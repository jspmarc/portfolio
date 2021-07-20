<script lang="ts">
  import Router from 'svelte-spa-router';
  import Navbar from './components/shared/Navbar.svelte';
  import { ComingSoon, Home } from './views/index';

  const routes = {
    '/': Home,
    '/about': ComingSoon,
    '/about/contact': ComingSoon,
    '/projects': ComingSoon,
    '/blog': ComingSoon,
    '*': ComingSoon,
  };
</script>

<!--Alerady wrapped in <nav> tag-->
<Navbar />
<main>
  <Router {routes} />
</main>

<style lang="scss">
  main {
    margin-left: var(--navbar-width);
  }
</style>
