
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Initiatives", href: "/our-initiatives" },
  { label: "Our Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

const website = "https://theearthservefoundation.com";

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=6&color=000000&bgcolor=ffffff&data=${encodeURIComponent(
  website
)}`;

function BrandName() {
  return (
    <div className="flex min-w-0 flex-col justify-center">
      <span
        className="whitespace-nowrap text-xl font-black leading-none tracking-tight text-[#91D52B] sm:text-2xl lg:text-3xl"
        style={{
          WebkitTextStroke: "1.8px #000000",
          paintOrder: "stroke fill",
          textShadow:
            "0 0 3px #ffffff, 0 0 6px #ffffff, 0 0 10px #ffffff, 2px 2px 0px #000000",
        }}
      >
        EarthServe
      </span>

      <span className="mt-1.5 whitespace-nowrap text-[9px] font-black uppercase tracking-tight text-white sm:text-xs lg:text-sm">
        Foundation International
      </span>
    </div>
  );
}

function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="EarthServe Foundation International home"
      className="flex h-20 w-20 shrink-0 items-center justify-center bg-black p-0.5 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
    >
      <div className="relative h-full w-full">
        <Image
          src="/images/earthservelogo.png"
          alt="EarthServe logo"
          fill
          priority
          sizes="112px"
          className="object-contain"
        />
      </div>
    </Link>
  );
}

function WebsiteQR() {
  return (
    <div className="group relative shrink-0">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit the EarthServe website"
        className="block rounded-md border border-earth-100 bg-white p-1 shadow-sm transition duration-300 group-hover:scale-105"
      >
        <img
          src={qrCodeUrl}
          alt="Scan to visit EarthServe Foundation International"
          width={64}
          height={64}
          className="h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
        />
      </a>

      <span className="pointer-events-none absolute right-0 top-full z-[60] mt-2 w-max rounded-lg bg-earth-950 px-3 py-2 text-[10px] font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xs">
        theearthservefoundation.com
      </span>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-black shadow-[0_3px_12px_rgba(255,255,255,0.12)] backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-5 lg:px-8 lg:py-3"
      >
        {/* Brand identity */}
        <div className="flex min-w-0 shrink items-center gap-2 sm:gap-3 lg:gap-4">
          <BrandLogo />
          <BrandName />
        </div>

        {/* Desktop and laptop navigation */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-white transition hover:text-[#91D52B]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/donations"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-earth-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-earth-800 xl:px-5"
          >
            Support Our Mission
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile QR code and menu */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <WebsiteQR />

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/30 text-white transition hover:bg-white/10"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation dropdown */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/20 bg-black px-4 pb-5 pt-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3.5 text-sm font-semibold text-white transition hover:text-[#91D52B]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/donations"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-earth-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-earth-800"
            >
              Support Our Mission
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
