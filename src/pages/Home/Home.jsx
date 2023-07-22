import React from "react";
import { ProductCard } from "../../components/ProductCard";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToCart,
  clearSearchInput,
  onAddToFavorites,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
      <ProductCard
        key={index}
        loading={isLoading}
        onPlus={(obj) => {
          onAddToCart(obj);
        }}
        onFavorite={(obj) => {
          onAddToFavorites(obj);
        }}
        {...item}
      />
    ));
  };
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
      <div className="items">{renderItems()}</div>
    </div>
  );
}

export default Home;
