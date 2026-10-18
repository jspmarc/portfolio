import { error } from '@sveltejs/kit';
import { metadata } from './content.md';

export function load() {
	// Drafts must be unpublished, not just unlisted: `error(404)` during
	// prerendering skips writing this page, so no HTML is emitted for it.
	if (metadata.draft === true) error(404, 'Post not found');
}
