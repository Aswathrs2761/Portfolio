import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      college: "Your University Name",
      year: "2020 - 2024",
      description: "Focused on software development, algorithms, and web technologies. Completed projects in React, Python, and automation testing."
    },
    {
      degree: "Higher Secondary Education",
      college: "Your School Name",
      year: "2018 - 2020",
      description: "Completed with focus on Mathematics and Computer Science fundamentals."
    }
  ];

  return (
    <section id="education" className="py-20 bg-section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm">{edu.year}</p>
                </div>
              </div>
              
              <p className="text-accent font-semibold mb-3">{edu.college}</p>
              <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
