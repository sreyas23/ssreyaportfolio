import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

import LinkedInIcon from "../assets/linkedinc.svg";
import GitHubIcon from "../assets/githubc.svg";
import EmailIcon from "../assets/mailc.svg";
import LocationIcon from "../assets/loc.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1d0t7eb",
        "template_ksm1f2a",
        e.target,
        "YhDMUUnjqOnO9OEQg"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again later.");
        }
      );
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-page">
        <div className="contact-info">
          <p>
            I'm available for challenging opportunities. Feel free to send me a
            message about any job opportunities. You can contact me anytime.
          </p>
          <div className="location">
            <div>
              <img src={LocationIcon} alt="Location" />
            </div>
            <div className="loc">
              <p>SFO, California</p>
            </div>
          </div>
          <div className="social-icons">
            <div className="lin">
              <a
                href="https://www.linkedin.com/in/sreyasiri23/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </div>
            <div className="gb">
              <a
                href="https://github.com/sreyas23?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHubIcon} alt="GitHub" />
              </a>
            </div>
            <div className="mail">
              <a href="mailto:sreyasiri23@gmail.com">
                <img src={EmailIcon} alt="Email" />
              </a>
            </div>
          </div>
        </div>

        <div className="cp">
          <form onSubmit={sendEmail}>
            <label>
              Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter your name")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <label>
              Your Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter a valid email")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <label>
              Subject <span className="required">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter the subject")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <label>
              Write Your Message Here <span className="required">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter your message")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <div className="butt">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

      <hr />
      <footer>Copyright © 2024 SreyaSirivella. All rights reserved.</footer>
    </section>
  );
};

export default Contact;
