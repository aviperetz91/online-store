import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '../store/actions/cartActions';
import Rating from '@mui/material/Rating';
import '../styles/cardStyle.scss';

const CardComponent = (props) => {
    const { product, openModal } = props;
    const { _id, images, title, price, rating } = product;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        openModal(true);
        dispatch(addToCart(_id));
    };

    const navigateToProductPage = () => {
        navigate(`/product/${_id}`);
    };

    return (
        <>
            <div className='col-6 col-md-5 col-lg-4 col-xl-3 mb-4 product-card'>
                <div onClick={navigateToProductPage} className='card h-100'>
                    <div className='card-image product-img'>
                        <img src={images[0]} alt='product' />
                    </div>
                    <div className='card-body p-0'>
                        <div className='card-heading'>{title}</div>
                    </div>
                    <div className='card-text'>
                        <Rating name='rating' value={rating} readOnly size='small' />
                    </div>
                    <div className='card-text'>{`${t('price-symbol')}${price}`}</div>
                    <div className='card-button' onClick={(e) => handleAddToCart(e)}>
                        <FaShoppingCart className='mx-1' />
                        {`${t('add-to-cart')}`}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardComponent;
