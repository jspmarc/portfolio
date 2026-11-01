type BlogPostMetadata = {
	title?: string;
	description?: string;
	date?: string;
	draft?: boolean;
};

type BlogPost = BlogPostMetadata & {
	slug: string;
	url: string;
};

// mdsvex exposes each post's frontmatter as a `metadata` named export, so we can
// collect every post's metadata at build time without loading the rendered content.
const modules = import.meta.glob<{ metadata: BlogPostMetadata }>('../../routes/blog/*/content.md', {
	eager: true,
});

const slugFromPath = (path: string) => path.match(/([^/]+)\/content\.md$/)?.[1] ?? path;

// Every post's raw metadata (drafts included), keyed by slug. The blog layout
// uses this to 404 draft posts at their direct URL, so draft means
// unpublished, not just unlisted.
export const metadataBySlug: Record<string, BlogPostMetadata> = Object.fromEntries(
	Object.entries(modules).map(([path, module]) => [slugFromPath(path), module.metadata])
);

const BlogPost: BlogPost[] = Object.entries(modules)
	.map(([path, module]) => {
		const slug = slugFromPath(path);

		return {
			...module.metadata,
			slug,
			url: `/blog/${slug}`,
		};
	})
	.filter(post => post.draft !== true)
	.sort((a, b) => {
		// Newest first; posts without a date go last and fall back to title order.
		const dateComparison = (b.date ?? '').localeCompare(a.date ?? '');
		if (dateComparison !== 0) return dateComparison;

		return (a.title ?? a.slug).localeCompare(b.title ?? b.slug);
	});

export default BlogPost;
