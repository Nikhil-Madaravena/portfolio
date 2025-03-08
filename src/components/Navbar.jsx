import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Skills", "Projects", "Achievements", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.a
          href="#"
          className="navbar-logo"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <span className="logo-gradient">Nikhil Madaravena</span>
        </motion.a>

        {/* Desktop Navigation - Visible Only on Large Screens */}
        <div className="navbar-links hidden md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="navbar-link"
              whileHover={{ scale: 1.12, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
