// src/components/home/Hero_section.jsx
import { useEffect, useRef, useState } from "react";
import heroVideo from "../../assets/images/salil-viral-video.mp4";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const container = sectionRef.current?.closest(".snap-container");
    if (!container) return;
    const onScroll = () => setScrollY(container.scrollTop);
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const openFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
      return;
    }

    if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
      return;
    }

    if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const progress = Math.min(scrollY / vh, 1);
  const bgScale = 1 + progress * 0.1;
  const contentOpacity = 1 - progress * 1.4;
  const contentShift = progress * 60;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-navy-deep"
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-navy-deep via-navy to-navy-deep" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
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

      <div
        className="relative z-10 flex h-full w-full flex-col px-6 pt-24 pb-16 md:px-12 md:pt-28 md:pb-24 lg:px-20"
        style={{
          opacity: Math.max(contentOpacity, 0),
          transform: `translateY(-${contentShift}px)`,
        }}
      >
        <div className="mb-4 flex w-full justify-center md:mb-6 animate-fadeUp">
          <span className="font-body text-[0.7rem] uppercase leading-none tracking-[0.25em] text-ice/50 md:text-xs">
            American Express Codestreet Hackathon
          </span>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 grid-cols-1 items-center gap-4 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start text-left">
            <h1 className="animate-fadeUpDelay1 mb-4 font-display text-[12vw] font-semibold leading-[0.98] tracking-tight text-ice sm:text-5xl md:text-6xl lg:text-7xl">
              We fix trips
              <br />
              <span className="text-amex-blue">before you notice.</span>
            </h1>

            <p className="animate-fadeUpDelay2 mb-6 max-w-md font-body text-sm leading-relaxed text-slate md:text-base">
              An autonomous concierge that detects disruptions and rebooks
              flights, hotels, and plans before you even know something went
              wrong.
            </p>

            <button
              type="button"
              onClick={openFullscreen}
              className="animate-fadeUpDelay3 group mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-sm text-navy transition-all duration-300 hover:bg-ice/90"
            >
              Watch it work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div
              className="animate-fadeUpDelay2 relative w-full max-w-xs overflow-hidden rounded-2xl border border-ice/10 bg-black shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] sm:max-w-sm max-h-[90vh]"
              style={{
                transform: `scale(${bgScale})`,
                transition: "transform 0.05s linear",
              }}
            >
              <video
                ref={videoRef}
                id="demo-video"
                className="h-full w-full object-contain"
                controls
                playsInline
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}