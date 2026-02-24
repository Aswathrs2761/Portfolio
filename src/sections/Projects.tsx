import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&h=600&fit=crop"
    },
    {
      title: "Kanban Board - React.js",
      description: "Built a responsive Kanban board with draggable tasks using React. Supports To Do, In Progress and Done columns, drag-and-drop, task persistence via localStorage and a compact modal for task details.",
      tech: ["React", "Tailwind", "Drag & Drop"],
      github: "https://github.com/Aswathrs2761/kanbanboard",
      live: "https://kanbansboard.vercel.app/",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
    },
    {
      title: "Notes App - React.js",
      description: "A notes management app with create, edit, delete, pin, archive and trash features, search and tag-based filtering, routing with React Router and data persistence using localStorage.",
      tech: ["React", "Tailwind", "localStorage"],
      github: "https://github.com/Aswathrs2761/Guvi-notes-task/tree/main/guvi_task",
      live: "https://hilarious-malasada-24dc60.netlify.app/",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
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
