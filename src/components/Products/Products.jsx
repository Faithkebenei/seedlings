import React from "react";
import styles from "./Products.module.scss";

import img1 from "../../utils/images/10.png";
import img2 from "../../utils/images/11.png";
import img3 from "../../utils/images/2.png";
import img4 from "../../utils/images/5.png";
import img5 from "../../utils/images/9.png";
import img6 from "../../utils/images/4.png";
import img7 from "../../utils/images/6.png";
import img8 from "../../utils/images/12.png";

const products = [
  { image: img1, name: "Whispering Willow" },
  { image: img2, name: "Majestic Magnolia" },
  { image: img3, name: "Mystic Moonflower" },
  { image: img4, name: "Daisy Daze Daffodil" },
  { image: img5, name: "Azure Sky Blueberry" },
  { image: img6, name: "Mystic Moonflower" },
  { image: img7, name: "Jade Jewel Jade Plant" },
  { image: img8, name: "Emerald Dream Maple" },
];

const Products = () => {
  return (
    <div className={styles.products}>
      <h3>Our Products</h3>
      <hr className={styles.hr} />
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <img src={product.image} alt="" />
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
