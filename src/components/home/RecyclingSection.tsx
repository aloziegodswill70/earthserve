
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Droplets,
  Leaf,
  Recycle,
  Sprout,
  Trash2,
} from "lucide-react";

const recyclingCategories = [
  {
    icon: Recycle,
    number: "01",
    title: "Plastic",
    description:
      "Learn how to separate recyclable plastic materials and reduce unnecessary single-use plastics.",
    accent: "bg-[#D4D68A]",
  },
  {
    icon: Trash2,
    number: "02",
    title: "Paper & Cardboard",
    description:
      "Keep suitable paper and cardboard materials clean and dry for potential recycling.",
    accent: "bg-[#E8EDCF]",
  },
  {
    icon: Sprout,
    number: "03",
    title: "Organic Waste",
    description:
      "Explore responsible ways to manage food scraps and other suitable biodegradable waste.",
    accent: "bg-[#B9C36B]",
  },
  {
    icon: Droplets,
    number: "04",
    title: "Glass & Metal",
    description:
      "Identify reusable and recyclable glass and metal items, following local collection guidance.",
    accent: "bg-[#D4D68A]",
  },
];

const recyclingSteps = [
  {
    number: "01",
    title: "Separate",
    description:
      "Sort waste into appropriate categories instead of mixing all materials together.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Empty containers and follow local instructions for cleaning and preparing materials.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Use a verified collection point or recycling service that accepts those materials.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Reduce waste, reuse suitable items, and encourage others to adopt responsible habits.",
  },
];

export default function RecyclingSection() {
  return (
    <section
      id="recycling"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* EarthServe background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-[#D4D68A]/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-80 w-80 rounded-full bg-[#477B35]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#477B35]/20 bg-[#F6F8EE] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#276B35]">
            <Recycle size={16} />
            Responsible Waste Management
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-[#012812] sm:text-5xl lg:text-6xl">
            Waste Less.
            <span className="block text-[#477B35]">
              Reuse More. Restore Nature.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#365342] sm:text-lg">
            Recycling starts with everyday decisions. By separating suitable
            materials, reducing waste, and supporting responsible disposal,
            we can help build cleaner communities and conserve resources.
          </p>
        </div>

        {/* Recycling categories */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recyclingCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.number}
                className="group rounded-2xl border border-[#477B35]/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#477B35]/35 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.accent} text-[#012812]`}
                  >
                    <Icon size={24} />
                  </div>

                  <span className="font-heading text-xl font-bold text-[#477B35]/35">
                    {category.number}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-[#012812]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#365342]">
                  {category.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-[#D4D68A] transition-all duration-300 group-hover:w-16" />
              </article>
            );
          })}
        </div>

        {/* Recycling process banner */}
        <div className="relative mt-16 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#012812] via-[#064A24] to-[#075B2A] p-6 shadow-xl sm:mt-20 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-earth-grid bg-grid opacity-60"
          />

          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4D68A]/25 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A]">
                <Leaf size={15} />
                How It Works
              </span>

              <h3 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
                Make recycling part of everyday life.
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Simple steps can make waste management more effective when
                materials are handled correctly and suitable recycling
                facilities are available.
              </p>
            </div>

            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {recyclingSteps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4D68A]/30 bg-white/[0.07] font-heading text-xl font-bold text-[#D4D68A]">
                    {step.number}
                  </div>

                  <h4 className="mt-5 font-heading text-xl font-bold text-white">
                    {step.title}
                  </h4>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-white/65">
                    {step.description}
                  </p>

                  {index < recyclingSteps.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={19}
                      className="mx-auto mt-5 hidden text-[#D4D68A]/60 lg:block"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/15 pt-7 text-center">
              <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65">
                Recycling rules differ by material and location. Always check
                what your local collection service accepts before delivering
                materials.
              </p>
            </div>
          </div>
        </div>

        {/* Community action */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EDCF] text-[#075B2A]">
            <Sprout size={28} />
          </div>

          <h3 className="mt-5 font-heading text-3xl font-bold text-[#012812] sm:text-4xl">
            A cleaner community begins with us.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#365342]">
            Interested in supporting recycling awareness, community clean-ups,
            or responsible waste management initiatives? Join EarthServe
            Foundation in encouraging positive environmental action.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-[#075B2A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#03391C]"
            >
              Get Involved
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#477B35]/25 bg-[#F6F8EE] px-6 py-3.5 text-sm font-bold text-[#075B2A] transition hover:border-[#075B2A]"
            >
              Discuss a Partnership
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#477B35]">
            <CheckCircle2 size={17} />
            <span>Reduce waste. Protect resources. Inspire change.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
