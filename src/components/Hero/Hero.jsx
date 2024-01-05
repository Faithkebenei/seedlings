import React from "react";
import text from "../../utils/texts";
import styles from "./Hero.module.scss";
import { FaArrowRight } from "react-icons/fa";

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
            <div className={styles.imgContainer}></div>
            <div className={styles.imgCount}>
              {/* <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
              <p>05</p> */}
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
            {/* <p className={styles.rotate}>{text.hero.scrollDown}</p>
            {/* <hr className={styles.hr} /> */}
            {/* <p className={styles.rotate2}>FACEBOOK</p>
            <p>X</p>
            <p>INSTAGRAM</p> */}
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Hero;
