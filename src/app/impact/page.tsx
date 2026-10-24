
import type { Metadata } from "next";
import {
  Recycle,
  Users,
  Earth,
  TreePine,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCard from "@/components/shared/FeatureCard";

export const metadata: Metadata = {
  title: "Our Impact | EarthServe Foundation International",
  description:
    "Explore EarthServe Foundation International's environmental action, recycling, community participation, and sustainability goals.",
};

const impactAreas = [
  {
    icon: Recycle,
    title: "Waste Reduction",
    description:
      "Encouraging responsible waste management, recycling, and practical ways to reduce the amount of waste entering our environment.",
  },
  {
    icon: Users,
    title: "Community Participation",
    description:
      "Bringing individuals and communities together to take ownership of cleaner, healthier surroundings.",
  },
  {
    icon: TreePine,
    title: "Environmental Protection",
    description:
      "Promoting environmental awareness and responsible actions that support a healthier planet.",
  },
  {
    icon: GraduationCap,
    title: "Environmental Education",
    description:
      "Helping people understand environmental challenges and the everyday actions that can make a difference.",
  },
  {
    icon: HeartHandshake,
    title: "Community Empowerment",
    description:
      "Creating opportunities for young people, women, volunteers, and local groups to contribute to sustainable development.",
  },
  {
    icon: Earth,
    title: "A Shared Responsibility",
    description:
      "Building a culture in which environmental protection becomes a shared responsibility across communities.",
  },
];

const stats = [
  { value: "100+", label: "Volunteers" },
  { value: "5,000 kg", label: "Materials Recycled" },
  { value: "1", label: "Shared Mission" },
];

export default function ImpactPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Our Impact"
        title="Small Actions."
        highlight="Lasting Environmental Change."
        description="We believe meaningful environmental progress begins when people come together, take practical action, and build sustainable habits that benefit their communities."
        primaryLabel="Get Involved"
        primaryHref="/get-involved"
        secondaryLabel="Explore Our Initiatives"
        secondaryHref="/our-initiatives"
      />

      <ContentSection
        eyebrow="Our Progress"
        title="Working Towards a Greener Future"
        description="Our focus is on practical environmental action, community involvement, and sustainable change. The figures below should be updated as the foundation verifies and records its results."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-8 sm:rounded-3xl sm:py-10"
            >
              <p className="font-heading text-3xl font-bold text-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-white/75 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        light
        eyebrow="Where Change Happens"
        title="The Impact We Want to Create"
        description="We focus on areas where collective action and environmental awareness can support healthier communities and a more sustainable future."
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {impactAreas.map((item) => (
            <FeatureCard key={item.title} {...item} light />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Be Part of the Change"
        title="Our Next Chapter Starts With You"
        description="Volunteer your time, share your expertise, or work with us to bring environmental action to more communities."
      >
        <a
          href="/get-involved"
          className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-earth-950 transition hover:bg-earth-100"
        >
          Join EarthServe
        </a>
      </ContentSection>
    </>
  );
}
