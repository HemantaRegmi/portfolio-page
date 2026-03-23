import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    role: "Programmer Analyst I",
    company: "UTHealth Houston - School of Public Health",
    logo: "UH",
    period: "February 2026 - Present",
    location: "Houston, TX",
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
    logo: "UH",
    period: "August 2025 - January 2025", // Keeping as written in resume
    location: "Houston, TX",
    description: [
      "Rebuilt and modernized the Aging in Place website using Next.js, React, Tailwind, and component-driven architecture to improve accessibility for older adults.",
      "Developed production-ready AWS infrastructure including S3 static hosting, secure file organization, and IAM role management.",
      "Led the migration of the website from a third-party vendor to UTHealth-owned cloud infrastructure, improving maintainability and reducing costs.",
      "Integrated Google Analytics to track user behavior, engagement metrics, and site performance.",
      "Designed a JSON-based annotation schema to support a Retrieval-Augmented Generation (RAG) pipeline for PrioritiesAI.",
      "Processed and annotated multiple transcripts to generate high-quality training datasets with domain-specific metadata.",
    ],
  },
  {
    id: 3,
    type: "education",
    role: "Bachelor of Science in Software Engineering",
    company: "The University of Texas at Dallas",
    logo: "UTD",
    period: "September 2021 - December 2025",
    location: "Richardson, TX",
    description: [
      "Relevant Coursework: Data Structures and Algorithms Analysis, Software Project Planning and Management, Foundations of Machine Learning.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background gradients for liquid feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-200/40 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-teal-100/40 to-transparent pointer-events-none blur-3xl" />

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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sky-300 via-blue-400 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
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
                    {/* Glossy top highlight */}
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-sky-400 to-blue-500 opacity-80" />

                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-white shadow-[0_4px_12px_rgba(0,0,0,0.05),0_2px_4px_rgba(255,255,255,1)_inset] flex items-center justify-center text-2xl font-black text-sky-600">
                        {exp.logo}
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
                      <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-white shadow-sm">
                        <Calendar className="w-4 h-4 text-sky-500" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-white shadow-sm">
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
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block w-full md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
