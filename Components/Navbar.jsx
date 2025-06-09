import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import hamburgerIcon from "../assets/hamburger.svg";
import closeIcon from "../assets/close.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "certifications",
        "contact",
      ];
      const threshold = 0.3;

      // When the page is at the top, set active section to 'home'
      if (window.pageYOffset === 0) {
        setActiveSection("home");
        return;
      }

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { top, height } = sectionElement.getBoundingClientRect();
          if (
            top <= window.innerHeight * threshold &&
            top + height >= window.innerHeight * threshold
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu when clicking outside of the navbar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  // Scroll to the section and close the mobile menu if open
  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    // Default offset for the fixed navbar
    let yOffset = -75;
    // Adjust offset for sections that have extra gap at the top
    if (section === "about" || section === "skills") {
      yOffset = -65;
    }
    if (sectionElement) {
      const y =
        sectionElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav ref={navRef} className="Nav-bar">
      {/* Logo on the left */}
      <div className="logo">
        <span className="symbol">&lt;/</span>
        <span className="text">ss</span>
        <span className="symbol">&gt;</span>
      </div>

      {/* Hamburger icon for mobile */}
      <div
        className="menu-icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <img
          src={mobileMenuOpen ? closeIcon : hamburgerIcon}
          alt="Menu"
          className="hamburger-icon"
        />
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </li>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About Me
        </li>
        <li
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className={activeSection === "experience" ? "active" : ""}
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className={activeSection === "certifications" ? "active" : ""}
          onClick={() => scrollToSection("certifications")}
        >
          Certifications
        </li>
        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
