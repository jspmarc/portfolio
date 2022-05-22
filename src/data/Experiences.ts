type Experience = {experie
  title: string;
  description: string;
  year: {
    from: string;
    to: string;
  };
  links?: {
    certificate?: string;
    gitRepo?: string; // TODO: Change this to the project's page then the Project view/page is done
    website?: string;
  };
};

const Experiences: Experience[] = [
  {
    title: 'Head of Perayaan Wisuda Juli ITB 2021 Website Development',
    description: `
  <p><em>Perayaan Wisuda Juli</em> (July Graduation Celebration) is one of many prestigious events in my university. On 2021, I was given the honor to work as the project manager for the event's website.</p>
  <p>On this project, I was also responsible as a fullstack developer and a dev-ops engineer. Although I had many roles, my work mostly consists of:</p>
  <ul>
    <li>Work with my vice-project-manager to plan the project and manage a team of 11 developers</li>
    <li>Work with another engineer to create a CI/CD pipeline</li>
    <li>Work with another engineer to create the database and back end system</li>
    <li>Work with other engineers to make new features for the website and fix bugs</li>
    <li>Deploying the website and the back end server to a DigitalOcean droplet</li>
    <li>Work with my vice-project-manager to review pull (merge) requests on the project</li>
  </ul>
`,
    year: {
      from: 'May 2021',
      to: 'July 2021',
    },
    links: {
      gitRepo: 'https://github.com/paradewisudaitb/Frontend-Wisjul21',
      website: 'https://wisjulitb.com',
    },
  },
  {
    title: 'Best staff of Arkavidia 7.0 CTF Division',
    description: `
  <p>Arkavidia is a national event held by my student's association. Arkavidia 7.0 consisted of webinars, webtalks, and programming-related competitions.</p>
  <p>On this event, as part of the comittee, I was responsible for creating creative CTF problems for the competitor.</p>
`,
    year: {
      from: 'September 2020',
      to: 'March 2021',
    },
  },
  {
    title: 'Data Analyst Intern at CoLearn',
    description: `
  <p>During my time as an intern at CoLearn, I was tasked to optimize machine learning algorithm by evaluating over 10,000 pictures from machine learning predicition.</p>
  <p>I also optimized my team's workflow by creating a Python script to automatically download JSON data from an API and then automatically parsing it into a CSV file.</p>
`,
    year: {
      from: 'September 2020',
      to: 'February 2021',
    },
  },
  {
    title: 'Software Engineeer Intern at Wardaya College',
    description: `
  <p>At this intern, I worked on a new product by Wardaya College with 3 other software engineers. I, specifically, was responsible on creating back-end APIs and DB Schema.</p>
  <p>I was also responsible on administrating a Moodle-based e-learning website with 3 other software engineers.</p>
`,
    year: {
      from: 'March 2020',
      to: 'August 2020',
    },
  },
];
export default Experiences;
