import Image from "next/image";
import { HandshakeIcon } from "@phosphor-icons/react/dist/ssr/Handshake";
import { ChatsCircleIcon } from "@phosphor-icons/react/dist/ssr/ChatsCircle";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/ssr/ArrowsClockwise";
import { TargetIcon } from "@phosphor-icons/react/dist/ssr/Target";
import { MagnifyingGlassPlusIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlassPlus";
import { GlassSurface } from "@/components/glassSurface";

const softSkills = [
  {
    icon: HandshakeIcon,
    title: "Collaborative",
    description:
      "Listening to ideas while also presenting them is an engaging experience I love. Especially with no ego involved in my programming procedure!",
  },
  {
    icon: ChatsCircleIcon,
    title: "Clear Communication",
    description:
      "Collaborating and establishing clear communication with people towards a shared end goal is something I value, since it allows for better quality discussions amongst technical and non-technical groups. Leading to a more positive project experience.",
  },
  {
    icon: ArrowsClockwiseIcon,
    title: "Adaptable",
    description:
      "Throughout my journey, I have realized that learning new technologies will be something I will encounter throughout my whole career. Navigating this portion by being adaptable to learning new tech is something I always enjoy!",
  },
  {
    icon: TargetIcon,
    title: "Humble and Goal-Oriented",
    description:
      "Delivering results is something I prioritize keeping the vision strong while understanding there's always room to grow. I am always welcome to feedback as, there is always something to learn in this exciting field!",
  },
  {
    icon: MagnifyingGlassPlusIcon,
    title: "Attention to Detail",
    description:
      "Every detail of code matters to me. When it comes to the finer grains of programming, I will always pay close attention to my work making sure I am keen on avoiding unecessary vulnerabilities and keeping code clean, modular, and readibility.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r  mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Profile Image & Bio */}
          <div
            className="space-y-6"
          >
            {/* Profile image */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                <div className="glass-surface w-64 h-64 rounded-full p-2">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[rgba(255,255,255,0.05)] shadow-inner bg-linear-to-br backdrop-blur-sm">
                    <Image
                      src="/images/profile-image.png"
                      alt="Portrait of Hemanta Regmi"
                      fill
                      priority
                      sizes="256px"
                      className="object-cover object-[50%_15%]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <GlassSurface className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am a{" "}
                <span className="font-bold text-[#0b5f8a]">
                  passionate software engineer
                </span>{" "}
                dedicated to designing scalable systems and developing
                comprehensive full-stack applications that leave an everlasting
                positive impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I bridge the gap between{" "}
                <span className="font-bold text-[#0b5f8a]">
                  complex technical requirements
                </span>{" "}
                and elegant, performant solutions. With a strong foundation in
                theory and practice, every step of the software development
                lifecycle is something I truly enjoy. Making sure I keep up with
                the latest technologies and practices within the tech industry.
              </p>
            </GlassSurface>
          </div>

          {/* Right column: Soft Skills Grid */}
          <div
            className="space-y-4"
          >
            {softSkills.map((item) => (
              <div
                key={item.title}
                className="relative group"
              >
                <GlassSurface interactive className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/90 bg-linear-to-br from-white/90 to-sky-100/60 shadow-[0_3px_10px_rgba(21,48,63,0.08),inset_0_1px_0_white]">
                      <item.icon
                        size={30}
                        weight="duotone"
                        aria-hidden="true"
                        className="text-[#0b5f8a]"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-gray-800 mb-1.5 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 relative z-10 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassSurface>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
