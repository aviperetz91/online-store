import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getProducts, getCategories } from '../store/actions/productActions';
import { PRODUCT_PARAMS, DEFAULT_RADIO, PATHS } from '../config/consts';
import prices from '../mock/pricesMock';
import sortingOptions from '../mock/sortingOptionsMock';
import SpinnerComponent from '../components/SpinnerComponent';
import CardComponent from '../components/CardComponent';
import SelectComponent from '../components/SelectComponent';
import ModalComponent from '../components/ModalComponent';

const ShopScreen = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, categories, loadingProducts, cartItems } = useSelector((state) => state.product);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState();
    const [selectedValues, setSelectedValues] = useState({
        selectedCategoryId: undefined,
        selectedPriceId: undefined,
        selectedSortingOptionId: undefined,
    });
    const [showAddedProductModal, setShowAddedProductModal] = useState(false);
    const { selectedCategoryId, selectedPriceId, selectedSortingOptionId } = selectedValues;
    const requriedData = products.length > 0 && categories.length > 0;

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        if (selectedCategoryId || selectedPriceId || selectedSortingOptionId) {
            dispatch(
                getProducts(selectedCategoryId, selectedPriceId, selectedSortingOptionId, PRODUCT_PARAMS.DESC_ORDER)
            );
        } else {
            dispatch(getProducts());
        }
    }, [dispatch, selectedCategoryId, selectedPriceId, selectedSortingOptionId]);

    const renderProducts = () => {
        if (searchInput !== '' && searchResults && searchResults.length > 0) {
            return searchResults.map((product) => (
                <CardComponent key={product._id} product={product} openModal={openAddedProductModal} />
            ));
        } else if (searchInput !== '' && searchResults && searchResults.length === 0) {
            return <h4 className='mt-2'>{t('no-results')}</h4>;
        } else if (!requriedData && (selectedCategoryId || selectedPriceId || selectedSortingOptionId)) {
            return <h4 className='mt-2'>{t('no-results')}</h4>;
        } else {
            return products.map((product) => (
                <CardComponent key={product._id} product={product} openModal={openAddedProductModal} />
            ));
        }
    };

    const renderCategories = () => (
        <div className='mb-4'>
            <SelectComponent
                _id={DEFAULT_RADIO.ALL_CATEGORIES}
                title={t('all-categories')}
                type='radio'
                checked={!selectedCategoryId}
                handleSelect={() => handleSelect('selectedCategoryId', null)}
            />
            {categories.map((category) => (
                <SelectComponent
                    key={category._id}
                    _id={category._id}
                    type='radio'
                    title={category.title}
                    checked={selectedCategoryId === category._id}
                    handleSelect={() => handleSelect('selectedCategoryId', category._id)}
                />
            ))}
        </div>
    );

    const renderPrices = () => (
        <div className='mb-4'>
            <SelectComponent
                _id={DEFAULT_RADIO.ALL_PRICES}
                title={t('all-prices')}
                type='radio'
                checked={!selectedPriceId}
                handleSelect={() => handleSelect('selectedPriceId', null)}
            />
            {prices.map((priceRange) => (
                <SelectComponent
                    key={priceRange._id}
                    _id={priceRange._id}
                    type='radio'
                    title={t(priceRange._id)}
                    checked={selectedPriceId === priceRange._id}
                    handleSelect={() => handleSelect('selectedPriceId', priceRange._id)}
                />
            ))}
        </div>
    );

    const renderSortingOptions = () => (
        <div className='mb-4'>
            <SelectComponent
                _id={DEFAULT_RADIO.ALL_SORTING_OPTIONS}
                title={t('all-sorting-options')}
                type='radio'
                checked={!selectedSortingOptionId}
                handleSelect={() => handleSelect('selectedSortingOptionId', null)}
            />
            {sortingOptions.map((option) => (
                <SelectComponent
                    key={option._id}
                    _id={option._id}
                    type='radio'
                    title={t(option.title)}
                    checked={selectedSortingOptionId === option._id}
                    handleSelect={() => handleSelect('selectedSortingOptionId', option._id)}
                />
            ))}
        </div>
    );

    const handleSearch = (searchInput) => {
        setSearchInput(searchInput);
        const results = [...products].filter((product) => product.title.toLowerCase().includes(searchInput));
        setSearchResults(results);
    };

    const handleSelect = (key, value) => {
        setSearchInput('');
        setSelectedValues({
            ...selectedValues,
            [key]: value,
        });
    };

    const openAddedProductModal = () => {
        setShowAddedProductModal(true);
    };

    const closeAddedProductModal = () => {
        setShowAddedProductModal(false);
    };

    const goToCart = () => {
        closeAddedProductModal();
        navigate(PATHS.CART_SCREEN_PATH);
    };

    if (!requriedData && !selectedCategoryId && !selectedPriceId && !selectedSortingOptionId) {
        return <SpinnerComponent height={'82vh'} />;
    } else {
        return (
            <div className='px-3 px-lg-5 py-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='row px-3'>
                            <form className='form-inline my-2 my-lg-0 px-0'>
                                <input
                                    className='form-control form-control-lg mb-3'
                                    placeholder={t('search-product')}
                                    value={searchInput}
                                    onChange={(e) => handleSearch(e.target.value)}
                                ></input>
                            </form>
                        </div>
                        <div className='fw-bold my-1 mx-2'>{t('filter-by-category')}</div>
                        {renderCategories()}
                        <div className='fw-bold my-1 mx-2'>{t('filter-by-price')}</div>
                        {renderPrices()}
                        <div className='fw-bold my-1 mx-2'>{t('sorting-options')}</div>
                        {renderSortingOptions()}
                    </div>
                    <div className='col-lg-9'>
                        <div className='row px-2'>
                            {loadingProducts ? <SpinnerComponent height={'72vh'} /> : renderProducts()}
                        </div>
                    </div>
                </div>
                <ModalComponent
                    show={showAddedProductModal}
                    title={t('cart')}
                    body={t('product-added')}
                    btnPrimaryText={t('go-to-cart')}
                    btnPrimaryHandler={goToCart}
                    btnSecondaryText={t('continue-shopping')}
                    btnSecondaryHandler={closeAddedProductModal}
                    handleClose={closeAddedProductModal}
                />
            </div>
        );
    }
};

export default ShopScreen;
