import { GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAIL } from '../constants/productsConstants';

const initialState = {
    products: [],
    loading: false,
    error: undefined,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return { loading: true, products: [] };
        case GET_PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case GET_PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export default productReducer;
