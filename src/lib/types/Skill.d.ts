type Skill = {
	category: string;
	contents: {
		name: string;
		icon?: {
			src: 'img' | 'fab' | 'fas' | 'far';
			img_name: string;
		};
	}[];
};

export default Skill;
