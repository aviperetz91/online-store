import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/productActions';
import ProductComponent from '../components/ProductComponent';

const ShopScreen = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    console.log(products);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const renderProducts = () => {
        return products.map((product) => <ProductComponent key={product._id} product={product} />);
    };

    if (products && products.length > 0) {
        return (
            <div className='container mt-5'>
                <div className='row px-3'>{renderProducts()}</div>
            </div>
        );
    } else {
        return null;
    }
};

export default ShopScreen;
