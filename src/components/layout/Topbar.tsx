
import { Mail, Rss } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:info@earthservefoundation.org",
    color: "bg-white text-[#D93025]",
    icon: <Mail size={19} />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    color: "bg-[#1877F2] text-white",
    icon: <span className="text-2xl font-bold">f</span>,
  },
  {
    name: "X",
    href: "https://x.com/",
    color: "bg-black text-white",
    icon: <span className="text-xl font-bold">𝕏</span>,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    color: "bg-[#0A66C2] text-white",
    icon: <span className="text-lg font-extrabold">in</span>,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/",
    color: "bg-[#BD081C] text-white",
    icon: <span className="font-serif text-2xl font-bold">P</span>,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    color: "bg-[#E62117] text-white",
    icon: <span className="text-lg">▶</span>,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    color:
      "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "RSS",
    href: "/feed.xml",
    color: "bg-[#F26522] text-white",
    icon: <Rss size={19} />,
  },
];

export default function Topbar() {
  return (
    <div className="relative z-50 bg-earth-950 px-4 py-2.5">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={
                social.name === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={social.name}
              title={social.name}
              className={`flex h-8 w-8 items-center justify-center rounded-md shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-110 sm:h-9 sm:w-9 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
