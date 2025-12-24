import type { JSX } from "react";

import emptyCart from '../../assets/cart/empty-cart.svg';
import styles from './EmptyCart.module.css';

const EmptyCart = (): JSX.Element => {
    return (
        <div className={styles['empty-cart']}>
            <img src={emptyCart} alt="cart" />
            <p>Выберите услуги из списка</p>
        </div>
    )
}

export default EmptyCart;