
import type { ReactNode } from "react";

type ContentSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  light?: boolean;
  id?: string;
};

export default function ContentSection({
  eyebrow,
  title,
  description,
  children,
  light = false,
  id,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-14 text-center sm:px-8 sm:py-20 lg:py-24 ${
        light ? "bg-[#F6F8EE]" : "earth-section"
      }`}
    >
      <div className="earth-container relative z-10 mx-auto max-w-7xl">
        {eyebrow && (
          <p
            className={`text-xs font-bold uppercase tracking-[0.18em] ${
              light ? "text-[#477B35]" : "text-gold"
            }`}
          >
            {eyebrow}
          </p>
        )}

        <h2
          className={`mx-auto mt-3 max-w-4xl font-heading text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
            light ? "text-[#012812]" : "text-white"
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`mx-auto mt-4 max-w-3xl text-sm leading-7 sm:mt-5 sm:text-base sm:leading-8 ${
              light ? "text-[#365342]" : "text-white/70"
            }`}
          >
            {description}
          </p>
        )}

        <div className="mt-8 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
