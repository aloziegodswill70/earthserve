
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Initiatives", href: "/our-initiatives" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact" },
];

const initiatives = [
  { label: "Environmental Conservation", href: "/environmental-conservation" },
  { label: "Material Recycling", href: "/material-recycling" },
  { label: "Sustainable Agriculture", href: "/sustainable-agriculture" },
  { label: "Renewable Energy", href: "/renewable-energy" },
  { label: "Youth & Women Empowerment", href: "/youth-women-empowerment" },
];

const focusStatements = [
  { label: "Material Recycling", href: "/material-recycling" },
  { label: "Renewable Energy", href: "/renewable-energy" },
  { label: "Innovations", href: "/innovations" },
  { label: "Youth & Women Empowerment", href: "/youth-women-empowerment" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    label: "f",
    background: "bg-[#1877F2]",
  },
  {
    name: "X",
    href: "https://x.com/",
    label: "𝕏",
    background: "bg-black",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    label: "in",
    background: "bg-[#0A66C2]",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/",
    label: "P",
    background: "bg-[#BD081C]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    label: "▶",
    background: "bg-[#E62117]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    label: "◎",
    background:
      "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5]",
  },
  {
    name: "RSS",
    href: "/feed.xml",
    label: "◔",
    background: "bg-[#F26522]",
  },
];

