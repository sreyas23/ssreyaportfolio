import React, { useEffect, useRef } from 'react';
import './Projects.css';

import p1Logo from '../assets/p1.png';
import p2Logo from '../assets/p2.png';
import p3Logo from '../assets/p3.webp';
import p4Logo from '../assets/p4.png';
import p5Logo from '../assets/p5.png';
import p6Logo from '../assets/p6.png';

import arrow from '../assets/arrow.svg';

const Projects = () => {
  const projectRefs = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <section id='projects'>
      <div className="projects-container">
        <h2>My Projects</h2>


        <div className="project" ref={(el) => (projectRefs.current[0] = el)}>
          <div className="project-content">
            <div className="project-img">
              <img src={p1Logo} alt="Project 1" />
            </div>
            <div className="project-description-container">
              <p>Developed a real-time cricket shot classification system by extracting images from videos using spectrum analysis, capturing key frames based on shot amplitude, and extracted keypoints using pose estimation with Detectron2 for classification through a CNN.</p>
            </div>
          </div>
          <div className="project-info">
            <p>Cricket Shot Classification with Spectrum-Based Pose Estimation</p>
            <img src={arrow} alt="Project 1 Icon" />
          </div>
        </div>


        <div className="project" ref={(el) => (projectRefs.current[1] = el)}>
          <div className="project-content">
            <div className="project-img">
              <img src={p2Logo} alt="Project 2" />
            </div>
            <div className="project-description-container">
              <p>Developed a full-stack eCommerce platform using MongoDB, Express.js, React.js, Node.js, and Stripe, enabling users to explore, filter, and sort products, manage their cart, and process payments seamlessly. Designed an admin dashboard for efficient product management and order tracking.</p>
            </div>
          </div>
          <div className="project-info">
            <p>Luxe24 - Clothing eCommerce Platform</p>
            <img src={arrow} alt="Project 2 Icon" />
          </div>
        </div>

        <div className="project" ref={(el) => (projectRefs.current[2] = el)}>
          <div className="project-content">
            <div className="project-img">
              <img src={p3Logo} alt="Project 3" />
            </div>
            <div className="project-description-container">
              <p>Developed an end-to-end data pipeline by integrating with the Spotify API for automated data extraction, transformation, and storage on AWS S3, deploying it on AWS Lambda for enhanced efficiency, and establishing analytic tables with AWS Glue and Athena to significantly improve data accessibility and insights.</p>
            </div>
          </div>
          <div className="project-info">
            <p>Spotify End-to-End Data Engineering Project</p>
            <img src={arrow} alt="Project 3 Icon" />
          </div>
        </div>


        <div className="project" ref={(el) => (projectRefs.current[3] = el)}>
          <div className="project-content">
            <div className="project-img">
              <img src={p4Logo} alt="Project 4" />
            </div>
            <div className="project-description-container">
              <p>Developed and trained a deep learning model with OpenCV for facemask detection, integrating sensors for hand sanitizing and temperature checking, along with a motor for door control, all managed by Arduino UNO based on output signals.</p>
            </div>
          </div>
          <div className="project-info">
            <p>Automatic COVID Security System Using CNN</p>
            <img src={arrow} alt="Project 4 Icon" />
          </div>
        </div>


        <div className="project" ref={(el) => (projectRefs.current[4] = el)}>
          <div className="project-content">
            <div className="project-img">
              <img src={p5Logo} alt="Project 5" />
            </div>
            <div className="project-description-container">
              <p>Developed a deep learning system for facial expression recognition using the FER2013 dataset, implementing models like VGG13 and ResNet50. Preprocessed the data and optimized the model, boosting real-time emotion detection accuracy.</p>
            </div>
          </div>
          <div className="project-info">
            <p>Exploring Emotions: Employing Deep Learning for Facial Expression Recognition</p>
            <img src={arrow} alt="Project 5 Icon" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
