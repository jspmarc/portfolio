<script lang="ts">
  import Experiences from '../../data/Experiences';
  let test = false;
</script>

<div class="container" style="grid-template-rows: repeat({3}, autofill)">
  {#each Experiences as { title, description, year }}
    <div class="year">
      {#if year.short.to}
        <h4 style={test ? 'display: none' : ''}>
          {year.short.from} - {year.short.to}
        </h4>
      {:else}
        <h4 style={test ? 'display: none' : ''}>
          {year.short.from}
        </h4>
      {/if}
      {#if year.detailed.to}
        <h4 class="detailed" style={!test ? 'display: none' : ''}>
          {year.detailed.from} - {year.detailed.to}
        </h4>
      {:else}
        <h4 class="detailed" style={!test ? 'display: none' : ''}>
          {year.detailed.from}
        </h4>
      {/if}
    </div>
    <div class="timeline">
      <div class="timeline-circle" />
    </div>
    <div class="content">
      <button class="title" on:click={() => (test = !test)}>
        <i class="fas fa-chevron-right accordion-arrow" />
        <h4>{title}</h4>
      </button>
      <div class:test class="experience-content-description">
        <section>{@html description}</section>
      </div>
    </div>
  {/each}
</div>

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

  .container {
    --timeline-width: 5px;

    align-items: flex-start;
    align-self: stretch;
    display: grid;
    grid-template-columns: 8rem var(--timeline-width) 4fr;
    column-gap: 1rem;
  }

  .content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .experience-content-description {
    align-self: stretch;
    background-color: var(--cyan);
    border-radius: 0.5rem;
    display: none;
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

  .test {
    display: block;
  }

  .title {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 0.5rem;

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
    height: 100%;
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

    top: 0.8vh;
    position: relative;

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
    margin: 0.5rem 0;

    text-align: right;

    .detailed {
      word-wrap: break-word;
    }
  }
</style>
