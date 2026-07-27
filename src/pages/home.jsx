// src/pages/home.jsx
import Hero from "../components/home/Hero_section";
import ProblemStatement from "../components/ProblemStatement";
import SolutionOverview from "../components/SolutionOverview";
import KeyFeatures from "../components/KeyFeatures";
import Navbar from "../constants/Navbar";
import Footer from "../constants/Footer";
import StackSection from "../components/common/StackSection";

const SECTIONS = [Hero, ProblemStatement, SolutionOverview, KeyFeatures];

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