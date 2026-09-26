<script lang="ts">
	import Description from '$lib/components/About/Description.svelte';
	import Experiences from '$lib/components/About/Experiences.svelte';
	import Interests from '$lib/components/About/Interests.svelte';
	import Skills from '$lib/components/About/Skills.svelte';
	import Trivia from '$lib/components/About/Trivia.svelte';
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';
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
	@use '$lib/styles/mixin';

	h1 {
		margin: 0;
		margin-bottom: 0.25rem;
		text-align: left;

		@include mixin.respond-to('xl') {
			margin-bottom: 0;
			text-align: right;
		}
	}

	section {
		align-items: flex-start;
		max-width: 100ch;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 2rem;

		@include mixin.respond-to('xl') {
			margin-bottom: 0;
		}
	}

	.content {
		gap: 2rem;
		min-height: var(--min-content-height);

		@include mixin.respond-to('xl') {
			align-content: start;
			display: grid;
			grid-template-columns: 12vw auto;
			grid-auto-rows: max-content;
			justify-content: center;
		}
	}

	.skills-content {
		flex-grow: 1;
	}
</style>
