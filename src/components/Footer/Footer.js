import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Copyright &copy; 2023 by Sergey Matrosov | All Rights Reserved.
        </p>
      </div>
      <div className={styles.iconTop}>
        <a className={styles.link} href="#home">
          <i className="bx bx-up-arrow-alt bx-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
