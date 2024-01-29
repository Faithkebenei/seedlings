import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.scss";
import About from "../../components/About/About";
import Products from "../../components/Products/Products";
import CTO from "../../components/CTO/CTO";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <About />
      <Products />
      <CTO />
      <Contact />
    </div>
  );
};

export default Home;
