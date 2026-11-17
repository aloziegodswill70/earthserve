
import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Joseph Ebere Nwachukwu",
    role: "Chairman, Board of Trustees",
    description:
      "General Operational Manager and Managing Director, providing leadership, strategic direction, and operational oversight.",
    image: "/images/joey.jpg",
  },
  {
    name: "Mr. Teddy Ogbonna",
    role: "Board Member",
    description:
      "Former Vice Chair of the Human Rights Information Network (HRIN), Nigeria, with experience in human rights advocacy.",
    image: "/images/teddy.jpg",
  },
  {
    name: "Dr. Emeke Israel Chukwuemeka",
    role: "Board Member",
    description:
      "An expert in Nutrition and Toxicology, bringing specialist knowledge to the foundation's work.",
    image: "/images/emeke.jpg",
  },
  {
    name: "Dr. Godswill O. Alozie",
    role: "Board Member",
    description:
      "An Optometrist and Expert Software Developer, contributing professional expertise in eye care and technology.",
    image: "/images/dr godswill.jpg",
  },
];

export default function OperationalTeam() {
  return (
    <section className="earth-section relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#012812]/[0.03]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#D4D68A]/60 bg-[#D4D68A]/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#075B2A] sm:text-sm">
            Leadership & Governance
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-[#012812] sm:text-4xl lg:text-5xl">
            Our Operational Team & Board Members
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Meet the dedicated professionals whose leadership, knowledge, and
            experience help guide EarthServe Foundation International toward
            its mission of building a sustainable future.
          </p>
        </div>

        {/* Team grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-[#075B2A]/10 bg-white shadow-[0_10px_35px_rgba(1,40,18,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(1,40,18,0.14)]"
            >
              <div className="grid h-full grid-cols-1 sm:grid-cols-[42%_58%]">
                {/* Portrait */}
                <div className="relative min-h-[280px] overflow-hidden bg-[#EAF2EC] sm:min-h-[320px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#012812]/30 to-transparent" />
                </div>

                {/* Member information */}
                <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
                  <span className="mb-4 h-1 w-12 rounded-full bg-[#D4D68A]" />

                  <h3 className="text-xl font-extrabold leading-snug text-[#012812] sm:text-2xl">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm font-bold uppercase leading-relaxed tracking-wide text-[#075B2A]">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    {member.description}
                  </p>

                  <div className="mt-6 border-t border-[#075B2A]/10 pt-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B2A]/70">
                      EarthServe Foundation International
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
