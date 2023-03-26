import React, { useState } from "react";
import Aboutme from "./aboutme";
import Header from "./Header";
import Main from "./Main";
import Projects from "./Projects";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Hero = () => {
  const [toTopBtn, setToTopBtn] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 800) {
      setToTopBtn(true);
    } else {
      setToTopBtn(false);
    }
  };
  return (
    <div>
      <Header />
      <Main />
      <Aboutme />
      <Projects />
      <Footer />
      <motion.a
        onClick={() => window.scrollTo({ top: 0 })}
        animate={{ y: toTopBtn ? -120 : 0 }}
        transition={{ type: "tween", duration: 0.4 }}
        className="to-top"
      >
        <i class="fa-solid fa-angles-right"></i>
      </motion.a>
    </div>
  );
};

export default Hero;
