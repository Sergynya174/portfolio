import React from "react";
import styles from "./About.module.css";
import Foto from "../../images/foto.png";

const About = ({ t }) => {
  return (
    <section className={styles.about} id="about_me">
      <div className={styles.circle}>
        <img className={styles.img} src={Foto} alt="Фото" />
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t("about")} <span className={styles.span}>{t("me")}</span>
        </h2>
        <h3 className={styles.subtitle}>{t("job")}</h3>
        <p className={styles.text}>
          {t("firstParagraph")}
          <ul className={styles.ul}>
            <li className={styles.li}>
              {t("firstLi")}
              {""}
            </li>
            <li className={styles.li}>{t("secondLi")} </li>
            <li className={styles.li}>{t("thirdLi")} </li>
          </ul>
          {t("lastParagraph")}
        </p>
      </div>
    </section>
  );
};

export default About;
