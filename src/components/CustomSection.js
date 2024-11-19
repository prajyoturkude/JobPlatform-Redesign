// src/components/CustomSection.js
import React from 'react';
import '../styles/Section.css'; // Make sure to import the CSS for styling
import { Link } from 'react-router-dom';

const CustomSection = () => {
  return (
    <section className="custom-section">
      <div className="elementor-container">
        {/* Job Seeker Section */}
        <div className="elementor-column">
          <div className="elementor-widget-container">
            <div className="services-part">
              <div className="services-icon">
                <img
                  src="https://cdn-ikplgid.nitrocdn.com/CBnPWTxXvlQldqPwhUtLUzGDtuHrPyuF/assets/images/optimized/rev-1b4aa66/www.careercomfort.co.in/wp-content/uploads/2021/10/new-i-4.png"
                  alt="Job Seeker"
                  className="main-img"
                />
              </div>
              <div className="services-title">
                <h3 className="title">
                  <a href="jobseekerform.html">Job Seeker</a>
                </h3>
              </div>
              <p className="services-txt">Candidate looking for Jobs</p>
              <div className="services-btn-part">
                <a className="services-btn icon-after" href="JobSeeker.js">
                  {/* <span className="btn_text">Click now</span> */}
                  <Link to={"/JobSeeker"}>CLick now</Link>
                  <i className="fa fa-angle-right"></i>
                </a>
                {/* <Link to={"/JobSeeker.js"}> Learn More</Link>  */}
              </div>
            </div>
          </div>
        </div>

        {/* Business Tie-Up Section */}
        <div className="elementor-column">
          <div className="elementor-widget-container">
            <div className="services-part">
              <div className="services-icon">
                <img
                  src="https://cdn-ikplgid.nitrocdn.com/CBnPWTxXvlQldqPwhUtLUzGDtuHrPyuF/assets/images/optimized/rev-1b4aa66/www.careercomfort.co.in/wp-content/uploads/2021/10/new-i-1.png"
                  alt="Business Tie Up"
                  className="main-img"
                />
              </div>
              <div className="services-title">
                <h3 className="title">
                  <a href="business.html">Business Tie up</a>
                </h3>
              </div>
              <p className="services-txt">Employers looking for Candidates</p>
              <div className="services-btn-part">
                <a className="services-btn icon-after" href="BusinesstieUp.js">
                  {/* <span className="btn_text">Click now</span> */}
                  <Link to={"/JobSeeker"}>CLick now</Link>
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
