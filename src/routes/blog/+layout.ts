import { error } from '@sveltejs/kit';
import { metadataBySlug } from '$lib/data/BlogPost';

// Drafts must be unpublished, not just unlisted: `error(404)` during
// prerendering skips writing the page, so no HTML is emitted for it.
// Living in the layout means every new post folder is guarded
// automatically — there is no per-post +page.ts to remember.
export function load({ url }: { url: URL }) {
	const slug = url.pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];
	if (slug && metadataBySlug[slug]?.draft === true) error(404, 'Post not found');
}
