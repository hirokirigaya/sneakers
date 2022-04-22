import { Link } from "react-router-dom";
import styles from "./ProductExpost.module.css";
import Products from "./Products";

function ProductExpost() {

  return (
    <div>
      <div className={styles.div}>
        {Products.map(({ titlethumb, img, price, id, slug }) => {
          return (
            <div className={styles.product} key={id}>
              <div>
                <p>{titlethumb}</p>
                <p className={styles.price}>
                  <span>$</span>
                  <strong>{price}</strong>
                  <span>,00</span>
                </p>
              </div>
              <Link to={`/product/${slug}`}>
                <div>
                  <img src={img[0]} alt="product-image"/>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductExpost;
