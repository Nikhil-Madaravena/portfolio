import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import '../css/Footer.css';
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        
        <div className="footer-main">
        <div>
        <h2>Nikhil Madaravena</h2>
        <p>Frontend Developer</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        </div>
        {/* Social Icons */}
        <div className="footer-social">
            <a href="https://github.com/Nikhil-Madaravena" className="social-link"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/nikhil-madaravena/" className="social-link"><Linkedin size={24} /></a>
            <a href="mailto:nikhil.madaravena@gmail.com" className="social-link"><Mail size={24} /></a>
        </div>

        {/* Copyright */}
        <p className="footer-text">© {new Date().getFullYear()} Nikhil Madaravena. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
