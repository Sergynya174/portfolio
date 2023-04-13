import React from "react";
import styles from "./About.module.css";
import Foto from "../../images/foto.png";

const About = () => {
  return (
    <section className={styles.about} id="about_me">
      <div className={styles.circle}>
        <img className={styles.img} src={Foto} alt="Фото" />
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          About <span className={styles.span}>Me</span>
        </h2>
        <h3 className={styles.subtitle}>Frontend Developer</h3>
        <p className={styles.text}>
          I like that the profession of Frontend developer leaves room for
          creativity, because any program can be written in many ways with
          different approaches. I decided to change the field of activity,
          because there is a possibility of remote work. I watch several blogs
          on youtube about web development "Ulbi TV" and “WAYUP & Andrey
          Gavrilov", I read the book “JavaScript Complete Guide". I like hiking,
          playing volleyball, listening to music.
        </p>
      </div>
    </section>
  );
};

export default About;
