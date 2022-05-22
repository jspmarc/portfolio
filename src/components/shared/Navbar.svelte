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
  @import '../../styles/mixin.scss';

  nav {
    --navbar-open-width: 12rem; // FIXME: Kecilin dan mungkin jgn pake rem?
    --navbar-item-icon-size: calc(0.3 * var(--navbar-width));

    background-color: var(--cyan);
    margin: 0;
    height: var(--navbar-width);
    position: fixed;
    transition: 0.3s;
    transform: translateY(calc(100vh - var(--navbar-width)));
    width: 100vw;

    .container {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: space-around;
      margin: 0;
      padding: 0;
    }

    .nav-item {
      width: 100%;

      &:last-child {
        display: none;
      }
    }

    a {
      align-items: center;
      color: var(--white);
      display: flex;
      justify-content: flex-start;
      height: var(--navbar-width);
      outline: none; // FIXME: cursed...
      text-decoration: none;
      width: 100%;

      &:hover {
        color: var(--blue);
        transition: var(--transition-speed);
      }
    }

    .icon {
      margin: auto;
      width: var(--navbar-item-icon-size);
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

    @include respond-to('xl') {
      height: 100vh;
      transform: translateY(0);
      width: var(--navbar-width);

      .container {
        flex-direction: column;
        height: 100%;
      }

      .nav-item:last-child {
        display: block;
        margin-top: auto;
      }

      a {
        width: var(--navbar-width);
      }

      .icon {
        margin: 0 1.5rem;
      }

      /* Handle hover */
      &:hover {
        color: var(--cyan);
        width: var(--navbar-open-width);
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
      } /* end &:hover */
    }
  }
</style>
