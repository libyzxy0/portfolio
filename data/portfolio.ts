import { SkillCategories, Project } from "@/types/portfolio";

export const TERMINAL_LINES = [
  { prompt: "whoami", output: "Jan Liby Dela Costa" },
  { prompt: "cat role.txt", output: "BSIT Student & Full-Stack Developer" },
  {
    prompt: "cat bio.txt",
    output: "I build simple, modern software that solves real-world problems.",
  },
];

export const SKILLS: SkillCategories = {
  Languages: [
    { name: "HTML5", badge: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
    { name: "CSS3", badge: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
    { name: "JavaScript", badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
    { name: "TypeScript", badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "Python", badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
    { name: "C++", badge: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
  ],
  "Frameworks & Libraries": [
    { name: "React", badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
    { name: "Next JS", badge: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" },
    { name: "React Native", badge: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
    { name: "Expo", badge: "https://img.shields.io/badge/expo-1C1E24.svg?style=for-the-badge&logo=expo&logoColor=#D04A37" },
    { name: "NodeJS", badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
    { name: "Vite", badge: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" },
    { name: "TailwindCSS", badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
  ],
  "Databases & Backend": [
    { name: "Postgres", badge: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "Drizzle", badge: "https://img.shields.io/badge/Drizzle-%23000000?style=for-the-badge&logo=drizzle&logoColor=C5F74F" },
  ],
  "Tools & Platforms": [
    { name: "Git", badge: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
    { name: "Cloudflare", badge: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" },
    { name: "Vercel", badge: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" },
    { name: "Arduino", badge: "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white" },
    { name: "Canva", badge: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "URPocket",
    description: "A handheld device that boost productivity, and help us in our studies.",
    tags: ["ESP32", "C++", "Python"],
    github: "https://github.com/libyzxy0/urpocket",
    demo: "#",
  },
  {
    title: "EZVote",
    description: "A simple Election Management Systemm (EMS). Built for schools, organizations, and communities that value trust.",
    tags: ["Next.js", "PostgreSQL", "DrizzleORM", "Tailwind CSS"],
    github: "#",
    demo: "https://ezvote.vercel.app",
  },
  {
    title: "LCC Digital Gatepass System",
    description: "Digital Gatepass System for La Concepcion College, for access control and to monitor statistics and students, visitors, staffs entry and exit times. — Awarded as Best Research Project",
    tags: ["React", "Tailwind CSS", "TypeScript", "PostgreSQL", "DrizzleORM"],
    github: "https://github.com/libyzxy0/lcc-gatepass-system",
    demo: "https://admin.lccgatepass.xyz",
  },
  {
    title: "Epon: Savings tracker app",
    description: "Epon is a personal savings tracker app designed to track your savings progress and make savings for your wishes easier.",
    tags: ["React Native", "TypeScript"],
    github: "https://github.com/libyzxy0/epon",
    demo: "https://epon.en.uptodown.com/android",
  },
];