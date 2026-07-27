// src/components/Team.jsx
import Reveal from "./common/Reveal";
import salilPhoto from "../assets/images/salil.jpeg";
import rawatPhoto from "../assets/images/rawat.jpeg";
import tusharPhoto from "../assets/images/tushar.jpg"

const team = [
  {
    name: "Tushar Singhal",
    photo: tusharPhoto,
  },
  {
    name: "Salil Hiremath",
    photo: salilPhoto,
  },
  {
    name: "Harshit Rawat",
    photo: rawatPhoto,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-20 relative bg-white h-full flex flex-col justify-center items-center px-5 sm:px-6 md:px-12 lg:px-20 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
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

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={0.08 + i * 0.08}
              className="group w-44 sm:w-52 lg:w-60 flex flex-col rounded-xl border border-navy/10 overflow-hidden hover:border-amex-blue/30 transition-colors duration-200"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-navy/5">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col items-center text-center px-3 py-3 sm:py-4 group-hover:bg-amex-blue/[0.03] transition-colors duration-200">
                <h3 className="font-display font-semibold text-sm sm:text-base text-navy group-hover:text-amex-blue transition-colors duration-200">
                  {member.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}