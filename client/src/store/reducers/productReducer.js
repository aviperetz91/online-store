import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,
    BY_RATING,
    BY_SELL,
    BY_ARRAIVAL,
    PRODUCTS_KEY,
    PRODUCTS_BY_RATING_KEY,
    PRODUCTS_BY_SELL_KEY,
    PRODUCTS_BY_ARRAIVAL_KEY,
} from '../constants/productsConstants';

const initialState = {
    productsByRating: [],
    productsBySell: [],
    productsByArraival: [],
    products: [],
    loading: false,
    error: undefined,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return { ...state, loading: true };
        case GET_PRODUCT_LIST_SUCCESS:
            const key = getKey(action.productsBy);
            return {
                ...state,
                loading: false,
                [key]: action.payload,
            };
        case GET_PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const getKey = (productsBy) => {
    let key;
    if (productsBy === BY_RATING) {
        key = PRODUCTS_BY_RATING_KEY;
    } else if (productsBy === BY_SELL) {
        key = PRODUCTS_BY_SELL_KEY;
    } else if (productsBy === BY_ARRAIVAL) {
        key = PRODUCTS_BY_ARRAIVAL_KEY;
    } else {
        key = PRODUCTS_KEY;
    }
    return key;
};

export default productReducer;
