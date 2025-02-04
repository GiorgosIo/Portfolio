import { useEffect } from "react";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;