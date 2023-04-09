import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import "boxicons";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
