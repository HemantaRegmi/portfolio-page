import { PortfolioNav } from "@/components/navigation/PortfolioNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import {
  aboutData,
  contact,
  education,
  experiences,
  heroData,
  navItems,
  projects,
  skills,
} from "@/data/portfolio";

export function PortfolioPage() {
  return (
    <div className="portfolio-shell">
      <div className="global-backdrop" aria-hidden="true" />
      <PortfolioNav items={navItems} />

      <main>
        <HeroSection hero={heroData} />
        <AboutSection about={aboutData} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <EducationSection education={education} />
        <ProjectsSection projects={projects} />
        <ContactSection contact={contact} />
      </main>
    </div>
  );
}
