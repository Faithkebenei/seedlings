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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Products</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
