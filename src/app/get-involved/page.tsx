
import type { Metadata } from "next";
import {
  Users,
  Handshake,
  GraduationCap,
  Megaphone,
  Recycle,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCard from "@/components/shared/FeatureCard";

export const metadata: Metadata = {
  title: "Get Involved | EarthServe Foundation International",
  description:
    "Volunteer, collaborate, share your skills, or support environmental initiatives with EarthServe Foundation International.",
};

const opportunities = [
  {
    icon: Users,
    title: "Volunteer With Us",
    description:
      "Contribute your time to community activities, environmental campaigns, cleanups, and other approved initiatives.",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "Explore collaboration opportunities for businesses, schools, community groups, and other organisations.",
  },
  {
    icon: GraduationCap,
    title: "Support Environmental Education",
    description:
      "Help spread environmental awareness and encourage sustainable habits among students and community members.",
  },
  {
    icon: Megaphone,
    title: "Spread the Message",
    description:
      "Share our environmental campaigns, encourage responsible practices, and invite others to participate.",
  },
  {
    icon: Recycle,
    title: "Support Recycling Activities",
    description:
      "Help promote responsible waste separation, recycling awareness, and cleaner community spaces.",
  },
  {
    icon: HeartHandshake,
    title: "Contribute Your Skills",
    description:
      "Offer professional, creative, technical, organisational, or communication skills to support our work.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Get Involved"
        title="Be the Change."
        highlight="Help Our Planet Thrive."
        description="Your time, knowledge, ideas, and collaboration can help build cleaner communities and a culture of environmental responsibility."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="Explore Initiatives"
        secondaryHref="/our-initiatives"
      />

      <ContentSection
        light
        eyebrow="Find Your Place"
        title="There Are Many Ways to Make a Difference"
        description="Choose how you would like to contribute. We welcome people and organisations who share a commitment to environmental care and sustainable development."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item) => (
            <FeatureCard key={item.title} {...item} light />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Take the First Step"
        title="Let's Work Together"
        description="Tell us about your interests, your community, or the skills you would like to contribute. Our team can discuss suitable opportunities with you."
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/25 bg-gradient-to-br from-[#075B2A] via-[#064A24] to-[#012812] p-6 sm:rounded-3xl sm:p-10">
          <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
            Ready to Get Involved?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Contact EarthServe to express your interest in volunteering,
            partnerships, environmental campaigns, or other opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-earth-950 transition hover:bg-earth-100"
          >
            Contact EarthServe
          </Link>
        </div>
      </ContentSection>
    </>
  );
}
