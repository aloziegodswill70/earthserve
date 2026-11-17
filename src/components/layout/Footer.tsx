
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

      <div className="relative mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-10">

        {/* Website address and QR code */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col items-center gap-5">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl font-semibold text-white transition hover:text-[#83C923] sm:text-2xl md:text-3xl"
            >
              <Mail className="h-8 w-8 text-[#83C923]" />
              <span>theearthservefoundation.com</span>
            </a>

            {/* Social media icons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-lg text-xl font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110 ${social.background}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* QR code with hover website reveal */}
          <div className="group relative flex flex-col items-center">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the EarthServe Foundation website"
              className="relative block rounded-lg bg-white p-2 shadow-xl transition duration-300 group-hover:scale-105"
            >
              <img
                src={qrCodeUrl}
                alt="Scan to visit the EarthServe Foundation website"
                width={112}
                height={112}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />

              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-max -translate-x-1/2 translate-y-2 rounded-lg border border-white/15 bg-black px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                theearthservefoundation.com
              </span>
            </a>

            <p className="mt-3 text-xs text-earth-100/65">
              Scan to visit our website
            </p>
          </div>
        </div>

        {/* EarthServe brand identity */}
        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-stretch overflow-hidden border-y-[3px] border-black/80 bg-white shadow-lg sm:flex-row">

          {/* Black square with original logo */}
          <Link
            href="/"
            aria-label="EarthServe Foundation home"
            className="flex aspect-square w-full shrink-0 items-center justify-center bg-black p-5 transition hover:bg-[#101010] sm:aspect-auto sm:w-52 md:w-64"
          >
            <div className="relative h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44">
              <Image
                src="/images/earthservelogo.png"
                alt="EarthServe Foundation logo"
                fill
                sizes="(min-width: 768px) 176px, 144px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* White brand lettering section */}
          <div className="flex min-h-44 flex-1 flex-col items-center justify-center px-4 py-7 sm:min-h-52 sm:px-6 md:py-9">
            <span
              className="text-5xl font-black leading-none tracking-tight text-[#83C923] sm:text-6xl md:text-7xl"
              style={{
                WebkitTextStroke: "2px #080808",
                paintOrder: "stroke fill",
                textShadow: "3px 4px 0px #080808",
              }}
            >
              EarthServe
            </span>

            <span className="mt-3 text-center text-xl font-black uppercase tracking-tight text-[#171717] sm:text-2xl md:text-3xl">
              Foundation International
            </span>
          </div>
        </div>

        {/* Official clickable focus statements */}
        <div className="mx-auto mt-7 flex max-w-5xl flex-col items-center gap-2 text-lg font-medium leading-relaxed sm:text-xl md:text-2xl">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {focusStatements.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white transition hover:text-[#83C923] hover:underline"
              >
                <span className="mr-2 text-[#00964B]">●</span>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {focusStatements.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white transition hover:text-[#83C923] hover:underline"
              >
                <span className="mr-2 text-[#00964B]">●</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Official slogan */}
        <div className="mx-auto mt-12 max-w-5xl px-2">
          <p
            className={`${greatVibes.className} text-5xl leading-tight text-white sm:text-6xl md:text-7xl`}
          >
            Empowering the Next Generation
          </p>

          <p
            className={`${greatVibes.className} mt-1 text-5xl leading-tight text-white sm:text-6xl md:text-7xl`}
          >
            for a Sustainable Future
          </p>
        </div>

        {/* Footer navigation */}
        <div className="mt-16 grid gap-10 border-t border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Quick links */}
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-lg font-bold text-white">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-earth-100/75 transition hover:text-[#83C923]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clickable focus areas */}
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-lg font-bold text-white">
              Our Focus Areas
            </h2>

            <ul className="mt-5 space-y-3">
              {initiatives.map((initiative) => (
                <li key={initiative.href}>
                  <Link
                    href={initiative.href}
                    className="text-sm text-earth-100/75 transition hover:text-[#83C923]"
                  >
                    {initiative.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-lg font-bold text-white">
              Get in Touch
            </h2>

            <div className="mt-5 space-y-4 text-sm text-earth-100/75">
              <a
                href="mailto:info@earthservefoundation.org"
                className="flex flex-col items-center gap-2 transition hover:text-[#83C923]"
              >
                <Mail size={19} className="text-[#83C923]" />
                <span>info@earthservefoundation.org</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="flex flex-col items-center gap-2 transition hover:text-[#83C923]"
              >
                <Phone size={19} className="text-[#83C923]" />
                <span>Contact our team</span>
              </a>

              <div className="flex flex-col items-center gap-2">
                <MapPin size={19} className="text-[#83C923]" />
                <span>
                  Working together for sustainable communities.
                </span>
              </div>
            </div>
          </div>

          {/* Join our mission */}
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-lg font-bold text-white">
              Be Part of the Change
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-earth-100/75">
              Join us in creating a cleaner environment and a sustainable
              future for the next generation.
            </p>

            <Link
              href="/get-involved"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[#83C923] transition hover:text-white"
            >
              Join our mission <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/10 pt-7 text-center text-xs text-earth-100/60">
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
