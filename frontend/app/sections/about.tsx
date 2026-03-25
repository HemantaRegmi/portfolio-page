import { motion } from "motion/react";
import { Users, Lightbulb, MessageSquare, Target, Eye } from "lucide-react";

const softSkills = [
  {
    icon: Users,
    title: "Collaborative",
    description:
      "Listening to ideas while also presenting them is an engaging experience I love. Especially with no ego involved in my programming procedure!",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Collaborating and establishing clear communication with people towards a shared end goal is something I value, since it allows for better quality discussions amongst technical and non-technical groups. Leading to a more positive project experience.",
  },
  {
    icon: Lightbulb,
    title: "Adaptable",
    description:
      "Throughout my journey, I have realized that learning new technologies will be something I will encounter throughout my whole career. Navigating this portion by being adaptable to learning new tech is something I always enjoy!",
  },
  {
    icon: Target,
    title: "Humble and Goal-Oriented",
    description:
      "Delivering results is something I prioritize keeping the vision strong while understanding there's always room to grow. I am always welcome to feedback as, there is always something to learn in this exciting field!",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "Every detail of code matters to me. When it comes to the finer grains of programming, I will always pay close attention to my work making sure I am keen on avoiding unecessary vulnerabilities and keeping code clean, modular, and readibility.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r  mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Profile Image & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image - Dark Glassmorphic Frame */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute -inset-1 bg-linear-to-r rounded-full opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>

                {/* Glassmorphic border */}
                <div className="relative w-64 h-64 rounded-full p-2 bg-[rgba(255,255,255,0.01)] backdrop-blur-xl border-2 border-[rgba(255,255,255,0.05)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[rgba(255,255,255,0.05)] shadow-inner bg-linear-to-br backdrop-blur-sm">
                    {/* TODO: Add your professional headshot here */}
                    {/* Example: <img src="path/to/your/image.jpg" alt="Hemanta Regmi" className="w-full h-full object-cover" /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am a{" "}
                <span className="font-bold text-[#4DA8DA]">
                  passionate software engineer
                </span>{" "}
                dedicated to designing scalable systems and developing
                comprehensive full-stack applications that leave an everlasting
                positive impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I bridge the gap between{" "}
                <span className="font-bold text-[#4DA8DA]">
                  complex technical requirements
                </span>{" "}
                and elegant, performant solutions. With a strong foundation in
                theory and practice, every step of the software development
                lifecycle is something I truly enjoy. Making sure I keep up with
                the latest technologies and practices within the tech industry.
              </p>
            </div>
          </motion.div>

          {/* Right column: Soft Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {softSkills.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Outer glow effect on hover */}
                <div className="absolute -inset-1 bg-linear-to-br  rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                {/* Light glassmorphic card */}
                <div className="relative bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_12px_40px_rgba(77,168,218,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Icon container with light glass effect */}
                    <div className="relative w-14 h-14 shrink-0">
                      <div className="absolute inset-0 bg-linear-to-br rounded-xl opacity-60 blur-md"></div>

                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/50 border-2 border-[#4DA8DA]/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon className="w-7 h-7 text-[#4DA8DA] relative z-10" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-gray-800 mb-1.5 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 relative z-10 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
