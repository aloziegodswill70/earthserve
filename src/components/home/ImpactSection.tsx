
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Recycle,
  Users,
  Sprout,
  HeartHandshake,
  Earth,
} from "lucide-react";

const totalVolunteers = 100;
const totalMaterialRecycled = 5000;

const impactStats = [
  {
    label: "Total Volunteers",
    value: totalVolunteers,
    suffix: "+",
    icon: Users,
    description: "People working together for a greener future.",
  },
  {
    label: "Material Recycled",
    value: totalMaterialRecycled,
    suffix: " kg",
    icon: Recycle,
    description: "Materials recovered and diverted from waste.",
  },
  {
    label: "Our Shared Mission",
    value: 1,
    suffix: "",
    icon: Earth,
    description: "One planet. One shared responsibility.",
  },
];

const impactCards = [
  {
    image: "/images/earthserve1.jpg",
    alt: "EarthServe environmental sustainability activities",
    label: "Environmental Action",
    title: "Turning Waste Into Opportunity",
    description:
      "Promoting responsible waste management, material recycling, and practical solutions that help build cleaner communities.",
    icon: Recycle,
    imagePosition: "object-center",
  },
  {
    image: "/images/earthserve5.jpg",
    alt: "EarthServe community participation and environmental initiatives",
    label: "Community Empowerment",
    title: "People Creating Lasting Change",
    description:
      "Inspiring young people, women, and local communities to take part in environmental protection and sustainable development.",
    icon: HeartHandshake,
    // Adjust the crop to reveal more of the person's head.
    imagePosition: "object-[center_20%]",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime: number | undefined;
    let animationFrame = 0;
    let cancelled = false;

    const duration = 1800;

    const animate = (timestamp: number) => {
      if (cancelled) return;

      if (startTime === undefined) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    setCount(0);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, [value, active]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-impact"
      className="earth-section earth-grid earth-glow relative isolate overflow-hidden py-12 sm:py-20 lg:py-28"
    >
      {/* Ambient background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-64 w-64 rounded-full bg-[#477B35]/20 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#D4D68A]/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="earth-container relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gold sm:px-5 sm:py-2 sm:text-sm sm:tracking-[0.18em]">
            <Leaf size={14} className="sm:h-4 sm:w-4" />
            Our Impact
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-5xl lg:max-w-4xl lg:text-6xl">
            Small Actions.
            <span className="mt-1 block text-gold sm:mt-2">
              Lasting Environmental Change.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
            Every volunteer, every recycled material, and every community
            initiative brings us closer to a cleaner Earth and a more
            sustainable future for generations to come.
          </p>
        </div>

        {/* Responsive impact statistics */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:mt-16">
          {impactStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className={`group relative flex min-w-0 flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] px-3 py-5 text-center backdrop-blur-sm transition duration-300 hover:border-gold/40 hover:bg-white/[0.075] sm:rounded-2xl sm:p-7 ${
                  stat.label === "Our Shared Mission"
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold transition duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon size={19} className="sm:h-6 sm:w-6" />
                </div>

                <p className="mt-3 max-w-full break-words font-heading text-2xl font-bold leading-tight tabular-nums text-white sm:mt-5 sm:text-4xl lg:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    active={isVisible}
                  />
                </p>

                <h3 className="mt-2 text-xs font-bold leading-5 text-gold sm:mt-3 sm:text-base">
                  {stat.label}
                </h3>

                <p className="mx-auto mt-1.5 max-w-xs text-[11px] leading-5 text-white/60 sm:mt-2 sm:text-sm sm:leading-6">
                  {stat.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Image-led impact stories */}
        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {impactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#F6F8EE] shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[1.75rem]"
              >
                {/* Responsive image */}
                <div className="relative aspect-[5/3] overflow-hidden bg-[#075B2A] sm:aspect-[16/9] lg:aspect-[16/10]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
                    className={`object-cover ${card.imagePosition} transition duration-700 motion-safe:group-hover:scale-[1.03]`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/80 via-[#012812]/10 to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex justify-center sm:bottom-5 sm:left-5 sm:right-5">
                    <span className="inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-white/25 bg-[#012812]/75 px-3 py-1.5 text-center text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-white backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em]">
                      <Icon
                        size={14}
                        className="shrink-0 text-gold sm:h-4 sm:w-4"
                      />
                      {card.label}
                    </span>
                  </div>
                </div>

                {/* Compact, centered card content */}
                <div className="flex flex-col items-center px-4 py-6 text-center sm:px-8 sm:py-9">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#075B2A]/10 text-[#075B2A] sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon size={20} className="sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="mt-4 max-w-xl font-heading text-xl font-bold leading-snug text-[#012812] sm:mt-5 sm:text-3xl">
                    {card.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-lg text-xs leading-6 text-[#365342] sm:mt-4 sm:text-base sm:leading-8">
                    {card.description}
                  </p>

                  <div className="mt-5 h-1 w-12 rounded-full bg-[#D4D68A] transition-all duration-300 group-hover:w-20 sm:mt-6 sm:w-16 sm:group-hover:w-24" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing call to action */}
        <div className="mt-8 rounded-2xl border border-gold/25 bg-gradient-to-br from-[#075B2A] via-[#064A24] to-[#012812] px-4 py-7 text-center sm:mt-14 sm:rounded-[1.75rem] sm:px-10 sm:py-12">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold sm:h-14 sm:w-14 sm:rounded-2xl">
            <Sprout size={23} className="sm:h-7 sm:w-7" />
          </div>

          <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:mt-5 sm:text-4xl">
            Be Part of Our Impact
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-white/75 sm:mt-4 sm:text-base sm:leading-8">
            Your time, ideas, and commitment can help create cleaner
            communities and a healthier planet. Together, we can make a
            difference that lasts.
          </p>

          <Link
            href="/get-involved"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-bold text-earth-950 transition duration-300 hover:bg-earth-100 sm:mt-7 sm:w-auto sm:px-7 sm:py-4 sm:text-sm"
          >
            Join Our Mission
            <ArrowRight size={16} className="sm:h-[18px] sm:w-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
