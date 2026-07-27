// src/components/HowItWorks.jsx
import Reveal from "./common/Reveal";

const timeline = [
  {
    time: "9:42:00 AM",
    label: "Disruption",
    title: "Flight 2847 cancelled",
    desc: "Airline API pushes a cancellation event. Agent ingests it the same second — no polling delay.",
  },
  {
    time: "9:42:03 AM",
    label: "Detected",
    title: "Card member's itinerary flagged",
    desc: "System cross-references live PNR data, confirms the member is on the affected leg, checks fare rules and card benefits.",
  },
  {
    time: "9:42:41 AM",
    label: "Decided",
    title: "Best alternative selected",
    desc: "Agent scores 6 rebooking options against arrival time, cabin parity, and hotel-night impact — picks the one closest to the original plan.",
  },
  {
    time: "9:43:12 AM",
    label: "Acted",
    title: "Flight rebooked, hotel adjusted",
    desc: "New seat confirmed and the connecting hotel check-in time is pushed automatically — all within policy limits, no approval needed.",
  },
  {
    time: "9:43:15 AM",
    label: "Notified",
    title: "Card member gets one message",
    desc: "\"Your flight was cancelled — you're already rebooked on the 11:05 AM, hotel updated. Nothing else to do.\"",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-white h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <Reveal className="max-w-2xl mb-2.5 sm:mb-3 md:mb-4">
          <span className="inline-flex items-center gap-2 font-body text-[0.7rem] sm:text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue animate-pulseDot" />
            How It Works
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl leading-[1.15] text-navy tracking-tight mb-1.5 sm:mb-2">
            One cancellation.
            <br />
            <span className="text-amex-blue">Ninety-two seconds. Zero calls.</span>
          </h2>
          <p className="font-body text-[0.7rem] sm:text-xs text-navy/60 leading-relaxed max-w-xl">
            This is a real disruption, timestamped end to end — not a mockup
            of what the agent could do, but what it actually did.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {timeline.map((step, i) => {
            const isLast = i === timeline.length - 1;
            return (
              <Reveal
                key={step.title}
                delay={0.08 + i * 0.07}
                className="relative flex gap-2.5 sm:gap-3 items-stretch group"
              >
                {/* time column — fixed width, never wraps */}
                <div className="w-16 sm:w-[4.75rem] shrink-0 text-right pt-0.5">
                  <span className="font-body text-[0.6rem] sm:text-[0.65rem] font-medium text-navy/40 tabular-nums leading-none whitespace-nowrap">
                    {step.time}
                  </span>
                </div>

                {/* rail — dot + connecting line, self-contained per row */}
                <div className="relative w-2 shrink-0 flex justify-center">
                  {!isLast && (
                    <div className="absolute top-2.5 bottom-0 w-px bg-navy/10" />
                  )}
                  <span className="relative z-10 w-2 h-2 rounded-full bg-white border-2 border-amex-blue mt-1 shrink-0 group-hover:bg-amex-blue transition-colors duration-200" />
                </div>

                {/* content */}
                <div className={`flex-1 ${isLast ? "" : "pb-2.5 sm:pb-3"}`}>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-body text-[0.6rem] sm:text-[0.65rem] font-semibold text-amex-blue uppercase tracking-wide">
                      {step.label}
                    </span>
                    <h3 className="font-display font-semibold text-xs sm:text-sm text-navy">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-navy/55 leading-snug text-[0.7rem] sm:text-[0.75rem] line-clamp-1 sm:line-clamp-2 max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}