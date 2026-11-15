import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';

type NavItem = {
	name: string;
	text: string;
	link: ResolvedPathname;
	icon: string;
};

const NavItem: NavItem[] = [
	{
		name: 'home', // default item
		text: 'Home',
		link: resolve('/'),
		icon: 'home',
	},
	{
		name: 'about',
		text: 'About',
		link: resolve('/about'),
		icon: 'address-card',
	},
	// {
	// 	name: 'projects',
	// 	text: 'Projects',
	// 	link: resolve('/projects'),
	// 	icon: 'terminal',
	// },
	{
		name: 'blog',
		text: 'Blog',
		link: resolve('/blog'),
		icon: 'file-signature',
	},
];

export default NavItem;
