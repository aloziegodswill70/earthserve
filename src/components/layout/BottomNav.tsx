
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Leaf,
  FolderOpen,
  HandHeart,
  Phone,
} from "lucide-react";

const items = [
  { label: "Home", href: "/", Icon: House },
  { label: "Focus", href: "/focus", Icon: Leaf },
  { label: "Projects", href: "/projects", Icon: FolderOpen },
  { label: "Support", href: "/get-involved", Icon: HandHeart },
  { label: "Contact", href: "/contact", Icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-earth-100 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_25px_rgba(1,40,18,0.08)] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {items.map(({ label, href, Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href ||
                pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-[62px] flex-col items-center justify-center gap-1 px-1 py-2 text-center text-[10px] font-semibold transition ${
                active
                  ? "text-earth-700"
                  : "text-neutral-500 hover:text-earth-700"
              }`}
            >
              <Icon size={21} strokeWidth={active ? 2.5 : 1.8} />
              <span>{label}</span>
              {active && (
                <span className="absolute bottom-0 h-0.5 w-8 rounded-full bg-gold" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
