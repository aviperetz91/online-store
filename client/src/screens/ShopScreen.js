import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/productActions';

const ShopScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <div>Shop Screen!</div>;
};

export default ShopScreen;
