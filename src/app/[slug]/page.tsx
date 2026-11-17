
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  HandHeart,
  Target,
} from "lucide-react";

import { initiatives } from "@/lib/initiatives";

export function generateStaticParams() {
  return initiatives.map((initiative) => ({
    slug: initiative.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const initiative = initiatives.find((item) => item.slug === slug);

  if (!initiative) {
    return {
      title: "Initiative Not Found | EarthServe Foundation",
    };
  }

  return {
    title: `${initiative.label} | EarthServe Foundation International`,
    description: initiative.introduction,
  };
}

export default async function InitiativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const initiative = initiatives.find((item) => item.slug === slug);

  if (!initiative) {
    notFound();
  }

  const Icon = initiative.icon;

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="earth-section earth-grid earth-glow relative isolate overflow-hidden bg-gradient-to-br from-[#012812] via-[#06451F] to-[#075B2A] px-5 py-24 text-center text-white sm:px-8 sm:py-28 lg:py-36">
        <div className="absolute inset-0 -z-10 bg-[#012812]/30" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#D4D68A]/40 bg-white/10 text-[#D4D68A] shadow-xl backdrop-blur-sm">
            <Icon size={42} strokeWidth={1.5} />
          </div>

          <span className="inline-flex rounded-full border border-[#D4D68A]/50 bg-[#012812]/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A] backdrop-blur-sm sm:text-sm">
            {initiative.eyebrow}
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {initiative.headline}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            {initiative.introduction}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4D68A] px-8 py-4 text-sm font-extrabold text-[#012812] shadow-lg transition hover:bg-white"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/initiatives"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Initiatives
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B2A]">
              About This Initiative
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#012812] sm:text-4xl">
              Making Sustainability a Shared Responsibility
            </h2>

            <div className="mt-6 h-1.5 w-20 rounded-full bg-[#D4D68A]" />

            <p className="mt-7 text-base leading-8 text-gray-600">
              {initiative.overview}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#012812] to-[#075B2A] p-8 text-white shadow-xl sm:p-10">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#D4D68A]/20" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full border border-[#D4D68A]/20" />

            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4D68A]/15 text-[#D4D68A]">
                <Globe2 size={30} />
              </div>

              <h3 className="text-2xl font-extrabold">
                Our Commitment
              </h3>

              <p className="mt-5 text-base leading-8 text-white/80">
                {initiative.impact}
              </p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#D4D68A]">
                  EarthServe Foundation International
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Empowering the next generation for a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="earth-section earth-grid relative isolate overflow-hidden bg-[#F4F8F3] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075B2A]/10 text-[#075B2A]">
              <Target size={30} />
            </div>

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B2A]">
              What We Aim to Achieve
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#012812] sm:text-4xl">
              Our Objectives
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our work is guided by practical objectives that encourage
              responsible action, community participation, and lasting
              environmental and social progress.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {initiative.objectives.map((objective, index) => (
              <div
                key={objective}
                className="group rounded-2xl border border-[#075B2A]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#075B2A]/10 text-[#075B2A] transition group-hover:bg-[#075B2A] group-hover:text-white">
                  <CheckCircle2 size={23} />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-widest text-[#A5AA54]">
                  Objective 0{index + 1}
                </span>

                <p className="mt-3 text-base font-semibold leading-7 text-[#012812]">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4D68A]/30 text-[#075B2A]">
              <HandHeart size={30} />
            </div>

            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B2A]">
              How We Make a Difference
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#012812] sm:text-4xl">
              Our Areas of Focus
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We encourage practical action and collaboration through the
              following areas of focus.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {initiative.activities.map((activity, index) => (
              <article
                key={activity.title}
                className="rounded-2xl border border-[#075B2A]/10 bg-white p-7 shadow-[0_8px_30px_rgba(1,40,18,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#075B2A] text-[#D4D68A]">
                  <span className="text-lg font-extrabold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold leading-snug text-[#012812]">
                  {activity.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="earth-section earth-grid earth-glow relative isolate overflow-hidden bg-gradient-to-br from-[#012812] via-[#06451F] to-[#075B2A] px-5 py-20 text-center text-white sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-4xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D4D68A]">
            Be Part of the Change
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Every Action Counts. Every Contribution Matters.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            {initiative.closing}
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-[#D4D68A] px-9 py-4 text-sm font-extrabold text-[#012812] shadow-lg transition hover:bg-white"
          >
            Partner With Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
