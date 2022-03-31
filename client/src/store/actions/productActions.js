import axios from 'axios';
import { API_URL } from '../../config/consts';
import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,
    GET_CATEGORY_LIST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAIL,
} from '../constants/productsConstants';

export const getProducts = (category, sortBy, order, limit) => {
    const categoryId = category ? category : '';
    const sortByValue = sortBy ? sortBy : '';
    const orderValue = order ? order : '';
    const limitValue = limit ? limit : '';
    return async (dispatch) => {
        try {
            dispatch({ type: GET_PRODUCT_LIST });
            const { data } = await axios.get(
                `${API_URL}/api/products?categoryId=${categoryId}&sortBy=${sortByValue}&order=${orderValue}&limit=${limitValue}`
            );
            dispatch({ type: GET_PRODUCT_LIST_SUCCESS, payload: data });
        } catch (error) {
            let message = error.message;
            if (error.response && error.response.data.message) {
                message = error.response.data.message;
            }
            dispatch({ type: GET_PRODUCT_LIST_FAIL, payload: message });
        }
    };
};

export const getCategories = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_CATEGORY_LIST });
            const { data } = await axios.get(`${API_URL}/api/categories`);
            dispatch({ type: GET_CATEGORY_LIST_SUCCESS, payload: data });
        } catch (error) {
            let message = error.message;
            if (error.response && error.response.data.message) {
                message = error.response.data.message;
            }
            dispatch({ type: GET_CATEGORY_LIST_FAIL, payload: message });
        }
    };
};
