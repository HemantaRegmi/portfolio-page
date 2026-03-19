import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Experience } from "../data/experiences";
import uthealthIcon from "figma:asset/05cfa509f0ff865701f85e0ce231921f6dade198.png";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center justify-between group w-full ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-[45%]">
        <div className="relative group/card">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#3B9DD8]/30 to-[#4DA8DA]/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

          {/* Main card */}
          <div className="relative bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(77,168,218,0.2)] transition-all duration-300 overflow-hidden">
            {/* Header with logo */}
            <div className="relative z-10 flex items-center gap-5 mb-6">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={uthealthIcon}
                  alt="UTHealth Houston Logo"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-[#4DA8DA] transition-colors">
                  {experience.role}
                </h3>
                <p className="text-lg font-bold text-gray-600">{experience.company}</p>
              </div>
            </div>

            {/* Period and location */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm text-gray-700 mb-6 font-bold">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#4DA8DA]" />
                <span>{experience.period}</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4DA8DA]" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Description */}
            <ul className="relative z-10 space-y-3 mb-6">
              {experience.description.map((item, i) => (
                <li key={i} className="text-gray-700 flex items-start font-medium">
                  <span className="text-[#4DA8DA] mr-3 mt-1.5 text-lg leading-none font-bold">
                    •
                  </span>
                  <span className="leading-relaxed text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* More Info Toggle */}
            <div className="relative z-10 pt-6 border-t border-gray-200">
              <button
                className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#4DA8DA] transition-colors cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    More Info
                  </>
                )}
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-700 leading-relaxed">
                      {experience.detailedInfo}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for alternate layout */}
      <div className="hidden md:block w-full md:w-[45%]" />
    </motion.div>
  );
}