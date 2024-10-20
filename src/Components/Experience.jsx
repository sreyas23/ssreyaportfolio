import React, { useState } from 'react';
import './Experience.css';

import youroLogo from '../assets/youro.png';
import tcsLogo from '../assets/tcs.png';

import javaLogo from '../assets/java.svg';
import springLogo from '../assets/spring.svg';
import reactLogo from '../assets/react.svg';
import awsLogo from '../assets/aws.svg';
import mysqlLogo from '../assets/mysql.svg';
import figmaLogo from '../assets/figma.svg';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jenkinsLogo from '../assets/jenkins.svg';

const Experience = () => {

  const [isYouroExpanded, setYouroExpanded] = useState(false);
  const [isTcsExpanded, setTcsExpanded] = useState(false);


  const [youroClicked, setYouroClicked] = useState(false);
  const [tcsClicked, setTcsClicked] = useState(false);

  return (
    <section id="experience">
      <h1 className="experience-header"> My Experience</h1>
      <div className='experience-container'>

        <div className="company-container">
          <div className="company-header">
           <p className="company-logo" style={{ color: '#9CB189', fontSize: '28px', fontFamily: 'Comfortaa' }}>youro</p>
            <h4 className="job-title">Full-Stack Engineer</h4>
             <p style={{ color: '#999999', fontSize: '14px', paddingLeft: '0.75%' }}>[August 2024 - Current]</p>
            <div className="tech-stack">
              <img src={javaLogo} alt="Java" className="tech-elogo" />
              <img src={springLogo} alt="Spring Boot" className="tech-elogo" />
              <img src={reactLogo} alt="React" className="tech-elogo" />
              <img src={mysqlLogo} alt="MySQL" className="tech-elogo" />
              <img src={figmaLogo} alt="Figma" className="tech-elogo" />
              <img src={htmlLogo} alt="HTML" className="tech-elogo" />
              <img src={cssLogo} alt="CSS" className="tech-elogo" />
            </div>
          </div>

          <div className="company-details">
            <div className="points-container">
              <ul className="points">
                <li>Designed and developed a healthcare platform connecting urologists and patients for streamlined diagnosis and communication.</li>
                <li>Created a dynamic form management system to enhance diagnostic accuracy by incorporating customized follow-up questions tailored to patient responses.</li>
                {isYouroExpanded && (
                  <>
                    <li>Implemented a real-time chat feature using WebSockets to enable smooth communication between doctors and patients, featuring message delivery notifications and read receipts.</li>
                    <li>Integrated the Google Meet API for virtual consultations and working on pharmacy integration for seamless e-prescriptions.</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="view-more-container">
            <button
              className={`view-more-button ${youroClicked ? 'clicked' : ''}`}
              onClick={() => {
                setYouroExpanded(!isYouroExpanded);
                setYouroClicked(!youroClicked);
              }}
            >
              {isYouroExpanded ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>


        <div className="company-container">
          <div className="company-header">
            <img src={tcsLogo} alt="TCS" className="company-logo" />
            <h4 className="job-title">System Engineer</h4>
                        <p style={{ color: '#999999', fontSize: '14px', paddingLeft: '0.75%' }}>[May 2021 - Jan 2023]</p>
            <div className="tech-stack">
              <img src={javaLogo} alt="Java" className="tech-elogo" />
              <img src={springLogo} alt="Spring Boot" className="tech-elogo" />
              <img src={reactLogo} alt="React" className="tech-elogo" />
              <img src={awsLogo} alt="AWS" className="tech-elogo" />
              <img src={jenkinsLogo} alt="Jenkins" className="tech-elogo" />
            </div>
          </div>

          <div className="company-details">
            <div className="points-container">
              <ul className="points">
                <li>Engineered scalable, high-performance applications using Java 14/11 with Spring Boot for backend and React for dynamic front-end solutions.</li>
                <li>Designed a robust microservices architecture, creating secure REST APIs to facilitate seamless data interchange across platforms.</li>
                {isTcsExpanded && (
                  <>
                    <li>Optimized AWS infrastructure by implementing AWS Lambda for real-time data processing, ensuring responsive and reliable application performance.</li>
                    <li>Streamlined CI/CD processes with Jenkins, enhancing deployment speed and reliability, achieving a 25% reduction in deployment time.</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="view-more-container">
            <button
              className={`view-more-button ${tcsClicked ? 'clicked' : ''}`}
              onClick={() => {
                setTcsExpanded(!isTcsExpanded);
                setTcsClicked(!tcsClicked);
              }}
            >
              {isTcsExpanded ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
