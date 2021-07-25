<!--
Inspiration:
  - https://www.youtube.com/watch?v=biOMz4puGt8,
  - https://github.com/fireship-io/222-responsive-icon-nav-css
-->
<script lang="ts">
  import { link as routerLink } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import NavItems from '../../data/NavItem.js';
  import SocialMedias from '../../data/SocialMedia';
</script>

<nav>
  <ul class="container">
    {#each NavItems as { text, link, icon }}
      <li class="item nav-item">
        <a href={link} use:routerLink use:active>
          <i class="fas fa-{icon} fa-2x icon" />
          <span class="text">
            {text}
          </span>
        </a>
      </li>
    {/each}

    <li class="nav-item">
      <ul class="social-medias">
        {#each SocialMedias as { text, link, icon, isBrand }}
          <li class="social-item">
            <a href={link} target="_blank">
              <i class="{isBrand ? 'fab' : 'fas'} fa-{icon} fa-2x icon" />
              <span class="text">
                {text}
              </span>
            </a>
          </li>
        {/each}
      </ul>
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    --navbar-open-width: 12rem;

    position: fixed;

    background-color: var(--cyan);
    height: 100vh;
    margin: 0;
    width: var(--navbar-width);

    transition: 0.3s;

    .container {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      height: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .item {
      width: 100%;
    }

    .nav-item:last-child {
      margin-top: auto;
    }

    a {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      height: var(--navbar-width);
      outline: none; // TODO: cursed...
      width: var(--navbar-width);

      color: var(--white);
      text-decoration: none;

      &:hover {
        color: var(--blue);

        transition: var(--transition-speed);
      }
    }

    .icon {
      margin: 0 1.5rem;
      width: 2rem;
    }

    .social-medias {
      list-style: none;
      padding: 0;
    }

    .text {
      display: none;
    }

    :global(.active) {
      background-color: var(--white);
      transition: var(--transition-speed);

      color: var(--cyan) !important;
    }

    /* Handle hover */

    &:hover {
      width: var(--navbar-open-width);

      color: var(--cyan);

      transition: var(--transition-speed);

      a {
        width: var(--navbar-open-width);

        transition: var(--transition-speed);
      }

      .text {
        display: block;
        flex-grow: 1;
        margin-left: 1rem;
      }
    }
  }
</style>
