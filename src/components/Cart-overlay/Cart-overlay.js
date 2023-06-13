function CartOverlay() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="cart-overlay">
                <div className="header-wrapper">
                    <h2>Корзина</h2>
                    <img style={{ cursor: 'pointer' }} src="/img/cart_remove.svg" alt="remove" />
                </div>
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
                    <button className="checkout-button">Оформить заказ<img src="/img/button_arrow.svg" alt="checkout" /></button>
                </div>
            </div>



        </div>
    );
}
export default CartOverlay;