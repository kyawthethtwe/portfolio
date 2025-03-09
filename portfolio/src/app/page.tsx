
import AboutMe from "@/components/AboutMe";
import Techstacks from "@/components/Techstacks";
import Education from "@/components/Education";
import Experience from "@/components/Experiences";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {

  return (
    <main className="bg-white">
      <HeroSection />
      <AboutMe />
      <Techstacks />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}