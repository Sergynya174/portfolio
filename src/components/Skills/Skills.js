import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>
          My <span className={styles.span}>Skills</span>
        </h2>
        <div className={styles.info}>
          <i className="bx bx-code-alt" id={styles.icon}></i>
          <h3 className={styles.subtitle}>Web Developmen</h3>
          <p className={styles.text}>hello</p>
          <a href="#" className={styles.btn}>
            Read More
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div>
            <i className="bx bxl-html5 bx-lg"></i>
            <p className={styles.text}>HTML</p>
          </div>
          <div>
            <i className="bx bxl-css3 bx-lg"></i>
            <p className={styles.text}>CSS</p>
          </div>
          <div>
            <i className="bx bxl-javascript bx-lg"></i>
            <p className={styles.text}>JavaScript</p>
          </div>
          <div>
            <i className="bx bxl-react bx-lg"></i>
            <p className={styles.text}>React</p>
          </div>
          <div>
            <i className="bx bxl-redux bx-lg"></i>
            <p className={styles.text}>Redux</p>
          </div>
          <div>
            <i className="bx bxl-nodejs bx-lg"></i>
            <p className={styles.text}>Node.js</p>
          </div>
          <div>
            <i className="bx bxl-sass bx-lg"></i>
            <p className={styles.text}>Sass</p>
          </div>
          <div>
            <i className="bx bxl-typescript bx-lg"></i>
            <p className={styles.text}>Typescript</p>
          </div>
          <div>
            <i className="bx bxl-git bx-lg"></i>
            <p className={styles.text}>Git</p>
          </div>
          <div>
            <i className="bx bxl-mongodb bx-lg"></i>
            <p className={styles.text}>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
