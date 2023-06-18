import React from "react";
import styles from "./Projects.module.css";
import { Images } from "../../utils/utils";

const Projects = ({ t }) => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>
        {t("latest")} <span className={styles.span}>{t("projects")}</span>
      </h2>
      <div className={styles.container}>
        {Images.map((item, index) => {
          return (
            <div className={styles.box} key={index}>
              <img className={styles.img} src={item.image} alt="Фото" />
              <div className={styles.layer}>
                <h4 className={styles.subtitle}>{item.name}</h4>
                <p className={styles.text}>{item.text}</p>
                <a className={styles.link} href={item.link}>
                  <i className="bx bx-link-external" id={styles.icon}></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
