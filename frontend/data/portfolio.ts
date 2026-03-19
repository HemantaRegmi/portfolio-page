import type {
  AboutData,
  ContactData,
  EducationRecord,
  Experience,
  HeroData,
  NavItem,
  Project,
  Skill,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
];

export const heroData: HeroData = {
  headingStart: "Passionate About Delivering",
  headingAccent: "Solutions",
  headingEnd: "End-to-End",
  tags: [
    "Full-Stack Developer",
    "Scalable Systems",
    "Cloud Infrastructure",
    "Performance-Driven",
  ],
  ctaLabel: "View My Work",
  ctaHref: "#projects",
};

export const aboutData: AboutData = {
  bio: [
    "I am a passionate software engineer dedicated to designing scalable systems and developing full-stack applications that create meaningful impact.",
    "I bridge the gap between complex technical requirements and elegant solutions. I enjoy the entire software lifecycle, from architecture and implementation to testing and iterative improvement.",
  ],
  highlightTerms: ["passionate software engineer", "complex technical requirements"],
  softSkills: [
    {
      title: "Collaborative",
      description:
        "I enjoy working with cross-functional teams and creating an environment where ideas are heard and refined together.",
      icon: "users",
    },
    {
      title: "Clear Communication",
      description:
        "I communicate technical tradeoffs clearly with both technical and non-technical stakeholders to keep projects aligned.",
      icon: "message",
    },
    {
      title: "Adaptable",
      description:
        "I learn new tools quickly and adapt architectures as product needs evolve, without compromising code quality.",
      icon: "lightbulb",
    },
    {
      title: "Goal-Oriented",
      description:
        "I focus on outcomes, prioritize impact, and stay open to feedback while driving milestones forward.",
      icon: "target",
    },
    {
      title: "Attention to Detail",
      description:
        "I value clean, secure, and maintainable code. Small implementation details matter when building reliable software.",
      icon: "eye",
    },
  ],
};

export const skills: Skill[] = [
  { name: "JavaScript", category: "Language", shortLabel: "JS", accent: "#f7df1e" },
  { name: "TypeScript", category: "Language", shortLabel: "TS", accent: "#3178c6" },
  { name: "Python", category: "Language", shortLabel: "PY", accent: "#3776ab" },
  { name: "C++", category: "Language", shortLabel: "C++", accent: "#00599c" },
  { name: "Java", category: "Language", shortLabel: "JV", accent: "#ea2d2e" },
  { name: "Next.js", category: "Framework", shortLabel: "NX", accent: "#111827" },
  { name: "React", category: "Framework", shortLabel: "RE", accent: "#06b6d4" },
  { name: "Vue", category: "Framework", shortLabel: "VU", accent: "#42b883" },
  { name: "Tailwind CSS", category: "Framework", shortLabel: "TW", accent: "#0ea5e9" },
  { name: "Node.js", category: "Framework", shortLabel: "ND", accent: "#5fa04e" },
  { name: "Express", category: "Framework", shortLabel: "EX", accent: "#334155" },
  { name: "Spring Boot", category: "Framework", shortLabel: "SP", accent: "#6db33f" },
  { name: "Django", category: "Framework", shortLabel: "DJ", accent: "#0f766e" },
  { name: "MongoDB", category: "Database", shortLabel: "MG", accent: "#16a34a" },
  { name: "PostgreSQL", category: "Database", shortLabel: "PG", accent: "#336791" },
  { name: "MySQL", category: "Database", shortLabel: "MY", accent: "#0ea5e9" },
  { name: "AWS", category: "Cloud/DevOps", shortLabel: "AW", accent: "#f59e0b" },
  { name: "Microsoft Azure", category: "Cloud/DevOps", shortLabel: "AZ", accent: "#2563eb" },
  { name: "Supabase", category: "Cloud/DevOps", shortLabel: "SB", accent: "#22c55e" },
  { name: "Docker", category: "Cloud/DevOps", shortLabel: "DK", accent: "#3b82f6" },
  { name: "OpenAI API", category: "AI", shortLabel: "AI", accent: "#0f172a" },
  { name: "RAG Pipelines", category: "AI", shortLabel: "RG", accent: "#6366f1" },
  { name: "REST APIs", category: "Architecture", shortLabel: "API", accent: "#0284c7" },
  { name: "Git", category: "Tool", shortLabel: "GT", accent: "#f97316" },
  { name: "GitHub", category: "Tool", shortLabel: "GH", accent: "#111827" },
  { name: "Jest", category: "Tool", shortLabel: "JS", accent: "#7c2d12" },
];

