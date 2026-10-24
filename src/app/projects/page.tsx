
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Earth,
  HandHeart,
  Leaf,
  Recycle,
  Sprout,
  Sun,
  Users,
} from "lucide-react";

const categories = [
  "All Projects",
  "Environment",
  "Community",
  "Education",
];
type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  imageAlt?: string;
  icon: typeof Recycle;
  color: string;
  iconColor: string;
  location: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Community Recycling Initiative",
    category: "Environment",
    description:
      "Encouraging responsible waste management, material recovery, and recycling practices that help keep our communities cleaner.",
    image: "/images/earthserve1.jpg",
    imageAlt: "Environmental community activity",
    icon: Recycle,
    color: "bg-[#DDEBCF]",
    iconColor: "text-[#286337]",
    location: "Community-based",
  },
  {
    id: 2,
    title: "Green Community Development",
    category: "Community",
    description:
      "Promoting greener neighbourhoods through environmental awareness, tree planting, and community participation.",
    image: "/images/earthserve3.jpg",
    imageAlt: "Community members participating in an environmental activity",
    icon: Sprout,
    color: "bg-[#E7EBC8]",
    iconColor: "text-[#426B2C]",
    location: "Community-based",
  },
  {
    id: 3,
    title: "Environmental Education",
    category: "Education",
    description:
      "Supporting environmental learning that helps children, young people, and adults understand how everyday choices affect our planet.",
    icon: BookOpen,
    color: "bg-[#E4EEDC]",
    iconColor: "text-[#285C38]",
    location: "Schools and communities",
  },
  {
    id: 4,
    title: "Sustainable Agriculture",
    category: "Environment",
    description:
      "Encouraging responsible agricultural practices, soil conservation, and sustainable approaches to food production.",
    icon: Sprout,
    color: "bg-[#E8E7C9]",
    iconColor: "text-[#6B702E]",
    location: "Rural communities",
  },
  {
    id: 5,
    title: "Youth and Women Empowerment",
    category: "Community",
    description:
      "Promoting participation, practical learning, and opportunities for young people and women to contribute to sustainable development.",
    icon: Users,
    color: "bg-[#DDEBE6]",
    iconColor: "text-[#216A54]",
    location: "Community-based",
  },
  {
    id: 6,
    title: "Renewable Energy Awareness",
    category: "Education",
    description:
      "Raising awareness about renewable energy and practical ways to support a more resource-efficient future.",
    icon: Sun,
    color: "bg-[#F0E9CE]",
    iconColor: "text-[#8A6B21]",
    location: "Awareness and learning",
  },
];

