// src/components/KeyFeatures.jsx
import Reveal from "./common/Reveal";

const features = [
  {
    title: "Real-time disruption detection",
    desc: "Catches a cancellation or missed connection the instant it happens.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Autonomous rebooking",
    desc: "Executes flight changes within policy limits — no approval queue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16l20-8-8 20-2-8-8-2z" />
      </svg>
    ),
  },
  {
    title: "Hotel rearrangement",
    desc: "Adjusts hotel stays automatically to match the new itinerary.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V8a1 1 0 0 1 1-1h5v14M3 21h18M9 21V11h6v10M15 21V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14" />
      </svg>
    ),
  },
  {
    title: "Instant notifications",
    desc: "Sends a clear update the moment a change is made.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Live confirmation updates",
    desc: "Status updates in real time, from detection through confirmation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    title: "Policy-aware decisions",
    desc: "Every action stays within card benefit limits, automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
];

export default function KeyFeatures() {
  return (
    <section
      id="features"
      className="scroll-mt-20 relative bg-white h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 pt-2.5 pb-2.5 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <Reveal className="max-w-2xl mb-2.5 sm:mb-4 md:mb-5">
          <span className="inline-flex items-center gap-2 font-body text-[0.7rem] sm:text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue" />
            Key Features
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl leading-[1.15] text-navy tracking-tight mb-1.5 sm:mb-2">
            Everything the concierge <span className="text-amex-blue">handles on its own.</span>
          </h2>
          <p className="font-body text-[0.7rem] sm:text-xs text-navy/60 leading-relaxed max-w-xl">
            Detection feeds decisions, decisions trigger action, action triggers confirmation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-14">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <div
                className={`group flex items-start gap-3 py-2 sm:py-2.5 md:py-3 border-t border-navy/10 pl-3 -ml-3 border-l-2 border-l-transparent transition-colors duration-300 hover:border-l-amex-blue hover:bg-navy/[0.02] ${
                  i < 2 ? "sm:border-t-0" : ""
                } ${i === features.length - 1 ? "border-b sm:border-b-0" : ""}`}
              >
                <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-navy/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-amex-blue/10">
                  <span className="w-[14px] h-[14px] sm:w-4 sm:h-4 text-navy/60 transition-colors duration-300 group-hover:text-amex-blue">
                    {feature.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-xs sm:text-sm text-navy mb-0.5 leading-snug transition-colors duration-300 group-hover:text-amex-blue">
                    {feature.title}
                  </h3>
                  <p className="font-body text-navy/55 leading-snug text-[0.68rem] sm:text-[0.78rem] line-clamp-2 sm:line-clamp-none">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}