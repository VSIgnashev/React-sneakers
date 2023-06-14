import styles from "./CartOverlay.module.scss"

function CartOverlay() {
    return (
        <div className={styles.overlay}>
            <div className={styles.cartOverlay}>
                <div className={styles.headerWrapper}>
                    <h2>Корзина</h2>
                    <img style={{ cursor: 'pointer' }} src="/img/cart_remove.svg" alt="remove" />
                </div>
                <div className={styles.cartItems}>
                    <div className={styles.cartItem}>
                        <div className={styles.cartItemImg} style={{ backgroundImage: 'url("/img/items/1.jpg")' }}></div>
                        <div className={styles.cartItemText}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className={styles.cartItemRemove} src="/img/cart_remove.svg" alt="remove" />
                    </div>


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
                    <button className={styles.checkoutButton}>Оформить заказ<img src="/img/button_arrow.svg" alt="checkout" /></button>
                </div>
            </div>



        </div>
    );
}
export default CartOverlay;