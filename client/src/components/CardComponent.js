import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import '../styles/cardStyle.scss';

const CardComponent = ({ product }) => {
    const { t } = useTranslation();
    const { _id, image, title, price, rating } = product;

    return (
        <>
            <div className='col-6 col-md-5 col-lg-4 col-xl-3 mb-4 product-card'>
                <Link to={`/product/${_id}`} className='card h-100 text-dark'>
                    <div className='card-image product-img'>
                        <img src={image} alt='product' />
                    </div>
                    <div className='card-body p-0'>
                        <div className='card-heading'>{title}</div>
                    </div>
                    <div className='card-text'>
                        <Rating name='rating' value={rating} readOnly size='small' />
                    </div>
                    <div className='card-text'>{`${t('price-symbol')}${price}`}</div>
                    <div className='card-button'>
                        <FaShoppingCart className='mx-1' />
                        {`${t('purchase')}`}
                    </div>
                </Link>
            </div>
        </>
    );
};

export default CardComponent;
