import styles from "./ProductCard.module.scss"


export const ProductCard = (props) => {

  const onClickAlert = () => {
    alert(props.price)
  };

  return (
    <div className={styles.ProductCardWrapper}>
      <div className={styles.unlikedButton}>
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imgsrc} alt="item" />
      <span className={styles.productName}>{props.name}</span>
      <div className={styles.cardBottom}>
        <div className={styles.productPrice}>
          <span className={styles.priceSpan}>Цена</span>
          <span className={styles.prductPriceAmount}>{props.price}</span>
        </div>
        <div className={styles.addToCartButton} onClick={onClickAlert}>
          <img src="/img/plus.svg" alt="add to cart" />
        </div>
      </div>
    </div>
  );
};
