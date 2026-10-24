import Link from "next/link";
import {
  ArrowUpRight,
  Leaf,
  Recycle,
  Sprout,
} from "lucide-react";

const focusAreas = [
  {
    icon: Leaf,
    title: "Environmental Awareness",
    description:
      "Encouraging communities to understand environmental challenges and take practical action.",
  },
  {
    icon: Recycle,
    title: "Responsible Waste Management",
    description:
      "Promoting waste reduction, responsible disposal and recycling practices.",
  },
  {
    icon: Sprout,
    title: "Community Participation",
    description:
      "Creating opportunities for people to contribute to cleaner, greener communities.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#F6F8EE] py-20 text-center sm:py-24 lg:py-28"
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-50"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#D4D68A]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#477B35]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Nature images */}
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.8fr_1.4fr_0.8fr] lg:gap-10">
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=85"
                alt="Young green plants growing in a garden"
                className="h-64 w-full object-cover sm:h-72 lg:h-80"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-[#477B35]">
              Growing a greener future
            </p>
          </div>

          {/* Centered introduction */}
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#477B35]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#276B35]">
              <Leaf size={15} />
              Who We Are
            </span>

            <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-[#012812] sm:text-5xl lg:text-6xl">
              Caring for our planet.
              <span className="mt-2 block text-[#477B35]">
                Empowering our communities.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#365342] sm:text-lg">
              EarthServe Foundation is committed to promoting environmental
              responsibility and encouraging communities to take meaningful
              steps toward a cleaner, greener and more sustainable future.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[#365342]">
              Through awareness, community participation and practical
              environmental initiatives, we aim to inspire people to make
              sustainability part of everyday life.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#075B2A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#03391C]"
              >
                Discover Our Story
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#276B35]/30 bg-white px-6 py-3.5 text-sm font-bold text-[#075B2A] transition hover:border-[#075B2A] hover:bg-[#E8EDCF]"
              >
                Join Our Mission
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=85"
                alt="Renewable energy infrastructure supporting a cleaner future"
                className="h-64 w-full object-cover sm:h-72 lg:h-80"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-[#477B35]">
              Supporting sustainable solutions
            </p>
          </div>
        </div>

        {/* Focus areas */}
        <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">
          <div className="absolute -inset-2 rounded-[2rem] border border-[#477B35]/15 sm:-inset-3" />

          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#012812] via-[#064A24] to-[#075B2A] px-5 py-10 shadow-2xl sm:px-8 sm:py-12 lg:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-earth-grid bg-grid opacity-40"
            />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4D68A]">
                Our Areas of Focus
              </p>

              <h3 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-bold text-white sm:text-4xl">
                Small actions. Lasting change.
              </h3>

              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {focusAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.title}
                      className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-7 transition hover:border-[#D4D68A]/40 hover:bg-white/[0.09]"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4D68A] text-[#012812]">
                        <Icon size={26} />
                      </div>

                      <h4 className="mt-5 font-heading text-xl font-bold text-white">
                        {area.title}
                      </h4>

                      <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-white/70">
                        {area.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Closing message */}
              <div className="mt-9 border-t border-white/15 pt-7">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4D68A] text-[#012812]">
                    <Sprout size={24} />
                  </div>

                  <p className="mx-auto max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg">
                    A greener future begins with the choices we make today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}