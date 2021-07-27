<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import Experiences from '../../data/Experiences';

  let opened = new Set<number>();

  const toggleOpen = (id: number) => {
    if (opened.has(id)) opened.delete(id);
    else opened.add(id);
    opened = opened;
  };
</script>

{#each Experiences as { id, title, description, year }}
  <div class="container" class:opened={opened.has(id)}>
    <div class="year">
      {#if !opened.has(id)}
        {#if year.short.to}
          <h4>
            {year.short.from} - {year.short.to}
          </h4>
        {:else}
          <h4>
            {year.short.from}
          </h4>
        {/if}
      {:else if year.detailed.to}
        <h4 class="detailed" transition:slide|local>
          {year.detailed.from} - {year.detailed.to}
        </h4>
      {:else}
        <h4 class="detailed" transition:slide|local>
          {year.detailed.from}
        </h4>
      {/if}
    </div>

    <div class="timeline">
      <div class="timeline-circle" />
    </div>

    <div class="content">
      <button class="title" on:click={() => toggleOpen(id)}>
        <i class="fas fa-chevron-right accordion-arrow" />
        <h4>{title}</h4>
      </button>
      {#if opened.has(id)}
        <div class="experience-content-description" transition:slide|local>
          <section>{@html description}</section>
        </div>
      {/if}
    </div>
  </div>
{/each}

<style lang="scss">
  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;

    color: inherit;
    font-size: inherit;
  }

  h4 {
    margin: 0;
  }
  .accordion-arrow {
    transition: var(--transition-speed);
  }

  .container {
    --timeline-width: 5px;

    align-items: flex-start;
    align-self: stretch;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: 8rem var(--timeline-width) 4fr;
    justify-content: flex-start;
  }

  .content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .experience-content-description {
    align-self: stretch;
    background-color: var(--cyan);
    border-radius: 0.5rem;
    justify-self: stretch;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 1rem;

    color: var(--white);

    :global(& p) {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    :global(& ul) {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
  }

  .opened {
    .accordion-arrow {
      rotate: 90deg;
      transition: var(--transition-speed);
    }
  }

  .title {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    h4 {
      font-weight: 700;
    }
  }

  .timeline {
    align-items: center;
    align-self: stretch;
    background-color: var(--cyan);
    border: 0;
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: flex-start;
    justify-self: stretch;
    margin: 0;
    outline: none;
    width: var(--timeline-width);

    &:first-child {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    &:last-child {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }

  .timeline-circle {
    --circle-wh: 1.2rem;

    background-color: var(--brown);
    border-radius: 100%;
    height: var(--circle-wh);
    margin: 0;
    padding: 0;
    width: var(--circle-wh);
  }

  .year {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    margin-bottom: 0.5rem;

    text-align: right;

    .detailed {
      word-wrap: break-word;
    }
  }
</style>
