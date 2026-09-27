type Skills = {
	category: string;
	items: string[];
}[];

const Skills: Skills = [
	{
		category: 'Programming languages',
		items: ['Kotlin', 'Java', 'TypeScript', 'JavaScript', 'Go', 'Python', 'Ruby'],
	},
	{
		category: 'Frameworks & Libraries',
		items: [
			'Spring Boot',
			'React.js',
			'Next.js',
			'Vue.js',
			'Nuxt.js',
			'Tailwind CSS',
			'Ruby on Rails',
		],
	},
	{
		category: 'Development tools',
		items: [
			'MySQL',
			'PostgreSQL',
			'SQLite',
			'Docker',
			'Kubernetes',
			'Redis',
			'Git',
			'GitHub CI/CD',
			'REST APIs',
			'microservices',
			'AWS (Batch, S3, SQS)',
			'Apache Airflow',
			'Apache Kafka',
			'Superset',
			'Grafana',
			'Linux',
		],
	},
	{
		category: 'Languages',
		items: ['Indonesian (native)', 'English (fluent)', 'Japanese (basic, self-assessed N5)'],
	},
];

export default Skills;
