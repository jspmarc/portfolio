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

	@include mixin.label-value-grid;
</style>
