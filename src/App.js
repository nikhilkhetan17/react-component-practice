import React from "react";

import "./react.css";

import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/CopyRight";

function App() {
  return (
    <>
      <Navbar />

      <Header />

      <Portfolio />

      <About />

      <Contact />

      <Footer />

      <Copyright />
    </>
  );
}

export default App;
