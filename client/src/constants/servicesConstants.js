import { FaShoppingCart, FaShippingFast } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const services = [
    {
        icon: <FaShoppingCart className='service-item-icon' />,
        name: 'חנות',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
        icon: <FaShippingFast className='service-item-icon' />,
        name: 'שירות משלוחים',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
        icon: <RiCustomerService2Fill className='service-item-icon' />,
        name: 'שירות לקוחות',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
];

export default services;
