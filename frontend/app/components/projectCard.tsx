"use client";

import { motion } from "motion/react";
import { Github, ExternalLink, Info, Calendar } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projectData";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onMoreInfo: () => void;
}

export function ProjectCard({ project, index, onMoreInfo }: ProjectCardProps) {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 bg-linear-to-br  rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

      {/* Main card */}
      <div className="relative bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(77,168,218,0.2)] transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <div className="relative z-10 mb-6 -mx-8 -mt-8">
          <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="relative z-10 text-2xl font-extrabold text-gray-800 mb-3"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {project.title}
        </h3>

        {/* Timeframe */}
        <div className="relative z-10 flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-[#4DA8DA]" />
          <span className="text-sm font-semibold text-gray-600">
            {project.timeframe}
          </span>
        </div>

        {/* Description */}
        <p className="relative z-10 text-gray-700 mb-6 leading-relaxed font-medium grow">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="relative z-10 flex gap-3 items-center mt-auto">
          <div className="relative">
            <button
              onClick={onMoreInfo}
              className="inline-flex items-center justify-center text-gray-800 font-bold hover:text-[#4DA8DA] transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setShowTooltip("info")}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <Info className="w-6 h-6" />
            </button>
            {showTooltip === "info" && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap"
              >
                More Info
              </motion.div>
            )}
          </div>

          {project.github && (
            <div className="relative">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-gray-800 font-bold hover:text-[#4DA8DA] transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setShowTooltip("github")}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <Github className="w-6 h-6" />
              </a>
              {showTooltip === "github" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap"
                >
                  View Code
                </motion.div>
              )}
            </div>
          )}

          {project.live && (
            <div className="relative">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-gray-800 font-bold hover:text-[#4DA8DA] transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setShowTooltip("live")}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <ExternalLink className="w-6 h-6" />
              </a>
              {showTooltip === "live" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap"
                >
                  Live Site
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
