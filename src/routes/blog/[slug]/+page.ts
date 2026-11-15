import { error } from '@sveltejs/kit';
import { contentFor } from '$lib/data/BlogPost';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const getContent = contentFor(params.slug);
	if (!getContent) error(404, 'Post not found');

	const post = await getContent();
	if (post.metadata.draft === true) error(404, 'Post not found');

	return { post };
};
