import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProducts, getCategories } from '../store/actions/productActions';
import { BY_RATING, BY_SELL, BY_ARRAIVAL, DESC_ORDER, ALL_CATEGORIES } from '../store/constants/productsConstants';
import SpinnerComponent from '../components/SpinnerComponent';
import ProductComponent from '../components/ProductComponent';
import SelectComponent from '../components/SelectComponent';

const ShopScreen = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { products, categories, loadingProducts } = useSelector((state) => state.product);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState();
    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [selectedSortOption, setSelectedSortOption] = useState();
    const sortingOptions = [
        {
            id: BY_RATING,
            title: t('by-rating'),
            checked: selectedSortOption === BY_RATING,
            handleSelect: () => handleSortOptionSelect(BY_RATING),
        },
        {
            id: BY_SELL,
            title: t('by-sell'),
            checked: selectedSortOption === BY_SELL,
            handleSelect: () => handleSortOptionSelect(BY_SELL),
        },
        {
            id: BY_ARRAIVAL,
            title: t('by-arraival'),
            checked: selectedSortOption === BY_ARRAIVAL,
            handleSelect: () => handleSortOptionSelect(BY_ARRAIVAL),
        },
    ];

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    const renderProducts = () => {
        if (searchInput !== '' && searchResults && searchResults.length > 0) {
            return searchResults.map((product) => <ProductComponent key={product._id} product={product} />);
        } else if (searchResults && searchResults.length === 0) {
            return <h4 className='mt-2'>{t('no-results')}</h4>;
        } else {
            return products.map((product) => <ProductComponent key={product._id} product={product} />);
        }
    };

    const handleSearch = (searchInput) => {
        setSearchInput(searchInput);
        const results = [...products].filter((product) => product.title.toLowerCase().includes(searchInput));
        setSearchResults(results);
    };

    const renderCategories = () => (
        <div className='mb-4'>
            <SelectComponent
                id={ALL_CATEGORIES}
                title={t('all-categories')}
                type='radio'
                checked={!selectedCategoryId}
                handleSelect={() => handleCategorySelect(null)}
            />
            {categories.map((category) => (
                <SelectComponent
                    key={category._id}
                    id={category._id}
                    type='radio'
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
        dispatch(getProducts(categoryId, selectedSortOption, DESC_ORDER));
    };

    const renderSortOptions = () => (
        <div className='mb-4'>
            {sortingOptions.map((option) => (
                <SelectComponent
                    key={option.id}
                    id={option.id}
                    type='radio'
                    title={option.title}
                    checked={option.checked}
                    handleSelect={() => handleSortOptionSelect(option.id)}
                />
            ))}
        </div>
    );

    const handleSortOptionSelect = (option) => {
        setSelectedSortOption(option);
        dispatch(getProducts(selectedCategoryId, option, DESC_ORDER));
    };

    const requriedData = products.length > 0 && categories.length > 0;

    if (!requriedData) {
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
                        <div className='fw-bold my-1 mx-2'>{t('sorting-options')}</div>
                        {renderSortOptions()}
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
