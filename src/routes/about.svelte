<script lang="ts">
	import Description from '$lib/about/Description.svelte';
	import Experiences from '$lib/about/Experiences.svelte';
	import Interests from '$lib/about/Interests.svelte';
	import Skills from '$lib/about/Skills.svelte';
	import Trivia from '$lib/about/Trivia.svelte';
	import ViewContainer from '$lib/shared/ViewContainer.svelte';
</script>

<svelte:head>
	<title>About | Josep Marcello</title>
</svelte:head>

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

		<h1>Notable Experiences</h1>
		<section>
			<Experiences />
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
	@import '../styles/mixin.scss';

	h1 {
		margin: 0;
		text-align: left;

		@include respond-to('xl') {
			text-align: right;
		}
	}

	section {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 2rem;

		@include respond-to('xl') {
			margin-bottom: 0;
		}
	}

	.content {
		gap: 2rem;

		@include respond-to('xl') {
			display: grid;
			grid-template-columns: 12vw 3fr;
		}
	}

	.skills-content {
		flex-grow: 1;
	}
</style>
