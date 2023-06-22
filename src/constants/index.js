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
  portfolio,
  postgresql,
  python,
  algoritmiсa
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const githubLink = "https://github.com/arsl11";

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python
  }
];

const experiences = [
  {
    title: "Python teacher",
    company_name: "Algoritmica",
    icon: algoritmiсa,
    iconBg: "#383e56",
    date: "March 2021 - May 2021",
    points: [
      "Teaching children the syntax, constructs of the python language",
      "Explaining base algorithms",
      "Checking and helping with homeworks and classworks"
    ]
  },
  {
    title: "Frontend Developer",
    company_name: "A 201",
    icon: agggro,
    iconBg: "#383E56",
    date: "October 2021 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "Portfolio",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/arsl11/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };