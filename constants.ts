
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
  { platform: 'Resume', url: '/images/irfan-resume.pdf', icon: FileText },
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
    title: "The Swift Dictionary",
    description: "A full-stack lexical product that transforms Taylor Swift lyrics into a searchable vocabulary engine across all 12 eras. Includes dictionary filters, era/song exploration, Word of the Day, and saved words with Supabase Auth + RLS.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Python"],
    liveUrl: "https://the-swift-dictionary.me/",
    githubUrl: "https://github.com/irfan-rg/the-swift-dictionary",
    category: "Content Platform",
    highlight: true,
    image: "/projects/the-swift-dictionary.png"
  },
  {
    title: "Inkwell",
    description: "A creator-first CMS platform for publishing and managing long-form content with a type-safe tRPC + Drizzle backend. Optimized editorial workflows and reduced API latency by ~43% for faster content shipping.",
    tags: ["Next.js", "tRPC", "Drizzle ORM", "Supabase", "Tailwind"],
    liveUrl: "https://inkwelll.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/inkwell",
    category: "CMS Platform",
    highlight: true,
    image: "/projects/inkwell.png"
  },
  {
    title: "Caliber",
    description: "An AI agent evaluation platform for benchmarking prompt chains and response quality at scale. Built repeatable scoring workflows that accelerated evaluation cycles by 60-70% and improved retrieval accuracy by ~30%.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "ShadCN UI"],
    liveUrl: "https://caliber-ai.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/caliber",
    category: "AI Platform",
    image: "/projects/caliber.png"
  },
  {
    title: "The XO Store",
    description: "A production-style merchandise storefront focused on conversion and trust. Integrated Stripe checkout, Auth0 identity, and media handling to deliver reliable transactions and a polished buying journey.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Auth0", "Cloudinary"],
    liveUrl: "https://thexostore.vercel.app",
    githubUrl: "https://github.com/irfan-rg/the-xo-store",
    category: "Commerce",
    highlight: true,
    image: "/projects/the-xo-store.png"
  },
  {
    title: "F1 Race Predictor",
    description: "A race outcome prediction system combining historical Formula 1 performance data with real-time qualifying signals. Built a multi-season ML training workflow and reached ~82% prediction accuracy.",
    tags: ["Python", "Scikit-learn", "OpenF1 API", "Pandas"],
    liveUrl: "#",
    githubUrl: "https://github.com/irfan-rg/f1-predictor",
    category: "ML Analytics",
    image: "/projects/f1.png"
  },
  {
    title: "Qube AI",
    description: "A low-latency conversational AI app engineered for speed and throughput. Integrated Groq-hosted Llama models with lightweight backend orchestration to support up to 14k requests per day.",
    tags: ["Node.js", "Express", "Groq Cloud API", "HTML/CSS"],
    liveUrl: "https://qube-chat.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/qube-ai",
    category: "AI Product",
    image: "/projects/qube.png"
  },
  {
    title: "Birthday Present",
    description: "An interactive web storytelling piece built as a digital keepsake, blending cinematic motion and playful physics for emotional impact. Designed custom scene choreography for an immersive experience.",
    tags: ["React", "TypeScript", "Framer Motion", "Particles.js"],
    liveUrl: "https://my-present.vercel.app/",
    githubUrl: "https://github.com/irfan-rg/present",
    category: "Interactive Experience",
    image: "/projects/present.png"
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