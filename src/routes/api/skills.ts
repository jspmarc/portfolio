import type { RequestHandler } from './__types/skills';
import type Skill from '$lib/types/Skill';

export const get: RequestHandler = () => {
	const body: Skill[] = [
		{
			category: 'Programming Languages',
			contents: [
				{
					name: 'C',
					icon: {
						src: 'img',
						img_name: 'c.svg',
					},
				},
				{
					name: 'TypeScript',
					icon: {
						src: 'img',
						img_name: 'ts-logo-512.svg',
					},
				},
				{
					name: 'Go',
					icon: {
						src: 'img',
						img_name: 'go.svg',
					},
				},
				{
					name: 'Python',
					icon: {
						src: 'img',
						img_name: 'python.svg',
					},
				},
				{
					name: 'Rust',
					icon: {
						src: 'img',
						img_name: 'rust.svg',
					},
				},
				{
					name: 'Java',
					icon: {
						src: 'img',
						img_name: 'java.svg',
					},
				},
				{
					name: 'C++',
					icon: {
						src: 'img',
						img_name: 'Cpp.svg',
					},
				},
				{
					name: 'JavaScript',
					icon: {
						src: 'img',
						img_name: 'js.svg',
					},
				},
				{
					name: 'C#',
					icon: {
						src: 'img',
						img_name: 'Csharp.svg',
					},
				},
				{
					name: 'Bash',
					icon: {
						src: 'img',
						img_name: 'bash.svg',
					},
				},
				{
					name: 'SQL',
				},
				{
					name: 'HTML5',
					icon: {
						src: 'img',
						img_name: 'html5.svg',
					},
				},
				{
					name: 'CSS3',
					icon: {
						src: 'img',
						img_name: 'css3.svg',
					},
				},
				{
					name: 'SCSS',
					icon: {
						src: 'img',
						img_name: 'sass.svg',
					},
				},
			],
		},
		{
			category: 'Framework and Libraries',
			contents: [
				{
					name: 'Svelte',
					icon: {
						src: 'img',
						img_name: 'svelte-logo.svg',
					},
				},
				{
					name: 'Vue',
					icon: {
						src: 'img',
						img_name: 'vue.svg',
					},
				},
				{
					name: 'React',
					icon: {
						src: 'img',
						img_name: 'react.svg',
					},
				},
				{
					name: 'express.js',
				},
				{
					name: 'Tailwind',
					icon: {
						src: 'img',
						img_name: 'tailwind.svg',
					},
				},
			],
		},
		{
			category: 'Development Tools',
			contents: [
				{
					name: 'CLI Unix tools',
					icon: {
						src: 'img',
						img_name: 'linux.svg',
					},
				},
				{
					name: 'Git',
					icon: {
						src: 'img',
						img_name: 'git.svg',
					},
				},
				{
					name: 'GNU make',
				},
				{
					name: 'Node.js',
					icon: {
						src: 'fab',
						img_name: 'fa-node-js',
					},
				},
				{
					name: 'Docker',
					icon: {
						src: 'fab',
						img_name: 'fa-docker',
					},
				},
			],
		},
		{
			category: 'Others',
			contents: [
				{
					name: 'TeX',
					icon: {
						src: 'img',
						img_name: 'tex.svg',
					},
				},
			],
		},
	];
	return {
		body,
	};
};