const focusAreas = [
  {
    icon: Recycle,
    title: "Waste Reduction",
    description:
      "Encouraging reuse, recycling, and more responsible waste practices.",
  },
  {
    icon: Earth,
    title: "Environmental Protection",
    description:
      "Promoting care for natural resources and healthier surroundings.",
  },
  {
    icon: HandHeart,
    title: "Community Empowerment",
    description:
      "Supporting people to take part in sustainable local development.",
  },
  {
    icon: Droplets,
    title: "Resource Conservation",
    description:
      "Building awareness of responsible water and resource use.",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="overflow-hidden bg-[#F6F8EE]">
      {/* HERO */}
      <section className="earth-section earth-grid relative isolate overflow-hidden">
        <div className="earth-glow pointer-events-none absolute inset-0 -z-10" />

        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#D4D68A]/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4D68A] sm:text-sm">
            <Leaf size={15} />
            Our Projects
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            Turning Environmental
            <span className="block text-[#D4D68A]">
              Vision into Action
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
            Discover the areas of work through which EarthServe Foundation
            International promotes environmental sustainability, community
            participation, and a greener future for generations to come.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#project-list"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4D68A] px-7 py-3.5 text-sm font-bold text-[#012812] transition hover:bg-white sm:w-auto"
            >
              Explore Our Projects
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/get-involved"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Get Involved
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3 border-t border-white/15 pt-7 sm:mt-16 sm:gap-8 sm:pt-9">
            <div>
              <Leaf className="mx-auto text-[#D4D68A]" size={22} />
              <p className="mt-3 text-xs font-semibold text-white sm:text-sm">
                Environmental Care
              </p>
            </div>
            <div>
              <Users className="mx-auto text-[#D4D68A]" size={22} />
              <p className="mt-3 text-xs font-semibold text-white sm:text-sm">
                Community Action
              </p>
            </div>
            <div>
              <Sprout className="mx-auto text-[#D4D68A]" size={22} />
              <p className="mt-3 text-xs font-semibold text-white sm:text-sm">
                Sustainable Future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#477B35] sm:text-sm">
              Creating Lasting Change
            </span>

            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-[#123B23] sm:text-4xl lg:text-5xl">
              Meaningful action for a healthier planet
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We believe that a cleaner, greener future begins when
              individuals and communities have the knowledge, resources,
              and opportunities to make a difference.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Our project areas focus on environmental responsibility,
              resource conservation, education, and inclusive community
              development. Each is an opportunity to turn shared
              environmental concerns into practical action.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#286337] transition hover:text-[#477B35]"
            >
              Learn About EarthServe
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#D4D68A] sm:-left-5 sm:-top-5" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#DDEBCF] shadow-xl">
              <Image
                src="/images/earthserve1.jpg"
                alt="EarthServe environmental and community work"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/55 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="max-w-sm font-heading text-xl font-bold text-white sm:text-2xl">
                  Small actions. Shared responsibility. Lasting impact.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-[#E5E9D9] bg-white p-4 shadow-lg sm:-right-5 sm:p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E4EEDC] text-[#286337]">
                <Leaf size={23} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#123B23]">
                  People and Planet
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  At the heart of our work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section
        id="project-list"
        className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#477B35] sm:text-sm">
              Explore Our Work
            </span>

            <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#123B23] sm:text-4xl lg:text-5xl">
              Projects for a greener tomorrow
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Explore our key project areas and the environmental and
              community challenges they aim to address.
            </p>
          </div>

          {/* Interactive filters */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2.5 text-xs font-bold transition sm:px-5 sm:text-sm ${
                    isActive
                      ? "bg-[#075B2A] text-white shadow-md"
                      : "border border-[#E1E7D9] bg-[#F6F8EE] text-[#34523A] hover:border-[#477B35] hover:bg-[#EAF0E2]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E7EBDD] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${project.color}`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-current/10" />
                        <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full border border-current/10" />
                        <div
                          className={`relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/80 shadow-sm ${project.iconColor}`}
                        >
                          <Icon size={43} strokeWidth={1.5} />
                        </div>
                      </>
                    )}

                    <div className="absolute left-4 top-4">
                      <span className="inline-flex rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#245332] shadow-sm sm:text-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Leaf size={14} className="text-[#477B35]" />
                      {project.location}
                    </div>

                    <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-[#123B23] transition group-hover:text-[#477B35]">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                      {project.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 border-t border-[#EDF0E8] pt-4 text-sm font-bold text-[#286337] transition hover:text-[#477B35]"
                    >
                      Enquire About This Project
                      <ChevronRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              No projects found in this category.
            </p>
          )}

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-gray-500">
            These cards describe EarthServe&apos;s project areas and
            intended activities. Specific project locations, timelines,
            and delivery status can be added as they are confirmed.
          </p>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#477B35] sm:text-sm">
              Our Approach
            </span>

            <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#123B23] sm:text-4xl">
              What guides our projects
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              We aim to make sustainability understandable, practical,
              and inclusive.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E3E9DA] bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4EEDC] text-[#286337]">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-[#123B23]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT CTA */}
      <section className="earth-section earth-grid relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="earth-glow pointer-events-none absolute inset-0 -z-10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4D68A]/25 bg-white/5 text-[#D4D68A]">
            <HandHeart size={32} />
          </div>

          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Be part of the change
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            A healthier planet starts with people who care. Join EarthServe
            in promoting environmental responsibility, empowering
            communities, and building a more sustainable future.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4D68A] px-7 py-3.5 text-sm font-bold text-[#012812] transition hover:bg-white"
            >
              Become a Volunteer
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/donations"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Support Our Mission
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60 sm:text-sm">
            <CheckCircle2 size={16} className="text-[#D4D68A]" />
            Every contribution can help move our mission forward.
          </div>
        </div>
      </section>
    </main>
  );
}
