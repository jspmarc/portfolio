import { loadPosts } from '#lib/data/BlogPost.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => ({ posts: await loadPosts() });
