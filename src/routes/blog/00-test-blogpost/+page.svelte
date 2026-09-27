<script lang="ts">
	import Content, { metadata } from './content.md';
</script>

<svelte:head>
	<title>{metadata.title ?? 'Blog'} | Josep Marcello</title>
</svelte:head>

<pre>
{JSON.stringify(metadata, undefined, 4)}
</pre>

<Content />
