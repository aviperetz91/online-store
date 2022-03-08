import { FaShoppingCart, FaShippingFast } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const services = [
    {
        id: 's1',
        icon: <FaShoppingCart className='service-item-icon' />,
        name: 'חנות',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
        id: 's2',
        icon: <FaShippingFast className='service-item-icon' />,
        name: 'שירות משלוחים',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
        id: 's3',
        icon: <RiCustomerService2Fill className='service-item-icon' />,
        name: 'שירות לקוחות',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
];

export default services;
