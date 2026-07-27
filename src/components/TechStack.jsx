// src/components/TechStack.jsx
import Reveal from "./common/Reveal";

const stack = [
  {
    name: "FlightAware",
    role: "Disruption Trigger",
    items: ["Webhook fires on flight cancellation", "Feeds real-time flight status into the pipeline"],
  },
  {
    name: "Kafka",
    role: "Event Bus",
    items: ["travel.disruption.detected event", "execute_booking & booking_success topics", "Decouples every service in the flow"],
  },
  {
    name: "Twilio",
    role: "Hotline",
    items: ["Answers the card member's call", "Streams audio to Voice AI Core over WebSocket"],
  },
  {
    name: "Concierge AI",
    role: "Voice AI Core",
    items: ["Speech-to-text intent parsing", "ANI lookup for instant user context", "Conversational confirmation in real time"],
  },
  {
    name: "Agents",
    role: "AI Rebooking",
    items: ["Triggers the booking saga", "Evaluates and executes the rebooking", "Publishes booking_success back to Kafka"],
  },
  {
    name: "GDS",
    role: "Travel Systems",
    items: ["Locks the seat & issues the PNR", "Returns booking reference to the pipeline"],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-20 relative bg-white h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <Reveal className="max-w-2xl mb-2.5 sm:mb-3 md:mb-4">
          <span className="inline-flex items-center gap-2 font-body text-[0.7rem] sm:text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue" />
            Tech Stack
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl leading-[1.15] text-navy tracking-tight mb-1.5 sm:mb-2">
            One event, one call,
            <br />
            <span className="text-amex-blue">one confirmed rebooking.</span>
          </h2>
          <p className="font-body text-[0.7rem] sm:text-xs text-navy/60 leading-relaxed max-w-xl">
            From the FlightAware webhook to a confirmed PNR — every hop runs
            through the same event-driven pipeline, end to end.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {stack.map((tool, i) => (
            <Reveal
              key={tool.name}
              delay={0.06 + i * 0.06}
              className="group rounded-xl border border-navy/10 px-3 py-3 sm:px-3.5 sm:py-3.5 hover:border-amex-blue/30 hover:bg-amex-blue/[0.03] transition-colors duration-200"
            >
              <h3 className="font-display font-bold text-xs sm:text-sm text-navy group-hover:text-amex-blue transition-colors duration-200 mb-0.5">
                {tool.name}
              </h3>
              <span className="font-body text-[0.62rem] sm:text-[0.68rem] font-medium tracking-wide uppercase text-amex-blue/70 group-hover:text-amex-blue transition-colors duration-200">
                {tool.role}
              </span>
              <ul className="flex flex-col gap-1 sm:gap-1.5 mt-2">
                {tool.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[0.62rem] sm:text-[0.68rem] text-navy/55 leading-snug"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}