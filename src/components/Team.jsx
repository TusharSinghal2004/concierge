// src/components/Team.jsx
import Reveal from "./common/Reveal";

const team = [
  {
    name: "Your Name",
    role: "Full-Stack & Agent Logic",
    bio: "Built the detection pipeline and the rebooking decision engine end to end.",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Teammate Name",
    role: "Integrations & Backend",
    bio: "Wired up the airline, hotel, and notification APIs into one automated flow.",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Teammate Name",
    role: "Design & Frontend",
    bio: "Shaped the card member experience — alerts, confirmations, and this site.",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative bg-white h-full flex flex-col justify-center items-center px-5 sm:px-6 md:px-12 lg:px-20 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <Reveal className="max-w-2xl mb-3 sm:mb-4 md:mb-5 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 font-body text-[0.7rem] sm:text-xs font-medium text-navy/50 border border-navy/15 px-2.5 py-1 rounded-full mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amex-blue" />
            The Team
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl leading-[1.15] text-navy tracking-tight mb-1.5 sm:mb-2">
            Built in one sprint,
            <br />
            <span className="text-amex-blue">by three people, not a team of ten.</span>
          </h2>
          <p className="font-body text-[0.7rem] sm:text-xs text-navy/60 leading-relaxed max-w-xl">
            Everyone touched every layer — detection, decisioning, and the
            experience you're looking at right now.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={0.08 + i * 0.08}
              className="group w-36 sm:w-44 lg:w-52 flex flex-col rounded-xl border border-navy/10 overflow-hidden hover:border-amex-blue/30 transition-colors duration-200"
            >
              <div className="aspect-square w-full overflow-hidden bg-navy/5">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col items-center text-center px-2.5 py-2.5 sm:px-3 sm:py-3 group-hover:bg-amex-blue/[0.03] transition-colors duration-200">
                <h3 className="font-display font-semibold text-xs sm:text-sm text-navy group-hover:text-amex-blue transition-colors duration-200 truncate w-full">
                  {member.name}
                </h3>
                <p className="font-body text-[0.6rem] sm:text-[0.65rem] font-medium text-amex-blue/70 mb-0.5 sm:mb-1 truncate w-full">
                  {member.role}
                </p>
                <p className="font-body text-[0.65rem] sm:text-[0.7rem] text-navy/55 leading-snug line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}