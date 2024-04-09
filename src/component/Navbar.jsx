import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import sarad from "../assets/sarad.jpeg";
import "../scss/comp/Navbar.scss";

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ y: isVisible ? 0 : -100 });
  }, [isVisible, controls]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={controls}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="navbar"
      >
        <div className="container">
          <a href="#" className="logo">
            <img src={sarad} alt="" />
          </a>
          <ul className={menuOpen ? "menu active" : "menu"}>
            <li>
              <a href="/linked.com">
                <FaFacebook />
              </a>
            </li>

            <li>
              <a href="/twiter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/facebook.com">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>

      {menuOpen && (
        <div className="overlay">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
