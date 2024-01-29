import React from "react";
import styles from "./About.module.scss";
import img1 from "../../utils/images/1.jpg";
import img3 from "../../utils/images/3.jpg";
import img9 from "../../utils/images/9.jpg";
import img8 from "../../utils/images/8.jpg";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.textContent}>
        <h3>About Us</h3>
        <hr className={styles.hr} />
        <p>
          Nurturing a profound reverence for the natural world, Seedlings stands
          as a beacon of unwavering commitment towards fostering a verdant,
          sustainable global ecosystem. Our journey burgeoned from a fundamental
          ethos: to furnish individuals, enterprises, and communities alike with
          meticulously curated seedlings of the highest caliber. With these
          botanical treasures in hand, they embark on a transformative odyssey,
          sculpting vibrant landscapes, spearheading reforestation initiatives,
          and assuming an active stewardship role in fortifying the planet's
          ecological equilibrium and resilience.
        </p>
        <button>
          Shop Now <FaArrowRight className={styles.icon} />
        </button>
      </div>
      <div className={styles.images}>
        <div className={styles.leftContainer}>
          <div className={styles.imgContainer}>
            <img src={img3} alt="" />
          </div>
          <div className={styles.imgContainer}>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.imgContainer}>
            <img src={img8} alt="" />
          </div>
          <div className={styles.imgContainer}>
            <img src={img9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
