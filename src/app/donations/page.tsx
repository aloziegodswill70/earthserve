
import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Recycle,
  GraduationCap,
  Sprout,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCard from "@/components/shared/FeatureCard";

export const metadata: Metadata = {
  title: "Support Our Work | Donations | EarthServe Foundation International",
  description:
    "Learn how financial contributions and other forms of support can help EarthServe advance environmental awareness and sustainable community initiatives.",
};

const fundingAreas = [
  {
    icon: Recycle,
    title: "Recycling and Waste Reduction",
    description:
      "Support approved activities that encourage responsible waste handling, recycling awareness, and resource recovery.",
  },
  {
    icon: GraduationCap,
    title: "Environmental Education",
    description:
      "Help support awareness campaigns, educational materials, and community learning activities.",
  },
  {
    icon: Sprout,
    title: "Community Environmental Action",
    description:
      "Contribute towards approved community activities that promote cleaner surroundings and environmental responsibility.",
  },
];

export default function DonationsPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Support EarthServe"
        title="Give Today."
        highlight="Help Grow a Greener Tomorrow."
        description="Your support can help environmental initiatives reach more people, encourage sustainable habits, and strengthen community participation."
        primaryLabel="Discuss a Contribution"
        primaryHref="/contact"
        secondaryLabel="See Our Initiatives"
        secondaryHref="/our-initiatives"
      />

      <ContentSection
        light
        eyebrow="Your Support Matters"
        title="Help Make Environmental Action Possible"
        description="Financial contributions, donated materials, professional expertise, and partnerships can all help advance environmental work. Support should be directed through verified foundation channels."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fundingAreas.map((item) => (
            <FeatureCard key={item.title} {...item} light />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Ways to Contribute"
        title="Choose How You Would Like to Help"
        description="We welcome conversations about financial contributions, in-kind support, and partnerships that align with our mission."
      >
        <div className="grid gap-4 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-7">
            <Heart className="mx-auto text-gold" size={30} />
            <h3 className="mt-4 font-heading text-lg font-bold text-white">
              Financial Support
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Contact us for verified contribution instructions and any
              applicable donation terms.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-7">
            <Recycle className="mx-auto text-gold" size={30} />
            <h3 className="mt-4 font-heading text-lg font-bold text-white">
              Materials and Supplies
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Discuss suitable materials, equipment, or supplies that
              support approved environmental activities.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-7">
            <ShieldCheck className="mx-auto text-gold" size={30} />
            <h3 className="mt-4 font-heading text-lg font-bold text-white">
              Organisational Partnerships
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Explore transparent, mutually agreed partnerships with
              businesses and other organisations.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        light
        eyebrow="Contribute With Confidence"
        title="Questions About Supporting Us?"
        description="Contact our team to discuss available contribution methods, the intended use of funds, and how support can be aligned with our activities."
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#075B2A] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#012812]"
        >
          Contact EarthServe
          <ArrowRight size={17} />
        </Link>
      </ContentSection>
    </>
  );
}
