import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  gradient: string;
  github: string | null;
  live: string | null;
  timeframe: string;
}

export const projects: Project[] = [
  {
    title: "MNIST Digit Classification",
    description:
      "Built an SVM-based supervised learning pipeline using linear, polynomial, and RBF kernels. Performed cross-validation and hyperparameter tuning using 10,000 stratified samples.",
    detailedDescription:
      "This machine learning project implements a comprehensive digit classification system using Support Vector Machines (SVM). The pipeline includes data preprocessing, feature extraction, model training with multiple kernel types (linear, polynomial, and RBF), cross-validation for robust performance evaluation, and hyperparameter optimization using grid search. Achieved 97% accuracy on the test set using stratified sampling to ensure balanced class distribution.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    gradient: "from-emerald-400 to-teal-500",
    github: "https://github.com/hemantaregmi/mnist-classification",
    live: null,
    timeframe: "Sep 2023 - Dec 2023",
  },
  {
    title: "Knowledge Management System",
    description:
      "Developed an AI-assisted search platform CRUD app to help consultants retrieve meeting information via natural language queries. Designed a responsive UI and integrated it with Spring Boot APIs.",
    detailedDescription:
      "A full-stack enterprise application designed to streamline knowledge retrieval for consulting teams. Features include natural language processing for intelligent search, RESTful API architecture with Spring Boot backend, DynamoDB for scalable NoSQL storage, user authentication and authorization, real-time query suggestions, and a modern responsive interface built with Bootstrap. The system significantly reduced time spent searching for meeting notes and client information.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    gradient: "from-sky-400 to-blue-500",
    github: "https://github.com/hemantaregmi/knowledge-management",
    live: null,
    timeframe: "Jun 2024 - Aug 2024",
  },

  {
    title: "PrioritiesAI Data Pipeline",
    description:
      "Designed a JSON-based annotation schema to support a Retrieval-Augmented Generation (RAG) pipeline. Processed and annotated transcripts to generate high-quality training datasets.",
    detailedDescription:
      "An automated data processing pipeline for AI model training. The system includes custom JSON schema design for structured annotations, automated transcript processing and cleaning, entity recognition and tagging, quality validation checks, batch processing capabilities for large datasets, and export formats compatible with popular ML frameworks. Processed over 10,000 transcripts with 95% annotation accuracy.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    gradient: "from-purple-400 to-violet-500",
    github: null,
    live: null,
    timeframe: "Jun 2024 - Aug 2024",
  },
  {
    title: "Portfolio Page",
    description:
      "Built a fully responsive single-page portfolio using React and Tailwind with a glassmorphic design system. Features honeycomb skill layout, timeline components, and smooth animations.",
    detailedDescription:
      "A modern, visually stunning portfolio website showcasing software engineering projects and skills. Features include custom glassmorphic design system inspired by Frutiger Aero aesthetics, innovative honeycomb/hexagonal skill grid layout, interactive timeline for work experience, smooth scroll animations with Motion (Framer Motion), fully responsive design optimized for all devices, and custom Space Grotesk + Inter dual-font system for optimal readability.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    gradient: "from-rose-400 to-pink-500",
    github: "https://github.com/hemantaregmi/portfolio",
    live: "https://hemantaregmi.dev",
    timeframe: "Mar 2025 - Present",
  },

  {
    title: "Yelp Camp",
    description:
      "Developed an automated security scanning tool that analyzes web applications for common vulnerabilities, generates detailed reports, and provides remediation recommendations.",
    detailedDescription:
      "A comprehensive security analysis tool for web applications. Scans for OWASP Top 10 vulnerabilities including XSS, SQL injection, and CSRF attacks, performs automated penetration testing, analyzes dependency vulnerabilities, generates detailed security reports with risk ratings, provides actionable remediation steps, integrates with CI/CD pipelines for continuous security testing, and includes a dashboard for tracking security posture over time.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi/security-audit",
    live: null,
    timeframe: "Dec 2023 - Mar 2024",
  },
  {
    title: "My Aging In Place Migration",
    description:
      "Developed an automated security scanning tool that analyzes web applications for common vulnerabilities, generates detailed reports, and provides remediation recommendations.",
    detailedDescription:
      "A comprehensive security analysis tool for web applications. Scans for OWASP Top 10 vulnerabilities including XSS, SQL injection, and CSRF attacks, performs automated penetration testing, analyzes dependency vulnerabilities, generates detailed security reports with risk ratings, provides actionable remediation steps, integrates with CI/CD pipelines for continuous security testing, and includes a dashboard for tracking security posture over time.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi/security-audit",
    live: null,
    timeframe: "Dec 2023 - Mar 2024",
  },
  {
    title: "Well Aged Care",
    description:
      "Developed an automated security scanning tool that analyzes web applications for common vulnerabilities, generates detailed reports, and provides remediation recommendations.",
    detailedDescription:
      "A comprehensive security analysis tool for web applications. Scans for OWASP Top 10 vulnerabilities including XSS, SQL injection, and CSRF attacks, performs automated penetration testing, analyzes dependency vulnerabilities, generates detailed security reports with risk ratings, provides actionable remediation steps, integrates with CI/CD pipelines for continuous security testing, and includes a dashboard for tracking security posture over time.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi/security-audit",
    live: null,
    timeframe: "Dec 2023 - Mar 2024",
  },
  {
    title: "Hippa Compliant API Routes",
    description:
      "Developed an automated security scanning tool that analyzes web applications for common vulnerabilities, generates detailed reports, and provides remediation recommendations.",
    detailedDescription:
      "A comprehensive security analysis tool for web applications. Scans for OWASP Top 10 vulnerabilities including XSS, SQL injection, and CSRF attacks, performs automated penetration testing, analyzes dependency vulnerabilities, generates detailed security reports with risk ratings, provides actionable remediation steps, integrates with CI/CD pipelines for continuous security testing, and includes a dashboard for tracking security posture over time.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi/security-audit",
    live: null,
    timeframe: "Dec 2023 - Mar 2024",
  },
  {
    title: "My Health Priorities 2.0",
    description:
      "Developed an automated security scanning tool that analyzes web applications for common vulnerabilities, generates detailed reports, and provides remediation recommendations.",
    detailedDescription:
      "A comprehensive security analysis tool for web applications. Scans for OWASP Top 10 vulnerabilities including XSS, SQL injection, and CSRF attacks, performs automated penetration testing, analyzes dependency vulnerabilities, generates detailed security reports with risk ratings, provides actionable remediation steps, integrates with CI/CD pipelines for continuous security testing, and includes a dashboard for tracking security posture over time.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi/security-audit",
    live: null,
    timeframe: "Dec 2023 - Mar 2024",
  },
  {
    title: "Personal LLM News Outlet",
    description:
      "Developed an automated security scanning tool that analyzes web applications for common vulnerabilities, generates detailed reports, and provides remediation recommendations.",
    detailedDescription:
      "A comprehensive security analysis tool for web applications. Scans for OWASP Top 10 vulnerabilities including XSS, SQL injection, and CSRF attacks, performs automated penetration testing, analyzes dependency vulnerabilities, generates detailed security reports with risk ratings, provides actionable remediation steps, integrates with CI/CD pipelines for continuous security testing, and includes a dashboard for tracking security posture over time.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi/security-audit",
    live: null,
    timeframe: "Dec 2023 - Mar 2024",
  },
];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors z-10"
        >
          <span className="text-2xl text-gray-700">&times;</span>
        </button>

        {/* Project Image */}
        {/* <div className="mb-6 -mx-8 -mt-8">
          <div className="w-full h-64 overflow-hidden rounded-t-3xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}

        <div className="p-8 pt-2">
          {/* Title */}
          <h3
            className="text-3xl font-extrabold text-gray-800 mb-4 mt-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {project.title}
          </h3>

          {/* Detailed description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {project.detailedDescription}
          </p>

          {/* Action buttons */}
          <div className="flex gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-xl transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4DA8DA] hover:bg-[#3B9DD8] text-white font-bold rounded-xl transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Site
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
