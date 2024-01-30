import React from "react";
import styles from "./Footer.module.scss";
import {
  FaPhoneVolume,
  FaEnvelope,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

const icons = [
  { icon: <FaPhoneVolume />, name: "Phone" },
  { icon: <FaEnvelope />, name: "Email" },
  { icon: <FaXTwitter />, name: "X" },
  { icon: <FaFacebookF />, name: "Facebook" },
  { icon: <FaInstagram />, name: "Instagram" },
];

const Footer = () => {
  return (
    <div className={styles.footerCont}>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div>
            <h4>Contact Us</h4>
            {icons.map((icon) => (
              <div className={styles.social}>
                <div className={styles.socialIcon}>{icon.icon}</div>
                <p>{icon.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.menus}>
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Opening hours</h4>
            <div className={styles.openingHours}>
              <div className={styles.days}>
                <p>Monday - Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className={styles.time}>
                <p>08:00 - 20:00</p>
                <p>08:00 - 19:00</p>
                <p>10:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.policyContainer}>
        <p>
          Seedlings Company. © 2023. <a href="#">Web Design by ImaraInno</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
