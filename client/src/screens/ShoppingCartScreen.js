import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { PATHS, SIZES, PAGINATION } from '../config/consts';
import CartItemComponent from '../components/CartItemComponent';
import '../styles/shoppingCartStyle.scss';

const mapItemsToPages = (items, pagesNumber) => {
    const itemsToPages = {};
    let clone = structuredClone(items);
    let count;
    for (let i = 1; i <= pagesNumber; i++) {
        itemsToPages[i] = [];
        count = 0;
        for (let j = 0; j < clone.length; j++) {
            if (j < PAGINATION.PAGE_SIZE) {
                itemsToPages[i].push(clone[j]);
                count++;
            }
        }
        clone.splice(0, count);
    }
    return itemsToPages;
};

const ShoppingCartScreen = () => {
    const { i18n, t } = useTranslation();
    const { cartItems } = useSelector((state) => state.cart);
    const [activePage, setActivePage] = useState(1);
    const pagesNumber = Math.round(cartItems.length / PAGINATION.PAGE_SIZE);
    const itemsToPages = mapItemsToPages(cartItems, pagesNumber);
    const lang = i18n.language;

    let totalPrice = 0;
    let totalItems = 0;

    cartItems.forEach((item) => {
        totalItems += item.amount;
        totalPrice += item.price * item.amount;
    });

    const renderPagesIndexes = () => {
        const pages = [];
        pages.push(
            <li className='page-item' key={'prev'} onClick={() => handlePageChange(activePage - 1)}>
                <a className='page-link rounded-0' href='#' aria-label='Previous'>
                    <span aria-hidden='true'>&laquo;</span>
                </a>
            </li>
        );
        for (let key in itemsToPages) {
            pages.push(
                <li
                    key={key}
                    className={`page-item ${key == activePage ? 'active' : ''}`}
                    onClick={() => handlePageChange(key)}
                >
                    <a className='page-link rounded-0' href='#'>
                        {key}
                    </a>
                </li>
            );
        }
        pages.push(
            <li className='page-item' key={'next'} onClick={() => handlePageChange(activePage + 1)}>
                <a className='page-link rounded-0' href='#' aria-label='Previous'>
                    <span aria-hidden='true'>&raquo;</span>
                </a>
            </li>
        );
        return pages;
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= pagesNumber) {
            setActivePage(page);
        }
    };

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
                            {itemsToPages[activePage].map((item) => (
                                <CartItemComponent
                                    key={item._id}
                                    _id={item._id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    quantity={item.quantity}
                                    amount={item.amount}
                                />
                            ))}
                            <div className='back-to-shop d-none d-md-block'>
                                <Link to={PATHS.SHOP_SCREEN_PATH} className='btn my-0'>
                                    {lang === 'he' ? (
                                        <HiOutlineArrowNarrowRight className='text-dark' size={SIZES.ARROW_BACK_SIZE} />
                                    ) : (
                                        <HiOutlineArrowNarrowLeft className='text-dark' size={SIZES.ARROW_BACK_SIZE} />
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
                                        <div className='col'>{`${t('total-items')}: `}</div>
                                        <div className='col'>{totalItems}</div>
                                    </div>
                                </li>
                                <li className='list-group-item py-3'>
                                    <div className='row'>
                                        <div className='col'>{`${t('total-price')}: `}</div>
                                        <div className='col fw-bold'>
                                            {`${t('price-symbol')}${totalPrice.toFixed(2)}`}
                                        </div>
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
                                        <HiOutlineArrowNarrowRight className='text-dark' size={SIZES.ARROW_BACK_SIZE} />
                                    ) : (
                                        <HiOutlineArrowNarrowLeft className='text-dark' size={SIZES.ARROW_BACK_SIZE} />
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
                <div className='back-to-shop mt-4'>
                    <Link to={PATHS.SHOP_SCREEN_PATH} className='btn'>
                        {lang === 'he' ? (
                            <HiOutlineArrowNarrowRight className='text-dark' size={SIZES.ARROW_BACK_SIZE} />
                        ) : (
                            <HiOutlineArrowNarrowLeft className='text-dark' size={SIZES.ARROW_BACK_SIZE} />
                        )}
                    </Link>
                    <span className='text-muted'>{t('back-to-shop')} </span>
                </div>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <div className='row'>{renderCartItems()}</div>
                <nav aria-label='Page navigation example'>
                    <ul className='pagination justify-content-center'>{renderPagesIndexes()}</ul>
                </nav>
            </div>
        );
    }
};

export default ShoppingCartScreen;
