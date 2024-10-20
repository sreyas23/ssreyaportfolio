import React from 'react';
import './About.css';
import ub from '../assets/ub.png';
import anna from '../assets/annauniv.png';

const About = () => {

  return (
    <section id="about">
      <div className="About-page">
        <div className='about-me'>
          <h1 className='about-me-h1'>About Me</h1>
        </div>

        <div className='about-content'>
          <div className='about-me-p'>
            <h2 className= 'hola' style={{ color: '#E64833'}}>Hola,</h2>
            <p>
              I'm a passionate Full Stack Developer with 3 years of professional experience in the field. My journey in tech has led me to design and develop cutting-edge full-stack systems that not only optimize performance but also enhance user experiences.
            </p>
            <p>
              I thrive on challenges and love exploring new technologies to stay ahead of the curve. Whether it’s diving into the latest frameworks or brainstorming creative solutions, I’m always eager to learn and grow.
            </p>
            <p>
              When I'm not coding, you can find me trying out different coffees or playing badminton. I believe that the perfect cup of coffee fuels creativity, while badminton keeps me active and sharp, preparing me for the next big project!
            </p>
          </div>


          <div className='education'>
            <div className='education-item'>
              <img src={ub} alt="University 1 Logo" className='university-logo1' />
              <div className='education-details'>
                <h2>State University of New York at Buffalo</h2>
                <p><strong>Degree: </strong> Master's in Computer Science</p>
                <p><strong>Related Coursework: </strong> Analysis of Algorithms, Machine Learning, Deep Learning, Big Data, Computer Vision and Image Processing, Operating Systems</p>
                <p><strong>CGPA: </strong> [ 3.8 / 4.0 ]</p>
              </div>
            </div>

            <div className='education-item'>
              <img src={anna} alt="University 2 Logo" className='university-logo2' />
              <div className='education-details'>
                <h2>Anna University</h2>
                <p><strong >Degree: </strong> B.E. Electronics and Communications Engineering</p>
                <p><strong>Related Coursework: </strong>Python programming, Cloud computing, Data Structures and Algorithms, Artificial intelligence, Computer architecture.
</p>
                <p><strong>CGPA: </strong> [ 8.4 / 10 ]</p>
              </div>
            </div>
          </div>

        </div>

        <div className='exp'>
                          <h2> <span style={{ color: '#E64833'}} >3+</span> Years of Experience</h2>
                   </div>
      </div>
    </section>
  );
};

export default About;
