import { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensios";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { HeaderName } from "../../utils/utils";

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
                {HeaderName.map((item) => (
                  <a
                    className={
                      location.hash === item.link
                        ? styles.linkColor
                        : styles.link
                    }
                    href={item.link}
                    onClick={clickOpenNavbar}
                  >
                    {item.name}
                  </a>
                ))}
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
          {HeaderName.map((item) => (
            <a
              className={
                location.hash === item.link ? styles.linkColor : styles.link
              }
              href={item.link}
              onClick={clickOpenNavbar}
            >
              {item.name}
            </a>
          ))}
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
