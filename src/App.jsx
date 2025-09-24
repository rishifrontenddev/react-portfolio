import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

export default function App() {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-yellow-200
    selection:text-cyan-900"
    >
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <HeroSection />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
