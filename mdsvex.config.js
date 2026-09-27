import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
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
