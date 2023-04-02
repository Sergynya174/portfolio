import React from "react";
import styles from "./About.module.css";
import Foto from "../../images/foto.png";

const About = () => {
  return (
    <section className={styles.about} id="about_me">
      <div>
        <img className={styles.img} src={Foto} alt="Фото" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          About <span className={styles.span}>Me</span>
        </h2>
        <h3 className={styles.subtitle}>Frontend Developer!</h3>
        <p className={styles.text}>hello</p>
        <a href="#" className={styles.btn}>
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
