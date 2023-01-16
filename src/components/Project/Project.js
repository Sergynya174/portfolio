import React from "react";
import styles from "./Project.module.css";
import { project } from "../../utils/";

const Project = () => {
  return (
    <ul className={styles.projects}>
      {project.map((item, index) => {
        return (
          <li className={styles.project} key={index}>
            <a href={item.link} className={styles.link}>
              <img src={item.img} alt="Project img" className={styles.img} />
              <h3 className={styles.title}>{item.title}</h3>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Project;
