import { motion } from "framer-motion";
import "../css/AboutAndEducation.css";
import profileImage from "../assets/undraw_instant-analysis_idb3.svg";

const AboutAndEducation = () => {
  return (
    <section className="about-education">
      <div className="container">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="image-container"
        >
          <img src={profileImage} alt="Profile" className="profile-image" />
        </motion.div>

        {/* Right Section - About Me & Education */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-container"
        >
          <h2 className="title">I'm Nikhil, <br /> a Frontend Developer</h2>
          <p className="description">
            Passionate problem solver and tech enthusiast, deeply fascinated by programming languages and algorithms. 
            I thrive on crafting seamless user experiences and developing impactful web solutions that push boundaries.
          </p>

          <div className="education">
            <h3 className="education-title">Education</h3>
            <p><strong>B-TECH in Computer Science and Engineering</strong><br />Kakatiya Institute of Technology and Science, Warangal (2023-2027)</p>
            <p><strong>Intermediate</strong><br />SR JR College (2021-2023) - 96.1% Aggregate</p>
            <p><strong>Schooling</strong><br />Warangal Public School (2008-2021) - 82% Aggregate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAndEducation;
