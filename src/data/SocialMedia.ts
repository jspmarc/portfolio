type SocialMedia = {
	name: string;
	text: string;
	link: string;
	icon: string;
	isBrand: boolean;
};

const SocialMedia: SocialMedia[] = [
	{
		name: 'github',
		text: 'jspmarc',
		link: 'https://github.com/jspmarc',
		icon: 'github-square',
		isBrand: true,
	},
	{
		name: 'email',
		text: 'Email',
		link: 'mailto:josepmarrrcy2403@gmail.com',
		icon: 'envelope-square',
		isBrand: false,
	},
	{
		name: 'linkedin',
		text: 'Josep Marcello',
		link: 'https://www.linkedin.com/in/josepmk1/',
		icon: 'linkedin',
		isBrand: true,
	},
	{
		name: 'instagram', // default item
		text: '@jspmarc',
		link: 'https://www.instagram.com/jspmarc',
		icon: 'instagram',
		isBrand: true,
	},
];

export default SocialMedia;
