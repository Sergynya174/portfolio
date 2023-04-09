import { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensios";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const location = useLocation();

  const clickOpenNavbar = () => {
    setIsOpen(!isOpen);
  };

  console.log(location);

  const home = location.hash === "#home";
  const about = location.hash === "#about_me";
  const skills = location.hash === "#skills";
  const portfolio = location.hash === "#portfolio";
  const contacts = location.hash === "#contacts";

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        Portfolio
      </a>
      {width < 768 ? (
        isOpen ? (
          <>
            <i
              onClick={clickOpenNavbar}
              className="bx bx-x"
              id={styles.menu}
            ></i>
            <nav className={styles.navbar}>
              <a className={home ? styles.linkColor : styles.link} href="#home">
                Home
              </a>
              <a
                className={about ? styles.linkColor : styles.link}
                href="#about_me"
              >
                About
              </a>
              <a
                className={skills ? styles.linkColor : styles.link}
                href="#skills"
              >
                Skills
              </a>
              <a
                className={portfolio ? styles.linkColor : styles.link}
                href="#portfolio"
              >
                Portfolio
              </a>
              <a
                className={contacts ? styles.linkColor : styles.link}
                href="#contacts"
              >
                Contact
              </a>
            </nav>
          </>
        ) : (
          <i
            onClick={clickOpenNavbar}
            className="bx bx-menu"
            id={styles.menu}
          ></i>
        )
      ) : (
        <nav className={styles.navbar}>
          <a className={home ? styles.linkColor : styles.link} href="#home">
            Home
          </a>
          <a
            className={about ? styles.linkColor : styles.link}
            href="#about_me"
          >
            About
          </a>
          <a className={skills ? styles.linkColor : styles.link} href="#skills">
            Skills
          </a>
          <a
            className={portfolio ? styles.linkColor : styles.link}
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            className={contacts ? styles.linkColor : styles.link}
            href="#contacts"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
