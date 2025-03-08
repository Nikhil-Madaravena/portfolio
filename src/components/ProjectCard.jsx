import React from 'react';
import { motion } from "framer-motion";
import '../css/ProjectCard.css';

const ProjectCard = ({ title, description, tech, link, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="project-card"
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-image-overlay" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((item) => (
            <span key={item} className="project-tech-badge">{item}</span>
          ))}
        </div>
        <a href={link} className="project-link">
          View Project 
          <svg
            className="project-link-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="14"  /* Adjusted for small size */
            height="14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
