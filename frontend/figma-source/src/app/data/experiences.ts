export interface TechStack {
  name: string;
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  detailedInfo: string;
  techStack: TechStack[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Programmer Analyst I",
    company: "UTHealth Houston - School of Public Health",
    period: "February 2026 - Present",
    location: "Houston, TX",
    description: [
      "Lead, develop, and maintain full-stack applications supporting aging and public-health research using Next.js, React, Node.js, TypeScript, and AWS.",
      "Translate researcher requirements into technical specifications, feature designs, and backend workflows.",
      "Implement structured data pipelines and JSON-based schemas supporting AI-assisted and RAG-driven tools.",
      "Manage updates, debug issues, and optimize performance for reliability across research programs.",
      "Collaborate with IT and project teams to plan enhancements and conduct walk-throughs."
    ],
    detailedInfo: "In this role, I serve as the primary technical lead for multiple research-focused web applications that directly support aging and public health studies. I work closely with epidemiologists, data scientists, and researchers to understand complex research workflows and translate them into scalable, user-friendly software solutions. My responsibilities include architecting cloud-based infrastructures on AWS, implementing secure data pipelines that handle sensitive health information, and developing AI-assisted tools that leverage GPT models and RAG (Retrieval-Augmented Generation) systems to help researchers extract insights from large datasets. I also lead code reviews, establish development best practices, and ensure all applications meet healthcare compliance standards including HIPAA considerations. Regular collaboration with cross-functional teams ensures that technical solutions align with both research goals and institutional IT policies.",
    techStack: [
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "React", icon: "SiReact" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "AWS", icon: "Cloud" }
    ]
  },
  {
    id: 2,
    role: "Research Support Assistant (Software Dev Intern)",
    company: "UTHealth Houston - Institute on Aging",
    period: "August 2025 - January 2025",
    location: "Houston, TX",
    description: [
      "Rebuilt and modernized the Aging in Place website using Next.js, React, Tailwind, and component-driven architecture to improve accessibility for older adults.",
      "Developed production-ready AWS infrastructure including S3 static hosting, secure file organization, and IAM role management.",
      "Led the migration of the website from a third-party vendor to UTHealth-owned cloud infrastructure, improving maintainability and reducing costs.",
      "Integrated Google Analytics to track user behavior, engagement metrics, and site performance.",
      "Designed a JSON-based annotation schema to support a Retrieval-Augmented Generation (RAG) pipeline for PrioritiesAI.",
      "Processed and annotated multiple transcripts to generate high-quality training datasets with domain-specific metadata."
    ],
    detailedInfo: "During this internship, I took ownership of a critical website modernization project that serves thousands of older adults and caregivers seeking resources for aging in place. The original site was outdated, difficult to maintain, and hosted on a third-party platform that limited customization. I completely rebuilt the site from scratch using modern web technologies, implementing WCAG 2.1 accessibility standards to ensure all users, including those with disabilities, could easily navigate the content. The migration to UTHealth's own AWS infrastructure involved setting up S3 buckets for static hosting, configuring CloudFront for CDN delivery, implementing proper IAM policies for security, and establishing a CI/CD pipeline for automated deployments. Additionally, I contributed to the PrioritiesAI project by designing data annotation workflows and processing interview transcripts to create training datasets for machine learning models focused on understanding priorities of older adults in healthcare decision-making.",
    techStack: [
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "React", icon: "SiReact" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "AWS", icon: "Cloud" },
      { name: "Analytics", icon: "SiGoogleanalytics" },
      { name: "OpenAI", icon: "SiOpenai" }
    ]
  }
];