export const experiences: Experience[] = [
  {
    id: "uthealth-analyst",
    role: "Programmer Analyst I",
    company: "UTHealth Houston - School of Public Health",
    period: "February 2026 - Present",
    location: "Houston, TX",
    bullets: [
      "Lead, develop, and maintain full-stack applications for aging and public-health research using Next.js, React, Node.js, TypeScript, and AWS.",
      "Translate researcher requirements into technical specifications, feature designs, and backend workflows.",
      "Implement structured data pipelines and JSON-based schemas for AI-assisted and RAG-driven tools.",
      "Optimize reliability and performance while maintaining maintainable engineering standards.",
      "Collaborate with IT and project teams on enhancements, walkthroughs, and release planning.",
    ],
    details:
      "Primary technical lead for research-focused applications, working closely with researchers and cross-functional teams to deliver secure, resilient systems aligned with institutional requirements.",
  },
  {
    id: "uthealth-intern",
    role: "Research Support Assistant (Software Development Intern)",
    company: "UTHealth Houston - Institute on Aging",
    period: "August 2025 - January 2026",
    location: "Houston, TX",
    bullets: [
      "Rebuilt the Aging in Place website with Next.js, React, and Tailwind to improve accessibility and maintainability.",
      "Engineered AWS S3-based hosting and IAM access controls as part of the migration from a third-party vendor.",
      "Integrated analytics and performance measurement for user engagement insights.",
      "Designed JSON annotation workflows that supported retrieval-augmented generation (RAG) initiatives.",
    ],
    details:
      "Owned a full modernization effort end-to-end, from frontend architecture and accessibility improvements to infrastructure migration and analytics setup.",
  },
];

export const education: EducationRecord = {
  degree: "Bachelor of Science in Software Engineering",
  school: "The University of Texas at Dallas",
  period: "September 2021 - December 2025",
  location: "Richardson, TX",
  coursework: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Software Engineering",
    "Web Development",
    "Operating Systems",
    "Computer Networks",
    "Cloud Computing",
    "Machine Learning",
  ],
};

export const projects: Project[] = [
  {
    title: "Knowledge Management AI",
    timeframe: "Jun 2024 - Aug 2024",
    description:
      "AI-assisted search platform for consultants with natural language retrieval, Spring Boot APIs, and a responsive frontend.",
    tech: ["React", "Spring Boot", "DynamoDB", "Bootstrap"],
    github: "https://github.com/hemantaregmi/knowledge-management",
  },
  {
    title: "Aging in Place Portal",
    timeframe: "Jan 2024 - May 2024",
    description:
      "Accessibility-focused portal architecture with cloud deployment, component-driven UI, and measurable performance improvements.",
    tech: ["Next.js", "React", "Tailwind", "AWS S3", "CloudFront"],
    github: "https://github.com/hemantaregmi/aging-in-place",
  },
  {
    title: "PrioritiesAI Data Pipeline",
    timeframe: "Jun 2024 - Aug 2024",
    description:
      "Structured JSON annotation and transcript processing pipeline designed to support RAG model workflows.",
    tech: ["TypeScript", "Python", "JSON Schema", "RAG"],
  },
  {
    title: "Portfolio Website",
    timeframe: "Mar 2025 - Present",
    description:
      "Modern portfolio experience with glassmorphism styling, smooth section navigation, and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/hemantaregmi/portfolio",
  },
  {
    title: "MNIST Digit Classification",
    timeframe: "Sep 2023 - Dec 2023",
    description:
      "SVM-based supervised learning workflow with model tuning and cross-validation over stratified samples.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    github: "https://github.com/hemantaregmi/mnist-classification",
  },
  {
    title: "Real-Time Chat App",
    timeframe: "Feb 2024 - Apr 2024",
    description:
      "WebSocket-driven messaging platform with presence, typing indicators, and persisted chat history.",
    tech: ["React", "Node.js", "WebSocket", "MongoDB"],
    github: "https://github.com/hemantaregmi/realtime-chat",
  },
];

export const contact: ContactData = {
  email: "hemantaregmi20@gmail.com",
  location: "Houston, TX",
  github: "https://github.com/HemantaRegmi",
  linkedin: "https://www.linkedin.com/in/hemantaregmi",
};
