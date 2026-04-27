import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Image from "next/image";
import Experience from "@/sections/experience";
import Education from "@/sections/education";
import { Projects } from "@/sections/projects";
import Contact from "./sections/contact";
import Footer from "@/components/footer";
import { identityProfiles, siteConfig } from "@/utils/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.profileImage}`,
        jobTitle: siteConfig.role,
        email: siteConfig.email,
        homeLocation: {
          "@type": "Place",
          name: siteConfig.location,
        },
        sameAs: identityProfiles,
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
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.siteName,
        description: siteConfig.shortDescription,
        inLanguage: siteConfig.language,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#person`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.ogImage}`,
        },
      },
    ],
  };

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
        <Footer />
      </main>
    </div>
  );
}
