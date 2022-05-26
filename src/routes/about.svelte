<script lang="ts" context="module">
	import type { Load } from './__types/about';
	import type Experience from '$lib/types/Experience';
	import type Skill from '$lib/types/Skill';

	export const load: Load = async ({ fetch }) => {
		const [experienceResult, skillResult] = await Promise.all([
			fetch('/api/experiences'),
			fetch('/api/skills'),
		]);
		const [experiences, skills]: [Experience[], Skill[]] = await Promise.all([
			experienceResult.json(),
			skillResult.json(),
		]);
		return {
			props: {
				experiences,
				skills,
			},
		};
	};
</script>

<script lang="ts">
	import Description from '$lib/components/about/Description.svelte';
	import Experiences from '$lib/components/about/Experiences.svelte';
	import Interests from '$lib/components/about/Interests.svelte';
	import Skills from '$lib/components/about/Skills.svelte';
	import Trivia from '$lib/components/about/Trivia.svelte';
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';

	export let experiences: Experience[];
	export let skills: Skill[];
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
			<Skills {skills} />
		</section>

		<h1>Notable Experiences</h1>
		<section>
			<Experiences {experiences} />
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
		margin-bottom: 0.25rem;
		text-align: left;

		@include respond-to('xl') {
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
