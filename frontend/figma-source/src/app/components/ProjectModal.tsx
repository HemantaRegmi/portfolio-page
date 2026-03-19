import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
        <div className="mb-6 -mx-8 -mt-8">
          <div className="w-full h-64 overflow-hidden rounded-t-3xl">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-8 pt-2">
          {/* Title */}
          <h3
            className="text-3xl font-extrabold text-gray-800 mb-4 mt-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {project.title}
          </h3>

          {/* Detailed description */}
          <p className="text-gray-700 leading-relaxed mb-6">{project.detailedDescription}</p>

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
