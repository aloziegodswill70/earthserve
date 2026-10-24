
import type { Metadata } from "next";
import InnerPageHero from "@/components/shared/InnerPageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | EarthServe Foundation International",
  description:
    "Read the EarthServe Foundation International privacy policy and learn how personal information is handled when using our website.",
};

const policySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "EarthServe Foundation International respects the privacy of people who visit our website or communicate with us. This policy explains how personal information may be collected, used, stored, and protected.",
      "This policy should be reviewed and adapted to reflect the foundation's actual operations, website technology, and applicable privacy laws.",
    ],
  },
  {
    title: "2. Information We May Collect",
    paragraphs: [
      "Depending on how you interact with our website, we may collect information you voluntarily provide, such as your name, email address, and the contents of a message or enquiry.",
      "Technical information, such as browser type, device information, and basic website usage data, may also be processed where analytics, hosting, security, or similar services are enabled.",
    ],
  },
  {
    title: "3. How Information May Be Used",
    paragraphs: [
      "Information may be used to respond to enquiries, coordinate volunteering or partnership discussions, communicate about activities you have asked about, maintain website security, and improve our services.",
      "We should only use personal information for appropriate purposes and in accordance with applicable law and any consent required.",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We do not intend to sell personal information. Information may be shared with authorised service providers who help operate the website or support our activities, where necessary and subject to appropriate safeguards.",
      "Information may also be disclosed where required by law or when necessary to protect legal rights, safety, or the security of our services.",
    ],
  },
  {
    title: "5. Cookies and Analytics",
    paragraphs: [
      "Our hosting provider or website tools may use cookies or similar technologies for essential functionality, security, preferences, or analytics. The technologies actually used should be documented before this policy is published.",
      "Where required, appropriate notice and consent controls should be provided for non-essential cookies or tracking technologies.",
    ],
  },
  {
    title: "6. Data Security and Retention",
    paragraphs: [
      "We take reasonable steps to protect information against unauthorised access, loss, misuse, or disclosure. However, no method of electronic transmission or storage can be guaranteed to be completely secure.",
      "Personal information should only be retained for as long as necessary for the purpose for which it was collected, subject to applicable legal and operational requirements.",
    ],
  },
  {
    title: "7. Your Privacy Rights",
    paragraphs: [
      "Depending on the laws that apply to you, you may have rights to request access to, correction of, deletion of, or restrictions on the processing of your personal information. You may also have rights concerning consent and certain forms of processing.",
      "Contact the foundation to raise a privacy request. Requests will be handled in accordance with applicable law and any identity verification requirements.",
    ],
  },
  {
    title: "8. External Websites",
    paragraphs: [
      "Our website may contain links to third-party websites or services. Those services have their own privacy practices, and we are not responsible for their policies or practices.",
    ],
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      "If our activities or website are intended to engage children, suitable safeguards should be established for the collection and use of their information, including any required parent or guardian involvement.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: [
      "This policy may be updated when our website, activities, or legal obligations change. The updated version should be published on this page with an appropriate revision date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Privacy and Data Protection"
        title="Your Privacy"
        highlight="Matters to Us."
        description="Learn how personal information may be handled when you visit our website, contact our team, or express interest in our environmental activities."
      />

      <section className="bg-[#F6F8EE] px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm leading-7 text-[#365342]">
            <strong>Important:</strong> This is a starter policy template.
            Review it against the foundation's actual data practices and
            applicable privacy laws before publication.
          </p>

          <div className="mt-8 space-y-5 sm:mt-12 sm:space-y-7">
            {policySections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-[#075B2A]/10 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8"
              >
                <h2 className="font-heading text-lg font-bold text-[#012812] sm:text-xl">
                  {section.title}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm leading-7 text-[#365342] sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-[#365342]/75">
            Privacy enquiries: Please use the Contact page to reach
            EarthServe Foundation International.
          </p>
        </div>
      </section>
    </>
  );
}
