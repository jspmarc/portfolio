<script lang="ts">
	import Description from '$lib/components/about/Description.svelte';
	import Experiences from '$lib/components/about/Experiences.svelte';
	import Skills from '$lib/components/about/Skills.svelte';
	import Trivia from '$lib/components/about/Trivia.svelte';
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';
</script>

<svelte:head>
	<title>About | Josep Marcello</title>
</svelte:head>

<ViewContainer>
	<div class="main-content content">
		<h1>About Me</h1>
		<section class="description">
			<Description />
		</section>

		<h2>Skills</h2>
		<section>
			<Skills />
		</section>

		<div>
			<h2>Notable</h2>
			<h2>Experiences</h2>
		</div>
		<section>
			<Experiences />
		</section>

		<h2>Trivia</h2>
		<section>
			<Trivia />
		</section>
	</div>
</ViewContainer>

<style lang="scss">
	@use '$lib/styles/mixin';
	@use '$lib/styles/content';

	h1,
	h2 {
		@include content.page-heading;
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
		@include content.page-shell;

		gap: 2rem;

		@include mixin.respond-to('xl') {
			align-content: start;
			display: grid;
			grid-template-columns: minmax(12vw, max-content) auto;
			grid-auto-rows: max-content;
			justify-content: center;
		}
	}
</style>
