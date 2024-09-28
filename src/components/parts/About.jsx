import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div id="about" className="about">
      <img className="photo" src="cara.jpg" alt="Dario Colaciuri" />
      <div className="container">
        <p className="text">
          My name is <strong>Dario Colaciuri</strong> and I'm a{" "}
          <strong>frontend developer.</strong>
          <br /> Since childhood, I’ve had an insatiable curiosity for
          computers. Growing up with a computer at home, even one with a
          black-and-white monitor running Windows 3.1, I began exploring early
          web development through Dreamweaver, PHP, and CSS. However, life led
          me down another path: music. I pursued formal studies at the
          "Conservatorio Superior de Música Manuel de Falla" and have dedicated
          over a decade to teaching, researching, and learning with my students,
          discovering a deep passion for pedagogy. Throughout my career in
          music, I never lost touch with technology. I continued to explore and
          work in the field of computing, repairing computers and more recently
          expanding my skills into programming. I’ve taken on freelance
          development projects and am now seeking a more formal position that
          allows me to fully develop my potential as a programmer, combining my
          creativity, technical skills, and passion for learning.
        </p>
        <ul className="links">
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Email"
            href="mailto:dariocolaciuri@gmail.com"
          >
            <i className="bi bi-envelope-at"></i>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
            href="https://github.com/DarioColaciuri"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
            href="https://www.linkedin.com/in/dariocolaciuri/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Resume"
            href="dariocolaciuri_resume.pdf"
          >
            <i className="bi bi-file-earmark-person"></i>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default About;
