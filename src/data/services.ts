import baggageIcon from '../assets/services/baggage-icon.svg';
import legroomIcon from '../assets/services/legroom-icon.svg';
import foodIcon from '../assets/services/food-icon.svg';
import transferIcon from '../assets/services/transfer-icon.svg';
import insuranceIcon from '../assets/services/insurance-icon.svg';
import businessLoungeIcon from '../assets/services/business-lounge-icon.svg';

import baggageImg from '../assets/services/baggage.jpg';
import legroomImg from '../assets/services/legroom.jpg';
import foodImg from '../assets/services/food.jpg';
import transferImg from '../assets/services/transfer.jpg';
import insuranceImg from '../assets/services/insurance.jpg';
import businessLoungeImg from '../assets/services/business-lounge.jpg';

export type Services = {
    category: {
        name: string;
        icon: string;
    };
    service: string;
    serviceImg: string;
    description: string;
    price: number;
}

export const services: Services[] = [
    {
        category: {
            name: 'baggage',
            icon: baggageIcon
        },
        service: 'Дополнительный багаж',
        serviceImg: baggageImg,
        description: 'Сделайте ваш полет максимально комфортным.',
        price: 2500
    },
    {
        category: {
            name: 'legroom',
            icon: legroomIcon
        },
        service: 'Место XL (Extra Legroom)',
        serviceImg: legroomImg,
        description: 'Увеличенное пространство для ног в первых рядах.',
        price: 1800
    },
    {
        category: {
            name: 'food',
            icon: foodIcon
        },
        service: 'Премиум питание',
        serviceImg: foodImg,
        description: 'Выбор из 3-х блюд от шеф-повара + напиток.',
        price: 1200
    },
    {
        category: {
            name: 'transfer',
            icon: transferIcon
        },
        service: 'Трансфер из аэропорта',
        serviceImg: transferImg,
        description: 'Комфортный седан бизнес-класса до вашего отеля.',
        price: 3500
    },
    {
        category: {
            name: 'insurance',
            icon: insuranceIcon
        },
        service: 'Страховка полета',
        serviceImg: insuranceImg,
        description: 'Полная защита от задержек, утери багажа и отмены.',
        price: 990
    },
    {
        category: {
            name: 'business-lounge',
            icon: businessLoungeIcon
        },
        service: 'Бизнесс-лаунж',
        serviceImg: businessLoungeImg,
        description: 'Доступ в зал ожидания повышенной комфортности.',
        price: 4500
    },
]