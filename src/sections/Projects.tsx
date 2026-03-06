import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import musicimg from "../images/Screenshot 2026-03-06 174652.png"
import eventhub from "../images/Screenshot 2026-03-06 175707.png"
import airesume from "../images/Screenshot 2026-03-06 184625.png"

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Online Event Management Platform",
      description: "Developed a full-stack web application using React.js, Node.js, Express.js and MongoDB for event organizers and attendees. Implemented role-based access control, secure authentication using JWT, and integrated Stripe payment gateway for ticket booking. Cloudinary used for image uploads and pagination for event listings.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe","cloudinary","Jwt"],
      github: "https://github.com/Aswathrs2761/Event_Hub_backend",
      live: "https://eventhub-topaz.vercel.app/",
      image: eventhub
    },
    {
      title: "MusicCom – Music Streaming Web Application",
      description: "Developed a full-stack music streaming web application using React, Node.js, Express, and MongoDB, enabling users to browse songs, create playlists, like tracks, and stream music through an interactive player with shuffle and repeat features. Implemented JWT authentication, local song uploads, and integrated Howler.js for efficient audio playback and management.",
      tech: ["React.js","Tailwind CSS","Node.js","Express.js", "MongoDB","Multer","Howler"],
      github: "https://github.com/Aswathrs2761/Music_player_backend",
      live: "https://musiccom.vercel.app/",
      image: musicimg
    },
    {
      title: "AI Resume Analyzer Web Application",
      description: "Built an AI Resume Analyzer using Node.js, Express.js, and MongoDB that analyzes uploaded PDF/DOCX resumes and provides AI-generated feedback and ATS insights. Implemented file parsing with Mammoth, pdf-parse, OCR using Tesseract.js, and integrated OpenAI API for intelligent resume evaluation.",
      tech: ["React.js","Tailwind CSS","Node.js","Express.js", "MongoDB","Multer","pdf-poppler", "mammoth", "openai" ],
      github: "https://github.com/Aswathrs2761/ai_resume_analyzer",
      live: "https://airesumeanalyzervercel.vercel.app/",
      image: airesume
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  
                  {project.live !== "#" && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-accent-foreground rounded-lg transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
