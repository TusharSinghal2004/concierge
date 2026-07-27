// src/components/ArchitectureFlow.jsx
import Reveal from "./common/Reveal";

const layers = [
  {
    label: "Client Layer",
    nodes: ["Amex Mobile App", "Anxious Traveler"],
  },
  {
    label: "Voice Gateway",
    nodes: ["Twilio SIP Trunk", "API Gateway / WAF"],
  },
  {
    label: "PoojaVoice Engine",
    nodes: ["WebRTC / WebSocket", "Deepgram STT", "LLM Orchestrator", "ElevenLabs TTS"],
  },
  {
    label: "Event Backbone",
    nodes: ["Apache Kafka Cluster"],
  },
  {
    label: "Multi-Agent AI Core",
    nodes: ["Detection Agent", "Policy & Context Engine", "Rebooking Agent"],
  },
  {
    label: "Polyglot Databases",
    nodes: ["Redis", "Pinecone", "PostgreSQL", "Cassandra"],
  },
  {
    label: "External GDS / APIs",
    nodes: ["OAG FlightAware", "Sabre / Amadeus"],
  },
];

export default function ArchitectureFlow() {
  return (
    <section
      id="architecture"
      className="scroll-mt-20 relative bg-white h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 py-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <Reveal className="max-w-2xl mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 font-body text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue" />
            System Architecture
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl md:text-4xl leading-[1.1] text-navy tracking-tight mb-2">
            One call, seven layers,
            <br />
            <span className="text-amex-blue">zero manual steps.</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-navy/60 leading-relaxed max-w-xl">
            From the card member's voice to a confirmed PNR — every layer is
            wired together over Kafka, end to end.
          </p>
        </Reveal>

        {/* Horizontal flow, scrollable on smaller screens */}
        <div className="overflow-x-auto pb-3 -mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex items-stretch gap-0 min-w-max">
            {layers.map((layer, i) => (
              <div key={layer.label} className="flex items-center">
                <Reveal delay={i * 0.07}>
                  <div className="w-[168px] sm:w-[190px] h-full rounded-xl border border-navy/10 bg-navy/[0.015] px-3 py-3 flex flex-col">
                    <span className="block font-body text-[0.58rem] sm:text-[0.62rem] font-semibold tracking-[0.1em] uppercase text-navy/40 mb-2.5 text-center">
                      {layer.label}
                    </span>
                    <div className="flex flex-col gap-1.5 flex-1 justify-center">
                      {layer.nodes.map((node) => (
                        <span
                          key={node}
                          className="font-body text-[0.65rem] sm:text-xs font-medium text-navy bg-white border border-navy/15 rounded-lg px-2 py-1.5 text-center hover:border-amex-blue hover:text-amex-blue hover:bg-amex-blue/5 transition-colors duration-200"
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* horizontal connector, skip after last layer */}
                {i < layers.length - 1 && (
                  <div className="relative w-4 sm:w-6 h-px bg-navy/15 mx-1 sm:mx-1.5 shrink-0">
                    <span className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-amex-blue animate-pulseDot" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}