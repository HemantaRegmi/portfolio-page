import type { MetadataRoute } from "next";
import { siteConfig } from "@/utils/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8fdff",
    theme_color: "#4DA8DA",
    lang: siteConfig.language,
    icons: [
      {
        src: "/svgs/mountain-nature-snow-svgrepo-com.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
