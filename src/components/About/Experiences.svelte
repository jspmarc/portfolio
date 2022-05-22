<script lang="ts">
  import { slide } from 'svelte/transition';
  import Experiences from '../../data/Experiences';

  let opened = new Set<number>();

  const toggleOpen = (n: number) => {
    if (opened.has(n)) opened.delete(n);
    else opened.add(n);
    opened = opened;
  };
</script>

{#each Experiences as { title, description, year, links }, idx}
  <div class="container" class:opened={opened.has(idx)}>
    <div class="year">
      {#if year.to && opened.has(idx)}
        <h4>
          {year.from} - {year.to}
        </h4>
      {:else}
        <h4>
          {year.from}
        </h4>
      {/if}
    </div>

    <div class="timeline">
      <div class="timeline-circle" />
    </div>

    <div class="content">
      <button class="title" on:click={() => toggleOpen(idx)}>
        <i class="fas fa-chevron-right accordion-arrow" />
        <h4>{title}</h4>
      </button>
      {#if opened.has(idx)}
        <div class="experience-content-description" transition:slide|local>
          <section>
            {@html description}

            {#if links}
              <div class="links">
                {#if links.gitRepo}
                  <a href={links.gitRepo} target="_blank">
                    <button class="links-button git-repo">
                      <!-- TODO: Change this to the project's page when the Project view/page is done -->
                      <i class="fab fa-git-alt" />
                      Visit the Git repository
                    </button>
                  </a>
                {/if}
                {#if links.website}
                  <a href={links.website} target="_blank">
                    <button class="links-button git-repo">
                      <i class="fas fa-external-link-alt" />
                      Visit the website
                    </button>
                  </a>
                {/if}
                {#if links.certificate}
                  <a href={links.certificate} target="_blank">
                    <button class="links-button git-repo">
                      <i class="fas fa-certificate" />
                      View my certificate
                    </button>
                  </a>
                {/if}
              </div>
            {/if}
          </section>
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

  .links {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    &-button {
      background-color: var(--blue);
      border-radius: 0.75rem;
      margin-top: 1rem;
      padding: 0.5rem 1rem;

      color: var(--cyan);

      transition: var(--transition-speed);

      &:hover {
        background-color: var(--brown);
        transform: scale(1.1);

        color: var(--white);

        transition: var(--transition-speed);
      }
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
		border-radius: 1rem;
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
    --circle-wh: 1rem;

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
    word-wrap: break-word;

    text-align: right;
  }
</style>
