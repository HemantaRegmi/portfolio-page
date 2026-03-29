"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type ExperienceItem = {
  id: number;
  type: "work" | "education";
  role: string;
  company: string;
  logo: string;
  period: string;
  location: string;
  moreInfo: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    role: "Programmer Analyst I",
    company: "UTHealth Houston - School of Public Health",
    logo: "/images/ut-health-logo.png",
    period: "February 2026 - Present",
    location: "Houston, TX",
    moreInfo:
      "In this role, I serve as the primary technical lead for multiple research-focused web applications that directly support aging and public health studies. I work closely with epidemiologists, data scientists, and researchers to understand complex research workflows and translate them into scalable, user-friendly software solutions. My responsibilities include architecting cloud-based infrastructures on AWS, implementing secure data pipelines that handle sensitive health information, and developing AI-assisted tools that leverage GPT models and RAG systems to help researchers extract insights from large datasets. I also lead code reviews, establish development best practices, and ensure all applications meet healthcare compliance standards including HIPAA considerations. Regular collaboration with cross-functional teams ensures that technical solutions align with both research goals and institutional IT policies.",
    description: [
      "Lead, develop, and maintain full-stack applications supporting aging and public-health research using Next.js, React, Node.js, TypeScript, and AWS.",
      "Translate researcher requirements into technical specifications, feature designs, and backend workflows.",
      "Implement structured data pipelines and JSON-based schemas supporting AI-assisted and RAG-driven tools.",
      "Manage updates, debug issues, and optimize performance for reliability across research programs.",
      "Collaborate with IT and project teams to plan enhancements and conduct walk-throughs.",
    ],
  },
  {
    id: 2,
    type: "work",
    role: "Research Support Assistant (Software Dev Intern)",
    company: "UTHealth Houston - Institute on Aging",
    logo: "/images/ut-health-logo.png",
    period: "August 2025 - January 2025", // Keeping as written in resume
    location: "Houston, TX",
    moreInfo:
      "As a research support intern, I focused on modernizing the Aging in Place platform and strengthening its long-term maintainability for public use. I redesigned key front-end workflows with accessibility and readability in mind for older adults, then helped migrate the system to institution-owned cloud infrastructure with cleaner deployment and security controls. I partnered directly with researchers to capture content and annotation requirements, then implemented structured JSON schemas that fed early RAG-driven experiments. The tenure sharpened my product thinking by balancing user-centered UX decisions, technical execution, and stakeholder communication across healthcare and research teams.",
    description: [
      "Rebuilt and modernized the Aging in Place website using Next.js, React, Tailwind, and component-driven architecture to improve accessibility for older adults.",
      "Developed production-ready AWS infrastructure including S3 static hosting, secure file organization, and IAM role management.",
      "Led the migration of the website from a third-party vendor to UTHealth-owned cloud infrastructure, improving maintainability and reducing costs.",
      "Integrated Google Analytics to track user behavior, engagement metrics, and site performance.",
      "Designed a JSON-based annotation schema to support a Retrieval-Augmented Generation (RAG) pipeline for PrioritiesAI.",
      "Processed and annotated multiple transcripts to generate high-quality training datasets with domain-specific metadata.",
    ],
  },
];

export default function Experience() {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background colors */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-sky-200/40 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-teal-100/40 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 drop-shadow-sm"
          >
            Experience & Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed font-medium"
          >
            <p>
              My professional journey is rooted in building resilient,
              user-centric applications and scalable cloud infrastructures. I
              have experience collaborating across disciplines to turn complex
              requirements into technical realities, particularly within the
              healthcare and research sectors.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical line - Glossy blue */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-white/60 border border-white/80 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.2)]" />
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-sky-300 via-blue-400 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isOpen = expandedCardId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between group w-full ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-sky-100 group-hover:border-sky-300 transition-colors duration-300 items-center justify-center z-20 shadow-[0_4px_12px_rgba(0,120,255,0.15)]">
                    {exp.type === "education" ? (
                      <GraduationCap className="w-6 h-6 text-sky-500" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-blue-500" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%]">
                    <div className="bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-8 hover:bg-white/35 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(77,168,218,0.2)] relative overflow-hidden group-hover:-translate-y-2">
                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-sky-50 to-white border border-white shadow-[0_4px_12px_rgba(0,0,0,0.05),0_2px_4px_rgba(255,255,255,1)_inset] flex items-center justify-center text-2xl font-black text-sky-600">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-extrabold text-slate-800 group-hover:text-sky-600 transition-colors">
                            {exp.role}
                          </h3>

                          <p className="text-lg font-bold text-slate-500">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-4 text-sm text-slate-600 mb-6 font-bold">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full">
                          <Calendar className="w-4 h-4 text-sky-500" />
                          {exp.period}
                        </div>
                        <p>•</p>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full">
                          <MapPin className="w-4 h-4 text-[#4DA8DA]" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-slate-600 flex items-start font-medium"
                          >
                            <span className="text-sky-500 mr-3 mt-1.5 text-lg leading-none font-bold">
                              •
                            </span>
                            <span className="leading-relaxed text-sm md:text-base">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="my-6 h-px bg-slate-300/60" />

                      <button
                        type="button"
                        onClick={() => toggleCard(exp.id)}
                        aria-expanded={isOpen}
                        aria-controls={`experience-details-${exp.id}`}
                        className="flex items-center gap-2 text-slate-700 font-extrabold cursor-pointer"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span>{isOpen ? "Hide Details" : "Show Details"}</span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`experience-details-${exp.id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="my-6 h-px bg-slate-300/60" />
                            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                              {exp.moreInfo}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden md:block w-full md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
