import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { removeFromCart, increaseItemAmount, decreaseItemAmount } from '../store/actions/cartActions';

const CartItemComponent = (props) => {
    const { _id, image, title, price, quantity, amount } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIncreaseItem = () => {
        dispatch(increaseItemAmount(_id));
    };

    const handleDecreaseItem = () => {
        dispatch(decreaseItemAmount(_id));
    };

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
                    <div className='row'>{title}</div>
                </div>
                <div className='col'>
                    {' '}
                    {amount > 1 && (
                        <a className='pointer' onClick={handleDecreaseItem}>
                            -
                        </a>
                    )}
                    <a className='border'>{amount}</a>
                    {amount < quantity && (
                        <a className='pointer' onClick={handleIncreaseItem}>
                            +
                        </a>
                    )}{' '}
                    <div>
                        <small className='text-muted'>{`${quantity} ${t('available')}`}</small>
                    </div>
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
