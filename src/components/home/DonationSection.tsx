"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const donationAmounts = [2000, 5000, 10000, 25000];

const donationImpacts = [
  {
    icon: Sprout,
    title: "Environmental Education",
    description:
      "Support awareness activities that encourage responsible environmental practices.",
  },
  {
    icon: Leaf,
    title: "Cleaner Communities",
    description:
      "Help support community-led environmental initiatives and waste reduction.",
  },
  {
    icon: Heart,
    title: "Sustainable Partnerships",
    description:
      "Contribute to collaborative projects that promote long-term environmental responsibility.",
  },
];

const formatNaira = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

export default function DonationSection() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState("");

  const parsedCustomAmount = Number(customAmount);
  const selectedAmount = customAmount.trim()
    ? parsedCustomAmount
    : amount;

  const isValidAmount =
    Number.isSafeInteger(selectedAmount) && selectedAmount >= 100;

  function handleDonationIntent() {
    if (!isValidAmount) return;

    const query = new URLSearchParams({
      amount: String(selectedAmount),
      frequency,
    });

    window.location.href = `/donate?${query.toString()}`;
  }

  return (
    <section
      id="donate"
      className="relative isolate overflow-hidden bg-[#012812] py-20 text-center sm:py-24 lg:py-28"
    >
      {/* Background grid and decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-earth-grid bg-grid opacity-70"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#477B35]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#D4D68A]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Centered section heading */}
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4D68A]/25 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A]">
            <Heart size={15} />
            Support Our Mission
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Give Today.
            <span className="mt-2 block text-[#D4D68A]">
              Grow a Greener Tomorrow.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Your support can help advance environmental awareness,
            responsible waste management, and community participation.
            Together, we can encourage practical action for a healthier
            environment.
          </p>
        </div>

        {/* Environmental image */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=85"
              alt="Hands holding a young green plant, symbolizing care for the environment"
              className="h-56 w-full object-cover sm:h-72 lg:h-80"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#012812]/85 via-[#012812]/15 to-transparent" />

            <div className="absolute inset-x-4 bottom-5 text-center sm:bottom-8">
              <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Every Contribution Matters
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                Help nurture environmental awareness and support
                meaningful community action.
              </p>
            </div>
          </div>
        </div>

        {/* Donation selector and impact content */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
          {/* Donation selector */}
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur-sm sm:p-9">
            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Choose Your Contribution
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-white/60">
                Select an amount to continue to the donation page.
              </p>
            </div>

            {/* Donation frequency */}
            <div
              className="mx-auto mt-7 grid max-w-sm grid-cols-2 rounded-full border border-white/10 bg-black/20 p-1"
              aria-label="Donation frequency"
            >
              <button
                type="button"
                onClick={() => setFrequency("once")}
                aria-pressed={frequency === "once"}
                className={`rounded-full px-4 py-3 text-center text-sm font-bold transition ${
                  frequency === "once"
                    ? "bg-[#D4D68A] text-[#012812]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                Give Once
              </button>

              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                aria-pressed={frequency === "monthly"}
                className={`rounded-full px-4 py-3 text-center text-sm font-bold transition ${
                  frequency === "monthly"
                    ? "bg-[#D4D68A] text-[#012812]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Preset donation amounts */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              {donationAmounts.map((donationAmount) => {
                const selected =
                  amount === donationAmount && !customAmount;

                return (
                  <button
                    key={donationAmount}
                    type="button"
                    onClick={() => {
                      setAmount(donationAmount);
                      setCustomAmount("");
                    }}
                    aria-pressed={selected}
                    className={`rounded-2xl border p-4 text-center transition sm:p-5 ${
                      selected
                        ? "border-[#D4D68A] bg-[#D4D68A] text-[#012812] shadow-lg"
                        : "border-white/15 bg-white/[0.04] text-white hover:border-[#D4D68A]/60"
                    }`}
                  >
                    <span className="block font-heading text-2xl font-bold">
                      {formatNaira(donationAmount)}
                    </span>

                    <span
                      className={`mt-1 block text-xs ${
                        selected
                          ? "text-[#012812]/70"
                          : "text-white/50"
                      }`}
                    >
                      {frequency === "monthly"
                        ? "Per month"
                        : "One-time gift"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom donation amount */}
            <div className="mt-6 text-center">
              <label
                htmlFor="custom-donation-amount"
                className="mb-2 block text-center text-sm font-semibold text-white/80"
              >
                Or enter another amount (NGN)
              </label>

              <input
                id="custom-donation-amount"
                type="number"
                min="100"
                step="1"
                inputMode="numeric"
                value={customAmount}
                onChange={(event) =>
                  setCustomAmount(event.target.value)
                }
                placeholder="Enter amount"
                className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3.5 text-center text-white outline-none placeholder:text-white/35 focus:border-[#D4D68A] focus:ring-2 focus:ring-[#D4D68A]/20"
              />

              {customAmount.trim() !== "" && !isValidAmount && (
                <p className="mt-2 text-center text-sm text-[#D4D68A]">
                  Enter a whole-number amount of at least ₦100.
                </p>
              )}
            </div>

            {/* Continue to donation */}
            <button
              type="button"
              onClick={handleDonationIntent}
              disabled={!isValidAmount}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#D4D68A] px-6 py-4 text-center text-sm font-bold text-[#012812] transition hover:bg-[#E8EDCF] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue to Donation
              <ArrowRight size={18} />
            </button>

            {/* Payment notice */}
            <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center text-xs leading-6 text-white/50">
              <ShieldCheck size={20} className="shrink-0 text-[#D4D68A]" />

              <p className="mx-auto max-w-md">
                Payment processing will be enabled after a payment
                provider has been configured and verified.
              </p>
            </div>
          </div>

          {/* Donation purpose */}
          <div className="pt-2">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4D68A]">
                Why Your Support Matters
              </span>

              <h3 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                Every contribution can help move the mission forward.
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/65">
                Donations can help fund approved programmes, materials,
                outreach and partnerships. Clear information about
                how contributions are allocated helps build trust.
              </p>
            </div>

            {/* Impact cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {donationImpacts.map((impact) => {
                const Icon = impact.icon;

                return (
                  <div
                    key={impact.title}
                    className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition hover:border-[#D4D68A]/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4D68A]/10 text-[#D4D68A]">
                      <Icon size={25} />
                    </div>

                    <h4 className="mt-4 font-heading text-xl font-bold text-white">
                      {impact.title}
                    </h4>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-white/60">
                      {impact.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Transparency and accountability */}
            <div className="mt-7 rounded-2xl border border-[#D4D68A]/20 bg-[#D4D68A]/[0.06] p-6 text-center">
              <div className="flex flex-col items-center justify-center gap-3 text-[#D4D68A]">
                <CheckCircle2 size={24} />

                <span className="font-heading text-lg font-bold">
                  Transparency & Accountability
                </span>
              </div>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/65">
                We recommend publishing periodic programme updates and
                financial reports so supporters can understand the use
                and impact of contributions.
              </p>
            </div>
          </div>
        </div>

        {/* Closing message */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Together, we can nurture a better tomorrow.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center gap-2 text-center text-sm font-bold text-[#D4D68A] transition hover:text-white"
          >
            Ask us about supporting EarthServe
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}