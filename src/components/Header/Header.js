import { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensios";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { HeaderName } from "../../utils/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const location = useLocation();

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
        </nav>
      )}
    </header>
  );
};

export default Header;
