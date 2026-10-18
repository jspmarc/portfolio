<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import 'prismjs/themes/prism.css';
	import type { Snippet } from 'svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import Navbar from '$lib/components/shared/Navbar.svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<svelte:head>
	<meta name="description" content="Josep Marcello's personal website" />
	<meta name="keywords" content="Portfolio" />
	<meta name="author" content="Josep Marcello" />
	<title>Josep Marcello</title>
</svelte:head>

<!--Already wrapped in <nav> tag-->
<header>
	<Navbar />
</header>
<div class="gradient-bg">
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>

<style lang="scss">
	@use '$lib/styles/mixin';

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	$headers: h1, h2, h3, h4, h5, h6;
	@each $header in $headers {
		:global(#{$header}) {
			font-family: 'Lora', serif;
			font-weight: 400;
		}
	}

	:global(:root) {
		--cyan: #004852;
		--white: #f1f1e6;
		--blue: #9cd5e0;
		--brown: #8a6a55;
		--teal: #17cccc;

		--footer-height: 1.25rem;
		--min-content-height: calc(100vh - var(--footer-height) - var(--navbar-width));
		// navbar width is height while on tablet or smaller size
		--navbar-width: 5rem;
		--transition-speed: 0.3s;

		font-size: clamp(14px, 2.05vmin, 20px);

		@include mixin.respond-to('xl') {
			--min-content-height: calc(100vh - var(--footer-height));
		}
	}

	:global(a) {
		color: var(--brown);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	:global(body) {
		font-family: 'Nunito', sans-serif;
		font-weight: 400;
		color: var(--cyan);

		background-color: var(--white);
		margin: 0;
		padding: 0;
	}

	:global(button) {
		background: none;
		border: none;
		margin: 0;
		padding: 0;
	}

	:global(.main-content) {
		padding: 2rem;

		@include mixin.respond-to('xl') {
			padding: 5vh 10vw;
		}
	}

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

	:global(.prose img) {
		max-width: 100%;
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

	:global(.prose table) {
		width: 100%;
		border-collapse: collapse;
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

	.gradient-bg {
		background: linear-gradient(180deg, var(--white) 90%, var(--blue) 100%);
		max-width: 100vw;
		@include mixin.respond-to('xl') {
			margin-left: var(--navbar-width);
		}
	}
</style>
