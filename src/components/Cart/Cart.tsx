import type { JSX } from "react";
import type { Services } from "../../data/services";

import SelectedService from "../SelectedService/SelectedService";
import EmptyCart from "../EmptyCart/EmptyCart";

import styles from './Cart.module.css';

interface CartProps {
    selectedServices: Services[];
    setSelectedServices: React.Dispatch<React.SetStateAction<Services[]>>;
}

const Cart = ({ selectedServices, setSelectedServices }: CartProps): JSX.Element => {

    const totalServices = selectedServices.length;
    const totalPrice = selectedServices.reduce((acc, item) => {
        return acc + item.price
    }, 0);

    return (
        <section className={styles.cart}>
            <div className={styles['cart__item']}>
                <div className={styles['cart__item-top']}>
                    <span>Ваш заказ</span>
                    <span>{totalServices}</span>
                </div>
                <div className={styles['cart__item-services']}>
                    {selectedServices.length !== 0
                        ?
                        <SelectedService
                            selectedServices={selectedServices}
                            setSelectedServices={setSelectedServices} />
                        :
                        <EmptyCart />}
                </div>
                <div className={styles['cart__item-bottom']}>
                    <div className={styles['cart__item-bottom-info']}>
                        <span>Итого к оплате:</span>
                        <span>{totalPrice} ₽</span>
                    </div>
                    <button type="button" className={styles['cart__item-bottom-btn']}>Оформить заказ</button>
                    <a href="/">Безопасная оплата картой</a>
                </div>
            </div>
        </section>
    )
}

export default Cart;