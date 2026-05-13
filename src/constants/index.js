
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import project4 from '../assets/project4.webp';
import project5 from '../assets/project5.webp';

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

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Python Developer Intern (Best Performer)",
    company_name: "Elevate Labs",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    iconBg: "#383E56",
    date: "Sep 2025 - Nov 2025",
    points: [
      "Worked on real-world Python development tasks and backend problem-solving.",
      "Developed backend logic, debugging solutions, and automation scripts using Python.",
      "Recognized as Best Performer for exceptional contribution and consistent performance.",
      "Delivered high-quality solutions within deadlines and collaborative environments.",
    ],
  },

  {
    title: "Software Development Engineering Intern (Team Lead)",
    company_name: "Bluestock.in",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    iconBg: "#E6DEDD",
    date: "May 2025 - Jun 2025",
    points: [
      "Led a team of developers in designing and deploying scalable software modules.",
      "Managed task allocation and tracked development progress.",
      "Conducted code reviews and resolved technical challenges.",
      "Worked in agile development workflows and collaborative environments.",
    ],
  },

  {
    title: "Python Developer Intern",
    company_name: "Main Flow Services",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    iconBg: "#383E56",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed automation scripts and backend solutions using Python.",
      "Worked on data-driven logic and algorithm optimization.",
      "Improved debugging and backend development capabilities.",
    ],
  },

  {
    title: "Web Development Intern",
    company_name: "Techsonixch",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Designed and developed responsive web applications using React, HTML, and CSS.",
      "Improved UI/UX design and frontend responsiveness.",
      "Collaborated with developers to build user-friendly applications.",
    ],
  },

  {
    title: "AWS Solutions Architecture Job Simulation",
    company_name: "Forage",
    icon: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Designed scalable cloud-based application architectures.",
      "Worked on AWS deployment, compute, and storage concepts.",
      "Learned scalability, reliability, and cloud optimization strategies.",
    ],
  },
  {
    title: "Software Engineering Job Simulation",
    company_name: "J.P. Morgan Chase & Co. – Forage",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968252.png",
    iconBg: "#383E56",
    date: "Sep 2025 - Oct 2025",
    points: [
      "Completed practical software engineering tasks through the J.P. Morgan Chase & Co. job simulation program.",
      "Worked on project setup and backend system integration workflows.",
      "Implemented Kafka integration concepts for real-time data handling.",
      "Worked with H2 database integration and REST API development.",
      "Developed understanding of REST API controllers and backend architecture.",
      "Gained exposure to enterprise-level software engineering practices and system design concepts.",
    ],
  }
];

const projects = [
  {
    name: "Strenix – AI-Based Health & Gym Management System",
    description:
      "Developed a comprehensive AI-powered full-stack gym and fitness management platform with smart automation, AI-based pose detection, workout tracking, and virtual trainer support.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/ACE6359/Strenix.git"
  },

  {
    name: "Voice Activated Calculator",
    description:
      "Built an AI-powered voice-controlled calculator capable of handling scientific and financial calculations using speech recognition and intelligent voice interaction.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Whisper AI",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/ACE6359/V-A-C.git"
  },

  {
    name: "Shopping Website",
    description:
      "Developed a responsive full-stack shopping website using React.js and Vite with dynamic product browsing, category filtering, authentication, cart management, and checkout functionality. Integrated Fake Store API for real-time product data and user authentication while implementing a clean mobile-first responsive design.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Fake Store API",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/ACE6359/Shopping-Website.git",
  },
];

export { services, technologies, experiences, projects };
