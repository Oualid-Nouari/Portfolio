import React from "react";
import Profile from "../imgs/pic_png.png";

const Aboutme = () => {
  return (
    <section className="about-me-section" id="about-me">
      <div className="ab-me-leftSide">
        <div className="ab-img-container">
          <img
            className="abm-img"
            src={Profile}
            alt=""
            width="320px"
            style={{ transform: "translateY(6px)" }}
          />
        </div>
      </div>
      <div className="ab-me-rightSide">
        <h1>
          About <span>Me</span>
        </h1>
        <h1>Front-end Developer!</h1>
        <p>
          Hi there! I'm a passionate front-end developer with a keen eye for
          design and user experience. My goal is to bring your website to life
          by creating beautiful and functional front-end interfaces that engage
          and delight your users. With expertise in HTML, CSS, JavaScript, and
          the front-end framework 'React js', I'm equipped to tackle any project and
          bring your vision to reality. Let's work together to build a website
          that truly stands out!
        </p>
        <div className="social-media">
          <a
            href="https://github.com/Oualid-Nouari"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/oualid._.nouari/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/oualid-nouari-b45ba324a/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
