<script lang="ts">
  import Description from '../components/About/Description.svelte';
  import Experiences from '../components/About/Experiences.svelte';
  import Skills from '../components/About/Skills.svelte';
  import ViewContainer from '../components/shared/ViewContainer.svelte';
</script>

<ViewContainer>
  <div class="main-content content">
    <h1>Who Am I?</h1>
    <section class="description">
      <Description />
    </section>
    <h1>Skills</h1>
    <section class="skills-content">
      <Skills />
    </section>
    <h1>Experiences</h1>
    <section>
      <Experiences />
    </section>
  </div>
</ViewContainer>

<style lang="scss">
  h1 {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;

    text-align: right;
  }

  section {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .category {
    display: block;
    width: inherit;
  }

  .content {
    display: grid;
    grid-template-columns: 10vw 3fr;
    gap: 2rem;
  }

  .skills-content {
    flex-grow: 1;
  }
</style>
