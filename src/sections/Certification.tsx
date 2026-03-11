import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Certification = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="certification" className="py-24 bg-section" ref={ref}>
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
           <span className="text-accent">My</span> Certifications
          </h2>
        </motion.div>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-accent/20 transition">

            <h3 className="text-2xl font-semibold mb-2">
              IITM Pravartak Certified Full Stack Development with AI Tools
            </h3>

            <p className="text-accent font-medium mb-2">
              GUVI Geek Network (IIT Madras Incubated)
            </p>

            <p className="text-foreground/70 mb-6">
              Completed an intensive full-stack development program covering MERN stack,
              REST APIs, authentication, payment integration and AI tools.
            </p>
        
            <div className="flex gap-4 flex-wrap">
              <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent text-sm">
                Issued Feb 2026
              </span>

              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                Grade A
              </span>

              {/* <a
                href="#"
                className="px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition text-sm"
              >
                Verification Available on Request
              </a> */}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Certification;