import { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";

const Index = () => {
  useEffect(() => {
    console.log("Portfolio page loaded");
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
    </main>
  );
};

export default Index;