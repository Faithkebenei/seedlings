import React from "react";
import styles from "./Contact.module.scss";
import { FaArrowRight } from "react-icons/fa";

import img from "../../utils/images/12.png";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h3>Contact Us</h3>
      <hr className={styles.hr} />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.nameInputs}>
            <div className={`${styles.inputContent} ${styles.specialInput}`}>
              <label for="firstName">First Name</label>
              <input name="firstName" type="text" />
            </div>
            <div className={`${styles.inputContent} ${styles.specialInput}`}>
              <label for="lastName">Last Name</label>
              <input name="lastName" type="text" />
            </div>
          </div>

          <div className={styles.inputContent}>
            <label for="email">Email</label>
            <input name="email" type="text" />
          </div>

          <div className={styles.inputContent}>
            <label for="message">Message</label>
            <textarea name="message" id="" cols="40" rows="4"></textarea>
          </div>

          <div>
            <button>
              Submit <FaArrowRight className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
