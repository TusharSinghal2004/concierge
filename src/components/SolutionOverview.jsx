// src/components/SolutionOverview.jsx
import Reveal from "./common/Reveal";

const steps = [
  { label: "Detect", title: "Live monitoring, zero delay", desc: "Watches flight status feeds continuously and flags a cancellation or missed connection the instant it happens." },
  { label: "Decide", title: "Evaluates every real alternative", desc: "Cross-checks available flights, fares, and hotel options against policy limits to find the best working path." },
  { label: "Act", title: "Rebooks without waiting on you", desc: "Executes the flight change and hotel rearrangement directly — no forms, no hold music, no approval step." },
  { label: "Notify", title: "Confirms in real time", desc: "The card member gets a clear update the moment it's done, with the new itinerary already in hand." },
];

export default function SolutionOverview() {
  return (
    <section
      id="solution"
      className="scroll-mt-20 relative bg-white h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 pt-2.5 pb-2.5 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <Reveal className="max-w-2xl mb-2.5 sm:mb-3 md:mb-4">
          <span className="inline-flex items-center gap-2 font-body text-[0.7rem] sm:text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue" />
            The Solution
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl leading-[1.15] text-amex-blue tracking-tight mb-1.5 sm:mb-2">
            An agent that acts.
            <br />
            <span className="text-navy">Not just an app that shows.</span>
          </h2>
          <p className="font-body text-[0.7rem] sm:text-xs text-navy/60 leading-relaxed max-w-xl">
            Static itinerary planners stop at displaying information. This
            concierge closes the loop — it detects, decides, and executes,
            end to end, without a single manual step.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.1}>
              <div className="group relative h-full rounded-xl md:rounded-2xl border border-navy/10 p-3 sm:p-4 md:p-5 bg-white transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-1.5 hover:bg-navy hover:border-navy hover:shadow-[0_16px_32px_-14px_rgba(10,31,68,0.45)]">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                  <span className="font-display font-bold text-sm sm:text-base md:text-lg text-navy/30 transition-colors duration-300 group-hover:text-amex-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-navy/40 transition-colors duration-300 group-hover:text-slate">
                    {step.label}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xs sm:text-sm md:text-base text-navy mb-1 sm:mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                  {step.title}
                </h3>
                <p className="font-body text-navy/55 leading-snug text-[0.7rem] sm:text-[0.8rem] md:text-[0.85rem] line-clamp-2 sm:line-clamp-3 md:line-clamp-none transition-colors duration-300 group-hover:text-slate">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}