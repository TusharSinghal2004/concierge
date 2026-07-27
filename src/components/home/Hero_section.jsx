// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // parallax + fade math, clamped to viewport height
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const progress = Math.min(scrollY / vh, 1);
  const bgScale = 1 + progress * 0.15;
  const contentOpacity = 1 - progress * 1.4;
  const contentShift = progress * 60;

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-navy-deep"
    >
      {/* full-bleed background media */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `scale(${bgScale})`, transition: "transform 0.05s linear" }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-poster.jpg"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* cinematic gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/60 via-transparent to-navy-deep/30" />
      </div>

      {/* faint flight-route overlay, cinematic not decorative */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          id="route-path"
          d="M -50 480 C 250 380, 350 200, 600 220 S 950 420, 1250 120"
          fill="none"
          stroke="#C9A227"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle r="3.5" fill="#C9A227">
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath href="#route-path" />
          </animateMotion>
        </circle>
      </svg>

      {/* content, fades/lifts out on scroll like Toyota's hero */}
      <div
        className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6"
        style={{
          opacity: Math.max(contentOpacity, 0),
          transform: `translateY(-${contentShift}px)`,
        }}
      >
        <span className="font-body text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-ice/50 mb-6 animate-fadeUp">
          American Express Codestreet Hackathon
        </span>

        <h1 className="font-display font-semibold text-ice leading-[0.95] tracking-tight mb-8 animate-fadeUpDelay1
          text-[15vw] md:text-[7vw] lg:text-[6.5rem]">
          We fix trips
          <br />
          <span className="text-amex-blue">before you notice.</span>
        </h1>

        <a
          href="#demo"
          className="group inline-flex items-center gap-2 font-body text-sm text-ice border border-ice/25 rounded-full
            px-6 py-3 hover:border-ice/60 hover:bg-ice/5 transition-all duration-300 animate-fadeUpDelay2"
        >
          Watch it work
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* scroll cue */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: Math.max(1 - progress * 3, 0) }}
      >
        <span className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-ice/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ice/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}