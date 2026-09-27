type Experience = {
	title: string;
	description: string;
	company?: string;
	role?: string;
	year: {
		from: {
			month: string;
			year: string;
		};
		to?: {
			month: string;
			year: string;
		};
	};
	links?: {
		certificate?: string;
		gitRepo?: string; // TODO: Change this to the project's page then the Project view/page is done
		website?: string;
	};
};

const Experiences: Experience[] = [
	{
		title: 'Data Engineer at Sales Marker Co., Ltd.',
		company: 'Sales Marker Co., Ltd.',
		role: 'Data Engineer',
		description: `
  <ul>
    <li>Maintaining and improving ETL pipelines and batch jobs behind daily operations (Python, AWS Batch, Airflow), including web-scraper jobs, with 4 other engineers.</li>
    <li>Upgrading Superset 3 to 6 along with Docker to Kubernetes and SQLite to PostgreSQL migrations.</li>
    <li>Migrated AWS batch job authorization from long-lived tokens to IAM roles.</li>
    <li>Established naming conventions for Kafka topics and AWS SQS queues.</li>
  </ul>
`,
		year: {
			from: {
				month: 'Jul',
				year: '2026',
			},
		},
	},
	{
		title: 'Full-stack Software Engineer at Sales Marker Co., Ltd.',
		company: 'Sales Marker Co., Ltd.',
		role: 'Full-stack Software Engineer',
		description: `
  <ul>
    <li>Built the Sequence feature on Sales Marker's main services (Go, TypeScript, React.js) in a 4-engineer team.</li>
    <li>Overhauled a prototype form-filling service into LLM-driven automation, building a test suite, output-quality evaluation cases, and a dashboard for tracking agent results.</li>
    <li>Led three customer-facing feature projects end-to-end, from planning to production release.</li>
    <li>Set up CI/CD for two undocumented services and wrote the handoff docs.</li>
  </ul>
`,
		year: {
			from: {
				month: 'Nov',
				year: '2025',
			},
			to: {
				month: 'Jul',
				year: '2026',
			},
		},
	},
	{
		title: 'Full-stack Software Engineer at Money Forward, Inc.',
		company: 'Money Forward, Inc.',
		role: 'Full-stack Software Engineer',
		description: `
  <ul>
    <li>Designed, implemented, and maintained GraphQL APIs integrated into Vue.js/Nuxt.js features for a B2B SaaS HR platform, while initiating a Kotlin migration in a ~20-engineer organization spanning Rails, Next.js, and Nuxt.js services.</li>
    <li>Architected an audit log system recording every change to SQL data, archiving logs older than 6 months to S3, reading archives directly from S3, and syncing with the company-wide audit system.</li>
    <li>Improved the onboarding experience for new engineers by improving project set-up duration from around 1 week to just 1 day.</li>
    <li>Architected a navigation system to seamlessly navigate between Next.js pages, Nuxt.js pages, and Nuxt-within-Next pages, accelerating the Next.js migration.</li>
    <li>One of the initiators of the Rails-to-Kotlin migration; wrote two feature migration plans.</li>
    <li>Led a two-person project to simplify the application's permissions system, improving user experience and creating a coordinated release process for users and engineers.</li>
  </ul>
`,
		year: {
			from: {
				month: 'Apr',
				year: '2024',
			},
			to: {
				month: 'Oct',
				year: '2025',
			},
		},
	},
	{
		title: 'Software Engineer I at Tiket.com',
		company: 'Tiket.com',
		role: 'Software Engineer I',
		description: `
  <ul>
    <li>Owned and maintained all five accommodation demand post-purchase services (booking, reschedule, and refund)&mdash;built with Java 8 and Spring Boot&mdash;in a 3-engineer team.</li>
    <li>Led the Spring Boot 1.5 to 2 upgrade of my team's core service, cutting CPU usage from ~41% to just ~13%.</li>
    <li>Refactored the booking API to make it more readable and to prevent hotel double-booking, reducing customer complaints.</li>
    <li>Served as the interim point of contact for the multi-currency feature, keeping stakeholders and engineers aligned on delivery.</li>
  </ul>
`,
		year: {
			from: {
				month: 'Jun',
				year: '2022',
			},
			to: {
				month: 'Mar',
				year: '2024',
			},
		},
	},
	{
		title: 'Junior Backend Engineer at Kenangan.com',
		company: 'Kenangan.com',
		role: 'Part-time Junior Backend Engineer',
		description: `
  <ul>
    <li>Owned and maintained the order feature on the backend (in TypeScript) with 4 other engineers.</li>
    <li>Architected the order system of the application, enabling users to create orders.</li>
    <li>Integrated Shipper.id's shipping API end-to-end, improving the seller experience from order creation through order shipment.</li>
  </ul>
`,
		year: {
			from: {
				month: 'Dec',
				year: '2021',
			},
			to: {
				month: 'Jun',
				year: '2022',
			},
		},
	},
	{
		title: 'Head of Perayaan Wisuda Juli ITB 2021 Website Development',
		company: 'Perayaan Wisuda Juli ITB 2021 (ITB July 2021 Graduation Committee)',
		role: 'Head of Website Development',
		description: `
  <p><em>Perayaan Wisuda Juli</em> (July Graduation Celebration) is one of many prestigious events in my university. On 2021, I was given the honor to work as the head of development for the event's website.</p>
  <p>On this project, I was also responsible as a fullstack developer and a dev-ops engineer. Although I had many roles, my work mostly consists of:</p>
  <ul>
    <li>Worked with my vice-project-manager to plan the project and manage a team of 11 developers</li>
    <li>Worked with another engineer to create a CI/CD pipeline</li>
    <li>Worked with another engineer to create the database and back end system</li>
    <li>Worked with other engineers to make new features for the website and fix bugs</li>
    <li>Deployed the website and the back end server to a DigitalOcean droplet</li>
    <li>Worked with my vice-project-manager to review pull (merge) requests on the project</li>
  </ul>
`,
		year: {
			from: {
				month: 'May',
				year: '2021',
			},
			to: {
				month: 'Jul',
				year: '2021',
			},
		},
		links: {
			gitRepo: 'https://github.com/paradewisudaitb/Frontend-Wisjul21',
			website: 'https://wisjulitb.com',
		},
	},
	{
		title: 'Best staff of Arkavidia 7.0 CTF Division',
		company: 'HMIF ITB - Arkavidia Committee',
		role: 'Best staff of CTF Division',
		description: `
  <p>Arkavidia is a national event held by my student's association. Arkavidia 7.0 consisted of webinars, webtalks, and programming-related competitions.</p>
  <p>On this event, as part of the comittee, I was responsible for creating creative CTF problems for the competitor.</p>
`,
		year: {
			from: {
				month: 'Sep',
				year: '2020',
			},
			to: {
				month: 'Mar',
				year: '2021',
			},
		},
	},
	{
		title: 'Data Analyst Intern at CoLearn',
		company: 'CoLearn',
		role: 'Data Analyst Intern',
		description: `
  <p>During my time as an intern at CoLearn, I was tasked to optimize machine learning algorithm by evaluating over 10,000 pictures from machine learning predicition.</p>
  <p>I also optimized my team's workflow by creating a Python script to automatically download JSON data from an API and then automatically parsing it into a CSV file.</p>
`,
		year: {
			from: {
				month: 'Sep',
				year: '2020',
			},
			to: {
				month: 'Feb',
				year: '2021',
			},
		},
	},
	{
		title: 'Software Engineeer Intern at Wardaya College',
		company: 'Wardaya College',
		role: 'Software Engineer Intern',
		description: `
  <p>At this intern, I worked on a new product by Wardaya College with 3 other software engineers. I, was responsible on creating back-end APIs and DB Schema.</p>
  <p>I was also responsible on administrating a Moodle-based e-learning website with 3 other software engineers.</p>
`,
		year: {
			from: {
				month: 'Mar',
				year: '2020',
			},
			to: {
				month: 'Aug',
				year: '2020',
			},
		},
	},
];
export default Experiences;
