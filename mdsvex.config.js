import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	// Prism has no `python3` language, only `python` (aliased as `py`); unknown
	// fence languages fail silently, so map the common spellings back onto it.
	highlight: { alias: { python3: 'python', py3: 'python' } },
	smartypants: {
		quotes: false,
		ellipses: true,
		backticks: 'all',
		dashes: 'oldschool',
	},
	rehypePlugins: [
		[
			rehypeExternalLinks,
			{
				target: '_blank',
				rel: ['noopener', 'noreferrer'],
			},
		],
	],
};

export default mdsvexOptions;
