
import type { Metadata } from "next";
import InnerPageHero from "@/components/shared/InnerPageHero";

export const metadata: Metadata = {
  title: "Terms and Conditions | EarthServe Foundation International",
  description:
    "Read the website terms and conditions for EarthServe Foundation International, including acceptable use, intellectual property, and disclaimers.",
};

const termsSections = [
  {
    title: "1. Acceptance of These Terms",
    paragraphs: [
      "These terms govern your use of the EarthServe Foundation International website. By accessing or using the website, you agree to comply with these terms and applicable laws.",
      "If you do not agree with these terms, please discontinue use of the website.",
    ],
  },
  {
    title: "2. Purpose of the Website",
    paragraphs: [
      "The website provides information about the foundation, its environmental mission, initiatives, opportunities for participation, and ways to contact or support its work.",
      "Information about activities, programmes, and future plans may change. Specific projects, dates, outcomes, or opportunities should be confirmed with the foundation.",
    ],
  },
  {
    title: "3. Acceptable Use",
    paragraphs: [
      "You agree not to use the website for unlawful activities, to submit misleading or harmful material, to attempt unauthorised access to systems, or to interfere with the website's security or operation.",
      "You must not use website forms or contact channels to distribute spam, malicious content, or material that infringes the rights of others.",
    ],
  },
  {
    title: "4. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, website text, graphics, branding, photographs, and other materials may be owned by or used with permission by the foundation or their respective rights holders.",
      "You may not reproduce, redistribute, or commercially exploit protected materials without appropriate permission, except where permitted by law.",
    ],
  },
  {
    title: "5. Donations and Contributions",
    paragraphs: [
      "Information on the website about supporting the foundation is provided for general guidance. Before making a contribution, confirm the recipient, payment instructions, intended purpose, and any applicable conditions through official channels.",
      "No payment should be made using unverified account details or links. Any donation-specific terms, receipts, refund arrangements, or restrictions should be confirmed and published separately where applicable.",
    ],
  },
  {
    title: "6. Volunteering and Partnerships",
    paragraphs: [
      "Submitting an enquiry or expressing interest in volunteering or partnering does not automatically establish a formal relationship with the foundation. Participation may be subject to confirmation, programme requirements, and any applicable agreements or safeguards.",
    ],
  },
  {
    title: "7. External Links",
    paragraphs: [
      "The website may link to third-party websites or resources for convenience. Such links do not necessarily represent an endorsement, and the foundation does not control the content or policies of external services.",
    ],
  },
  {
    title: "8. Disclaimer",
    paragraphs: [
      "Website content is provided for general informational purposes. While reasonable efforts may be made to keep information accurate and current, the foundation does not guarantee that every item of content will always be complete, current, or error-free.",
      "Nothing on this website should be interpreted as a guarantee of a particular environmental, financial, or other outcome.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, the foundation will not be responsible for losses arising from reliance on website information, temporary website unavailability, or third-party websites and services.",
      "Nothing in these terms excludes or limits liability where such exclusion or limitation would be unlawful.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    paragraphs: [
      "These terms may be updated to reflect changes in our website, activities, or legal obligations. Updated terms will be published on this page.",
    ],
  },
  {
    title: "11. Governing Law",
    paragraphs: [
      "The governing law and dispute-resolution provisions should be completed to reflect the foundation's legal status, jurisdiction, and applicable requirements before these terms are published as final.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Website Terms"
        title="Clear Terms."
        highlight="Responsible Engagement."
        description="These terms explain the general conditions for using the EarthServe Foundation International website and engaging with the information presented here."
      />

      <section className="bg-[#F6F8EE] px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm leading-7 text-[#365342]">
            <strong>Important:</strong> This is a starter template, not
            final legal advice. Have the terms reviewed and complete the
            governing-law and other organisation-specific details before
            publication.
          </p>

          <div className="mt-8 space-y-5 sm:mt-12 sm:space-y-7">
            {termsSections.map((section) => (
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
        </div>
      </section>
    </>
  );
}
