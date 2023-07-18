import React from "react";
import { ProductCard } from "../../components/ProductCard";

function Favorites({ items, onAddToCart, onAddToFavorites }) {
  return (
    <div className="content">
      <div className="top-part">
        <h1>Ваши закладки</h1>
      </div>
      <div className="items">
        {items.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            imgsrc={item.imgsrc}
            price={item.price}
            id={item.id}
            onFavorite={(obj) => {
              onAddToFavorites(obj);
            }}
            addedToFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
