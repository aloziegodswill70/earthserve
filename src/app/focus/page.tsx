
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  Recycle,
  Sprout,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  {
    number: "01",
    icon: Leaf,
    title: "Environmental Awareness",
    subtitle: "Education. Awareness. Responsibility.",
    description:
      "We promote environmental awareness and education to help individuals and communities understand environmental challenges and the importance of protecting their surroundings.",
    objectives: [
      "Encourage environmental education and awareness.",
      "Promote responsible environmental behaviour.",
      "Inspire individuals to take practical environmental action.",
    ],
  },
  {
    number: "02",
    icon: Recycle,
    title: "Responsible Waste Management",
    subtitle: "Reduce. Reuse. Recycle.",
    description:
      "We encourage responsible waste management practices that support cleaner surroundings, reduce environmental pollution and promote a culture of proper waste disposal and recycling.",
    objectives: [
      "Promote responsible waste disposal.",
      "Encourage waste reduction and recycling.",
      "Support cleaner and healthier communities.",
    ],
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Community Participation",
    subtitle: "Together. Engaged. Empowered.",
    description:
      "We believe meaningful environmental progress requires collective effort. We encourage communities, volunteers and organisations to participate in initiatives that create lasting positive change.",
    objectives: [
      "Encourage active community participation.",
      "Build partnerships and collaboration.",
      "Promote community-led environmental initiatives.",
    ],
  },
];

export default function FocusPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#F6F8EE]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#012812] sm:min-h-[680px]">
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-earth-grid bg-grid opacity-40"
        />

        {/* Hero image */}
        <Image
          src="/images/earthserve1.jpg"
          alt="EarthServe Foundation environmental and community initiatives"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#012812]/95 via-[#012812]/75 to-[#012812]/35" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4D68A]/30 bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A] backdrop-blur-sm">
              <Sprout size={15} />
              Our Focus Areas
            </span>

            <h1 className="mt-7 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Turning Purpose Into{" "}
              <span className="text-[#D4D68A]">
                Meaningful Action.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              At EarthServe Foundation, our work focuses on environmental
              awareness, responsible waste management and community
              participation. We believe a better future begins with
              informed people and collective action.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#our-focus"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4D68A] px-7 py-4 text-sm font-bold text-[#012812] transition hover:bg-white"
              >
                Explore Our Focus
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Get Involved
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 z-20 h-1.5 w-full bg-gradient-to-r from-[#477B35] via-[#D4D68A] to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B6B35]">
              Our Approach
            </span>

            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-[#123B25] sm:text-4xl lg:text-5xl">
              Focused On What{" "}
              <span className="text-[#0B6B35]">
                Matters Most.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#53665A]">
              Environmental sustainability is a shared responsibility.
              Through education, practical initiatives and community
              collaboration, EarthServe Foundation seeks to encourage
              meaningful actions that contribute to a cleaner and
              healthier environment.
            </p>

            <p className="mt-5 text-base leading-8 text-[#53665A]">
              Our focus areas connect environmental responsibility
              with everyday community participation, creating
              opportunities for people to contribute to lasting change.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0B6B35] transition hover:gap-3"
            >
              Learn About EarthServe
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Focus statement */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#073B20] p-8 shadow-xl sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-earth-grid bg-grid opacity-30"
            />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4D68A] text-[#012812]">
                <Target size={27} />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A]">
                Our Central Commitment
              </p>

              <h3 className="mt-4 font-heading text-2xl font-bold leading-snug text-white sm:text-3xl">
                A cleaner environment starts with informed and empowered
                communities.
              </h3>

              <div className="mt-8 h-px bg-white/20" />

              <p className="mt-6 text-sm leading-7 text-white/65">
                We bring people, ideas and practical environmental
                solutions together to encourage a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR FOCUS AREAS */}
      <section
        id="our-focus"
        className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-30"
        />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0B6B35]/15 bg-[#F6F8EE] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B6B35]">
              <Leaf size={15} />
              What Guides Our Work
            </span>

            <h2 className="mt-6 font-heading text-3xl font-bold text-[#123B25] sm:text-4xl lg:text-5xl">
              Our Three Focus Areas
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#68786B] sm:text-base">
              These priorities guide our programmes, partnerships and
              efforts towards a more environmentally responsible society.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group relative overflow-hidden rounded-3xl border border-[#DCE5D5] bg-[#F6F8EE] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#0B6B35]/30 hover:shadow-xl sm:p-8"
                >
                  <span className="absolute right-6 top-4 text-6xl font-black text-[#0B6B35]/[0.06]">
                    {area.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073B20] text-[#D4D68A] transition-all duration-300 group-hover:bg-[#D4D68A] group-hover:text-[#073B20]">
                      <Icon size={26} />
                    </div>

                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#0B6B35]">
                      Focus Area {area.number}
                    </p>

                    <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#123B25]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#8A9A7E]">
                      {area.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-[#68786B]">
                      {area.description}
                    </p>

                    <div className="mt-7 border-t border-[#DCE5D5] pt-6">
                      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#123B25]">
                        Our Priorities
                      </h4>

                      <ul className="space-y-3">
                        {area.objectives.map((objective) => (
                          <li
                            key={objective}
                            className="flex items-start gap-3 text-sm leading-6 text-[#53665A]"
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

                    <div className="mt-7 h-1 w-12 rounded-full bg-[#D4D68A] transition-all duration-300 group-hover:w-20" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="relative overflow-hidden bg-[#012812] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-earth-grid bg-grid opacity-40"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4D68A]">
              Our Commitment to Change
            </span>

            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Small Actions.
              <span className="block text-[#D4D68A]">
                Lasting Impact.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-white/70">
              We recognise that meaningful environmental progress
              requires consistency, collaboration and the participation
              of people at every level of society.
            </p>

            <p className="mt-5 text-base leading-8 text-white/70">
              Through our focus areas, we aim to encourage practical
              solutions that make environmental responsibility part
              of everyday life.
            </p>

            <Link
              href="/get-involved"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4D68A] px-7 py-3.5 text-sm font-bold text-[#012812] transition hover:bg-white"
            >
              Join Our Efforts
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 sm:min-h-[400px]">
            <Image
              src="/images/earthserve1.jpg"
              alt="EarthServe Foundation working towards environmental sustainability"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <div className="flex items-center gap-3 text-[#D4D68A]">
                <Leaf size={22} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  EarthServe Foundation
                </span>
              </div>

              <p className="mt-3 max-w-md text-2xl font-bold text-white sm:text-3xl">
                Together, we can create a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F6F8EE] px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B6B35]">
            <HeartHandshake size={16} />
            Be Part of the Change
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-[#123B25] sm:text-4xl lg:text-5xl">
            The Future We Want Begins With What We Do Today.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#68786B] sm:text-base">
            Join EarthServe Foundation in encouraging environmental
            awareness, responsible practices and stronger communities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#073B20] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0B6B35]"
            >
              Get Involved
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B6B35]/25 px-7 py-4 text-sm font-bold text-[#123B25] transition hover:bg-white"
            >
              About EarthServe
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
