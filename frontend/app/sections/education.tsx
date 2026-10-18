import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { GlassSurface } from "@/components/glassSurface";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background gradients for dark theme */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-[#3B9DD8]/20 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-linear-to-l from-[#4DA8DA]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-8"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#1a202c",
            }}
          >
            Education
          </h2>
        </div>

        {/* Georgia Tech */}
        <div
          className="max-w-4xl mx-auto mb-8 relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-br rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

          <GlassSurface interactive className="p-8 md:p-10 overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src="/images/georgia-tech-logo.svg"
                  alt="Georgia Tech interlocking GT logo"
                  className="w-full h-full object-contain"
                  fill
                />
              </div>

              <div className="grow">
                <h3 className="text-3xl font-extrabold text-gray-800 group-hover:text-[#0b5f8a] transition-colors mb-2">
                  Master of Science in Computer Science
                </h3>
                <p className="text-xl font-bold text-gray-600">
                  Georgia Institute of Technology
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-sm text-gray-700 font-bold">
              <Calendar className="w-4 h-4 text-[#0b5f8a]" />
              <span>Spring 2027 - Present</span>
            </div>
          </GlassSurface>
        </div>

        {/* UT Dallas */}
        <div
          className="max-w-4xl mx-auto relative group"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-linear-to-br rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

          {/* Main card with light glass effect */}
          <GlassSurface interactive className="p-8 md:p-10 overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              {/* University Logo/Icon */}
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src="/images/utd-logo.png"
                  alt="UT Dallas Logo"
                  className="w-full h-full object-contain rounded-2xl"
                  fill
                />
              </div>

              <div className="grow">
                <h3 className="text-3xl font-extrabold text-gray-800 group-hover:text-[#0b5f8a] transition-colors mb-2">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-xl font-bold text-gray-600">
                  The University of Texas at Dallas
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-700 mb-8 font-bold">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0b5f8a]" />
                <span>September 2021 - December 2025</span>
              </div>
              <span className="hidden sm:inline text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0b5f8a]" />
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
          </GlassSurface>
        </div>
      </div>
    </section>
  );
}
