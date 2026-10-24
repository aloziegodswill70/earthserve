
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Leaf,
  Recycle,
  Sprout,
  Target,
} from "lucide-react";
import Link from "next/link";

const phases = [
  {
    number: "01",
    period: "Foundation Phase",
    title: "Awareness & Community Engagement",
    description:
      "Build environmental awareness, connect with communities, identify local needs, and encourage people to participate in environmental action.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "People coming together for community engagement",
    objectives: [
      "Environmental education and awareness",
      "Community outreach and engagement",
      "Identify priority environmental challenges",
    ],
  },
  {
    number: "02",
    period: "Action Phase",
    title: "Practical Environmental Initiatives",
    description:
      "Develop practical programmes that encourage responsible waste management, recycling, cleaner surroundings, and community participation.",
    icon: Recycle,
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Recycling materials for a cleaner environment",
    objectives: [
      "Promote recycling and waste reduction",
      "Organize suitable community activities",
      "Build partnerships with local stakeholders",
    ],
  },
  {
    number: "03",
    period: "Growth Phase",
    title: "Partnerships & Programme Expansion",
    description:
      "Strengthen collaborations, support community-led initiatives, and expand programmes according to available resources and demonstrated needs.",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Young plants growing as a symbol of environmental progress",
    objectives: [
      "Develop environmental partnerships",
      "Encourage community-led projects",
      "Expand successful initiatives responsibly",
    ],
  },
  {
    number: "04",
    period: "Long-Term Vision",
    title: "Measurable & Lasting Impact",
    description:
      "Track programme outcomes, share progress transparently, learn from experience, and pursue sustainable improvements over time.",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A lush green forest representing a sustainable future",
    objectives: [
      "Monitor and document project outcomes",
      "Publish progress and impact updates",
      "Improve programmes using lessons learned",
    ],
  },
];

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      className="relative isolate overflow-hidden bg-[#F6F8EE] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle EarthServe grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4D68A]/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#477B35]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#276B35]">
            <Leaf size={15} />
            Our Roadmap
          </span>

          <h2 className="mt-6 text-center font-heading text-4xl font-bold leading-tight text-[#012812] sm:text-5xl lg:text-6xl">
            The EarthServe
            <span className="block text-[#477B35]">Master Plan</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-[#365342] sm:text-lg">
            A practical roadmap for building environmental awareness,
            encouraging community action, and supporting a more sustainable
            future through continuous learning and collaboration.
          </p>
        </div>

        {/* Roadmap overview */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {phases.map((phase) => {
            const Icon = phase.icon;

            return (
              <div
                key={phase.number}
                className="flex flex-col items-center rounded-2xl border border-[#477B35]/15 bg-white/80 p-4 text-center shadow-sm sm:p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8EDCF] text-[#075B2A]">
                  <Icon size={22} />
                </div>

                <p className="mt-3 text-center text-xs font-bold uppercase tracking-wider text-[#477B35]">
                  Phase {phase.number}
                </p>

                <p className="mt-1 text-center text-sm font-bold text-[#012812]">
                  {phase.period}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[19px] top-8 w-px bg-[#477B35]/25 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-10 sm:space-y-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isRight = index % 2 === 1;

              return (
                <article
                  key={phase.number}
                  className="relative grid grid-cols-[40px_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[1fr_64px_1fr] sm:gap-5"
                >
                  {/* Desktop phase card */}
                  <div
                    className={`hidden sm:block ${
                      isRight ? "sm:col-start-3" : "sm:col-start-1"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-[#477B35]/15 bg-white text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={phase.image}
                          alt={phase.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/60 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-[#012812]/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          Phase {phase.number}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EDCF] text-[#477B35]">
                            <Icon size={24} />
                          </div>
                        </div>

                        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#477B35]">
                          {phase.period}
                        </p>

                        <h3 className="mt-3 text-center font-heading text-2xl font-bold leading-snug text-[#012812]">
                          {phase.title}
                        </h3>

                        <p className="mt-3 text-center text-sm leading-7 text-[#365342]">
                          {phase.description}
                        </p>

                        <div className="mx-auto my-5 h-px w-16 bg-[#D4D68A]" />

                        <h4 className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#477B35]">
                          Key Objectives
                        </h4>

                        <ul className="mt-4 space-y-4">
                          {phase.objectives.map((objective) => (
                            <li
                              key={objective}
                              className="flex flex-col items-center gap-2 text-center text-sm leading-6 text-[#365342]"
                            >
                              <CheckCircle2
                                size={19}
                                className="shrink-0 text-[#477B35]"
                              />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline marker */}
                  <div className="relative z-10 col-start-1 flex justify-center sm:col-start-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#F6F8EE] bg-[#075B2A] text-xs font-bold text-[#D4D68A] shadow-md sm:h-12 sm:w-12">
                      {phase.number}
                    </div>
                  </div>

                  {/* Mobile phase card */}
                  <div className="col-start-2 min-w-0 sm:hidden">
                    <div className="overflow-hidden rounded-2xl border border-[#477B35]/15 bg-white text-center shadow-sm">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={phase.image}
                          alt={phase.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/60 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-[#012812]/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          Phase {phase.number}
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8EDCF] text-[#477B35]">
                            <Icon size={22} />
                          </div>

                          <p className="text-center text-xs font-bold uppercase tracking-wider text-[#477B35]">
                            {phase.period}
                          </p>
                        </div>

                        <h3 className="mt-3 text-center font-heading text-xl font-bold leading-snug text-[#012812]">
                          {phase.title}
                        </h3>

                        <p className="mt-3 text-center text-sm leading-7 text-[#365342]">
                          {phase.description}
                        </p>

                        <div className="mx-auto my-5 h-px w-16 bg-[#D4D68A]" />

                        <h4 className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#477B35]">
                          Key Objectives
                        </h4>

                        <ul className="mt-4 space-y-4">
                          {phase.objectives.map((objective) => (
                            <li
                              key={objective}
                              className="flex flex-col items-center gap-2 text-center text-sm leading-6 text-[#365342]"
                            >
                              <CheckCircle2
                                size={19}
                                className="shrink-0 text-[#477B35]"
                              />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Opposite-side timeline label */}
                  <div
                    className={`hidden items-center justify-center text-center sm:flex ${
                      isRight
                        ? "sm:col-start-1 sm:row-start-1"
                        : "sm:col-start-3 sm:row-start-1"
                    }`}
                  >
                    <div className="max-w-xs px-4">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#477B35]/15 bg-white text-[#477B35] shadow-sm">
                        <Icon size={23} />
                      </div>

                      <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#477B35]">
                        {phase.period}
                      </p>

                      <p className="mt-2 text-center font-heading text-xl font-bold text-[#012812]">
                        {phase.number} / 04
                      </p>

                      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#D4D68A]" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing call to action */}
        <div className="mx-auto mt-16 max-w-4xl rounded-[1.75rem] bg-gradient-to-br from-[#012812] via-[#064A24] to-[#075B2A] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4D68A] text-[#012812]">
            <Sprout size={28} />
          </div>

          <h3 className="mt-6 text-center font-heading text-3xl font-bold text-white sm:text-4xl">
            The future starts with action.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-white/70 sm:text-base">
            Join us in raising awareness, supporting environmental initiatives,
            and encouraging positive change in our communities.
          </p>

          <Link
            href="/get-involved"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4D68A] px-7 py-3.5 text-sm font-bold text-[#012812] transition hover:bg-[#E8EDCF]"
          >
            Be Part of the Plan
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Roadmap disclaimer */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-[#365342]/75">
          This roadmap presents proposed programme phases, not confirmed
          deadlines or completed commitments. Specific targets and dates
          should be added after approval by the foundation.
        </p>
      </div>
    </section>
  );
}
