
export default function HeroContent() {
  return (
    <>
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
    </>
  );
}
