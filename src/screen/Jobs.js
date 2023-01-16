import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";
import styles from "../styles/Main.module.css";

const Jobs = () => {
  return (
    <div className={styles.sectionJob}>
      <Header />
      <main className={styles.main}>
        <div className={styles.containerJobs}>
          <h2 className={styles.titleMe}>Работы</h2>
          <Project />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
