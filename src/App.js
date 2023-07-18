import React from "react";
import { ProductCard } from "./components/ProductCard";
import CartOverlay from "./components/CartOverlay";
import Header from "./components/Header";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";


function App() {
  const [cartOpened, setCardOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favoriteItems, setFavoriteItems] = React.useState([]);

  const onChangeSearchInput = (event) => {

    setSearchValue(event.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue('');
  };


  function isItemInTheCart(item, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {

        return true;
      }
    }

    return false;
  };

  React.useEffect(() => {

    axios.get('https://648ad8bd17f1536d65e9d127.mockapi.io/items').then((res) => {
      setItems(res.data);

    })
    axios.get('https://648ad8bd17f1536d65e9d127.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    })
    axios.get('https://64b3f1310efb99d862689016.mockapi.io/Favorites').then((res) => { setFavoriteItems(res.data) })
  }, [])

  const onAddToCart = (obj) => {
    try { }
    catch (error) {
      alert('Не удалось добавить в корзину')
    }

    axios.post('https://648ad8bd17f1536d65e9d127.mockapi.io/cart', obj).then((res) => { setCartItems(prev => [...prev, res.data]); });
    //axios.post('https://648ad8bd17f1536d65e9d127.mockapi.io/cart', obj);
    //setCartItems(prev => [...prev, obj]);

  }

  const onRemoveItem = (id) => {

    axios.delete(`https://648ad8bd17f1536d65e9d127.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }


  const onAddToFavorites = async (obj) => {
    try {
      console.log(obj.id)
      if (favoriteItems.find((favObj => favObj.id === obj.id))) {
        axios.delete(`https://64b3f1310efb99d862689016.mockapi.io/Favorites/${obj.id}`)
      }
      else {
        const { data } = await axios.post('https://64b3f1310efb99d862689016.mockapi.io/Favorites', obj);
        setFavoriteItems((prev) => [...prev, data]);
      }
    }
    catch (error) {
      alert('Не удалось добавить в закладки');
    }

  }





  return (

    <div className="wrapper">
      {cartOpened && <CartOverlay items={cartItems} onClose={() => { setCardOpened(false) }} onRemove={onRemoveItem} />}
      <Header onClickCart={() => { setCardOpened(true) }} />

      <Routes>
        <Route path="/" element={<Home items={items} searchValue={searchValue} onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart} clearSearchInput={clearSearchInput} onAddToFavorites={onAddToFavorites} />} />

        <Route path="/favorites" element={
          <Favorites onAddToFavorites={onAddToFavorites} items={favoriteItems} />

        } />
      </Routes>





    </div>
  );
}

export default App;
