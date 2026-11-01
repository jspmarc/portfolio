<script lang="ts">
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';
	import Content, { metadata } from './content.md';

	// metadata is untyped beyond Record<string, unknown>; narrow once here.
	const postDate = typeof metadata.date === 'string' ? metadata.date : undefined;
	const formattedDate = postDate
		? new Date(postDate).toLocaleDateString('en-GB', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			})
		: undefined;
</script>

<svelte:head>
	<title>{metadata.title ?? 'Blog'} | Josep Marcello</title>
</svelte:head>

<ViewContainer>
	<div class="main-content post">
		<nav class="back">
			<a href="/blog">&larr; Back to Blog</a>
		</nav>

		{#if postDate}
			<p class="post-date">
				<time datetime={postDate}>{formattedDate}</time>
			</p>
		{/if}

		<!-- mdsvex compiles content.md into a separate component, so scoped
			styles on this page can't reach its elements — the .prose wrapper
			is styled by global rules in +layout.svelte. -->
		<article class="prose">
			<Content />
		</article>
	</div>
</ViewContainer>

<style lang="scss">
	.post {
		max-width: 72ch;
	}

	.back {
		margin-bottom: 1.5rem;

		a {
			font-size: 0.9rem;
		}
	}

	.post-date {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.75;
	}
</style>
