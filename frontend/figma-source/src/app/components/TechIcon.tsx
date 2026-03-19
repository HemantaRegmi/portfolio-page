import { Cloud } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiGoogleanalytics,
  SiOpenai,
} from "react-icons/si";

interface TechIconProps {
  icon: string;
  className?: string;
}

export function TechIcon({ icon, className = "w-5 h-5" }: TechIconProps) {
  const iconMap: Record<string, JSX.Element> = {
    SiNextdotjs: <SiNextdotjs className={className} />,
    SiReact: <SiReact className={className} />,
    SiNodedotjs: <SiNodedotjs className={className} />,
    SiTypescript: <SiTypescript className={className} />,
    SiTailwindcss: <SiTailwindcss className={className} />,
    SiGoogleanalytics: <SiGoogleanalytics className={className} />,
    SiOpenai: <SiOpenai className={className} />,
    Cloud: <Cloud className={className} />,
  };

  return iconMap[icon] || null;
}
