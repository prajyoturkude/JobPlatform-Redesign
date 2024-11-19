import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/Navbar.css';

function Navbar() {
  // State to toggle the menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the menu on and off
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={'/'}>
        <img src='/jobplatformlogo.png' className='w-[150px] max-w-full object-cover' alt=''/></Link>
        {/* <Link to="/">JobPlatform</Link> */}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle icons */}
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/clients" onClick={toggleMenu}>Clients</Link></li>
        <li><Link to="/contactus" onClick={toggleMenu}>ContactUs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
