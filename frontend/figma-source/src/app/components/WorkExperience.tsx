import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/experiences";
import { ExperienceCard } from "./ExperienceCard";

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3B9DD8]/20 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#4DA8DA]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-8"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#1a202c" }}
          >
            Work Experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed font-medium"
            style={{ color: "#2d3748" }}
          >
            <p>
              My professional journey is rooted in building resilient, user-centric applications
              and scalable cloud infrastructures. I have experience collaborating across disciplines
              to turn complex requirements into technical realities, particularly within the
              healthcare and research sectors.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full shadow-[0_0_15px_rgba(77,168,218,0.2)]" style={{ transform: 'translateX(-50%)' }} />
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4DA8DA] via-[#3B9DD8] to-transparent" style={{ transform: 'translateX(-50%)' }} />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 w-14 h-14 rounded-full bg-[rgba(255,255,255,0.02)] border-4 border-[rgba(255,255,255,0.05)] group-hover:border-[#4DA8DA] transition-colors duration-300 items-center justify-center z-20 shadow-[0_4px_12px_rgba(0,0,0,0.4)]" style={{ transform: 'translate(-50%, -50%)' }}>
                  <Briefcase className="w-6 h-6 text-[#4DA8DA]" />
                </div>

                <ExperienceCard experience={exp} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}