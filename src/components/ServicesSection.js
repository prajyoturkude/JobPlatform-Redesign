// ServicesSection.js
import React from 'react';
import '../styles/ServiceSection.css'; 

const ServiceCard = ({ icon, title }) => (
  <div className="service-card">
    <div className="icon-box">
      <i className={`service-icon ${icon}`} aria-hidden="true"></i>
    </div>
    <h3 className="service-title">{title}</h3>
  </div>
);

const ServicesSection = () => (
  <section className="services-section">
     <p class="subheading">Service Category</p>
     <h1 class="main-heading">Our Services</h1>
    <div className="services-container">
      <div className="services-column">
        <ServiceCard icon="tivo ti-ruler-pencil" title="Employee Verification" />
        <ServiceCard icon="tivo ti-ruler-pencil" title="Payroll Services" />
      </div>
      <div className="services-column">
        <ServiceCard icon="tivo ti-import" title="Talent Sourcing" />
        <ServiceCard icon="tivo ti-palette" title="Permanent Recruitment" />
        <ServiceCard icon="tivo ti-marker-alt" title="Training & Development" />
      </div>
      <div className="services-column">
        <ServiceCard icon="tivo ti-camera" title="Recruitment Process Outsourcing" />
        <ServiceCard icon="tivo ti-marker-alt" title="Staffing Solutions" />
      </div>
    </div>
  </section>
);

export default ServicesSection;
