import styles from "./App.module.css";
import Home from "../../screen/Home";
import AboutMe from "../../screen/AboutMe";
import Jobs from "../../screen/Jobs";
import Contacts from "../../screen/Contacts";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
