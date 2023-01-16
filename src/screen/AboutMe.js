import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Main.module.css";
import foto from "../images/image.jpg";

const AboutMe = () => {
  return (
    <div className={styles.section}>
      <Header />
      <main className={styles.mainMe}>
        <h2 className={styles.titleMe}>Обо мне</h2>
        <div className={styles.containerMe}>
          <img src={foto} alt="Foto" className={styles.foto} />
          <p className={styles.textMe}>
            Привет, меня зовут Сергей, мне 30 лет и я junior Frontend
            разработчик с желанием расти в карьере. Чтобы достичь цели я смотрю
            обучающие ролики на YouTube, читаю книги и применяю новые навыки на
            практике. Имею опыт в разработке startUp'a. На данном этапе я
            совершенствуюсь в JavaScript, React и занимаюсь наполнением
            портфолио. Считаю, что работа — это непрерывное образование, поэтому
            всегда ищу возможности для саморазвития. Люблю походы на природу,
            играть в волейбол.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
