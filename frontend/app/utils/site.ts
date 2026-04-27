export const siteConfig = {
  name: "Hemanta Regmi",
  siteName: "Hemanta Regmi Portfolio",
  url: "https://hemantaregmi.com",
  title: "Hemanta Regmi | Full-Stack Software Engineer",
  role: "Full-Stack Software Engineer",
  description:
    "Portfolio of Hemanta Regmi, a full-stack software engineer building scalable web applications, cloud infrastructure, and healthcare-focused digital products.",
  shortDescription:
    "Portfolio showcasing full-stack engineering projects, experience, and technical skills.",
  locale: "en_US",
  language: "en-US",
  email: "hemantaregmi20@gmail.com",
  location: "Houston, TX, United States",
  ogImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  profileImage: "/images/profile-image.jpeg",
  socials: {
    github: {
      label: "GitHub",
      url: "https://github.com/HemantaRegmi",
      seoVerified: true,
    },
    linkedin: {
      label: "LinkedIn",
      // Replace this with your full /in/... profile URL to include LinkedIn in SEO identity signals.
      url: "https://www.linkedin.com/",
      seoVerified: false,
    },
  },
  keywords: [
    "Hemanta Regmi",
    "Hemanta Regmi portfolio",
    "full-stack software engineer",
    "software developer portfolio",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "cloud infrastructure",
    "healthcare software engineer",
    "web developer",
    "GitHub portfolio",
    "LinkedIn software engineer",
  ],
} as const;

export const identityProfiles = Object.values(siteConfig.socials)
  .filter((profile) => profile.seoVerified)
  .map((profile) => profile.url);
