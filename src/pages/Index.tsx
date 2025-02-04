import { useEffect } from "react";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Education from "../components/Education";

const Index = () => {
  useEffect(() => {
    console.log("Portfolio page loaded");
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Summary />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
    </main>
  );
};

export default Index;