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
            <i className="bx bxl-html5" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>HTML</p>
          </div>
          <div>
            <i className="bx bxl-css3" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>CSS</p>
          </div>
          <div>
            <i className="bx bxl-javascript" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>JavaScript</p>
          </div>
          <div>
            <i className="bx bxl-react" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>React</p>
          </div>
          <div>
            <i className="bx bxl-redux" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>Redux</p>
          </div>
          <div>
            <i className="bx bxl-nodejs" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>Node.js</p>
          </div>
          <div>
            <i className="bx bxl-sass" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>Sass</p>
          </div>
          <div>
            <i className="bx bxl-typescript" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>Typescript</p>
          </div>
          <div>
            <i className="bx bxl-git" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>Git</p>
          </div>
          <div>
            <i className="bx bxl-mongodb" id={styles.iconSkills}></i>
            <p className={styles.textTechnologies}>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
