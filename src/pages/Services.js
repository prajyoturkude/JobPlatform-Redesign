import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

function Services() {
  return (
    <motion.div
      className="services"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2>Our Services</h2>
      <section className="services-description">
        <p>
          In today’s world, it is very challenging for freshers to find a job even with good academic records. We have also seen experienced professionals facing difficulties in securing a satisfactory job. This is where we step in—not only as a helping hand to candidates searching for jobs but also as a pillar for organizations seeking the right talent to secure their company’s future. 
        </p>
        <p>
          We have corporate tie-ups with small, medium, and large enterprises, and with our extensive range of options, we cater to the needs of every job-seeking candidate. We provide the best suitable jobs to both freshers and experienced professionals based on their educational background and capabilities.
        </p>
      </section>
     
    </motion.div>
  );
}

export default Services;
