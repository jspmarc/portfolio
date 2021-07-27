type Experience = {
  id: number;
  title: string;
  description: string;
  year: {
    detailed: {
      from: string;
      to?: string;
    };
    short: {
      from: number;
      to?: number;
    };
  };
};

const Experiences: Experience[] = [
  {
    id: 1,
    title: 'Website Perayaan Wisuda Juli ITB 2021',
    description: `
  <p>asdsadasdasdasd</p>
  <p>helphleplhephlpp</p>
  <ul>
    <li> bruh </li>
    <li> moment </li>
  </ul>
`,
    year: {
      detailed: {
        from: 'May 2021',
        to: 'July 2021',
      },
      short: {
        from: 2021,
      },
    },
  },
  {
    id: 2,
    title: 'Website Perayaan Wisuda Juli ITB 2021',
    description: `
  <p>asdsadasdasdasd</p>
  <p>helphleplhephlpp</p>
  <ul>
    <li> bruh </li>
    <li> moment </li>
  </ul>
`,
    year: {
      detailed: {
        from: 'May 2021',
        to: 'July 2021',
      },
      short: {
        from: 2021,
      },
    },
  },
];
export default Experiences;
