import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import Vamsi_photo from '../assets/Vamsi.jpeg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import mail from '../assets/mail.png';
const Home = () => {

const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
  return (
  <div className ='complete-home'>
    <div className='Home'>
      <div className='home-content'>
        <div className='intro'>
          <h1>
            <span>Hi, I'm</span> <span className='full-name'>Vamsikrishna Jayaraman</span>
          </h1>
        </div>
        <div className='full-stack'>
          <h1>
            <Typewriter
              words={['Full Stack Developer.', 'Machine Learning Engineer.']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <div className='home-button-div'>
          <button className='home-button'>My Resume</button>
          <button onClick={scrollToAbout} style={{ cursor: 'pointer' }} className='home-button'>About Me</button>
        </div>
      </div>

      <div className='photo'>
        <img src={Vamsi_photo} alt="Vamsikrishna Jayaraman" />
      </div>
    </div>

    <div className = 'tagline'>
        <h1>Code. <span className='full-name'>Coffee.</span> Repeat.</h1>

    </div>

    <div className='profiles'>

        <div className='lin'>
        <img src={linkedin} alt="lin"/>
        </div>

        <div className='gb'>
        <img src={github} alt="gb"/>
        </div>

        <div className='mail'>
        <img src={mail} alt="mail"/>
        </div>

    </div>

   </div>
  );
};

export default Home;
