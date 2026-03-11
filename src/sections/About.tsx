import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
// import { User } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-section" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="prose prose-lg prose-invert">
                <p className="text-foreground/90 text-lg leading-relaxed">
                  Entry-level MERN Stack Developer trained at GUVI (IIT Madras Incubated Company) with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js and Node.js. Experienced in RESTful APIs, JWT authentication, role-based access control, CRUD operations, Stripe payment integration and Cloudinary.
                </p>

                <p className="text-foreground/90 text-lg leading-relaxed">
                  Strong problem-solving and teamwork skills. Seeking a full-time MERN Developer role in Chennai to contribute to meaningful projects and continue growing as an engineer.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-lg">
                  <p className="text-accent font-semibold text-sm">Location</p>
                  <p className="text-foreground">Available for Remote</p>
                </div>
                <div className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-lg">
                  <p className="text-accent font-semibold text-sm">Status</p>
                  <p className="text-foreground">Open to Opportunities</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
