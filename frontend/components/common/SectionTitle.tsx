import { cn } from "@/lib/cn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <header className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2 className="section-title text-balance">{title}</h2>
      {subtitle ? <p className="section-subtitle mt-6 text-pretty">{subtitle}</p> : null}
      <div className="section-divider" aria-hidden="true" />
    </header>
  );
}
