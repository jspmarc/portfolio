/**
 * Fallback types for Svelte components that `svelte2tsx` cannot generate a
 * module for — namely components with no `<script>` block at all.
 *
 * TypeScript only falls back to this when it cannot resolve the import for
 * real, so components that *do* have a `<script>` keep their precise,
 * inferred prop types. This is purely a safety net for the script-less ones.
 */
declare module '*.svelte' {
	import type { Component } from 'svelte';

	// `any` is the shape recommended by the Svelte 5 migration guide for this
	// shim: it must stay permissive so it never rejects a valid usage.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const component: Component<any, any, any>;
	export default component;
}
