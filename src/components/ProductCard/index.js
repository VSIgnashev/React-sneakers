import React from "react";
import styles from "./ProductCard.module.scss"
import ContentLoader from "react-content-loader"
import AppContext from "../../contex";






export const ProductCard = ({ price, imgsrc, name, id, onFavorite, onPlus, addedToFavorite = false, loading = false, added = false }) => {

  const { isItemAdded } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = React.useState(addedToFavorite);

  const onClickPlus = () => {
    onPlus({ price, imgsrc, name, id });
    console.log(id);

  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ price, imgsrc, name, id });

  }


  return (


    <div className={styles.ProductCardWrapper}>

      {loading ?
        < ContentLoader
          speed={2}
          width={150}
          height={230}
          viewBox="0 0 150 230"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb" >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="106" rx="0" ry="0" width="150" height="15" />
          <rect x="0" y="162" rx="8" ry="8" width="111" height="44" />
          <rect x="118" y="174" rx="8" ry="8" width="32" height="32" />
        </ContentLoader > :
        <>
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

            <img className={styles.addToCartButton} onClick={onClickPlus} src={isItemAdded(id) ? '/img/btn_checked.svg' : '/img/btn_plus.svg'} alt="add to cart" />

          </div>
        </>}
    </div>



  );
};
