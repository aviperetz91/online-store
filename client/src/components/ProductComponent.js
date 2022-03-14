import { useTranslation } from 'react-i18next';
import { FaShoppingCart } from 'react-icons/fa';

const ProductComponent = ({ product }) => {
    const { t } = useTranslation();
    const { image, title, price } = product;

    return (
        <div class='col-6 col-md-5 col-lg-4 col-xl-3 mb-4'>
            <div class='card h-100'>
                <div className='card-image product-img'>
                    <img src={image} />
                </div>
                <div class='card-body p-0'>
                    <div class='card-heading'>{title}</div>
                </div>
                <div className='card-text'>{`$${price}`}</div>
                <div className='card-button'>
                    <FaShoppingCart className='mx-1' />
                    {`${t('purchase')}`}
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;
