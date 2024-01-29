import React from "react";
import styles from "./CTO.module.scss";

import img from "../../utils/images/7.jpg";

const CTO = () => {
  return (
    <div className={styles.CTO}>
      <div className={styles.imageContainer}>
        <img src={img} alt="" />
        <div className={styles.overlay}></div>
        <p>Call 0715 XXX XXX Today To Order</p>
      </div>
    </div>
  );
};

export default CTO;
