import { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensios";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  const clickOpenNavbar = () => {
    setIsOpen(!isOpen);
  };

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
              <a className={styles.link} href="#home">
                Home
              </a>
              <a className={styles.link} href="#about_me">
                About
              </a>
              <a className={styles.link} href="#skills">
                Skills
              </a>
              <a className={styles.link} href="#portfolio">
                Portfolio
              </a>
              <a className={styles.link} href="#contacts">
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
          <a className={styles.link} href="#home">
            Home
          </a>
          <a className={styles.link} href="#about_me">
            About
          </a>
          <a className={styles.link} href="#skills">
            Skills
          </a>
          <a className={styles.link} href="#portfolio">
            Portfolio
          </a>
          <a className={styles.link} href="#contacts">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
