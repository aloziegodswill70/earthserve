import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ImpactSection from "@/components/home/ImpactSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import MasterPlanSection from "@/components/home/MasterPlanSection";
import RecyclingSection from "@/components/home/RecyclingSection";
import DonationSection from "@/components/home/DonationSection";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* ABOUT EARTHSERVE */}
      <AboutSection />

      {/* OUR IMPACT */}
      <ImpactSection />

      {/* MISSION, VISION & CORE VALUES */}
      <MissionVisionSection />

      {/* EARTHSERVE MASTER PLAN */}
      <MasterPlanSection />

      {/* RECYCLING & WASTE MANAGEMENT */}
      <RecyclingSection />

      {/* DONATIONS */}
      <DonationSection />
    </>
  );
}