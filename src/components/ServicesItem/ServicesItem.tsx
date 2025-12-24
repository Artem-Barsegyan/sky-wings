import type { JSX } from "react";
import type { Services } from "../../data/services";

import styles from './ServicesItem.module.css'
import { services } from "../../data/services";

interface ServicesItemProps {
    selectedServices: Services[];
    setSelectedServices: React.Dispatch<React.SetStateAction<Services[]>>;
}

const ServicesItem = ({ selectedServices, setSelectedServices }: ServicesItemProps): JSX.Element => {

    const handleAddBtn = (service: string): void => {
        const filteredServicesArray = services.find((item) => {
            return item.service === service
        })
        if (filteredServicesArray) {
            setSelectedServices(prev => [...prev, filteredServicesArray]);
        }
    }

    return (
        <>
            {services.map(({ category, service, serviceImg, description, price }) => {
                const isAlreadyAdded = selectedServices.some(
                    selected => selected.service === service
                );
                return (
                    <div className={styles['services-item']} key={category.name}>
                        <span><img src={category.icon} alt={category.name} />Услуга</span>
                        <img src={serviceImg} alt={category.name} />
                        <div className={styles['services-item__description']}>
                            <h2>{service}</h2>
                            <p>{description}</p>
                            <div className={styles['services-item__price']}>
                                <span>{price} ₽</span>
                                <button
                                    type="button"
                                    onClick={() => handleAddBtn(service)}
                                    disabled={isAlreadyAdded}>
                                    {isAlreadyAdded ? 'Добавлено' : 'Добавить'}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ServicesItem;