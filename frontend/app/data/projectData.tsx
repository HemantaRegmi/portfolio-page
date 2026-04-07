"use client";

import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

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
    title: "Portfolio Page",
    description:
      "Built a fully responsive single-page portfolio using React and Tailwind with a glassmorphic design system. Features honeycomb skill layout, timeline components, and smooth animations.",
    detailedDescription:
      "A modern, visually stunning portfolio website showcasing software engineering projects and skills. Features include custom glassmorphic component design inspired by Frutiger Aero aesthetics, innovative honeycomb/hexagonal skill grid layout, interactive timeline for work experience, smooth scroll animations with Motion (Framer Motion), fully responsive design optimized for all devices, and custom Space Grotesk + Inter dual-font system for optimal readability.",
    image: "/images/hero-bg.jpg",
    gradient: "from-rose-400 to-pink-500",
    github: "https://github.com/hemantaregmi",
    live: "https://hemantaregmi.com",
    timeframe: "Mar 2026 - Present",
  },
  {
    title: "My Health Priorities 2.0",
    description:
      "Developed an application for older adults that asks them questions to figure out what matters most to them. Using realtime speech input, and using an eleven labs voice agent to provide a clinician like user experience.",
    detailedDescription:
      "Implemented using typescript, tailwind, and react for the frontend. Used ChatGPT LLM for summary generation that generates throughout the patient conversation. Impending implementation into EPIC myChart dashboard.",
    image: "/images/my-health-priorities.png",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Feb 2026 - Present",
  },

  {
    title: "Well Aged Care",
    description:
      "Resource page for older adults and caregivers to access quality resources offered by the UT Health Houston's Institute on Aging.",
    detailedDescription:
      "Implemented WCAG 2.1 AAA accesibility into the site. Developed using Typescript, React, and Tailwind. Metadata for optimal SEO was instillewd in addition to multiple externally linked resources embedded into the website.",
    image: "/images/well-aged-care.jpg",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Dec 2025 - Present",
  },
  {
    title: "Bloodwork Analysis Tool",
    description:
      "Creating a personal app that gives me a rundown of my latest bloodwork that gives me advice on next steps, while having the context of all my other blood records. ",
    detailedDescription:
      "Containerized via docker. Created with Typescript frontend and Django backend.",
    image: "/images/hippa-api-routes.jpg",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Dec 2025 - Present",
  },
  {
    title: "Personal LLM News Outlet",
    description:
      "Created a news outlet that allows me to keep up with all the latest news regarding the tech industry.",
    detailedDescription:
      "Gathered verifiable sources and allowed the LLM to generate the valuable information in regards to my intrests without having to encounter misleading information.",
    image: "/images/news-outlet.jpg",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Nov 2025 - Present",
  },
  {
    title: "My Aging In Place Migration",
    description:
      "Migrated My Aging In Place resource site into UT Health Houston infrastructure. Migrated AWS assets and set them up in house.",
    detailedDescription:
      "Inherited S3 assets into UT Health Houston AWS account. Fixed dead links and bugs.",
    image: "/images/my-aging-in-place.png",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi",
    live: "https://myaginginplace.org",
    timeframe: "Oct 2025 - Nov 2025",
  },
  {
    title: "PrioritiesAI Data Pipeline",
    description:
      "Designed a JSON-based annotation schema to support a Retrieval-Augmented Generation (RAG) pipeline. Processed and annotated transcripts to generate high-quality training datasets.",
    detailedDescription:
      "An automated data processing pipeline for AI model training. The system includes custom JSON schema design for structured annotations, automated transcript processing and cleaning, entity recognition and tagging, quality validation checks, batch processing capabilities for large datasets, and export formats compatible with popular ML frameworks. Processed over 10,000 transcripts with 95% annotation accuracy.",
    image: "/images/priorities-ai.jpg",
    gradient: "from-purple-400 to-violet-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Aug 2025 - Nov 2025",
  },
  {
    title: "Knowledge Management System",
    description:
      "Developed an AI-assisted search platform CRUD app to help consultants retrieve meeting information via natural language queries. Designed a responsive UI and integrated it with Spring Boot APIs.",
    detailedDescription:
      "A full-stack enterprise application designed to streamline knowledge retrieval for consulting teams. Features include natural language processing for intelligent search, RESTful API architecture with Spring Boot backend, DynamoDB for scalable NoSQL storage, user authentication and authorization, real-time query suggestions, and a modern responsive interface built with Bootstrap. The system significantly reduced time spent searching for meeting notes and client information.",
    image: "/images/knowledge-management.jpg",
    gradient: "from-sky-400 to-blue-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Jan 2025 - May 2025",
  },

  {
    title: "MNIST Digit Classification",
    description:
      "Built an SVM-based supervised learning pipeline using linear, polynomial, and RBF kernels. Performed cross-validation and hyperparameter tuning using 10,000 stratified samples.",
    detailedDescription:
      "This machine learning project implements a comprehensive digit classification system using Support Vector Machines (SVM). The pipeline includes data preprocessing, feature extraction, model training with multiple kernel types (linear, polynomial, and RBF), cross-validation for robust performance evaluation, and hyperparameter optimization using grid search. Achieved 97% accuracy on the test set using stratified sampling to ensure balanced class distribution.",
    image: "/images/machine-learning.jpg",

    gradient: "from-emerald-400 to-teal-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Mar 2025",
  },
  {
    title: "Yelp Camp",
    description:
      "Developed a fullstack CRUD app with authentication, REST Api routes, and CDN with cloudinary.",
    detailedDescription:
      "Built with JS, MongoDB, and Express to integrate fullstack application along with adding auth via salt/hash methods. (bcrypt)",
    image: "/images/yelp-camp.jpg",
    gradient: "from-red-400 to-rose-500",
    github: "https://github.com/hemantaregmi",
    live: null,
    timeframe: "Sep 2024 - Dec 2024",
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
