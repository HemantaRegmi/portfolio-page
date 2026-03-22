import Image from "next/image";

const tags = [
  "Full-Stack Developer",
  "Scalable Systems",
  "Cloud Infrastructure",
  "Performance-Driven",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Mountain valley road at sunset"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />

        <div className="hero-float absolute top-[15%] left-[10%] size-32 rounded-full border border-white/5 bg-gradient-to-br from-[#3B9DD8]/20 to-[#4DA8DA]/10 shadow-[0_8px_32px_rgba(59,157,216,0.15)] backdrop-blur-sm" />
        <div className="hero-float-reverse absolute top-[25%] right-[15%] size-24 rounded-full border border-white/5 bg-gradient-to-br from-[#4DA8DA]/15 to-[#3B9DD8]/10 shadow-[0_8px_32px_rgba(77,168,218,0.15)] backdrop-blur-sm" />
        <div className="hero-float-slow absolute bottom-[30%] left-[20%] size-20 rounded-full border border-white/5 bg-gradient-to-br from-[#2D7BB8]/20 to-cyan-400/10 shadow-[0_8px_32px_rgba(45,123,184,0.15)] backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-8 max-w-5xl px-4 text-4xl leading-tight font-extrabold tracking-tight text-white/95 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] md:text-6xl lg:text-7xl [font-family:var(--font-space-grotesk)]">
          Passionate About Delivering{" "}
          <span className="bg-gradient-to-r from-[#4DA8DA] via-[#3B9DD8] to-[#2D7BB8] bg-clip-text text-transparent">
            Solutions
          </span>{" "}
          End-to-End
        </h1>

        <div className="mb-12 px-4">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-white/85 md:gap-4 md:text-base">
            {tags.map((tag) => (
              <li key={tag} className="flex items-center gap-3 md:gap-4">
                <span>{tag}</span>
                {tag !== tags[tags.length - 1] && (
                  <span className="size-1.5 rounded-full bg-[#4DA8DA]" />
                )}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-[#4DA8DA] px-8 py-4 text-lg font-extrabold text-white shadow-[0_8px_32px_rgba(77,168,218,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#3B9DD8] hover:shadow-[0_12px_40px_rgba(77,168,218,0.5)]"
        >
          View My Work
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/75 transition-colors hover:text-[#4DA8DA]"
      >
        <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-lg">
          Scroll
        </span>
        <span className="hero-bob rounded-full border border-white/10 bg-white/[0.02] p-2.5 text-lg leading-none shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-lg">
          ↓
        </span>
      </a>
    </section>
  );
}
