import React from "react";
import text from "../../utils/texts";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <span>{text.header.logo.first}</span>
          {text.header.logo.last}
          <span>.</span>
        </h1>
      </div>
      <div className={styles.navlink}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Our Products</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
