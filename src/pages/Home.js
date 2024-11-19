import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import CustomSection from '../components/CustomSection'; 
import ServicesSection from '../components/ServicesSection';
import { Stats } from '../components/Stats';
import Carousal from '../components/Carousal';
import Team from '../components/Team';
import ClientSlider from '../components/ClientSlider';
// import Loader from '../components/Loader';
function Home() {
  
  return (
    <> 
    {/* <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to JobPlatform</h1>
      <p>Find your dream job in the banking sector.</p>

     }
      
    </motion.div> */}
     {/* <Loader/> */}
     <Carousal/>
     <CustomSection />
     <ServicesSection />

     <Stats/>
     <ClientSlider/>
     {/* <Team/> */}
    </>

  );
}

export default Home;
