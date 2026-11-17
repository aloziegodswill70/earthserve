

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroContent() {
  return (
    <>
      <span className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-[#012812]/60 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm sm:text-sm">
        EarthServe Foundation International
      </span>

      <h1 className="earth-italic-heading mx-auto mt-7 max-w-4xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
        Building a Cleaner Earth.
      </h1>

      <div className="mt-3">
        <p
          className={`${greatVibes.className} text-5xl leading-tight text-white sm:text-6xl md:text-7xl`}
        >
          Empowering the Next Generation
        </p>

        <p
          className={`${greatVibes.className} mt-1 text-5xl leading-tight text-white sm:text-6xl md:text-7xl`}
        >
          for a Sustainable Future
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-white sm:text-base sm:leading-8">
        Advancing material recycling,
        renewable energy, innovation, and opportunities for
        youth and women.
      </p>
    </>
  );
}
