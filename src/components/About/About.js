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
          Graduated from the Web Developer course at Yandex.Practicum. I decided
          to change the field of activity, because there is a possibility of
          remote work. I chose the profession of Frontend developer because it
          leaves room for creativity, since any program can be written in many
          ways with different approaches. Prefer a job that could bring not only
          benefits, but also help develop my potential, soft skills and hard
          skills. I get great pleasure from the things I do:
          <ul className={styles.ul}>
            <li className={styles.li}>
              - I develop websites and applications;{" "}
            </li>
            <li className={styles.li}>
              - I follow the latest news and technologies from the field of web
              development;{" "}
            </li>
            <li className={styles.li}>
              - I'm constantly trying to improvethe code I write by doing work
              on bugs.{" "}
            </li>
          </ul>
          In my free time from development, I like to go hiking, play
          volleyball, listen to music.
        </p>
      </div>
    </section>
  );
};

export default About;
