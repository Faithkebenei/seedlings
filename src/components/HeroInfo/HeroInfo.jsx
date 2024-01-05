import React from "react";
import styles from "./HeroInfo.module.scss";

const HeroInfo = ({ icon, text }) => {
  return (
    <div className={styles.heroInfo}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default HeroInfo;
