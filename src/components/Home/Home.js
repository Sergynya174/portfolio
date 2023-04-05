import React from "react";
import styles from "./Home.module.css";
import Foto from "../../images/foto.png";
import MyCV from "../../file/Матросов Сергей Владимирович.pdf";
import { saveAs } from "file-saver";

const Home = () => {
  const downloadFile = () => {
    saveAs(MyCV);
  };
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Hello, It`s Me</h3>
        <h1 className={styles.title}>Sergey Matrosov</h1>
        <h3 className={styles.subtitle}>
          And I`m a <span className={styles.span}>Frontend Developer</span>
        </h3>
        <div className={styles.socialMedia}>
          <a className={styles.iconLink} href="https://t.me/SergoMatrosov174">
            <i className="bx bxl-telegram"></i>
          </a>
          <a className={styles.iconLink} href="https://vk.com/bear_74">
            <i className="bx bxl-vk"></i>
          </a>
          <a
            className={styles.iconLink}
            href="https://www.linkedin.com/mwlite/in/сергей-матросов-96914b240"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a className={styles.iconLink} href="https://github.com/Sergynya174">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <button onClick={downloadFile} className={styles.btn}>
          Download CV
        </button>
      </div>
      <div className={styles.circle}>
        <img className={styles.img} src={Foto} alt="Фото" />
      </div>
    </section>
  );
};

export default Home;
