import { cn } from "@/lib/cn";
import type { IconName } from "@/types/portfolio";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const classes = cn("h-5 w-5", className);

  switch (name) {
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 21v-1a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v1" strokeLinecap="round" />
          <circle cx="8.5" cy="7" r="3.5" />
          <path d="M23 21v-1a4 4 0 0 0-3-3.87" strokeLinecap="round" />
          <path d="M16 3.13a3.5 3.5 0 0 1 0 6.75" strokeLinecap="round" />
        </svg>
      );
    case "message":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            d="M21 12a8.5 8.5 0 0 1-8.5 8.5H6l-3 3V12A8.5 8.5 0 0 1 11.5 3.5H12A8.5 8.5 0 0 1 21 12Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lightbulb":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 18h6" strokeLinecap="round" />
          <path d="M10 22h4" strokeLinecap="round" />
          <path
            d="M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.2 1 2V17h6v-.3c0-.8.3-1.5 1-2A7 7 0 0 0 12 2Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M1.5 12s3.5-6 10.5-6 10.5 6 10.5 6-3.5 6-10.5 6S1.5 12 1.5 12Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" strokeLinecap="round" />
        </svg>
      );
    case "mapPin":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v2" strokeLinecap="round" />
          <path d="M3 12h18" strokeLinecap="round" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor">
          <path d="M12 .7a11.3 11.3 0 0 0-3.58 22.03c.56.1.76-.24.76-.54v-2c-3.1.67-3.75-1.3-3.75-1.3-.5-1.3-1.24-1.66-1.24-1.66-1.01-.7.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.22.7-1.5-2.48-.28-5.08-1.23-5.08-5.52 0-1.22.43-2.22 1.14-3-.12-.28-.5-1.43.1-2.99 0 0 .93-.3 3.05 1.14a10.7 10.7 0 0 1 5.56 0c2.12-1.43 3.05-1.14 3.05-1.14.6 1.56.22 2.7.1 2.99.7.78 1.13 1.78 1.13 3 0 4.3-2.6 5.23-5.1 5.5.4.35.75 1.05.75 2.12v3.13c0 .3.2.65.77.54A11.3 11.3 0 0 0 12 .7Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-2 7h4v11h-4v-11Zm7 0h3.8v1.57h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.8 2.66 4.8 6.1v5.4h-4v-4.78c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.51v4.87h-4v-11Z" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14" strokeLinecap="round" />
          <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrowDown":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14" strokeLinecap="round" />
          <path d="m6 13 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      );
    case "externalLink":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 14 20 4" strokeLinecap="round" />
          <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" strokeLinecap="round" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m8 8-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m16 8 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m14 4-4 16" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
