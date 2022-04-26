import { useTranslation } from 'react-i18next';
import { FaRegTrashAlt } from 'react-icons/fa';

const CartItemComponent = (props) => {
    const { t } = useTranslation();
    const { _id, image, title, price } = props;

    return (
        <div className='row border-top border-bottom'>
            <div className='row main align-items-center'>
                <div className='col-2'>
                    <img className='img-fluid' src={image} />
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
                    <FaRegTrashAlt className='text-danger' />
                </div>
            </div>
        </div>
    );
};

export default CartItemComponent;
