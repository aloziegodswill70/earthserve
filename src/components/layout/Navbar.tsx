
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-earth-100 bg-white/95 shadow-sm backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
          aria-label="EarthServe home"
        >
         <span className="relative block h-12 w-24 shrink-0 sm:h-16 sm:w-28">
            <Image
              src="/images/earthservelogo.png"
              alt="EarthServe Foundation International logo"
              fill
              priority
              sizes="(min-width: 640px) 112px, 96px"
              className="object-contain"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-earth-800 transition hover:text-earth-500"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/donations"
            className="inline-flex items-center gap-2 rounded-full bg-earth-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-earth-800"
          >
            Support Our Mission
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-earth-100 text-earth-800 transition hover:bg-earth-50 lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-earth-100 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-earth-50 py-3.5 text-sm font-semibold text-earth-800 transition hover:text-earth-500"
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
