import type { HeroData } from "@/types/portfolio";
import { Icon } from "@/components/common/Icon";

interface HeroSectionProps {
  hero: HeroData;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <div className="hero-orb hero-orb-bottom" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
        <h1 className="hero-title text-balance">
          {hero.headingStart} <span className="hero-title-accent">{hero.headingAccent}</span>{" "}
          {hero.headingEnd}
        </h1>

        <div className="mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm font-bold text-white/90 sm:text-base">
          {hero.tags.map((tag, index) => (
            <div key={tag} className="flex items-center gap-3">
              {index === 0 ? null : <span className="hero-dot" aria-hidden="true" />}
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <a href={hero.ctaHref} className="hero-cta mt-12">
          {hero.ctaLabel}
        </a>
      </div>

      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <span className="hero-scroll-label">Scroll</span>
        <span className="hero-scroll-icon">
          <Icon name="arrowDown" className="h-4 w-4" />
        </span>
      </a>
    </section>
  );
}
