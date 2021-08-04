type Skiils = {
  category: string;
  contents: {
    name: string;
    icon?: {
      src: string;
      imgName: string;
    };
  }[];
};

const Skills: Skiils[] = [
  {
    category: 'Programming Languages',
    contents: [
      {
        name: 'C',
        icon: {
          src: 'img',
          imgName: 'c.svg',
        },
      },
      {
        name: 'TypeScript',
        icon: {
          src: 'img',
          imgName: 'ts-logo-512.svg',
        },
      },
      {
        name: 'Go',
        icon: {
          src: 'img',
          imgName: 'go.svg',
        },
      },
      {
        name: 'Python',
        icon: {
          src: 'img',
          imgName: 'python.svg',
        },
      },
      {
        name: 'Rust',
        icon: {
          src: 'img',
          imgName: 'rust.svg',
        },
      },
      {
        name: 'Java',
        icon: {
          src: 'img',
          imgName: 'java.svg',
        },
      },
      {
        name: 'C++',
        icon: {
          src: 'img',
          imgName: 'C++.svg',
        },
      },
      {
        name: 'JavaScript',
        icon: {
          src: 'img',
          imgName: 'js.svg',
        },
      },
      {
        name: 'C#',
        icon: {
          src: 'img',
          imgName: 'Csharp.svg',
        },
      },
      {
        name: 'Bash',
        icon: {
          src: 'img',
          imgName: 'bash.svg',
        },
      },
    ],
  },
  // TODO: Finish this
  {
    category: 'Framework and Libraries',
    contents: [
      {
        name: 'Svelte',
        icon: {
          src: 'img',
          imgName: 'svelte-logo.svg',
        },
      },
    ],
  },
  {
    category: 'Development Tools',
    contents: [
      {
        name: 'SQL',
      },
    ],
  },
  {
    category: 'Others',
    contents: [
      {
        name: 'TeX',
        icon: {
          src: 'img',
          imgName: 'tex.svg',
        },
      },
    ],
  },
];

export default Skills;
