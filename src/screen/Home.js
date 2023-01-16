import React from "react";
import Header from "../components/Header/Header";
import styles from "../styles/Main.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.containerHome}>
          <h1 className={styles.titleHome}>ДЕЛО, КОТОРЫМ Я ЖИВУ</h1>
          <p className={styles.subtitle}>FRONTEND DEVELOPMENT</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
