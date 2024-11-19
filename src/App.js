import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Clients from './pages/Clients';
import { div } from 'framer-motion/client';
import { BsWhatsapp } from 'react-icons/bs';

import WhatsAppButton from './components/WhatsappButton';
import JobSeeker from './pages/JobSeeker';
import BusinesstieUp from './pages/BusinesstieUp';

import Team from './components/Team';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/JobSeeker" element={<JobSeeker/>}/>
        <Route path="/businesstieup" element={<BusinesstieUp/>}/>
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
    
    </>
  );
}

export default App;
