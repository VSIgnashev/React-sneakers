import React from "react";
import styles from "./ProductCard.module.scss"






export const ProductCard = ({ price, imgsrc, name, id, prodId, onFavorite, onPlus, addedToFavorite = false }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(addedToFavorite);

  const onClickPlus = () => {
    onPlus({ price, imgsrc, name, prodId });
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ price, imgsrc, name, id });

  }

  const onClickFavorite1 = (id) => {
    console.log('prodID')
    console.log(id)
  }

  return (
    <div className={styles.ProductCardWrapper}>
      <div className={styles.unlikedButton} onClick={() => onClickFavorite(id)} >
        <img src={isFavorite ? '/img/filled_like_logo.svg' : '/img/hollow_like_logo.svg'} alt="unliked" />
      </div>
      <img width={133} height={112} src={imgsrc} alt="item" />
      <span className={styles.productName}>{name}</span>
      <div className={styles.cardBottom}>
        <div className={styles.productPrice}>
          <span className={styles.priceSpan}>Цена</span>
          <span className={styles.prductPriceAmount}>{price}</span>
        </div>

        <img className={styles.addToCartButton} onClick={onClickPlus} src={isAdded ? '/img/btn_checked.svg' : '/img/btn_plus.svg'} alt="add to cart" />

      </div>
    </div>
  );
};
