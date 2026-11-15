
"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Infinite-loop background video */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/earthserve-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Green overlay keeps text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#012812]/55"
      />

      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 z-[2] h-80 w-80 rounded-full bg-[#477B35]/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 z-[2] h-96 w-96 rounded-full bg-[#D4D68A]/15 blur-3xl"
      />
    </>
  );
}
