import type ComingSoon from '../views/ComingSoon.svelte';

export default interface INavItem {
  name: string,
  text: string,
  link: string,
  icon: string,
  page: typeof ComingSoon,
}