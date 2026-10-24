
"use client";

import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "+18322977460";
const PHONE_NUMBER = "+18322977460";

export default function FloatingContact() {
  const whatsappMessage = encodeURIComponent(
    "Hello EarthServe Foundation International. I would like to learn more about your projects and how I can get involved."
  );

  return (
    <div
      className="fixed bottom-24 right-4 z-[60] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6"
      aria-label="Contact EarthServe"
    >
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with EarthServe on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
      >
        <MessageCircle size={27} />
      </a>

      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call EarthServe Foundation"
        title="Call EarthServe"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-earth-700 text-white shadow-lg transition hover:scale-105 hover:bg-earth-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-earth-200"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
