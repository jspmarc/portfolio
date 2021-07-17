<script lang="ts">
  import Navbar from '../components/shared/Navbar.svelte';
</script>

<div class="container">
  <Navbar isAtHome={true} />
  <div class="content">
    <img src="./assets/profil.jpg" alt="Foto profil" class="foto-profil" />
    <div class="intro-container">
      <p class="intro">Hello!</p>
      <p class="intro">I'm Josep Marcello,</p>
      <p class="intro">a <span class="role">programmer</span> from Jakarta, Indonesia</p>
      <hr class="separator" />
      <p class="action">Scroll to learn more about me!</p>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    background-color: var(--cyan);
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
          margin: 0;
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
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
