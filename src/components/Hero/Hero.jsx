import React from "react";
import text from "../../utils/texts";
import styles from "./Hero.module.scss";
import { FaArrowRight } from "react-icons/fa";

import five from "../../utils/images/5.png";
import eleven from "../../utils/images/11.png";
import six from "../../utils/images/6.png";
import four from "../../utils/images/4.png";
import twelve from "../../utils/images/12.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.top}>
        <div className={styles.left}>
          <p>
            {text.hero.taglineFirst}
            <span> {text.hero.name} </span>
            {text.hero.taglineLast}
          </p>
          <button>
            {text.hero.CTO} <FaArrowRight className={styles.icon} />
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <div className={styles.blockColor}></div>
            <div className={styles.imgContainer}>
              <img src={five} alt="Product" />
            </div>
            <div className={styles.imgCount}>
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
              <p>05</p>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.socialCont}>
              <div>INSTAGRAM</div>
            </div>

            <div className={styles.socialCont}>
              <div>X</div>
            </div>

            <div className={styles.socialCont}>
              <div>FACEBOOK</div>
            </div>

            <div className={styles.socialCont}>
              <div>
                <hr className={styles.hr} />
              </div>
            </div>

            <div className={styles.socialCont}>
              <div>{text.hero.scrollDown}</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Hero;
