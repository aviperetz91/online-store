import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProducts } from '../store/actions/productActions';
import ProductComponent from '../components/ProductComponent';

const ShopScreen = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setfilteredProducts] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const renderProducts = () => {
        const productList = filteredProducts ? filteredProducts : products;
        if (productList && productList.length > 0) {
            return productList.map((product) => <ProductComponent key={product._id} product={product} />);
        } else {
            return <h4 className='mt-2'>{t('no-results')}</h4>;
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
                                    placeholder='הזן מוצר לחיפוש'
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
                <div class='spinner-border' role='status'>
                    <span class='visually-hidden'>Loading...</span>
                </div>
            </div>
        );
    }
};

export default ShopScreen;
