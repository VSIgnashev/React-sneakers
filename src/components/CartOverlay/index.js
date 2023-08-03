import styles from "./CartOverlay.module.scss"
import Info from "../Info";
import AppContext from "../../contex";
import React from "react";
import axios from "axios";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function CartOverlay({ onClose, onRemove, items = [] }) {
    const { setCartItems, cartItems } = React.useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setisLoading] = React.useState(false);



    const onClickOrder = async () => {
        try {
            setisLoading(true);
            const { data } = await axios.post('https://64b3f1310efb99d862689016.mockapi.io/Orders', { items: cartItems, });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://648ad8bd17f1536d65e9d127.mockapi.io/cart/${item.id}`);
                await delay(1000);


            }
        }
        catch (error) {
            alert('Не удалось сформировать заказ');
        }

        setisLoading(false);
    }



    return (
        <div className={styles.overlay}>
            <div className={styles.cartOverlay}>
                <div className={styles.headerWrapper}>
                    <h2 >Корзина</h2>
                    <img style={{ cursor: 'pointer' }} onClick={onClose} src="/img/cart_remove.svg" alt="remove" />
                </div>
                {items.length > 0 ?
                    (
                        <div className={styles.someItemsWrapper}>

                            <div className={styles.cartItems}>

                                {items.map((obj) => {
                                    return (
                                        <div key={obj.idю} className={styles.cartItem}>
                                            <div className={styles.cartItemImg} style={{ backgroundImage: `url(${obj.imgsrc})` }}></div>
                                            <div className={styles.cartItemText}>
                                                <p>{obj.name}</p>
                                                <b>{obj.price}</b>
                                            </div>
                                            <img className={styles.cartItemRemove} onClick={() => { onRemove(obj.id) }} src="/img/cart_remove.svg" alt="remove" />
                                        </div>
                                    )
                                })}

                            </div>
                            <div className={styles.cartTotalBlock}>
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
                                <button disabled={isLoading} className={styles.checkoutButton} onClick={onClickOrder}>Оформить заказ<img src="/img/button_arrow.svg" alt="checkout" /></button>
                            </div>
                        </div>) :

                    (
                        <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image={isOrderComplete ? "/img/complete_order_logo.svg" : "/img/empty_box.svg"} />

                    )}
            </div>



        </div>
    );
}
export default CartOverlay;