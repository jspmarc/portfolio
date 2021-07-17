<script lang="ts">
  import NavLinks from '../../data/NavLinks.js';
  export let isAtHome = false;
</script>

<div class="container">
  {#each NavLinks as { name, link, showAtHome }}
    {#if (isAtHome && showAtHome) || !isAtHome}
      <a href={link} class="link"> {name} </a>
    {/if}
  {/each}
</div>

<style lang="scss">
  .container {
    margin: 0;
    padding: 1.3rem 2rem;
    background-color: rgba(#002d33, 0.25);
    color: var(--white);

    font-size: 1.25rem;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;

    .link {
      margin: 0 1.5rem;
      color: var(--white);
      text-decoration: none;
    }
  }
</style>
