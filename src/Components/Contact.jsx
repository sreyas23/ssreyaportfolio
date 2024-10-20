import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';
import EmailIcon from '../assets/mail.png';
import LocationIcon from '../assets/location.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1d0t7eb',
        'template_ksm1f2a',
        e.target,
        'YhDMUUnjqOnO9OEQg'
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again later.");
        }
      );
  };

  return (
    <section id='contact'>
      <h2>Get In Touch</h2>
      <div className="contact-page">
        <div className="contact-info">
          <p>
            I'm available for full-time opportunities. Feel free to send me a message about any job opportunities. You can contact me anytime.
          </p>
          <div className="location">
            <div>
              <img src={LocationIcon} alt="Location" />
            </div>
            <div className='loc'>
              <p>Buffalo, New York</p>
            </div>
          </div>
          <div className="social-icons">
            <div className="lin">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </div>
            <div className="gb">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={GitHubIcon} alt="GitHub" />
              </a>
            </div>
            <div className="mail">
              <a href="mailto:youremail@example.com">
                <img src={EmailIcon} alt="Email" />
              </a>
            </div>
          </div>
        </div>
        <div className='cp'>
          <form onSubmit={sendEmail}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <label>Write Your Message Here</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
            <div className='butt'>
              <button type="submit">Submit Now</button>
            </div>
          </form>
        </div>
      </div>

      <hr/>
      <footer>
        Copyright © 2024 Vamsikrishna. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
