import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05080a]">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-lg text-teal-400 mb-3 tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className='text-4xl'
              >Hi,</span> my name is
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-[106px] font-extrabold mb-4 text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              Aswath R S
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-600 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              MERN Stack Developer
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build full-stack web applications with modern technologies. Passionate about creating clean, efficient, and scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProjects}
                className="btn-primary"
              >
                View My Work
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="btn-outline"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-6 text-gray-400">
                <a href="https://github.com/Aswathrs2761" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aswath-r-s-469a813b0/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:aswathrs2001@gmail.com" className="hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-120 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-accent" size={40} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
