<script lang="ts">
  let test = false;
</script>

<div class="container" style="grid-template-rows: repeat({3}, autofill)">
  <div class="year">
    <h4 style={test ? 'display: none' : ''}>2020 - 2021</h4>
    <h4 class="detailed" style={!test ? 'display: none' : ''}>
      Januari 2020 - September 2021
    </h4>
  </div>
  <div class="timeline">
    <div class="timeline-circle" />
  </div>
  <div class="content">
    <button class="title" on:click={() => (test = !test)}>
      <i class="fas fa-chevron-right accordion-arrow" />
      <h4>Website Perayaan Wisuda Juli ITB 2021</h4>
    </button>
    <div class="description">
      <section class:test>asdasdasd</section>
    </div>
  </div>
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
    font-weight: 700;
  }

  .container {
    --timeline-width: 5px;

    align-items: flex-start;
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

  .description {
    section {
      display: none;
    }

    .test {
      display: block;
      margin: 0;
    }
  }

  .title,
  .year {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: flex-start;
  }

  .title {
    align-items: center;
    margin-top: 0.5rem;
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
    align-items: center;
    margin: 0.5rem 0;

    font-weight: 700;

    .detailed {
      word-wrap: break-word;
    }
  }
</style>
