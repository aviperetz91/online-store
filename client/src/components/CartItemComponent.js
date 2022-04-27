import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { removeFromCart } from '../store/actions/cartActions';

const CartItemComponent = (props) => {
    const { _id, image, title, price } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveItem = () => {
        dispatch(removeFromCart(_id));
    };

    const navigateToProductPage = () => {
        navigate(`/product/${_id}`);
    };

    return (
        <div className='row border-top border-bottom'>
            <div className='row main align-items-center'>
                <div className='col-2' onClick={navigateToProductPage}>
                    <img className='img-fluid pointer' src={image} alt='product-image' />
                </div>
                <div className='col'>
                    <div className='row text-muted'>{title}</div>
                </div>
                <div className='col'>
                    {' '}
                    <a href='#'>-</a>
                    <a href='#' className='border'>
                        1
                    </a>
                    <a href='#'>+</a>{' '}
                </div>
                <div className='col d-flex justify-content-between align-items-center'>
                    {`${t('price-symbol')}${price}`}
                    <FaRegTrashAlt onClick={handleRemoveItem} className='text-danger pointer' />
                </div>
            </div>
        </div>
    );
};

export default CartItemComponent;
