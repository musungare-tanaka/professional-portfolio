import Footer from "./Footer/page";
import Hero from "./HeroSection/page";
import NavBar from "./NavBar/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";
import Testimonials from "./Testimonials/page";
import WorkHistory from "./work-history/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black grid grid-rows-[auto_1fr_auto] gap-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/**Skills Section */}
      <Skills/>

      {/**Testimonials */}
      <Testimonials/>

      <WorkHistory/>

      {/**Contact Me */}

      {/**Footer */}
      <Footer/>
    </div>
  );
}
