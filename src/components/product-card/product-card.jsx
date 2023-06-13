export const ProductCard = (props) => {
  return (
    <div className="ProductCardWrapper">
      <div className="unliked-button">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imgsrc} alt="item" />
      <span className="product-name">{props.name}</span>
      <div className="card-bottom">
        <div className="product-price">
          <span className="price-span">Цена</span>
          <span className="prduct-price-amount">{props.price}</span>
        </div>
        <div className="add-to-cart-button">
          <img src="/img/plus.svg" alt="add to cart" />
        </div>
      </div>
    </div>
  );
};
