import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoBlack from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const stylesLogo = pathname === "/" ? styles.headerBlack : styles.headerWhite;
  const clickNavigate = () => {
    navigate("/");
  };

  return (
    <header className={stylesLogo}>
      <img
        src={logoBlack}
        className={styles.logo}
        alt="logo"
        onClick={clickNavigate}
      />
      <div className={styles.links}>
        <a href="/about_me" className={styles.link}>
          Обо мне
        </a>
        <a href="/jobs" className={styles.link}>
          Работы
        </a>
        <a href="/contacts" className={styles.link}>
          Связаться
        </a>
      </div>
    </header>
  );
};

export default Header;