const website = "https://theearthservefoundation.com";

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&color=000000&bgcolor=ffffff&data=${encodeURIComponent(
  website
)}`;

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-earth-950 pb-20 text-earth-100 md:pb-0">
      {/* Background grid and ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-50" />
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-earth-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-3 py-10 text-center sm:px-8 sm:py-16 lg:px-10">

        {/* Website address and QR code */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-16">
          <div className="flex min-w-0 flex-col items-center gap-4">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-white transition hover:text-[#83C923] sm:gap-3 sm:text-xl md:text-3xl"
            >
              <Mail className="h-5 w-5 shrink-0 text-[#83C923] sm:h-8 sm:w-8" />
              <span>theearthservefoundation.com</span>
            </a>

            {/* Social media icons */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110 sm:h-11 sm:w-11 sm:rounded-lg sm:text-xl ${social.background}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* QR code */}
          <div className="group relative flex shrink-0 flex-col items-center">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the EarthServe Foundation website"
              className="relative block rounded-lg bg-white p-1.5 shadow-xl transition duration-300 group-hover:scale-105 sm:p-2"
            >
              <img
                src={qrCodeUrl}
                alt="Scan to visit the EarthServe Foundation website"
                width={112}
                height={112}
                className="h-16 w-16 object-contain sm:h-28 sm:w-28"
              />

              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-max -translate-x-1/2 translate-y-2 rounded-lg border border-white/15 bg-black px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                theearthservefoundation.com
              </span>
            </a>

            <p className="mt-2 text-[9px] text-earth-100/65 sm:mt-3 sm:text-xs">
              Scan to visit our website
            </p>
          </div>
        </div>

        {/* EarthServe brand identity */}
        <div className="mx-auto mt-9 flex max-w-6xl flex-row items-stretch overflow-hidden border-y-[3px] border-black/80 bg-white shadow-lg sm:mt-14">

          {/* Black square with original logo */}
          <Link
            href="/"
            aria-label="EarthServe Foundation home"
            className="flex aspect-square w-[30%] max-w-52 shrink-0 items-center justify-center bg-black p-2 transition hover:bg-[#101010] sm:w-52 sm:p-5 md:w-64"
          >
            <div className="relative h-full w-full max-h-36 max-w-36 sm:max-h-40 sm:max-w-40 md:max-h-44 md:max-w-44">
              <Image
                src="/images/earthservelogo.png"
                alt="EarthServe Foundation logo"
                fill
                sizes="(min-width: 768px) 176px, 30vw"
                className="object-contain"
              />
            </div>
          </Link>

          {/* White brand lettering section */}
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-4 sm:min-h-52 sm:px-6 sm:py-9">
            <span
              className="text-3xl font-black leading-none tracking-tight text-[#83C923] sm:text-6xl md:text-7xl"
              style={{
                WebkitTextStroke: "1px #080808",
                paintOrder: "stroke fill",
                textShadow: "2px 3px 0px #080808",
              }}
            >
              EarthServe
            </span>

            <span className="mt-2 text-center text-[10px] font-black uppercase tracking-tight text-[#171717] sm:mt-3 sm:text-2xl md:text-3xl">
              Foundation International
            </span>
          </div>
        </div>

        {/* Official clickable focus statements */}
        <div className="mx-auto mt-5 flex max-w-5xl flex-col items-center gap-2 text-[10px] font-medium leading-relaxed sm:mt-7 sm:gap-3 sm:text-xl md:text-2xl">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5">
            {focusStatements.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white transition hover:text-[#83C923] hover:underline"
              >
                <span className="mr-1 text-[#00964B] sm:mr-2">●</span>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5">
            {focusStatements.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white transition hover:text-[#83C923] hover:underline"
              >
                <span className="mr-1 text-[#00964B] sm:mr-2">●</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Official slogan */}
        <div className="mx-auto mt-8 max-w-5xl px-1 sm:mt-12 sm:px-2">
          <p
            className={`${greatVibes.className} text-3xl leading-tight text-white sm:text-6xl md:text-7xl`}
          >
            Empowering the Next Generation
          </p>

          <p
            className={`${greatVibes.className} mt-1 text-3xl leading-tight text-white sm:text-6xl md:text-7xl`}
          >
            for a Sustainable Future
          </p>
        </div>

        {/* Footer navigation */}
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 border-t border-white/15 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 sm:pt-12 lg:grid-cols-4">

          {/* Quick links */}
          <div className="flex min-w-0 flex-col items-center">
            <h2 className="font-heading text-sm font-bold text-white sm:text-lg">
              Quick Links
            </h2>

            <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[10px] text-earth-100/75 transition hover:text-[#83C923] sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clickable focus areas */}
          <div className="flex min-w-0 flex-col items-center">
            <h2 className="font-heading text-sm font-bold text-white sm:text-lg">
              Our Focus Areas
            </h2>

            <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
              {initiatives.map((initiative) => (
                <li key={initiative.href}>
                  <Link
                    href={initiative.href}
                    className="text-[10px] text-earth-100/75 transition hover:text-[#83C923] sm:text-sm"
                  >
                    {initiative.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="flex min-w-0 flex-col items-center">
            <h2 className="font-heading text-sm font-bold text-white sm:text-lg">
              Get in Touch
            </h2>

            <div className="mt-3 space-y-3 text-[10px] text-earth-100/75 sm:mt-5 sm:space-y-4 sm:text-sm">
              <a
                href="mailto:info@earthservefoundation.org"
                className="flex flex-col items-center gap-1.5 transition hover:text-[#83C923] sm:gap-2"
              >
                <Mail size={16} className="text-[#83C923] sm:h-[19px] sm:w-[19px]" />
                <span className="break-all">info@earthservefoundation.org</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="flex flex-col items-center gap-1.5 transition hover:text-[#83C923] sm:gap-2"
              >
                <Phone size={16} className="text-[#83C923] sm:h-[19px] sm:w-[19px]" />
                <span>Contact our team</span>
              </a>

              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <MapPin size={16} className="text-[#83C923] sm:h-[19px] sm:w-[19px]" />
                <span>
                  Working together for sustainable communities.
                </span>
              </div>
            </div>
          </div>

          {/* Join our mission */}
          <div className="flex min-w-0 flex-col items-center">
            <h2 className="font-heading text-sm font-bold text-white sm:text-lg">
              Be Part of the Change
            </h2>

            <p className="mt-3 max-w-xs text-[10px] leading-5 text-earth-100/75 sm:mt-5 sm:text-sm sm:leading-7">
              Join us in creating a cleaner environment and a sustainable
              future for the next generation.
            </p>

            <Link
              href="/get-involved"
              className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#83C923] transition hover:text-white sm:mt-5 sm:gap-2 sm:text-sm"
            >
              Join our mission <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center text-[9px] text-earth-100/60 sm:mt-12 sm:gap-5 sm:pt-7 sm:text-xs">
          <p>
            © {new Date().getFullYear()} EarthServe Foundation International.
            All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#83C923]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#83C923]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
