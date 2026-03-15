import ScrollyCanvas from "@/components/ScrollyCanvas";
import TechMarquee from "@/components/TechMarquee";
import FeaturedProject from "@/components/FeaturedProject";
import Career from "@/components/Career";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen font-sans selection:bg-cyan-500/30">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* 1. Scrollytelling Canvas Sequence */}
      <div id="home">
        <ScrollyCanvas />
      </div>

      {/* 2. Hyper-Modern Infinite Marquee */}
      <div id="skills">
        <TechMarquee />
      </div>

      {/* 3. Career Timeline (Experience) */}
      <div id="experience">
        <Career />
      </div>

      {/* 4. Projects Showcase */}
      <div id="projects">
        <FeaturedProject />
      </div>

      {/* 5. Education & Leadership Grid */}
      <div id="education">
        <Education />
      </div>

      {/* 6. Footer CTA */}
      <div id="contact">
        <ContactSection />
      </div>

    </main>
  );
}
