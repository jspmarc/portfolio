<!--
Inspiration:
  - https://www.youtube.com/watch?v=biOMz4puGt8,
  - https://github.com/fireship-io/222-responsive-icon-nav-css
-->
<script lang="ts">
  import '@fortawesome/fontawesome-free/js/all.min';
  import { createEventDispatcher } from 'svelte';
  import NavItems from '../../data/NavItem.js';

  export let selected: string;

  const dispatch = createEventDispatcher();

  const handleChange = (name: string, page: any) => {
    selected = name;
    dispatch('changePage', {
      page,
    });
  };
</script>

<nav>
  <ul class="container">
    {#each NavItems as { name, text, link, icon, page }}
      <li class="item">
        <a
          href={link}
          class:selected={selected == name}
          on:click|preventDefault={() => handleChange(name, page)}
        >
          <i class="fas fa-{icon} icon fa-2x" />
          <span class="text">
            {text}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    --navbar-open-width: 12rem;

    margin: 0;
    background-color: var(--cyan);
    height: 100vh;
    width: var(--navbar-width);
    position: fixed;

    transition: 0.3s;

    .container {
      list-style: none;
      margin: 0;
      padding: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      color: var(--white);
      text-decoration: none;
      width: var(--navbar-width);
      height: var(--navbar-width);

      // margin-bottom: 1rem;

      &:hover {
        color: var(--blue);
        transition: var(--transition-speed);
      }
    }

    .icon {
      margin: 0 1.5rem;
      width: 2rem;
    }

    .text {
      display: none;
    }

    .selected {
      background-color: var(--white);
      color: var(--cyan) !important;
      transition: var(--transition-speed);
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
        margin-left: 1rem;
        flex-grow: 1;
      }
    }
  }
</style>
