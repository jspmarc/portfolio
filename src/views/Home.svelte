<script lang="ts">
  import '@fortawesome/fontawesome-free/js/all.min';
</script>

<div class="container">
  <div class="content">
    <img src="./assets/profil.jpg" alt="Foto profil" class="foto-profil" />
    <div class="intro-container">
      <p class="intro">Hello!</p>
      <p class="intro">I'm Josep Marcello,</p>
      <p class="intro">
        a <span class="role">programmer</span> from Jakarta, Indonesia
      </p>
      <hr class="separator" />
      <p class="action">Scroll to learn more about me!</p>
    </div>
  </div>
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
        --foto-wh: 400px;
        width: var(--foto-wh);
        height: var(--foto-wh);
        border-radius: 100%;
        object-fit: cover;
      }

      .intro-container {
        .intro {
          font-size: 2.25rem;

          .role {
            display: inline-block;

            background-color: var(--blue);
            border-radius: 1rem;
            color: var(--cyan);
            padding: 0 1.2rem;
            width: 20rem;
          }
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
