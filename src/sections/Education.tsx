import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Commerce",
      college: "St. Joseph's College of Arts and Science",
      year: "2019 - 2022",
      description: "Studied commerce with projects and coursework relevant to business systems and basic programming concepts."
    }
  ];

  const courses = [
    {
      title: "MERN Stack Developer Trainee",
      org: "GUVI (IIT Madras Incubated Company)",
      year: "2025 - 2026",
      bullets: [
        "Completed hands-on training in full-stack development using MERN stack",
        "Built real-world projects using REST APIs, authentication and database design"
      ]
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

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
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

          {courses.map((course, idx) => (
            <motion.div key={idx} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-foreground">{course.title} — <span className="text-muted-foreground text-sm">{course.org} • {course.year}</span></h3>
              <ul className="list-disc list-inside mt-3 text-foreground/80">
                {course.bullets.map((b, bi) => (<li key={bi}>{b}</li>))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
