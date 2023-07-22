import styles from "./CartOverlay.module.scss"

function CartOverlay({ onClose, onRemove, items = [] }) {
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
                                <button className={styles.checkoutButton}>Оформить заказ<img src="/img/button_arrow.svg" alt="checkout" /></button>
                            </div>
                        </div>) :

                    (
                        <div className={styles.cartEmpty}>
                            <img width={120} height={120} src="/img/empty_box.svg" />
                            <h3 className={styles.headerEmpty}>Корзина пустая</h3>
                            <p className={styles.pEmpty}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className={styles.returnButton}><img className={styles.returnButtonArrow} src="/img/return_button_arrow.svg" />Вернуться назад</button>
                        </div>
                    )}
            </div>



        </div>
    );
}
export default CartOverlay;