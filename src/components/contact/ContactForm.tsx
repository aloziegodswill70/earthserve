
"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!recipient) {
      setStatus(
        "The contact email has not been configured yet. Please contact the website administrator."
      );
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please complete all fields before continuing.");
      return;
    }

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    setStatus(
      "Your email application should open with your message prepared. Please send the email to complete your enquiry."
    );

    window.location.href =
      `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#075B2A]/15 bg-white px-4 py-3 text-sm text-[#012812] outline-none transition placeholder:text-[#365342]/50 focus:border-[#477B35] focus:ring-2 focus:ring-[#477B35]/15";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 text-left"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-semibold text-[#012812]"
          >
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-semibold text-[#012812]"
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="text-sm font-semibold text-[#012812]"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          placeholder="What would you like to discuss?"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="text-sm font-semibold text-[#012812]"
        >
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Write your message here..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#075B2A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#012812] sm:w-auto"
      >
        Prepare Message
        <Send size={17} />
      </button>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-xl bg-[#075B2A]/5 p-3 text-sm leading-6 text-[#365342]"
        >
          {status}
        </p>
      )}
    </form>
  );
}
