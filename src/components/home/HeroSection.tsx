
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroActions from "./hero/HeroActions";

export default function HeroSection() {
  return (
    <section className="earth-section earth-grid earth-glow relative isolate overflow-hidden py-20 text-center sm:py-24 lg:py-28">
      <HeroBackground />

      <div className="earth-container relative z-10 mx-auto flex flex-col items-center px-5 sm:px-8">
        <HeroContent />
        <HeroActions />
      </div>
    </section>
  );
}
