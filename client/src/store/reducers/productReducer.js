import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,
    GET_CATEGORY_LIST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAIL,
} from '../constants/productsConstants';

const initialState = {
    products: [],
    categories: [],
    loadingProducts: false,
    loadingCategories: false,
    error: undefined,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return { ...state, loadingProducts: true };
        case GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loadingProducts: false,
                products: action.payload,
            };
        case GET_PRODUCT_LIST_FAIL:
            return {
                ...state,
                loadingProducts: false,
                error: action.payload,
            };
        case GET_CATEGORY_LIST:
            return { ...state, loadingCategories: true };
        case GET_CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                loadingCategories: false,
                categories: action.payload,
            };
        case GET_CATEGORY_LIST_FAIL:
            return {
                ...state,
                loadingCategories: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
