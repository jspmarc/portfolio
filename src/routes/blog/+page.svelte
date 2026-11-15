<script lang="ts">
	import ViewContainer from '$lib/components/shared/ViewContainer.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const posts = $derived(data.posts);
</script>

<svelte:head>
	<title>Blog | Josep Marcello</title>
</svelte:head>

<ViewContainer>
	<div class="main-content content">
		<h1>Blog</h1>

		<p>
			This is where I put my thoughts down to writing. May contain my thoughts and writeups
			about my projects, life, and everything in between.
		</p>

		{#if posts.length > 0}
			<ul class="post-list">
				{#each posts as post (post.slug)}
					<li class="post">
						<a href={post.url}>
							<h2>{post.title ?? post.slug}</h2>
						</a>
						{#if post.date}
							<time datetime={post.date}>
								{new Date(post.date).toLocaleDateString('en-GB', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}
							</time>
						{/if}
						{#if post.description}
							<p>{post.description}</p>
						{/if}
					</li>
				{/each}
			</ul>
		{:else}
			<p>
				No posts just yet ( *^-^)ρ(*╯^╰)
			</p>
		{/if}
	</div>
</ViewContainer>

<style lang="scss">
	.content {
		min-height: var(--min-content-height);
	}

	h1 {
		margin-top: 0;
		font-weight: 400;
	}

	.post-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.post {
		h2 {
			display: inline-block;
			margin: 0;
		}

		time {
			display: block;
			font-size: 0.9rem;
			opacity: 0.75;
		}

		p {
			margin: 0.25rem 0 0;
		}
	}
</style>
