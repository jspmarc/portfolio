import type { Component } from 'svelte';
import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';

export type BlogPostMetadata = {
	title?: string;
	description?: string;
	date?: string;
	draft?: boolean;
};

export type BlogPost = BlogPostMetadata & {
	slug: string;
	url: ResolvedPathname;
};

// mdsvex compiles each post into its own component. Lazy glob: the list only
// reads metadata, and the [slug] loader imports just the post being rendered.
const modules = import.meta.glob<{ default: Component; metadata: BlogPostMetadata }>(
	'../../content/blog/*.md'
);

const slugFromPath = (path: string) => path.match(/([^/]+)\.md$/)?.[1] ?? path;

export const contentFor = (slug: string) => modules[`../../content/blog/${slug}.md`];

export async function loadPosts(): Promise<BlogPost[]> {
	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, load]) => {
			const slug = slugFromPath(path);
			const { metadata } = await load();

			return { ...metadata, slug, url: resolve('/blog/[slug]', { slug }) };
		})
	);

	return posts
		.filter(post => post.draft !== true)
		.sort((a, b) => {
			// Newest first; posts without a date go last and fall back to title order.
			const dateComparison = (b.date ?? '').localeCompare(a.date ?? '');
			if (dateComparison !== 0) return dateComparison;

			return (a.title ?? a.slug).localeCompare(b.title ?? b.slug);
		});
}
