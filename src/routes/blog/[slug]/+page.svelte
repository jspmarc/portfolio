<script lang="ts">
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const Content = $derived(data.post.default);
	const metadata = $derived(data.post.metadata);

	// Load returns mdsvex metadata, so date can be non-string at runtime.
	const postDate = $derived(typeof metadata.date === 'string' ? metadata.date : undefined);
	const formattedDate = $derived(
		postDate
			? new Date(postDate).toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})
			: undefined
	);
</script>

<svelte:head>
	<title>{metadata.title ?? 'Blog'} | Josep Marcello</title>
</svelte:head>

<ViewContainer>
	<div class="main-content post">
		<nav class="back">
			<a href="/blog">&larr; Back to Blog</a>
		</nav>

		<h1>
			{metadata.title || 'A Blog Post'}
		</h1>

		{#if postDate}
			<p class="post-date">
				<time datetime={postDate}>{formattedDate}</time>
			</p>
		{/if}

		<!-- mdsvex compiles content.md into a separate component, so scoped
			styles can't reach its elements — the .prose rules below stay
			global and anchored under .prose. -->
		<article class="prose">
			<Content />
		</article>
	</div>
</ViewContainer>

<style lang="scss">
	// Rendered markdown (mdsvex) is a separate component, so scoped styles
	// cannot reach its elements. These rules are global and anchored under
	// .prose so they never leak to the rest of the site. Each selector stays
	// fully qualified because anything nested inside :global() would be
	// scoped again.
	:global(.prose pre) {
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
	}

	// Code blocks (pre > code) keep scrolling, never wrapping; only inline
	// code gets the break rule, so a long token breaks instead of pushing
	// the page wide on phones.
	:global(.prose :not(pre) > code) {
		overflow-wrap: anywhere;
	}

	// Long words and URLs in prose break instead of overflowing the measure.
	:global(.prose p),
	:global(.prose li) {
		overflow-wrap: break-word;
	}

	:global(.prose img) {
		max-width: 100%;
		height: auto;
	}

	:global(.prose blockquote) {
		margin: 1rem 0;
		padding: 0.25rem 1rem;
		border-left: 3px solid var(--teal);
		background: color-mix(in srgb, var(--teal) 8%, transparent);
	}

	:global(.prose blockquote p) {
		margin: 0.5rem 0;
	}

	// display:block + overflow-x:auto keeps a wide table inside the article
	// (it scrolls itself) instead of stretching the whole page on phones.
	:global(.prose table) {
		display: block;
		width: 100%;
		border-collapse: collapse;
		overflow-x: auto;
	}

	:global(.prose table th),
	:global(.prose table td) {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--blue);
		text-align: left;
	}

	:global(.prose table th) {
		background: color-mix(in srgb, var(--blue) 25%, transparent);
	}

	.post {
		max-width: 120ch;
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
