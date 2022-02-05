<script lang="ts">
  import Description from '../components/About/Description.svelte';
  import Experiences from '../components/About/Experiences.svelte';
  import Interests from '../components/About/Interests.svelte';
  import Skills from '../components/About/Skills.svelte';
  import Trivia from '../components/About/Trivia.svelte';
  import ViewContainer from '../components/shared/ViewContainer.svelte';
  import { onMount } from 'svelte';

  let experiences = [];
  let skills = [];

  onMount(async () => {
    const res = await fetch('/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
query {
  experiences {
    title
    description
    time {
      from
      to
    }
    links {
      certificate
      git_repo
      deployment
    }
  }

  skills {
    category
    contents {
      name
      icon {
        src
        img_name
      }
    }
  }
}
`,
        variables: {},
        operationName: '',
      }),
    });

    const jsonRes = await res.json();
    experiences = jsonRes.data.experiences;
    skills = jsonRes.data.skills;
  });

</script>

<ViewContainer>
  <div class="main-content content">
    <h1>Who Am I?</h1>
    <section class="description">
      <Description />
    </section>

    <h1>Skills</h1>
    <section class="skills-content">
      <Skills data={skills} />
    </section>

    <h1>Notable Experiences</h1>
    <section>
      <Experiences data={experiences} />
    </section>

    <h1>Interests</h1>
    <section>
      <Interests />
    </section>

    <h1>Trivia</h1>
    <section>
      <Trivia />
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
    justify-content: flex-start;
  }

  .content {
    display: grid;
    grid-template-columns: 12vw 3fr;
    gap: 2rem;
  }

  .skills-content {
    flex-grow: 1;
  }
</style>
