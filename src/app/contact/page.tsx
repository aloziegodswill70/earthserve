
import type { Metadata } from "next";
import { Mail, Handshake, MessageCircle } from "lucide-react";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCard from "@/components/shared/FeatureCard";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | EarthServe Foundation International",
  description:
    "Contact EarthServe Foundation International about volunteering, partnerships, environmental programmes, and other enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Contact Us"
        title="Let's Start"
        highlight="a Conversation."
        description="Have a question, partnership idea, or interest in our environmental work? We welcome enquiries from individuals, communities, businesses, and organisations."
      />

      <ContentSection
        light
        eyebrow="Get in Touch"
        title="How Can We Help You?"
        description="Choose the type of enquiry that best describes your interest, or send us a message using the form below."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={Mail}
            title="General Enquiries"
            description="Questions about EarthServe, our mission, or our environmental activities."
            light
          />
          <FeatureCard
            icon={Handshake}
            title="Partnerships"
            description="Discuss collaboration with your organisation, school, business, or community."
            light
          />
          <FeatureCard
            icon={MessageCircle}
            title="Volunteering"
            description="Ask about volunteering, community participation, and ways to contribute."
            light
          />
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Send a Message"
        title="We Would Love to Hear From You"
        description="Complete the form with your details and enquiry."
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#075B2A]/10 bg-[#F6F8EE] p-5 text-left shadow-xl sm:rounded-3xl sm:p-9">
          <ContactForm />
        </div>
      </ContentSection>
    </>
  );
}
