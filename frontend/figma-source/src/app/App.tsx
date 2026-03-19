import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import leavesBg from "figma:asset/fcd4718d3666b3ed1837b0e2786f2d1bc180ac1a.png";

export default function App() {
  return (
    <div className="min-h-screen text-gray-800 selection:bg-[#4DA8DA]/30 selection:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Light Blue Botanical Leaves Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <img 
          src={leavesBg} 
          alt="Botanical leaves background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}