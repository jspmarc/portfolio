<script lang="ts">
	import ComingSoon from '$lib/components/shared/ComingSoon.svelte';
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';
</script>

<!--
	Netlify and Cloudflare Pages both serve `404.html` from the publish directory
	for unmatched paths. SvelteKit does not generate one from +error.svelte on its
	own, so this route exists purely to produce `build/404.html` at prerender time.
-->
<svelte:head>
	<title>Page not found | Josep Marcello</title>
</svelte:head>

<ViewContainer>
	<ComingSoon />
</ViewContainer>
