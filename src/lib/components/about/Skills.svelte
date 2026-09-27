<script lang="ts">
	import Skills from '$lib/data/Skills';
</script>

<dl>
	{#each Skills as { category, items } (category)}
		<dt>{category}</dt>
		<dd>{items.join(', ')}</dd>
	{/each}
</dl>

<style lang="scss">
	@use '$lib/styles/mixin';

	dl {
		display: grid;
		gap: 0.75rem;
		grid-template-columns: 1fr;
		margin: 0;

		@include mixin.respond-to('md') {
			column-gap: 1.5rem;
			grid-template-columns: max-content 1fr;
			row-gap: 0.5rem;
		}
	}

	dt {
		font-weight: 700;
	}

	dd {
		margin: 0;
	}
</style>
