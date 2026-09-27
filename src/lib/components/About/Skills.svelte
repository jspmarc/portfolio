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

		// Side-by-side label/value columns once there is room for them; below
		// that the label sits on its own line above its values.
		@include mixin.respond-to('md') {
			column-gap: 1.5rem;
			grid-template-columns: max-content 1fr;
			row-gap: 0.5rem;
		}
	}

	dt {
		font-weight: 700;
	}

	// Reset the UA's 40px inline indent, which would offset the value column.
	dd {
		margin: 0;
	}
</style>
