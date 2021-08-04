type Skiils = {
  category: string;
  contents: {
    name: string;
    icon?: {
      src: 'img' | 'fab' | 'fas' | 'far';
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
      {
        name: 'SQL',
      },
      {
        name: 'HTML5',
        icon: {
          src: 'img',
          imgName: 'html5.svg',
        },
      },
      {
        name: 'CSS3',
        icon: {
          src: 'img',
          imgName: 'css3.svg',
        },
      },
      {
        name: 'SCSS',
        icon: {
          src: 'img',
          imgName: 'sass.svg',
        },
      },
    ],
  },
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
      {
        name: 'Vue',
        icon: {
          src: 'img',
          imgName: 'vue.svg',
        },
      },
      {
        name: 'React',
        icon: {
          src: 'img',
          imgName: 'react.svg',
        },
      },
      {
        name: 'express.js',
      },
      {
        name: 'Tailwind',
        icon: {
          src: 'img',
          imgName: 'tailwind.svg',
        },
      },
    ],
  },
  {
    category: 'Development Tools',
    contents: [
      {
        name: 'CLI Unix tools',
        icon: {
          src: 'img',
          imgName: 'linux.svg',
        },
      },
      {
        name: 'Git',
        icon: {
          src: 'img',
          imgName: 'git.svg',
        },
      },
      {
        name: 'GNU make',
      },
      {
        name: 'Node.js',
        icon: {
          src: 'fab',
          imgName: 'fa-node-js',
        },
      },
      {
        name: 'Docker',
        icon: {
          src: 'fab',
          imgName: 'fa-docker',
        },
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
