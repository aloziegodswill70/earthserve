
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Leaf,
  Recycle,
  Sprout,
} from "lucide-react";

const galleryImages = [
  {
    src: "/images/earthserve1.jpg",
    alt: "Environmental action",
  },
  {
    src: "/images/earthserve6.jpg",
    alt: "Community development",
  },
  {
    src: "/images/earthserve5.jpg",
    alt: "Sustainable communities",
  },
];

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
      className="relative isolate overflow-hidden bg-[#F6F8EE] py-16 text-center sm:py-24 lg:py-28"
    >
      {/* Continuous horizontal gallery animation */}
      <style jsx global>{`
        @keyframes earthServeSlide {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .earth-gallery-window {
          width: 100%;
          overflow: hidden;
        }

        .earth-gallery-track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: earthServeSlide 18s linear infinite !important;
          animation-play-state: running !important;
          will-change: transform;
        }

        .earth-gallery-set {
          display: flex;
          flex: 0 0 auto;
          flex-wrap: nowrap;
          align-items: center;
          gap: 14px;
          padding-right: 14px;
        }

        .earth-gallery-image {
          position: relative;
          flex: 0 0 auto;
          width: 220px;
          height: 125px;
          overflow: hidden;
          border-radius: 12px;
        }

        @media (min-width: 640px) {
          .earth-gallery-set {
            gap: 20px;
            padding-right: 20px;
          }

          .earth-gallery-image {
            width: 300px;
            height: 170px;
            border-radius: 16px;
          }
        }

        @media (min-width: 1024px) {
          .earth-gallery-image {
            width: 360px;
            height: 200px;
          }
        }
      `}</style>

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

        {/* What We Do - Continuous Horizontal Gallery */}
        <div className="mb-12 sm:mb-16">
          <h3 className="mb-6 font-heading text-2xl font-bold text-[#012812] sm:text-3xl">
            What We Do
          </h3>

          <div className="earth-gallery-window">
            <div className="earth-gallery-track">

              {/* First image set */}
              <div className="earth-gallery-set">
                {galleryImages.map((image, index) => (
                  <div
                    key={`first-${index}`}
                    className="earth-gallery-image"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      loading="eager"
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 360px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Identical second set for seamless looping */}
              <div
                className="earth-gallery-set"
                aria-hidden="true"
              >
                {galleryImages.map((image, index) => (
                  <div
                    key={`second-${index}`}
                    className="earth-gallery-image"
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      unoptimized
                      loading="lazy"
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 360px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Centered introduction */}
        <div className="mx-auto max-w-3xl">
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
                  {/* Large EarthServe Logo Pendulum */}
                  {/* Large EarthServe Logo Pendulum */}
        <div className="mt-8 flex justify-center">
          <div className="earth-logo-pendulum-origin">
            <div className="earth-logo-pendulum">
              <Image
                src="/images/earthservelogo.png"
                alt="EarthServe Foundation International"
                width={240}
                height={240}
                priority
                className="h-48 w-48 object-contain sm:h-60 sm:w-60 lg:h-72 lg:w-72"
              />
            </div>
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
