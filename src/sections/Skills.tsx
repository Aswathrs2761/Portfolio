import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, TestTube, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend",
      icon: Wrench,
      skills: [
        "Node.js",
        "Express.js"
      ]
    },
    {
      title: "Database",
      icon: TestTube,
      skills: [
        "MongoDB",
        "NoSQL"
      ]
    },
    {
      title: "APIs & Auth",
      icon: Code2,
      skills: [
        "RESTful APIs",
        "JWT Authentication"
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code"
      ]
    },
    {
      title: "Payments & Others",
      icon: Users,
      skills: [
        "Stripe API",
        "Problem Solving",
        "API Integration",
        "Team Collaboration",
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

        {/* Skills list only — matching resume content (no extra badges) */}
      </div>
    </section>
  );
};

export default Skills;
