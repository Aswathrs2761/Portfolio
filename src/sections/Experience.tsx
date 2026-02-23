import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Code } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: Code,
      title: "React Development Projects",
      organization: "Self-Learning & Practice",
      period: "2023 - Present",
      description: "Built multiple React applications focusing on component architecture, state management, and modern best practices. Developed responsive UIs with Tailwind CSS.",
      tags: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      icon: Award,
      title: "Automation Testing Framework",
      organization: "Personal Project",
      period: "2023 - Present",
      description: "Created a comprehensive automation testing framework using Selenium and Python. Implemented Page Object Model and pytest for maintainable test suites.",
      tags: ["Python", "Selenium", "pytest"]
    },
    {
      icon: BookOpen,
      title: "Frontend Development Course",
      organization: "Online Learning Platform",
      period: "2023",
      description: "Completed comprehensive frontend development courses covering HTML, CSS, JavaScript, React, and modern web development practices.",
      tags: ["HTML/CSS", "JavaScript", "React"]
    },
    {
      icon: BookOpen,
      title: "Automation Testing Certification",
      organization: "Online Learning Platform",
      period: "2023",
      description: "Completed automation testing courses focusing on Selenium WebDriver, Python programming, and test automation best practices.",
      tags: ["Selenium", "Python", "Testing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>

            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-12 ${isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
                >
                  <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 bg-accent rounded-full border-4 border-background z-10"></div>

                    <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-16' : 'md:ml-16'} flex-1`}>
                      <div className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <Icon className="text-accent" size={24} />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        </div>
                        
                        <p className="text-accent font-semibold mb-1">{exp.organization}</p>
                        <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                        <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                        
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                          {exp.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
