import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
