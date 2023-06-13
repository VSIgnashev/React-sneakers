import { ProductCard } from "./components/Product-card/Product-card";
import CartOverlay from "./components/Cart-overlay/Cart-overlay";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="wrapper">
      <CartOverlay />
      <Header />
      <div className="content">
        <div className="top-part">
          <h1>Все кроссовки</h1>
          <div className="search-box">
            <img src="/img/search_logo.svg" alt="search" />
            <input className="search-input" placeholder="Поиск..." />
          </div>
        </div>
        <div className="items">
          <ProductCard name="Мужские Кроссовки Nike Blazer Mid Suede" imgsrc='/img/items/1.jpg' price="12 999 руб." />
          <ProductCard name="Мужские Кроссовки Nike Air Max 270" imgsrc='/img/items/2.jpg' price="12 999 руб." />
          <ProductCard name="Мужские Кроссовки Nike Blazer Mid Suede" imgsrc='/img/items/3.jpg' price="8 499 руб." />
          <ProductCard name="Кроссовки Puma X Aka Boku Future Rider" imgsrc='/img/items/4.jpg' price="8 999 руб." />
          <ProductCard name="Мужские Кроссовки Under Armour Curry 8" imgsrc='/img/items/5.jpg' price="15 199 руб." />
          <ProductCard name="Мужские Кроссовки Nike Kyrie 7" imgsrc='/img/items/6.jpg' price="11 299 руб." />
          <ProductCard name="Мужские Кроссовки Jordan Air Jordan 11" imgsrc='/img/items/7.jpg' price="10 799 руб." />
          <ProductCard name="Мужские Кроссовки Nike LeBron XVIII" imgsrc='/img/items/8.jpg' price="16 499 руб." />
          <ProductCard name="Мужские Кроссовки Nike Lebron XVIII Low" imgsrc='/img/items/9.jpg' price="13 999 руб." />
          <ProductCard name="Мужские Кроссовки Nike Blazer Mid Suede" imgsrc='/img/items/10.png' price="8 499 руб." />
          <ProductCard name="Кроссовки Puma X Aka Boku Future Rider" imgsrc='/img/items/11.png' price="8 999 руб." />
          <ProductCard name="Мужские Кроссовки Nike Kyrie Flytrap IV" imgsrc='/img/items/13.png' price="11 299 руб." />

        </div>

      </div>
    </div>
  );
}

export default App;
