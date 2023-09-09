import React from "react";
import styles from "./Projects.module.css";
import KiberGid from "../../images/kibergid.jpg";
import Chat from "../../images/chat.jpg";
import Mesto from "../../images/mesto.jpg";
import Travel from "../../images/travel.jpg";
import Parking from "../../images/parking.jpg";
import Weather from "../../images/weather.jpg";

const Projects = ({ t }) => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>
        {t("latest")} <span className={styles.span}>{t("projects")}</span>
      </h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <img className={styles.img} src={KiberGid} alt="Фото" />
          <div className={styles.layer}>
            <h4 className={styles.subtitle}>{t("Kibergid")}</h4>
            <p className={styles.text}>{t("KibergidText")}</p>
            <a className={styles.link} href="https://kibergid.ru/">
              <i className="bx bx-link-external" id={styles.icon}></i>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} src={Chat} alt="Фото" />
          <div className={styles.layer}>
            <h4 className={styles.subtitle}>{t("Chat")}</h4>
            <p className={styles.text}>{t("ChatText")}</p>
            <a
              className={styles.link}
              href="https://luminous-lebkuchen-c842a3.netlify.app/"
            >
              <i className="bx bx-link-external" id={styles.icon}></i>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} src={Mesto} alt="Фото" />
          <div className={styles.layer}>
            <h4 className={styles.subtitle}>{t("Mesto")}</h4>
            <p className={styles.text}>{t("MestoText")}</p>
            <a
              className={styles.link}
              href="https://sergynya174.github.io/react-mesto-auth/"
            >
              <i className="bx bx-link-external" id={styles.icon}></i>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} src={Travel} alt="Фото" />
          <div className={styles.layer}>
            <h4 className={styles.subtitle}>{t("Travel")}</h4>
            <p className={styles.text}>{t("TravelText")}</p>
            <a
              className={styles.link}
              href="https://sergynya174.github.io/russian-travel/"
            >
              <i className="bx bx-link-external" id={styles.icon}></i>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} src={Parking} alt="Фото" />
          <div className={styles.layer}>
            <h4 className={styles.subtitle}>{t("Parking")}</h4>
            <p className={styles.text}>{t("ParkingText")}</p>
            <a
              className={styles.link}
              href="https://6473407ec2068c2ce981ec3f--genuine-sundae-d5fa9f.netlify.app/"
            >
              <i className="bx bx-link-external" id={styles.icon}></i>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <img className={styles.img} src={Weather} alt="Фото" />
          <div className={styles.layer}>
            <h4 className={styles.subtitle}>{t("Weather")}</h4>
            <p className={styles.text}>{t("WeatherText")}</p>
            <a
              className={styles.link}
              href="https://sergynya174.github.io/weather-vue/"
            >
              <i className="bx bx-link-external" id={styles.icon}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
