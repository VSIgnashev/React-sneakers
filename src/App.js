import React from "react";
import { ProductCard } from "./components/ProductCard";
import CartOverlay from "./components/CartOverlay";
import Header from "./components/Header";
import axios from "axios";


function App() {
  const [cartOpened, setCardOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue('');
  };


  function isItemInTheCart(item, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        console.log('true');
        return true;
      }
    }
    console.log('false');
    return false;
  };

  React.useEffect(() => {
    console.log('hi');
    axios.get('https://648ad8bd17f1536d65e9d127.mockapi.io/items').then((res) => {
      setItems(res.data);
    })
    axios.get('https://648ad8bd17f1536d65e9d127.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {

    axios.post('https://648ad8bd17f1536d65e9d127.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);

  }

  const onRemoveItem = (id) => {
    console.log(id);
    /* axios.post(`https://648ad8bd17f1536d65e9d127.mockapi.io/cart/${id}`); */
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  return (
    <div className="wrapper">
      {cartOpened && <CartOverlay items={cartItems} onClose={() => { setCardOpened(false) }} onRemove={onRemoveItem} />}
      <Header onClickCart={() => { setCardOpened(true) }} />
      <div className="content">
        <div className="top-part">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-box">
            <img src="/img/search_logo.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} className="search-input" placeholder="Поиск..." />
            {searchValue && <img className="clearSearchButton" src="/img/cart_remove.svg" onClick={clearSearchInput} alt="clear" />}
          </div>
        </div>
        <div className="items">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <ProductCard
                key={index}
                name={item.name}
                imgsrc={item.imgsrc}
                price={item.price}
                onPlus={(obj) => { onAddToCart(obj) }}

              />
            ))}



        </div>

      </div>
    </div>
  );
}

export default App;
