import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, TestTube, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        "HTML, CSS, JavaScript",
        "React",
        "Tailwind CSS",
        "Component Architecture",
        "Responsive UI",
        "State Management (Props, Hooks)"
      ]
    },
    {
      title: "Automation / QA",
      icon: TestTube,
      skills: [
        "Python",
        "Selenium",
        "pytest",
        "Page Object Model (POM)",
        "API Testing",
        "Test Reporting"
      ]
    },
    {
      title: "Tools / Essentials",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "Chrome DevTools",
        "Postman",
        "VS Code"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Problem solving",
        "Debugging",
        "Clean code mindset",
        "Teamwork"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Skills &</span> Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and ensuring quality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-card group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg mr-3 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["React", "TypeScript", "Tailwind", "Python", "Selenium", "Git", "Framer Motion", "Vite"].map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
