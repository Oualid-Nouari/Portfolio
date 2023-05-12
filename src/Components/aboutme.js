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
          Hi there. My name is Oualid, and I'm a junior frontend developer. I started my journey into learning front-end development on January 29, 2022. I started by learning the basics of HTML, CSS, and responsive design from FreeCodeCamp, which gave me the "Responsive Web Design" certification. Also, I have a solid understanding of JavaScript. ReactJs, Redux, and the basics of Typescript—I've created several projects using these technologies, which you can see <a href="#project">here</a>.
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
