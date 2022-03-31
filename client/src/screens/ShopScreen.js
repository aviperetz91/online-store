import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProducts, getCategories } from '../store/actions/productActions';
import { BY_RATING, BY_SELL, BY_ARRAIVAL, DESC, LIMIT } from '../store/constants/productsConstants';
import SpinnerComponent from '../components/SpinnerComponent';
import ProductComponent from '../components/ProductComponent';
import RadioComponent from '../components/RadioComponent';

const ShopScreen = () => {
    const dispatch = useDispatch();
    const { products, productsByRating, productsBySell, productsByArraival, categories, loadingProducts } = useSelector(
        (state) => state.product
    );
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState();
    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProducts(null, BY_RATING, DESC, LIMIT));
        dispatch(getProducts(null, BY_SELL, DESC, LIMIT));
        dispatch(getProducts(null, BY_ARRAIVAL, DESC, LIMIT));
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    const renderProducts = () => {
        if (searchInput !== '' && searchResults && searchResults.length > 0) {
            return searchResults.map((product) => <ProductComponent key={product._id} product={product} />);
        } else if (searchResults && searchResults.length === 0) {
            return <h4 className='mt-2'>{t('no-results')}</h4>;
        } else if (selectedCategoryId) {
            return products.map((product) => <ProductComponent key={product._id} product={product} />);
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
        const results = [...products].filter((product) => product.title.toLowerCase().includes(searchInput));
        setSearchResults(results);
    };

    const renderCategories = () => (
        <div className='mb-5'>
            <RadioComponent
                id='*'
                title={t('all-categories')}
                checked={selectedCategoryId === '*'}
                handleSelect={() => handleCategorySelect('*')}
            />
            {categories.map((category) => (
                <RadioComponent
                    key={category._id}
                    id={category._id}
                    title={category.title}
                    checked={selectedCategoryId === category._id}
                    handleSelect={() => handleCategorySelect(category._id)}
                />
            ))}
        </div>
    );

    const handleCategorySelect = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setSearchInput('');
        if (categoryId === '*') {
            dispatch(getProducts());
        } else {
            dispatch(getProducts(categoryId));
        }
    };

    const requriedData =
        products.length > 0 &&
        productsByRating.length > 0 &&
        productsBySell.length > 0 &&
        productsByArraival.length > 0 &&
        categories.length > 0;

    if (!requriedData) {
        return <SpinnerComponent height={'82vh'} />;
    } else {
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
                                    onChange={(e) => handleSearch(e.target.value)}
                                ></input>
                            </form>
                        </div>
                        <div className='fw-bold mb-2'>{t('filter-by-category')}</div>
                        {renderCategories()}
                    </div>
                    <div className='col-lg-9'>
                        <div className='row px-2'>
                            {loadingProducts ? <SpinnerComponent height={'72vh'} /> : renderProducts()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ShopScreen;
