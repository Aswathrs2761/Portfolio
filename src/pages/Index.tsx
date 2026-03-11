import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import About from '@/sections/About';
// Experience section removed to match resume content
import Education from '@/sections/Education';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import Certification from '@/sections/Certification';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certification/>
        <Skills />
        <Projects />
        
        {/* Experience removed per resume — content not in provided image */}
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
