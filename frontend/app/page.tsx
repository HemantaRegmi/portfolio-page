"use client";

import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Image from "next/image";
import Experience from "@/sections/experience";
import Education from "@/sections/education";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div
      className="min-h-screen text-gray-800 selection:bg-[#4DA8DA]/30 selection:text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
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
      </main>
    </div>
  );
}
