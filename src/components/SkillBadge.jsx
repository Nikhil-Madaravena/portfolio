import React from 'react';
import '../css/SkillBadge.css';
import { motion } from "framer-motion";

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
      className="skill-badge"
    >
      <span className="skill-text">{skill}</span>
    </motion.div>
  );
};

export default SkillBadge;
