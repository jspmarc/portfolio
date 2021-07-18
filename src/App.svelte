<script lang="ts">
  import Navbar from './components/shared/Navbar.svelte';
  import NavItems from './data/NavItem';

  let defaultNavItem = NavItems[0];
  let currentPage = defaultNavItem.page;

  const changePage = event => {
    currentPage = event.detail.page;
  };
</script>

<!--Alerady wrapped in <nav> tag-->
<Navbar selected={defaultNavItem.name} on:changePage={changePage} />
<main>
  <svelte:component this={currentPage} />
</main>

<style lang="scss">
  main {
    margin-left: var(--navbar-width);
  }
</style>
