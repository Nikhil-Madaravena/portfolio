import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import heroImage from './assets/hero-img.svg';
import syntaxErrorImage from './assets/Screenshot 2025-03-08 194142.png';
import clinicPingImage from './assets/image.png';
import doodleDelightImage from './assets/Screenshot 2025-03-08 194824.png';
import neoVisionImage from './assets/Screenshot 2025-03-08 195021.png';
import AboutAndEducation from './components/AboutAndEducation';


function App() {
  const projects = [
    {
      title: "SyntaxError",
      description: "Programming Resources Website.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://syntaxerror-hr.netlify.app/",
      image: syntaxErrorImage
    },
    {
      title: "ClinicPing",
      description: "Healthcare management solution",
      tech: ["React", "Node.js", "Globe.gl", "Leaflet.js"],
      link: "https://clinicping-hr.netlify.app/",
      image: clinicPingImage
    },
    {
      title: "DoodleDelight",
      description: "E-commerce website for children's products",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://doodledelight-hr.netlify.app/",
      image: doodleDelightImage
    },
    {
      title: "NeoVision",
      description: "Advanced Space and NEOs visualization project",
      tech: ["Node.js", "React", "Three.js", "Sass"],
      link: "https://neovision-hr.netlify.app/",
      image: neoVisionImage
    }
  ];

  const skills = [
    "C", "Java", "Python", "HTML & CSS", "JavaScript", "Sass", "Tailwind CSS",
    "React.js", "Three.js", "Node.js", "Globe.gl", "Leaflet.js", "Chart.js",
    "Framer Motion", "D3.js","Gsap", 
    "PostgreSQL", "MySQL", "OracleDB", 
    "Git", "GitHub", "Design Patterns", "DSA",
    "VS Code", "Eclipse", "IntelliJ IDEA", "NetBeans",
    "Figma", "Netlify", "Vercel", "Linux", "Windows"
  ]; 

  return (
    <div className="app-container">
      <Navbar />
      <header id="home" className="hero-section">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
        <h1 className="hero-title">Nikhil<br /> Madaravena</h1>
        <p className="hero-subtitle">
          Front-End Developer | Tech Enthusiast | DSA Enthusiast | Open Source Contributor | Startup Enthusiast
        </p>
        <div className="social-icons">
          <a href="https://github.com/Nikhil-Madaravena" className="social-link"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/nikhil-madaravena/" className="social-link"><Linkedin size={24} /></a>
          <a href="mailto:nikhil.madaravena@gmail.com" className="social-link"><Mail size={24} /></a>
        </div>
        </div>
        <div>
        <img
          src={heroImage}
          width="300"
          height="300"
          alt="Developer"
          className="hero-image"
        />
        </div>
      </motion.div>
    </header>

    <AboutAndEducation />


      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} skill={skill} index={index} />
          ))}
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </section>
      <section id="achievements" className="achievements-section">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>NASA Space Apps Challenge Local Nominee</h3>
            <p>National level hackathon conducted at Chandigarh University</p>
          </div>
          <div className="achievement-card">
            <h3>CODE4KITSW Winner</h3>
            <p>C programming competition conducted by technical club KITSW</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;