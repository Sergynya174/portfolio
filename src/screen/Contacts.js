import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Main.module.css";

const Contacts = () => {
  return (
    <div className={styles.section}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.title}>Контакты</h2>
          <ul className={styles.list}>
            <li className={styles.text}>
              Telegram:{" "}
              <a href="https://t.me/SergoMatrosov174" className={styles.link}>
                @SergoMatrosov174
              </a>
            </li>
            <li className={styles.text}>
              Почта:{" "}
              <a href="mailto:Sergynya174@yandex.ru" className={styles.link}>
                Sergynya174@yandex.ru
              </a>
            </li>
            <li className={styles.text}>
              GitHub:{" "}
              <a href="https://github.com/Sergynya174" className={styles.link}>
                Sergynya174
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
