import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
