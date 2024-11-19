import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <>
      <motion.div
        className="about-us"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 60 }}
      >
        <h2>About Us</h2>
        <p>
          JobPlatform is a recruitment agency specializing in reducing clutter and streamlining the manpower search for companies, regardless of size. We provide end-to-end hiring solutions, acting as a platform that bridges the gap between leading companies and career aspirants. Our expertise positions us as a reliable link between companies offering jobs in various fields and job seekers, guiding them toward promising career opportunities.
        </p>
        <p>
          We offer tailored solutions for different needs, serving both employers and prospective candidates with dedication.
        </p>
        <h3 className="tagline">
          Our tagline: <span>“One Platform Search for Job Seekers & Employers”</span>
        </h3>
        <section className="additional-info">
          <p>
            We do not charge a single penny to any candidate for placement. Our services are totally free to candidates. Our recruiters are known for going the extra mile in supporting candidates in choosing the correct career path for themselves. Our support is available from the time we receive a resume until the candidate is successfully placed and happily working.
          </p>
          <p>
            We are blessed with an extremely passionate, dedicated, and experienced team, of which we are immensely proud! Our team of headhunters is strong and capable of sourcing people for any profile in any industry or domain within a short timeframe.
          </p>
          <p>
            With our expertise and knowledge, we thoroughly evaluate every individual resume and match them as per their credentials. We also ensure complete confidentiality on behalf of the company and the candidate during the processing of profiles as required.
          </p>
          <p>
            If you are an employer, JobPlatform can match your expectations by providing competent personnel who meet your organization’s needs. If you are a candidate, we open a world of executive opportunities to help achieve your career goals. JobPlatform is a reputed consultancy firm, known for our unparalleled and exemplary services.
          </p>
        </section>
      </motion.div>
    </>
  );
}

export default AboutUs;
