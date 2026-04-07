import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://hemantaregmi.com";
const ogImagePath = "/images/hero-bg.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Hemanta Regmi Portfolio",
  title: {
    default: "Hemanta Regmi | Full-Stack Software Engineer",
    template: "%s | Hemanta Regmi",
  },
  description:
    "Portfolio of Hemanta Regmi, a full-stack software engineer building scalable web applications, cloud infrastructure, and healthcare-focused digital products.",
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
  ],
  authors: [{ name: "Hemanta Regmi", url: siteUrl }],
  creator: "Hemanta Regmi",
  publisher: "Hemanta Regmi",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hemanta Regmi | Full-Stack Software Engineer",
    description:
      "Explore Hemanta Regmi's portfolio featuring full-stack projects, cloud architecture work, and software engineering experience.",
    siteName: "Hemanta Regmi Portfolio",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Hemanta Regmi portfolio hero background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanta Regmi | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer portfolio with projects, experience, and cloud-focused application work.",
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
