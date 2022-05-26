<script lang="ts">
  import '@fortawesome/fontawesome-free/js/all.min';
  import Router from 'svelte-spa-router';
  import Footer from './components/shared/Footer.svelte';
  import Navbar from './components/shared/Navbar.svelte';
  import { About, Blog, ComingSoon, Home, Projects } from './views/index';

  const routes = {
    '/': Home,
    '/about': About,
    '/projects': Projects,
    '/blog': Blog,
    '*': ComingSoon,
  };
</script>

<!--Alerady wrapped in <nav> tag-->
<header>
  <Navbar />
</header>
<div class="gradient-bg">
  <main>
    <Router {routes} restoreScrollState={true} />
  </main>
  <Footer />
</div>

<style lang="scss">
  @import './styles/mixin.scss';

  $headers: h1, h2, h3, h4, h5, h6;
  @each $header in $headers {
    :global(#{$header}) {
      font-family: 'Lora', serif;
      font-weight: 400;
    }
  }

  :global(:root) {
    --cyan: #004852;
    --white: #f1f1e6;
    --blue: #9cd5e0;
    --brown: #8a6a55;
    --teal: #17cccc;

    --footer-height: 1.25rem;
    --min-content-height: calc(
      100vh - var(--footer-height) - var(--navbar-width)
    );
    @include respond-to('xl') {
      --min-content-height: calc(100vh - var(--footer-height));
    }
    // navbar width is height while on tablet or smaller size
    --navbar-width: 5rem;
    --transition-speed: 0.3s;

    font-size: clamp(14px, 2.05vmin, 20px);
  }

  :global(a) {
    color: var(--brown);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  :global(body) {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: var(--cyan);

    background-color: var(--white);
    margin: 0;
    padding: 0;
  }

  :global(button) {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }

  :global(.main-content) {
    padding: 2rem;

    @include respond-to('xl') {
      padding: 5vh 10vw;
    }
  }

  .gradient-bg {
    background: linear-gradient(180deg, var(--white) 67.12%, var(--blue) 100%);
    max-width: 100vw;
    @include respond-to('xl') {
      margin-left: var(--navbar-width);
    }
  }
</style>
