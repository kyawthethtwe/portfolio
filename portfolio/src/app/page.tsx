
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
export default function Home() {

  return (
    <main className="bg-white">
      <HeroSection />
      <AboutMe />
      <Education />
      <Projects />
    </main>
  );
}