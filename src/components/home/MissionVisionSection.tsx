
import {
  ArrowUpRight,
  Compass,
  Eye,
  HeartHandshake,
  Leaf,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "Encouraging practical choices that support a healthier environment.",
  },
  {
    icon: HeartHandshake,
    title: "Community Collaboration",
    description:
      "Working together to inspire participation and create positive change.",
  },
  {
    icon: Compass,
    title: "Sustainable Action",
    description:
      "Promoting thoughtful solutions that consider long-term environmental needs.",
  },
];

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="relative isolate overflow-hidden bg-[#012812] py-20 sm:py-24 lg:py-28"
    >
      {/* Background grid and ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-70"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#477B35]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#D4D68A]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4D68A]/25 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A]">
            <Target size={15} />
            Our Purpose & Direction
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Guided by purpose.
            <span className="block text-[#D4D68A]">
              Driven by a greener future.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-white/70 sm:text-lg">
            Our mission defines the work we pursue today. Our vision guides
            the sustainable future we hope to help create.
          </p>
        </div>

        {/* Mission and Vision cards */}
        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Mission */}
          <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#075B2A] via-[#064A24] to-[#03391C] p-7 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4D68A]/40 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-earth-grid bg-grid opacity-50"
            />

            <div className="relative flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4D68A] text-[#012812]">
                <Target size={27} />
              </div>

              <span className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                01 / Mission
              </span>

              <h3 className="mt-8 font-heading text-3xl font-bold text-white sm:text-4xl">
                What We Do
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-white/80 sm:text-lg">
                To promote environmental awareness, responsible waste
                management and community participation through education,
                collaboration and practical initiatives that encourage
                cleaner and more sustainable communities.
              </p>

              <div className="mt-8 flex w-full flex-col items-center gap-3 border-t border-white/15 pt-6">
                <Leaf className="shrink-0 text-[#D4D68A]" size={20} />
                <p className="text-center text-sm font-medium leading-6 text-white/70">
                  Turning environmental awareness into meaningful action.
                </p>
              </div>
            </div>
          </article>

          {/* Vision */}
          <article className="group relative overflow-hidden rounded-[1.75rem] border border-[#D4D68A]/30 bg-[#F6F8EE] p-7 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4D68A] sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D4D68A]/30 blur-3xl"
            />

            <div className="relative flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#012812] text-[#D4D68A]">
                <Eye size={27} />
              </div>

              <span className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#477B35]/70">
                02 / Vision
              </span>

              <h3 className="mt-8 font-heading text-3xl font-bold text-[#012812] sm:text-4xl">
                What We Aspire To
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-[#365342] sm:text-lg">
                To help build a future where environmentally responsible
                practices are part of everyday life, communities are
                empowered to protect their surroundings, and sustainable
                development supports present and future generations.
              </p>

              <div className="mt-8 flex w-full flex-col items-center gap-3 border-t border-[#477B35]/20 pt-6">
                <Eye className="shrink-0 text-[#477B35]" size={20} />
                <p className="text-center text-sm font-medium leading-6 text-[#365342]">
                  A healthier environment and a more sustainable tomorrow.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Featured EarthServe image */}
        <div className="mt-12 lg:mt-16">
          <div className="relative isolate min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl sm:min-h-[420px] lg:min-h-[480px]">
            <Image
              src="/images/earthserve6.jpg"
              alt="EarthServe Foundation environmental and community initiatives"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-top transition-transform duration-1000 hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/95 via-[#012812]/35 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-9 text-center sm:px-12 sm:pb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4D68A]/40 bg-[#012812]/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4D68A] backdrop-blur-sm sm:text-xs">
                <Leaf size={14} />
                Our Commitment to the Earth
              </span>

              <h3 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                A Greener Environment.
                <span className="block text-[#D4D68A]">
                  Stronger Communities.
                </span>
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                We believe meaningful environmental change begins with
                awareness, collective responsibility and practical action.
              </p>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-20 lg:mt-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <div>
              <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-[#D4D68A]">
                The Principles That Guide Us
              </p>

              <h3 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
                Our Core Values
              </h3>
            </div>

            <p className="mx-auto max-w-lg text-center text-sm leading-7 text-white/60 sm:text-base">
              The principles that shape how we approach environmental
              responsibility and community engagement.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition hover:border-[#D4D68A]/35 hover:bg-white/[0.07]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4D68A]/10 text-[#D4D68A]">
                    <Icon size={22} />
                  </div>

                  <span className="mt-4 font-heading text-lg font-bold text-white/25">
                    0{index + 1}
                  </span>

                  <h4 className="mt-3 text-center text-lg font-bold text-white">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-center text-sm leading-7 text-white/60">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-14 flex flex-col items-center justify-center gap-6 rounded-2xl border border-[#D4D68A]/20 bg-gradient-to-r from-[#064A24] to-[#075B2A] p-6 text-center sm:p-8">
          <div className="flex flex-col items-center">
            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Be part of the change.
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-7 text-white/70 sm:text-base">
              Join us in promoting environmental responsibility and building
              more sustainable communities.
            </p>
          </div>

          <Link
            href="/get-involved"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4D68A] px-6 py-3.5 text-sm font-bold text-[#012812] transition hover:bg-[#E8EDCF]"
          >
            Get Involved
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
