// src/pages/home.jsx
import Hero from "../components/home/Hero_section";
import ProblemStatement from "../components/ProblemStatement";
import SolutionOverview from "../components/SolutionOverview";
import KeyFeatures from "../components/KeyFeatures";
import HowItWorks from "../components/HowItWorks"
import TechStack from "../components/TechStack"
import ArchitectureFlow from "../components/ArchitectureFlow"
import ArchitectureDetails from "../components/ArchitectureDetails"
import Team from "../components/Team"
import Navbar from "../constants/Navbar";
import Footer from "../constants/Footer";
import StackSection from "../components/common/StackSection";

const SECTIONS = [Hero, ProblemStatement, SolutionOverview, KeyFeatures,HowItWorks,TechStack,ArchitectureFlow,ArchitectureDetails,Team];

export default function Home() {
  return (
    <>
      <Navbar variant="light" />
      <div className="snap-container">
        {SECTIONS.map((Section, i) => (
          <StackSection key={i} index={i}>
            <Section />
          </StackSection>
        ))}
        <div className="snap-section">
          <Footer />
        </div>
      </div>
    </>
  );
}