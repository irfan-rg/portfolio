
import { Project, SkillCategory, SocialLink } from './types';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/irfan-rg', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/irfanrg', icon: Linkedin },
  { platform: 'Email', url: 'mailto:irfanrgulagundi@gmail.com', icon: Mail },
  { platform: 'Resume', url: 'assets/irfan-resume.pdf', icon: FileText },
];

export const INTERESTS = [
  "Web Development",
  "Machine Learning & Big Data",
  "Cloud Computing",
  "Blockchain & Cryptography",
  "Network Systems & Security"
];

export const PROJECTS: Project[] = [
  {
    title: "Caliber",
    description: "AI Agent Evaluation Platform benchmarking agents with 60-70% faster evaluation cycles. Integrated RAG-style flows using structured prompts & vector search, improving query accuracy by ~30%.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "ShadCN UI"],
    liveUrl: "https://caliber-ai.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/caliber",
    category: "AI Engineering",
    highlight: true,
    image: "/assets/projects/caliber.png"
  },
  {
    title: "Inkwell",
    description: "Full-Stack Blogging Platform with a type-safe backend (tRPC + Drizzle) reducing API response time by ~43%. Enables creators to publish content 50% faster via a streamlined CMS workflow.",
    tags: ["Next.js", "tRPC", "Drizzle ORM", "Supabase", "Tailwind"],
    liveUrl: "https://inkwelll.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/inkwell",
    category: "Full Stack",
    image: "/assets/projects/inkwell.png"
  },
  {
    title: "The XO Store",
    description: "The Weeknd's Official Merchandise Store. Implemented secure checkout with Stripe & Auth0, achieving a 100% successful test transaction rate and reducing login flow time by 25%.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Auth0", "Cloudinary"],
    liveUrl: "https://thexostore.vercel.app",
    githubUrl: "https://github.com/irfan-rg/the-xo-store",
    category: "E-Commerce",
    highlight: true,
    image: "/assets/projects/the-xo-store.png"
  },
  {
    title: "F1 Race Predictor",
    description: "ML-Based Prediction System utilizing historical data and real-time qualifying results. Trained a regression model on 5+ seasons of F1 data, achieving ~82% prediction accuracy.",
    tags: ["Python", "Scikit-learn", "OpenF1 API", "Pandas"],
    liveUrl: "#",
    githubUrl: "https://github.com/irfan-rg/f1-predictor",
    category: "Data Science",
    image: "/assets/projects/f1.png"
  },
  {
    title: "Qube AI",
    description: "Lightning-fast iOS-style chatbot powered by Groq and Llama 3.3 70B. Handles up to 14k requests/day with a sleek UI.",
    tags: ["Node.js", "Express", "Groq Cloud API", "HTML/CSS"],
    liveUrl: "https://qube-chat.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/qube-ai",
    category: "AI/ML",
    image: "/assets/projects/qube.png"
  },
  {
    title: "Birthday Present",
    description: "A digital keepsake designed with complex animations and physics interactions to celebrate a special occasion.",
    tags: ["React", "TypeScript", "Framer Motion", "Particles.js"],
    liveUrl: "https://my-present.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/present",
    category: "Creative",
    image: "/assets/projects/present.png"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Core Engineering",
    skills: ["C/C++", "Python", "Java", "JavaScript", "TypeScript"],
    className: "col-span-12 md:col-span-4"
  },
  {
    title: "Frontend Ecosystem",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
    className: "col-span-12 md:col-span-8"
  },
  {
    title: "Backend & Cloud",
    skills: ["Node.js", "Express", "REST APIs", "AWS", "Google Cloud", "MongoDB", "PostgreSQL"],
    className: "col-span-12 md:col-span-8"
  },
  {
    title: "Data & AI",
    skills: ["Machine Learning", "Big Data", "Hadoop", "Spark", "Predictive Modeling"],
    className: "col-span-12 md:col-span-4"
  },
  {
    title: "Web3 & Security",
    skills: ["Solidity", "Smart Contracts", "Cryptography", "Network Security", "Blockchain"],
    className: "col-span-12 md:col-span-6"
  },
  {
    title: "DevOps & Tools",
    skills: ["Git/GitHub", "Docker", "Vercel", "Linux/Ubuntu", "VS Code"],
    className: "col-span-12 md:col-span-6"
  }
];