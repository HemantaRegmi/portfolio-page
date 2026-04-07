import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Image from "next/image";
import Experience from "@/sections/experience";
import Education from "@/sections/education";
import { Projects } from "@/sections/projects";
import Contact from "./sections/contact";

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Hemanta Regmi",
      url: "https://hemantaregmi.com",
      jobTitle: "Full-Stack Software Engineer",
      sameAs: ["https://github.com/hemantaregmi"],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Django",
        "AWS",
        "Azure",
        "Cloud Infrastructure",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Hemanta Regmi Portfolio",
      url: "https://hemantaregmi.com",
      description:
        "Portfolio showcasing full-stack engineering projects, experience, and technical skills.",
      author: {
        "@type": "Person",
        name: "Hemanta Regmi",
      },
    },
  ];

  return (
    <div
      className="min-h-screen text-gray-800 selection:bg-[#4DA8DA]/30 selection:text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Light Blue Botanical Leaves Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <Image
          src="/images/leaves-bg.jpg"
          alt="Botanical leaves background"
          fill
          priority
          className="w-full h-full object-cover object-center"
        />
      </div>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
