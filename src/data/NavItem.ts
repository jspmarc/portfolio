import Home from '../views/Home.svelte';
import ComingSoon from '../views/ComingSoon.svelte';
import type INavItem from '../interfaces/INavItem';

const NavItem: INavItem[] = [
  {
    name: 'home', // default item
    text: 'Home',
    link: '#',
    icon: 'home',
    page: Home,
  },
  {
    name: 'about',
    text: 'About',
    link: '#',
    icon: 'address-card',
    page: ComingSoon,
  },
  {
    name: 'contact',
    text: 'Contact',
    link: '#',
    icon: 'at',
    page: ComingSoon,
  },
  {
    name: 'portfolio',
    text: 'Portfolio',
    link: '#',
    icon: 'terminal',
    page: ComingSoon,
  },
  {
    name: 'blog',
    text: 'Blog',
    link: '#',
    icon: 'file-signature',
    page: ComingSoon,
  },
];

export default NavItem;
