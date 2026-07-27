// src/components/ProblemStatement.jsx
import Reveal from "./common/Reveal";

const painPoints = [
  { stat: "2+ hrs", title: "Lost to manual rebooking", desc: "Card members stuck on hold with airlines while their trip falls apart in real time." },
  { stat: "0", title: "Proactive action taken", desc: "Existing itinerary apps only display information — they don't act when things go wrong." },
  { stat: "100%", title: "Of the stress, on the traveler", desc: "Rebooking flights, rearranging hotels, and figuring out next steps is left entirely to the passenger." },
];

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      className="relative bg-white h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20  sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <Reveal className="max-w-2xl mb-2.5 sm:mb-3 md:mb-4">
          <span className="inline-flex items-center gap-2 font-body text-[0.7rem] sm:text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue" />
            The Problem
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl leading-[1.15] text-navy tracking-tight mb-1.5 sm:mb-2">
            Travel breaks all the time.
            <br />
            <span className="text-amex-blue">Nothing fixes it for you.</span>
          </h2>
          <p className="font-body text-[0.7rem] sm:text-xs text-navy/60 leading-relaxed max-w-xl">
            A cancelled flight or a missed connection turns a card member into
            an unpaid travel agent — right when they need help the most.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-start">
          <Reveal delay={0.1} className="relative rounded-xl overflow-hidden aspect-[16/6] sm:aspect-[16/7] lg:aspect-[16/8] shadow-[0_12px_30px_-15px_rgba(10,31,68,0.2)] bg-navy/5">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80"
              alt="Airport departure gate with passengers waiting during a flight delay"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-navy/0" />
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-2.5 sm:right-2.5 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-2.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulseDot" />
              <span className="font-body text-[0.65rem] sm:text-[0.7rem] font-medium text-navy">Flight 2847 — Cancelled</span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-1.5 sm:gap-2">
            {painPoints.map((point, i) => (
              <Reveal key={point.title} delay={0.15 + i * 0.08} className="flex gap-2.5 sm:gap-3 pb-1.5 sm:pb-2 border-b border-navy/10 last:border-0 last:pb-0">
                <span className="font-display font-bold text-base sm:text-lg md:text-xl text-amex-blue shrink-0 w-12 sm:w-14 leading-none">
                  {point.stat}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-xs sm:text-sm text-navy mb-0.5">{point.title}</h3>
                  <p className="font-body text-navy/55 leading-snug text-[0.7rem] sm:text-[0.75rem] line-clamp-1 sm:line-clamp-2">{point.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}