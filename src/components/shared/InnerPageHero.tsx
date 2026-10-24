
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function InnerPageHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: InnerPageHeroProps) {
  return (
    <section className="earth-section earth-grid earth-glow relative isolate overflow-hidden px-4 py-16 text-center sm:px-8 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-64 w-64 rounded-full bg-[#477B35]/20 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#D4D68A]/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="earth-container relative z-10 mx-auto max-w-5xl">
        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.2em]">
          <Leaf size={15} />
          {eyebrow}
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl font-heading text-3xl font-bold leading-tight text-white sm:mt-8 sm:text-5xl lg:text-7xl">
          {title}
          {highlight && (
            <span className="mt-2 block text-gold">
              {highlight}
            </span>
          )}
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
          {description}
        </p>

        {(primaryLabel || secondaryLabel) && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
            {primaryLabel && primaryHref && (
              <Link
                href={primaryHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-earth-950 transition hover:bg-earth-100 sm:w-auto sm:px-8"
              >
                {primaryLabel}
                <ArrowRight size={17} />
              </Link>
            )}

            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-gold/60 hover:bg-white/10 sm:w-auto sm:px-8"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
