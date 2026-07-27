// src/components/ArchitectureDetails.jsx
import Reveal from "./common/Reveal";

const nodes = [
  { layer: "Client", name: "Amex Mobile App", desc: "Card member's entry point for changes and confirmations, synced live." },
  { layer: "Client", name: "Anxious Traveler", desc: "The card member — initiates the call the moment something goes wrong." },
  { layer: "Voice Gateway", name: "Twilio SIP Trunk", desc: "Answers the hotline call and bridges telephony into the app." },
  { layer: "Voice Gateway", name: "API Gateway / WAF", desc: "Secured entry point that filters and routes all app-side requests." },
  { layer: "Voice AI", name: "WebRTC / WebSocket", desc: "Streams live audio between Twilio and the voice engine, low-latency." },
  { layer: "Voice AI", name: "Deepgram STT", desc: "Converts spoken words to text in real time for intent recognition." },
  { layer: "Voice AI", name: "LLM Orchestrator", desc: "Llama-3 / GPT-4o interprets intent and decides the next action." },
  { layer: "Voice AI", name: "ElevenLabs TTS", desc: "Turns the agent's response into natural, non-robotic speech." },
  { layer: "Event Backbone", name: "Apache Kafka Cluster", desc: "Central nervous system — every event flows through it." },
  { layer: "AI Core", name: "Detection Agent", desc: "Watches disruption events, determines which trips are affected." },
  { layer: "AI Core", name: "Policy & Context Engine", desc: "Checks proposed rebookings against card benefit limits." },
  { layer: "AI Core", name: "Rebooking Agent", desc: "Evaluates alternatives and triggers the actual GDS changes." },
  { layer: "Databases", name: "Redis", desc: "Live session state and distributed locks, prevents collisions." },
  { layer: "Databases", name: "Pinecone", desc: "Vector store for policy docs — LLM reasons via retrieval." },
  { layer: "Databases", name: "PostgreSQL", desc: "ACID-compliant ledger — system of record for every booking." },
  { layer: "Databases", name: "Cassandra", desc: "Append-only store — durable audit trail of every action taken." },
  { layer: "External APIs", name: "OAG FlightAware", desc: "Live flight status webhooks — triggers the entire pipeline." },
  { layer: "External APIs", name: "Sabre / Amadeus GDS", desc: "Executes the seat lock and PNR issuance on commit." },
];

export default function ArchitectureDetails() {
  return (
    <section
      id="architecture-details"
      className="scroll-mt-20 relative bg-white h-full flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 py-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <Reveal className="max-w-2xl mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-2 font-body text-[0.7rem] sm:text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue" />
            System Components
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl leading-[1.15] text-navy tracking-tight mb-1.5">
            Every node, <span className="text-amex-blue">what it actually does.</span>
          </h2>
          <p className="font-body text-[0.7rem] sm:text-xs text-navy/60 leading-relaxed max-w-xl">
            A quick reference for every piece of the pipeline in the architecture diagram.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2">
          {nodes.map((node, i) => (
            <Reveal key={node.name} delay={i * 0.02}>
              <div className="group h-full rounded-lg border border-navy/10 p-2.5 bg-white transition-colors duration-200 hover:border-amex-blue hover:bg-amex-blue/[0.03]">
                <span className="inline-block font-body text-[0.55rem] font-semibold tracking-[0.08em] uppercase text-amex-blue/60 group-hover:text-amex-blue transition-colors duration-200 mb-1">
                  {node.layer}
                </span>
                <h3 className="font-display font-semibold text-[0.72rem] sm:text-xs text-navy mb-0.5 leading-snug transition-colors duration-200 group-hover:text-amex-blue">
                  {node.name}
                </h3>
                <p className="font-body text-navy/55 leading-snug text-[0.62rem] sm:text-[0.65rem] line-clamp-2">
                  {node.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}