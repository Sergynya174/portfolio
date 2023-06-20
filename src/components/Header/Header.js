import { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensios";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = ({ t, i18n }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const location = useLocation();

  const clickOpenNavbar = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        {t("logo")}
      </a>
      {width < 768 ? (
        isOpen ? (
          <div>
            <i
              onClick={clickOpenNavbar}
              className="bx bx-x"
              id={styles.menu}
            ></i>
            <nav className={styles.navbar}>
              <div>
                <a
                  className={
                    location.hash === "home" ? styles.linkColor : styles.link
                  }
                  href="#home"
                  onClick={clickOpenNavbar}
                >
                  {t("Home")}
                </a>
                <a
                  className={
                    location.hash === "about_me"
                      ? styles.linkColor
                      : styles.link
                  }
                  href="#about_me"
                  onClick={clickOpenNavbar}
                >
                  {t("About")}
                </a>
                <a
                  className={
                    location.hash === "skills" ? styles.linkColor : styles.link
                  }
                  href="#skills"
                  onClick={clickOpenNavbar}
                >
                  {t("Skills")}
                </a>
                <a
                  className={
                    location.hash === "projects"
                      ? styles.linkColor
                      : styles.link
                  }
                  href="#projects"
                  onClick={clickOpenNavbar}
                >
                  {t("Projects")}
                </a>
                <a
                  className={
                    location.hash === "contact" ? styles.linkColor : styles.link
                  }
                  href="#contact"
                  onClick={clickOpenNavbar}
                >
                  {t("Contact")}
                </a>
              </div>
              {i18n.resolvedLanguage === "en" ? (
                <button
                  onClick={() => changeLanguage("ru")}
                  className={styles.language}
                >
                  Ru
                </button>
              ) : (
                <button
                  onClick={() => changeLanguage("en")}
                  className={styles.language}
                >
                  En
                </button>
              )}
            </nav>
          </div>
        ) : (
          <i
            onClick={clickOpenNavbar}
            className="bx bx-menu"
            id={styles.menu}
          ></i>
        )
      ) : (
        <nav className={styles.navbar}>
          <a
            className={
              location.hash === "home" ? styles.linkColor : styles.link
            }
            href="#home"
            onClick={clickOpenNavbar}
          >
            {t("Home")}
          </a>
          <a
            className={
              location.hash === "about_me" ? styles.linkColor : styles.link
            }
            href="#about_me"
            onClick={clickOpenNavbar}
          >
            {t("About")}
          </a>
          <a
            className={
              location.hash === "skills" ? styles.linkColor : styles.link
            }
            href="#skills"
            onClick={clickOpenNavbar}
          >
            {t("Skills")}
          </a>
          <a
            className={
              location.hash === "projects" ? styles.linkColor : styles.link
            }
            href="#projects"
            onClick={clickOpenNavbar}
          >
            {t("Projects")}
          </a>
          <a
            className={
              location.hash === "contact" ? styles.linkColor : styles.link
            }
            href="#contact"
            onClick={clickOpenNavbar}
          >
            {t("Contact")}
          </a>
          <div className={styles.container_language}>
            {i18n.resolvedLanguage === "en" ? (
              <button
                onClick={() => changeLanguage("ru")}
                className={styles.language}
              >
                Ru
              </button>
            ) : (
              <button
                onClick={() => changeLanguage("en")}
                className={styles.language}
              >
                En
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
