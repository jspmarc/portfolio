<script lang="ts">
  import '@fortawesome/fontawesome-free/js/all.min';
  import { slide } from 'svelte/transition';
  import { quartInOut } from 'svelte/easing';

  const roles = [
    'full-stack developer',
    'student',
    'software developer',
    'tech-enthusiast',
  ];
  let i = 0;
  let activeIndex = 0;

  setInterval(() => {
    i = (i + 1) % roles.length;
    activeIndex = i;
  }, 1500);
</script>

<div class="container">
  <article class="content">
    <img src="./assets/profil.jpg" alt="Foto profil" class="foto-profil" />
    <div class="intro-container">
      <p>I'm Josep Marcello, a</p>
      {#each roles as role, idx}
        {#if activeIndex == idx}
          <p
            transition:slide={{
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

<style lang="scss">
  p {
    margin: 0;
  }

  .container {
    background: linear-gradient(180deg, var(--cyan) 50%, #17cccc 100%);
    color: var(--white);
    height: 100vh;

    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      margin: auto;
      width: 90vw;

      .foto-profil {
        --foto-wh: 300px;
        width: var(--foto-wh);
        height: var(--foto-wh);
        border-radius: 100%;
        object-fit: cover;
      }

      .intro-container {
        font-size: 2rem;
        .role {
          // background-color: var(--blue);
          // border-radius: 1rem;
          // color: var(--cyan);
          // padding: 0 1.2rem;
          width: 25rem;

          font-family: 'Fira Mono', monospace;

          white-space: nowrap;
        }

        .separator {
          background-color: var(--blue);
          color: var(--blue);
          height: 0.2rem;
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
