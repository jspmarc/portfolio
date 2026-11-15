import rehypeExternalLinks from 'rehype-external-links';

// A code fence followed directly by a blockquote renders as <figure> with the
// blockquote as <figcaption>.
function remarkCodeFigures() {
	const walk = (node) => {
		if (!node.children) return;
		for (let i = 0; i < node.children.length; i++) {
			const child = node.children[i];
			const next = node.children[i + 1];
			if (child.type === 'code' && next?.type === 'blockquote') {
				node.children.splice(i, 2, {
					type: 'blockquote',
					data: { hName: 'figure', hProperties: { className: ['code-figure'] } },
					children: [child, { ...next, data: { hName: 'figcaption' } }],
				});
				continue;
			}
			walk(child);
		}
	};
	return (tree) => walk(tree);
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	// Prism has no `python3` language, only `python` (aliased as `py`); unknown
	// fence languages fail silently, so map the common spellings back onto it.
	highlight: { alias: { python3: 'python', py3: 'python' } },
	remarkPlugins: [remarkCodeFigures],
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
