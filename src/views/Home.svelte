<script lang="ts">
  import '@fortawesome/fontawesome-free/js/all.min';
  import { slide } from 'svelte/transition';
  import { quartInOut } from 'svelte/easing';
  import ViewContainer from '../components/shared/ViewContainer.svelte';

  const roles = [
    'full-stack developer',
    'devops engineer',
    'software developer',
    'student',
    'tech-enthusiast',
  ];
  let i = 0;
  let activeIndex = 0;

  setInterval(() => {
    i = (i + 1) % roles.length;
    activeIndex = i;
  }, 1500);
</script>

<ViewContainer nextViewPath="/about">
  <div class="container">
    <article class="content">
      <img src="./assets/profil.jpg" alt="Foto profil" class="foto-profil" />
      <div class="intro-container">
        <p>I'm Josep Marcello, a</p>
        {#each roles as role, idx}
          {#if activeIndex == idx}
            <p
              transition:slide|local={{
                duration: 200,
                easing: quartInOut,
              }}
              class="role"
            >
              {role}
            </p>
          {/if}
        {/each}
        <p>from Banten, Indonesia</p>
        <hr class="separator" />
        <p class="action">Scroll down to learn more about me!</p>
      </div>
    </article>
    <footer>
      Made with <i class="fas fa-heart" /> using
      <img src="./assets/svelte-logo.svg" alt="Svelte" class="svelte-icon" />
      and icons from <i class="fab fa-font-awesome" />
    </footer>
  </div>
</ViewContainer>

<style lang="scss">
  p {
    margin: 0;
  }

  .container {
    background: linear-gradient(180deg, var(--cyan) 50%, #17cccc 100%);
    display: flex;
    flex-direction: column;
    height: 100vh;

    color: var(--white);

    .content {
      align-items: center;
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin: auto;
      width: 90vw;

      .foto-profil {
        --foto-wh: 300px;

        border-radius: 100%;
        height: var(--foto-wh);
        object-fit: cover;
        width: var(--foto-wh);
      }

      .intro-container {
        font-size: 2rem;
        .role {
          white-space: nowrap;
          width: 25rem;

          font-family: 'Fira Mono', monospace;
        }

        .separator {
          background-color: var(--blue);
          height: 0.2rem;

          color: var(--blue);
        }

        .action {
          text-align: center;
          font-size: 1.2rem;
        }
      }
    }

    footer {
      color: var(--cyan);

      text-align: center;

      .svelte-icon {
        width: 1rem;
      }
    }
  }
</style>
