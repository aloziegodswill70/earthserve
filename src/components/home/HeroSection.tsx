
"use client";

import Image from "next/image";
import {
  ArrowRight,
  HandHeart,
  Leaf,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="earth-section earth-grid earth-glow relative isolate overflow-hidden py-20 text-center sm:py-24 lg:py-28">
      <style jsx>{`
        @keyframes earthPendulumMove {
          0% {
            transform: rotate(-12deg);
          }
          50% {
            transform: rotate(12deg);
          }
          100% {
            transform: rotate(-12deg);
          }
        }

        .earth-moving-logo {
          animation: earthPendulumMove 8s ease-in-out infinite;
          transform-origin: 50% 0%;
          will-change: transform;
        }

        .earth-italic-heading {
          font-style: italic !important;
          transform: skewX(-8deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .earth-moving-logo {
            animation: none;
          }
        }
      `}</style>

      {/* Pendulum-moving EarthServe logo background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center overflow-hidden"
      >
        <div className="earth-moving-logo relative mt-8 aspect-square w-[min(100vw,720px)] shrink-0 opacity-20 sm:w-[min(85vw,780px)] lg:w-[min(70vw,850px)]">
          <Image
            src="/images/earthservelogo.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 850px, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Green overlay keeps text readable while showing the logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#012812]/45"
      />

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 z-[2] h-80 w-80 rounded-full bg-[#477B35]/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 z-[2] h-96 w-96 rounded-full bg-[#D4D68A]/15 blur-3xl"
      />

      {/* Hero content */}
      <div className="earth-container relative z-10 mx-auto flex flex-col items-center px-5 sm:px-8">
        <span className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-[#012812]/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm sm:text-sm">
          EarthServe Foundation International
        </span>

        <h1 className="earth-italic-heading mx-auto mt-7 max-w-4xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
          Building a Cleaner Earth.
          <span className="mt-2 block font-extrabold text-gold">
            Empowering a Better Future.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-white sm:text-base sm:leading-8">
          Advancing material recycling, sustainable farming,
          renewable energy, innovation, and opportunities for
          young people and women.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/get-involved"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold text-earth-950 transition duration-300 hover:bg-earth-100 sm:w-auto"
          >
            Become a Volunteer
            <HandHeart size={18} />
          </Link>

          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/50 bg-[#012812]/25 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-gold hover:text-gold sm:w-auto"
          >
            Explore Our Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Key focus areas */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-sm text-white">
          <span className="inline-flex items-center justify-center gap-2">
            <Leaf size={17} className="text-gold" />
            Sustainability
          </span>

          <span className="inline-flex items-center justify-center gap-2">
            <HandHeart size={17} className="text-gold" />
            Empowerment
          </span>
        </div>
      </div>
    </section>
  );
}
