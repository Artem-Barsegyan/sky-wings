import type { JSX } from "react";
import ServicesItem from "../ServicesItem/ServicesItem";
import type { Services } from "../../data/services";

import styles from './ServicesSection.module.css';

interface ServicesSectionProps {
    selectedServices: Services[];
    setSelectedServices: React.Dispatch<React.SetStateAction<Services[]>>;
}

const ServicesSection = ({ selectedServices, setSelectedServices }: ServicesSectionProps): JSX.Element => {
    return (
        <section className={styles['additional-services']}>
            <div className={styles['additional-services__header']}>
                <div className={styles['additional-services__header-title']}>
                    <h1>Дополнительные услуги</h1>
                    <p>Сделайте ваш полет максимально комфортным</p>
                </div>
                <div className={styles['additional-services__header__flight-direction']}>
                    <div>
                        <span>рейс</span>
                        <span>москва</span>
                        <span>сочи</span>
                    </div>
                </div>
            </div>
            <div className={styles['additional-services__items']}>
                <ServicesItem
                    selectedServices={selectedServices}
                    setSelectedServices={setSelectedServices} />
            </div>
        </section>
    )
}

export default ServicesSection;