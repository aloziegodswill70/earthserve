
import {
  ArrowRight,
  HandHeart,
  Leaf,
} from "lucide-react";
import Link from "next/link";

export default function HeroActions() {
  return (
    <>
      {/* Call-to-action buttons */}
      <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
        <Link
          href="/get-involved"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold text-earth-950 transition duration-300 hover:bg-earth-100 sm:w-auto"
        >
          Become a Volunteer
          <HandHeart size={18} />
        </Link>

        <Link
          href="/projects"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/50 bg-[#012812]/25 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-gold hover:text-gold sm:w-auto"
        >
          Explore Our Projects
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Key focus areas */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-sm text-white">
        <span className="inline-flex items-center justify-center gap-2">
          <Leaf size={17} className="text-gold" />
          Sustainability
        </span>

        <span className="inline-flex items-center justify-center gap-2">
          <HandHeart size={17} className="text-gold" />
          Empowerment
        </span>
      </div>
    </>
  );
}
