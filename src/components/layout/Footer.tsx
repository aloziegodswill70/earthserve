
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Leaf,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Initiatives", href: "/our-initiatives" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact" },
];

const initiatives = [
  "Environmental Conservation",
  "Material Recycling",
  "Sustainable Agriculture",
  "Renewable Energy",
  "Youth & Women Empowerment",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-earth-950 pb-20 text-earth-100 md:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-earth-grid bg-grid opacity-50" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-earth-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and introduction */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="EarthServe home"
            >
              <span className="relative block h-28 w-28 shrink-0 sm:h-36 sm:w-36">
                <Image
                  src="/images/earthservelogo.png"
                  alt="EarthServe Foundation International logo"
                  fill
                  priority
                  sizes="(min-width: 640px) 144px, 112px"
                  className="object-contain"
                />
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-earth-100/75">
              Building a cleaner earth and creating lasting impact through
              environmental sustainability, innovation, and community
              empowerment.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4V10H7v3h2.9v8h3.6Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r=".8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-heading text-lg font-bold text-white">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-earth-100/75 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus areas */}
          <div>
            <h2 className="font-heading text-lg font-bold text-white">
              Our Focus Areas
            </h2>
            <ul className="mt-5 space-y-3">
              {initiatives.map((initiative) => (
                <li
                  key={initiative}
                  className="flex items-start gap-2 text-sm text-earth-100/75"
                >
                  <Leaf
                    size={15}
                    className="mt-0.5 shrink-0 text-gold"
                  />
                  {initiative}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="font-heading text-lg font-bold text-white">
              Get in Touch
            </h2>

            <div className="mt-5 space-y-4 text-sm text-earth-100/75">
              <a
                href="mailto:info@earthservefoundation.org"
                className="flex items-start gap-3 transition hover:text-gold"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>info@earthservefoundation.org</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="flex items-start gap-3 transition hover:text-gold"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>Contact our team</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>Working together for sustainable communities.</span>
              </div>
            </div>

            <Link
              href="/get-involved"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold transition hover:text-white"
            >
              Join our mission <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-earth-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EarthServe Foundation International.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition hover:text-gold"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
