"use client";

import { useState, useMemo, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Search,
  Database,
  Code2,
  Coffee,
  Braces,
  BrainCircuit,
  Workflow,
  Cloud,
  Bot,
  Boxes,
  Github,
} from "lucide-react";

const skillIconMap: Record<string, string> = {
  JavaScript: "/svgs/javascript.svg",
  TypeScript: "/svgs/typescript-svgrepo-com.svg",
  Python: "/svgs/python-svgrepo-com (1).svg",
  "C++": "/svgs/c-plus-plus-svgrepo-com.svg",
  "Next.js": "/svgs/next-dot-js-svgrepo-com.svg",
  React: "/svgs/react-svgrepo-com.svg",
  Vue: "/svgs/vue.svg",
  "Tailwind CSS": "/svgs/tailwind-svgrepo-com.svg",
  "Node.js": "/svgs/node-js-svgrepo-com.svg",
  Express: "/svgs/express-svgrepo-com.svg",
  "Spring Boot": "/svgs/spring-boot-svgrepo-com.svg",
  Django: "/svgs/django-svgrepo-com.svg",
  Mongoose: "/svgs/mongodb-svgrepo-com.svg",
  Bootstrap: "/svgs/bootstrap-svgrepo-com.svg",
  MongoDB: "/svgs/mongodb-svgrepo-com.svg",
  PostgreSQL: "/svgs/pgsql-svgrepo-com.svg",
  MySQL: "/svgs/mysql-logo-svgrepo-com.svg",
  AWS: "/svgs/aws-svgrepo-com.svg",
  "Microsoft Azure": "/svgs/azure-icon-svgrepo-com.svg",
  Vercel: "/svgs/vercel-icon-svgrepo-com.svg",
  Docker: "/svgs/docker-icon-svgrepo-com.svg",
  Nginx: "/svgs/nginx-logo.svg",
  Figma: "/svgs/figma-svgrepo-com.svg",
  "REST APIs": "/svgs/api-svgrepo-com.svg",
  "Linux/Unix": "/svgs/linux-svgrepo-com.svg",
  "Apache Spark": "/svgs/apache-spark-logo.svg",
  Hadoop: "/svgs/hadoop-logo.svg",
  Git: "/svgs/git-svgrepo-com.svg",
  Jest: "/svgs/jest-svgrepo-com.svg",
};

