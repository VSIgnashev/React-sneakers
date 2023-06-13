import { ProductCard } from "./components/product-card/product-card";


function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="cart-overlay">
          <h2>Корзина</h2>
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-item-img" style={{ backgroundImage: 'url("/img/items/1.jpg")' }}></div>
              <div className="cart-item-text">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart-item-remove" src="/img/cart_remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <div className="cart-item-img" style={{ backgroundImage: 'url("/img/items/1.jpg")' }}></div>
              <div className="cart-item-text">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart-item-remove" src="/img/cart_remove.svg" alt="remove" />
            </div>
          </div>
          <div className="cart-total-block">
            <ul >
              <li>
                <span>Итого</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>

            </ul>
            <button className="checkout-button">Оформить заказ<img src="/img/button_arrow.svg" /></button>
          </div>
        </div>



      </div>
      <header>
        <div className="logo">
          <img height={40} width={40} src="/img/logo.png" alt="logo" />
          <div className="logo-text">
            <h3 className="logo-header">REACT SNEAKERS</h3>
            <p className="logo-slogan">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="user-info">
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            <span className="total-price">1205 руб.</span>
          </li>
          <li>
            <img src="/img/like_logo.svg" alt="like-logo" />
          </li>
          <li>
            <img src="/img/user_logo.svg" alt="user-logo" />
          </li>
        </ul>
      </header>
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
