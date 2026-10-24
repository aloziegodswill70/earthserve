
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  light?: boolean;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  light = false,
}: FeatureCardProps) {
  return (
    <article
      className={`group flex h-full flex-col items-center rounded-2xl border p-5 text-center transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-8 ${
        light
          ? "border-[#075B2A]/10 bg-white shadow-sm hover:border-[#477B35]/40 hover:shadow-xl"
          : "border-white/10 bg-white/[0.045] backdrop-blur-sm hover:border-gold/40 hover:bg-white/[0.075]"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14 ${
          light
            ? "bg-[#075B2A]/10 text-[#075B2A]"
            : "border border-gold/20 bg-gold/10 text-gold"
        }`}
      >
        <Icon size={24} />
      </div>

      <h3
        className={`mt-5 font-heading text-lg font-bold leading-snug sm:text-xl ${
          light ? "text-[#012812]" : "text-white"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-3 text-sm leading-7 ${
          light ? "text-[#365342]" : "text-white/65"
        }`}
      >
        {description}
      </p>
    </article>
  );
}
