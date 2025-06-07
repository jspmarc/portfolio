<script lang="ts">
	import Description from '../components/About/Description.svelte';
	import Experiences from '../components/About/Experiences.svelte';
	import Interests from '../components/About/Interests.svelte';
	import Skills from '../components/About/Skills.svelte';
	import Trivia from '../components/About/Trivia.svelte';
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
	@use '../styles/mixin';

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
			display: grid;
			grid-template-columns: 12vw 3fr;
		}
	}

	.skills-content {
		flex-grow: 1;
	}
</style>
