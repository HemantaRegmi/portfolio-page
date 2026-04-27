import { identityProfiles, siteConfig } from "@/utils/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24 pt-8 pb-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 font-bold text-sm space-y-3">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Designed & Built with
          React & Tailwind.
        </p>
        <div className="flex items-center justify-center gap-5 text-sm font-semibold">
          {identityProfiles.map((profileUrl) => (
            <a
              key={profileUrl}
              href={profileUrl}
              target="_blank"
              rel="me noopener noreferrer"
              className="text-[#21506d] hover:text-[#4DA8DA] transition-colors"
            >
              {profileUrl.includes("github.com") ? "GitHub Profile" : "LinkedIn"}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
