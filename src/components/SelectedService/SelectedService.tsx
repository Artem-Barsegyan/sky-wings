import type { JSX } from "react";
import type { Services } from "../../data/services";

import styles from './SelectedService.module.css';
import close from '../../assets/selectedService/delete-icon.svg';

interface SelectedServicesProps {
    selectedServices: Services[];
    setSelectedServices: React.Dispatch<React.SetStateAction<Services[]>>;
}

const SelectedService = ({ selectedServices, setSelectedServices }: SelectedServicesProps): JSX.Element => {

    const handleDeleteBtn = (service: string): void => {
        if (!selectedServices) return;
        const newfilteredServicesArray = selectedServices.filter((item) => {
            return item.service !== service
        })
        setSelectedServices(newfilteredServicesArray)
    }

    return (
        <>
            {selectedServices.map(({ category, service, price }) => {
                return (
                    <div className={styles['selected-services__item']} key={category.name}>
                        <div className={styles['selected-services__item-info']}>
                            <img src={category.icon} alt={category.name} />
                            <div>
                                <span>{service}</span>
                                <span>{price} ₽</span>
                            </div>
                        </div>
                        <div className={styles['selected-services__item-close-btn']}>
                            <img
                                src={close}
                                alt="close"
                                onClick={() => handleDeleteBtn(service)} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default SelectedService;