const skillsList = [
  // Languages
  {
    name: "JavaScript",
    category: "Language",
  },
  {
    name: "TypeScript",
    category: "Language",
  },
  {
    name: "Python",
    category: "Language",
  },
  {
    name: "C++",
    category: "Language",
  },
  {
    name: "Java",
    category: "Language",
    icon: <Coffee className="w-8 h-8 text-red-600" />,
  },
  {
    name: "HTML/CSS",
    category: "Language",
    icon: <Braces className="w-8 h-8 text-orange-500" />,
  },

  // Frameworks
  {
    name: "Next.js",
    category: "Framework",
  },
  {
    name: "React",
    category: "Framework",
  },
  {
    name: "Vue",
    category: "Framework",
  },
  {
    name: "Tailwind CSS",
    category: "Framework",
  },
  {
    name: "Node.js",
    category: "Framework",
  },
  {
    name: "Express",
    category: "Framework",
  },
  {
    name: "Spring Boot",
    category: "Framework",
  },
  {
    name: "Django",
    category: "Framework",
  },
  {
    name: "Mongoose",
    category: "Framework",
  },
  {
    name: "Bootstrap",
    category: "Framework",
  },
  {
    name: "Scikit-Learn",
    category: "Framework",
    icon: <BrainCircuit className="w-8 h-8 text-orange-500" />,
  },

  // Databases
  {
    name: "MongoDB",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    category: "Database",
  },
  {
    name: "MySQL",
    category: "Database",
  },

  // Tools
  {
    name: "AWS",
    category: "Cloud/DevOps",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud/DevOps",
  },
  {
    name: "Supabase",
    category: "Cloud/DevOps",
    icon: <Database className="w-8 h-8 text-emerald-600" />,
  },
  {
    name: "Vercel",
    category: "Cloud/DevOps",
  },
  {
    name: "Docker",
    category: "Cloud/DevOps",
  },
  {
    name: "Nginx",
    category: "Cloud/DevOps",
  },
  {
    name: "GitHub Actions",
    category: "Cloud/DevOps",
    icon: <Workflow className="w-8 h-8 text-sky-600" />,
  },
  {
    name: "Cloudinary",
    category: "Cloud/DevOps",
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
  },
  {
    name: "Figma",
    category: "Design",
  },
  {
    name: "REST APIs",
    category: "Architecture",
  },
  {
    name: "Linux/Unix",
    category: "OS",
  },

  // Libraries/Concepts
  {
    name: "OpenAI API",
    category: "AI",
    icon: <Bot className="w-8 h-8 text-emerald-700" />,
  },
  {
    name: "RAG Pipelines",
    category: "AI",
    icon: <Database className="w-8 h-8 text-indigo-600" />,
  },
  {
    name: "JSON Schema",
    category: "Data",
    icon: <Boxes className="w-8 h-8 text-violet-600" />,
  },
  {
    name: "Apache Spark",
    category: "Data Engineering",
  },
  {
    name: "Hadoop",
    category: "Data Engineering",
  },
  {
    name: "Git",
    category: "Version Control",
  },
  {
    name: "GitHub",
    category: "Version Control",
    icon: <Github className="w-8 h-8 text-gray-800" />,
  },
  {
    name: "Jest",
    category: "Testing",
  },
];

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const getSkillIcon = (skill: { name: string; icon?: ReactNode }) => {
    if (skill.icon) return skill.icon;

    const iconSrc = skillIconMap[skill.name];
    if (iconSrc) {
      return (
        <Image
          src={iconSrc}
          alt={`${skill.name} icon`}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          loading="lazy"
          unoptimized
        />
      );
    }

    return <Code2 className="w-8 h-8 text-[#4DA8DA]" />;
  };

  const filteredSkills = useMemo(() => {
    return skillsList.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const positionedSkills = useMemo(() => {
    const positioned: Array<{
      skill: (typeof skillsList)[number];
      row: number;
      col: number;
      offset: boolean;
    }> = [];
    let cursor = 0;
    let useFourItems = true;
    let row = 0;

    while (cursor < filteredSkills.length) {
      const rowSize = useFourItems ? 4 : 3;
      const rowItems = filteredSkills.slice(cursor, cursor + rowSize);

      rowItems.forEach((skill, col) => {
        positioned.push({
          skill,
          row,
          col,
          offset: !useFourItems,
        });
      });

      cursor += rowSize;
      useFourItems = !useFourItems;
      row += 1;
    }

    return positioned;
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,168,218,0.1),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl max-w-2xl mx-auto font-medium text-gray-700"
          >
            Search through my repertoire of languages, frameworks, and tools.
          </motion.p>
        </div>

        {/* Search Bar - Dark Glass style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 relative group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-[#3B9DD8] to-[#4DA8DA] rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20" />
          <div className="relative flex items-center bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden p-2">
            <Search className="w-6 h-6 text-[#4DA8DA] ml-4 mr-2" />
            <input
              type="text"
              placeholder="Search skills (e.g., React, Python, AWS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none text-gray-800 focus:ring-0 placeholder-gray-500 text-lg px-2 py-3 outline-none font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-sm text-gray-700 hover:text-[#4DA8DA] mr-4 transition-colors font-semibold bg-gray-100/80 px-3 py-1 rounded-full border border-gray-200 shadow-sm cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Honeycomb Skills Grid */}
        <div className="relative min-h-150 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {filteredSkills.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-gray-600 py-20 bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] px-12"
              >
                <Search className="w-12 h-12 mb-4 opacity-40 text-[#4DA8DA]" />
                <p className="text-xl font-medium">
                  No skills found matching &quot;{searchTerm}&quot;
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="honeycomb-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="honeycomb-container"
              >
                {positionedSkills.map(({ skill, row, col, offset }, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.03,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="hexagon-wrapper"
                    style={{
                      gridRowStart: row + 1,
                      gridColumnStart: offset ? col * 2 + 2 : col * 2 + 1,
                      gridColumnEnd: "span 2",
                    }}
                  >
                    <div className="hexagon group">
                      {/* SVG Border */}
                      <svg
                        className="hexagon-border"
                        viewBox="0 0 100 115"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
                          fill="none"
                          stroke="rgba(77, 168, 218, 0.5)"
                          strokeWidth="7"
                          className="hexagon-stroke"
                        />
                      </svg>

                      {/* Outer glow */}
                      <div className="hexagon-glow"></div>

                      {/* Content */}
                      <div className="hexagon-content">
                        <div className="hexagon-icon">
                          {getSkillIcon(skill)}
                        </div>
                        <div className="hexagon-text">
                          <h3 className="hexagon-title">{skill.name}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .honeycomb-container {
          display: grid;
          grid-template-columns: repeat(8, 80px);
          grid-auto-rows: 138px;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 20px;
        }

        .hexagon-wrapper {
          width: 160px;
          height: 184px;
          position: relative;
          margin: 0;
          align-self: start;
        }

        .hexagon {
          width: 100%;
          height: 100%;
          position: relative;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 
                      inset 0 1px 0 rgba(255, 255, 255, 0.5),
                      0 4px 16px rgba(77, 168, 218, 0.1);
        }

        .hexagon-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .hexagon-stroke {
          transition: stroke 0.3s ease;
          stroke-linejoin: round;
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }

        .hexagon:hover .hexagon-stroke {
          stroke: rgba(77, 168, 218, 0.7);
        }

        .hexagon-glow {
          position: absolute;
          inset: -4px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, rgba(59, 157, 216, 0.4), rgba(77, 168, 218, 0.4));
          opacity: 0;
          filter: blur(16px);
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .hexagon:hover .hexagon-glow {
          opacity: 1;
        }

        .hexagon:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(77, 168, 218, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .hexagon-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 20px 12px;
          position: relative;
          z-index: 1;
        }

        .hexagon-icon {
          margin-bottom: 12px;
          transition: transform 0.3s ease;
        }

        .hexagon:hover .hexagon-icon {
          transform: scale(1.2) translateY(-4px);
        }

        .hexagon-text {
          text-align: center;
        }

        .hexagon-title {
          color: rgb(31, 41, 55);
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .hexagon-category {
          color: #4DA8DA;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(255, 255, 255, 0.02);
          padding: 2px 8px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: inline-block;
        }

        @media (max-width: 768px) {
          .honeycomb-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
            gap: 4px;
          }

          .hexagon-wrapper {
            width: 120px;
            height: 138px;
          }

          .hexagon-content {
            padding: 16px 8px;
          }

          .hexagon-title {
            font-size: 12px;
          }

          .hexagon-category {
            font-size: 9px;
            padding: 2px 6px;
          }
        }

        @media (max-width: 480px) {
          .honeycomb-container {
            justify-content: center;
            padding: 10px;
            gap: 2px;
          }

          .hexagon-wrapper {
            width: 110px;
            height: 126px;
          }

          .hexagon-content {
            padding: 12px 6px;
          }

          .hexagon-title {
            font-size: 11px;
          }

          .hexagon-category {
            font-size: 8px;
            padding: 1px 4px;
          }

          .hexagon-icon svg,
          .hexagon-icon {
            transform: scale(0.85);
          }
        }
      `,
        }}
      />
    </section>
  );
}
