import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { projects } from "../data/projects";
import { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#3B9DD8]/20 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4DA8DA]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1a202c" }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg leading-relaxed font-medium"
            style={{ color: "#2d3748" }}
          >
            A collection of projects showcasing my expertise in full-stack development, machine
            learning, cloud infrastructure, and modern web technologies.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onMoreInfo={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
