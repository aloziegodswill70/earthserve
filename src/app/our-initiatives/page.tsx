
import type { Metadata } from "next";
import {
  Recycle,
  Sprout,
  GraduationCap,
  TreePine,
  Users,
  Droplets,
} from "lucide-react";
import Link from "next/link";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCard from "@/components/shared/FeatureCard";

export const metadata: Metadata = {
  title: "Our Initiatives | EarthServe Foundation International",
  description:
    "Discover EarthServe's focus areas in recycling, environmental education, community action, conservation, and sustainable development.",
};

const initiatives = [
  {
    icon: Recycle,
    title: "Recycling and Waste Reduction",
    description:
      "Encouraging responsible waste separation, recycling awareness, resource recovery, and practical ways to reduce waste.",
  },
  {
    icon: Sprout,
    title: "Greener Communities",
    description:
      "Promoting community participation in activities that support cleaner surroundings and greater environmental responsibility.",
  },
  {
    icon: GraduationCap,
    title: "Environmental Education",
    description:
      "Supporting learning and awareness activities that help people understand environmental challenges and possible solutions.",
  },
  {
    icon: TreePine,
    title: "Nature and Conservation",
    description:
      "Encouraging care for natural spaces, responsible resource use, and community awareness of the importance of healthy ecosystems.",
  },
  {
    icon: Users,
    title: "Youth and Community Empowerment",
    description:
      "Encouraging young people, volunteers, and community groups to participate in environmental action and sustainable development.",
  },
  {
    icon: Droplets,
    title: "Responsible Resource Use",
    description:
      "Promoting practical habits that help communities use resources responsibly and reduce avoidable environmental waste.",
  },
];

export default function OurInitiativesPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Our Initiatives"
        title="Practical Action."
        highlight="Sustainable Change."
        description="We promote environmental responsibility through community participation, education, recycling awareness, and initiatives that encourage a cleaner future."
        primaryLabel="Support Our Work"
        primaryHref="/donations"
        secondaryLabel="Volunteer With Us"
        secondaryHref="/get-involved"
      />

      <ContentSection
        light
        eyebrow="Our Focus Areas"
        title="Initiatives That Bring People Together"
        description="These are the key areas that guide our environmental work. Specific activities, locations, and campaign dates can be added as programmes are confirmed."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item) => (
            <FeatureCard key={item.title} {...item} light />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Take Part"
        title="Help Turn Ideas Into Action"
        description="Whether you are an individual, school, business, or community organisation, your participation can help advance environmental awareness and sustainable practices."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/get-involved"
            className="inline-flex w-full items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-earth-950 transition hover:bg-earth-100 sm:w-auto"
          >
            Become Involved
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:border-gold/60 sm:w-auto"
          >
            Discuss a Partnership
          </Link>
        </div>
      </ContentSection>
    </>
  );
}
