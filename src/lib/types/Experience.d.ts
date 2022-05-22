type Experience = {
	title: string;
	description: string;
	year: {
		from: string;
		to: string;
	};
	links?: {
		certificate?: string;
		git_repo?: string; // TODO: Change this to the project's page then the Project view/page is done
		website?: string;
	};
};

export default Experience;
