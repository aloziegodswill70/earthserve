
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
    </>
  );
}
