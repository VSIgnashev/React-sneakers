import React from "react";
import { ProductCard } from "../../components/ProductCard";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToCart,
  clearSearchInput,
  onAddToFavorites,
  testFunc1,
}) {
  return (
    <div className="content">
      <div className="top-part">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-box">
          <img src="/img/search_logo.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            className="search-input"
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              className="clearSearchButton"
              src="/img/cart_remove.svg"
              onClick={clearSearchInput}
              alt="clear"
            />
          )}
        </div>
      </div>
      <div className="items">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              imgsrc={item.imgsrc}
              price={item.price}
              id={item.id}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
              onFavorite={(obj) => {
                onAddToFavorites(obj);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
