import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Clients.css';

function Clients() {
  return (
    <motion.div
      className="clients"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Our Clients</h2>
      <p>We work with top recruiters in the banking sector.</p>
    </motion.div>
  );
}

export default Clients;
