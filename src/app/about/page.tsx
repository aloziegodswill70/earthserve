
import type { Metadata } from "next";
import Image from "next/image";
import {
  Compass,
  Eye,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCard from "@/components/shared/FeatureCard";

export const metadata: Metadata = {
  title: "About Us | EarthServe Foundation International",
  description:
    "Learn about EarthServe Foundation International, its environmental mission, vision, values, and commitment to sustainable communities.",
};

const values = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "Encouraging practical choices that support a healthier environment and a more sustainable future.",
  },
  {
    icon: HeartHandshake,
    title: "Community Collaboration",
    description:
      "Working alongside communities, volunteers, and partners to create meaningful environmental change.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity and Accountability",
    description:
      "Promoting responsible stewardship, honest communication, and accountability in our work.",
  },
  {
    icon: Users,
    title: "Inclusive Empowerment",
    description:
      "Encouraging people of different backgrounds to participate in environmental action and community development.",
  },
];

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="About EarthServe"
        title="A Healthier Planet."
        highlight="Stronger Communities."
        description="EarthServe Foundation International is committed to encouraging environmental responsibility, sustainable practices, and community participation for a cleaner and healthier world."
        primaryLabel="Explore Our Initiatives"
        primaryHref="/our-initiatives"
        secondaryLabel="Get Involved"
        secondaryHref="/get-involved"
      />

      <ContentSection
        light
        eyebrow="Who We Are"
        title="Environmental Action Starts With People"
        description="We believe that lasting environmental progress requires awareness, practical action, and collaboration. Our approach is to encourage people and communities to take part in solutions that protect the environment and support sustainable development."
      >
        <div className="grid items-center gap-8 text-left lg:grid-cols-2 lg:gap-12">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl bg-[#075B2A] sm:rounded-3xl">
            <Image
              src="/images/earthserve1.jpg"
              alt="Environmental action and sustainability activities"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/45 to-transparent" />
          </div>

          <div className="text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#477B35]">
              Our Commitment
            </span>

            <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#012812] sm:text-3xl">
              Turning Environmental Awareness Into Action
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#365342] sm:text-base sm:leading-8">
              Environmental challenges affect the places where we live,
              learn, work, and raise our families. We want to help make
              environmental responsibility accessible through education,
              community participation, recycling awareness, and practical
              sustainability initiatives.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#365342] sm:text-base sm:leading-8">
              By working together, we can encourage better habits, support
              local action, and inspire future generations to care for the
              planet.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Our Purpose"
        title="Mission and Vision"
        description="Our purpose guides the way we approach environmental responsibility and community participation."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.045] p-6 sm:rounded-3xl sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <Compass size={27} />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-white sm:text-2xl">
              Our Mission
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              To promote environmental awareness, responsible resource use,
              community participation, and sustainable initiatives that
              contribute to cleaner surroundings and improved community
              wellbeing.
            </p>
          </article>

          <article className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.045] p-6 sm:rounded-3xl sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <Eye size={27} />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-white sm:text-2xl">
              Our Vision
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              A world where communities embrace environmental
              responsibility, protect natural resources, and work together
              towards a cleaner, healthier, and more sustainable future.
            </p>
          </article>
        </div>
      </ContentSection>

      <ContentSection
        light
        eyebrow="What Guides Us"
        title="Our Core Values"
        description="The principles that shape how we work, collaborate, and pursue our environmental goals."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <FeatureCard key={item.title} {...item} light />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Make a Difference"
        title="There Is a Place for You at EarthServe"
        description="Join people who care about the environment and want to contribute to practical, community-focused solutions."
      >
        <a
          href="/get-involved"
          className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-earth-950 transition hover:bg-earth-100"
        >
          Get Involved
        </a>
      </ContentSection>
    </>
  );
}
