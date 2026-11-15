<script lang="ts">
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';
	import '$lib/styles/blog-content.scss';
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
			<a href="/blog">&larr; Back to Blog Posts List</a>
		</nav>

		<h1>
			{metadata.title || 'A Blog Post'}
		</h1>

		{#if postDate}
			<p class="post-date">
				<time datetime={postDate}>{formattedDate}</time>
			</p>
		{/if}

		{#if metadata.description}
			<p class="post-date">
				{metadata.description}
			</p>
		{/if}

		<!-- mdsvex compiles content.md into a separate component, so scoped
			styles can't reach its elements — blog-content.scss is imported globally
			and anchored under .blog-content. -->
		<article class="blog-content">
			<Content />
		</article>
	</div>
</ViewContainer>

<style lang="scss">
	@use '$lib/styles/content';
	@use '$lib/styles/mixin';

	h1 {
		font-weight: 500;
		text-align: left;

		@include content.page-heading;

		@include mixin.respond-to('xl') {
			text-align: left;
		}
	}

	.post {
		@include content.page-shell;

		// max-width: 100ch;
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
