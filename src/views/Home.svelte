<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';
	import ViewContainer from '../components/shared/ViewContainer.svelte';

	const roles = ['software engineer', 'student', 'tech-enthusiast'];
	let i = 0;
	let activeIndex = 0;

	setInterval(() => {
		i = (i + 1) % roles.length;
		activeIndex = i;
	}, 1500);
</script>

<ViewContainer nextViewPath="/about">
	<div class="container">
		<section class="content">
			<img
				src="./assets/profil.jpg"
				alt="Foto profil"
				class="foto-profil"
			/>
			<div class="intro-container">
				<p>I'm Josep Marcello, a</p>
				{#each roles as role, idx (idx)}
					{#if activeIndex === idx}
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
				<p class="action">Scroll down to learn more about me</p>
			</div>
		</section>
	</div>
</ViewContainer>

<style lang="scss">
	@use '../styles/mixin';

	p {
		margin: 0;
	}

	.container {
		--photo-wh: 48vw;

		background: linear-gradient(180deg, var(--cyan) 50%, var(--teal) 100%);
		color: var(--white);
		display: flex;
		flex-direction: column;
		height: var(--min-content-height);

		.content {
			align-items: center;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			justify-content: center;
			margin: auto;
			width: 90vw;

			.foto-profil {
				border-radius: 100%;
				height: var(--photo-wh);
				object-fit: cover;
				width: var(--photo-wh);
			}

			.intro-container {
				font-size: 2rem;
				.role {
					white-space: nowrap;
					width: 25rem;

					font-family: 'Fira Code', monospace;
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
			} // end into-container

			@include mixin.respond-to('md') {
				--photo-wh: 24vw;

				flex-direction: row;
			}

			@include mixin.respond-to('xl') {
				--photo-wh: 16vw;
			}
		}
	}
</style>
