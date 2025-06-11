import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  agggro,
  sovcombank,
  portfolio,
  postgresql,
} from '../assets';
import { Experience, Feedback, Project, Service, Technology } from '../types';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const githubLink: string = 'https://github.com/arsl11';

const services: Array<Service> = [
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Web Developer',
    icon: web,
  },
];

const technologies: Array<Technology> = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: Array<Experience> = [
  {
    title: 'Frontend Developer',
    company_name: 'A 201',
    icon: agggro,
    iconBg: '#383E56',
    date: 'October 2021 - December 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Sovcombank Technologies',
    icon: sovcombank,
    iconBg: '#383E56',
    date: 'August 2023 - May 2024',
    points: [
      'Integrated Keycloak into the web applications and supported other Keycloak templates',
      'Developed SPA using React.js, Next.js, FSD architecture',
      'Implemented charts (linear and pie charts) using Highcharts.js with real-time filtering',
      'Improving UX/UI in other projects'
    ]
  }
];

const feedbacks: Array<Feedback> = [];

const projects: Array<Project> = [
  {
    name: '3D Portfolio',
    description:
      'This is 3D website about me (Arifullin Arslan) as a frontend developer. It contains short info, skills, portfolio and contacts.',
    statuses: [
      {
        name: 'Deployed',
        color: 'green-pink-gradient',
      },
      {
        name: 'Developed',
        color: 'violet-gradient',
      },
    ],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/arsl11/portfolio',
  },
];

export { services, technologies, experiences, feedbacks, projects };
