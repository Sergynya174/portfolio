import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import "boxicons";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Header t={t} i18n={i18n} />
      <Home t={t} />
      <About t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contacts t={t} />
      <Footer t={t} />
    </div>
  );
};

export default App;
