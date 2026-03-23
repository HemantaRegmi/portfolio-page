import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import utdallasIcon from "figma:asset/14e43463fdfacfa8fb11a744adc07957dc0fe27f.png";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background gradients for dark theme */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#3B9DD8]/20 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4DA8DA]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-8"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1a202c",
            }}
          >
            Education
          </motion.h2>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative group"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#3B9DD8]/30 to-[#4DA8DA]/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

          {/* Main card with light glass effect */}
          <div className="relative bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(77,168,218,0.2)] transition-all duration-300 overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              {/* University Logo/Icon */}
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  //src={utdallasIcon}
                  alt="UT Dallas Logo"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-3xl font-extrabold text-gray-800 group-hover:text-[#4DA8DA] transition-colors mb-2">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-xl font-bold text-gray-600">
                  The University of Texas at Dallas
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-700 mb-8 font-bold">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#4DA8DA]" />
                <span>September 2021 - December 2025</span>
              </div>
              <span className="hidden sm:inline text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4DA8DA]" />
                <span>Richardson, TX</span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="relative z-10 pt-6 border-t border-gray-200">
              <p className="text-xs uppercase tracking-wider font-extrabold text-gray-500 mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 font-medium">
                <span>• Data Structures & Algorithms</span>
                <span>• Database Systems</span>
                <span>• Software Engineering</span>
                <span>• Web Development</span>
                <span>• Operating Systems</span>
                <span>• Computer Networks</span>
                <span>• Cloud Computing</span>
                <span>• Machine Learning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
