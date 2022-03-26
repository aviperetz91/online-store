import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProducts } from '../store/actions/productActions';
import { BY_RATING, BY_SELL, BY_ARRAIVAL, DESC, LIMIT } from '../store/constants/productsConstants';
import ProductComponent from '../components/ProductComponent';

const ShopScreen = () => {
    const dispatch = useDispatch();
    const { products, productsByRating, productsBySell, productsByArraival } = useSelector((state) => state.product);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setfilteredProducts] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProducts(BY_RATING, DESC, LIMIT));
        dispatch(getProducts(BY_SELL, DESC, LIMIT));
        dispatch(getProducts(BY_ARRAIVAL, DESC, LIMIT));
        dispatch(getProducts());
    }, [dispatch]);

    const renderProducts = () => {
        if (searchInput !== '' && filteredProducts && filteredProducts.length > 0) {
            return filteredProducts.map((product) => <ProductComponent key={product._id} product={product} />);
        } else if (filteredProducts && filteredProducts.length === 0) {
            return <h4 className='mt-2'>{t('no-results')}</h4>;
        } else {
            return (
                <>
                    <h3 className='mb-5'>{t('highest-rated')}</h3>
                    {productsByRating &&
                        productsByRating.length > 0 &&
                        productsByRating.map((product) => <ProductComponent key={product._id} product={product} />)}
                    <h3 className='my-5'>{t('most-popular')}</h3>
                    {productsBySell &&
                        productsBySell.length > 0 &&
                        productsBySell.map((product) => <ProductComponent key={product._id} product={product} />)}
                    <h3 className='my-5'>{t('latest-products')}</h3>
                    {productsByArraival &&
                        productsByArraival.length > 0 &&
                        productsByArraival.map((product) => <ProductComponent key={product._id} product={product} />)}
                </>
            );
        }
    };

    const handleSearch = (searchInput) => {
        setSearchInput(searchInput);
        const filtered = [...products].filter((product) => product.title.toLowerCase().includes(searchInput));
        setfilteredProducts(filtered);
    };

    if (products && products.length > 0) {
        return (
            <div className='px-3 px-lg-5 py-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='row px-3'>
                            <form className='form-inline my-2 my-lg-0'>
                                <input
                                    className='form-control form-control-lg mb-3'
                                    placeholder={t('search-product')}
                                    value={searchInput}
                                    onChange={(e) => {
                                        handleSearch(e.target.value);
                                    }}
                                ></input>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                        <div className='row px-2'>{renderProducts()}</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        );
    }
};

export default ShopScreen;
