import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
            const threshold = 0.3;

            if (window.pageYOffset === 0) {
                setActiveSection('home');
                return;
            }

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const sectionTop = sectionElement.getBoundingClientRect().top;
                    const sectionHeight = sectionElement.getBoundingClientRect().height;


                    if (sectionTop <= window.innerHeight * threshold && sectionTop + sectionHeight >= window.innerHeight * threshold) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSection = (section) => {
        const sectionElement = document.getElementById(section);
        const yOffset = -85;
        const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <div className='Nav-bar'>

            <ul className="nav-menu">
                <li
                    className={activeSection === 'home' ? 'active' : ''}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Home
                </li>
                <li
                    className={activeSection === 'about' ? 'active' : ''}
                            onClick={scrollToAbout}
                            style={{ cursor: 'pointer' }}
                >
                    About Me
                </li>
                <li
                    className={activeSection === 'skills' ? 'active' : ''}
                    onClick={() => scrollToSection('skills')}
                    style={{ cursor: 'pointer' }}
                >
                    Skills
                </li>
                <li
                    className={activeSection === 'experience' ? 'active' : ''}
                    onClick={() => scrollToSection('experience')}
                    style={{ cursor: 'pointer' }}
                >
                    Experience
                </li>
                <li
                    className={activeSection === 'projects' ? 'active' : ''}
                    onClick={() => scrollToSection('projects')}
                    style={{ cursor: 'pointer' }}
                >
                    Projects
                </li>
                <li
                className={activeSection === 'contact' ? 'active' : ''}
                                    onClick={() => scrollToSection('contact')}
                                    style={{ cursor: 'pointer' }}

                >Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;
