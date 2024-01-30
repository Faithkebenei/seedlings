import React, { useState } from "react";
import text from "../../utils/texts";
import styles from "./Hero.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { FaEnvelopesBulk, FaPhoneVolume, FaMoneyBills } from "react-icons/fa6";

import five from "../../utils/images/5.png";
import eleven from "../../utils/images/11.png";
import six from "../../utils/images/6.png";
import four from "../../utils/images/4.png";
import twelve from "../../utils/images/12.png";

const Hero = () => {
  const [activeImgCount, setActiveImgCount] = useState(1);
  const [activePhoto, setActivePhoto] = useState(five);

  // const changeImage = () => {
  //   console.log(activeImgCount);
  // };

  setTimeout(() => {
    if (activeImgCount === 5) {
      setActiveImgCount(1);
      setActivePhoto(five);
    } else {
      setActiveImgCount(activeImgCount + 1);
      //changeImage();

      if (activeImgCount === 1) {
        setActivePhoto(eleven);
      } else if (activeImgCount === 2) {
        setActivePhoto(six);
      } else if (activeImgCount === 3) {
        setActivePhoto(four);
      } else if (activeImgCount === 4) {
        setActivePhoto(twelve);
      } else if (activeImgCount === 5) {
        setActivePhoto(five);
      }
    }
  }, 3000);

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
              <img src={activePhoto} alt="Product" />
            </div>
            <div className={styles.imgCount}>
              <p
                style={
                  activeImgCount === 1
                    ? { borderBottom: "2px solid #6e9257", color: "#6e9257" }
                    : {}
                }
                onClick={() => {
                  setActiveImgCount(1);
                  setActivePhoto(five);
                }}
              >
                01
              </p>
              <p
                style={
                  activeImgCount === 2
                    ? { borderBottom: "2px solid #6e9257", color: "#6e9257" }
                    : {}
                }
                onClick={() => {
                  setActiveImgCount(2);
                  setActivePhoto(eleven);
                }}
              >
                02
              </p>
              <p
                style={
                  activeImgCount === 3
                    ? { borderBottom: "2px solid #6e9257", color: "#6e9257" }
                    : {}
                }
                onClick={() => {
                  setActiveImgCount(3);
                  setActivePhoto(six);
                }}
              >
                03
              </p>
              <p
                style={
                  activeImgCount === 4
                    ? { borderBottom: "2px solid #6e9257", color: "#6e9257" }
                    : {}
                }
                onClick={() => {
                  setActiveImgCount(4);
                  setActivePhoto(four);
                }}
              >
                04
              </p>
              <p
                style={
                  activeImgCount === 5
                    ? { borderBottom: "2px solid #6e9257", color: "#6e9257" }
                    : {}
                }
                onClick={() => {
                  setActiveImgCount(5);
                  setActivePhoto(twelve);
                }}
              >
                05
              </p>
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
      <div className={styles.bottom}>
        <div className={styles.heroInfo}>
          <FaEnvelopesBulk size="2rem" color="#6E9257" />
          <p>Fast Delivery</p>
        </div>
        <div className={styles.heroInfo}>
          <FaPhoneVolume size="1.5rem" color="#6E9257" />
          <p>24/7 Support</p>
        </div>
        <div className={styles.heroInfo}>
          <FaMoneyBills size="2rem" color="#6E9257" />
          <p>Affordable Prices</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
