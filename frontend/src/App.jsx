import Scene3D from "./components/Scene3D";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Extras from "./components/Extras";

export default function App() {
  return (
    <div className="min-h-screen">
      <Scene3D />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
