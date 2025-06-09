import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import linkedin from "../assets/linkedinc.svg";
import sreya_photo from "../assets/pp (2).jpg";
import github from "../assets/githubc.svg";
import mail from "../assets/mailc.svg";
const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const headerOffset = 70; // Adjust this to your header's height
      const elementPosition =
        aboutSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="complete-home">
      <div className="Home">
        <div className="home-content">
          <div className="intro">
            <h1>
              <span>Hi, I'm</span>{" "}
              <span className="full-name">Sreya Sirivella</span>
            </h1>
          </div>
          <div className="full-stack">
            <h1>
              <Typewriter
                words={["Data Analyst", "Business Analyst"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div className="home-button-div">
            <a
              href="https://drive.google.com/file/d/1d-hDNQAy88fYDfTupqOF1cdVyniohTRs/view?usp=drive_link"
              target="_blank"
            >
              <button className="home-button">My Resume</button>
            </a>
            <button
              onClick={scrollToAbout}
              style={{ cursor: "pointer" }}
              className="home-button"
            >
              About Me
            </button>
          </div>

          <div className="tagline">
            <h1 style={{ fontFamily: '"Lucida Calligraphy", cursive' }}>
              “Data is <span style={{ color: "#009dffaa" }}>power</span>”
            </h1>
          </div>
        </div>

        <div className="photo">
          <img classname="my_photo" src={sreya_photo} alt="Sreya Sirivella" />

          <div className="profiles">
            <div className="lin">
              <a
                href="https://www.linkedin.com/in/sreyasiri23/"
                target="_blank"
              >
                <img src={linkedin} alt="lin" />
              </a>
            </div>

            <div className="gb">
              <a href="https://github.com/sreyas23" target="_blank">
                <img src={github} alt="gb" />
              </a>
            </div>

            <div className="mail">
              <a href="mailto:sreyasiri23@gmail.com" target="_blank">
                <img src={mail} alt="mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
