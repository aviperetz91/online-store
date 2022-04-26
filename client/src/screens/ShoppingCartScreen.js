import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { PATHS, SIZES } from '../config/consts';
import CartItemComponent from '../components/CartItemComponent';
import '../styles/shoppingCartStyle.scss';

const ShoppingCartScreen = () => {
    const { i18n, t } = useTranslation();
    const { cartItems } = useSelector((state) => state.cart);
    const lang = i18n.language;

    let totalPrice = 0;
    cartItems.forEach((item) => (totalPrice += item.price));

    const renderCartItems = () => {
        return (
            <div className='shopping-cart'>
                <div className='card'>
                    <div className='row'>
                        <div className='col-md-8 cart'>
                            <div className='title'>
                                <div className='row'>
                                    <div className='col'>
                                        <h4>
                                            <b>{t('shopping-cart')}</b>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            {cartItems.map((item) => (
                                <CartItemComponent
                                    key={item._id}
                                    _id={item._id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                />
                            ))}
                            <div className='back-to-shop d-none d-md-block'>
                                <Link to={PATHS.SHOP_SCREEN_PATH} className='btn my-0'>
                                    {lang === 'he' ? (
                                        <HiOutlineArrowNarrowRight size={SIZES.ARROW_BACK_SIZE} color='black' />
                                    ) : (
                                        <HiOutlineArrowNarrowLeft size={SIZES.ARROW_BACK_SIZE} color='black' />
                                    )}
                                </Link>
                                <span className='text-muted'>{t('back-to-shop')} </span>
                            </div>
                        </div>
                        <div className='col-md-4 mt-3 mt-md-5'>
                            <ul className='list-group px-2 px-sm-0 mb-3'>
                                <li className='list-group-item py-3'>
                                    <div className='row'>
                                        <div className='col'>{`${t('total-products')}: `}</div>
                                        <div className='col'>{cartItems.length}</div>
                                    </div>
                                </li>
                                <li className='list-group-item py-3'>
                                    <div className='row'>
                                        <div className='col'>{`${t('total-price')}: `}</div>
                                        <div className='col fw-bold'>{`${t('price-symbol')}${totalPrice}`}</div>
                                    </div>
                                </li>
                                <li className='list-group-item py-3 d-flex justify-content-center'>
                                    <button onClick={() => {}} className='btn btn-primary btn-lg w-100 rounded-0'>
                                        {t('move-to-checkout')}
                                    </button>
                                </li>
                            </ul>
                            <div className='back-to-shop d-block d-md-none'>
                                <Link to={PATHS.SHOP_SCREEN_PATH} className='btn'>
                                    {lang === 'he' ? (
                                        <HiOutlineArrowNarrowRight size={SIZES.ARROW_BACK_SIZE} color='black' />
                                    ) : (
                                        <HiOutlineArrowNarrowLeft size={SIZES.ARROW_BACK_SIZE} color='black' />
                                    )}
                                </Link>
                                <span className='text-muted'>{t('back-to-shop')} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    if (cartItems.length === 0) {
        return (
            <div className='container'>
                <h4 className='mt-4'>{t('cart-empty')}</h4>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <div className='row'>{renderCartItems()}</div>
            </div>
        );
    }
};

export default ShoppingCartScreen;
