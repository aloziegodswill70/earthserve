
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Leaf,
  Recycle,
  Sprout,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const phases = [
  {
    number: "01",
    period: "Phase One",
    title: "Foundation Phase",
    subtitle: "Awareness & Community Engagement",
    description:
      "Building a strong foundation through environmental education, public awareness and meaningful community engagement.",
    focus: "Community Engagement",
    icon: Compass,
    image: "/images/earthserve1.jpg",
    imageAlt: "EarthServe Foundation community and environmental activities",
    objectives: [
      "Promote environmental awareness and education.",
      "Engage communities in sustainable practices.",
      "Identify local environmental challenges.",
    ],
  },
  {
    number: "02",
    period: "Phase Two",
    title: "Action Phase",
    subtitle: "Practical Environmental Initiatives",
    description:
      "Translating awareness into action through practical environmental programmes, waste management and community-led initiatives.",
    focus: "Environmental Action",
    icon: Recycle,
    objectives: [
      "Promote responsible waste disposal and recycling.",
      "Organise environmental clean-up exercises.",
      "Encourage sustainable everyday practices.",
    ],
  },
  {
    number: "03",
    period: "Phase Three",
    title: "Growth Phase",
    subtitle: "Partnerships & Programme Expansion",
    description:
      "Expanding our reach through strategic partnerships, stronger community participation and the development of sustainable programmes.",
    focus: "Partnerships & Growth",
    icon: Sprout,
    image: "/images/earthserve2.jpg",
    imageAlt: "Environmental conservation and sustainable community development",
    objectives: [
      "Build partnerships with relevant organisations.",
      "Expand environmental and community programmes.",
      "Strengthen volunteer and stakeholder participation.",
    ],
  },
  {
    number: "04",
    period: "Phase Four",
    title: "Long-Term Vision",
    subtitle: "Measurable & Lasting Impact",
    description:
      "Creating lasting environmental and social impact through measurable outcomes, continuous improvement and sustainable development.",
    focus: "Lasting Impact",
    icon: Target,
    objectives: [
      "Monitor and evaluate programme outcomes.",
      "Measure environmental and community impact.",
      "Promote long-term sustainable development.",
    ],
  },
];

function PhaseImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-52 overflow-hidden sm:h-60">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#032B16]/70 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-6">
        <span className="rounded-full border border-white/30 bg-[#073B20]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          EarthServe Foundation
        </span>
      </div>
    </div>
  );
}

function PhaseObjectives({
  objectives,
}: {
  objectives: string[];
}) {
  return (
    <div className="mt-6 border-t border-[#E5EBE1] pt-5">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#123B25]">
        Key Objectives
      </h4>

      <ul className="space-y-3">
        {objectives.map((objective) => (
          <li
            key={objective}
            className="flex items-start gap-3 text-sm leading-6 text-[#647368]"
          >
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-[#0B6B35]"
            />
            {objective}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhaseCard({
  phase,
}: {
  phase: (typeof phases)[number];
}) {
  const Icon = phase.icon;

  return (
    <article className="overflow-hidden rounded-3xl border border-[#DCE5D5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {phase.image && phase.imageAlt && (
        <PhaseImage src={phase.image} alt={phase.imageAlt} />
      )}

      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B6B35]">
            {phase.period}
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2E5] text-[#0B6B35]">
            <Icon size={21} />
          </span>
        </div>

        <span className="text-3xl font-black text-[#D4D68A]">
          {phase.number}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-[#123B25] sm:text-3xl">
          {phase.title}
        </h3>

        <p className="mt-2 text-sm font-semibold text-[#6A806C]">
          {phase.subtitle}
        </p>

        <p className="mt-4 text-sm leading-7 text-[#647368]">
          {phase.description}
        </p>

        <PhaseObjectives objectives={phase.objectives} />
      </div>
    </article>
  );
}

export default function MasterPlanSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F6F8EE] py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#D4D68A]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#0B6B35]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0B6B35]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B6B35]">
            <Leaf size={14} />
            Our Roadmap
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#123B25] sm:text-4xl lg:text-5xl">
            Our Master Plan for a{" "}
            <span className="text-[#0B6B35]">
              Sustainable Future
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#53665A] sm:text-base">
            Our roadmap outlines a practical journey towards environmental
            responsibility, community empowerment and sustainable development.
            Each phase builds on the progress of the previous one.
          </p>
        </div>

        {/* Roadmap overview */}
        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => {
            const Icon = phase.icon;

            return (
              <div
                key={phase.number}
                className="group rounded-2xl border border-[#DCE5D5] bg-white/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B6B35]/30 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B6B35]">
                    {phase.period}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2E5] text-[#0B6B35] transition-colors group-hover:bg-[#0B6B35] group-hover:text-white">
                    <Icon size={19} />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#123B25]">
                  {phase.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#68786B]">
                  {phase.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Roadmap timeline */}
        <div className="relative">
          {/* Central timeline line on desktop */}
          <div className="absolute bottom-10 left-6 top-10 hidden w-px bg-[#C8D8C4] lg:left-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={phase.number}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-20"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 top-8 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#F6F8EE] bg-[#0B6B35] text-white shadow-lg lg:left-1/2 lg:flex">
                    <Icon size={20} />
                  </div>

                  {/* Phase card */}
                  <div
                    className={`${
                      isLeft ? "lg:pr-12" : "lg:order-2 lg:pl-12"
                    }`}
                  >
                    <PhaseCard phase={phase} />
                  </div>

                  {/* Timeline information */}
                  <div
                    className={`hidden lg:flex ${
                      isLeft
                        ? "lg:pl-12 lg:justify-start"
                        : "lg:order-1 lg:pr-12 lg:justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-sm ${
                        isLeft ? "text-left" : "text-right"
                      }`}
                    >
                      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0B6B35]">
                        {phase.period}
                      </span>

                      <p className="mt-3 text-6xl font-black text-[#D4D68A]">
                        {phase.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-[#123B25]">
                        {phase.focus}
                      </h3>

                      <div
                        className={`mt-5 h-1 w-16 rounded-full bg-[#0B6B35] ${
                          isLeft ? "" : "ml-auto"
                        }`}
                      />

                      <p className="mt-5 text-sm leading-7 text-[#68786B]">
                        Every phase moves us closer to a cleaner environment
                        and stronger, more sustainable communities.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-[#073B20] px-7 py-12 text-center shadow-xl sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-earth-grid bg-grid opacity-20"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A]">
              <Leaf size={14} />
              Be Part of the Change
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              A Sustainable Future Starts With{" "}
              <span className="text-[#D4D68A]">
                Collective Action.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Every individual, community and organisation has a role to play.
              Join EarthServe Foundation as we work towards cleaner environments
              and stronger communities.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4D68A] px-7 py-3.5 text-sm font-bold text-[#123B25] transition-all duration-300 hover:bg-white"
              >
                Get Involved
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Learn More
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        {/* Roadmap disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#829083]">
          This roadmap represents our strategic direction and may evolve as
          programmes develop, partnerships grow and community needs change.
        </p>
      </div>
    </section>
  );
}